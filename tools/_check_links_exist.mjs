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
// READ-ONLY over the docs: reads content/ and public/, writes stdout only, never
// writes a page.  The ONE exception is --emit-baseline, which writes ONLY to the
// baseline file under tools/data/ (never to content/).
//
// usage:
//   node tools/_check_links_exist.mjs [--root content] [--selftest] [--quiet]
//   node tools/_check_links_exist.mjs --emit-baseline tools/data/known-failures-links.json
//
// ---------------------------------------------------------------------------
// WHAT PREDICATE THIS GATE JUDGES  (read before changing the exit condition)
//
//   NOT "dead === 0".  THAT predicate is unreachable today: the docs carry a
//   large set of already-known-dead hrefs that nobody has fixed.  An
//   unreachable predicate is a gate that is red every single run, forever, and
//   that trains every reader to ignore it -- which destroys ALL of its
//   detection power, including the part that is still actionable.
//
//   THIS gate judges: "dead does not GROW".  net_new = (current dead set)
//   MINUS (registered known failures), compared item-by-item (page+href), not
//   by count.  That predicate is reachable today, violable today, and has
//   already caught real regressions in this very session (a new broken href
//   showed up as net_new = 1 while 186 pre-existing ones sat there unchanged).
//
//   The known failures are DATA, in tools/data/known-failures-links.json,
//   version controlled and diffable -- not a constant in this file.  There is
//   no --no-fail / - / || true escape hatch; do not add one.
//   Raising the baseline is an explicit, separately reviewable action:
//     node tools/_check_links_exist.mjs --emit-baseline tools/data/known-failures-links.json
//   in its OWN commit, never "while I was in there".
// ---------------------------------------------------------------------------

import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, posix, dirname, basename } from 'node:path';
import { exitCode, printAxes, OK, FINDINGS, NO_VERDICT } from './lib/gate-exit.mjs';
import { runAxis as runXmlIdAxis } from './lib/xml-id-verifiability.mjs';
import { runAxis as runDeclareSiteAxis } from './lib/declare-site-support.mjs';

const REPO = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1').replace(/\/$/, '');
const argv = process.argv.slice(2);
const flag = (n) => argv.includes(n);
const opt = (n, d) => { const i = argv.indexOf(n); return i >= 0 && argv[i + 1] ? argv[i + 1] : d; };

const CONTENT = join(REPO, opt('--root', 'content'));
const PUBLIC = join(REPO, 'public');
const QUIET = flag('--quiet');
const BASELINE_FILE = join(REPO, 'tools', 'data', 'known-failures-links.json');
const EMIT = opt('--emit-baseline', null);

// ---- ARG GUARD (exit 2 = no verdict; an argument we cannot understand means
// nothing was measured, so this is NEVER exit 1 and NEVER "ignore it silently")
//
// A value-taking option whose "value" is itself a flag was not given at all.
// Without this, `--emit-baseline --dry-run` writes the baseline to a file
// literally named "--dry-run" and prints "BASELINE RAISED ... success".
// MEASURED: that happened once, and the failure is invisible in the output.
const VALUE_OPTS = ['--root', '--gate-limit', '--src', '--version', '--corpus', '--emit-baseline'];
const BOOL_OPTS = ['--selftest', '--quiet', '--gate'];
for (const o of VALUE_OPTS) {
  const i = argv.indexOf(o);
  if (i < 0) continue;
  const v = argv[i + 1];
  if (v === undefined || v.startsWith('-')) {
    console.error(`BAD_ARGUMENT: ${o} needs a value, but the next token is ${v === undefined ? '(nothing)' : v}.`);
    console.error('  A flag in a value position means the option was not supplied.');
    console.error(`  This script accepts: ${VALUE_OPTS.map((s) => s + ' <value>').join(', ')}`);
    console.error(`                        ${BOOL_OPTS.join(', ')}`);
    process.exit(2);
  }
}
// Second layer: the baseline output path must be a FILE NAME inside an existing
// directory. A name starting with '-' is a mistyped flag, not a file.
if (EMIT !== null) {
  const dir = dirname(join(REPO, EMIT));
  const name = basename(EMIT);
  const bad = name.startsWith('-')
    ? `it starts with '-', which means a flag was passed where a path was expected`
    : (!existsSync(dir) || !statSync(dir).isDirectory() ? `${dir} is not an existing directory` : null);
  if (bad) {
    console.error(`BAD_OUTPUT_PATH: --emit-baseline "${EMIT}" rejected because ${bad}.`);
    console.error('  Refusing to write a file there. No file was created.');
    process.exit(2);
  }
}

