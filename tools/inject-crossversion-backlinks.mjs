// Add bidirectional back-links to /versions/<Class>.md pages.
// Each cross-version page gets a "Back to class reference" block pointing to
// every available version/lang doc, with duplicates collapsed to one canonical
// area per version/lang. This fixes the "跳过去回不来" problem where
// /versions/X becomes a dead-end.
//
// Idempotent: uses a sentinel. Re-running updates stale blocks.
//
// Usage:  node tools/inject-crossversion-backlinks.mjs

import { readFileSync, writeFileSync, readdirSync, existsSync, statSync } from 'fs';
import { join, dirname, sep } from 'path';

const docsRoot = join(import.meta.dirname, '..', 'docs');
const versionsDir = join(docsRoot, 'versions');
const versions = ['v1.3.0', 'v1.3.15', 'v1.4.5'];

const SENTINEL = '<!-- BEGIN CROSSVERSION-BACKLINK -->';

// ── Build a map of className → version/lang/area links ──
const classToLinks = new Map();
function preferLink(current, incoming) {
  if (!current) return incoming;
  if (current.area.includes('-ext') && !incoming.area.includes('-ext')) return incoming;
  return current;
}
function scanArea(version, lang, dir) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    let s; try { s = statSync(p); } catch { continue; }
    if (s.isDirectory()) scanArea(version, lang, p);
    else if (e.endsWith('.md') && e !== 'index.md') {
      const cls = e.slice(0, -3);
      const area = dirname(p).split(sep).pop();
      if (!classToLinks.has(cls)) classToLinks.set(cls, new Map());
      const key = `${version}|${lang}`;
      const existing = classToLinks.get(cls).get(key);
      classToLinks.get(cls).set(key, preferLink(existing, { version, lang, area }));
    }
  }
}

for (const version of versions) {
  for (const lang of ['zh', 'en']) {
    const apiDir = join(docsRoot, version, lang, 'api');
    if (existsSync(apiDir)) scanArea(version, lang, apiDir);
  }
}

let stats = { scanned: 0, modified: 0, updated: 0, noArea: 0 };

for (const f of readdirSync(versionsDir)) {
  if (!f.endsWith('.md') || f === 'index.md') continue;
  stats.scanned++;
  const cls = f.slice(0, -3);
  const links = classToLinks.has(cls) ? [...classToLinks.get(cls).values()] : [];
  if (!links.length) { stats.noArea++; continue; }

  const fp = join(versionsDir, f);
  let raw = readFileSync(fp, 'utf8');

  const backLinkBlock = [
    SENTINEL,
    ``,
    `## 返回类参考 / Back to Class Reference`,
    ``,
    `| 版本 Version | 语言 Lang | 链接 |`,
    `|------|------|------|`,
    ...links.map((link) => `| ${link.version} | ${link.lang === 'zh' ? '🇨🇳 中文' : '🇬🇧 English'} | [${link.version} ${cls}](/${link.version}/${link.lang}/api/${link.area}/${cls}) |`),
    ``,
    `<!-- END CROSSVERSION-BACKLINK -->`,
    ``,
  ].join('\n');

  // Strip existing block if present (idempotent)
  let body = raw;
  const startIdx = body.indexOf(SENTINEL);
  let hadStale = false;
  if (startIdx !== -1) {
    const endMarker = '<!-- END CROSSVERSION-BACKLINK -->';
    const endIdx = body.indexOf(endMarker, startIdx);
    if (endIdx !== -1) {
      let removeEnd = endIdx + endMarker.length;
      if (body[removeEnd] === '\n') removeEnd++;
      if (body[removeEnd] === '\n') removeEnd++;
      body = body.slice(0, startIdx) + body.slice(removeEnd);
      hadStale = true;
    }
  }

  // Append the back-link block at the END of the file (after all content).
  // Trim trailing whitespace/newlines, then add block.
  body = body.replace(/\s+$/, '');
  const injected = body + '\n\n' + backLinkBlock;

  if (injected !== raw) {
    writeFileSync(fp, injected, 'utf8');
    if (hadStale) stats.updated++; else stats.modified++;
  }
}

console.log('=== inject-crossversion-backlinks.mjs ===');
console.log('Classes mapped to links:', classToLinks.size);
console.log('Cross-version pages scanned:', stats.scanned);
console.log('Modified (new back-link):', stats.modified);
console.log('Updated (replaced stale):', stats.updated);
console.log('No area found (skipped):', stats.noArea);
