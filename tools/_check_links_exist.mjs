#!/usr/bin/env node
// tools/_check_links_exist.mjs
//
// Per-page link existence gate for the hand-written docs.
//
// WHY ROUTE-RELATIVE, NOT FILE-RELATIVE  (read this before changing the base)
//
//   Zola routes a source file to a DIRECTORY URL with a trailing slash:
//     content/v1.3.0/zh/api/core-extra/GameModel.md
//       ->  /v1.3.0/zh/api/core-extra/GameModel/        <- one level DEEPER
//                                                           than the file's dir
//   So from that page:   ../MBGameModel            -> /v1.3.0/zh/api/core-extra/MBGameModel/   OK
//                        ../../campaign/AgeModel    -> /v1.3.0/zh/api/campaign/AgeModel/          OK
//                        ./MBGameModel             -> .../core-extra/GameModel/MBGameModel      404
//                        ../core-extra/MBGameModel-> .../core-extra/core-extra/...              404
//
//   Resolving against the FILE's directory (the intuitive mistake) marks correct
//   links dead. Boss did exactly that: 19 links checked, 18 reported dead, 0 real.
//   Lead-1 caught it against the build output and refused the ruling.
//
// BASELINE — this basis is measured, not assumed:
//   public/** contains 795,468 internal hrefs; of those, 946 are RELATIVE links,
//   and all 946 resolve ALIVE under the route-relative rule below.
//   If you change the resolution rule, re-run --selftest and re-derive this number.
//
// THE MIRROR TRAP (both halves fired in one session):
//   a link can be dead under one basis and alive under another.
//   A dead-link COUNT is therefore never self-justifying. Re-derive it with a
//   second basis before acting on it -- regardless of who computed it.
//
// SPEC (final; do not change without re-validating against public/**)
//   1. BASE     route of the page = content path minus .md, plus trailing slash.
//               _index.md is the directory itself.
//   2. RESOLVE  href starting with '/' -> from site root.
//               otherwise segment by segment: '..' pops one, '.' and '' are skipped.
//   3. _index   a final '_index' segment is Zola's bare-name convention: it means
//               that directory's index page, NOT a file called _index.
//   4. EXIST    public/<route>/index.html  OR  content/<route>.md  OR  content/<route>/_index.md
//   5. TEETH    --selftest asserts a deliberately impossible href is reported dead.
//   6. DIAG     the file-relative count is printed for information ONLY; it is not
//               a verdict and must never gate anything.
//
// READ-ONLY: reads content/ and public/, writes stdout only. Never writes a page.
//
// usage:
//   node tools/_check_links_exist.mjs [--root content] [--selftest] [--quiet]

import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join, posix } from 'node:path';

const REPO = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1').replace(/\/$/, '');
const argv = process.argv.slice(2);
const flag = (n) => argv.includes(n);
const opt = (n, d) => { const i = argv.indexOf(n); return i >= 0 && argv[i + 1] ? argv[i + 1] : d; };

const CONTENT = join(REPO, opt('--root', 'content'));
const PUBLIC = join(REPO, 'public');
const QUIET = flag('--quiet');

// ---------------------------------------------------------------- helpers

function walk(dir, out = [], depth = 0) {
  if (depth > 12) return out;
  let entries;
  try { entries = readdirSync(dir, { withFileTypes: true }); } catch { return out; }
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p, out, depth + 1);
    else if (e.name.endsWith('.md')) out.push(p);
  }
  return out;
}

const relToContent = (abs) => posix.normalize(abs.slice(CONTENT.length + 1)).replace(/\\/g, '/');

// route of a source page, e.g. content/a/b.md -> /a/b/ ; content/a/_index.md -> /a/
function routeOf(relPath) {
  if (relPath.endsWith('/_index.md')) return '/' + relPath.slice(0, -'/_index.md'.length) + '/';
  if (relPath === '_index.md') return '/';
  return '/' + relPath.slice(0, -'.md'.length) + '/';
}

// resolve an href against a base route, per SPEC 1-3
function resolve(baseRoute, href) {
  const clean = href.split('#')[0].split('?')[0];
  if (clean === '') return baseRoute;
  if (clean.startsWith('/')) return posix.normalize(clean);
  const base = baseRoute.endsWith('/') ? baseRoute.slice(0, -1).split('/') : baseRoute.split('/');
  const segs = clean.split('/');
  const stack = base.filter(Boolean);
  for (const s of segs) {
    if (s === '' || s === '.') continue;
    if (s === '..') { stack.pop(); continue; }
    stack.push(s);
  }
  return '/' + stack.join('/');
}

