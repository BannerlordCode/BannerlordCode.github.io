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
// ⚠️ 本尺测不到什么（已逐条实测确认，交付时必须一并交出这份清单）
//   1. 【嵌套类型】universe 只取 .cs 文件 basename，且 canonical 契约只数顶层。
//      实测：viewmodel/FormationConfiguration 是 MissionOrderVM.cs:1376 里的嵌套 public struct，
//      本尺看不见它是否被索引当顶层条目列了 —— 那一类只能靠 grep 声明位置人工判读。已知实例：viewmodel/_index.md:76。
//   2. 【声明级 vs 文件级】universe 是文件级（每个 .cs 一条），而 MISSING 的分母若按「类型数」读会与本尺的数字对不上。两者不可互相校准。
//   3. 【同名不同目录】IMbEvent.2 / MapTrackerItemVM.2 这类导出重名，文件级会算成两条，声明级是一条。
//   4. 【索引写错类型名】本尺只比「桶里有没有这个名字」，不验证这个名字在源码里真实存在。
//      索引若列了一个源码没有的类型，本尺视其为 universe 的一部分，不会报。反向检查需另一把尺。
//   5. 【有界搜索当穷尽搜索】universe 来自 walk（有目录边界）；任何「全树 N 处命中」的说法都要先问边界在哪。
// —— 一个不声明盲区的仪器，会让人以为它测过了。
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { assertDirMapSchemaExit } from './_dir_map_contract.mjs';

const REPO = process.cwd();
const ART = JSON.parse(fs.readFileSync(path.join(REPO, 'tools/_dir-map-canonical.json'), 'utf8'));
const SRC = path.resolve(REPO, process.argv[2] || '../bannerlord-1.4.6');
const TREE = process.argv[3] || 'v1.4.6';

if (typeof ART.schemaVersion !== 'number') {
  console.error(`ARTIFACT_SHAPE_CHANGED: schemaVersion=${JSON.stringify(ART.schemaVersion)} 不是数字，拒绝出结论`);
  process.exit(2);
}
assertDirMapSchemaExit(ART, '_v146_index_completeness');
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

// 索引「清单条目」= 列表项（- / * / +）的**首个**标识符，外加全文件所有 ./<Name> 同桶链接。
//
// v6 修口径（v5 的 EXTRA=1073 是假报警，MISSING=4421 是漏报）：
//   v5 用 /`([A-Za-z_][A-Za-z0-9]*)`/ 扫**整个** _index.md，于是每条清单条目的**说明散文**都被吞进
//   「已提及」集合。一条 `- \`Army\` — 类，实现 \`ITrackableBase\`…\`ArmyType\`、\`ArmyOwner\`` 会把
//   ArmyType / ArmyOwner / ITrackableBase 三个成员名当成「索引列出的类型」。而 universe 取的是
//   .cs **文件 basename**，成员名永远不会在 universe 里 → 全进 EXTRA。实测 EXTRA 1073 里 931 条
//   （87%）是全库查无此类型的成员名/命名空间段/桶名，142 条是真实但归在邻桶的类型，0 条是真缺失。
//   同一个膨胀同时喂给 covered，让 MISSING 少报（假阴性）。
//   契约（见文件头）说的是「索引列出的**未撰写名**」，那就是清单条目的首名，不是散文里的任何大写词元。
//   两种条目写法都收：`- \`Name\` — …` 与 `- [Name](./Name) — …`（见 mission-ext / core-extra）。
const idxDir = apiDir;
const mentionedByDir = new Map();
for (const bucket of fs.existsSync(idxDir) ? fs.readdirSync(idxDir, { withFileTypes: true }) : []) {
  if (!bucket.isDirectory()) continue;
  const idx = path.join(idxDir, bucket.name, '_index.md');
  const set = new Set();
  if (fs.existsSync(idx)) {
    const t = fs.readFileSync(idx, 'utf8');
    for (const line of t.split('\n')) {
      const b = line.match(/^\s*[-*+]\s+(.*)$/);            // 只认列表项，散文段落一律不看
      if (!b) continue;
      // 剥掉首名之前允许出现的装饰（加粗标记、指向邻桶/邻页的前置链接），
      // 剩下的**必须**就是条目首名。不这样做的话，「- **[campaign-ext](../campaign-ext/) = …**」这类
      // 桶间分工说明会把后半句里的真类型名当成清单条目。
      let s = b[1].trim().replace(/^(?:\*\*|\*)+/, '').trim();
      for (let i = 0; i < 3; i++) {
        const l = s.match(/^\[[^\]]*\]\([^)]*\)\s*/);
        if (!l) break;
        s = s.slice(l[0].length).trim().replace(/^(?:\*\*|\*)+/, '').trim();
      }
      const m = s.match(/^`([A-Z][A-Za-z0-9_]*)`|^\[([^\]]+)\]\(\.\/([A-Za-z_][A-Za-z0-9]*)\)/);
      if (m) set.add(m[1] || m[3] || m[2].trim());             // 位置最靠前的那个 = 条目首名
    }
    for (const m of t.matchAll(/\]\(\.\/([A-Za-z_][A-Za-z0-9]*)\)/g)) set.add(m[1]);
  }
  mentionedByDir.set(bucket.name, set);
}

let totalMissing = 0, totalExtra = 0, totalEntries = 0;
for (const [bucket, universe] of [...byDir].sort((a, b) => b[1].size - a[1].size)) {
  const pages = pagesByDir.get(bucket) || new Set();
  const mentioned = mentionedByDir.get(bucket) || new Set();
  totalEntries += mentioned.size;
  const covered = new Set([...pages, ...mentioned]);
  const missing = [...universe].filter((t) => !covered.has(t));   // 既没页、也没进清单
  const extra = [...mentioned].filter((t) => !universe.has(t) && !pages.has(t));
  totalMissing += missing.length; totalExtra += extra.length;
  console.log(`${bucket.padEnd(20)} universe(file-level)=${String(universe.size).padStart(5)}  pages=${String(pages.size).padStart(4)}  entries=${String(mentioned.size).padStart(4)}  MISSING_FROM_INDEX=${missing.length}  EXTRA=${extra.length}` +
    (missing.length ? `\n    missing: ${missing.slice(0, 8).join(', ')}${missing.length > 8 ? ' …' : ''}` : ''));
}
// Fail-closed：抽取器退化成空集时，MISSING 会等于 universe、EXTRA 恒 0，看上去像「一切正常」。
// 这正是本门禁第一版伪装成通过的形态（见上面 walk 注释），所以显式拒绝。
if (!totalEntries) {
  console.error(`EXTRACTOR_DEGENERATE: 从 ${path.join(REPO, 'content', TREE, 'zh', 'api')}/*/_index.md 里抽到 0 条清单条目 —— 抽取规则与当前索引写法对不上，拒绝出结论（这不等于索引完整）`);
  process.exit(2);
}
console.log(`\nTREE=${TREE}  excludeNs=${exNs}  excludeSuffix=${exSf}  TOTAL_ENTRIES=${totalEntries}  TOTAL_MISSING_FROM_INDEX=${totalMissing}  TOTAL_EXTRA=${totalExtra}`);
console.log('口径：universe 是文件级（每个 .cs 文件一个条目），不是声明级；声明级由普查 worker 负责并需自报口径。');
console.log('口径：entries 是各桶 _index.md **清单条目首名**的 distinct 数（- `Name` / - [Name](./Name)）；条目正文里的成员名、命名空间段、桶名都不算条目。');
console.log('反向验收：node tools/_v146_fix_verify.mjs —— 证明 entries ⊆ v5 散文词元 且 missing 只会多报不会少报。');