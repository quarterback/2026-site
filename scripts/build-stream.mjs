// Regenerates data/stream.json from the RSS feeds that feed the homepage
// "Some Thoughts" list. RSS hosts don't send CORS headers, so the browser
// can't read them directly — instead a scheduled GitHub Action runs this and
// commits the JSON, which the page fetches same-origin. Mirrors the original
// Astro stream logic: newest-first across sources, deduped by title, top N,
// with gamedesign capped to its single most-recent post.
import { writeFile, mkdir } from "node:fs/promises";

const SOURCES = [
  { url: "https://makingpublicwork.com/rss/", label: "makingpublicwork.com" },
  { url: "https://blog.ronbronson.com/feed.rss", label: "blog.ronbronson.com" },
  { url: "https://gamedesign.leaflet.pub/rss", label: "gamedesign.leaflet.pub", maxItems: 1 },
];
const LIMIT = 6;

function parse(xml) {
  const items = [];
  const re = /<item[^>]*>([\s\S]*?)<\/item>/g;
  let m;
  while ((m = re.exec(xml))) {
    const block = m[1];
    const pick = (tag) => {
      const r = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`));
      return r ? r[1].replace(/<!\[CDATA\[|\]\]>/g, "").trim() : "";
    };
    items.push({ title: pick("title"), url: pick("link"), date: new Date(pick("pubDate")) });
  }
  return items;
}

const norm = (t) => t.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim();

async function fetchSource(src) {
  try {
    const res = await fetch(src.url, { headers: { "User-Agent": "ronbronson.design/feed-builder" } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    let items = parse(await res.text());
    if (src.maxItems) items = items.slice(0, src.maxItems);
    return items.map((it) => ({ ...it, source: src.label }));
  } catch (err) {
    console.error(`[stream] ${src.url} failed: ${err.message}`);
    return [];
  }
}

const all = (await Promise.all(SOURCES.map(fetchSource))).flat();
all.sort((a, b) => b.date - a.date);

const seen = new Set();
const deduped = all.filter((it) => {
  const k = norm(it.title);
  if (seen.has(k)) return false;
  seen.add(k);
  return true;
});

const out = deduped.slice(0, LIMIT).map((it) => ({ title: it.title, url: it.url, source: it.source }));

await mkdir("data", { recursive: true });
await writeFile("data/stream.json", JSON.stringify(out, null, 2) + "\n");
console.log(`[stream] wrote data/stream.json with ${out.length} items`);
