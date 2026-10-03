#!/usr/bin/env node
// Review harness — per-page batch check for a content batch.
// STRICTLY READ-ONLY. This tool opens no file for writing, runs no git command, and
// creates nothing. Its only outputs are stdout and its own exit code.
//
// THREE CHECKS, all of which fail closed:
//   1. deep_pass      -- lib/handwritten-policy.mjs classifyPage(), reported verbatim
//   2. fabricated     -- lib/anti-fabrication.mjs checkPage(), batch-filtered,
//                        plus a lane-wide number kept clearly separate
//   3. marker         -- self-declaration in FRONTMATTER only, three dialects
//
// "Fail closed" means: if a check cannot run, it prints `<check>: DID NOT RUN` and
// exits 2. It never prints 0 for something it did not measure.
//
// Usage:
//   node tools/_review_batch_check.mjs --batch paths.txt
//   node tools/_review_batch_check.mjs content/a.md content/b.md
//   node tools/_review_batch_check.mjs --batch paths.txt --json
//   node tools/_review_batch_check.mjs --batch paths.txt --marker-allow content/x.md
//
// Exit codes: 0 = all checks ran and every page passed; 1 = checks ran, >=1 page failed;
//             2 = a check could not run, or the batch is unusable. Treat 2 as LOUD.

import { readFileSync, existsSync, statSync, readdirSync, openSync, readSync, closeSync } from 'node:fs';
import { execFileSync as cpExecFileSync } from 'node:child_process';
import { join, resolve, relative, isAbsolute } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = resolve(fileURLToPath(new URL('.', import.meta.url)));
const REPO = resolve(HERE, '..');

// ------------------------------------------------------------------ arg parsing
const argv = process.argv.slice(2);
function flag(name) { const i = argv.indexOf(name); return i >= 0 ? argv[i + 1] : null; }
const hasFlag = (name) => argv.includes(name);
const BATCH_FILE = flag('--batch');
const JSON_OUT = hasFlag('--json');
const REPO_ARG = flag('--repo');
const ROOT = REPO_ARG ? resolve(REPO_ARG) : REPO;
const MARKER_ALLOW = new Set();
for (let i = 0; i < argv.length; i++) if (argv[i] === '--marker-allow' && argv[i + 1]) MARKER_ALLOW.add(argv[++i]);
const STRICT_XV = argv.includes('--strict-crossversion');
const SELFTEST = argv.includes('--selftest');
// Four DISTINCT outcomes so a caller never has to guess which one happened.
const EXIT = { PASS: 0, FINDINGS: 1, NOT_RUN: 2, USAGE: 64 };

// Unknown flags are reported loudly but never silently ignored. (An earlier version
// treated ANY --flag as a malformed batch and exited 2 with no output at all, which is the
// exact "silent zero that reads as clean" failure this harness must not have.)
const VALUE_FLAGS = new Set(['--batch', '--repo', '--marker-allow', '--git-show']);
const BOOL_FLAGS = new Set(['--json', '--strict-crossversion', '--skip-lane-wide', '--selftest']);
const unknownFlags = argv.filter((a) => a.startsWith('--') && !VALUE_FLAGS.has(a) && !BOOL_FLAGS.has(a));

