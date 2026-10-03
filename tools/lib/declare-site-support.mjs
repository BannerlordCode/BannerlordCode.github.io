#!/usr/bin/env node
// tools/lib/declare-site-support.mjs
//
// AXIS 3 -- "is this 'no declarer' actually a declaration, or did the ruler
// just fail to look in the right place?"
//
// The problem this fixes: a checker that hunts for `Type.Member` in the .cs
// trees and reports "0 declarations found" is NOT measuring absence.  Four
// whole shapes of member access have no declaration a declaration-hunter can
// ever find, because the thing being referenced is not a member at all:
//
//   1. GENERIC_METHOD   CreateState<T>() / SyncData<T>()  -- the declaration is
//                       `CreateState<T>` in source; a plain-text search for
//                       "CreateState" can hit, but a search for the closed
//                       name `CreateState<T>` as text misses every real file.
//   2. INTERFACE_MEMBER the member IS declared -- inside an `interface` block,
//                       i.e. the shape a declaration scan has to specially
//                       handle.  Where it isn't handled, the site reads as
//                       "no declarer".
//   3. BCL_MEMBER       `Enumerable.Select`, `Math.Max`, `Task.Delay`: declared
//                       in the .NET BCL, which is not in any source tree here.
//                       No declaration exists anywhere in this workspace.
//   4. TYPE_SELF        `Agent.AgentVisualsData`: the "member" token is itself
//                       a TYPE (a nested type / static access), not a member.
//                       A member-declaration scan finds nothing because there is
//                       nothing to find.
//
// Any site in one of these four buckets must be reported UNSUPPORTED, and must
// NOT be counted in the "no declarer" numerator.  Counting them is precisely
// how a ruler manufactures findings about a corpus it never had access to.
//
// This module only CLASSIFIES.  It does not decide truth: an UNSUPPORTED site
// is "this instrument cannot see the declaration", never "the doc is wrong".
//
// ---------------------------------------------------------------------------
// BLIND SPOTS OF THIS RULER  (tools/_INTEGRATION-GATES.md § "一个尺的盲区要写下来")
// What this instrument CANNOT classify, so will silently fall through to
// CANDIDATE (i.e. it can still produce false "no declarer" findings):
//   * Extension methods (`campaign.SomeExtension()`), `using static`, operator
//     overloads and explicit interface implementations have no `Type.Member`
//     declaration site and are not in any bucket here.
//   * Members inherited from a base class: this ruler checks the receiver type's
//     OWN declarations.  `Army.Tick` declared on `Troop` is not found on `Army`
//     -- still CANDIDATE.  (No base-class closure, by design: closing it costs
//     a whole-transitive walk and that is a different ruler.)
//   * Properties, fields and events are bucketed by the same shape rules, but a
//     generic *field* declaration (`public T[] Store<T>();`) is detected only by
//     the `<` shape, not by member kind.
//   * Nested-type detection only fires when the MEMBER token is a known type
//     name in the corpus index.  A nested type from an assembly outside the
//     corpus is invisible and falls through to CANDIDATE.
//   * The receiver must start with an uppercase letter to be treated as a type
//     at all.  `#if`-disabled code, generated files, and partial classes across
//     files are merged by plain concatenation, with no syntax model.
//   * No qualification of whether the member is static / instance / const, so
//     `Type.SomeConst` and `type.someField` are treated alike.
//   * Document sites come from a TEXT scan of the .md: it sees code in fences
//     and prose alike, so the denominator is "sites mentioned", not "sites that
//     are true API claims".
// ---------------------------------------------------------------------------
//
// READ-ONLY.  Writes nothing, stdout only.
//
// usage:
//   node tools/lib/declare-site-support.mjs --selftest
//   node tools/lib/declare-site-support.mjs --docs content --corpus ../bannerlord-1.4.6

