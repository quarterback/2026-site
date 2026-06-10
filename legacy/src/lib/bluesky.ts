export interface BlueskyNote {
  type: 'bluesky';
  text: string;
  date: Date;
  url: string;
  uri: string;
}

// Ron's Bluesky handle. Posts tagged with AMPLIFY_TAG get pulled into the site.
const HANDLE = 'ronbronson.com';
const AMPLIFY_TAG = '#site';

interface FeedResponse {
  feed?: Array<{
    post: {
      uri: string;
      author: { handle: string };
      record: {
        $type: string;
        text: string;
        createdAt: string;
      };
    };
    reply?: unknown;
    reason?: unknown;
  }>;
}

function postUrlFromUri(uri: string, handle: string): string {
  // at://did:plc:xxx/app.bsky.feed.post/rkey → https://bsky.app/profile/handle/post/rkey
  const rkey = uri.split('/').pop();
  return `https://bsky.app/profile/${handle}/post/${rkey}`;
}

function stripAmplifyTag(text: string): string {
  const re = new RegExp(`\\s*${AMPLIFY_TAG.replace('#', '#')}(?=\\s|$)`, 'gi');
  return text.replace(re, '').trim();
}

export async function getBlueskyNotes(limit = 50): Promise<BlueskyNote[]> {
  const url = `https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=${encodeURIComponent(HANDLE)}&limit=${limit}&filter=posts_no_replies`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`[bluesky] AppView returned ${res.status} — skipping.`);
      return [];
    }
    const data = (await res.json()) as FeedResponse;
    const feed = Array.isArray(data.feed) ? data.feed : [];

    const notes: BlueskyNote[] = [];
    for (const entry of feed) {
      // Skip reposts (they have a .reason).
      if (entry.reason) continue;
      const post = entry.post;
      if (!post?.record || post.record.$type !== 'app.bsky.feed.post') continue;

      const text = post.record.text ?? '';
      if (!text.toLowerCase().includes(AMPLIFY_TAG.toLowerCase())) continue;

      notes.push({
        type: 'bluesky',
        text: stripAmplifyTag(text),
        date: new Date(post.record.createdAt),
        url: postUrlFromUri(post.uri, post.author.handle),
        uri: post.uri,
      });
    }

    return notes;
  } catch (err) {
    console.error('[bluesky] fetch failed — skipping.', err);
    return [];
  }
}