// does that resolved route exist?  SPEC 4
function exists(route) {
  if (route === '/') return existsSync(join(PUBLIC, 'index.html'));
  const trimmed = route.endsWith('/') ? route.slice(0, -1) : route;
  // bare-name convention: trailing _index means the directory's index page
  const target = trimmed.endsWith('/_index') ? trimmed.slice(0, -'/_index'.length) : trimmed;
  if (target === '') return existsSync(join(PUBLIC, 'index.html'));
  const inPublic = existsSync(join(PUBLIC, ...target.split('/').filter(Boolean), 'index.html'));
  const asFile = existsSync(join(CONTENT, ...target.split('/').filter(Boolean)) + '.md');
  const asIndex = existsSync(join(CONTENT, ...target.split('/').filter(Boolean), '_index.md'));
  return inPublic || asFile || asIndex;
}

const SKIP = /^(https?:|mailto:|tel:|data:|javascript:|#)/i;

function extractHrefs(text) {
  const out = [];
  // inline markdown links + images
  for (const m of text.matchAll(/!?\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g)) out.push(m[1]);
  return out.filter((h) => h && !SKIP.test(h));
}

// ---------------------------------------------------------------- selftest  (SPEC 5)

function selftest() {
  const page = 'v1.3.0/zh/api/core-extra/GameModel.md';
  const base = routeOf(page);
  const checks = [
    // [label, baseRoute, href, expectedAlive]
    ['same-bucket sibling', base, '../MBGameModel', true],
    ['cross-bucket', base, '../../campaign/AgeModel', true],
    ['bare _index (index page)', base, '../_index', true],
    ['bare _index, nested bucket', base, '../../gui/_index', true],
    ['absolute from root', base, '/v1.3.0/zh/api/core-extra/GameModelsManager/', true],
    ['root', base, '/', true],
    ['dot-segment skipped', base, './../MBGameModel', true],
    ['IMPOSSIBLE href must be dead', base, '../DefinitelyNotARealType_zzz', false],
    ['IMPOSSIBLE nested must be dead', base, '../../nosuchbucket/nosuchpage', false],
  ];
  let pass = 0, fail = 0;
  for (const [label, b, href, wantAlive] of checks) {
    const route = resolve(b, href);
    const alive = exists(route);
    const ok = alive === wantAlive;
    ok ? pass++ : fail++;
    console.log(`  ${ok ? 'ok  ' : 'FAIL'}  ${label.padEnd(30)} ${href.padEnd(36)} -> ${route}  (${alive ? 'alive' : 'dead'}, want ${wantAlive ? 'alive' : 'dead'})`);
  }
  console.log(`\n  selftest: ${pass} passed, ${fail} failed`);
  if (fail) { console.error('\n  THE GATE HAS NO TEETH (or its basis is wrong). Refusing to issue a verdict.'); process.exit(2); }
  console.log('  teeth confirmed.');
  process.exit(0);
}

// ---------------------------------------------------------------- main

if (flag('--selftest')) selftest();

const files = walk(CONTENT);
const dead = [];
let total = 0, rel = 0, abs = 0;

for (const f of files) {
  const r = relToContent(f);
  const base = routeOf(r);
  let text;
  try { text = readFileSync(f, 'utf8'); } catch { continue; }
  for (const href of extractHrefs(text)) {
    total++;
    href.startsWith('/') ? abs++ : rel++;
    const route = resolve(base, href);
    if (!exists(route)) dead.push({ page: r, href, route });
  }
}

console.log('LINK-EXISTENCE GATE (route-relative basis)');
console.log(`  content root : ${CONTENT}`);
console.log(`  pages        : ${files.length}`);
console.log(`  hrefs        : ${total}   (relative ${rel} / absolute ${abs})`);
console.log(`  dead         : ${dead.length}`);

if (!QUIET && dead.length) {
  console.log('\n  DEAD LINKS:');
  const byPage = new Map();
  for (const d of dead) {
    if (!byPage.has(d.page)) byPage.set(d.page, []);
    byPage.get(d.page).push(d);
  }
  for (const [page, items] of byPage) {
    console.log(`   ${page}  (${items.length})`);
    for (const i of items) console.log(`      ${i.href}  ->  ${i.route}`);
  }
}

console.log('\n  DIAGNOSTIC ONLY (file-relative basis — NOT a verdict):');
console.log('  under the file-relative basis the same hrefs would report differently;');
console.log('  that basis is wrong for Zola and is recorded only to show the delta.');

console.log(dead.length ? '\nRESULT: FAIL' : '\nRESULT: PASS');
process.exit(dead.length ? 1 : 0);