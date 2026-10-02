// 反向验收：修仪器前后逐条对拍，证明 +316 MISSING 是「旧仪器漏报被纠正」而非「过滤掉了真缺失」。
// 判据：v6 的清单条目集合是 v5 散文词元集合的**子集**。若成立，则
//   missing_v6 ⊇ missing_v5 恒成立 → 修后不可能「少报」，只可能多报 → 不存在把真缺失滤掉的可能。
import fs from 'node:fs';
import path from 'node:path';

const REPO = process.cwd();
const ART = JSON.parse(fs.readFileSync(path.join(REPO, 'tools/_dir-map-canonical.json'), 'utf8'));
const INV = JSON.parse(fs.readFileSync(path.join(REPO, 'tools/_v146_inventory.json'), 'utf8'));
const API = path.join(REPO, 'content', 'v1.4.6', 'zh', 'api');

const typeNames = new Set(INV.types.map((t) => t.name));
const memberNames = new Set();
for (const t of INV.types) for (const m of t.members || []) for (const g of String(m.signature || '').matchAll(/[A-Z][A-Za-z0-9_]{2,}/g)) memberNames.add(g[0]);
const typeNs = new Map(INV.types.map((t) => [t.name, t.namespace]));

const rules = [...ART.rules].sort((a, b) => b.prefix.length - a.prefix.length);
const excl = ART.excludeNamespaces || [], exSuffix = ART.excludeSuffixes || [], overrides = ART.entryPointDirs || {};
const dirOf = (ns, t) => { if (typeof overrides[t] === 'string') return overrides[t]; for (const r of rules) if (ns.startsWith(r.prefix)) return r.dir; return ART.defaultDir; };
const segHit = (rel, s) => rel.split('/').some((seg) => seg === s || seg.startsWith(s + '.') || seg.split('.').includes(s));
const SRC = path.resolve(REPO, process.argv[2] || '../bannerlord-1.4.6');
const files = (function walk(d, a = []) { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, e.name); e.isDirectory() ? walk(p, a) : e.name.endsWith('.cs') && a.push(p); } return a; })(SRC);
const byDir = new Map();
for (const f of files) {
  const nm = fs.readFileSync(f, 'utf8').slice(0, 6000).match(/^\s*namespace\s+([\w.]+)/m);
  const ns = nm ? nm[1] : ''; const rel = f.split(path.sep).join('/');
  if (excl.some((e) => ns === e || ns.startsWith(e + '.'))) continue;
  if (exSuffix.some((s) => segHit(rel, s))) continue;
  const d = dirOf(ns, path.basename(f, '.cs'));
  if (!byDir.has(d)) byDir.set(d, new Set());
  byDir.get(d).add(path.basename(f, '.cs'));
}

const V5 = new Map(), V6 = new Map(), RAW = new Map();
for (const b of fs.readdirSync(API, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name)) {
  const idx = path.join(API, b, '_index.md');
  const raw = fs.existsSync(idx) ? fs.readFileSync(idx, 'utf8') : '';
  RAW.set(b, raw);
  const v5 = new Set(), v6 = new Set();
  for (const m of raw.matchAll(/`([A-Za-z_][A-Za-z0-9]*)`/g)) if (/^[A-Z]/.test(m[1])) v5.add(m[1]);
  for (const m of raw.matchAll(/\]\(\.\/([A-Za-z_][A-Za-z0-9]*)\)/g)) v5.add(m[1]);
  for (const line of raw.split('\n')) {
    const x = line.match(/^\s*[-*+]\s+(.*)$/); if (!x) continue;
    let s = x[1].trim().replace(/^(?:\*\*|\*)+/, '').trim();
    for (let i = 0; i < 3; i++) { const l = s.match(/^\[[^\]]*\]\([^)]*\)\s*/); if (!l) break; s = s.slice(l[0].length).trim().replace(/^(?:\*\*|\*)+/, '').trim(); }
    const m = s.match(/^`([A-Z][A-Za-z0-9_]*)`|^\[([^\]]+)\]\(\.\/([A-Za-z_][A-Za-z0-9]*)\)/);
    if (m) v6.add(m[1] || m[3] || m[2].trim());
  }
  for (const m of raw.matchAll(/\]\(\.\/([A-Za-z_][A-Za-z0-9]*)\)/g)) v6.add(m[1]);
  V5.set(b, v5); V6.set(b, v6);
}

