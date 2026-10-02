// 只读普查（v1.4.6）：真·手写页 与 手写->生成 入链统计
// 生成判据（多指纹交叉，刻意包含「标记加入之前生成的旧页」）：
//   1) `<!-- generated-by: ... -->` 标记
//   2) 自述 `Batch first draft`
//   3) description 模板形如 `X：<ns> 的 public 类/结构体/接口` 或 `X: a public class/struct/interface in <ns>`
// 手写判据 = 不命中以上任一；链接按 route-relative 解析，目标为生成页则计入 hand->generated
import fs from 'node:fs';
import path from 'node:path';
const ROOT = 'content/v1.4.6';
function walk(d, acc = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p, acc); else if (e.name.endsWith('.md')) acc.push(p);
  }
  return acc;
}
const files = walk(ROOT);

// 空 universe 守卫：一个什么都没遍历到的检查器，与「正确地什么都没找到」输出完全一样。
// 因此空集必须报错退出，而不是报出一个漂亮的 0。
if (!files.length) {
  console.error('EMPTY_UNIVERSE: 未遍历到任何文件 —— 检查器无法工作，拒绝出结论（这不等于「一切正常」）');
  process.exit(2);
}
const GEN_DESC_ZH = /：(?:TaleWorlds|SandBox|StoryMode)\.\S+ 的 public (?:类|结构体|接口|枚举)/;
const GEN_DESC_EN = /: a public (?:class|struct|interface|enum) in (?:TaleWorlds|SandBox|StoryMode)\.\S+/;
function genReason(t) {
  if (t.includes('<!-- generated-by:')) return 'marker';
  if (t.includes('Batch first draft')) return 'self-declared-batch';
  const fm = t.match(/^---\r?\n([\s\S]*?)^---/m);
  const d = fm ? fm[1] : '';
  if (GEN_DESC_ZH.test(d)) return 'zh-desc-template';
  if (GEN_DESC_EN.test(d)) return 'en-desc-template';
  return null;
}
const reason = new Map();
for (const f of files) reason.set(f, genReason(fs.readFileSync(f, 'utf8')));
const routeOf = (rel) => { const p = rel.split(path.sep).join('/').replace(/\.md$/, ''); return p.endsWith('_index') ? p.replace(/_index$/, '') : p + '/'; };
function resolve(fromRoute, href) {
  if (/^(https?:|#|mailto:)/.test(href)) return null;
  const h = href.split('#')[0]; if (!h) return null;
  const segs = fromRoute.split('/').filter(Boolean);
  for (const part of h.split('/')) { if (part === '.' || part === '') continue; if (part === '..') segs.pop(); else segs.push(part); }
  const r = segs.join('/'); return r.endsWith('/') ? r : r + '/';
}
const genRoutes = new Map();
for (const f of files) if (reason.get(f)) genRoutes.set(routeOf(path.relative(ROOT, f)), f);
const hand = files.filter((f) => !reason.get(f));
const tally = {};
for (const f of files) if (reason.get(f)) tally[reason.get(f)] = (tally[reason.get(f)] || 0) + 1;
let edges = 0; const perFile = [];
for (const f of hand) {
  const rel = path.relative(ROOT, f); const t = fs.readFileSync(f, 'utf8');
  const re = /\[[^\]]*\]\(([^)\s]+)\)/g; let m; const hits = new Set();
  while ((m = re.exec(t))) { const tg = resolve(routeOf(rel), m[1]); if (tg && genRoutes.has(tg)) hits.add(tg); }
  if (hits.size) { edges += hits.size; perFile.push([rel, hits.size]); }
}
perFile.sort((a, b) => b[1] - a[1]);
const langOf = (p) => p.split(path.sep)[0];
const handByLang = {}, genByLang = {}, edgeByLang = {};
for (const f of hand) { const l = langOf(path.relative(ROOT, f)); handByLang[l] = (handByLang[l] || 0) + 1; }
for (const r of genRoutes.keys()) { const l = r.split('/')[0]; genByLang[l] = (genByLang[l] || 0) + 1; }
for (const [rel] of perFile) { const l = langOf(rel); edgeByLang[l] = (edgeByLang[l] || 0) + 1; }
console.log('GEN_TOTAL=' + genRoutes.size, JSON.stringify(genByLang));
console.log('GEN_FINGERPRINT_BREAKDOWN=' + JSON.stringify(tally));
console.log('HAND_TOTAL=' + hand.length, JSON.stringify(handByLang));
console.log('HAND_FILES_WITH_EDGES_TO_GEN=' + perFile.length, JSON.stringify(edgeByLang));
console.log('DISTINCT_HAND->GEN_EDGES=' + edges);
console.log('--- per-file ---'); for (const [rel, n] of perFile) console.log(String(n).padStart(3), rel);
console.log('--- handwritten leaf pages (non _index) ---');
for (const f of hand.filter((f) => path.basename(f) !== '_index.md').map((f) => path.relative(ROOT, f)).sort()) console.log('  ' + f);
