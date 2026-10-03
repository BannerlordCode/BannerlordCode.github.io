#!/usr/bin/env node
// tools/lib/xml-id-verifiability.mjs
//
// AXIS 2 -- "a page asserts a string id; is it labelled as unverifiable?"
//
// A doc page says `new ItemObject("viking_axe")`.  Resolving that id requires
// the game's XML module/item corpus (`id="viking_axe"`).  This workspace has no
// such corpus in ANY version tree, so such an assertion CANNOT be checked here.
// This axis therefore does not ask "is the id real?" -- it asks the only
// question that can still move: "does the page SAY that its ids are not
// checkable?"
//
// ---------------------------------------------------------------------------
// THE CRITERION, AND WHY IT IS THIS ONE
// ---------------------------------------------------------------------------
// Rejected earlier: "does this version's XML corpus exist?"  All six trees have
// .xml = 0 (MEASURED, command printed at the bottom of every run), so that
// question's answer is "no" forever.  A gate that is red forever teaches everyone
// to ignore it, and its green would have meant nothing.
//
// Adopted: "is every string-id assertion on a page that carries the explicit
// unverifiable marker?".  Red today only because pages are still unlabelled.
// It goes green as labelling lands, and green then means something true.
//
// `.xml = 0` is therefore not a verdict input.  It is printed as the REASON the
// annotation obligation exists.
//
// ---------------------------------------------------------------------------
// THE MARKER -- the contract an author writes.  Either form counts.
// ---------------------------------------------------------------------------
//   (a) HTML comment, greppable, machine-first:
//         <!-- xml-id-unverifiable -->
//         <!-- xml-id-unverifiable: v1.4.6 -->
//
//   (b) a visible line carrying BOTH the words 不可验证  AND a version token
//       (v?\d+\.\d+(\.\d+)? on the SAME line), e.g.
//         > ⚠️ 不可验证：v1.4.6 未随附 ModuleStrings XML，本页字符串 id 无法在本版本语料下核对。
//
// Recommended boilerplate for an author (both forms together, human + machine):
//   <!-- xml-id-unverifiable: v1.4.6 -->
//   > ⚠️ 不可验证：v1.4.6 源码树未随附 XML 语料，本页的字符串 id 无法在此版本下核对。
//
// ---------------------------------------------------------------------------
// VERDICTS  (exit semantics unchanged: 0 / 1 / 2, no silent downgrade)
//   0  OK          every string-id assertion found sits on a marked page.
//   1  FINDINGS    >=1 assertion sits on an UNMARKED page.
//   2  NO_VERDICT  docs unreadable / 0 pages / 0 assertions found / read errors
//                  / corpus sweep unreadable.  2 is NOT "clean" and is NEVER
//                  folded into 0 -- see tools/lib/gate-exit.mjs.
// There is NO flag anywhere in this file that makes it green.  If you want one,
// that is a human decision and it belongs in CI config, not in the ruler.
//
// ---------------------------------------------------------------------------
// BLIND SPOTS OF THIS RULER  (tools/_INTEGRATION-GATES.md § "盲区要写下来")
// What this instrument CANNOT measure:
//   * SCOPE = ```csharp fences ONLY (Boss's spec).  An id assertion written in a
//     plain ``` block, inline code, or prose is invisible: it does not appear in
//     assertions_seen.  The denominator is a LOWER BOUND.  "n/N" must never be
//     read as "n out of all id claims on the site".
//   * The receiver/method allow-list is closed and hand-written (below).  An id
//     fetched through any other API is not extracted at all.
//   * Marker detection is page-level, not assertion-level: a page with the
//     marker marks EVERY id assertion on it, including one that a future corpus
//     could verify.  Over-coverage, in the safe direction.
//   * A version token on the marker line is not matched against the page's own
//     version directory.  A page under v1.4.5/ may claim v1.4.6 and still pass.
//   * "The id appears somewhere in some .xml" is not "the id is valid for this
//     API" -- when XML exists, the id index is element-type-agnostic.
//   * Modded ids (my_mod_*, xxx) can never resolve; there is no mod-patch corpus.
//   * A page is "unmarked" if the marker is missing OR misspelled.  A typo in
//     the marker string produces the same verdict as no marker at all.
// ---------------------------------------------------------------------------
//
// READ-ONLY.  Writes nothing, stdout only.
//
// usage:
//   node tools/lib/xml-id-verifiability.mjs --selftest
//   node tools/lib/xml-id-verifiability.mjs --docs content [--src ../bannerlord-1.4.6]

