// Add bidirectional back-links to /versions/<Class>.md pages.
// Each cross-version page gets a "Back to v1.3.15 class reference" block
// pointing to the zh and en class doc. This fixes the "跳过去回不来" problem
// where /versions/X is a dead-end with no way back to the main API docs.
//
// Idempotent: uses a sentinel. Re-running updates stale blocks.
//
// Usage:  node tools/inject-crossversion-backlinks.mjs

import { readFileSync, writeFileSync, readdirSync, existsSync, statSync } from 'fs';
import { join, dirname, sep } from 'path';

const docsRoot = join(import.meta.dirname, '..', 'docs');
const versionsDir = join(docsRoot, 'versions');
const apiBase = join(docsRoot, 'v1.3.15');

const SENTINEL = '<!-- BEGIN CROSSVERSION-BACKLINK -->';

// ── Build a map of className → area by scanning v1.3.15/zh/api/ ──
const classToArea = new Map();
const zhApiDir = join(apiBase, 'zh', 'api');
function scanArea(dir) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    let s; try { s = statSync(p); } catch { continue; }
    if (s.isDirectory()) scanArea(p);
    else if (e.endsWith('.md') && e !== 'index.md') {
      const cls = e.slice(0, -3);
      const area = dirname(p).split(sep).pop();
      if (!classToArea.has(cls)) classToArea.set(cls, area);
    }
  }
}

if (existsSync(zhApiDir)) scanArea(zhApiDir);

let stats = { scanned: 0, modified: 0, updated: 0, noArea: 0 };

for (const f of readdirSync(versionsDir)) {
  if (!f.endsWith('.md') || f === 'index.md') continue;
  stats.scanned++;
  const cls = f.slice(0, -3);
  const area = classToArea.get(cls);
  if (!area) { stats.noArea++; continue; }

  const fp = join(versionsDir, f);
  let raw = readFileSync(fp, 'utf8');

  const backLinkBlock = [
    SENTINEL,
    ``,
    `## 返回类参考 / Back to Class Reference`,
    ``,
    `| 语言 | 链接 |`,
    `|------|------|`,
    `| 🇨🇳 中文 | [v1.3.15 ` + cls + `](/v1.3.15/zh/api/${area}/${cls}) |`,
    `| 🇬🇧 English | [v1.3.15 ` + cls + `](/v1.3.15/en/api/${area}/${cls}) |`,
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
console.log('Classes mapped to areas:', classToArea.size);
console.log('Cross-version pages scanned:', stats.scanned);
console.log('Modified (new back-link):', stats.modified);
console.log('Updated (replaced stale):', stats.updated);
console.log('No area found (skipped):', stats.noArea);