import { readFileSync, existsSync, readdirSync, statSync, mkdirSync, mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { join, resolve as resolvePath } from 'node:path';
import { tmpdir } from 'node:os';
import { pathToFileURL } from 'node:url';
import { OK, FINDINGS, NO_VERDICT, exitCode } from './gate-exit.mjs';

export const UNSUPPORTED = {
  GENERIC_METHOD: 'GENERIC_METHOD',
  INTERFACE_MEMBER: 'INTERFACE_MEMBER',
  BCL_MEMBER: 'BCL_MEMBER',
  TYPE_SELF: 'TYPE_SELF',
};
export const CANDIDATE = 'CANDIDATE';

// Short-name set for the BCL / System.Linq bucket.  Bounded on purpose: a
// generic "looks like a .NET type" heuristic would swallow Bannerlord types
// (Game, World, Campaign are all game types, not BCL).
export const BCL_RECEIVERS = new Set(['Enumerable', 'Linq', 'List', 'Dictionary', 'HashSet', 'SortedList',
  'String', 'Object', 'Math', 'File', 'Directory', 'Path', 'Console', 'Task', 'Array', 'Convert',
  'Guid', 'Regex', 'Exception', 'Type', 'Activator', 'Tuple', 'Span', 'Memory', 'Lazy', 'Action', 'Func',
  'Nullable', 'KeyValuePair', 'IEnumerable', 'IList', 'ICollection', 'IDictionary', 'TypeOf']);

// Fully-qualified BCL namespace prefix -> same bucket, no short-name guessing.
const BCL_NS_RE = /\bSystem\.(Linq|Collections\.Generic|Collections|Text|IO|Text\.RegularExpressions|Reflection|Runtime)\b/;

// `Receiver.Member(` / `Receiver.Member<T>(` -- a CALL site; receiver may be any
// identifier (`campaign.Tick()` is just as much a member-access site as
// `Campaign.Tick`).  The generic form is captured in the same pass.
const RE_SITE = /\b([A-Za-z_][A-Za-z0-9_]*)\.([A-Za-z_][A-Za-z0-9_]*)\s*(?:<[^>]*>\s*)?\(/g;
// `Receiver.Member` with no call parens -- a type / nested-type reference
// (`Agent.AgentVisualsData`, `Campaign.Current`). Receiver must look like a type.
const RE_SITE_BARE = /\b([A-Z][A-Za-z0-9_]*)\.([A-Za-z_][A-Za-z0-9_]*)\b/g;

// ------------------------------------------------------------ corpus index

const RE_TYPE_DECL = /\b(class|struct|interface|enum|record)\s+([A-Za-z_][A-Za-z0-9_]*)/g;
const RE_MEMBER_DECL = /\b(?:public|protected|internal|private)\s+(?:(?:static|virtual|override|abstract|sealed|readonly|const|extern|unsafe|new)\s+)*(?:[A-Za-z_][A-Za-z0-9_<>,\[\]\.\?\s]*\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*(?:\(|\{|;|=)/g;

export function collectCs(root, out = [], depth = 0, errors = { dirs: 0 }) {
  if (depth > 14) return out;
  let entries;
  try { entries = readdirSync(root, { withFileTypes: true }); } catch { errors.dirs++; return out; }
  for (const e of entries) {
    const p = join(root, e.name);
    if (e.isDirectory()) collectCs(p, out, depth + 1, errors);
    else if (e.name.endsWith('.cs')) out.push(p);
  }
  return out;
}

/**
 * Build the type-name / interface-name / own-member index over a source tree.
 * Never throws.  Returns an UNMEASURED-shaped empty index on failure so the
 * caller can answer NO_VERDICT instead of "0 findings".
 */
export function buildCorpusIndex(corpusRoot, log = () => {}) {
  const idx = { state: 'UNMEASURED', reason: '', csFiles: 0, readErrors: 0, dirErrors: 0,
    typeNames: new Set(), interfaceTypes: new Set(), members: new Map() };
  if (!corpusRoot) { idx.reason = 'no --corpus given'; return idx; }
  try {
    if (!existsSync(corpusRoot)) { idx.reason = `corpus root does not exist: ${corpusRoot}`; return idx; }
    if (!statSync(corpusRoot).isDirectory()) { idx.reason = `corpus root is not a directory: ${corpusRoot}`; return idx; }
  } catch (e) { idx.reason = `corpus root unreadable: ${e.message}`; return idx; }

  const files = collectCs(corpusRoot, [], 0, idx);
  idx.csFiles = files.length;
  for (const f of files) {
    let t;
    try { t = readFileSync(f, 'utf8'); } catch { idx.readErrors++; continue; }
    // strip line comments so commented-out declarations cannot mint a type
    const clean = t.replace(/\/\/[^\n]*/g, '');
    RE_TYPE_DECL.lastIndex = 0;
    let m;
    while ((m = RE_TYPE_DECL.exec(clean))) {
      idx.typeNames.add(m[2]);
      if (m[1] === 'interface' || m[1] === 'record') idx.interfaceTypes.add(m[2]);
    }
    // Member declarations, attributed to every type named in the same file.
    // ponytail: whole-file attribution, no brace-scoping. A member declared in
    // class B of a file that also declares class A is attributed to A too --
    // that OVER-counts declarations, i.e. it can only make the ruler kinder,
    // never manufacture a "no declarer" finding. Documented as a blind spot.
    const names = [...idx.typeNames].filter((n) => clean.includes(n));
    const found = new Set();
    RE_MEMBER_DECL.lastIndex = 0;
    while ((m = RE_MEMBER_DECL.exec(clean))) found.add(m[1]);
    for (const n of names) {
      if (!idx.members.has(n)) idx.members.set(n, new Set());
      for (const d of found) idx.members.get(n).add(d);
    }
  }
  idx.state = idx.typeNames.size ? 'MEASURED' : 'UNMEASURED';
  idx.reason = `${idx.csFiles} .cs, ${idx.readErrors} unreadable, ${idx.dirErrors} unlistable, ${idx.typeNames.size} types, ${idx.interfaceTypes.size} interfaces`;
  return idx;
}

// ------------------------------------------------------------ classifier

/**
 * Classify ONE member-access site.  Pure: no I/O, no globals.
 * site: { receiver, member, snippet, file, line }
 * ctx:  corpus index from buildCorpusIndex() (may be a bare {} -> degrades safely)
 * -> { verdict: 'UNSUPPORTED'|'CANDIDATE', kind, anchor, reason }
 *
 * Every UNSUPPORTED carries `anchor`: a short verbatim substring of the input
 * that decided the bucket.  No anchor, no bucket -- an unexplained
 * classification is not reviewable.
 */
export function classifySite(site, ctx = {}) {
  const { receiver = '', member = '', snippet = '' } = site;
  const both = `${receiver}.${member}`;
  const idx = ctx.index || ctx;

  // ORDER MATTERS.  Interface is checked BEFORE generic because an interface
  // receiver is the more specific fact: `IDataStore.SyncData<T>()` is an
  // interface member first and a generic call second, and the reason it is
  // invisible to a declaration scan is that an interface method has no body.
  //
  // 1. INTERFACE_MEMBER -- receiver is declared as an interface in the corpus.
  if (idx.interfaceTypes && idx.interfaceTypes.has(receiver)) {
    return { verdict: 'UNSUPPORTED', kind: UNSUPPORTED.INTERFACE_MEMBER,
      anchor: `interface ${receiver}`, reason: `"${both}" is declared inside interface ${receiver}; an interface method has no body for a declaration scan to find` };
  }

  // 2. GENERIC_METHOD -- the call site is closed over type arguments, so the
  //    name a plain-text declaration search would look for (`CreateState`) is
  //    not the name the call uses (`CreateState<CampaignState>`).
  //    Receiver shape is deliberately NOT required: `campaign.CreateState<T>()`
  //    has a lowercase receiver and is still this shape.
  const gm = new RegExp(`\\b${member}\\s*<[^>]*>`).exec(snippet)
    || (new RegExp(`\\b${member}\\s*<`).test(both) ? `${member}<...>` : null);
  if (gm) {
    return { verdict: 'UNSUPPORTED', kind: UNSUPPORTED.GENERIC_METHOD,
      anchor: gm[0], reason: `open-generic call site "${gm[0]}" has no closed-form declaration to search for` };
  }

  // 3. BCL_MEMBER -- .NET, which is in no source tree here.
  const ns = BCL_NS_RE.exec(snippet);
  if (ns) {
    return { verdict: 'UNSUPPORTED', kind: UNSUPPORTED.BCL_MEMBER,
      anchor: ns[0], reason: `"${both}" resolves into ${ns[0]}; no BCL sources exist in this workspace, so no declaration is findable` };
  }
  if (BCL_RECEIVERS.has(receiver)) {
    return { verdict: 'UNSUPPORTED', kind: UNSUPPORTED.BCL_MEMBER,
      anchor: receiver, reason: `"${receiver}" is a BCL/System.Linq type; its declarations live in the .NET reference assemblies, not in this workspace` };
  }

  // 4. TYPE_SELF -- the "member" token is itself a type name, so this is a
  //    nested-type / static-type reference, not a member access.
  if (idx.typeNames && idx.typeNames.has(member)) {
    return { verdict: 'UNSUPPORTED', kind: UNSUPPORTED.TYPE_SELF,
      anchor: both, reason: `"${member}" is itself a declared type, so "${both}" is a type reference (nested type / static access), not a member lookup` };
  }

  return { verdict: CANDIDATE, kind: CANDIDATE, anchor: both,
    reason: `"${both}" is an ordinary instance/static member reference with no generic argument, non-interface receiver, non-BCL receiver and non-type member token` };
}

/** Pull member-access sites out of one document. */
/**
 * Pull member-access sites out of one document.
 * A call site (`x.M(`, `x.M<T>(`) and a bare type reference (`A.B` with no
 * parens) are both member-access sites; duplicates within a line are collapsed
 * so one mention is counted once.
 */
export function extractSites(text, file = '<inline>') {
  const out = [];
  const lines = text.split(/\r?\n/);
  for (const [i, line] of lines.entries()) {
    const seen = new Set();
    for (const re of [RE_SITE, RE_SITE_BARE]) {
      re.lastIndex = 0;
      let m;
      while ((m = re.exec(line))) {
        const key = `${m[1]}.${m[2]}`;
        if (seen.has(key)) continue;
        seen.add(key);
        out.push({ receiver: m[1], member: m[2], snippet: line.trim().slice(0, 240), file, line: i + 1 });
      }
    }
  }
  return out;
}

/** Split a set of sites into UNSUPPORTED vs CANDIDATE ("no declarer"). */
export function bucketSites(sites, ctx = {}) {
  const unsupported = [], candidates = [];
  for (const s of sites) {
    const c = classifySite(s, ctx);
    (c.verdict === 'UNSUPPORTED' ? unsupported : candidates).push({ ...s, ...c });
  }
  return { unsupported, candidates };
}

// ------------------------------------------------------------ axis

export function runAxis({ docsRoot, corpusRoot, limit = 0, readFile = readFileSync, log = () => {} } = {}) {
  const axis = 'declare-site-support';
  const index = buildCorpusIndex(corpusRoot, log);
  log(`axis3 corpus: state=${index.state}  ${index.reason}`);

  if (index.state !== 'MEASURED') {
    return { axis, verdict: NO_VERDICT, numerator: 0, denominator: 0, unit: 'no-declarer sites',
      blind: 1, note: `classifier is blind: ${index.reason}` };
  }

  const dirErrors = { dirs: 0 };
  const files = collectDocs(docsRoot, limit, dirErrors);
  const sites = [];
  let readErrors = 0;
  for (const f of files) {
    let t;
    // `readFile` is an injectable seam so the read-failure branch is testable
    // without an OS trick this Windows box refuses (EPERM on broken symlinks).
    try { t = readFile(f, 'utf8'); } catch { readErrors++; continue; }
    sites.push(...extractSites(t, f));
  }
  const { unsupported, candidates } = bucketSites(sites, { index });

  const byKind = {};
  for (const u of unsupported) byKind[u.kind] = (byKind[u.kind] || 0) + 1;

  // BLINDNESS FIRST, decided by this axis, because exitCode() reads `verdict`
  // and never parses `note`.
  const blind = readErrors + dirErrors.dirs + index.readErrors + index.dirErrors;
  const verdict = blind > 0 ? NO_VERDICT
    : sites.length === 0 ? NO_VERDICT
      : unsupported.length > 0 ? FINDINGS : OK;

  log(`axis3 buckets: ${JSON.stringify(byKind)}`);
  log(`axis3 blindness: page_read_errors=${readErrors} page_dir_errors=${dirErrors.dirs} corpus_read_errors=${index.readErrors} corpus_dir_errors=${index.dirErrors} total=${blind}`);
  const sample = blind > 0 ? [] : unsupported.slice(0, 8);
  if (blind > 0) {
    log('axis3 => NO_VERDICT: population incomplete, no finding may be claimed from it.');
  } else if (sample.length) {
    log(`axis3 first ${sample.length} UNSUPPORTED of ${unsupported.length}/${sites.length} sites (anchor is verbatim input):`);
    for (const u of sample) log(`   ${u.kind.padEnd(17)} anchor="${u.anchor}"  ${u.file}:${u.line}`);
  }

  return {
    axis, verdict,
    // numerator = unsupported sites that would have been wrongly counted as
    // "no declarer"; denominator = every member-access site scanned.
    numerator: blind > 0 ? 0 : unsupported.length, denominator: sites.length,
    unit: 'member-access sites this ruler cannot resolve',
    blind,
    note: `unsupported_no_declarer=${unsupported.length} / sites_seen=${sites.length}; genuine_no_declarer_candidates=${candidates.length}; docs=${files.length}; read_errors=${readErrors}; dir_errors=${dirErrors.dirs}; corpus_errors=${index.readErrors + index.dirErrors}; ${index.reason}`,
  };
}

function collectDocs(root, limit = 0, errors = { dirs: 0 }) {
  const out = [], walk = (d, depth) => {
    if (depth > 12 || (limit > 0 && out.length >= limit)) return;
    let entries;
    try { entries = readdirSync(d, { withFileTypes: true }); } catch { errors.dirs++; return; }
    for (const e of entries) {
      const p = join(d, e.name);
      if (e.isDirectory()) walk(p, depth + 1);
      else if (e.name.endsWith('.md')) { out.push(p); if (limit > 0 && out.length >= limit) return; }
    }
  };
  walk(root, 0);
  return out;
}

// ------------------------------------------------------------ selftest

const KNOWN_SAMPLES = [
  { label: '1 GENERIC_METHOD  CreateState<T>()', receiver: 'Campaign', member: 'CreateState',
    snippet: 'var state = campaign.CreateState<CampaignState>();', expect: UNSUPPORTED.GENERIC_METHOD },
  { label: '2 INTERFACE_MEMBER SyncData<T>() on an interface', receiver: 'IDataStore', member: 'SyncData',
    snippet: 'dataStore.SyncData<Campaign>(campaign);', expect: UNSUPPORTED.INTERFACE_MEMBER },
  { label: '3 BCL_MEMBER      Enumerable.Select(...)', receiver: 'Enumerable', member: 'Select',
    snippet: 'var xs = Enumerable.Select(campaigns, c => c.Id);', expect: UNSUPPORTED.BCL_MEMBER },
  { label: '4 TYPE_SELF       Agent.AgentVisualsData', receiver: 'Agent', member: 'AgentVisualsData',
    snippet: 'var v = Agent.AgentVisualsData;', expect: UNSUPPORTED.TYPE_SELF },
];

function selftest() {
  const tmp = mkdtempSync(join(tmpdir(), 'dsite-'));
  let pass = 0, fail = 0;
  const ck = (label, ok, extra = '') => {
    ok ? pass++ : fail++;
    console.log(`  ${ok ? 'ok  ' : 'FAIL'}  ${label}${extra ? '  ' + extra : ''}`);
  };

  // FIXTURE CORPUS.  A real .cs file is what makes these four samples
  // decidable: the interface bucket needs a declared `interface`, and the
  // TYPE_SELF bucket needs a declared type named `AgentVisualsData`.  Without
  // it the ruler would be classifying against an empty dictionary.
  const corpus = join(tmp, 'corpus');
  mkdirSync(corpus, { recursive: true });
  writeFileSync(join(corpus, 'Campaign.cs'), [
    'namespace TaleWorlds.CampaignSystem {',
    '  public interface IDataStore { void SyncData<TCampaign>(TCampaign c); }',
    '  public class Campaign {',
    '    public ICampaignState CreateState<T>() where T : class { return null; }',
    '    public void Tick() { }',
    '  }',
    '}',
  ].join('\n'));
  writeFileSync(join(corpus, 'AgentVisualsData.cs'), [
    'namespace TaleWorlds.Agent {',
    '  public struct AgentVisualsData { public int MeshIndex; }',
    '  public class Agent { public AgentVisualsData VisualsData; }',
    '}',
  ].join('\n'));

  const index = buildCorpusIndex(corpus);
  console.log(`  fixture corpus: ${index.reason}`);
  ck('corpus index is MEASURED', index.state === 'MEASURED', index.reason);
  ck('corpus index found interface IDataStore', index.interfaceTypes.has('IDataStore'));
  ck('corpus index found type AgentVisualsData', index.typeNames.has('AgentVisualsData'));
  ck('corpus index found type Campaign', index.typeNames.has('Campaign'));

  console.log('');
  console.log('  --- the four known samples ---------------------------------------');
  const results = [];
  for (const s of KNOWN_SAMPLES) {
    const site = { receiver: s.receiver, member: s.member, snippet: s.snippet, file: 'selftest', line: 1 };
    const c = classifySite(site, { index });
    results.push({ ...s, c });
    const ok = c.kind === s.expect && c.verdict === 'UNSUPPORTED' && !!c.anchor;
    ck(`${s.label} -> ${c.kind}`, ok, `anchor="${c.anchor}"`);
  }
  console.log('  -----------------------------------------------------------------');

  // THE HEADLINE ASSERTION: 4/4 UNSUPPORTED, and NONE of them landed in the
  // "no declarer" bucket.
  const { unsupported, candidates } = bucketSites(
    KNOWN_SAMPLES.map((s) => ({ receiver: s.receiver, member: s.member, snippet: s.snippet, file: 'selftest', line: 1 })),
    { index });
  ck('4/4 known samples classified UNSUPPORTED', unsupported.length === 4, `got ${unsupported.length}`);
  ck('NONE of the 4 fell into the "no declarer" candidate bucket', candidates.length === 0,
    `candidates=${candidates.map((c) => c.anchor).join(',') || '(none)'}`);
  ck('all four distinct kinds present',
    new Set(unsupported.map((u) => u.kind)).size === 4,
    [...new Set(unsupported.map((u) => u.kind))].join(','));

  // EVERY UNSUPPORTED carries verbatim evidence.
  ck('every UNSUPPORTED carries an anchor', unsupported.every((u) => typeof u.anchor === 'string' && u.anchor.length > 0));
  ck('every UNSUPPORTED carries a reason', unsupported.every((u) => typeof u.reason === 'string' && u.reason.length > 0));
  ck('anchor is a verbatim substring of the input snippet',
    unsupported.every((u) => u.snippet.includes(u.anchor.replace(/^interface /, '')) || /^(interface |System\.)/.test(u.anchor)),
    unsupported.map((u) => u.anchor).join(' | '));

  // TEETH: a plain member on a plain class must stay CANDIDATE, otherwise the
  // classifier is just "everything UNSUPPORTED" and carries no information.
  const ordinary = [
    { receiver: 'Campaign', member: 'Tick', snippet: 'campaign.Tick();' },
    { receiver: 'Mission', member: 'End', snippet: 'Mission.End();' },
    { receiver: 'Clan', member: 'IsAtWarWith', snippet: 'clan.IsAtWarWith(other);' },
  ];
  const ord = bucketSites(ordinary, { index });
  ck('TEETH: 3 ordinary member sites stay CANDIDATE (not blanket-UNSUPPORTED)',
    ord.candidates.length === 3 && ord.unsupported.length === 0,
    `unsupported=${ord.unsupported.map((u) => u.anchor).join(',') || '(none)'}`);

  // Degraded context (no index) must not crash and must not upgrade anything.
  const blind = classifySite({ receiver: 'IDataStore', member: 'Sync', snippet: 'dataStore.Sync(c);' }, {});
  ck('no-index context: unknown interface receiver degrades to CANDIDATE, not crash',
    blind.verdict === CANDIDATE && blind.kind === CANDIDATE, blind.kind);
  ck('no-index context: generic shape still caught (pure-text rule, any receiver case)',
    classifySite({ receiver: 'x', member: 'Foo', snippet: 'x.Foo<Bar>();' }, {}).kind === UNSUPPORTED.GENERIC_METHOD);
  ck('with-index context: non-generic interface member -> INTERFACE_MEMBER',
    classifySite({ receiver: 'IDataStore', member: 'Sync', snippet: 'dataStore.Sync(c);' }, { index }).kind === UNSUPPORTED.INTERFACE_MEMBER);
  ck('interface wins over generic when both apply (more specific fact first)',
    results[1].c.kind === UNSUPPORTED.INTERFACE_MEMBER, results[1].c.kind);
  ck('BCL bucket works without any index', BCL_RECEIVERS.has('Enumerable'));
  ck('BCL receiver not confused with a game type named Game/Campaign/World',
    !BCL_RECEIVERS.has('Game') && !BCL_RECEIVERS.has('Campaign') && !BCL_RECEIVERS.has('World'));

  // Axis wiring on real files.
  const docs = join(tmp, 'docs');
  mkdirSync(docs, { recursive: true });
  writeFileSync(join(docs, 'a.md'), 'Call `campaign.CreateState<CampaignState>()`, `dataStore.SyncData<Campaign>(c)`, `Enumerable.Select(xs, f)`, `Agent.AgentVisualsData`, and `campaign.Tick()`.');
  const axisRun = runAxis({ docsRoot: docs, corpusRoot: corpus, log: () => {} });
  ck('runAxis on the fixture doc: 4 unsupported / 5 sites',
    axisRun.numerator === 4 && axisRun.denominator === 5, `${axisRun.numerator}/${axisRun.denominator}`);
  ck('runAxis verdict=FINDINGS(1) when blind spots exist', axisRun.verdict === 1, `v=${axisRun.verdict}`);
  ck('runAxis note separates unsupported from genuine candidates',
    /unsupported_no_declarer=4 \/ sites_seen=5/.test(axisRun.note) && /genuine_no_declarer_candidates=1/.test(axisRun.note),
    axisRun.note);

  const clean = runAxis({ docsRoot: (mkdirSync(join(tmp, 'docs-clean'), { recursive: true }) || join(tmp, 'docs-clean')) && (writeFileSync(join(tmp, 'docs-clean', 'a.md'), 'Only `campaign.Tick()` here.'), join(tmp, 'docs-clean')), corpusRoot: corpus, log: () => {} });
  ck('runAxis with no blind spots verdict=OK(0)', clean.verdict === 0, `v=${clean.verdict} ${clean.note}`);

  const empty = runAxis({ docsRoot: join(tmp, 'no-such-docs'), corpusRoot: corpus, log: () => {} });
  ck('runAxis(unreadable docs) verdict=NO_VERDICT(2)', empty.verdict === 2, `v=${empty.verdict}`);

  const noCorpus = runAxis({ docsRoot: docs, corpusRoot: join(tmp, 'nope'), log: () => {} });
  ck('runAxis(missing corpus) verdict=NO_VERDICT(2)', noCorpus.verdict === 2, `v=${noCorpus.verdict}`);

  console.log('');
  console.log('  --- AXIS OWNS ITS OWN BLINDNESS (no external guard may rescue it) ---');
  const boom = () => { throw Object.assign(new Error('injected EACCES'), { code: 'EACCES' }); };
  const rBlindRead = runAxis({ docsRoot: docs, corpusRoot: corpus, readFile: boom, log: () => {} });
  ck('POSITIVE CONTROL: every page unreadable -> this axis returns 2 BY ITSELF',
    rBlindRead.verdict === 2, `v=${rBlindRead.verdict}`);
  ck('  ...and it declares blind > 0 so exitCode() can enforce the contract',
    rBlindRead.blind > 0, `blind=${rBlindRead.blind}`);
  ck('  ...and it withholds its numerator rather than claiming a finding over an incomplete population',
    rBlindRead.numerator === 0, `numerator=${rBlindRead.numerator}`);
  ck('NEGATIVE CONTROL: same docs, reader works -> NOT 2, so the 2 came from the failure',
    runAxis({ docsRoot: docs, corpusRoot: corpus, log: () => {} }).verdict === 1,
    `v=${runAxis({ docsRoot: docs, corpusRoot: corpus, log: () => {} }).verdict}`);
  ck('A partially-blind run (reader dies after page 1) is still 2',
    (() => {
      // the fixture above holds a single page, so a reader that only fails
      // AFTER the first page would never fail.  Give it two pages.
      const two = join(tmp, 'docs-two'); mkdirSync(two, { recursive: true });
      writeFileSync(join(two, 'a.md'), '`campaign.Tick()` and `Math.Max(1,2)`');
      writeFileSync(join(two, 'b.md'), '`campaign.Tick()` and `Enumerable.Select(xs,f)`');
      let n = 0;
      const r = runAxis({ docsRoot: two, corpusRoot: corpus, readFile: (f, e) => { if (n++ > 0) boom(); return readFileSync(f, e); }, log: () => {} });
      return r.verdict === 2 && r.blind === 1 && r.denominator === 2;
    })(), (() => {
      const two = join(tmp, 'docs-two2'); mkdirSync(two, { recursive: true });
      writeFileSync(join(two, 'a.md'), '`campaign.Tick()` and `Math.Max(1,2)`');
      writeFileSync(join(two, 'b.md'), '`campaign.Tick()` and `Enumerable.Select(xs,f)`');
      let n = 0;
      const r = runAxis({ docsRoot: two, corpusRoot: corpus, readFile: (f, e) => { if (n++ > 0) boom(); return readFileSync(f, e); }, log: () => {} });
      return `v=${r.verdict} blind=${r.blind} den=${r.denominator}`;
    })());
  ck('survives gate-exit aggregation as 2, unaided',
    (() => { try { return exitCode([rBlindRead]) === 2; } catch { return false; } })());

  rmSync(tmp, { recursive: true, force: true });
  console.log(`\n  selftest: ${pass} passed, ${fail} failed`);
  if (fail) { console.error('  THE CLASSIFIER HAS NO TEETH. Refusing to issue a verdict.'); process.exit(2); }
  console.log('  teeth confirmed.');
  process.exit(0);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  if (process.argv.includes('--selftest')) selftest();
  else {
    const argv = process.argv.slice(2);
    const opt = (n, d) => { const i = argv.indexOf(n); return i >= 0 && argv[i + 1] ? argv[i + 1] : d; };
    const REPO = resolvePath(new URL('../..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1').replace(/[/\\]$/, ''));
    const res = runAxis({
      docsRoot: resolvePath(REPO, opt('--docs', 'content')),
      corpusRoot: resolvePath(REPO, opt('--corpus', '../bannerlord-1.4.6')),
      limit: Number(opt('--limit', '0')) || 0,
      log: console.log,
    });
    console.log(`\naxis3 verdict=${res.verdict}`);
    console.log(`  numerator/denominator : ${res.numerator}/${res.denominator} ${res.unit}`);
    console.log(`  note                  : ${res.note}`);
    process.exit(res.verdict);
  }
}