// ------------------------------------------------------------------ markers
// Three dialects, four literal patterns. These MUST each match at least one page
// site-wide (preflight P3). A pattern that matches nothing is treated as a broken
// instrument, never as "clean".
const MARKER_DIALECTS = [
  { id: 'class-ref/zh', pattern: '的自动生成类参考' },
  { id: 'class-ref/en', pattern: 'Auto-generated class reference' },
  { id: 'campaign-action/zh', pattern: '的自动生成战役动作参考' },
  { id: 'campaign-action/en', pattern: 'Auto-generated campaign action reference' },
];
// Anchored on purpose: frontmatter must START the file with --- and CLOSE with ---.
// An unanchored /---\n[\s\S]*?---/ would happily match a horizontal rule later in the
// document and silently invent a frontmatter block.
const FRONTMATTER_RE = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/;
const HEADING_RE = /^#{1,6}\s+\S/gm;
const FENCE_RE = /^```/gm;

function frontmatterOf(text) {
  const m = text.match(FRONTMATTER_RE);
  return m ? m[1] : null;
}

// The site-wide dialect probe must not read 39k whole documents (that measured 160s).
// It only needs the frontmatter, which is a header, so it reads a window and falls back
// to a full read when the block does not close inside the window. A truncated probe is
// counted and reported, never silently treated as "no marker".
const FM_WINDOW = 4096;
function frontmatterProbe(absPath) {
  let fd;
  try {
    fd = openSync(absPath, 'r');
    const buf = Buffer.alloc(FM_WINDOW);
    const n = readSync(fd, buf, 0, FM_WINDOW, 0);
    const head = buf.toString('utf8', 0, n);
    const m = head.match(FRONTMATTER_RE);
    if (m) return { fm: m[1], truncated: false };
    if (n === FM_WINDOW) return { fm: null, truncated: true }; // closing --- beyond the window
    return { fm: null, truncated: false }; // genuinely no frontmatter
  } catch {
    return { fm: null, truncated: false };
  } finally {
    if (fd !== undefined) { try { closeSync(fd); } catch { /* ignore */ } }
  }
}

// ------------------------------------------------------------------ io helpers
function walkMarkdown(dir, out = [], depth = 0) {
  if (depth > 8 || !existsSync(dir)) return out;
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.')) continue;
    const p = join(dir, e.name);
    if (e.isDirectory()) walkMarkdown(p, out, depth + 1);
    else if (e.name.endsWith('.md')) out.push(p);
  }
  return out;
}
function walkCs(dir, out = [], depth = 0) {
  if (depth > 12 || !existsSync(dir)) return out;
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.')) continue;
    const p = join(dir, e.name);
    if (e.isDirectory()) walkCs(p, out, depth + 1);
    else if (e.name.endsWith('.cs')) out.push(p);
  }
  return out;
}
const rel = (abs) => relative(ROOT, abs).replace(/\\/g, '/');
function laneOf(relPath) {
  // current layout is content/vX.Y.Z/...; the pre-Zola layout in git history is docs/vX.Y.Z/...
  const m = relPath.match(/^(?:content|docs)\/(v\d+\.\d+\.\d+)\//);
  return m ? m[1] : null;
}
function sourceRootFor(lane) {
  if (!lane) return null;
  const cand = resolve(ROOT, '../bannerlord-' + lane.replace(/^v/, ''));
  return existsSync(cand) ? cand : null;
}

// ------------------------------------------------------------------ preflight
const log = [];
const say = (s = '') => (JSON_OUT ? null : console.log(s));
const sayErr = (s) => { if (!JSON_OUT) console.error(s); };
const fatal = [];
const timer = (() => { const t0 = Date.now(); return () => Date.now() - t0; })();

log.push(['preflight', 'start']);
let policy = null;
let antiFab = null;
try {
  policy = await import(new URL('./lib/handwritten-policy.mjs', import.meta.url).href);
  if (typeof policy.classifyPage !== 'function') fatal.push('handwritten-policy.mjs does not export classifyPage');
} catch (e) { fatal.push('cannot import tools/lib/handwritten-policy.mjs: ' + e.message); }
try {
  antiFab = await import(new URL('./lib/anti-fabrication.mjs', import.meta.url).href);
  for (const fn of ['checkPage', 'CONTROL_IDENTIFIERS', 'readerOwnedIdentifiers']) {
    if (typeof antiFab[fn] === 'undefined') fatal.push('anti-fabrication.mjs does not export ' + fn);
  }
} catch (e) { fatal.push('cannot import tools/lib/anti-fabrication.mjs: ' + e.message); }
if (fatal.length) { reportFatal(fatal); }

// P2 -- the frontmatter extractor must work on a string that certainly has frontmatter,
//      and must NOT invent frontmatter from a document that has none.
const FM_PROBE = '---\ntitle: probe\ndescription: probe\n---\nbody\n';
const fmProbe = frontmatterOf(FM_PROBE);
if (!fmProbe || !fmProbe.includes('probe')) fatal.push('frontmatter extractor failed its own positive self-test');
if (frontmatterOf('no frontmatter here\n---\nnot a block\n') !== null) {
  fatal.push('frontmatter extractor matched a non-anchored --- (would invent frontmatter)');
}

// P3 -- every marker dialect must match at least one page site-wide.
const allPages = walkMarkdown(join(ROOT, 'content'));
const siteMarkerCount = new Map(MARKER_DIALECTS.map((d) => [d.id, 0]));
const siteBodyOnlyCount = new Map(MARKER_DIALECTS.map((d) => [d.id, 0]));
let pagesWithFrontmatter = 0;
let truncatedProbes = 0;
// Only the FRONTMATTER is needed site-wide, and that is why this uses a window read
// (reading all 39k documents in full measured 150s). Body-only mentions are measured per
// batch page instead, where the text is already in hand.
for (const abs of allPages) {
  const probe = frontmatterProbe(abs);
  if (probe.truncated) truncatedProbes++;
  if (probe.fm === null && probe.truncated) continue; // unknowable from the window; not counted either way
  if (probe.fm !== null) pagesWithFrontmatter++;
  for (const d of MARKER_DIALECTS) {
    if (probe.fm !== null && probe.fm.includes(d.pattern)) siteMarkerCount.set(d.id, siteMarkerCount.get(d.id) + 1);
  }
}
for (const d of MARKER_DIALECTS) {
  const n = siteMarkerCount.get(d.id);
  if (n === 0) fatal.push(`marker pattern "${d.pattern}" (${d.id}) matches ZERO pages site-wide — instrument is broken, refusing to report 0`);
}
log.push(['preflight', `scanned ${allPages.length} pages (${pagesWithFrontmatter} with frontmatter, ${truncatedProbes} window-truncated) in ${timer()}ms`]);

// ------------------------------------------------------------------ batch input
function readBatch() {
  if (BATCH_FILE) {
    const bf = isAbsolute(BATCH_FILE) ? BATCH_FILE : resolve(ROOT, BATCH_FILE);
    if (!existsSync(bf)) { sayErr(`BATCH FILE NOT FOUND: ${bf}`); return null; }
    return readFileSync(bf, 'utf8').split(/\r?\n/).map((s) => s.trim()).filter(Boolean);
  }
  // positional paths only: skip flags AND the value that follows a value-taking flag
  const out = [];
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith('--')) { if (VALUE_FLAGS.has(a)) i++; continue; }
    out.push(a);
  }
  return out;
}
// ------------------------------------------------------------------ git-show input
// Positive control needs pages that no longer exist in the worktree. `_withdrawn/` is
// absent from this tree, so historical revisions come from git object reads (read-only:
// `git show`, never checkout/restore). Format: --git-show <sha>:<content-path>
const GIT_SHOW = [];
for (let i = 0; i < argv.length; i++) {
  if (argv[i] === '--git-show' && argv[i + 1]) GIT_SHOW.push(argv[++i]);
  else if (argv[i] === '--git-show' && !argv[i + 1]) { sayErr('--git-show needs <sha>:<path>'); process.exit(2); }
}
function gitShow(spec) {
  const m = spec.match(/^([0-9a-f]{7,40}):(.+)$/);
  if (!m) throw new Error(`--git-show spec must be <sha>:<path>, got "${spec}"`);
  try {
    return cpExecFileSync('git', ['show', `${m[1]}:${m[2]}`], { cwd: ROOT, encoding: 'utf8', maxBuffer: 1e9 });
  } catch (e) {
    throw new Error(`git show ${m[1]}:${m[2]} failed — ${String(e.stderr || e.message).split('\n')[0]}`);
  }
}

const batchRaw = readBatch();
// --selftest takes no arguments: it injects its own known-good and known-bad pages so that
// "the harness can detect a bad page" becomes a runnable claim instead of an assertion.
const SELFTEST_GOOD = ['content/v1.4.6/zh/api/core-extra/ItemObject.md', 'content/v1.5.3/zh/api/campaign/Campaign.md', 'content/v1.4.7/en/api/campaign/Campaign.md'];
const SELFTEST_BAD_DISK = 'content/v1.3.0/en/api/core-extra/AgentAttackType.md';
const SELFTEST_BAD_GIT = [
  { spec: '361b5fdf6e:docs/v1.3.0/zh/api/mission/MissionBehavior.md', expect: 'CustomMissionBehavior', category: 'category=fabricated' },
  { spec: 'e8356e504c:content/v1.4.5/zh/api/core-extra/GameModelsManager.md', expect: 'CustomGameModelsManager', category: 'category=fabricated' },
];
const usage = () => {
  sayErr('usage:');
  sayErr('  node tools/_review_batch_check.mjs --batch <file.txt>');
  sayErr('  node tools/_review_batch_check.mjs content/a.md content/b.md');
  sayErr('  node tools/_review_batch_check.mjs --git-show <sha>:<content/path.md>');
  sayErr('  node tools/_review_batch_check.mjs --selftest        (no arguments; proves each check FAILS on known-bad pages)');
  sayErr('  optional: --json  --strict-crossversion  --skip-lane-wide  --marker-allow <path>  --repo <root>');
  sayErr('exit codes: 0 = checks ran, all pages passed | 1 = checks ran, >=1 page failed');
  sayErr('            2 = a check DID NOT RUN (fail closed) | 64 = usage/argument error');
};
if (!SELFTEST && (!batchRaw || (batchRaw.length === 0 && GIT_SHOW.length === 0))) {
  usage();
  sayErr('deep: DID NOT RUN'); sayErr('fabricated: DID NOT RUN'); sayErr('marker: DID NOT RUN');
  process.exit(EXIT.USAGE);
}

let batch = batchRaw.filter((p) => !p.startsWith('__gitshow__:')).map((p) => (isAbsolute(p) ? p : resolve(ROOT, p)));
let gitshowSpecs = GIT_SHOW.length ? GIT_SHOW : batchRaw.filter((p) => p.startsWith('__gitshow__:')).map((p) => p.slice('__gitshow__:'.length));
if (SELFTEST) {
  batch = SELFTEST_GOOD.concat(SELFTEST_BAD_DISK).map((p) => resolve(ROOT, p));
  gitshowSpecs = SELFTEST_BAD_GIT.map((g) => g.spec);
}
const missing = batch.filter((p) => !existsSync(p) || !statSync(p).isFile());
if (missing.length) {
  sayErr('BATCH CONTAINS PATHS THAT DO NOT EXIST — refusing to measure a partial batch:');
  missing.forEach((m) => sayErr('  ' + m));
  sayErr('deep: DID NOT RUN'); sayErr('fabricated: DID NOT RUN'); sayErr('marker: DID NOT RUN');
  process.exit(EXIT.USAGE);
}

// ------------------------------------------------------------------ corpora (read-only)
const corpusCache = new Map();
function corpusFor(lane) {
  if (corpusCache.has(lane)) return corpusCache.get(lane);
  const src = sourceRootFor(lane);
  if (!src) { corpusCache.set(lane, { error: `source tree not found for lane ${lane} (looked for ../bannerlord-${lane.replace(/^v/, '')})` }); return corpusCache.get(lane); }
  const files = walkCs(src);
  if (files.length === 0) { corpusCache.set(lane, { error: `source tree for ${lane} contains no .cs files (${src})` }); return corpusCache.get(lane); }
  const parts = [];
  for (const f of files) { try { parts.push(readFileSync(f, 'utf8')); } catch { /* unreadable file is not fatal */ } }
  const corpus = parts.join('\n');
  const control = antiFab.CONTROL_IDENTIFIERS.map((id) => ({ id, found: new RegExp(`\\b${id}\\b`).test(corpus) }));
  const dead = control.filter((c) => !c.found).map((c) => c.id);
  corpusCache.set(lane, dead.length ? { error: `POSITIVE CONTROL FAILED for ${lane}: ${dead.join(', ')} not found in ${src} — misses would be meaningless`, control } : { corpus, files: files.length, control, src });
  return corpusCache.get(lane);
}
const lanePaths = [...batch.map((p) => rel(p)), ...gitshowSpecs.map((s) => s.slice(s.indexOf(':') + 1))];
const lanesUsed = [...new Set(lanePaths.map((p) => laneOf(p)).filter(Boolean))];
const laneProblems = [];
for (const lane of lanesUsed) { if (!lane) continue; const c = corpusFor(lane); if (c.error) laneProblems.push(c.error); }

// ------------------------------------------------------------------ checks
// ------------------------------------------------------------------ cross-version framing
// A page may legitimately cite an identifier that does not exist in the version its own
// `**File:**` points at, because it is describing a DIFFERENCE between versions. Absence
// from the target tree therefore proves nothing on its own. Confirmed false positives:
//   content/v1.4.6/.../ItemModifier.md cites IsBeneficial, absent from all of 1.3.0, while
//   explicitly framing it as a 1.4.6+ addition (page is correct);
//   a view-model page's block 13 shows a 4-arg constructor absent from 1.3.0, inside a block
//   explicitly labelled a cross-version difference (page is correct).
// So every absence is reported as `identifier_absent_in_<tree>`, and the category is decided
// by framing: version-difference framing -> `cross_version_reference_suspected` for a human
// to adjudicate; no such framing -> `fabricated` (the page asserts it as current-version API).
const VERSION_TOKEN_RE = /(?:^|[^\d.])v?(\d+\.\d+\.\d+)(?:[^\d.]|$)/g;
const CROSS_VERSION_WORDS_RE = /跨版本|cross[- ]?version|版本差异|version difference|新增于|added in|does not exist|not available in|不存在于|仅在|only in|在\s*1\.\d|since\s+1\.\d/iu;
function versionTokensIn(s) {
  const out = new Set();
  let m;
  VERSION_TOKEN_RE.lastIndex = 0;
  while ((m = VERSION_TOKEN_RE.exec(s))) out.add(m[1]);
  return out;
}
// Returns a tiered framing signal:
//   'block' — a version-difference token or wording sits next to the fence (strong signal)
//   'page'  — some other version is named somewhere on the page (weak signal)
//   null    — no framing found anywhere
function framingEvidence(text, blockText, pageVersion) {
  const othersPage = [...versionTokensIn(text)].filter((v) => v !== pageVersion);
  const window = blockText; // caller passes the fence-local context
  const othersBlock = [...versionTokensIn(window)].filter((v) => v !== pageVersion);
  const words = CROSS_VERSION_WORDS_RE.test(window);
  if (othersBlock.length || words) return { tier: 'block', others: othersBlock, words };
  if (othersPage.length) return { tier: 'page', others: othersPage, words: false };
  return { tier: null, others: [], words: false };
}

// block window helper: slice the page text around the Nth csharp fence
function blockContext(text, blockNumber) {
  const blocks = [];
  const re = /```csharp\r?\n([\s\S]*?)```/g;
  let m;
  while ((m = re.exec(text))) blocks.push({ body: m[1], at: m.index, end: m.index + m[0].length });
  const b = blocks[blockNumber - 1];
  if (!b) return { body: '', before: '', after: '' };
  return { body: b.body, before: text.slice(Math.max(0, b.at - 600), b.at), after: text.slice(b.end, b.end + 600) };
}

// The lib's checkPage(fileAbs, corpus) reads the file itself, so it cannot be used on a
// revision that exists only in git. This applies the SAME policy to in-memory text using the
// lib's own exported primitives, in the order checkPage documents: page-scoped reader-owned
// identifiers, then claimed identifiers, then absence from the corpus. No policy is re-decided.
let corpusRef = '';
function absentInCorpusText(text, corpus) {
  const blocks = antiFab.csharpBlocks(text);
  const pageOwned = new Set();
  for (const b of blocks) for (const id of antiFab.readerOwnedIdentifiers(b)) pageOwned.add(id);
  const claimed = new Map();
  blocks.forEach((b, i) => {
    for (const id of antiFab.identifiersInBlock(b)) {
      if (pageOwned.has(id) || antiFab.isExampleName(id)) continue;
      if (!claimed.has(id)) claimed.set(id, i + 1);
    }
  });
  const absent = [];
  for (const [id, block] of claimed) {
    const re = new RegExp(`\\b${id.replace(/[$]/g, '\\$')}\\b`);
    if (!re.test(corpus)) absent.push({ identifier: id, block });
  }
  return { absent, readerOwned: pageOwned.size };
}

const KNOWN_STATUS = new Set(['deep_pass', 'stub', 'noise', 'family_entry_pass']);
const classifyOne = (abs, r, text, origin, corpus) => {
  const lane = laneOf(r);
  const pageVersion = lane ? lane.replace(/^v/, '') : null;

  // check 1 -- verbatim policy output
  let deep = { status: 'DID_NOT_RUN', reasons: [] };
  try {
    const out = policy.classifyPage(abs, text);
    if (!out || !KNOWN_STATUS.has(out.status)) deep = { status: 'UNKNOWN_STATUS', reasons: [JSON.stringify(out)] };
    else deep = out;
  } catch (e) { deep = { status: 'THREW', reasons: [e.message] }; }

  // check 2 -- absence-in-target-tree, classified by framing
  let fab = { count: 0, detail: [], readerOwned: 0, suspect: 0 };
  if (lane) {
    const c = corpusFor(lane);
    if (c.error) fab = { count: null, detail: [c.error], readerOwned: null, notRun: true };
    else {
      try {
        let absent, readerOwnedN;
        if (origin === 'worktree') {
          const out = antiFab.checkPage(abs, c.corpus);
          absent = out.fabrications;
          readerOwnedN = out.readerOwned.length;
        } else {
          const out = absentInCorpusText(text, c.corpus);
          absent = out.absent;
          readerOwnedN = out.readerOwned;
        }
        const hard = [], suspect = [];
          for (const f of absent) {
          const abs_ = f.identifier;
          const ctx = blockContext(text, f.block);
          const ev = framingEvidence(text, ctx.before + '\n' + ctx.body + '\n' + ctx.after, pageVersion);
          const tag = `${abs_}() [block ${f.block}] identifier_absent_in_${c.src.replace(/^.*bannerlord-/, '')}`;
          if (ev.tier === 'block') {
            suspect.push(`${tag} category=cross_version_reference_suspected framing=block versions=[${ev.others.join(',') || 'n/a'}]${ev.words ? ' + version-difference wording' : ''} -> HUMAN DECIDES`);
          } else if (ev.tier === 'page') {
            suspect.push(`${tag} category=cross_version_reference_suspected framing=page-level-only versions=[${ev.others.join(',')}] (other version named elsewhere on the page, NOT next to this block) -> HUMAN DECIDES`);
          } else {
            hard.push(`${tag} category=fabricated reason=page asserts this as ${pageVersion} API and no version-difference framing was found anywhere on the page`);
          }
        }
        fab = { count: hard.length, detail: [...hard, ...suspect], readerOwned: readerOwnedN, suspect: suspect.length };
      } catch (e) { fab = { count: null, detail: ['fabrication check threw: ' + e.message], readerOwned: null, notRun: true }; }
    }
  } else fab = { count: null, detail: ['page is outside content/vX.Y.Z/ so no source tree can be assigned'], readerOwned: null, notRun: true };

  // check 3 -- self-declaration in frontmatter only
  const fm = frontmatterOf(text);
  const markerHits = [];
  const bodyMentions = [];
  for (const d of MARKER_DIALECTS) {
    if (fm !== null && fm.includes(d.pattern)) markerHits.push(d.id + ' ("' + d.pattern + '")');
    if (text.includes(d.pattern) && !(fm !== null && fm.includes(d.pattern))) bodyMentions.push(d.id);
  }
  const markerOk = markerHits.length === 0;

  const headings = (text.match(HEADING_RE) || []).length;
  const fences = (text.match(FENCE_RE) || []).length;

  const fails = [];
  if (deep.status !== 'deep_pass') fails.push('deep=' + deep.status);
  if (fab.notRun) fails.push('fabricated=DID_NOT_RUN');
  else if (fab.count > 0) fails.push('fabricated=' + fab.count);
  if (!markerOk) fails.push('marker=' + markerHits.map((h) => h.split(' ')[0]).join('+'));
  const review = [];
  if (!fab.notRun && fab.suspect > 0) review.push('cross_version_reference_suspected=' + fab.suspect);
  return { path: r, lane, origin, bytes: Buffer.byteLength(text, 'utf8'), deep, fab, markerHits, markerOk, bodyMentions, headings, codeBlocks: Math.floor(fences / 2), fenceLines: fences, fails, review, isIndex: /_index\.md$/.test(r), allowed: MARKER_ALLOW.has(r) };
};

const rows = batch.map((abs) => classifyOne(abs, rel(abs), readFileSync(abs, 'utf8'), 'worktree'));
for (const spec of gitshowSpecs) {
  const at = spec.indexOf(':');
  const r = spec.slice(at + 1);
  let text, origin;
  try { text = gitShow(spec); origin = 'git:' + spec.slice(0, at); }
  catch (e) {
    sayErr('CANNOT READ BATCH ITEM FROM GIT — refusing to measure a partial batch:');
    sayErr('  ' + spec + '  -> ' + e.message);
    sayErr('deep: DID NOT RUN'); sayErr('fabricated: DID NOT RUN'); sayErr('marker: DID NOT RUN');
    process.exit(EXIT.USAGE);
  }
  // classifyPage needs a path (for noise-name checks); the file need not exist.
  rows.push(classifyOne(resolve(ROOT, r), r, text, origin));
}

// lane-wide (site-global within the lane) fabrication, same policy function
const laneWide = [];
const SKIP_LANE_WIDE = argv.includes('--skip-lane-wide');
for (const lane of lanesUsed) {
  if (SKIP_LANE_WIDE) { laneWide.push({ lane, skipped: true }); continue; }
  const t0 = Date.now();
  const c = corpusFor(lane);
  if (c.error) { laneWide.push({ lane, error: c.error }); continue; }
  let total = 0, scanned = 0, pagesWithFabs = 0, unreadable = 0;
  for (const p of walkMarkdown(join(ROOT, 'content', lane))) {
    scanned++;
    try {
      const out = antiFab.checkPage(p, c.corpus);
      if (out.fabrications.length) { total += out.fabrications.length; pagesWithFabs++; }
    } catch { unreadable++; }
  }
  laneWide.push({ lane, total, scanned, pagesWithFabs, unreadable, ms: Date.now() - t0, src: c.src, control: c.control.filter((x) => x.found).length + '/' + c.control.length, files: c.files });
}

// ------------------------------------------------------------------ report
const notRun = [];
if (rows.some((r) => r.deep.status === 'DID_NOT_RUN' || r.deep.status === 'THREW')) notRun.push('deep');
if (rows.some((r) => r.fab.notRun)) notRun.push('fabricated');
if (laneProblems.length) notRun.push('fabricated(site-global)');

const passing = rows.filter((r) => r.fails.length === 0 && (!STRICT_XV || r.review.length === 0));
const failing = rows.filter((r) => r.fails.length > 0 || (STRICT_XV && r.review.length > 0));
const needsReview = rows.filter((r) => r.fails.length === 0 && r.review.length > 0);

function reportFatal(list) {
  sayErr('PREFLIGHT FAILED — refusing to report anything that would read as clean:');
  list.forEach((l) => sayErr('  ' + l));
  sayErr('deep: DID NOT RUN'); sayErr('fabricated: DID NOT RUN'); sayErr('marker: DID NOT RUN');
  process.exit(EXIT.NOT_RUN);
}

if (SELFTEST) {
  const A = [];
  const check = (name, ok, detail) => A.push({ name, ok, detail });
  say('SELFTEST — proving each check FAILS on a known-bad page');
  say('');
  say('  KNOWN-GOOD (must PASS all three)');
  for (const p of SELFTEST_GOOD) {
    const row = rows.find((r) => r.path === p);
    const ok = row && row.fails.length === 0;
    check('good:' + p, !!ok, ok ? 'no findings' : 'expected no findings, got ' + (row ? row.fails.join(',') : 'ROW MISSING'));
    say('    ' + (ok ? 'OK  ' : 'FAIL') + '  ' + p + '  deep=' + (row ? row.deep.status : '?') + ' fab=' + (row && !row.fab.notRun ? row.fab.count : 'N/R') + ' marker=' + (row ? (row.markerOk ? 'none' : row.markerHits.length + ' hit') : '?'));
  }
  say('');
  say('  KNOWN-BAD (must be DETECTED)');
  const stub = rows.find((r) => r.path === SELFTEST_BAD_DISK);
  const stubOk = stub && stub.deep.status === 'stub' && stub.markerHits.some((m) => m.startsWith('class-ref/en'));
  check('bad:stub+marker:' + SELFTEST_BAD_DISK, !!stubOk, stubOk ? 'detected as stub and marker class-ref/en' : 'expected stub+class-ref/en marker, got deep=' + (stub ? stub.deep.status : '?') + ' marker=' + (stub ? stub.markerHits.join('|') : '?'));
  say('    ' + (stubOk ? 'OK  ' : 'FAIL') + '  ' + SELFTEST_BAD_DISK + '  deep=' + (stub ? stub.deep.status : '?') + ' marker=' + (stub ? stub.markerHits.join(' | ') || 'none' : '?'));
  for (const g of SELFTEST_BAD_GIT) {
    const r = g.spec.slice(g.spec.indexOf(':') + 1);
    const row = rows.find((x) => x.path === r && x.origin !== 'worktree');
    const found = row && !row.fab.notRun && row.fab.detail.some((d) => d.includes(g.expect) && d.includes(g.category));
    check('bad:absent-identifier:' + g.spec, !!found, found ? 'detected ' + g.expect + ' as ' + g.category : 'expected ' + g.expect + ' with ' + g.category + ', got ' + (row ? (row.fab.notRun ? 'DID NOT RUN' : JSON.stringify(row.fab.detail)) : 'ROW MISSING'));
    say('    ' + (found ? 'OK  ' : 'FAIL') + '  ' + g.spec + '  expect ' + g.expect + ' with ' + g.category);
    if (row) for (const d of row.fab.detail) say('              ' + d);
  }
  say('');
  say('  INSTRUMENT PREFLIGHT');
  for (const d of MARKER_DIALECTS) {
    const n = siteMarkerCount.get(d.id);
    check('marker-dialect-live:' + d.id, n > 0, n + ' site-wide frontmatter hits');
    say('    ' + (n > 0 ? 'OK  ' : 'FAIL') + '  dialect ' + d.id + ' matches ' + n + ' pages site-wide');
  }
  for (const lane of lanesUsed) {
    const c = corpusFor(lane);
    const ok = !c.error && c.control && c.control.every((x) => x.found);
    check('corpus-control:' + lane, ok, c.error || c.control.filter((x) => x.found).length + '/' + c.control.length + ' control identifiers found');
    say('    ' + (ok ? 'OK  ' : 'FAIL') + '  lane ' + lane + ' positive control ' + (c.error ? 'ERROR ' + c.error : c.control.filter((x) => x.found).length + '/' + c.control.length));
  }
  const bad = A.filter((a) => !a.ok);
  say('');
  say('  ASSERTIONS: ' + (A.length - bad.length) + '/' + A.length + ' passed');
  for (const a of A) if (!a.ok) say('    FAILED: ' + a.name + ' -> ' + a.detail);
  if (bad.length) { sayErr('SELFTEST FAILED — the harness did not behave as required. Do not cite "harness says clean" until this exits 0.'); process.exit(EXIT.FINDINGS); }
  say('SELFTEST PASSED — good pages pass, known-bad pages are detected, instrument preflight is live.');
  process.exit(EXIT.PASS);
}

if (JSON_OUT) {
  console.log(JSON.stringify({
    tool: '_review_batch_check.mjs', repo: ROOT, batchSize: rows.length,
    checks: { deep: notRun.includes('deep') ? 'DID NOT RUN' : `measured ${rows.length} pages`, fabricated: notRun.includes('fabricated') ? 'DID NOT RUN' : `measured ${rows.length} pages`, marker: `measured ${rows.length} pages (site-wide probe: ${allPages.length} pages)` },
    fabricationCategories: { fabricated: 'absent from target tree AND page asserts it as current-version API', cross_version_reference_suspected: 'absent from target tree BUT framed as a version difference — human decides' },
    siteMarkerCount: Object.fromEntries(siteMarkerCount), siteBodyOnlyCount: Object.fromEntries(siteBodyOnlyCount),
    laneWide, rows,
    summary: { pass: passing.length, fail: failing.length, needsHumanReview: needsReview.map((r) => ({ path: r.path, review: r.review, detail: r.fab.detail })), failing: failing.map((f) => ({ path: f.path, fails: f.fails, review: f.review, detail: { deep: f.deep, fab: f.fab.detail, marker: f.markerHits } })) },
  }, null, 2));
} else {
  say('REVIEW BATCH CHECK');
  if (unknownFlags.length) say('  WARNING       : unrecognised flag(s) ignored: ' + unknownFlags.join(', '));
  say('  repo            : ' + ROOT);
  say('  batch source    : ' + (BATCH_FILE ? BATCH_FILE : 'argv') + ' (' + rows.length + ' units: ' + batch.length + ' on disk' + (gitshowSpecs.length ? ', ' + gitshowSpecs.length + ' from git history' : '') + ')');
  say('  site-wide probe : ' + allPages.length + ' pages scanned for marker dialects (' + timer() + 'ms, ' + truncatedProbes + ' window-truncated re-read)');
  say('');
  say('  CHECK STATUS');
  say('    deep: ' + (notRun.includes('deep') ? 'DID NOT RUN' : `measured ${rows.length} pages`));
  say('    fabricated(batch): ' + (notRun.includes('fabricated') ? 'DID NOT RUN' : `measured ${rows.length} pages across ${lanesUsed.filter(Boolean).length} lane(s)`));
  say('    fabricated(site-global): ' + (SKIP_LANE_WIDE ? 'DID NOT RUN — --skip-lane-wide requested' : (notRun.includes('fabricated(site-global)') ? 'DID NOT RUN' : `measured ${laneWide.reduce((a, l) => a + (l.scanned || 0), 0)} pages (lane-wide, NOT this batch)`)));
  say('    marker: measured ' + rows.length + ' pages (frontmatter-only self-declaration)');
  for (const d of MARKER_DIALECTS) say(`      dialect ${d.id.padEnd(20)} site-wide frontmatter hits ${String(siteMarkerCount.get(d.id)).padStart(6)}   (body-only mentions counted per batch page, not site-wide)`);
  say('');
  say('  LANE-WIDE FABRICATION (context only — NOT the batch number)');
  for (const l of laneWide) {
    if (l.skipped) say(`    ${l.lane}: DID NOT RUN — lane-wide scan skipped on request (--skip-lane-wide)`);
    else if (l.error) say(`    ${l.lane}: DID NOT RUN — ${l.error}`);
    else say(`    ${l.lane}: ${l.total} absent-identifier hit(s) across ${l.pagesWithFabs}/${l.scanned} pages, control ${l.control}, corpus ${l.files} .cs files, ${l.ms}ms${l.unreadable ? ', ' + l.unreadable + ' unreadable' : ''}`);
  }
  say('');
  say('  PER-PAGE');
  say('    ' + 'status'.padEnd(7) + ' deep'.padEnd(16) + ' fab'.padEnd(6) + ' xv?'.padEnd(5) + ' marker'.padEnd(10) + ' bytes'.padStart(8) + ' hdgs'.padStart(6) + ' code'.padStart(6) + '  path');
  for (const r of rows) {
    const st = r.fails.length === 0 ? (r.review.length ? 'REVIEW' : 'PASS') : 'FAIL';
    say('    ' + st.padEnd(7) + (r.deep.status + (r.deep.reasons && r.deep.reasons.length ? '(' + r.deep.reasons.length + ')' : '')).padEnd(16) +
      (r.fab.notRun ? 'N/R' : String(r.fab.count)).padEnd(6) +
      (r.fab.notRun ? '-' : String(r.fab.suspect || 0)).padEnd(5) +
      (r.markerOk ? 'none' : (r.markerHits.length + ' hit')).padEnd(10) +
      String(r.bytes).padStart(8) + String(r.headings).padStart(6) + String(r.codeBlocks).padStart(6) + '  ' + r.path +
      (r.origin !== 'worktree' ? '  [' + r.origin + ']' : '') +
      (r.isIndex ? '  [index page: deep_pass is not applicable]' : ''));
  }
  say('');
  say('  fab = identifiers absent from this page\'s own version source tree');
  say('  xv? = how many of those absences are framed as a version difference (NOT auto-failures; block=next to the fence, page-level-only=weaker signal)');
  say('');
  say('  SUMMARY');
  say('    pass all three      : ' + passing.length + '/' + rows.length);
  say('    needs human review  : ' + needsReview.length + ' (cross_version_reference_suspected)');
  say('    fail                : ' + failing.length);
  const byCheck = {};
  for (const r of failing) for (const f of r.fails) byCheck[f.split('=')[0]] = (byCheck[f.split('=')[0]] || 0) + 1;
  for (const [k, v] of Object.entries(byCheck)) say('      ' + k + ': ' + v);
  if (failing.length) {
    say('');
    say('  FAILING PAGES (reject list)');
    for (const r of failing) {
      say('    ' + r.path);
      say('      deep    : ' + r.deep.status + (r.deep.reasons && r.deep.reasons.length ? '  [' + r.deep.reasons.join(', ') + ']' : ''));
      say('      fab     : ' + (r.fab.notRun ? 'DID NOT RUN — ' + r.fab.detail.join('; ') : r.fab.count + (r.fab.detail.length ? '  ' + r.fab.detail.join('  ') : '') + (r.fab.readerOwned ? '  (reader-owned example ids skipped: ' + r.fab.readerOwned + ')' : '')));
      say('      marker  : ' + (r.markerOk ? 'none' : r.markerHits.join('  ') + (r.allowed ? '  [allowed via --marker-allow]' : '')));
      say('      fails   : ' + r.fails.join(', '));
    }
  }
  if (needsReview.length) {
    say('');
    say('  NEEDS HUMAN REVIEW (cross-version references — NOT counted as failures)');
    for (const r of needsReview) {
      say('    ' + r.path);
      for (const d of r.fab.detail) say('      ' + d);
      say('      reviewer must decide: is this a correct note about a difference, or an invented name?');
    }
  }
  if (rows.some((r) => r.bodyMentions.length)) {
    say('');
    say('  NOTE  pages that mention a marker dialect in the BODY but not in frontmatter (not counted as marker hits):');
    for (const r of rows.filter((x) => x.bodyMentions.length)) say('    ' + r.path + '  -> ' + r.bodyMentions.join(','));
  }
}

if (notRun.length) {
  sayErr('');
  sayErr('RESULT: DID NOT RUN — ' + notRun.join(', ') + '. This is NOT a pass.');
  process.exit(EXIT.NOT_RUN);
}
process.exit(failing.length ? EXIT.FINDINGS : EXIT.PASS);