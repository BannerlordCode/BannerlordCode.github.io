#!/usr/bin/env node
// Template-vs-handwritten classifier for API doc pages.
//
// Shared ruler: four authoring lines call this, nobody edits it.
// Judge = OVERVIEW + MENTAL MODEL only, matched on SKELETON (type names and
// backticked spans replaced by placeholders), never on whole sentences.
//
//   node tools/_template-classify.mjs <dir|file> [<dir|file> ...]
//   node tools/_template-classify.mjs --json <dir|file> [...]
//   node tools/_template-classify.mjs --top-uncovered 10 <dir> [...]
//
// READ-ONLY over content/**. Writes nothing. No switch can mutate a page.
//
// kind:
//   rewrite       both sections match a known template family
//   half-rewrite  exactly one section matches a known family
//   additive      neither section matches a family (assumed handwritten)
//   UNKNOWN       cannot decide -- see `why`. Always reported, never
//                 silently folded into `additive`.

import { readFileSync, statSync, readdirSync } from 'node:fs';
import { join, sep } from 'node:path';
import { pathToFileURL } from 'node:url';

const VERSION = '1.0.0';

// --- template families -----------------------------------------------------
// Patterns are matched against the normalized SKELETON. Order matters only for
// reporting; each is anchored so a family cannot half-match another.

