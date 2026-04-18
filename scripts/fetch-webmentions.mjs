#!/usr/bin/env node
// Fetch webmentions from webmention.io and cache them at src/data/webmentions.json.
// No-ops (not an error) if WEBMENTION_IO_TOKEN is not set — so local dev & PR CI
// keep working without the secret.

import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const DOMAIN = process.env.WEBMENTION_DOMAIN || 'ronbronson.com';
const TOKEN = process.env.WEBMENTION_IO_TOKEN;

const here = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(here, '../src/data/webmentions.json');

async function main() {
  if (!TOKEN) {
    console.log('[webmentions] WEBMENTION_IO_TOKEN not set — skipping fetch (using empty cache).');
    ensureEmpty();
    return;
  }

  const endpoint = `https://webmention.io/api/mentions.jf2?domain=${encodeURIComponent(DOMAIN)}&token=${encodeURIComponent(TOKEN)}&per-page=999`;

  let data;
  try {
    const res = await fetch(endpoint);
    if (!res.ok) {
      console.warn(`[webmentions] webmention.io returned ${res.status} — using empty cache.`);
      ensureEmpty();
      return;
    }
    data = await res.json();
  } catch (err) {
    console.warn('[webmentions] fetch failed — using empty cache.', err?.message ?? err);
    ensureEmpty();
    return;
  }

  const children = Array.isArray(data?.children) ? data.children : [];
  const grouped = {};

  for (const m of children) {
    const target = m['wm-target'];
    if (!target) continue;
    let path;
    try {
      path = new URL(target).pathname;
    } catch {
      continue;
    }
    if (!path.endsWith('/')) path += '/';
    (grouped[path] ||= []).push(m);
  }

  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, JSON.stringify(grouped, null, 2));
  const totalPages = Object.keys(grouped).length;
  console.log(`[webmentions] cached ${children.length} mentions across ${totalPages} pages → ${outPath}`);
}

function ensureEmpty() {
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, '{}\n');
}

main();
