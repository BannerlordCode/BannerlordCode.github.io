// Targeted verification for freshly handwritten deep pages.
// 1) Runs handwritten-policy.classifyPage on each page.
// 2) Fast broken-link check: resolves each markdown link against the page's
//    directory using Zola clean-URL rules (.md or /index.md), reports missing.
import { existsSync } from 'node:fs';
import { dirname, resolve, join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { classifyPage } from './lib/handwritten-policy.mjs';

const ROOT = resolve(fileURLToPath(import.meta.url), '../../');
const pages = process.argv.slice(2);
if (!pages.length) {
  console.error('usage: node tools/_verify_4pages.mjs <page.md> [...]');
  process.exit(2);
}

function resolveLink(pagePath, target) {
  // strip anchor / query
  const clean = target.split('#')[0].split('?')[0];
  if (!clean || clean.startsWith('http') || clean.startsWith('mailto:')) return { ok: true, reason: 'external' };
  let segs = clean.split('/').filter(Boolean);
  let ups = 0;
  while (segs[0] === '..') { ups++; segs = segs.slice(1); }
  // Zola resolves relative links against the page's CLEAN-URL directory, which for a
  // leaf page is the file's directory + the page's own name segment (the page URL is a
  // directory). For _index.md pages the base is the directory itself.
  const baseName = basename(pagePath);
  const pageDir = dirname(pagePath);
  let base = baseName === '_index.md' ? pageDir : join(pageDir, basename(pagePath, '.md'));
  for (let i = 0; i < ups; i++) base = dirname(base);
  const rel = join(base, segs.join('/'));
  if (existsSync(rel)) return { ok: true };
  if (existsSync(rel + '.md')) return { ok: true };
  if (existsSync(join(rel, 'index.md'))) return { ok: true };
  return { ok: false, tried: [rel, rel + '.md', join(rel, 'index.md')] };
}

let allPass = true;
for (const p of pages) {
  const fs = await import('node:fs');
  const text = fs.readFileSync(p, 'utf8');
  const cls = classifyPage(p, text);
  const links = [...text.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)].map((m) => m[1]);
  const broken = [];
  for (const l of links) {
    const r = resolveLink(p, l);
    if (!r.ok) broken.push({ link: l, tried: r.tried });
  }
  const policyOk = cls.status === 'deep_pass';
  const linkOk = broken.length === 0;
  const pass = policyOk && linkOk;
  if (!pass) allPass = false;
  console.log(`\n=== ${p} ===`);
  console.log(`  policy: ${cls.status}  reasons=[${cls.reasons.join('; ')}]`);
  console.log(`  links : ${links.length} checked, broken=${broken.length}`);
  if (broken.length) broken.forEach((b) => console.log(`    BROKEN: (${b.link}) -> ${b.tried.join(' | ')}`));
  console.log(`  RESULT: ${pass ? 'PASS' : 'FAIL'}`);
}
console.log(`\nOVERALL: ${allPass ? 'ALL PASS' : 'SOME FAIL'}`);
process.exit(allPass ? 0 : 1);