import { readFileSync, existsSync, readdirSync, statSync, mkdirSync, mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { join, resolve as resolvePath } from 'node:path';
import { tmpdir } from 'node:os';
import { pathToFileURL } from 'node:url';
import { OK, FINDINGS, NO_VERDICT, exitCode } from './gate-exit.mjs';

// ---------------------------------------------------------------- markers

/** Form (a): the greppable HTML comment. */
export const MARKER_HTML = /<!--\s*xml-id-unverifiable\b[^>]*?-->/i;
/** Form (b): 不可验证 + a version token on the SAME line. */
const MARKER_TEXT_WORD = /不可验证/;
const MARKER_TEXT_VER = /\bv?\d+\.\d+(?:\.\d+)?\b/;

/** Does this page carry the annotation?  -> { marked, form, anchor } */
export function pageHasMarker(text) {
  const h = MARKER_HTML.exec(text);
  if (h) return { marked: true, form: 'HTML_COMMENT', anchor: h[0] };
  const lines = text.split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    if (MARKER_TEXT_WORD.test(lines[i]) && MARKER_TEXT_VER.test(lines[i])) {
      return { marked: true, form: 'VISIBLE_LINE', anchor: lines[i].trim().slice(0, 120) };
    }
  }
  return { marked: false, form: null, anchor: null };
}

// ---------------------------------------------------------------- extraction

// ponytail: a generic `.Get("x")` regex is the obvious version and it is wrong
// -- Dictionary/HttpClient/Configuration all have a Get whose key is not a game
// id.  Bounded beats broad: a lower bound we can defend beats a count we cannot.
const CTOR_TYPES = ['ItemObject', 'Settlement', 'CharacterObject', 'BasicCharacterObject',
  'Campaign', 'Monster', 'CampaignEvent', 'Hero', 'Clan', 'Kingdom', 'Village',
  'Formation', 'RelicObject', 'BannerEffect', 'ItemModifierGroup', 'CultureObject'];
const GETTER_RECEIVERS = ['MBObjectManager\\.Instance', 'MBObjectManager', 'Campaign\\.Current',
  'Game\\.Current\\.GameModelsManager', 'GameModelsManager', 'Game\\.Current', 'MBSettings'];
const GETTER_METHODS = ['GetObject', 'GetCampaign', 'GetSettlement', 'GetItemModel', 'GetEntityModel',
  'GetGameModel', 'GetCharacter', 'GetFormattedText', 'GetStringId'];

const ID = '[a-z][a-z0-9_]{2,}';
const RE_CTOR = new RegExp(`\\bnew\\s+(${CTOR_TYPES.join('|')})\\s*\\(\\s*"(${ID})"`, 'g');
const RE_GETTER = new RegExp(
  `(${GETTER_RECEIVERS.join('|')})\\s*\\.\\s*(${GETTER_METHODS.join('|')})\\s*(?:<[A-Za-z0-9_.]+>\\s*)?\\(\\s*"(${ID})"`, 'g');

