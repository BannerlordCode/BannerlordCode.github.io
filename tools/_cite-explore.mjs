// _cite-explore.mjs —— 只读【候选排序器】：把文档里的 `File.cs:行号` 引用按“可能需要人看一眼”
// 的程度排个序。它【不判定缺陷】，不对任何一条下结论。
//
// # 🔴 实测假红率 ~83% —— 这个数不要藏
// 2026-10-04 在 28 个 IMB* 页 + ActionIndexCache.md 上跑出约 30 条高信号告警，
// 人工抽验 6 条：**5 条假、1 条真**。
// 假阳性长这样：anchor=cs（从路径 span 切出来的）、anchor=z（页面签名里的参数名）、
// anchor=bannerlord（文件名里的单词）—— 全是散文，不是被引的那个东西。
//
// # 为什么不做成判定器（boss #4488 裁定）
// 锚点的本质是【句子的主语是谁】。第 3 轮和第 7 轮各失败一次，同一个原因：
// **正则不读句子**。一个需要读句子才能判的量，不是正则的工作。
// 通则：拒绝路径要窄，解释路径要宽。本工具在解释路径上 ⇒ 可以宽，但不得下结论。
//
// # 硬约束
//   · 不输出【缺陷】/【编造】/任何判定性结论；不输出会被人当成结论的颜色标记
//   · 信号名一律中性：line-hits / line-offset / symbol-not-seen / file-not-in-tree …
//   · 排序依据是【信号强度】，不是【严重性】；一条强信号不等于一条真缺陷
//   · 任何结论必须人工确认后才能写进报告
//   · 自检只断言「能稳定产出候选且不崩」，【不断言它判得对】
//     —— 断言它判得对，正是第 7 轮栽的那一刀
//
// # 用法
//   node tools/_cite-explore.mjs --self-check
//   node tools/_cite-explore.mjs --tree bannerlord-1.4.5 <dir-or-file.md> [...]
//
// # 退出码
//   0 正常（含「有候选」）  2 参数/输入非法  3 自检失败
//   —— 本工具【不因「有候选」而返回非零】：它不是门禁。
import fs from 'node:fs';
import path from 'node:path';

const argv = process.argv.slice(2);
const has = (k) => argv.includes(k);
const arg = (k) => { const i = argv.indexOf(k); return i >= 0 ? argv[i + 1] : null; };

const TREE_DEFAULT = 'bannerlord-1.4.5';
const NEAR_WINDOW = 8;             // 「附近」的半宽
const ANCHOR_MAX_HITS = 8;         // 一个符号在同一文件里出现超过这么多次 ⇒ 辨识度不足
const KIND = { DECL: 'decl', ASSIGN: 'assign', CALL: 'call', OTHER: 'other' };

// ── 工具集 ────────────────────────────────────────────────────────────────
function indexTree(tree) {
  const idx = new Map();
  if (!fs.existsSync(tree)) return idx;
  (function walk(d) {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const f = path.join(d, e.name);
      if (e.isDirectory()) walk(f);
      else if (e.name.endsWith('.cs')) {
        if (!idx.has(e.name)) idx.set(e.name, []);
        idx.get(e.name).push(f);
      }
    }
  })(tree);
  return idx;
}

/**
 * 用文档里给出的【路径片段】消歧，而不是拿 basename 撞库。
 * 同名多份且片段不足以区分 → ambiguous_path，**不猜**。
 */
function resolveFile(idx, citedRaw) {
  const cited = citedRaw.replace(/\\/g, '/');
  const base = cited.split('/').pop();
  const hits = idx.get(base) || [];
  if (!hits.length) return { kind: 'file_not_in_tree' };
  if (hits.length === 1) return { kind: 'ok', path: hits[0] };
  const segs = cited.split('/').slice(0, -1);
  const scored = hits.filter((f) => {
    const n = f.replace(/\\/g, '/');
    return segs.every((s) => s && s !== '.' && n.includes('/' + s + '/'));
  });
  if (scored.length === 1) return { kind: 'ok', path: scored[0] };
  return { kind: 'ambiguous_path', cands: (scored.length ? scored : hits).map((f) => f.replace(/\\/g, '/')) };
}