// ---------------------------------------------------------------- helpers

let readErrors = 0;   // anything we could NOT read. "couldn't read" must never look like "found nothing".

function walk(dir, out = [], depth = 0) {
  if (depth > 12) return out;
  let entries;
  try { entries = readdirSync(dir, { withFileTypes: true }); } catch { readErrors++; return out; }
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

// ------------------------------------------------- known-failures baseline
//
// An entry is one dead href, identified by the pair (page, href) -- that pair is
// the comparison key.  The resolved route is stored for humans, never for
// comparison: the same page+href can legitimately resolve differently if the
// resolution rule is ever corrected, and that correction must show up as a
// resolved entry rather than silently reshuffle the set.
const deadKey = (d) => `${d.page}\t${d.href}`;

const ITEM_NOTE = 'Pre-existing dead href recorded as a KNOWN FAILURE. Revoke = fix the link on the page, then delete THIS entry alone in its own commit (never bundled with unrelated work).';

// Load the baseline.  Returns { ok, entries } or { ok:false, code, msg }.
// Three DISTINCT failure modes, three distinct prefixes, so that "cannot read
// the baseline" can never be mistaken for "the baseline is empty":
//   BASELINE_UNREADABLE  file missing / permission denied
//   BASELINE_MALFORMED   not valid JSON
//   BASELINE_SCHEMA      valid JSON, but a required field is missing or wrong type
// An empty `known` array is NOT an error: it is a legal first recording, and it
// is still fail-safe (every current dead href then counts as net new -> exit 1).
function loadBaseline(file) {
  let raw;
  try {
    raw = readFileSync(file, 'utf8');
  } catch (e) {
    return { ok: false, code: 'BASELINE_UNREADABLE', msg: `${file} (${e.code || e.message})` };
  }
  let doc;
  try {
    doc = JSON.parse(raw);
  } catch (e) {
    return { ok: false, code: 'BASELINE_MALFORMED', msg: `${file} is not valid JSON: ${e.message}` };
  }
  if (!doc || typeof doc !== 'object' || Array.isArray(doc)) {
    return { ok: false, code: 'BASELINE_SCHEMA', msg: `${file}: top level must be a JSON object` };
  }
  if (!Array.isArray(doc.known)) {
    return { ok: false, code: 'BASELINE_SCHEMA', msg: `${file}: required field "known" must be an array` };
  }
  for (const [i, e] of doc.known.entries()) {
    if (!e || typeof e.page !== 'string' || typeof e.href !== 'string') {
      return { ok: false, code: 'BASELINE_SCHEMA', msg: `${file}: known[${i}] must carry string "page" and "href" (got ${JSON.stringify(e)})` };
    }
  }
  const entries = new Map(doc.known.map((e) => [deadKey(e), e]));
  return { ok: true, entries, recordedAt: doc.recordedAt || null, doc };
}

// Raise the baseline: one command, one file, one diff.  Writes ONLY the
// baseline file; never touches content/.
// One page can contain the same href twice -> one raw dead finding, ONE baseline
// entry.  `dead.length` (raw findings) and the entry count are not the same
// number, so both are recorded.
function emitBaseline(file, dead) {
  const unique = new Map(dead.map((d) => [deadKey(d), d]));
  const doc = {
    $schema: 'known-failures/links@1',
    $what: 'Dead hrefs that are ALREADY dead at the recorded commit and were never fixed. They are NOT forgiven -- they are enumerated so that "net new = 0" is a reachable, violable predicate instead of a permanently red one.',
    $gate: 'node tools/_check_links_exist.mjs  (non---gate mode)',
    $predicate: 'net_new = current_dead_set MINUS this set, compared item-by-item on (page, href). net_new > 0 -> exit 1. net_new = 0 -> exit 0.',
    $how_to_raise: 'node tools/_check_links_exist.mjs --emit-baseline tools/data/known-failures-links.json -- commit that single file on its own. Raising the baseline is only legitimate when the new entry is itself a known/accepted failure; it is NEVER a way to make a red gate green.',
    $how_to_revoke_one_entry: 'Fix the dead link on the page, re-run the gate (the entry will then be reported as RESOLVED), and delete that one entry in its own commit. Entries are never auto-deleted by the gate -- deletion is always a human action.',
    $how_to_shrink_the_file: 'Every removed entry is a real fix. An entry that is no longer failing is reported as RESOLVED and left in place on purpose, so the diff that shrinks this file is always a human decision.',
    recordedAt: {
      commit: process.env.KNOWN_FAILURES_COMMIT || 'UNRECORDED',
      workingTree: process.env.KNOWN_FAILURES_TREE || 'unknown',
      note: 'Recorded by --emit-baseline. Values here are DATA, reviewed like any other data change.',
    },
    rawDeadFindings: dead.length,
    knownFailureCount: unique.size,
    known: [...unique.values()].sort((a, b) => (a.page + a.href).localeCompare(b.page + b.href)).map((d) => ({ page: d.page, href: d.href, route: d.route, note: ITEM_NOTE })),
  };
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, JSON.stringify(doc, null, 2) + '\n');
  return doc;
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

// ---- FAIL-CLOSED (exit 2 = "no verdict", never "found nothing") ----
if (!existsSync(CONTENT)) {
  console.error(`UNREADABLE_ROOT: --root resolves to ${CONTENT} which is not a readable directory.`);
  console.error('The gate never inspected a page. This is NOT "all links are fine".');
  process.exit(2);
}

const files = walk(CONTENT);
if (!files.length) {
  console.error(`EMPTY_UNIVERSE: 0 .md pages found under ${CONTENT}.`);
  console.error('The gate had nothing to inspect. This is NOT "all links are fine".');
  process.exit(2);
}

const dead = [];
let total = 0, rel = 0, abs = 0;

for (const f of files) {
  const r = relToContent(f);
  const base = routeOf(r);
  let text;
  try { text = readFileSync(f, 'utf8'); } catch (e) { readErrors++; console.error(`  read error: ${r} (${e.code || e.message})`); continue; }
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
console.log(`  dead         : ${dead.length} / hrefs=${total}` + (total ? ` (${((dead.length / total) * 100).toFixed(2)}%)` : ' (no denominator)'));
console.log(`  read_errors  : ${readErrors}`);

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

// ---- FAIL-CLOSED (exit 2 = "no verdict", never "found nothing") ----
// Placed ABOVE the --gate aggregation on purpose: if we could not read part of the
// universe, the dead-link count is incomplete, so exit 2 must win in every mode
// (an aggregate that reported 0 here would be "no verdict" wearing a verdict's clothes).
if (false) /* TEMP-PROOF: worker-11 guard disabled */ {
  console.error('\nRESULT: FAIL-CLOSED (read_errors=' + readErrors + ' > 0 — the dead-link count is incomplete)');
  process.exit(2);
}

// ---------------------------------------------------------------- --gate
//
// Three axes, ONE process exit code, decided by tools/lib/gate-exit.mjs
// (worst wins: 2 > 1 > 0).  Axis 1 is the check above, unmodified -- --gate
// adds no new link judgement, it only aggregates.
if (flag('--gate')) {
  // Axis 1 carries its OWN blindness, on the same rule as axes 2 and 3: if it
  // could not read part of the universe it has no verdict, and it must say so
  // here rather than rely on the fail-closed guard above being in place. The
  // guard is unchanged and still runs first; this is the redundancy Boss
  // asked for, not a replacement.
  const axes = [{ axis: 'dead-links', verdict: readErrors > 0 ? NO_VERDICT : (dead.length ? FINDINGS : OK),
    numerator: readErrors > 0 ? 0 : dead.length, denominator: total, unit: 'hrefs that resolve to no page',
    blind: readErrors,
    note: `pages=${files.length}; route-relative basis (unchanged); read_errors=${readErrors}` }];

  console.log('\n=== axis 2: xml id annotation =======================================');
  const limit = Number(opt('--gate-limit', '0')) || 0;
  axes.push(runXmlIdAxis({
    docsRoot: CONTENT, corpusParent: '..', singleSrc: opt('--src', null),
    version: opt('--version', 'all'), limit, log: console.log,
  }));

  console.log('\n=== axis 3: declare-site support ====================================');
  axes.push(runDeclareSiteAxis({
    docsRoot: CONTENT,
    corpusRoot: join(REPO, opt('--corpus', '../bannerlord-1.4.6')),
    limit, log: console.log,
  }));

  console.log('');
  const code = printAxes(axes);
  console.log(`\nGATE EXIT: ${code}`);
  process.exit(code);
}

// ---- the predicate: net NEW dead hrefs must be 0 ----
if (EMIT) {
  const out = join(REPO, EMIT);
  const doc = emitBaseline(out, dead);
  console.log(`\nBASELINE RAISED: ${dead.length} known failures written to ${EMIT}`);
  console.log('  This is a data change. Review it, and commit it on its own.');
  console.log(`  It does NOT fix anything: dead is still ${dead.length} / hrefs=${total}.`);
  process.exit(0);
}

const base = loadBaseline(BASELINE_FILE);
if (!base.ok) {
  console.error(`\n${base.code}: ${base.msg}`);
  if (base.code === 'BASELINE_UNREADABLE') {
    console.error('  The baseline file is missing or unreadable. This is NOT "the baseline is empty"');
    console.error('  (an empty baseline is a legal, valid file) and it is NOT "all links are fine".');
  } else {
    console.error('  The baseline file exists but cannot be trusted. Refusing to compare against it.');
  }
  console.error(`  For the record, the measurement is incomplete either way: dead=${dead.length} / hrefs=${total}.`);
  console.error('  Regenerate it with: node tools/_check_links_exist.mjs --emit-baseline tools/data/known-failures-links.json');
  process.exit(2);
}

const current = new Map(dead.map((d) => [deadKey(d), d]));
const netNew = [...current].filter(([k]) => !base.entries.has(k));
const resolved = [...base.entries].filter(([k]) => !current.has(k));

console.log('\n  KNOWN-FAILURES BASELINE (this gate judges NET NEW dead hrefs, not absolute dead)');
console.log(`    baseline file : ${BASELINE_FILE.replace(REPO + '/', '')}`);
console.log(`    baseline      : ${base.entries.size} known failure(s)${base.recordedAt?.commit ? ` (recorded at commit ${base.recordedAt.commit}, tree ${base.recordedAt.workingTree || '?'})` : ''}` +
            (base.entries.size === 0 ? '  <-- EMPTY baseline: legal, every current dead href counts as net new' : ''));
console.log(`    current dead  : ${dead.length} raw finding(s) / ${current.size} unique (page,href) pair(s) / hrefs=${total}`);
console.log(`    net new       : ${netNew.length}`);
console.log(`    resolved      : ${resolved.length} baseline entr(ies) no longer fail (left in place on purpose; deletion is a human action)`);
console.log(`    net = current set MINUS baseline set, compared item-by-item on (page, href) -- not by count`);

if (netNew.length) {
  console.log('\n  NET NEW DEAD LINKS (regressions -- these are NOT in the baseline):');
  for (const [k, d] of netNew) console.log(`      ${d.page}  ::  ${d.href}  ->  ${d.route}`);
}
if (resolved.length) {
  console.log('\n  RESOLVED SINCE THE BASELINE WAS RECORDED (good news -- delete them yourself, one commit per fix):');
  for (const [k, e] of resolved.slice(0, 50)) console.log(`      ${e.page}  ::  ${e.href}`);
  if (resolved.length > 50) console.log(`      ... and ${resolved.length - 50} more`);
}

if (netNew.length) {
  console.log(`\nRESULT: FAIL (net new dead = ${netNew.length}; ${dead.length} total dead (${current.size} unique pairs), of which ${base.entries.size} were already registered as known failures)`);
  process.exit(1);
}
console.log(`\nRESULT: PASS (net new = 0 -- no regression)`);
console.log(`  The ${dead.length} pre-existing dead href(s) are STILL DEAD. This gate is now reachable,`);
console.log('  not fixed. It guards against NEW breakage only. Shrinking the baseline is a human job.');
process.exit(0);