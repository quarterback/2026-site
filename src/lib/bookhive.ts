export interface BookhiveBook {
  title: string;
  authors: string;
  stars?: number;
  finishedAt?: string;
  startedAt?: string;
  hiveId: string;
}

interface BookhiveResponse {
  reading: BookhiveBook[];
  finished: BookhiveBook[];
}

// Hardcoded because these are stable identity anchors. If Ron moves PDS,
// resolve the handle again and update.
const DID = 'did:plc:odgxwakrg5r2zjetnrkxuh5c';
const PDS = 'https://amanita.us-east.host.bsky.network';
const COLLECTION = 'buzz.bookhive.book';

interface Record {
  uri: string;
  value: {
    title: string;
    authors: string;
    hiveId: string;
    status?: string;
    stars?: number;
    startedAt?: string;
    finishedAt?: string;
    createdAt?: string;
  };
}

export async function getBookhive(): Promise<BookhiveResponse> {
  const url = `${PDS}/xrpc/com.atproto.repo.listRecords?repo=${encodeURIComponent(DID)}&collection=${encodeURIComponent(COLLECTION)}&limit=100`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`[bookhive] PDS returned ${res.status} — rendering empty.`);
      return { reading: [], finished: [] };
    }
    const data = await res.json() as { records?: Record[] };
    const records = Array.isArray(data.records) ? data.records : [];

    const reading: BookhiveBook[] = [];
    const finished: BookhiveBook[] = [];

    for (const r of records) {
      const v = r.value;
      const book: BookhiveBook = {
        title: v.title,
        authors: v.authors,
        hiveId: v.hiveId,
        stars: v.stars,
        finishedAt: v.finishedAt,
        startedAt: v.startedAt,
      };

      if (v.status === 'buzz.bookhive.defs#reading') {
        reading.push(book);
      } else if (v.status === 'buzz.bookhive.defs#finished') {
        finished.push(book);
      }
    }

    finished.sort((a, b) => {
      const da = a.finishedAt ?? '';
      const db = b.finishedAt ?? '';
      return db.localeCompare(da);
    });

    reading.sort((a, b) => {
      const da = a.startedAt ?? '';
      const db = b.startedAt ?? '';
      return db.localeCompare(da);
    });

    return { reading, finished };
  } catch (err) {
    console.error('[bookhive] fetch failed — rendering empty.', err);
    return { reading: [], finished: [] };
  }
}
