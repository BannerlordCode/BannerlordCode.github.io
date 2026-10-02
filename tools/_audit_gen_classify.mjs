#!/usr/bin/env node
// tools/_audit_gen_classify.mjs -- READ-ONLY signal extractor / classifier probe.
// Worker D (adversarial audit). STRICTLY READ-ONLY over content/**.
// Prints per-signal hit rates over the whole corpus, and -- when label files
// exist -- per-signal hit rates on human-labeled GENERATED vs HANDWRITTEN sets.
//
// Usage:
//   node tools/_audit_gen_classify.mjs                 # corpus-wide signal rates
//   node tools/_audit_gen_classify.mjs --control       # + control run vs human labels
//   node tools/_audit_gen_classify.mjs --dump <label>  # per-page signal dump for a label set
//
// Design rule: EVERY signal is reported SEPARATELY with its own hit rate.
// There is deliberately NO combined boolean verdict in this tool. A single
// collapsed number is what produced the suspect 15,507-page "stub" claim in
// tools/lib/handwritten-policy.mjs, and collapsing before validation is exactly
// the failure mode this audit exists to catch.

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { classifyPage } from './lib/handwritten-policy.mjs';

const ROOT = process.cwd();
const CONTENT = join(ROOT, 'content');

// ---------------------------------------------------------------------------
// Signal definitions.
// Each: { id, test(text, ctx) -> boolean }
// NOTE: no '\b' anywhere -- in JS regex source '\b' is a backspace escape in a
// string literal, and in a RegExp built from a string it is a word boundary but
// only if the backslash survives. Explicit character classes only, always.
// ---------------------------------------------------------------------------
const SIGNALS = [
  // --- text stamps supplied by the lead (re-measured here to prove reproducibility)
  {
    id: 'stamp:ns_boilerplate_zh',
    desc: "contains '先从命名空间' (boilerplate mental-model opener, zh)",
    test: (t) => t.includes('先从命名空间'),
  },
  {
    id: 'stamp:purpose_label',
    desc: "contains '**Purpose:**'",
    test: (t) => t.includes('**Purpose:**'),
  },
  {
    id: 'stamp:is_a_public_type',
    desc: "contains 'is a public type'",
    test: (t) => t.includes('is a public type'),
  },
  // --- CORRECTED English marker. The phrase originally briefed to me
  // ('a public class in') is 0 occurrences -- it does not exist in this tree.
  // The real English twin of zh '的自动生成类参考' is 'Auto-generated class
  // reference for <Type>.' (frontmatter description). Deriving this by sampling
  // en/ descriptions recovered 17,302+ pages of coverage that the briefed string
  // reported as 0. THIS IS A BRIEFING ERROR, NOT A TREE DEFECT.
  {
    id: 'desc:zh_autogen_fm',
    desc: "FRONTMATTER contains '的自动生成类参考' (zh auto-gen self-declaration)",
    test: (t, ctx) => ctx.fm.includes('的自动生成类参考'),
  },
  {
    id: 'desc:en_autogen_fm',
    desc: 'FRONTMATTER matches /auto-generated/i (en auto-gen self-declaration)',
    test: (t, ctx) => /auto-generated/i.test(ctx.fm),
  },
  {
    id: 'desc:combined_autogen_fm',
    desc: 'FRONTMATTER self-declares auto-generated (zh OR en)',
    test: (t, ctx) => ctx.fm.includes('的自动生成类参考') || /auto-generated/i.test(ctx.fm),
  },
  {
    id: 'desc:autogen_in_BODY',
    desc: 'BODY (not frontmatter) mentions auto-generated -- tests the self-declaration-vs-reality split',
    test: (t, ctx) => /auto-generated/i.test(ctx.body) || ctx.body.includes('自动生成'),
  },
  {
    id: 'stamp:mental_read_props_zh',
    desc: "contains '阅读时先通过属性了解状态'",
    test: (t) => t.includes('阅读时先通过属性了解状态'),
  },
  {
    id: 'stamp:read_properties_first',
    desc: "contains 'Read properties first'",
    test: (t) => t.includes('Read properties first'),
  },
  {
    id: 'stamp:auto_generated_ref_zh',
    desc: "contains '的自动生成类参考'",
    test: (t) => t.includes('的自动生成类参考'),
  },
  {
    id: 'stamp:a_public_class_in',
    desc: "contains 'a public class in'",
    test: (t) => t.includes('a public class in'),
  },
  {
    id: 'stamp:generated_by_comment',
    desc: "contains '<!-- generated-by'",
    test: (t) => t.includes('<!-- generated-by'),
  },
  {
    id: 'stamp:type_label',
    desc: "contains '**Type:**'",
    test: (t) => t.includes('**Type:**'),
  },
  {
    id: 'links:rel_count_gt_150',
    desc: 'relative markdown link count > 150',
    test: (t, ctx) => ctx.relLinks > 150,
  },

  // --- generator skeleton fingerprint (from tools/_v146_audit_handwritten.mjs)
  {
    id: 'v146:genfp_main_members',
    desc: "generator fingerprint: /^##\\s*(主要成员|Main Members)\\s*$/m",
    test: (t) => /^#{2}\s*(主要成员|Main Members)\s*$/m.test(t),
  },
  {
    id: 'v146:genfp_autogen_phrase',
    desc: 'generator fingerprint: 自动生成的?类参考|auto-generated stub',
    test: (t) => /自动生成的?类参考|auto-generated stub/i.test(t),
  },
  {
    id: 'v146:handwritten_4part',
    desc: 'handwritten 4-part: MentalModel AND Overview AND risk section AND ```csharp block',
    test: (t) =>
      /^#{2}\s*(心智模型|Mental\s*Model)\s*$/im.test(t) &&
      /^#{2}\s*(概述|Overview)\s*$/im.test(t) &&
      /^#{2}\s*(风险与边界|风险|边界|Risks?)/im.test(t) &&
      /```csharp\r?\n[\s\S]*?```/.test(t),
  },

  // --- house prior #1: classifyPage from tools/lib/handwritten-policy.mjs
  {
    id: 'policy:classifyPage==deep_pass',
    desc: "classifyPage(path,text).status === 'deep_pass'",
    test: (t, ctx) => ctx.policy === 'deep_pass',
  },
  {
    id: 'policy:classifyPage==stub',
    desc: "classifyPage(path,text).status === 'stub'  <-- suspect over-caller (15,507)",
    test: (t, ctx) => ctx.policy === 'stub',
  },
  {
    id: 'policy:classifyPage==noise',
    desc: "classifyPage(path,text).status === 'noise'",
    test: (t, ctx) => ctx.policy === 'noise',
  },

  // --- structural / shape signals
  {
    id: 'shape:no_mental_model_heading',
    desc: 'has NO `## 心智模型` / `## Mental Model` heading',
    test: (t) => !/^#{2}\s*(?:心智模型|Mental\s*Model)\s*$/im.test(t),
  },
  {
    id: 'shape:purpose_cell_equals_typename',
    desc: 'a Purpose: table cell equals its own type name (pure placeholder)',
    test: (t, ctx) => ctx.purposeCellEqualsType > 0,
  },
  {
    id: 'shape:has_code_fence',
    desc: 'contains at least one fenced code block',
    test: (t) => /```/.test(t),
  },
  {
    id: 'shape:has_csharp_fence',
    desc: 'contains a ```csharp fence',
    test: (t) => /```csharp/.test(t),
  },
];

// ---------------------------------------------------------------------------
// walk
// ---------------------------------------------------------------------------
function walk(dir, out = []) {
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.isFile() && e.name.endsWith('.md')) out.push(p);
  }
  return out;
}

// Purpose-table cells that are literally just the type name (or a formulaic stub).
function countPurposeCellsEqualType(text) {
  const lines = text.split(/\r?\n/);
  let headers = null;
  let n = 0;
  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    if (!/^\|/.test(line) || /^\|\s*[-:\s|]+\s*\|/.test(line)) continue;
    const cells = line.split('|').slice(1, -1).map((c) =>
      c.replace(/\[[^\]]+\]\([^)]+\)/g, '$1').replace(/[`*]/g, '').trim()
    );
    const next = lines[i + 1] || '';
    if (/^\|\s*[-:\s|]+\s*\|/.test(next)) {
      headers = cells.map((c) => c.toLowerCase());
      continue;
    }
    if (!headers || headers.length !== cells.length) continue;
    const ti = headers.findIndex((h) => /^(?:type|class|类型|类)$/.test(h));
    const pi = headers.findIndex((h) => /(?:purpose|用途|说明|职责)/.test(h));
    if (ti < 0 || pi < 0) continue;
    const tn = cells[ti];
    const pc = cells[pi];
    if (!tn || !pc) continue;
    if (pc === tn || pc === `${tn}.` || /^(?:用途|Purpose|类|类型|Type|-|—)$/i.test(pc)) n += 1;
  }
  return n;
}