/** Return every fenced code block with its language tag and real start line. */
export function extractCodeBlocks(text) {
  const out = [];
  const lines = text.split(/\r?\n/);
  let open = null;
  for (let i = 0; i < lines.length; i++) {
    const fence = /^\s*(?:```+|~~~+)\s*([A-Za-z0-9_+-]*)/.exec(lines[i]);
    if (fence && !open) { open = { lang: fence[1].toLowerCase(), startLine: i + 1, body: [] }; continue; }
    if (fence && open) {
      out.push({ ...open, endLine: i + 1, code: open.body.join('\n') });
      open = null;
      continue;
    }
    if (open) open.body.push(lines[i]);
  }
  if (open) out.push({ ...open, endLine: lines.length, code: open.body.join('\n') }); // unterminated
  return out;
}

/**
 * Extract string-id assertions.  codeOnly (the axis default, per spec) scans
 * ```csharp fences ONLY; the returned line numbers are file-absolute.
 */
export function extractIdAssertions(text, file = '<inline>', { codeOnly = true } = {}) {
  const out = [];
  const blocks = codeOnly ? extractCodeBlocks(text).filter((b) => b.lang === 'csharp' || b.lang === 'c#' || b.lang === 'cs') : [{ lang: '*', startLine: 0, code: text }];
  for (const b of blocks) {
    const bodyLines = b.code.split(/\r?\n/);
    for (const [k, line] of bodyLines.entries()) {
      const absLine = b.startLine + k + 1;
      RE_CTOR.lastIndex = 0;
      let m;
      while ((m = RE_CTOR.exec(line))) {
        out.push({ id: m[2], shape: `new ${m[1]}("${m[2]}")`, api: 'ctor', file, line: absLine, anchor: line.trim().slice(0, 160) });
      }
      RE_GETTER.lastIndex = 0;
      while ((m = RE_GETTER.exec(line))) {
        out.push({ id: m[3], shape: `${m[1]}.${m[2]}(... "${m[3]}")`, api: 'getter', file, line: absLine, anchor: line.trim().slice(0, 160) });
      }
    }
  }
  return out;
}

// ---------------------------------------------------------------- corpus evidence

/** Walk a tree collecting files with the given extension.  Never throws.
 *  An unreadable DIRECTORY is counted, not swallowed: a directory we cannot
 *  list shrinks the universe as silently as a file we cannot read.
 */
export function collectFiles(root, ext, out = [], depth = 0, errors = { dirs: 0 }) {
  if (depth > 14) return out;
  let entries;
  try { entries = readdirSync(root, { withFileTypes: true }); } catch { errors.dirs++; return out; }
  for (const e of entries) {
    const p = join(root, e.name);
    if (e.isDirectory()) collectFiles(p, ext, out, depth + 1, errors);
    else if (e.name.endsWith(ext)) out.push(p);
  }
  return out;
}

/** Per-tree corpus census.  Never throws. */
export function probeCorpusTree(dir, label = dir) {
  const r = { label, dir, state: 'UNMEASURED', xmlFiles: 0, csFiles: 0, readErrors: 0, dirErrors: 0, xmlIds: null, reason: '' };
  try {
    if (!existsSync(dir) || !statSync(dir).isDirectory()) { r.reason = 'root does not exist / not a directory'; return r; }
  } catch (e) { r.reason = `unreadable: ${e.message}`; return r; }
  const xErr = { dirs: 0 }, cErr = { dirs: 0 };
  r.xmlFiles = collectFiles(dir, '.xml', [], 0, xErr).length;
  r.csFiles = collectFiles(dir, '.cs', [], 0, cErr).length;
  r.dirErrors = xErr.dirs + cErr.dirs;
  if (r.xmlFiles === 0) { r.state = 'NO_XML_CORPUS'; r.reason = `.xml = 0 (dir_errors=${r.dirErrors})`; return r; }
  const ids = new Set();
  for (const f of collectFiles(dir, '.xml')) {
    let t; try { t = readFileSync(f, 'utf8'); } catch { r.readErrors++; continue; }
    for (const m of t.matchAll(/\bid\s*=\s*"([^"]+)"/g)) ids.add(m[1]);
  }
  r.state = 'XML_CORPUS_PRESENT';
  r.xmlIds = ids;
  r.reason = `${r.xmlFiles} .xml, ${ids.size} ids, ${r.readErrors} unreadable`;
  return r;
}

/** Sweep every version tree under a parent directory. */
export function sweepCorpus(parentDir) {
  let names = [];
  try { names = readdirSync(parentDir, { withFileTypes: true }).filter((e) => e.isDirectory()).map((e) => e.name).filter((n) => /^bannerlord-|^native-/.test(n)).sort(); } catch { }
  return names.map((n) => probeCorpusTree(join(parentDir, n), n));
}

// ---------------------------------------------------------------- axis

export function runAxis({ docsRoot, corpusParent, singleSrc = null, version = 'unknown', limit = 0, readFile = readFileSync, log = () => {} } = {}) {
  const axis = 'xml-id-annotation';

  // --- corpus evidence (NOT a verdict input; it is the obligation's reason) --
  const trees = singleSrc ? [probeCorpusTree(resolvePath(docsRoot, '..', singleSrc), singleSrc)] : sweepCorpus(resolvePath(docsRoot, '..', corpusParent));
  const withXml = trees.filter((t) => t.state === 'XML_CORPUS_PRESENT');
  log(`corpus census (${trees.length} tree(s)) -- this is the REASON the annotation is required, not a verdict:`);
  for (const t of trees) log(`   ${t.label.padEnd(20)} .xml=${String(t.xmlFiles).padEnd(6)} .cs=${String(t.csFiles).padEnd(7)} ${t.state}`);
  const obligation = withXml.length === trees.length && trees.length > 0;
  log(obligation
    ? '   => every tree ships XML; ids here are checkable, so the annotation obligation is NOT applied.'
    : `   => ${trees.filter((t) => t.state === 'NO_XML_CORPUS').length}/${trees.length} trees have .xml=0, so string ids CANNOT be resolved in this workspace; pages asserting them must say so explicitly.`);
  if (trees.length === 0 || trees.every((t) => t.state === 'UNMEASURED')) {
    return { axis, verdict: NO_VERDICT, numerator: 0, denominator: 0, unit: 'string-id assertions',
      note: 'corpus sweep unreadable: cannot state the reason for the annotation obligation' };
  }

  // --- the actual measurement: annotation compliance -------------------------
  const dirErrors = { dirs: 0 };
  const files = collectFiles(docsRoot, '.md', [], 0, dirErrors);
  const pages = limit > 0 ? files.slice(0, limit) : files;
  let readErrors = 0, markedPages = 0, pagesWithAssertions = 0, unannotated = 0, seen = 0;
  const offenders = [];
  for (const f of pages) {
    let t;
    // `readFile` is an injectable seam: on Windows a broken symlink (the
    // obvious way to make readFileSync throw) needs a privilege this box does
    // not grant (EPERM), so without the seam this branch is untestable.
    try { t = readFile(f, 'utf8'); } catch { readErrors++; continue; }
    const found = extractIdAssertions(t, f, { codeOnly: true });
    if (!found.length) continue;
    seen += found.length;
    pagesWithAssertions++;
    if (obligation) { markedPages++; continue; }
    const mk = pageHasMarker(t);
    if (mk.marked) { markedPages++; continue; }
    unannotated += found.length;
    for (const a of found) offenders.push(a);
  }

  // BLINDNESS FIRST.  A page we could not read, a directory we could not list,
  // or a corpus we could not enumerate makes the population unknown. That is
  // NO_VERDICT and it outranks any finding.
  // This is decided HERE, as the axis's own verdict, because gate-exit.mjs's
  // exitCode() reads `verdict` only -- a count left in `note` cannot travel.
  const corpusBlind = trees.reduce((n, t) => n + t.readErrors + t.dirErrors, 0);
  const blind = readErrors + dirErrors.dirs + corpusBlind;

  const verdict = blind > 0 ? NO_VERDICT
    : pages.length === 0 ? NO_VERDICT
      : seen === 0 ? NO_VERDICT
        : unannotated > 0 ? FINDINGS : OK;

  log(`pages scanned=${pages.length}  pages_with_id_assertions=${pagesWithAssertions}  pages_carrying_marker=${markedPages}  assertions_seen=${seen}  unannotated=${unannotated}`);
  log(`blindness: page_read_errors=${readErrors} page_dir_errors=${dirErrors.dirs} corpus_errors=${corpusBlind} total=${blind}`);
  if (blind > 0) {
    log('  => NO_VERDICT: the population above is INCOMPLETE, so no finding may be claimed from it.');
  } else if (offenders.length) {
    const shown = offenders.slice(0, 10);
    log(`first ${shown.length} UNANNOTATED assertions (of ${unannotated}/${seen}) -- add '<!-- xml-id-unverifiable: vX.Y.Z -->' to the page:`);
    for (const a of shown) log(`   ${a.id.padEnd(24)} ${a.shape.padEnd(52)} ${a.file}:${a.line}`);
  }

  return {
    axis, verdict,
    numerator: obligation || blind > 0 ? 0 : unannotated, denominator: seen,
    unit: 'string-id assertions needing the unverifiable marker',
    // `blind` is part of the gate-exit contract: exitCode() THROWS if an axis
    // reports blind>0 while claiming OK or FINDINGS. Blindness is a field, not
    // a string in `note`, so it cannot be lost in aggregation.
    blind,
    note: `unannotated_assertions=${unannotated} / assertions_seen=${seen}; pages=${pages.length}; pages_with_assertions=${pagesWithAssertions}; marked_pages=${markedPages}; read_errors=${readErrors}; dir_errors=${dirErrors.dirs}; corpus_errors=${corpusBlind}; obligation_applied=${!obligation}`,
  };
}

// ---------------------------------------------------------------- selftest

function selftest() {
  const tmp = mkdtempSync(join(tmpdir(), 'xmlid-'));
  let pass = 0, fail = 0;
  const ck = (l, ok, extra = '') => { ok ? pass++ : fail++; console.log(`  ${ok ? 'ok  ' : 'FAIL'}  ${l}${extra ? '  ' + extra : ''}`); };

  // ---- fixtures -------------------------------------------------------------
  const docs = join(tmp, 'docs'); mkdirSync(docs, { recursive: true });

  // POSITIVE CONTROL, DIRECTION A: assertion + marker -> OK contribution.
  writeFileSync(join(docs, 'marked.md'), [
    '---', 'title: "marked"', '---', '',
    '<!-- xml-id-unverifiable: v1.4.6 -->',
    '> ⚠️ 不可验证：v1.4.6 源码树未随附 XML 语料，本页的字符串 id 无法在此版本下核对。', '',
    '```csharp', 'var axe = new ItemObject("viking_axe");', 'var town = MBObjectManager.Instance.GetObject<Settlement>("empire_west_capital");', '```', '',
  ].join('\n'));
  // POSITIVE CONTROL, DIRECTION B: assertion, NO marker -> FINDINGS contribution.
  writeFileSync(join(docs, 'unmarked.md'), [
    '---', 'title: "unmarked"', '---', '',
    '```csharp', 'var grain = new ItemObject("grain");', 'var king = MBObjectManager.Instance.GetObject<Hero>("main_hero");', '```', '',
  ].join('\n'));
  // scope check: an id in a NON-csharp fence must NOT be counted at all.
  writeFileSync(join(docs, 'plainfence.md'), [
    '---', 'title: "plain"', '---', '',
    '```', 'new ItemObject("not_counted_zzz")', '```', '',
  ].join('\n'));
  // teeth against over-reporting: negative control for the allow-list.
  writeFileSync(join(docs, 'allowlist.md'), [
    '---', 'title: "allow"', '---', '',
    '```csharp', 'var k = dict.Get("not_a_game_id");', 'var s = File.ReadAllText("also_not_an_id");', '```', '',
  ].join('\n'));

  const noXml = join(tmp, 'no-xml'); mkdirSync(noXml, { recursive: true });
  writeFileSync(join(noXml, 'A.cs'), 'class A {}');
  const withXml = join(tmp, 'with-xml'); mkdirSync(withXml, { recursive: true });
  writeFileSync(join(withXml, 'module_strings.xml'), '<ModuleStrings><Item id="viking_axe" /><Item id="grain" /><Item id="main_hero" /><Item id="empire_west_capital" /></ModuleStrings>');

  console.log('  --- extraction POSITIVE CONTROL (the ruler must SEE known literals) ---');
  const markedText = readFileSync(join(docs, 'marked.md'), 'utf8');
  const a1 = extractIdAssertions(markedText, 'marked.md');
  ck('sees new ItemObject("viking_axe") inside a ```csharp fence',
    a1.some((a) => a.id === 'viking_axe' && a.shape.startsWith('new ItemObject')), a1.map((a) => a.id).join(','));
  ck('sees MBObjectManager.Instance.GetObject<Settlement>("empire_west_capital")',
    a1.some((a) => a.id === 'empire_west_capital'));
  ck('line numbers are file-absolute, not fence-relative', a1.every((a) => a.line > 5), a1.map((a) => a.line).join(','));
  const plain = extractIdAssertions(readFileSync(join(docs, 'plainfence.md'), 'utf8'), 'p.md');
  ck('SCOPE: id in a plain ``` fence is NOT counted (csharp-only per spec)', plain.length === 0, `got ${plain.length}`);
  const allow = extractIdAssertions(readFileSync(join(docs, 'allowlist.md'), 'utf8'), 'a.md');
  ck('TEETH: allow-list rejects dict.Get("not_a_game_id") and File.ReadAllText', allow.length === 0, `got ${allow.length}`);

  console.log('');
  console.log('  --- marker detection (both documented forms) ---');
  const m1 = pageHasMarker(markedText);
  ck('marker form (a) HTML_COMMENT detected', m1.marked && m1.form === 'HTML_COMMENT', m1.anchor);
  ck('marker form (b) VISIBLE_LINE detected on a marker-only page', (() => {
    const r = pageHasMarker('> ⚠️ 不可验证：v1.4.6 无法核对。');
    return r.marked && r.form === 'VISIBLE_LINE';
  })());
  ck('不可验证 WITHOUT a version token is NOT a marker', !pageHasMarker('> ⚠️ 不可验证。').marked);
  ck('a version token WITHOUT 不可验证 is NOT a marker', !pageHasMarker('> ⚠️ 见 v1.4.6 说明。').marked);
  ck('an unmarked page has no marker', !pageHasMarker(readFileSync(join(docs, 'unmarked.md'), 'utf8')).marked);

  console.log('');
  console.log('  --- corpus census (printed as the obligation REASON, not a verdict) ---');
  const t0 = probeCorpusTree(noXml, 'fixture-no-xml');
  ck('probeCorpusTree(.xml=0) -> NO_XML_CORPUS', t0.state === 'NO_XML_CORPUS', t0.reason);
  const t1 = probeCorpusTree(withXml, 'fixture-with-xml');
  ck('probeCorpusTree(.xml>0) -> XML_CORPUS_PRESENT, 4 ids', t1.state === 'XML_CORPUS_PRESENT' && t1.xmlIds.size === 4, t1.reason);
  ck('probeCorpusTree(missing root) -> UNMEASURED', probeCorpusTree(join(tmp, 'nope'), 'x').state === 'UNMEASURED');

  console.log('');
  console.log('  --- THE TWO DIRECTIONS OF POSITIVE CONTROL ---');
  // obligation ON (.xml = 0): marked page contributes 0, unmarked contributes 2.
  const mixed = runAxis({ docsRoot: docs, singleSrc: 'no-xml', log: () => {} });
  ck('DIRECTION B: unmarked assertion page -> FINDINGS(1)', mixed.verdict === FINDINGS, `v=${mixed.verdict}`);
  ck('DIRECTION B: numerator=2 (unmarked) / denominator=4 (all csharp-fence assertions)',
    mixed.numerator === 2 && mixed.denominator === 4, `${mixed.numerator}/${mixed.denominator}`);
  ck('DIRECTION B: the marked page contributed 0 to the numerator',
    /assertions_seen=4/.test(mixed.note) && mixed.numerator === 2, mixed.note);
  ck('marked page is reported as marked, not ignored', mixed.numerator === 2);

  // DIRECTION A in isolation: ONLY the marked page -> OK(0).
  const onlyMarked = join(tmp, 'only-marked'); mkdirSync(onlyMarked, { recursive: true });
  for (const f of ['marked.md', 'plainfence.md', 'allowlist.md']) writeFileSync(join(onlyMarked, f), readFileSync(join(docs, f), 'utf8'));
  const rMarked = runAxis({ docsRoot: onlyMarked, singleSrc: 'no-xml', log: () => {} });
  ck('DIRECTION A: assertion page WITH marker -> OK(0)', rMarked.verdict === OK, `v=${rMarked.verdict} ${rMarked.note}`);
  ck('DIRECTION A: numerator=0, denominator=2 (the two csharp-fence assertions)',
    rMarked.numerator === 0 && rMarked.denominator === 2, `${rMarked.numerator}/${rMarked.denominator}`);

  // TEETH against over-reporting: when the corpus HAS xml, the obligation is
  // lifted and even an unmarked page must not be reported.
  const rLifted = runAxis({ docsRoot: docs, singleSrc: 'with-xml', log: () => {} });
  ck('TEETH: corpus ships xml -> obligation lifted -> OK(0) even with an unmarked page',
    rLifted.verdict === OK, `v=${rLifted.verdict} ${rLifted.note}`);
  ck('TEETH: obligation_applied=false is printed', /obligation_applied=false/.test(rLifted.note), rLifted.note);

  console.log('');
  console.log('  --- NO_VERDICT must never be folded into OK ---');
  const empty = runAxis({ docsRoot: join(tmp, 'no-such-docs'), singleSrc: 'no-xml', log: () => {} });
  ck('unreadable docs root -> NO_VERDICT(2)', empty.verdict === NO_VERDICT, `v=${empty.verdict}`);
  const noIds = join(tmp, 'no-ids'); mkdirSync(noIds, { recursive: true });
  writeFileSync(join(noIds, 'a.md'), '# nothing to see');
  ck('0 assertions seen -> NO_VERDICT(2), not OK', runAxis({ docsRoot: noIds, singleSrc: 'no-xml', log: () => {} }).verdict === NO_VERDICT);
  const rNoCorpus = runAxis({ docsRoot: docs, singleSrc: 'no-such-corpus', log: () => {} });
  ck('corpus root unreadable -> NO_VERDICT(2)', rNoCorpus.verdict === NO_VERDICT, `v=${rNoCorpus.verdict}`);

  console.log('');
  console.log('  --- AXIS OWNS ITS OWN BLINDNESS (no external guard may rescue it) ---');
  const boom = () => { throw Object.assign(new Error('injected EACCES'), { code: 'EACCES' }); };
  const rBlindRead = runAxis({ docsRoot: docs, singleSrc: 'no-xml', readFile: boom, log: () => {} });
  ck('POSITIVE CONTROL: every page unreadable -> this axis returns 2 BY ITSELF',
    rBlindRead.verdict === 2, `v=${rBlindRead.verdict}`);
  ck('  ...and it declares blind > 0 so exitCode() can enforce the contract',
    rBlindRead.blind > 0, `blind=${rBlindRead.blind}`);
  ck('  ...and it withholds its numerator rather than claiming a finding over an incomplete population',
    rBlindRead.numerator === 0, `numerator=${rBlindRead.numerator}`);
  ck('NEGATIVE CONTROL: same docs, reader works -> NOT 2, so the 2 came from the failure',
    runAxis({ docsRoot: docs, singleSrc: 'no-xml', log: () => {} }).verdict === 1,
    `v=${runAxis({ docsRoot: docs, singleSrc: 'no-xml', log: () => {} }).verdict}`);
  ck('A partially-blind run (reader dies after 1 page) is still 2',
    (() => { let n = 0; const r = runAxis({ docsRoot: docs, singleSrc: 'no-xml', readFile: (f, e) => { if (n++ > 0) boom(); return readFileSync(f, e); }, log: () => {} }); return r.verdict === 2 && r.blind > 0; })(),
    `v=${(() => { let n = 0; return runAxis({ docsRoot: docs, singleSrc: 'no-xml', readFile: (f, e) => { if (n++ > 0) boom(); return readFileSync(f, e); }, log: () => {} }); })().verdict}`);
  ck('survives gate-exit aggregation as 2, unaided',
    (() => { try { return exitCode([rBlindRead]) === 2; } catch { return false; } })());

  rmSync(tmp, { recursive: true, force: true });
  console.log(`\n  selftest: ${pass} passed, ${fail} failed`);
  if (fail) { console.error('  THE RULER HAS NO TEETH (or it is blind). Refusing to issue a verdict.'); process.exit(2); }
  console.log('  teeth confirmed.');
  process.exit(0);
}

// ---------------------------------------------------------------- CLI
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  if (process.argv.includes('--selftest')) selftest();
  else {
    const argv = process.argv.slice(2);
    const opt = (n, d) => { const i = argv.indexOf(n); return i >= 0 && argv[i + 1] ? argv[i + 1] : d; };
    const REPO = resolvePath(new URL('../..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1').replace(/[/\\]$/, ''));
    const res = runAxis({
      docsRoot: resolvePath(REPO, opt('--docs', 'content')),
      corpusParent: '..',
      singleSrc: opt('--src', null),
      version: opt('--version', 'unknown'),
      limit: Number(opt('--limit', '0')) || 0,
      log: console.log,
    });
    console.log(`\naxis2 verdict=${res.verdict}`);
    console.log(`  (1) 应标注而未标注  numerator : ${res.numerator}`);
    console.log(`  (2) 断言总数        denominator: ${res.denominator}`);
    console.log(`  note                      : ${res.note}`);
    process.exit(res.verdict);
  }
}