/** 该行的形态。只报告，不参与排序。 */
function classify(line) {
  const t = line.trim();
  const declish = /^\s*(?:\[[^\]]*\]\s*)*\w[\w<>,\[\]\.\s]*\b\w+\s*(?:=[^=]|;\s*$|\{\s*get)/.test(t);
  const plainAssign = /(^|[^=!<>+\-*/%&|^])=(?!=)/.test(t) && !/=>/.test(t);
  if (plainAssign) return KIND.ASSIGN;
  if (/\b(class|interface|struct|enum|record)\s+\w+/.test(t)) return KIND.DECL;
  if (declish) return KIND.DECL;
  if (/[\w\]\.]\s*\([^()]*\)\s*;/.test(t)) return KIND.CALL;
  return KIND.OTHER;
}

function countHits(lines, sym) {
  const re = new RegExp('\\b' + sym.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b');
  let n = 0;
  for (const l of lines) if (re.test(l)) n++;
  return n;
}

// C# 关键字与字面量：它们出现在散文里不代表【被引用的东西】。
const NOT_AN_ANCHOR = new Set(['internal', 'public', 'private', 'protected', 'static', 'readonly',
  'const', 'virtual', 'override', 'abstract', 'sealed', 'extern', 'unsafe', 'partial',
  'string', 'bool', 'int', 'float', 'double', 'void', 'char', 'byte', 'long', 'short',
  'true', 'false', 'null', 'ref', 'out', 'in', 'new', 'get', 'set', 'this', 'base',
  'class', 'interface', 'struct', 'enum', 'namespace', 'return', 'if', 'else', 'for', 'while']);

/**
 * 锚点只能来自引用【自己所在的 span】或紧邻的前一个已闭合 span。
 * 取 `Type.Member(...)` 的最后一段。拿不到就 low_signal，**绝不往后搜**。
 * 注意：这仍然不是「句子的主语」——这正是它只能当排序器的原因。
 */
function pickAnchor(line, mIndex, lines) {
  let head = line.slice(0, mIndex);
  if (head.endsWith('`')) head = head.slice(0, -1);
  const spans = [...head.matchAll(/`([^`]+)`/g)];
  if (!spans.length) return { weak: true, sym: null, hits: 0 };
  const ids = spans[spans.length - 1][1].match(/[A-Za-z_][A-Za-z0-9_]*/g);
  if (!ids || !ids.length) return { weak: true, sym: null, hits: 0 };
  const sym = ids[ids.length - 1];
  if (NOT_AN_ANCHOR.has(sym)) return { weak: true, sym, hits: 0 };
  const h = countHits(lines, sym);
  if (h === 0) return { sym, hits: 0, unseen: true };
  if (h > ANCHOR_MAX_HITS) return { sym, hits: h, weak: true };
  return { sym, hits: h, weak: false };
}

function exploreDoc(file, idx, tree) {
  const out = [];
  const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);
  lines.forEach((line, i) => {
    for (const m of line.matchAll(/`?([A-Za-z0-9_][A-Za-z0-9_./\\-]*\.cs):(\d+)(?:-(\d+))?`?/g)) {
      const rec = { doc: file, docLine: i + 1, cited: m[0], n: +m[2] };
      const r = resolveFile(idx, m[1]);
      if (r.kind !== 'ok') {
        rec.signal = r.kind;
        if (r.cands) rec.cands = r.cands;
        out.push(rec); continue;
      }
      rec.resolved = path.relative(tree, r.path).replace(/\\/g, '/');
      if (!fs.existsSync(r.path)) { rec.signal = 'file_not_in_tree'; out.push(rec); continue; }
      const src = fs.readFileSync(r.path, 'utf8').split(/\r?\n/);
      rec.totalLines = src.length;
      if (rec.n > src.length) { rec.signal = 'line_out_of_range'; out.push(rec); continue; }

      const anchor = pickAnchor(line, m.index, src);
      if (!anchor || anchor.weak) { rec.signal = 'low_signal'; if (anchor && anchor.sym) rec.anchor = anchor.sym; out.push(rec); continue; }
      rec.anchor = anchor.sym;
      rec.anchorHits = anchor.hits;

      const at = rec.n - 1;
      const citeLine = (src[at] || '').trim();
      rec.citeLineText = citeLine.slice(0, 100);
      rec.citeLineKind = classify(src[at] || '');
      if (citeLine.includes(anchor.sym)) { rec.signal = 'line_hits'; out.push(rec); continue; }

      if (anchor.unseen) { rec.signal = 'symbol_not_seen'; out.push(rec); continue; }

      let found = -1;
      for (let k = Math.max(0, at - NEAR_WINDOW); k <= Math.min(src.length - 1, at + NEAR_WINDOW); k++) {
        if (src[k].includes(anchor.sym)) { found = k + 1; break; }
      }
      if (found > 0) {
        rec.signal = 'line_offset';
        rec.realLine = found;
        rec.delta = found - rec.n;
        rec.realKind = classify(src[found - 1] || '');
        rec.realLineText = (src[found - 1] || '').trim().slice(0, 100);
      } else {
        rec.signal = 'symbol_not_seen';
      }
      out.push(rec);
    }
  });
  return out;
}

// 信号表：描述【观察到什么】，不描述【对错】。attention = 建议先看的程度，不是严重性。
const SIGNALS = {
  line_hits:         { attention: 0, note: '引用行上就出现了锚点符号' },
  line_offset:       { attention: 2, note: '锚点在附近，但不在引用那一行（行号可能偏了）' },
  symbol_not_seen:   { attention: 1, note: '在该文件中未见这个符号 —— 可能锚点选错，也可能真有问题' },
  file_not_in_tree:  { attention: 3, note: '该路径片段在源码树里找不到对应文件' },
  line_out_of_range: { attention: 3, note: '行号超出该文件总行数' },
  ambiguous_path:    { attention: 0, note: '同名文件多份且片段不足以区分 —— 工具不猜' },
  low_signal:        { attention: 0, note: '找不到高辨识度锚点（多为散文/关键字）—— 本工具判不了' },
};
const SIGNAL_KEYS = Object.keys(SIGNALS);

function summarize(recs) {
  const by = {};
  for (const k of SIGNAL_KEYS) by[k] = 0;
  for (const r of recs) by[r.signal] = (by[r.signal] || 0) + 1;
  const ranked = recs
    .filter((r) => SIGNALS[r.signal] && SIGNALS[r.signal].attention > 0)
    .sort((a, b) => SIGNALS[b.signal].attention - SIGNALS[a.signal].attention
      || String(a.doc).localeCompare(String(b.doc)) || a.docLine - b.docLine);
  const unresolved = recs.filter((r) => SIGNALS[r.signal] && SIGNALS[r.signal].attention === 0).length;
  return { by, ranked, unresolved, total: recs.length };
}

function fmt(r) {
  const s = SIGNALS[r.signal];
  const bits = [`${r.doc}:${r.docLine}`, `[${r.signal}]`, r.cited];
  if (r.anchor) bits.push(`anchor=${r.anchor}`);
  if (r.realLine) bits.push(`符号实际在 ${r.realLine}（${r.delta > 0 ? '+' : ''}${r.delta}）`);
  if (r.citeLineKind) bits.push(`该行形态=${r.citeLineKind}`);
  if (r.resolved) bits.push(r.resolved);
  if (r.cands) bits.push(`候选文件: ${r.cands.join(' | ')}`);
  return `  ${bits.join('  ')}\n      ${s.note}`;
}

function reportAll(recs, label, tree) {
  const s = summarize(recs);
  console.log(`\n=== ${label} ===`);
  console.log(`口径: tree=${tree}  近邻窗口=±${NEAR_WINDOW} 行  锚点辨识度阈值=同文件内 ≤${ANCHOR_MAX_HITS} 次`);
  console.log(`引用=${s.total}  ` + SIGNAL_KEYS.map((k) => `${k}=${s.by[k]}`).join('  '));
  console.log(`需人工看一眼的候选=${s.ranked.length}  本工具判不了的=${s.unresolved}`);
  if (!s.ranked.length) { console.log('（无候选。注意：这不等于「全部正确」，只等于本工具没产出需要看的。）'); return s; }
  console.log('按信号强度排序（非严重性）：');
  for (const r of s.ranked) console.log(fmt(r));
  return s;
}

// ── --self-check：只断言「能稳定产出候选且不崩」 ──────────────────────────
// 不断言「它判得对」—— 那是第 7 轮栽的那一刀：自检 16/16 全绿，真实数据假红率 83%。
function selfCheck() {
  const tmp = fs.mkdtempSync(path.join(fs.realpathSync(process.env.TEMP || '.'), 'citee-'));
  let pass = 0, fail = 0;
  const check = (label, ok, detail) => { ok ? pass++ : fail++; console.log(`  ${ok ? 'ok  ' : 'FAIL'}  ${label}${detail ? '  ' + detail : ''}`); };
  try {
    const modA = path.join(tmp, 'ModA', 'Ns'), modB = path.join(tmp, 'ModB', 'Ns');
    fs.mkdirSync(modA, { recursive: true }); fs.mkdirSync(modB, { recursive: true });
    fs.writeFileSync(path.join(modA, 'Same.cs'), 'namespace A {\n  public int Alpha;\n}\n');
    fs.writeFileSync(path.join(modB, 'Same.cs'), 'namespace B {\n  public int Beta;\n}\n');
    fs.writeFileSync(path.join(modA, 'Solo.cs'), 'namespace N {\n  public int Unique;\n  public int Target;\n  void M() {\n    Target = 1;\n  }\n}\n');
    fs.writeFileSync(path.join(modA, 'Trap.cs'), 'namespace N {\n  public int Kept;\n}\n');
    fs.writeFileSync(path.join(modA, 'Sound.cs'), 'namespace N {\n  public static bool Play(string s)\n  {\n    return true;\n  }\n}\n');
    const idx = indexTree(tmp);
    const doc = path.join(tmp, 'd.md');
    const INPUTS = [
      '见 `Solo.Target`（Solo.cs:3）',            // 引用行命中
      '见 `Unique`（Solo.cs:5）',                // 附近命中、行号偏
      '见 `Ghost`（Solo.cs:3）',                 // 文件里未见该符号
      '见 `Nope.cs:3`',                          // 树里没有这个文件
      '见 `Target`（Solo.cs:9999）',             // 行号越界
      '见 `X`（Same.cs:2）',                     // 同名多份、片段不足
      '它是一个 `internal` 类，见 `Trap.cs:2`',   // 关键字当锚点 → 判不了
      '完全没有锚点的裸引用 Trap.cs:2',           // 无 span
    ];
    let crash = 0, produced = 0;
    for (const t of INPUTS) {
      try { fs.writeFileSync(doc, '# t\n\n' + t + '\n'); if (exploreDoc(doc, idx, tmp).length) produced++; }
      catch (e) { crash++; console.log('       crashed on: ' + t + '  ' + e.message); }
    }
    check('八种输入形态都不崩', crash === 0, `crash=${crash}`);
    check('每种形态都产出了记录', produced === INPUTS.length, `${produced}/${INPUTS.length}`);

    fs.writeFileSync(doc, '# t\n\n见 `Unique`（Solo.cs:5）\n');
    const a = exploreDoc(doc, idx, tmp).map((r) => `${r.signal}|${r.anchor}|${r.realLine}`).join(',');
    const b = exploreDoc(doc, idx, tmp).map((r) => `${r.signal}|${r.anchor}|${r.realLine}`).join(',');
    check('同一输入两次运行信号完全一致', a === b, a);

    const all = INPUTS.flatMap((t) => { fs.writeFileSync(doc, '# t\n\n' + t + '\n'); return exploreDoc(doc, idx, tmp); });
    check('所有信号都在信号表内', all.every((r) => Object.prototype.hasOwnProperty.call(SIGNALS, r.signal)),
      [...new Set(all.map((r) => r.signal))].join(','));

    // 输出里不得出现会被当成结论的词 —— 83% 假红的实际危害路径就是「红字」
    const sink = [];
    const realLog = console.log;
    console.log = (...x) => sink.push(x.join(' '));
    try { reportAll(all, 'selfcheck-dry', tmp); } finally { console.log = realLog; }
    const printed = sink.join('\n');
    const BANNED = ['EXACT', 'DRIFT', 'SYMBOL_ABSENT', 'FILE_MISSING', 'VERDICT', 'HARD_FINDINGS', '缺陷', '编造', '\u{1F534}'];
    const hit = BANNED.filter((w) => printed.includes(w));
    check('输出不含任何判定性词汇或红色标记', hit.length === 0, hit.join(','));

    const s = summarize(all);
    check('候选数与注意力权重自洽', s.ranked.length === all.filter((r) => SIGNALS[r.signal].attention > 0).length,
      `ranked=${s.ranked.length}`);
  } finally { try { fs.rmSync(tmp, { recursive: true, force: true }); } catch {} }
  console.log(`\n  self-check: ${pass} passed, ${fail} failed`);
  console.log('  注意：本自检【不断言本工具判得对】。它只证明「不崩、确定、词汇中性、信号自洽」。');
  console.log('  实测假红率 ~83%（2026-10-04，人工抽验 6 条：5 假 1 真）。结论必须人工确认。');
  if (fail) { console.error('  THE SORTER IS UNSTABLE. Refusing to emit candidates.'); process.exit(3); }
  process.exit(0);
}

// ── main ──────────────────────────────────────────────────────────────────
if (has('--self-check')) { selfCheck(); process.exit(0); }

console.log('本工具只排序候选，不判定缺陷；任何结论必须人工确认。');
console.log('实测假红率 ~83%（2026-10-04，人工抽验 6 条：5 假 1 真）。详见文件头。');
console.log('信号含义：' + SIGNAL_KEYS.map((k) => `${k}（${SIGNALS[k].note}）`).join('  '));

const tree = arg('--tree') || TREE_DEFAULT;
const targets = argv.filter((a) => !a.startsWith('--'));
if (!fs.existsSync(tree)) { console.error(`源码树不存在: ${tree}（用 --tree 指定）`); process.exit(2); }
if (!targets.length) { console.error('用法: node tools/_cite-explore.mjs <file.md|dir> [...]  |  --self-check'); process.exit(2); }

const files = [];
for (const t of targets) {
  if (!fs.existsSync(t)) { console.error(`不存在的路径: ${t}`); process.exit(2); }
  if (fs.statSync(t).isDirectory()) (function w(x) { for (const e of fs.readdirSync(x, { withFileTypes: true })) { const f = path.join(x, e.name); if (e.isDirectory()) w(f); else if (e.name.endsWith('.md')) files.push(f); } })(t);
  else files.push(t);
}

const idx = indexTree(tree);
console.log(`TREE=${tree}  .cs 索引=${idx.size} 个不同文件名  待查页面=${files.length}`);

let all = [];
for (const f of files) all = all.concat(exploreDoc(f, idx, tree));
const grand = summarize(all);
console.log('\n================ TOTAL ================');
console.log(`引用=${grand.total}  ` + SIGNAL_KEYS.map((k) => `${k}=${grand.by[k]}`).join('  '));
console.log(`需人工看一眼的候选=${grand.ranked.length}  本工具判不了的=${grand.unresolved}`);
for (const r of grand.ranked) console.log(fmt(r));
console.log('\n再次提醒：以上是【候选】，不是结论。高信号 ≠ 真问题（实测假红率 ~83%）。');
process.exit(0);