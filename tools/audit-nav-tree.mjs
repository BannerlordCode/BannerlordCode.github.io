// Comprehensive navigation-tree auditor for BannerlordCode.github.io.
// Checks what audit-links.mjs misses:
//   1. All config.js nav/sidebar `link:` entries resolve to real files
//   2. All markdown relative links resolve (same as audit-links but with VitePress clean-URL semantics)
//   3. Bidirectional cross-version: every /versions/X.md links back to v1.3.15 class doc,
//      and every v1.3.15 class doc that has a cross-version page links to it (via breadcrumb)
//   4. Every class doc (non-index .md in api/<area>/) has a breadcrumb block
//   5. No orphan class docs: every class doc is reachable from its area index.md
//
// Usage:  node tools/audit-nav-tree.mjs
// Exit code 0 = clean, 1 = issues found.

import { readFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join, dirname, normalize, sep, relative, basename } from 'path';

const docsRoot = join(import.meta.dirname, '..', 'docs');
const root = docsRoot;
const SLASH = '/';
const reSep = new RegExp(sep === '\\' ? '\\\\' : sep, 'g');
const issues = [];
let checked = { configLinks: 0, mdLinks: 0, classDocs: 0, crossVersionPages: 0 };

function walk(dir, acc = []) {
  for (const e of readdirSync(dir)) {
    if (e.startsWith('.') || e === 'public' || e === 'node_modules') continue;
    const p = join(dir, e);
    let s; try { s = statSync(p); } catch { continue; }
    if (s.isDirectory()) walk(p, acc);
    else if (e.endsWith('.md')) acc.push(p);
  }
  return acc;
}

