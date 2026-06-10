interface RSSItem {
  title: string;
  url: string;
  date: Date;
  excerpt?: string;
}

function extractTextBetweenTags(xml: string, tag: string): string {
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\/${tag}>`, 'i');
  const match = xml.match(regex);
  if (!match) return '';

  let content = match[1].trim();

  // Handle CDATA sections
  const cdataRegex = /<!\[CDATA\[([\s\S]*?)\]\]>/;
  const cdataMatch = content.match(cdataRegex);
  if (cdataMatch) {
    content = cdataMatch[1].trim();
  }

  return content;
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim();
}

export async function fetchRSS(feedUrl: string): Promise<RSSItem[]> {
  try {
    const response = await fetch(feedUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; RSSReader/1.0)'
      }
    });
    if (!response.ok) {
      console.error(`Failed to fetch ${feedUrl}: HTTP ${response.status}`);
      return [];
    }
    const text = await response.text();

    const itemRegex = /<item>([\s\S]*?)<\/item>/gi;
    const items = [...text.matchAll(itemRegex)];

    return items.map(match => {
      const itemXml = match[1];
      const title = extractTextBetweenTags(itemXml, 'title');
      const link = extractTextBetweenTags(itemXml, 'link');
      const pubDate = extractTextBetweenTags(itemXml, 'pubDate');
      const description = extractTextBetweenTags(itemXml, 'description');

      const cleanDescription = stripHtml(description);
      const excerpt = cleanDescription.length > 150
        ? cleanDescription.slice(0, 150) + '...'
        : cleanDescription;

      return {
        title: stripHtml(title),
        url: link.trim(),
        date: pubDate ? new Date(pubDate) : new Date(),
        excerpt: excerpt || undefined,
      };
    }).filter(item => item.title && item.url);
  } catch (error) {
    console.error(`Failed to fetch RSS from ${feedUrl}:`, error);
    return [];
  }
}

export async function fetchMultipleRSS(feedUrls: string[]): Promise<RSSItem[]> {
  const results = await Promise.all(feedUrls.map(url => fetchRSS(url)));
  const combined = results.flat();

  return combined.sort((a, b) => b.date.getTime() - a.date.getTime());
}
