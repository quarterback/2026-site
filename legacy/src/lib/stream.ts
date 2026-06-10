import { fetchRSS } from './rss';

export interface StreamItem {
  type: 'post';
  title: string;
  url: string;
  external: boolean;
  date: Date;
  source: string;
  excerpt?: string;
}

interface Source {
  url: string;
  label: string;
  maxItems?: number;
}

const sources: Source[] = [
  { url: 'https://makingpublicwork.com/rss/', label: 'makingpublicwork.com' },
  { url: 'https://blog.ronbronson.com/feed.rss', label: 'blog.ronbronson.com' },
  { url: 'https://gamedesign.leaflet.pub/rss', label: 'gamedesign.leaflet.pub', maxItems: 1 },
];

export async function getHomepageStream(limit = 12): Promise<StreamItem[]> {
  const perSource = await Promise.all(
    sources.map(async source => {
      try {
        const items = await fetchRSS(source.url);
        const capped = source.maxItems ? items.slice(0, source.maxItems) : items;
        return capped.map<StreamItem>(item => ({
          type: 'post',
          title: item.title,
          url: item.url,
          external: true,
          date: item.date,
          source: source.label,
          excerpt: item.excerpt,
        }));
      } catch (error) {
        console.error(`Failed to fetch stream source ${source.url}:`, error);
        return [];
      }
    })
  );

  const all = perSource.flat();
  all.sort((a, b) => b.date.getTime() - a.date.getTime());

  const seen = new Set<string>();
  const deduped = all.filter(item => {
    const key = normalizeTitle(item.title);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  return deduped.slice(0, limit);
}

function normalizeTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim();
}