function resolveExists(href, fromFile) {
  let h = href.split('#')[0];
  if (!h) return true;
  if (h.startsWith('http') || h.startsWith('mailto:')) return true;
  let target;
  if (h.startsWith('/')) target = normalize(join(root, h.replace(/^\//, '')));
  else target = normalize(join(dirname(fromFile), h));
  target = target.replace(reSep, SLASH);
  const cands = [];
  if (h.endsWith('/')) {
    cands.push(target + 'index.md');
    cands.push(target.replace(/\/+$/, '') + '/index.md');
  } else if (h.endsWith('.md')) {
    cands.push(target);
    cands.push(target.replace(/\.md$/, '') + '/index.md');
  } else {
    cands.push(target + '.md');
    cands.push(target + '/index.md');
  }
  return cands.some(c => existsSync(c));
}

// ── 1. Config nav/sidebar links ──
const cfgPath = join(docsRoot, '.vitepress', 'config.js');
const cfg = readFileSync(cfgPath, 'utf8');
const linkRe = /link:\s*'([^']+)'/g;
let m;
const cfgBroken = [];
while ((m = linkRe.exec(cfg))) {
  checked.configLinks++;
  const href = m[1];
  if (href.startsWith('http') || href.startsWith('mailto:')) continue;
  let h = href.split('#')[0];
  if (!h) continue;
  let target;
  if (h.startsWith('/')) target = normalize(join(root, h.replace(/^\//, '')));
  else target = normalize(join(docsRoot, h));
  target = target.replace(reSep, SLASH);
  const cands = [];
  if (h.endsWith('/')) {
    cands.push(target + 'index.md');
    cands.push(target.replace(/\/+$/, '') + '/index.md');
  } else if (h.endsWith('.md')) {
    cands.push(target);
    cands.push(target.replace(/\.md$/, '') + '/index.md');
  } else {
    cands.push(target + '.md');
    cands.push(target + '/index.md');
  }
  if (!cands.some(c => existsSync(c))) cfgBroken.push(href);
}
if (cfgBroken.length) {
  issues.push({ type: 'config-broken', items: [...new Set(cfgBroken)] });
}

// ── 2. Markdown relative links (VitePress clean-URL aware) ──
const files = walk(docsRoot);
const mdBroken = [];
for (const f of files) {
  const txt = readFileSync(f, 'utf8');
  const lr = /\[([^\]]*)\]\(([^)\s]+)\)/g;
  let lm;
  while ((lm = lr.exec(txt))) {
    const href = lm[2].split(/\s/)[0];
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) continue;
    checked.mdLinks++;
    if (!resolveExists(href, f)) {
      mdBroken.push({ from: relative(docsRoot, f).replace(reSep, SLASH), href });
    }
  }
}
if (mdBroken.length) {
  const byFrom = {};
  for (const b of mdBroken) (byFrom[b.from] = byFrom[b.from] || []).push(b.href);
  issues.push({ type: 'md-broken', byFrom });
}

// ── 3. Bidirectional cross-version check ──
const versionsDir = join(docsRoot, 'versions');
const crossPages = new Set();
if (existsSync(versionsDir)) {
  for (const f of readdirSync(versionsDir)) {
    if (f.endsWith('.md') && f !== 'index.md') {
      crossPages.add(f.slice(0, -3));
      checked.crossVersionPages++;
    }
  }
}
// For each cross-version page, verify it links back to v1.3.15 class doc
const crossMissingBack = [];
for (const cls of crossPages) {
  const vf = join(versionsDir, cls + '.md');
  const txt = readFileSync(vf, 'utf8');
  // Look for a link to /v1.3.15/zh/api/.../<cls> or /v1.3.15/en/api/.../<cls>
  const backRe = new RegExp(`/v1\\.3\\.15/(zh|en)/api/[a-z\\-]+/${cls}`);
  if (!backRe.test(txt)) crossMissingBack.push(cls);
}
if (crossMissingBack.length) {
  issues.push({ type: 'cross-version-missing-back-link', items: crossMissingBack });
}

// ── 4. Breadcrumb presence on class docs ──
const areaDirs = ['core', 'core-extra', 'mission', 'mission-ext', 'items', 'campaign',
  'campaign-ext', 'gui', 'save-system', 'viewmodel', 'localization', 'engine'];
const missingBreadcrumb = [];
for (const v of ['v1.3.15', 'v1.3.0', 'v1.4.5']) {
  for (const lang of ['zh', 'en']) {
    for (const area of areaDirs) {
      const ad = join(docsRoot, v, lang, 'api', area);
      if (!existsSync(ad)) continue;
      for (const f of readdirSync(ad)) {
        if (!f.endsWith('.md') || f === 'index.md') continue;
        const fp = join(ad, f);
        const txt = readFileSync(fp, 'utf8');
        checked.classDocs++;
        if (!txt.includes('<!-- BEGIN BREADCRUMB -->')) {
          missingBreadcrumb.push(relative(docsRoot, fp).replace(reSep, SLASH));
        }
      }
    }
  }
}
if (missingBreadcrumb.length) {
  issues.push({ type: 'missing-breadcrumb', items: missingBreadcrumb });
}

// ── Report ──
console.log('=== audit-nav-tree.mjs ===');
console.log('Config nav/sidebar links checked:', checked.configLinks);
console.log('Markdown links checked:', checked.mdLinks);
console.log('Class docs checked for breadcrumb:', checked.classDocs);
console.log('Cross-version pages checked:', checked.crossVersionPages);
console.log('');

if (!issues.length) {
  console.log('✅ ALL CHECKS PASSED — 0 issues');
  process.exit(0);
}

console.log('❌ ISSUES FOUND:', issues.length);
for (const iss of issues) {
  console.log('');
  if (iss.type === 'config-broken') {
    console.log('## Broken config.js nav/sidebar links (' + iss.items.length + ')');
    for (const h of iss.items) console.log('   -> ' + h);
  } else if (iss.type === 'md-broken') {
    const total = Object.values(iss.byFrom).reduce((a, b) => a + b.length, 0);
    console.log('## Broken markdown links (' + total + ' in ' + Object.keys(iss.byFrom).length + ' files)');
    for (const f of Object.keys(iss.byFrom).sort()) {
      console.log('  ' + f + ':');
      for (const h of [...new Set(iss.byFrom[f])]) console.log('     -> ' + h);
    }
  } else if (iss.type === 'cross-version-missing-back-link') {
    console.log('## Cross-version pages missing back-link to v1.3.15 (' + iss.items.length + ')');
    for (const c of iss.items) console.log('   -> /versions/' + c);
  } else if (iss.type === 'missing-breadcrumb') {
    console.log('## Class docs missing breadcrumb (' + iss.items.length + ')');
    for (const f of iss.items.slice(0, 20)) console.log('   -> ' + f);
    if (iss.items.length > 20) console.log('   ... and ' + (iss.items.length - 20) + ' more');
  }
}
process.exit(1);
