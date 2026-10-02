// Report-only: count pages whose cross-version href pops fewer `../` than the
// page's own route has segments, so the link lands short of the site root.
// Implements the artifact's popToSiteRoot rule. Never writes content.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, posix } from 'node:path';

const SITE = 'content';
const VERSIONS = process.argv.slice(2).filter((a) => !a.startsWith('-'));
const list = VERSIONS.length ? VERSIONS : ['v1.3.0', 'v1.3.15', 'v1.4.5'];

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    if (name.startsWith('.') || name === 'node_modules') continue;
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, acc);
    else if (name.endsWith('.md')) acc.push(p.replace(/\\/g, '/'));
  }
  return acc;
}
function toRoute(rel) {
  const r = rel.replace(/\\/g, '/').replace(SITE + '/', '');
  const d = posix.dirname(r);
  return posix.basename(r) === '_index.md' ? d + '/' : r.replace(/\.md$/, '/');
}
const VERSION_SEG = /^v\d+\.\d+(\.\d+)?$/;

function analyze(ver) {
  const dir = join(SITE, ver);
  if (!statSync(dir, { throwIfNoEntry: false })) return null;
  const files = walk(dir);
  const bad = [];
  let crossTotal = 0;
  for (const f of files) {
    const route = toRoute(f);
    const segs = route.split('/').filter(Boolean).length;
    const text = readFileSync(f, 'utf8');
    for (const m of text.matchAll(/\[([^\]]*)\]\(([^)\s]+)\)/g)) {
      const href = m[2].split('#')[0];
      if (!href || /^[a-z]+:/i.test(href)) continue;
      const parts = href.split('?')[0].split('/');
      if (!parts.some((p) => VERSION_SEG.test(p))) continue; // not a cross-version link
      crossTotal++;
      const pops = parts.filter((p) => p === '..').length;
      if (pops < segs) {
        bad.push({ file: f, route, segs, pops, href, need: segs });
      }
    }
  }
  return { ver, files: files.length, crossTotal, bad };
}

let sumFiles = 0, sumCross = 0, sumBad = 0;
const allBad = [];
for (const v of list) {
  const r = analyze(v);
  if (!r) { console.log(`${v}: MISSING`); continue; }
  sumFiles += r.files; sumCross += r.crossTotal; sumBad += r.bad.length;
  console.log(
    `${v}: files=${r.files} crossVersionLinks=${r.crossTotal} underPopped=${r.bad.length}` +
    ` pagesAffected=${new Set(r.bad.map((b) => b.file)).size}`
  );
  allBad.push(...r.bad);
}
console.log(`\nTOTAL files=${sumFiles} crossVersionLinks=${sumCross} underPoppedLinks=${sumBad} pagesAffected=${new Set(allBad.map((b) => b.file)).size}`);

if (process.argv.includes('--list')) {
  console.log('\n--- affected pages (first 60) ---');
  for (const b of allBad.slice(0, 60)) {
    console.log(`${b.file}\n   route=${b.route} (${b.segs} segs)  href=${b.href}  pops=${b.pops} need=${b.need}`);
  }
}
