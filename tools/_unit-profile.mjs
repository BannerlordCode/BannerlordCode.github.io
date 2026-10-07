// tools/_unit-profile.mjs
// Describe an assignment unit the way a rate must be described before it can be used.
//
// WHY THIS EXISTS
// A throughput number is only meaningful next to the input distribution it was measured on.
// In this project a rate was compared across units whose source-size distributions had
// never been computed, and the parser that tried to compute them silently matched only a
// couple of entries — after which a median was reported from that. That happened more than
// once. This tool exists so the distribution is always computed by ONE parser, and so a
// suspiciously small "resolved" count is visible instead of average-able.
//
// It reports loudly when it cannot resolve most entries, rather than averaging what it got.
//
// Usage:
//   node tools/_unit-profile.mjs <manifest.pages.txt> [--repo <root>] [--ws <sourceRoot>]
//   node tools/_unit-profile.mjs <manifestA> <manifestB> ...     # compare side by side
//
// Manifest entry formats accepted (all three exist in this repo):
//   12. content/v1.3.0/en/api/campaign/Foo.md
//        src=bannerlord-1.3.0/TaleWorlds.CampaignSystem/Foo.cs  eol=LF  ver=v1.3.0
//   12. content/v1.3.0/en/api/campaign/Foo.md  src=...  eol=LF
//   12. content/... # trailing comment with src=
//
// Output per manifest: page count, resolved/unresolved, source-line median/p90/max, a size
// band histogram, and a loud WARNING block when resolution is poor.
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';

const args = process.argv.slice(2);
let repo = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io';
let ws = 'C:/WorkSpace/Bannerlord';
const manifests = [];
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--repo') { repo = args[++i]; continue; }
  if (args[i] === '--ws') { ws = args[++i]; continue; }
  manifests.push(args[i]);
}
if (!manifests.length) {
  console.error('usage: node tools/_unit-profile.mjs <manifest.pages.txt> [...] [--repo <root>] [--ws <srcRoot>]');
  process.exit(2);
}

// Index every .cs by "<tree>/<basename>" once per tree we actually need.
const lineCache = new Map(); // "<tree>/<basename>" -> line count
function sourceLines(tree, base) {
  const key = `${tree}/${base}`;
  if (lineCache.has(key)) return lineCache.get(key);
  let found = null;
  const root = `${ws}/${tree}`;
  if (existsSync(root)) {
    (function walk(d, depth) {
      if (found !== null || depth > 7) return;
      let entries;
      try { entries = readdirSync(d, { withFileTypes: true }); } catch { return; }
      for (const e of entries) {
        if (found !== null) return;
        if (e.name === '.git') continue;
        const p = join(d, e.name);
        if (e.isDirectory()) walk(p, depth + 1);
        else if (e.name === base) { found = p; return; }
      }
    })(root, 0);
  }
  const n = found ? readFileSync(found, 'utf8').split(/\r?\n/).length : null;
  lineCache.set(key, n);
  return n;
}

function parseManifest(text) {
  const entries = [];
  const lines = text.split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const m = line.match(/^\s*(\d+)\.\s+(\S+\.md)\s*(.*)$/);
    if (!m) continue;
    const page = m[2];
    const rest = m[3] || '';
    let src = null, eol = null;
    // the same line may carry the metadata inline
    const inlineSrc = rest.match(/src=(\S+)/);
    if (inlineSrc) src = inlineSrc[1];
    const inlineEol = rest.match(/eol=(\w+)/);
    if (inlineEol) eol = inlineEol[1];
    // ...or on one of the next couple of lines (manifests are written as pairs)
    if (!src) {
      for (let k = i + 1; k < Math.min(i + 3, lines.length); k++) {
        if (/^\s*\d+\.\s/.test(lines[k])) break;         // next entry started
        const s = lines[k].match(/src=(\S+)/);
        if (s) { src = s[1]; if (!eol) { const e = lines[k].match(/eol=(\w+)/); if (e) eol = e[1]; } break; }
      }
    }
    entries.push({ page, src, eol });
  }
  return entries;
}

function band(n) {
  if (n === null) return 'unresolved';
  if (n < 20) return '<20';
  if (n < 100) return '20-99';
  if (n < 500) return '100-499';
  if (n < 2000) return '500-1999';
  return '>=2000';
}
const BANDS = ['<20', '20-99', '100-499', '500-1999', '>=2000'];

const profiles = [];
let bad = 0;
try {
  for (const mf of manifests) {
    if (!existsSync(mf)) { console.error(`ERROR: manifest not found: ${mf}`); bad = 2; continue; }
    const entries = parseManifest(readFileSync(mf, 'utf8'));
    const sizes = [];
    let unresolved = 0, noSrcField = 0;
    for (const e of entries) {
      if (!e.src) { noSrcField++; unresolved++; sizes.push(null); continue; }
      const tree = e.src.startsWith('bannerlord-')
        ? e.src.split('/')[0]
        : `bannerlord-${(e.page.match(/\/(v[\d.]+)\//) || [])[1] || ''}`;
      const base = basename(e.src);
      const n = sourceLines(tree, base);
      if (n === null) unresolved++; else sizes.push(n);
    }
    const good = sizes.filter((n) => n !== null).sort((a, b) => a - b);
    const hist = {};
    for (const b of BANDS) hist[b] = 0;
    for (const n of good) hist[band(n)]++;
    const med = good.length ? good[Math.floor(good.length / 2)] : null;
    const p90 = good.length ? good[Math.floor(good.length * 0.9)] : null;
    profiles.push({ mf, entries, good, sizes, hist, med, p90, noSrcField, unresolved });
  }
} catch (err) {
  console.error(`ERROR: ${err && err.code ? err.code : 'EUNKNOWN'}: ${err && err.message}`);
  process.exit(2);
}

for (const p of profiles) {
  console.log(`\n=== ${basename(p.mf)} ===`);
  console.log(`  pages in manifest      : ${p.entries.length}`);
  console.log(`  source resolved        : ${p.good.length}`);
  console.log(`  no src= field at all   : ${p.noSrcField}`);
  console.log(`  src= present, not found: ${p.unresolved - p.noSrcField}`);
  console.log(`  source lines  median=${p.med}  p90=${p.p90}  max=${p.good.length ? p.good[p.good.length - 1] : null}`);
  console.log(`  bands ${JSON.stringify(p.hist)}`);
  // LOUD: a median computed from a handful of entries is not a median
  if (p.good.length === 0) {
    console.log(`  !! WARNING: nothing resolved — this manifest's src= format is not understood.`);
  } else if (p.good.length < p.entries.length * 0.8) {
    console.log(`  !! WARNING: only ${p.good.length}/${p.entries.length} resolved (<80%).`);
    console.log(`     A statistic over these would be computed from a small fraction of the unit.`);
  }
}

if (profiles.length > 1) {
  console.log('\n=== side by side (median source lines) ===');
  for (const p of profiles)
    console.log(`  ${String(p.med).padStart(6)}  ${p.good.length}/${p.entries.length} resolved  ${basename(p.mf)}`);
  const meds = profiles.map((p) => p.med).filter((m) => m !== null);
  if (meds.length > 1) {
    const r = Math.max(...meds) / Math.min(...meds);
    console.log(`  ratio max/min = ${r.toFixed(1)}x  — a rate compared across units whose medians`);
    console.log(`  differ by ${r.toFixed(1)}x is not a like-for-like comparison.`);
  }
}
process.exit(bad);