// 第 7 号门禁：桶索引「已撰写 / 尚未撰写」清单与 canonical 现算结果的双向比对。
//
// 为什么需要它（与 orphan 同源但更难查）：
//   orphan 有工具能查        → 「页存在但没入口」
//   索引列全没有工具能查    → 「类型既没页也没进清单」，读者完全无从发现
// 两个方向都要报：只报 MISSING 会漏掉「索引列了已写完的类型」这种反向失真。
//
// 口径（写死，避免各次测量口径不一）：
//   MISSING_FROM_INDEX = canonical 现算的该桶 public 顶层类型 −（索引列出的未撰写名 ∪ 磁盘已存在的类页）
//   EXTRA              = 索引列出的未撰写名 −（canonical 现算集合 ∪ 磁盘已存在的类页）
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const REPO = process.cwd();
const ART = JSON.parse(fs.readFileSync(path.join(REPO, 'tools/_dir-map-canonical.json'), 'utf8'));
const SRC = path.resolve(REPO, process.argv[2] || '../bannerlord-1.4.6');
const TREE = process.argv[3] || 'v1.4.6';

if (ART.schemaVersion !== 5) {
  console.error(`ARTIFACT_SHAPE_CHANGED: schemaVersion=${ART.schemaVersion}（本脚本按 5 解析），拒绝出结论`);
  process.exit(2);
}
const rules = [...ART.rules].sort((a, b) => b.prefix.length - a.prefix.length);
const excl = ART.excludeNamespaces || [];
const exSuffix = ART.excludeSuffixes || [];
const overrides = ART.entryPointDirs || {};
function dirOf(ns, typeName) {
  if (typeof overrides[typeName] === 'string') return overrides[typeName];
  for (const r of rules) if (ns.startsWith(r.prefix)) return r.dir;
  return ART.defaultDir;
}
// excludeSuffixes 按「路径段」匹配，不是整条路径子串（后者曾误杀 CampaignSystem 全树）
const segHit = (rel, s) => rel.split('/').some((seg) => seg === s || seg.startsWith(s + '.') || seg.split('.').includes(s));

// 注意：walk 的返回值必须赋回 files。（第一版写成 `const files = [];` 后另调 walk，
// 返回的新数组被丢弃 → files 恒空 → universe 为空 → MISSING 报 0，
// 也就是「一个什么都没找到的检查器」伪装成「一切正常」。）
const files = (function walk(d, a = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    e.isDirectory() ? walk(p, a) : e.name.endsWith('.cs') && a.push(p);
  }
  return a;
})(SRC);
if (!files.length) {
  console.error(`NO_SOURCE_FILES: 在 ${SRC} 下未找到任何 .cs —— 检查器无法工作，拒绝出结论（这不等于索引完整）`);
  process.exit(2);
}

const byDir = new Map();
let exNs = 0, exSf = 0;
for (const f of files) {
  const head = fs.readFileSync(f, 'utf8').slice(0, 6000);
  const nm = head.match(/^\s*namespace\s+([\w.]+)/m);
  const ns = nm ? nm[1] : '';
  const rel = f.split(path.sep).join('/');
  if (excl.some((e) => ns === e || ns.startsWith(e + '.'))) { exNs++; continue; }
  if (exSuffix.some((s) => segHit(rel, s))) { exSf++; continue; }
  const d = dirOf(ns, path.basename(f, '.cs'));
  if (!byDir.has(d)) byDir.set(d, new Set());
  byDir.get(d).add(path.basename(f, '.cs')); // 文件级基线（声明级由普查 worker 负责）
}

// 磁盘已存在的类页（叶子页，排除 _index.md）
const apiDir = path.join(REPO, 'content', TREE, 'zh', 'api');
const pagesByDir = new Map();
for (const bucket of fs.existsSync(apiDir) ? fs.readdirSync(apiDir, { withFileTypes: true }) : []) {
  if (!bucket.isDirectory()) continue;
  const set = new Set();
  for (const f of fs.readdirSync(path.join(apiDir, bucket.name))) {
    if (f.endsWith('.md') && f !== '_index.md') set.add(f.replace(/\.md$/, '').split('__').pop());
  }
  pagesByDir.set(bucket.name, set);
}

// 索引里反引号/链接里出现的类型名（粗口径：抽出所有反引号内的 PascalCase 标识符作为「已提及」）
const idxDir = apiDir;
const mentionedByDir = new Map();
for (const bucket of fs.existsSync(idxDir) ? fs.readdirSync(idxDir, { withFileTypes: true }) : []) {
  if (!bucket.isDirectory()) continue;
  const idx = path.join(idxDir, bucket.name, '_index.md');
  const set = new Set();
  if (fs.existsSync(idx)) {
    const t = fs.readFileSync(idx, 'utf8');
    for (const m of t.matchAll(/`([A-Za-z_][A-Za-z0-9]*)`/g)) if (/^[A-Z]/.test(m[1])) set.add(m[1]);
    for (const m of t.matchAll(/\]\(\.\/([A-Za-z_][A-Za-z0-9]*)\)/g)) set.add(m[1]);
  }
  mentionedByDir.set(bucket.name, set);
}

let totalMissing = 0, totalExtra = 0;
for (const [bucket, universe] of [...byDir].sort((a, b) => b[1].size - a[1].size)) {
  const pages = pagesByDir.get(bucket) || new Set();
  const mentioned = mentionedByDir.get(bucket) || new Set();
  const covered = new Set([...pages, ...mentioned]);
  const missing = [...universe].filter((t) => !covered.has(t));   // 既没页、也没进清单
  const extra = [...mentioned].filter((t) => !universe.has(t) && !pages.has(t));
  totalMissing += missing.length; totalExtra += extra.length;
  console.log(`${bucket.padEnd(20)} universe(file-level)=${String(universe.size).padStart(5)}  pages=${String(pages.size).padStart(4)}  MISSING_FROM_INDEX=${missing.length}  EXTRA=${extra.length}` +
    (missing.length ? `\n    missing: ${missing.slice(0, 8).join(', ')}${missing.length > 8 ? ' …' : ''}` : ''));
}
console.log(`\nTREE=${TREE}  excludeNs=${exNs}  excludeSuffix=${exSf}  TOTAL_MISSING_FROM_INDEX=${totalMissing}  TOTAL_EXTRA=${totalExtra}`);
console.log('口径：universe 是文件级（每个 .cs 文件一个条目），不是声明级；声明级由普查 worker 负责并需自报口径。');