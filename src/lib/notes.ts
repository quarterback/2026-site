import { getCollection } from 'astro:content';
import { getBlueskyNotes } from './bluesky';

export type NoteKind = 'markdown' | 'bluesky';

export interface MergedNote {
  kind: NoteKind;
  date: Date;
  title?: string; // markdown only
  body?: string; // bluesky text, or a fallback first-line for untitled markdown
  url: string; // internal slug URL for markdown; external bsky.app URL for bluesky
  external: boolean;
  image?: string; // markdown only for now
  image_alt?: string;
}

function firstLine(raw: string | undefined): string {
  if (!raw) return '';
  const line = raw.split('\n').find(l => l.trim().length > 0) ?? '';
  return line.trim();
}

export async function getMergedNotes(): Promise<MergedNote[]> {
  const markdownEntries = await getCollection('notes', ({ data }) => !data.draft);

  const markdownNotes: MergedNote[] = markdownEntries.map(entry => ({
    kind: 'markdown',
    date: entry.data.date,
    title: entry.data.title,
    body: entry.data.title ? undefined : firstLine(entry.body),
    url: `/now/${entry.slug}/`,
    external: false,
    image: entry.data.image,
    image_alt: entry.data.image_alt,
  }));

  const bluesky = await getBlueskyNotes();
  const blueskyNotes: MergedNote[] = bluesky.map(p => ({
    kind: 'bluesky',
    date: p.date,
    body: p.text,
    url: p.url,
    external: true,
  }));

  const all = [...markdownNotes, ...blueskyNotes];
  all.sort((a, b) => b.date.getTime() - a.date.getTime());
  return all;
}