let subsetOK = true;
for (const b of V6.keys()) for (const n of V6.get(b)) if (!V5.get(b).has(n)) { subsetOK = false; console.log('!! 非子集:', b, n); }
console.log('【前置判据】v6 清单条目 ⊆ v5 散文词元 :', subsetOK ? 'PASS（恒真 → 修后不可能少报）' : 'FAIL');

let newly = [], gone = [];
const extraNew = [];
for (const b of V6.keys()) {
  const universe = byDir.get(b) || new Set();
  const pages = new Set(fs.readdirSync(path.join(API, b)).filter((f) => f.endsWith('.md') && f !== '_index.md').map((f) => f.replace(/\.md$/, '').split('__').pop()));
  const m5 = [...universe].filter((t) => !pages.has(t) && !V5.get(b).has(t));
  const m6 = [...universe].filter((t) => !pages.has(t) && !V6.get(b).has(t));
  for (const t of m6) if (!m5.includes(t)) newly.push({ b, t });
  for (const t of m5) if (!m6.includes(t)) gone.push({ b, t });
  const e5 = [...V5.get(b)].filter((t) => !universe.has(t) && !pages.has(t));
  const e6 = [...V6.get(b)].filter((t) => !universe.has(t) && !pages.has(t));
  for (const t of e6) extraNew.push({ b, t });
}
console.log(`\nMISSING: v5=${4421}  v6=${4421 + newly.length - gone.length}  新增=${newly.length}  消失=${gone.length}`);
console.log(gone.length === 0 ? '→ 消失=0：修仪器没有让任何一个桶少报。真缺失不可能被滤掉。' : '→ !! 有消失项，必须逐条判读');

// 新增 MISSING 逐条归类：它们在原文里到底以什么形式出现过
const cats = new Map();
const bump = (k) => cats.set(k, (cats.get(k) || 0) + 1);
for (const { b, t } of newly) {
  const raw = RAW.get(b);
  const bullet = new RegExp(`^\\s*[-*+]\\s+(?:\`${t}\`|\\[${t}\\]\\(\\./${t}\\))`, 'm').test(raw);
  if (bullet) bump('清单条目(修后仍漏→真缺失)');
  else if (new RegExp(`\`${t}\``).test(raw)) bump('仅出现在散文/表格的说明文字里');
  else bump('原文完全未提及(修后仍漏→真缺失)');
}
console.log('\n=== 新增 MISSING 的原文出现形式 ===');
for (const [k, v] of cats) console.log(`  ${k.padEnd(32)} ${v}`);
console.log('\n=== 新增 MISSING 抽样 20（bucket:type → 判定） ===');
for (const { b, t } of newly.filter((_, i) => i % Math.ceil(newly.length / 20) === 0).slice(0, 20)) {
  const raw = RAW.get(b);
  const where = raw.split('\n').findIndex((l) => l.includes('`' + t + '`'));
  const l = raw.split('\n')[where] || '';
  console.log(`  ${(b + '/' + t).padEnd(46)} ${bulletJudge(raw, t)}  上下文: ${l.trim().slice(0, 70)}`);
}
function bulletJudge(raw, t) {
  if (new RegExp(`^\\s*[-*+]\\s+(?:\`${t}\`|\\[${t}\\]\\(\\./${t}\\))`, 'm').test(raw)) return '真缺失';
  const i = raw.split('\n').findIndex((l) => l.includes('`' + t + '`'));
  const ln = raw.split('\n')[i] || '';
  return /^\s*[-*+]\s/.test(ln) ? '散文提及(假覆盖)' : '非条目提及(假覆盖)';
}

console.log('\n=== 修后残留 EXTRA 全量逐条判读 ===');
for (const { b, t } of extraNew) {
  const verdict = typeNames.has(t) ? (memberNames.has(t) ? '类型名+成员名同名(歧义)' : `真实类型, 归属邻桶(ns=${typeNs.get(t)})`)
    : memberNames.has(t) ? '成员名(假报警)' : '非类型(桶名/命名空间段/散文词)(假报警)';
  console.log(`  ${(b + '/' + t).padEnd(46)} ${verdict}`);
}
fs.writeFileSync(path.join(REPO, 'tools/_v146_fix_diff.json'), JSON.stringify({ subsetOK, newly, gone, extraNew, cats: Object.fromEntries(cats) }, null, 1));