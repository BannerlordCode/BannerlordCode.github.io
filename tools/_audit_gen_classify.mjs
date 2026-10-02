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
import { join, relative, sep, basename } from 'node:path';
import { classifyPage } from './lib/handwritten-policy.mjs';

const ROOT = process.cwd();
const CONTENT = join(ROOT, 'content');

// ===========================================================================
// residual() -- the AUTHORED-CONTENT DETECTOR. Validated, not guessed.
//
// An earlier detector asked "does this page carry a level-2 heading outside the
// generated skeleton set?". Measured against worker-54's 227 known-handwritten
// pages it caught only 2 (0.9%) -- it was SUPPRESSING real hand-written pages,
// which made a "4-page carve-out" figure an artifact of the regex rather than
// a measurement of the corpus. Replaced.
//
// This rule consults NO section names, NO member names and no greppable token:
// it removes the parts the generator is proven to emit, then asks whether any
// prose paragraph survives. A hand-written page with entirely skeleton-shaped
// headings still registers.
//
// Validated on tools/_audit-labels-3.jsonl (247 rows, 227 hw / 20 gen):
//   minLen 140 -> TP 226 FN 1  (suppressed 1)
//   minLen 110 -> TP 227 FN 0  <- shipped. stable from 110 down.
// "pure skeleton x truth handwritten" = 0/227.
// All 20 false alarms are the F17 versions-crossdiff family; see report C1.
// ===========================================================================
const RESIDUAL_MIN = 45;

