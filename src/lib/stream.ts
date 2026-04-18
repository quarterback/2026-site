import { getCollection } from 'astro:content';
import { fetchMultipleRSS } from './rss';

export interface StreamItem {
  type: 'note' | 'essay' | 'post';
  title: string;
  url: string;
  external: boolean;
  date: Date;
  source: string;
  tags?: string[];
  excerpt?: string;
}

const rssFeeds = [
  'https://makingpublicwork.com/rss/',
  'https://blog.ronbronson.com/feed.rss',
];

function hostname(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return '';
  }
}

export async function getHomepageStream(limit = 12): Promise<StreamItem[]> {
  const notesCol = await getCollection('notes', ({ data }) => !data.draft);
  const essaysCol = await getCollection('essays', ({ data }) => !data.draft);

  const notes: StreamItem[] = notesCol.map(entry => ({
    type: 'note',
    title: entry.data.title ?? entry.slug,
    url: `/notes/${entry.slug}/`,
    external: false,
    date: entry.data.date,
    source: 'ronbronson.com',
    tags: entry.data.tags,
    excerpt: entry.body?.split('\n').find(line => line.trim().length > 0)?.trim(),
  }));

  const essays: StreamItem[] = essaysCol.map(entry => ({
    type: 'essay',
    title: entry.data.title,
    url: `/essays/${entry.slug}/`,
    external: false,
    date: entry.data.date,
    source: 'ronbronson.com',
    excerpt: entry.body?.split('\n').find(line => line.trim().length > 0)?.trim(),
  }));

  let posts: StreamItem[] = [];
  try {
    const rss = await fetchMultipleRSS(rssFeeds);
    posts = rss.map(item => ({
      type: 'post',
      title: item.title,
      url: item.url,
      external: true,
      date: item.date,
      source: hostname(item.url),
      excerpt: item.excerpt,
    }));
  } catch (error) {
    console.error('Failed to fetch RSS for stream:', error);
  }

  const all = [...notes, ...essays, ...posts];
  all.sort((a, b) => b.date.getTime() - a.date.getTime());
  return all.slice(0, limit);
}
