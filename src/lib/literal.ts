// Reading data from Literal.club's public GraphQL API.
// Literal is the curated source of truth for reading order; unlike a freshly
// imported shelf, the "Read" list comes back in the order books were actually
// finished, so we preserve the API order rather than re-sorting.

export interface LiteralBook {
  title: string;
  subtitle?: string;
  authors: string;
  cover?: string;
  url: string;
}

interface LiteralResponse {
  reading: LiteralBook[];
  finished: LiteralBook[];
}

const ENDPOINT = 'https://api.literal.club/graphql/';
const HANDLE = 'ron';

// How many finished books to surface. Full history isn't the point here —
// this is a rolling log of recent references.
const FINISHED_LIMIT = 24;
const READING_LIMIT = 24;

interface RawBook {
  title: string;
  subtitle?: string | null;
  slug: string;
  cover?: string | null;
  authors?: { name: string }[] | null;
}

async function gql<T>(query: string, variables: Record<string, unknown>): Promise<T | null> {
  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables }),
    });
    if (!res.ok) {
      console.error(`[literal] API returned ${res.status}.`);
      return null;
    }
    const json = await res.json() as { data?: T; errors?: unknown };
    if (json.errors) {
      console.error('[literal] GraphQL errors:', JSON.stringify(json.errors));
      return null;
    }
    return json.data ?? null;
  } catch (err) {
    console.error('[literal] fetch failed.', err);
    return null;
  }
}

function toBook(raw: RawBook): LiteralBook {
  // Some covers (e.g. Google Books) come back as http; upgrade so they don't
  // get blocked as mixed content on the https site.
  const cover = raw.cover ? raw.cover.replace(/^http:\/\//, 'https://') : undefined;
  return {
    title: raw.title,
    subtitle: raw.subtitle ?? undefined,
    authors: (raw.authors ?? []).map((a) => a.name).join(', '),
    cover,
    url: `https://literal.club/book/${raw.slug}`,
  };
}

const BOOKS_QUERY = `
  query BooksByState($status: ReadingStatus!, $profileId: String!, $limit: Int!) {
    booksByReadingStateAndProfile(limit: $limit, offset: 0, readingStatus: $status, profileId: $profileId) {
      title
      subtitle
      slug
      cover
      authors { name }
    }
  }
`;

export async function getLiteral(): Promise<LiteralResponse> {
  const profileData = await gql<{ profileByHandle?: { id: string } }>(
    'query Profile($handle: String!) { profileByHandle(handle: $handle) { id } }',
    { handle: HANDLE },
  );
  const profileId = profileData?.profileByHandle?.id;
  if (!profileId) {
    console.error('[literal] could not resolve profile — rendering empty.');
    return { reading: [], finished: [] };
  }

  const [readingData, finishedData] = await Promise.all([
    gql<{ booksByReadingStateAndProfile: RawBook[] }>(BOOKS_QUERY, {
      status: 'IS_READING',
      profileId,
      limit: READING_LIMIT,
    }),
    gql<{ booksByReadingStateAndProfile: RawBook[] }>(BOOKS_QUERY, {
      status: 'FINISHED',
      profileId,
      limit: FINISHED_LIMIT,
    }),
  ]);

  return {
    reading: (readingData?.booksByReadingStateAndProfile ?? []).map(toBook),
    finished: (finishedData?.booksByReadingStateAndProfile ?? []).map(toBook),
  };
}