export const OV_FAMILIES = [
  { id: 'OV1', desc: 'generic namespace + "exposes state/behavior/workflow entry points"',
    probe: '<C> lives in <C> and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as "what state it owns" and its methods as "what actions it allows".',
    re: /^<C> lives in <C> and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members\./ },
  { id: 'OV2', desc: 'Gauntlet UI widget blurb',
    probe: '<C> is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements.',
    re: /^<C> is a (?:Gauntlet )?UI widget\b/ },
  { id: 'OV3', desc: 'rule model blurb',
    probe: '<C> is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.',
    re: /^<C> is a rule model that usually defines how a subsystem should compute things\./ },
  { id: 'OV4', desc: 'data carrier blurb',
    probe: '<C> behaves like a data carrier: it packages fields so systems can exchange state in a structured form.',
    re: /^<C> behaves like a data carrier: it packages fields so systems can exchange state in a structured form\./ },
  { id: 'OV5', desc: 'view-layer object blurb',
    probe: '<C> represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.',
    re: /^<C> represents a view[- ]layer object, usually responsible for projecting game state into a screen, scene, or (?:interactive )?UI\./ },
  { id: 'OV6', desc: 'event handler blurb',
    probe: '<C> is a handler used to run agreed response logic when a specific event occurs.',
    re: /^<C> is a handler used to run agreed response logic when a specific event occurs\./ },
  { id: 'OV7', desc: 'manager blurb',
    probe: "<C> is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.",
    re: /^<C> is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities\./ },
  { id: 'OV8', desc: 'component-style object blurb',
    probe: '<C> is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.',
    re: /^<C> is a component[- ]style object, typically attached to (?:a|an) [^,]+, entity, or subsystem to hold localized state and behavior\./ },
  { id: 'OV9', desc: 'controller blurb',
    probe: '<C> is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.',
    re: /^<C> is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input\./ },
  { id: 'OV10', desc: 'behavior-layer blurb',
    probe: '<C> sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.',
    re: /^<C> sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions\./ },
  { id: 'OV11', desc: 'static helper blurb',
    probe: '<C> is a helper class that usually provides static logic which does not depend on instance state.',
    re: /^<C> is a helper class that usually provides static logic which does not depend on instance state\./ },
  { id: 'OV12', desc: 'exception type blurb',
    probe: '<C> is an exception type used to signal a specific error condition; callers decide whether to catch it, translate it, or let it bubble up.',
    re: /^<C> is an exception type used to signal a specific error condition; callers decide whether to catch it, translate it, or let it bubble up\./ },
  { id: 'OV13', desc: 'Gauntlet ViewModel blurb',
    probe: '<C> is a Gauntlet ViewModel — the data-binding bridge between C# logic and UI. Mods typically use it to expose state, commands, and list items to the UI.',
    re: /^<C> is a (?:Gauntlet )?ViewModel\b/ },
  { id: 'OV14', desc: '.NET attribute blurb',
    probe: '<C> is a .NET attribute used to tag a type or member so runtime code or tooling can recognize it by convention.',
    re: /^<C> is a (?:\.NET|C#) attribute used to tag a type or member so runtime code or tooling can recognize it by convention\./ },
];

export const MM_FAMILIES = [
  { id: 'MM1', desc: '"Start from namespace ... inspect public methods" (verbs test)',
    probe: 'Start from namespace <C> to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.',
    re: /^Start from namespace <C> to place it in the stack, then inspect its public methods/ },
  // NOTE: one family, parameterized by an architecture-kind word. It accounts
  // for 1640 pages across Widget/Model/Data/View/Handler/... - do NOT split it.
  { id: 'MM2', desc: '"Treat <X> as a <Kind>-style extension point: who creates/owns/calls it"',
    probe: 'Treat <C> as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.',
    re: /^Treat <C> as a [A-Za-z]+-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it\./ },
];

// Similarity at or above this = "reads like a template but matched no family"
// -> UNKNOWN, so a missing family surfaces instead of being called handwritten.
// Calibrated: known-good pages top out at 0.111, templates at 0.710+.
// Calibrated against measured distributions, not guessed:
//   true family pages : 0.882 - 1.000
//   known-good pages  : 0.000 - 0.065
// 0.45 sits inside that gap with margin on both sides. A section scoring this
// high while failing its anchored regex is a VARIANT of a known family --
// exactly the signal that a new family needs to be added.
export const TEMPLATE_LIKE = 0.45;

// --- text extraction -------------------------------------------------------

// Section heading aliases. The tree is NOT uniform: handwritten pages use
// `## One-line responsibility` where generated ones use `## Overview`, and
// `Mental model` / `Mental Model` both appear. Missing these aliases silently
// turned good pages into UNKNOWN during calibration.
const OV_HEADINGS = ['overview', '概述', 'one-line responsibility', 'one line responsibility',
  'responsibility', 'responsibility and mental model', 'what it is', 'summary'];
const MM_HEADINGS = ['mental model', '心智模型', 'mental models'];

// Fallback: no alias matched, so look for an h2 that merely MENTIONS the slot.
// The tree is not uniform -- e.g. CultureObject.md uses a single combined
// "## Responsibility and mental model". Without this it scored UNKNOWN purely
// for its heading wording, which is a vocabulary gap, not a template gap.
function fuzzyPick(sec, aliases, mustInclude) {
  const hit = Object.keys(sec).find((k) => k.includes(mustInclude));
  return hit ? { body: sec[hit], heading: hit } : { body: '', heading: aliases[0] };
}

// First non-empty alias, else the fuzzy fallback.
function pickSection(sec, aliases, mustInclude) {
  for (const a of aliases) {
    const v = sec[a];
    if (v && v.trim()) return { body: v, heading: a };
  }
  return fuzzyPick(sec, aliases, mustInclude);
}

function normalizeHeading(h) {
  return h.toLowerCase().replace(/[\s_]+/g, ' ').replace(/[:：]\s*$/, '').trim();
}

export function sectionsOf(text) {
  const out = {};
  let cur = null;
  for (const line of text.split(/\r?\n/)) {
    const h = line.match(/^##\s+(.+?)\s*$/);
    if (h) {
      const name = normalizeHeading(h[1]);
      // A known section ends any previous capture; otherwise start a new one.
      cur = name;
      if (!(cur in out)) out[cur] = [];
      continue;
    }
    // Only an h2 starts a new section. h3+ are subsections and belong to it,
    // so a `## Mental Model` made entirely of `###` blocks still has a body.
    if (/^#{3,}\s+/.test(line)) { if (cur) out[cur].push(line); continue; }
    if (cur) out[cur].push(line);
  }
  for (const k of Object.keys(out)) out[k] = out[k].join('\n').trim();
  return out;
}

// Pick the first non-empty body among the aliases.
function pickSectionOld(sec, aliases) {
  for (const a of aliases) {
    const v = sec[a];
    if (v && v.trim()) return { body: v, heading: a };
  }
  const first = aliases.find((a) => a in sec);
  return { body: first ? sec[first] : '', heading: first || aliases[0] };
}

// Skeleton: inline code -> <C>, curly quotes straight, whitespace collapsed.
// Prose survives, so the family prose is still matchable.
export function skeletonize(s) {
  if (!s) return '';
  return s
    .replace(/`[^`]*`/g, '<C>')
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

const STOP = new Set(('the a an of to in and or is it its this that for on as be by with from at'
  + ' into when how what not you your can will their they them use used using more most also than'
  + ' then only which while who whom whose were been being has have had did does do done')
  .split(' '));

function tokenSet(s) {
  const t = s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').split(/\s+/).filter(Boolean);
  return new Set(t.filter((w) => w.length > 2 && !STOP.has(w)));
}

export function similarity(a, b) {
  const A = tokenSet(a); const B = tokenSet(b);
  if (!A.size || !B.size) return 0;
  let inter = 0;
  for (const x of A) if (B.has(x)) inter += 1;
  return inter / (A.size + B.size - inter);
}

function matchFamily(skel, families) {
  for (const f of families) if (f.re.test(skel)) return f;
  return null;
}

function nearest(skel, families) {
  let best = 0; let id = null;
  for (const f of families) {
    const v = similarity(skel, f.probe);
    if (v > best) { best = v; id = f.id; }
  }
  return { sim: best, id };
}

// --- classification --------------------------------------------------------

// tag values (orthogonal to kind, so a page can be "UNKNOWN + no-sections"):
//   ''             -- nothing special
//   'no-sections'  -- NEITHER Overview NOR Mental Model exists. Definitively NOT
//                     a template page, but also NOT `additive`: additive means
//                     "the skeleton is genuine, only the sections are missing",
//                     and these pages have no skeleton at all (they are pure
//                     method stubs: ## Methods / ## Usage Example / ## See Also).
//                     Both sections must be written from scratch.
//   'section-index'-- an _index.md bucket/section page, not a type page at all.
//                     Excluded from the three-way template judgement.
export function classifyPage(text, { isIndex = false } = {}) {
  const sec = sectionsOf(text);
  const ovPick = pickSection(sec, OV_HEADINGS, 'responsib');
  let mmPick = pickSection(sec, MM_HEADINGS, 'mental');
  // A combined heading ("Responsibility and mental model") serves both slots.
  if (!mmPick.body && ovPick.heading.includes('mental')) {
    mmPick = { body: ovPick.body, heading: ovPick.heading };
  }
  const ovRaw = ovPick.body || '';
  const mmRaw = mmPick.body || '';
  const ov = skeletonize(ovRaw);
  const mm = skeletonize(mmRaw);

  const evidence = [`sections: ov="${ovPick.heading}" mm="${mmPick.heading}"`];
  const unknownReasons = [];

  const noOverview = !ov;
  const noMental = !mm;
  if (noOverview) unknownReasons.push('Overview section missing or empty');
  if (noMental) unknownReasons.push('Mental Model section missing or empty');

  const ovFam = ov ? matchFamily(ov, OV_FAMILIES) : null;
  const mmFam = mm ? matchFamily(mm, MM_FAMILIES) : null;

  if (ovFam) evidence.push(`ov=${ovFam.id} (${ovFam.desc}) sentence="${firstSentence(ovRaw)}"`);
  else if (ov) {
    const n = nearest(ov, OV_FAMILIES);
    if (n.sim >= TEMPLATE_LIKE) {
      unknownReasons.push(`Overview reads like family ${n.id} (sim=${n.sim.toFixed(2)}) but matches none: "${firstSentence(ovRaw)}"`);
    }
  }
  if (mmFam) evidence.push(`mm=${mmFam.id} (${mmFam.desc}) sentence="${firstSentence(mmRaw)}"`);
  else if (mm) {
    const n = nearest(mm, MM_FAMILIES);
    if (n.sim >= TEMPLATE_LIKE) {
      unknownReasons.push(`Mental Model reads like family ${n.id} (sim=${n.sim.toFixed(2)}) but matches none: "${firstSentence(mmRaw)}"`);
    }
  }

  let kind;
  if (unknownReasons.length) kind = 'UNKNOWN';
  else if (ovFam && mmFam) kind = 'rewrite';
  else if (ovFam || mmFam) kind = 'half-rewrite';
  else kind = 'additive';

  // Unknown skeletons, kept verbatim so the next family can be added from data.
  const unmatched = [];
  if (kind === 'UNKNOWN') {
    if (ov && !ovFam) unmatched.push({ section: 'overview', sentence: firstSentence(ovRaw), skeleton: ov });
    if (mm && !mmFam) unmatched.push({ section: 'mental-model', sentence: firstSentence(mmRaw), skeleton: mm });
  }

  const tag = isIndex ? 'section-index' : (noOverview && noMental ? 'no-sections' : '');

  return {
    kind,
    tag,
    ov: ovFam ? ovFam.id : '-',
    mm: mmFam ? mmFam.id : '-',
    why: kind === 'UNKNOWN' ? unknownReasons.join(' | ')
      : evidence.length ? evidence.join(' | ')
        : 'no family matched either section; both present -> treated as handwritten',
    unmatched,
  };
}

function firstSentence(s) {
  const t = String(s || '').replace(/\s+/g, ' ').trim();
  const m = t.match(/^[\s\S]{0,220}?[.!?](?:\s|$)/);
  return (m ? m[0] : t.slice(0, 220)).trim();
}

// --- walking ---------------------------------------------------------------

function collect(target, acc) {
  let st;
  try { st = statSync(target); } catch { return acc; }
  if (st.isFile()) { if (target.endsWith('.md')) acc.push(target); return acc; }
  for (const e of readdirSync(target)) {
    const p = join(target, e);
    let s2;
    try { s2 = statSync(p); } catch { continue; }
    if (s2.isDirectory()) collect(p, acc);
    else if (e.endsWith('.md')) acc.push(p);
  }
  return acc;
}

// --- main ------------------------------------------------------------------

function main(argv) {
  const args = argv.slice(2);
  let json = false;
  let topN = 10;
  const targets = [];
  for (let i = 0; i < args.length; i += 1) {
    if (args[i] === '--json') { json = true; continue; }
    if (args[i] === '--top-uncovered') { topN = Number(args[++i] || 10); continue; }
    targets.push(args[i]);
  }
  if (!targets.length) {
    console.error('usage: node tools/_template-classify.mjs [--json] [--top-uncovered N] <dir|file> [...]');
    process.exit(2);
  }

  const files = targets.flatMap((t) => collect(t, []));
  const rows = files.map((f) => {
    const isIndex = /(^|[\\/])_index\.md$/i.test(f);
    const r = classifyPage(readFileSync(f, 'utf8'), { isIndex });
    return { path: f.replace(/\\/g, '/'), ...r };
  });

  const kinds = { additive: 0, 'half-rewrite': 0, rewrite: 0, UNKNOWN: 0 };
  const ovHits = new Map(); const mmHits = new Map();
  const unknownSkels = new Map();
  let decided = 0;
  let noSections = 0; let sectionIndex = 0; let leafTotal = 0;

  for (const r of rows) {
    if (r.tag === 'section-index') { sectionIndex += 1; continue; } // not a type page
    leafTotal += 1;
    if (r.tag === 'no-sections') noSections += 1;
    kinds[r.kind] += 1;
    if (r.ov !== '-') ovHits.set(r.ov, (ovHits.get(r.ov) || 0) + 1);
    if (r.mm !== '-') mmHits.set(r.mm, (mmHits.get(r.mm) || 0) + 1);
    if (r.kind === 'UNKNOWN') {
      const sk = r.unmatched.length ? r.unmatched.map((u) => u.skeleton).join(' || ') : '(section empty)';
      if (!unknownSkels.has(sk)) unknownSkels.set(sk, { n: 0, example: r.path, sentences: r.unmatched.map((u) => `[${u.section}] ${u.sentence}`) });
      unknownSkels.get(sk).n += 1;
    } else decided += 1;
  }

  const total = rows.length;
  // Coverage is over LEAF type pages: section indexes are not type pages and
  // must not be counted as either decided or undecided.
  const coverage = leafTotal ? (decided / leafTotal) * 100 : 0;
  const nearMiss = kinds.UNKNOWN - noSections;
  const known = OV_FAMILIES.length + MM_FAMILIES.length;

  if (json) {
    console.log(JSON.stringify({
      version: VERSION,
      families: { overview: OV_FAMILIES.length, mentalModel: MM_FAMILIES.length },
      total,
      kinds,
      noSections,
      sectionIndex,
      leafTotal,
      nearMiss,
      familyHits: { overview: Object.fromEntries(ovHits), mentalModel: Object.fromEntries(mmHits) },
      unknownFamilyHits: kinds.UNKNOWN,
      coveragePercent: Number(coverage.toFixed(2)),
      blindSpot: 'detects variants of KNOWN families only; a wholly novel template family reads as additive',
      pages: rows,
    }, null, 2));
    return;
  }

  for (const r of rows) {
    console.log(`${r.path}  kind=${r.kind}  ov=${r.ov}  mm=${r.mm}`
      + `${r.tag ? `  tag=${r.tag}` : ''}  why="${r.why}"`);
  }

  console.log('');
  console.log(`SUMMARY  files=${total}  leaf type-pages=${leafTotal}  section-index=${sectionIndex}`);
  console.log(`  leaf kinds: additive=${kinds.additive}  half-rewrite=${kinds['half-rewrite']}`
    + `  rewrite=${kinds.rewrite}  UNKNOWN=${kinds.UNKNOWN}`);
  console.log(`  UNKNOWN split: no-sections=${noSections}  near-miss(variant of a known family)=${nearMiss}`);
  console.log(`FAMILIES  known=${known} (overview ${OV_FAMILIES.length} + mental-model ${MM_FAMILIES.length})`);
  console.log(`  overview hits: ${[...ovHits.entries()].sort().map(([k, v]) => `${k}=${v}`).join('  ') || '(none)'}`);
  console.log(`  mental-model hits: ${[...mmHits.entries()].sort().map(([k, v]) => `${k}=${v}`).join('  ') || '(none)'}`);
  console.log(`COVERAGE  decided=${decided}/${leafTotal} leaf = ${coverage.toFixed(2)}%`);
  console.log('BLIND SPOT  this ruler detects VARIANTS of known families only. A wholly novel');
  console.log('            template family -- one never seen -- reads as `additive` and is');
  console.log('            invisible here. Only calibration can close that gap, so a low');
  console.log('            UNKNOWN count is NOT evidence that coverage is complete.');
  if (nearMiss > 0) {
    console.log(`WARNING  ${nearMiss} page(s) read like a known family but matched none (variants needing a family rule).`);
    const top = [...unknownSkels.entries()].sort((a, b) => b[1].n - a[1].n).slice(0, topN);
    console.log(`UNCOVERED SKELETONS top ${Math.min(topN, top.length)} of ${unknownSkels.size} distinct:`);
    top.forEach(([sk, info], i) => {
      console.log(`  ${i + 1}. pages=${info.n}  example=${info.example}`);
      for (const s of info.sentences) console.log(`     ${s}`);
    });
  } else {
    console.log(`WARNING  none. No near-miss variants pending.`);
  }
  if (noSections > 0) {
    console.log(`NOTE  ${noSections} leaf page(s) carry tag=no-sections: neither Overview nor Mental Model`);
    console.log('      exists. They are NOT templates and NOT additive -- both sections must be');
    console.log('      written from scratch (pure method stubs: ## Methods / ## Usage Example / ## See Also).');
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main(process.argv);