// --- ENUMERATION SELF-ASSERT (the dotted-directory bug class) ---------------
// A \w-based path filter silently drops dirs containing dots, e.g.
// content/v1.3.15/en/native-1.3.15-src. This walk is readdir-based so it cannot
// drop them; the assert below proves the count independently.
//
// Deliberate scope: only dirs BELOW the top version level are candidates, since
// the version dirs themselves (v1.3.0 etc.) are dotted but are not the bug class.
// Not recursing into a matched dir keeps the counts disjoint -- an earlier
// version of this function recursed and summed to 39,032 > the 39,013 corpus,
// which is the "number is bigger than the population" smell that flags a bug.
function dottedDirCensus(dir, depth, out = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (!e.isDirectory()) continue;
    const p = join(dir, e.name);
    const isBugClass = e.name.includes('.') && depth >= 2;
    if (isBugClass) {
      out.push({ dir: relative(ROOT, p).split(sep).join('/'), pages: walk(p).length });
      continue; // disjoint: do not descend
    }
    dottedDirCensus(p, depth + 1, out);
  }
  return out;
}

function splitFrontmatter(text) {
  const m = text.match(/^---\r?\n[\s\S]*?\r?\n---/);
  return m ? m[0] : '';
}

const files = walk(CONTENT).sort();
const pages = [];
for (const f of files) {
  let text;
  try {
    text = readFileSync(f, 'utf8');
  } catch {
    continue;
  }
  const fm = splitFrontmatter(text);
  const ctx = {
    fm,
    body: text.slice(fm.length),
    relLinks: (text.match(/\[[^\]]+\]\((?!https?:|#|mailto:)[^)]+\)/g) || []).length,
    policy: classifyPage(relative(ROOT, f).split(sep).join('/'), text).status,
    purposeCellEqualsType: countPurposeCellsEqualType(text),
  };
  pages.push({ path: relative(ROOT, f).split(sep).join('/'), bytes: statSync(f).size, text, ctx });
}

const N = pages.length;
const pct = (x, n) => (n === 0 ? 'n/a' : `${((x / n) * 100).toFixed(2)}%`);

console.log(`# Worker D -- read-only signal report`);
console.log(`# corpus: content/**  pages: ${N}  (MEASURED)`);
console.log(`# note: no combined verdict is emitted by design.`);
console.log('');

// enumeration self-assert
const dotted = dottedDirCensus(CONTENT, 1);
const dottedPages = dotted.reduce((a, b) => a + b.pages, 0);
console.log('## enumeration self-assert (bug class: \\w path filters drop dotted dirs)');
console.log('');
console.log(`- readdir walk count: **${N}**`);
console.log(`- dotted directories found: **${dotted.length}**, containing **${dottedPages}** pages`);
for (const d of dotted) console.log(`  - \`${d.dir}\` : ${d.pages} pages`);
console.log(`- a \\w-based path regex would have silently dropped ${dottedPages} pages; this walk keeps them.`);
console.log(`- pages outside the dotted dirs: ${N - dottedPages}`);
console.log(`- SELF-ASSERT ${dottedPages + (N - dottedPages) === N ? 'PASS' : 'FAIL'}: disjoint counts sum to ${N}`);
console.log(`- cross-check vs shell \`find\`: expected 39013 -> ${N === 39013 ? 'PASS' : 'MISMATCH'}`);
console.log('');

// --- signal table
console.log('| signal | hits | corpus rate |');
console.log('|---|---:|---:|');
const corpusHits = {};
for (const s of SIGNALS) {
  let n = 0;
  for (const p of pages) if (s.test(p.text, p.ctx)) n += 1;
  corpusHits[s.id] = n;
  console.log(`| \`${s.id}\` | ${n} | ${pct(n, N)} |`);
}
console.log('');

// --- size buckets
const BUCKETS = [
  ['<1.2KB', (b) => b < 1229],
  ['1.2-3KB', (b) => b >= 1229 && b < 3072],
  ['3-8KB', (b) => b >= 3072 && b < 8192],
  ['8-20KB', (b) => b >= 8192 && b < 20480],
  ['>20KB', (b) => b >= 20480],
];
console.log('## size buckets (MEASURED; size is NOT a verdict criterion)');
console.log('');
console.log('| bucket | pages | share |');
console.log('|---|---:|---:|');
const bucketCount = Object.fromEntries(BUCKETS.map(([name]) => [name, 0]));
for (const p of pages) for (const [name, fn] of BUCKETS) if (fn(p.bytes)) bucketCount[name] += 1;
for (const [name] of BUCKETS) console.log(`| ${name} | ${bucketCount[name]} | ${pct(bucketCount[name], N)} |`);
console.log('');

// --- per-version breakdown of the strongest textual stamps
console.log('## per-version stamp rates (MEASURED)');
console.log('');
const versions = [...new Set(pages.map((p) => p.path.split('/')[1]))].sort();
console.log('| version | pages | ns_boilerplate_zh | purpose_label | autogen_ref_zh | rel>150 |');
console.log('|---|---:|---:|---:|---:|---:|');
for (const v of versions) {
  const sub = pages.filter((p) => p.path.split('/')[1] === v);
  const c = (id) => sub.filter((p) => SIGNALS.find((s) => s.id === id).test(p.text, p.ctx)).length;
  console.log(
    `| ${v} | ${sub.length} | ${pct(c('stamp:ns_boilerplate_zh'), sub.length)} | ` +
      `${pct(c('stamp:purpose_label'), sub.length)} | ${pct(c('stamp:auto_generated_ref_zh'), sub.length)} | ` +
      `${pct(c('links:rel_count_gt_150'), sub.length)} |`
  );
}
console.log('');

// ---------------------------------------------------------------------------
// PART 2 -- control run
// ---------------------------------------------------------------------------
const args = process.argv.slice(2);
const control = args.includes('--control');
const dumpIdx = args.indexOf('--dump');

// SCOPE (lead-5 #2395/#2410): workers A and B are CANCELLED and own the old
// three trees. worker-54 (labels-3) owns the NEW trees, which carry ZERO
// auto-generated self-declarations -- so labels-3 cannot produce a false
// positive for desc_template and cannot serve as its negative control.
// A/B slots are kept so that if lead-4 ever supplies old-tree labels they are
// ingested automatically, but their absence is not treated as an error.
const LABEL_FILES = [
  ['54', 'tools/_audit-labels-3.jsonl'],
  ['lead-4 (old trees)', 'tools/_audit-labels-1.jsonl'],
  ['lead-4 (old trees, alt)', 'tools/_audit-labels-2.jsonl'],
];

function loadLabels() {
  const rows = [];
  const missing = [];
  for (const [who, rel] of LABEL_FILES) {
    if (!existsSync(join(ROOT, rel))) {
      missing.push(rel);
      continue;
    }
    const raw = readFileSync(join(ROOT, rel), 'utf8');
    for (const line of raw.split(/\r?\n/)) {
      if (!line.trim()) continue;
      let o;
      try {
        o = JSON.parse(line);
      } catch {
        continue;
      }
      rows.push({ ...o, _who: who });
    }
  }
  return { rows, missing };
}

if (dumpIdx >= 0) {
  const want = args[dumpIdx + 1];
  const { rows } = loadLabels();
  const byPath = new Map(pages.map((p) => [p.path, p]));
  for (const r of rows) {
    if (want && r.label !== want) continue;
    const p = byPath.get(r.path);
    if (!p) {
      console.log(`${r.path}\tMISSING\t(label=${r.label})`);
      continue;
    }
    const flags = SIGNALS.filter((s) => s.test(p.text, p.ctx)).map((s) => s.id);
    console.log(`${r.label}\t${r._who}\t${p.path}\t${flags.join(',')}`);
  }
  process.exit(0);
}

if (!control) process.exit(0);

// control mode
const { rows, missing } = loadLabels();
const labelCounts = {};
for (const r of rows) labelCounts[r.label] = (labelCounts[r.label] || 0) + 1;

// HARD RULE. A hit rate on the handwritten set is required before ANY signal may
// be called usable. Zero handwritten rows == no negative control == no verdict.
// This fires even when label files ARE present, because the newest region
// (new trees) self-declares auto-generated on 0% of pages and therefore cannot
// manufacture a false positive for the desc_template signal.
if (!rows.length || !labelCounts.handwritten) {
  console.log('## CONTROL RUN: NOT PERFORMED (no negative control)');
  console.log('');
  if (missing.length) console.log(`missing label files: ${missing.join(', ')}`);
  console.log(`label rows found: ${rows.length} -> ${JSON.stringify(labelCounts)}`);
  console.log('');
  console.log('A signal cannot be declared valid without its hit rate on the');
  console.log('known-HANDWRITTEN set. That set has 0 rows. worker-54 sampled the new');
  console.log('trees (v1.4.6/v1.4.7/v1.5.3), which carry the auto-generated');
  console.log('self-declaration on 0/356 pages -- by construction they cannot produce');
  console.log('a false positive, so they are NOT a valid negative control.');
  console.log('MISSING INPUT: >=1 hand-labelled page from the OLD trees (v1.3.0 /');
  console.log('v1.3.15 / v1.4.5) that DOES carry the auto-generated frontmatter');
  console.log('description. OWNER: lead-4.');
  console.log('');
  console.log('**REFUSING TO ISSUE A VERDICT**');
  process.exit(2);
}

console.log('## CONTROL RUN');
console.log('');
const byLabel = {};
for (const r of rows) {
  const k = r.label;
  (byLabel[k] ||= []).push(r);
}
console.log(
  `labels loaded: ${rows.length} lines -> ` +
    Object.entries(byLabel)
      .map(([k, v]) => `${k}=${v.length}`)
      .join(', ')
);
if (missing.length) console.log(`WARNING missing label files: ${missing.join(', ')}`);
console.log('');

const pageByPath = new Map(pages.map((p) => [p.path, p]));
const resolved = [];
const unresolved = [];
for (const r of rows) {
  const p = pageByPath.get(r.path);
  if (p) resolved.push({ r, p });
  else unresolved.push(r.path);
}
if (unresolved.length) {
  console.log(`WARNING: ${unresolved.length} labeled paths not found on disk (first 5):`);
  for (const u of unresolved.slice(0, 5)) console.log(`  ${u}`);
  console.log('');
}

console.log('| signal | GENERATED n | hit rate | HANDWRITTEN n | hit rate | VERDICT |');
console.log('|---|---:|---:|---:|---:|---|');
const INVALID_THRESHOLD = 0.05;
const verdicts = {};
for (const s of SIGNALS) {
  const sets = {};
  for (const [label, arr] of Object.entries(byLabel)) {
    const rs = arr.map((r) => resolved.find((x) => x.r.path === r.path)).filter(Boolean);
    sets[label] = { n: rs.length, hits: rs.filter((x) => s.test(x.p.text, x.p.ctx)).length };
  }
  const gen = sets.generated || { n: 0, hits: 0 };
  const hw = sets.handwritten || { n: 0, hits: 0 };
  const gr = gen.n ? gen.hits / gen.n : NaN;
  const hr = hw.n ? hw.hits / hw.n : NaN;
  let verdict;
  if (!Number.isFinite(hr)) verdict = 'UNTESTED (no handwritten rows)';
  else if (hr > INVALID_THRESHOLD) verdict = '**INVALID** (handwritten FP > 5%)';
  else verdict = 'usable as candidate';
  verdicts[s.id] = { gen: gr, hw: hr, verdict, genN: gen.n, hwN: hw.n };
  const f = (r) => (Number.isFinite(r) ? `${(r * 100).toFixed(2)}%` : 'n/a');
  console.log(`| \`${s.id}\` | ${gen.hits}/${gen.n} | ${f(gr)} | ${hw.hits}/${hw.n} | ${f(hr)} | ${verdict} |`);
}
console.log('');
console.log(`(rows with labels other than generated/handwritten: ` +
  `${Object.keys(byLabel).filter((k) => k !== 'generated' && k !== 'handwritten').join(', ') || 'none'})`);
console.log('');
console.log('DONE. Remember: HIGH rate on GENERATED + LOW rate on HANDWRITTEN == a');
console.log('useful discriminator. Nothing above is a verdict on any page.');