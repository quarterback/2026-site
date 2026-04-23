import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case "'": return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}

export async function GET(context: APIContext) {
  const site = context.site ?? new URL('https://ronbronson.com');
  const notes = await getCollection('notes', ({ data }) => !data.draft);
  const sorted = notes.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  const items = sorted.map((note) => {
    const url = new URL(`/notes/${note.slug}/`, site).toString();
    const title = note.data.title ?? 'Note';
    const pubDate = note.data.date.toUTCString();
    const body = escapeXml(note.body ?? '');
    return `    <item>
      <title>${escapeXml(title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${body}</description>
    </item>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Ron Bronson — Notes</title>
    <link>${new URL('/notes/', site).toString()}</link>
    <atom:link href="${new URL('/notes.xml', site).toString()}" rel="self" type="application/rss+xml" />
    <description>What Ron Bronson is working on — short, dated entries about talks, teaching, pilots, and field notes.</description>
    <language>en-us</language>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