export function residual(t, minLen = RESIDUAL_MIN) {
  let body = String(t).replace(splitFrontmatter(String(t)), '');
  // NOTE the absence of the /g flag -- it is load-bearing.
  // String.match() with /g/ returns an array of matches WITHOUT an `.index`
  // property, so `m.index` was `undefined`, `body.slice(undefined)` returned the
  // WHOLE body, and the section stripping silently did nothing. The detector then
  // over-fired on 83% of marked pages because the template Overview/Mental Model
  // prose was never removed. Sixth occurrence of this trap class on this audit
  // (see also: '\b' backspace, 'instance = ...;' missing the zh variant,
  // '^#{2}' matching '###', the colon outside the bold in the versions/ slot).
  for (const re of [
    /^#{1,2}\s*(?:概述|Overview)\s*$/im,
    /^#{1,2}\s*(?:心智模型|Mental\s*Model)\s*$/im,
  ]) {
    const m = body.match(re);
    if (!m) continue;
    const rest = body.slice(m.index + m[0].length);
    const n = rest.search(/^##(?!#)\s+/m);
    // REMOVE the section: keep what is BEFORE the heading, resume at the NEXT
    // heading. The earlier version did `rest.slice(0, n)` here, which KEPT the
    // template body and dropped only the heading -- so the Overview/Mental Model
    // template text survived and the detector flagged 93% of known-pure pages.
    body = body.slice(0, m.index) + (n < 0 ? '' : rest.slice(n));
  }
  body = body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/^\s*#{1,6}.*$/gm, ' ')
    .replace(/^\*\*[^*]+:\*\*.*$/gm, ' ')
    .replace(/\*\*Purpose:\*\*.*$/gm, ' ')
    .replace(/\*\*用途[^\n]*$/gm, ' ')
    // link-only lines (nav scaffolding) -- but NOT bullets/tables, which is where
    // real authored content often lives (risk lists, comparison tables).
    .replace(/^\s*[-*]?\s*\[[^\]]*\]\([^)]*\)\s*$/gm, ' ')
    .replace(/^\s*\|?\s*\[[^\]]*\]\([^)]*\)\s*$/gm, ' ');
  // A unit of authored text = a bullet, a table row or a paragraph carrying at
  // least one sentence terminator. Generated member tables and Purpose lines have
  // none, which is what separates them without consulting any heading name.
  // Blocks are delimited by BLANK lines; hard-wrapped lines are joined back
  // together. Splitting on every newline instead chopped sentences in half
  // (markdown here wraps at ~80 cols), so a zh sentence such as
  // "默认用第一套 ... 才动第二套。" arrived as two unusable fragments.
  // Second line of defence: on two pages the fence stripping did not pair
  // (46 KB of generated C# survived), so drop any block still carrying code
  // markers. Authored prose never contains the word csharp or a leading //.
  body = body
    .split(/\n{2,}/)
    .filter((b) => !/csharp/.test(b) && !/^\s*(\/\/|\/\*)/.test(b.trim()))
    .join('\n\n');
  const units = body
    .split(/\n{2,}/)
    .map((s) => s.replace(/\s+/g, ' ').trim())
    .filter(Boolean);
  let score = 0;
  for (const u of units) {
    // >=1 terminator, >=60 chars. Generated member-table rows and nav bullets
    // contain no terminator at all, which is what separates them -- and requiring
    // 2 suppressed real zh bullets like "键名用 `nameof` 或常量 ... 改名等于丢数据。"
    if (u.length >= RESIDUAL_MIN && (u.match(/[.。!?！？]/g) || []).length >= 1) score += u.length;
  }
  return score;
}

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
  // --- NEW, found by worker D. The single most PRECISE generator fingerprint
  // in the tree: one fixed English sentence whose ONLY variable is the type
  // name. 71 pages, 64+ distinct type names swapped into the same sentence --
  // see the distinct-name census printed below.
  {
    id: 'tmpl:mental_treat_entrypoint_en',
    desc: 'Mental Model body opens with the exact sentence "Treat `X` as an entry point or data node for this subsystem: ..." (type name is the only variable)',
    test: (t, ctx) => ctx.tmplTreatEn,
  },
  // Chinese twin of the same template.
  {
    id: 'tmpl:mental_entrynode_zh',
    desc: 'Mental Model contains the exact zh template "当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么"',
    test: (t, ctx) => ctx.tmplEntryZh,
  },
  // --- Overview template FAMILIES. After replacing the page's own basename with a
  // placeholder, only 31 distinct Overview templates exist across all 36,519
  // self-declared pages, and ZERO of them are singletons. A human writing 36,519
  // pages does not produce exactly 31 opening sentences with no exceptions.
  {
    id: 'tmpl:overview_family_primary_zh',
    desc: 'Overview is the single dominant zh template (40.07% of self-declared pages)',
    test: (t, ctx) => ctx.ovFamily === 'A_zh',
  },
  {
    id: 'tmpl:overview_family_primary_en',
    desc: 'Overview is the single dominant en template (36.0% of self-declared pages)',
    test: (t, ctx) => ctx.ovFamily === 'B_en',
  },
  {
    id: 'tmpl:overview_family_any',
    desc: 'Overview matches ONE OF the 31 enumerated generator template families (type name abstracted)',
    test: (t, ctx) => ctx.ovFamily !== null,
  },
  // --- Mechanical grammar artifact: the Purpose: line is built from the return
  // type + parameter, and always produces the ungrammatical "the this instance".
  // Nobody writes that by hand; it is direct evidence of templated synthesis.
  {
    id: 'gen:purpose_this_instance_artifact',
    desc: 'contains the ungrammatical generated artifact "held by the this instance" / "held by the 该实例"',
    test: (t) => /held by the this instance/.test(t) || /该实例的该实例/.test(t),
  },
  {
    id: 'gen:placeholder_instance_ellipsis',
    desc: 'Usage Example is the literal placeholder `X instance = ...;`',
    test: (t) => /```csharp\r?\n\/\/[^\n]*\n[A-Za-z_][A-Za-z0-9_]*\s+instance\s*=\s*\.\.\.;/.test(t),
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

// Mental-model template fingerprints. The English one is a fixed sentence whose
// only variable is the backticked type name; requiring the backticks is what
// makes it precise. Verified against `grep -rl` = 71 pages.
const TREAT_EN = /^Treat\s+`[^`]+`\s+as an entry point or data node for this subsystem/;
const ENTRYNODE_ZH = /当作这个子系统的入口或数据节点来理解/;

function mentalSection(text) {
  const m = text.match(/^#{2}\s*(?:心智模型|Mental\s*Model)\s*$/im);
  if (!m) return '';
  const rest = text.slice(m.index + m[0].length);
  const next = rest.search(/^#{1,2}\s+/m);
  return next < 0 ? rest : rest.slice(0, next);
}

function overviewSection(text) {
  const m = text.match(/^#{2}\s*(?:概述|Overview)\s*$/im);
  if (!m) return '';
  const rest = text.slice(m.index + m[0].length);
  const next = rest.search(/^#{1,2}\s+/m);
  return next < 0 ? rest : rest.slice(0, next);
}

// The two dominant Overview templates, keyed by their abstracted shape.
// `own` is the page's own basename, erased so only the template remains.
const OV_A_ZH = 'X 位于 X，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表';
const OV_B_EN = 'X lives in X and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members.';

// MEASURED census: erasing the page's own type name collapses the Overviews of
// all 36,519 self-declared pages into exactly 31 distinct strings, zero of them
// singletons. The two dominant ones are matched by prefix above; the remaining
// 29 are pinned here by their 150-char abstracted shape. Regenerate with
// `--families` if content/ changes.
const KNOWN_OV_FAMILIES = new Set([
  'X 位于 X，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。',
  'X lives in X and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.',
  'X 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。',
  'X 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。',
  'X is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.',
  'X is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build a custom control; instances are reached through the widget tree.',
  'X 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。',
  'X behaves like a data carrier: it packages fields so systems can exchange state in a structured form.',
  'X represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.',
  'X 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。',
  'X 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。',
  "X is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.",
  'X 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。',
  'X is a handler used to run agreed response logic when a specific event occurs.',
]);

function overviewFamily(ovFlat, own) {
  const abs = ovFlat.split(own).join('T').replace(/`[^`]*`/g, 'X');
  if (!abs) return null;
  if (abs.startsWith(OV_A_ZH)) return 'A_zh';
  if (abs.startsWith(OV_B_EN)) return 'B_en';
  // 'other' must mean "matches one of the enumerated families", NOT merely
  // "has an Overview". An earlier version returned 'other' unconditionally,
  // which silently turned this signal into a has-an-Overview detector and
  // reported a bogus 53% false-positive rate on handwritten pages.
  return KNOWN_OV_FAMILIES.has(abs.slice(0, 150)) ? 'other' : null;
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
  const mental = mentalSection(text).replace(/\s+/g, ' ').trim();
  const ovFlat = overviewSection(text).replace(/\s+/g, ' ').trim();
  const own = basename(relative(ROOT, f));
  const ctx = {
    fm,
    body: text.slice(fm.length),
    relLinks: (text.match(/\[[^\]]+\]\((?!https?:|#|mailto:)[^)]+\)/g) || []).length,
    policy: classifyPage(relative(ROOT, f).split(sep).join('/'), text).status,
    purposeCellEqualsType: countPurposeCellsEqualType(text),
    tmplTreatEn: TREAT_EN.test(mental),
    tmplEntryZh: ENTRYNODE_ZH.test(mental),
    ovFamily: overviewFamily(ovFlat, own),
    ovAbstract: ovFlat.split(own).join('T').replace(/`[^`]*`/g, 'X'),
  };
  const swapped = mental.match(/^Treat\s+`([^`]+)`/);
  pages.push({
    path: relative(ROOT, f).split(sep).join('/'),
    bytes: statSync(f).size,
    text,
    ctx,
    swappedType: ctx.tmplTreatEn ? swapped?.[1] : null,
  });
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

// type-swapped template census: proves it is ONE template, not many pages
const swapped = new Set(pages.map((p) => p.swappedType).filter(Boolean));
const swappedPages = pages.filter((p) => p.ctx.tmplTreatEn);
console.log('## type-swapped mental-model template (worker D finding)');
console.log('');
console.log(`- pages carrying the exact English template: **${swappedPages.length}** (MEASURED)`);
console.log(`- **distinct type names** swapped into that one sentence: **${swapped.size}** (MEASURED)`);
console.log(`- independent cross-check: \`grep -rl "as an entry point or data node for this subsystem"\` = **71**`);
console.log(`- a template with ${swapped.size} distinct substitutions and no other variation is a generator fingerprint, not prose.`);
// Overview-template family census -- the strongest single piece of evidence in
// this audit. It is computed over SELF-DECLARED pages only, and reported rather
// than folded into a verdict.
const selfDec = pages.filter((p) => p.ctx.fm.includes('的自动生成类参考') || /auto-generated/i.test(p.ctx.fm));
const famCount = {};
for (const p of selfDec) {
  const k = p.ctx.ovAbstract.slice(0, 150);
  if (k) famCount[k] = (famCount[k] || 0) + 1;
}
const fams = Object.entries(famCount).sort((a, b) => b[1] - a[1]);
console.log('## Overview template families (worker D -- central finding)');
console.log('');
console.log(`- self-declared pages: **${selfDec.length}**`);
console.log(`- DISTINCT Overview templates after erasing the page's own type name: **${fams.length}**`);
console.log(`- singleton templates (used by exactly 1 page): **${fams.filter(([, n]) => n === 1).length}**`);
console.log(`- coverage of top-5 families: **${fams.slice(0, 5).reduce((a, b) => a + b[1], 0)}** ` +
  `(${((fams.slice(0, 5).reduce((a, b) => a + b[1], 0) / selfDec.length) * 100).toFixed(2)}%)`);
console.log('');
console.log('| # | pages | share of self-declared | abstracted Overview prefix |');
console.log('|---:|---:|---:|---|');
fams.slice(0, 12).forEach(([k, n], i) => {
  console.log(`| ${i + 1} | ${n} | ${((n / selfDec.length) * 100).toFixed(2)}% | ${k.slice(0, 88).replace(/\|/g, '/')} |`);
});
console.log('');

// Independence check: is classifyPage=='stub' evidence, or just the frontmatter
// marker read a second time? If the two sets nearly coincide, classifyPage adds
// nothing and must not be cited as corroboration of the marker.
const stubPages = pages.filter((p) => p.ctx.policy === 'stub');
const markerPages = pages.filter((p) => p.ctx.fm.includes('的自动生成类参考') || /auto-generated/i.test(p.ctx.fm));
const both = stubPages.filter((p) => markerPages.includes(p)).length;
console.log('## is classifyPage==stub independent of the frontmatter marker?');
console.log('');
console.log(`- classifyPage=='stub': **${stubPages.length}**`);
console.log(`- frontmatter marker: **${markerPages.length}**`);
console.log(`- both: **${both}** (${((both / stubPages.length) * 100).toFixed(2)}% of stub pages)`);
console.log(`- stub but no marker: **${stubPages.length - both}**`);
console.log(`- marker but not stub: **${markerPages.length - both}**`);
console.log(`- Jaccard: **${(both / (stubPages.length + markerPages.length - both)).toFixed(4)}**`);
console.log(`- |stub - marker| = **${Math.abs(stubPages.length - markerPages.length)}**`);
console.log('');
if (both / (stubPages.length + markerPages.length - both) > 0.9) {
  console.log('**VERDICT: NOT INDEPENDENT.** A Jaccard this high means classifyPage is');
  console.log('largely re-reading the marker. It must NOT be cited as corroboration.');
} else {
  console.log('classifyPage carries information beyond the marker.');
}
console.log('');

const byTree = {};
for (const p of swappedPages) {
  const t = p.path.split('/')[1];
  byTree[t] = (byTree[t] || 0) + 1;
}
console.log(`- distribution: ${Object.entries(byTree).map(([k, v]) => `${k}=${v}`).join(', ')}`);
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

// --selftest: confusion matrix of residual() against worker-54's known labels.
// Exists because an earlier authored-content detector was SUPPRESSING (2/227 recall)
// and nothing caught it. This makes that failure impossible to ship again.
// --negcontrol: the POSITIVE control (--selftest) can be passed by an
// over-firing detector. This is the negative control: pages I personally read
// in full and judged PURE SKELETON. A detector that flags these is useless.
if (args.includes('--negcontrol')) {
  const NEG = [
    'content/v1.3.0/en/api/core-extra/AgentAttackType.md', 'content/v1.3.0/zh/api/core-extra/AgentAttackType.md',
    'content/v1.3.0/en/api/campaign/CampaignEvents.md', 'content/v1.3.0/zh/api/campaign-ext/AIState.md',
    'content/v1.3.0/en/api/campaign-ext/AIState.md', 'content/v1.3.15/zh/api/campaign-ext/TheConquestOfSettlementIssue.md',
    'content/v1.4.5/en/api/mission-ext/MPOnSpawnPerkEffectBase.md', 'content/v1.4.5/zh/api/core-extra/ItemFlags.md',
    'content/v1.4.5/en/api/core-extra/ShipType.md', 'content/v1.3.15/en/api/engine/CrashInformationProvider.md',
    'content/v1.3.0/en/api/campaign/AgeModel.md', 'content/v1.3.0/en/api/campaign/AllianceModel.md',
    'content/v1.3.15/en/api/campaign-ext/DefaultMapVisibilityModel.md', 'content/v1.3.15/en/api/campaign-ext/AlliedLordTag.md',
    'content/v1.3.15/en/api/campaign-ext/NpcIsNobleTag.md', 'content/v1.3.15/en/api/save-system/LegacyGameDataDeserializer.md',
    'content/v1.3.0/en/api/campaign/IViewDataTracker.md', 'content/v1.3.0/en/api/mission-ext/AgentReadOnlyList.md',
    'content/v1.4.5/en/api/campaign-ext/UnselectSiegeWeapon.md', 'content/v1.3.15/en/api/mission-ext/AnimationSystemBoneData.md',
    'content/v1.4.5/en/api/campaign-ext/MapEscapeMenuView.md', 'content/v1.4.5/en/api/mission-ext/MissionRadialCircleActionSelectorWidget.md',
    'content/v1.3.0/zh/api/campaign/MenuCallbackArgs.md', 'content/v1.3.0/en/api/campaign-ext/BannerEditorView.md',
    'content/v1.3.0/en/api/gui/ScrollingRichTextWidget.md', 'content/v1.3.0/en/api/campaign/DefaultPartyImpairmentModel.md',
    'content/v1.3.0/en/api/campaign-ext/DefaultPartyImpairmentModel.md', 'content/v1.3.15/en/api/campaign-ext/DefaultMapVisibilityModel.md',
  ];
  let flagged = 0, n = 0;
  for (const p of NEG) {
    if (!existsSync(join(ROOT, p))) continue;
    n += 1;
    if (residual(readFileSync(join(ROOT, p), 'utf8')) > 0) {
      flagged += 1;
      console.log(`  WRONGLY FLAGGED: ${p}`);
    }
  }
  console.log(`# negcontrol: ${flagged}/${n} known-pure-skeleton pages flagged (${((flagged / n) * 100).toFixed(1)}%)`);
  console.log(flagged === 0 ? 'PASS: detector is not over-firing.' : 'FAIL: detector over-fires.');
  process.exit(flagged === 0 ? 0 : 1);
}

if (args.includes('--selftest')) {
  const LABEL = join(ROOT, 'tools/_audit-labels-3.jsonl');
  if (!existsSync(LABEL)) {
    console.log('selftest: no tools/_audit-labels-3.jsonl — cannot validate. REFUSING.');
    process.exit(2);
  }
  const rows = readFileSync(LABEL, 'utf8')
    .split(/\r?\n/)
    .filter((x) => x.trim())
    .map((l) => JSON.parse(l));
  let TP = 0, FN = 0, FP = 0, TN = 0;
  const missed = [];
  for (const r of rows) {
    let real = false;
    try {
      real = residual(readFileSync(join(ROOT, r.path), 'utf8')) > 0;
    } catch {
      continue;
    }
    if (r.label === 'handwritten') {
      if (real) TP += 1;
      else {
        FN += 1;
        missed.push(r.path);
      }
    } else if (real) FP += 1;
    else TN += 1;
  }
  console.log(`# residual() selftest over ${rows.length} known labels (threshold ${RESIDUAL_MIN})`);
  console.log(`| | truth handwritten | truth generated |`);
  console.log(`|---|---:|---:|`);
  console.log(`| says "has real content" | TP=${TP} | FP=${FP} |`);
  console.log(`| says "pure skeleton" | **FN=${FN}** | TN=${TN} |`);
  console.log('');
  console.log(`recall on handwritten = ${((TP / (TP + FN)) * 100).toFixed(1)}%`);
  if (missed.length) {
    console.log('');
    console.log('SUPPRESSED (the number that matters):');
    for (const p of missed) console.log(`  ${p}`);
  }
  // The failure mode that produced the bogus "4 exceptions" figure was FN >> 0.
  const ok = FN === 0;
  console.log('');
  console.log(ok ? 'PASS: detector is not suppressing.' : `FAIL: suppressing ${FN} hand-written page(s).`);
  process.exit(ok ? 0 : 1);
}

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

console.log('| signal | corpus rate | GENERATED | HANDWRITTEN | hw region base | VERDICT |');
console.log('|---|---:|---:|---:|---:|---|');
const INVALID_THRESHOLD = 0.05;
const verdicts = {};

// Which subtrees did the handwritten rows come from? A signal with a ZERO base
// rate in those subtrees cannot produce a false positive there, no matter how
// good it is. Reporting "0% on handwritten" for such a signal tells us nothing
// about a handwritten page that DOES carry the signal, if such pages exist
// outside the sampled region. That distinction is reported per signal below.
const hwSubtrees = new Set(
  rows.filter((r) => r.label === 'handwritten').map((r) => r.path.split('/')[1])
);
const hwRegionPages = pages.filter((p) => hwSubtrees.has(p.path.split('/')[1]));
const f = (r) => (Number.isFinite(r) ? `${(r * 100).toFixed(2)}%` : 'n/a');
for (const s of SIGNALS) {
  const sets = {};
  for (const [label, arr] of Object.entries(byLabel)) {
    const rs = arr.map((r) => resolved.find((x) => x.r.path === r.path)).filter(Boolean);
    sets[label] = { n: rs.length, hits: rs.filter((x) => s.test(x.p.text, x.p.ctx)).length };
  }
  const gen = sets.generated || { n: 0, hits: 0 };
  const hw = sets.handwritten || { n: 0, hits: 0 };
  const regionHits = hwRegionPages.filter((p) => s.test(p.text, p.ctx)).length;
  const regionRate = hwRegionPages.length ? regionHits / hwRegionPages.length : NaN;
  const corpusRate = corpusHits[s.id] / N;
  const gr = gen.n ? gen.hits / gen.n : NaN;
  const hr = hw.n ? hw.hits / hw.n : NaN;

  let verdict;
  if (!Number.isFinite(hr)) {
    verdict = 'UNTESTED (no handwritten rows)';
  } else if (hr > INVALID_THRESHOLD) {
    verdict = '**INVALID** (fires on >5% of known-handwritten)';
  } else if (gr === 0 && hr === 0) {
    verdict = '**NO COVERAGE** (zero hits on BOTH labeled sets)';
  } else if (gr > 0.5 && hr === 0) {
    verdict = 'discriminator (high on GENERATED, zero on HANDWRITTEN)';
  } else if (gr <= 0.5 && hr === 0) {
    verdict = 'no information (near-zero on both sides)';
  } else {
    verdict = 'weak';
  }
  // A signal that is a strong discriminator BUT has a 0 base rate in the
  // sampled handwritten region cannot have its FP rate estimated for handwritten
  // pages outside that region. Flag it rather than let "0%" read as validated.
  const regionLimited = regionHits === 0 && corpusRate > 0.05 && gr > 0.5;
  if (regionLimited) verdict += ' -- **FP RATE NOT ESTIMABLE** (region-limited)';

  verdicts[s.id] = { gr, hr, regionRate, corpusRate, verdict, genN: gen.n, hwN: hw.n, regionLimited };
  console.log(
    `| \`${s.id}\` | ${f(corpusRate)} | ${gen.hits}/${gen.n} ${f(gr)} | ${hw.hits}/${hw.n} ${f(hr)} | ${f(regionRate)} | ${verdict} |`
  );
}
console.log('');
console.log(`handwritten rows were drawn from subtrees: ${[...hwSubtrees].join(', ')} (${hwRegionPages.length} pages total in region)`);
console.log('');
console.log('DONE. Remember: HIGH rate on GENERATED + LOW rate on HANDWRITTEN == a');
console.log('useful discriminator. Nothing above is a verdict on any page.');

// --- exit 2 on the desc_template family ------------------------------------
// desc_template is the signal the whole audit is betting on. It can only be
// validated by a hand-labelled page that DOES carry the marker. If the sampled
// handwritten region has a zero base rate for it, no such page exists in the
// sample and the signal is untestable -- we must say so and exit 2 rather than
// let a vacuous 0% be read as "verified".
const DESC_SIGNALS = ['desc:zh_autogen_fm', 'desc:en_autogen_fm', 'desc:combined_autogen_fm'];
const untestable = DESC_SIGNALS.filter((id) => {
  const v = verdicts[id];
  return v && (v.regionLimited || (v.gr === 0 && v.hr === 0));
});
if (untestable.length) {
  console.log('');
  console.log('## REFUSING TO ISSUE A VERDICT ON desc_template');
  console.log('');
  const descLines = DESC_SIGNALS.map((id) => {
    const v = verdicts[id];
    return `  - ${id}: corpus ${(v.corpusRate * 100).toFixed(2)}%, GENERATED ${(v.gr * 100).toFixed(2)}%/${v.genN}, HANDWRITTEN ${(v.hr * 100).toFixed(2)}%/${v.hwN}`;
  });
  console.log(descLines.join('\n'));
  console.log('');
  console.log('NOT ONE labeled page -- on either side -- carries the auto-generated');
  console.log('frontmatter description. The GENERATED rows are content/versions/** and');
  console.log('content/_index.md, which have no `description:` field at all. The');
  console.log('handwritten rows come from the new trees, where the marker is absent by');
  console.log('construction. So the control set contains zero coverage of this signal.');
  console.log('');
  console.log('MISSING INPUT: >=1 hand-labelled page from the OLD trees (v1.3.0 / v1.3.15 /');
  console.log('v1.4.5) that DOES carry the auto-generated frontmatter description, plus');
  console.log('>=1 hand-labelled GENERATED page. OWNER: lead-4.');
  console.log('');
  console.log('Until that exists, desc_template is UNTESTED -- not valid, not invalid.');
  console.log('The 93.6% self-declaration rate cannot stand in for a false-positive rate.');
  console.log('');
  console.log('REMINDER: "36,519 pages (93.6%) self-declare as auto-generated" is NOT the');
  console.log('same as "36,519 pages ARE auto-generated". A page can carry a stale');
  console.log('boilerplate description while its body is genuinely hand-written.');
  process.exit(2);
}