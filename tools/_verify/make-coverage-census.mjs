#!/usr/bin/env node
/**
 * make-coverage-census.mjs — 覆盖率普查脚本（只读 JSON，不读 content/ 页面正文）
 *
 * 输入：
 *   tools/_verify/types-<ver>.json
 *       ver ∈ {1.3.0, 1.3.15, 1.4.5, 1.4.6, 1.4.7, 1.5.3}
 *       格式：{fileCount, sourceACount, uniqueTypeCount, namespaces[], kindCounts{},
 *              sourceBCount, disagreements[{namespace,name,file}], sourceAOnlyCount,
 *              disagreementCount, types:[{namespace,name,kind,file}]}
 *   tools/_verify/tiers-v<ver>-<lang>.json   （v1.3.0 无 tiers 文件）
 *       v1.3.15 / v1.4.5：扁平对象 {"zh/api/.../Campaign.md": "shell", ...}
 *       v1.4.6 / v1.4.7 / v1.5.3：汇总对象 {pageCount, pages:[{path, tier, ...}]}
 *
 * 输出：
 *   tools/_COVERAGE-CENSUS-20261007.md
 *   tools/_verify/queue-missing-<ver>-<lang>.pages.txt
 *
 * 算法：
 *   1. 类型集合 T = types[] 按 Namespace.Name 去重（去重后数量 == uniqueTypeCount）
 *   2. 页面集合 P = tiers 页面 basename 去 .md
 *   3. 归一化：① 小写；② 去 I 前缀（仅当长度>1 且第二个字母大写）；
 *      ③ 去 __TaleWorlds_... 后缀；④ 去泛型 <...>；⑤ 嵌套类取最后一个 '.' 之后
 *   4. 类型归一化名 ∈ 页面归一化名集合 ⇒ 有页面；
 *      一个归一化名对应多个不同类型 ⇒ 歧义桶（既不算有页面也不算缺页）
 *   5. 缺页 = T - 有页面 - 歧义桶；v1.3.0 无 tiers ⇒ 全部进缺页候选，confidence=low
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(HERE, '..', '..');
const VERS = ['1.3.0', '1.3.15', '1.4.5', '1.4.6', '1.4.7', '1.5.3'];
const LANGS = ['zh', 'en'];
const STAMP = '20261007';
const REPORT = path.join(REPO, 'tools', `_COVERAGE-CENSUS-${STAMP}.md`);
const AMB_LIST_CAP = 50;

const nowISO = () => new Date().toISOString();

/** 类型名 / 页面 basename 归一化（见文件头算法 ③） */
function normalize(name) {
  let n = String(name);
  // ② 去 I 前缀（仅当长度>1 且第二个字母大写）——必须在 lowercasing 之前判断
  if (n.length > 1 && n[0] === 'I' && /[A-Z]/.test(n[1])) n = n.slice(1);
  // ③ 去 __TaleWorlds_... 后缀
  const tw = n.indexOf('__TaleWorlds');
  if (tw !== -1) n = n.slice(0, tw);
  // ④ 去泛型 <...>
  n = n.replace(/<.*>$/, '');
  // ⑤ 嵌套类外层：取最后一个 '.' 之后
  const dot = n.lastIndexOf('.');
  if (dot !== -1) n = n.slice(dot + 1);
  // ① 小写
  return n.toLowerCase();
}

/** 页面路径 → 归一化名（basename 去 .md 后同类型规则） */
function pageNorm(p) {
  const base = path.posix.basename(String(p)).replace(/\.md$/, '');
  return normalize(base);
}

const fullName = (ns, name) => (ns ? `${ns}.${name}` : name);

function loadTypes(ver) {
  return JSON.parse(fs.readFileSync(path.join(HERE, `types-${ver}.json`), 'utf8'));
}

/** 返回 [{path, tier}]；无 tiers 文件返回 null */
function loadTiers(ver, lang) {
  const f = path.join(HERE, `tiers-v${ver}-${lang}.json`);
  if (!fs.existsSync(f)) return null;
  const j = JSON.parse(fs.readFileSync(f, 'utf8'));
  if (Array.isArray(j.pages)) return j.pages.map(p => ({ path: p.path, tier: p.tier }));
  return Object.entries(j).map(([p, tier]) => ({ path: p, tier }));
}

// ---------------- 主计算 ----------------
const rows = [];
for (const ver of VERS) {
  const t = loadTypes(ver);

  // 1. 类型集合 T（按全名去重）
  const byName = new Map(); // fullName -> 原始 type 对象
  for (const ty of t.types) {
    const full = fullName(ty.namespace, ty.name);
    if (!byName.has(full)) byName.set(full, ty);
  }

  // 归一化名 -> [全名...]
  const normMap = new Map();
  for (const full of byName.keys()) {
    const n = normalize(full);
    if (!normMap.has(n)) normMap.set(n, []);
    normMap.get(n).push(full);
  }

  // 4. 歧义桶：一个归一化名对应多个不同类型
  const ambiguous = new Map(); // norm -> [全名...]（长度>1）
  for (const [n, arr] of normMap) if (arr.length > 1) ambiguous.set(n, [...arr].sort());
  const ambNorms = new Set(ambiguous.keys());

  // 2./4./5. 每语言：页面集合、有页面、缺页
  const langs = {};
  for (const lang of LANGS) {
    const tiers = loadTiers(ver, lang);
    if (!tiers) { langs[lang] = null; continue; }
    const pageSet = new Set(tiers.map(p => pageNorm(p.path)));
    const dist = {};
    for (const p of tiers) dist[p.tier] = (dist[p.tier] || 0) + 1;
    let hasPage = 0;
    const missing = [];
    for (const full of byName.keys()) {
      const n = normalize(full);
      if (ambNorms.has(n)) continue; // 歧义桶：两边都不算
      if (pageSet.has(n)) hasPage++;
      else missing.push(full);
    }
    missing.sort();
    langs[lang] = { tiers, pageSet, dist, hasPage, missing };
  }

  rows.push({ ver, t, byName, ambiguous, ambNorms, langs });
}

// ---------------- 缺页队列文件 ----------------
const written = [];
for (const r of rows) {
  for (const lang of LANGS) {
    const L = r.langs[lang];
    const missing = L
      ? L.missing
      : [...r.byName.keys()].filter(f => !r.ambNorms.has(normalize(f))).sort();
    const lines = [`# N=${missing.length} sampled=${nowISO()}`];
    if (!L) lines.push('# confidence=low');
    lines.push(...missing);
    const f = path.join(HERE, `queue-missing-${r.ver}-${lang}.pages.txt`);
    fs.writeFileSync(f, lines.join('\n') + '\n');
    written.push(path.relative(REPO, f));
  }
}

// ---------------- 报告 ----------------
const md = [];
const genAt = nowISO();
const confidenceOf = r =>
  r.ver === '1.3.0' ? 'low' : (r.langs.zh && r.langs.zh.tiers && r.langs.zh.tiers.length < 1000 ? 'medium' : 'high');
const confidenceNote = r =>
  r.ver === '1.3.0'
    ? 'low（该树缺 TaleWorlds.ObjectSystem/MBObjectManager，源码不完整）'
    : (r.langs.zh && r.langs.zh.tiers && r.langs.zh.tiers.length < 1000
        ? 'medium（tiers 文件仅含重分类 worker 交付的子集，非全树页面）'
        : 'high');

md.push(`# 覆盖率普查报告（${STAMP}）`);
md.push('');
md.push(`- 生成脚本：\`tools/_verify/make-coverage-census.mjs\`（跑一次即出本报告）`);
md.push(`- 生成时间：${genAt}`);
md.push('- 输入（**只读 JSON，未读任何 content/ 页面正文**）：');
md.push('  - `tools/_verify/types-<ver>.json` × 6（ver ∈ 1.3.0, 1.3.15, 1.4.5, 1.4.6, 1.4.7, 1.5.3）');
md.push('  - `tools/_verify/tiers-v<ver>-<lang>.json` × 10（1.3.15 / 1.4.5 为扁平对象；1.4.6 / 1.4.7 / 1.5.3 为 `{pageCount, pages[]}` 汇总对象）');
md.push('  - v1.3.0 无 tiers 文件（分类未做）');
md.push('');
md.push('## 分母定义');
md.push('');
md.push('- **类型分母**：`types-<ver>.json` 的 `uniqueTypeCount`。脚本内对 `types` 数组按 `Namespace.Name` 去重，去重后数量与该字段一致（已逐树验证）。');
md.push('- **页面分母**：`tiers-v<ver>-<lang>.json` 的页面条数（扁平对象取 key 数；汇总对象取 `pages.length`，与 `pageCount` 一致）。');
md.push('- **匹配规则（归一化，类型名与页面 basename 同规则）**：① 小写；② 去 `I` 前缀（仅当长度>1 且第二个字母大写）；③ 去 `__TaleWorlds_...` 后缀；④ 去泛型 `<...>`；⑤ 嵌套类取最后一个 `.` 之后；页面侧另取 basename 去 `.md`。');
md.push('- **歧义桶**：一个归一化名同时对应多个不同类型 ⇒ 既不计「有页面」也不计「缺页」，单独列出。');
md.push('- **缺页** = 类型集合 − 有页面 − 歧义桶。');
md.push('');

// ---- 表1 ----
md.push('## 表1 类型普查');
md.push('');
md.push('| 树 | fileCount | sourceACount | uniqueTypeCount | disagreementCount |');
md.push('|---|---:|---:|---:|---:|');
for (const r of rows) {
  md.push(`| v${r.ver} | ${r.t.fileCount} | ${r.t.sourceACount} | ${r.t.uniqueTypeCount} | ${r.t.disagreementCount} |`);
}
md.push('');
md.push('量法：`jq \'{fileCount,sourceACount,uniqueTypeCount,disagreementCount}\' tools/_verify/types-<ver>.json`');
md.push('');

// ---- 表2 ----
md.push('## 表2 四档分类（从 tiers 读）');
md.push('');
md.push('| 树 | 语言 | total | handwritten_deep | generated | shell | other |');
md.push('|---|---|---:|---:|---:|---:|---:|');
for (const r of rows) {
  if (r.ver === '1.3.0') {
    md.push('| v1.3.0 | zh / en | 待补（分类 worker 未交付） | — | — | — | — |');
    continue;
  }
  for (const lang of LANGS) {
    const L = r.langs[lang];
    const d = L.dist;
    md.push(`| v${r.ver} | ${lang} | ${L.tiers.length} | ${d.handwritten_deep || 0} | ${d.generated || 0} | ${d.shell || 0} | ${d.other || 0} |`);
  }
}
md.push('');
md.push('量法（扁平对象，1.3.15 / 1.4.5）：`jq \'to_entries|group_by(.value)|map({key:.[0].value,n:length})|from_entries\' tools/_verify/tiers-v<ver>-<lang>.json`');
md.push('量法（汇总对象，1.4.6 / 1.4.7 / 1.5.3）：`jq \'.pages|group_by(.tier)|map({key:.[0].tier,n:length})|from_entries\' tools/_verify/tiers-v<ver>-<lang>.json`');
md.push('');
md.push('> 注：v1.4.6 / v1.4.7 / v1.5.3 的 tiers 文件仅含重分类 worker 交付的子集（pageCount 远小于全树页面数），total 不代表全树页面总量。');
md.push('');

// ---- 表3 ----
md.push('## 表3 无页面缺口');
md.push('');
md.push('| 树 | 语言 | 类型数 | 有页面 | 缺页 | 歧义桶 | confidence |');
md.push('|---|---|---:|---:|---:|---:|---|');
for (const r of rows) {
  for (const lang of LANGS) {
    const L = r.langs[lang];
    const typeCount = r.byName.size;
    const ambTypes = [...r.ambiguous.values()].reduce((s, a) => s + a.length, 0);
    const hasPage = L ? L.hasPage : 0;
    const missing = L ? L.missing.length : typeCount - ambTypes;
    md.push(`| v${r.ver} | ${lang} | ${typeCount} | ${hasPage} | ${missing} | ${ambTypes} | ${confidenceNote(r)} |`);
  }
}
md.push('');
md.push('- 歧义桶按树计（与语言无关，同树两行数值相同）；缺页明细见 `tools/_verify/queue-missing-<ver>-<lang>.pages.txt`。');
md.push('- 量法：`tail -n +2 tools/_verify/queue-missing-<ver>-<lang>.pages.txt | wc -l`（v1.3.0 队列为 2 行头，用 `tail -n +3`）。');
md.push('');

// ---- 歧义桶明细 ----
md.push('## 歧义桶明细（同名不同类型，上限 50 条/树）');
md.push('');
for (const r of rows) {
  const ambTypes = [...r.ambiguous.values()].reduce((s, a) => s + a.length, 0);
  md.push(`### v${r.ver}：${r.ambiguous.size} 个归一化名 / ${ambTypes} 个类型`);
  md.push('');
  if (ambTypes === 0) { md.push('（无）'); md.push(''); continue; }
  const all = [...r.ambiguous.values()].flat().sort();
  for (const f of all.slice(0, AMB_LIST_CAP)) md.push(`- \`${f}\``);
  if (all.length > AMB_LIST_CAP) md.push(`- …（共 ${all.length} 条，仅列前 ${AMB_LIST_CAP}）`);
  md.push('');
}

// ---- 两来源不一致 ----
md.push('## 两来源不一致（sourceA vs sourceB）');
md.push('');
for (const r of rows) {
  const arr = r.t.disagreements || [];
  md.push(`### v${r.ver}：disagreementCount=${r.t.disagreementCount}，sourceAOnlyCount=${r.t.sourceAOnlyCount}，disagreements 明细数组长度=${arr.length}`);
  md.push('');
  if (arr.length === 0) { md.push('（数组为空）'); md.push(''); continue; }
  for (const d of arr) md.push(`- \`${fullName(d.namespace, d.name)}\` — \`${d.file}\``);
  md.push('');
}
md.push('量法：`jq \'{disagreementCount,sourceAOnlyCount,disagreements}\' tools/_verify/types-<ver>.json`');
md.push('');

// ---- 全站合计 ----
const sumUnique = rows.reduce((s, r) => s + r.t.uniqueTypeCount, 0);
const sumPages = rows.reduce((s, r) => s + LANGS.reduce((s2, lang) => s2 + (r.langs[lang] ? r.langs[lang].tiers.length : 0), 0), 0);
const sumMissing = rows.reduce((s, r) => s + LANGS.reduce((s2, lang) => s2 + (r.langs[lang] ? r.langs[lang].missing.length : r.byName.size - [...r.ambiguous.values()].reduce((a, x) => a + x.length, 0)), 0), 0);
const sumAmb = rows.reduce((s, r) => s + [...r.ambiguous.values()].reduce((a, x) => a + x.length, 0), 0);
md.push('## 全站合计');
md.push('');
md.push(`- 类型总数（Σ uniqueTypeCount，6 树）：**${sumUnique}**`);
md.push(`- 页面总数（Σ tiers total，10 个 树×语言；v1.3.0 无 tiers 记 0）：**${sumPages}**`);
md.push(`- 缺页总数（Σ 缺页，10 个 树×语言；v1.3.0 按 confidence=low 计入）：**${sumMissing}**`);
md.push(`- 歧义桶总数（Σ 每树歧义类型数，按树计一次）：**${sumAmb}**`);
md.push('');

// ---- 复现命令 ----
md.push('## 每个数字的量法（复现命令）');
md.push('');
md.push('- 重跑本报告：`node tools/_verify/make-coverage-census.mjs`');
md.push('- 表1 任一行：`jq \'{fileCount,sourceACount,uniqueTypeCount,disagreementCount}\' tools/_verify/types-1.3.0.json`');
md.push('- 表2 扁平 tiers：`jq \'to_entries|group_by(.value)|map({key:.[0].value,n:length})|from_entries\' tools/_verify/tiers-v1.3.15-zh.json`');
md.push('- 表2 汇总 tiers：`jq \'.pages|group_by(.tier)|map({key:.[0].tier,n:length})|from_entries\' tools/_verify/tiers-v1.4.6-zh.json`');
md.push('- 表3 缺页数：`tail -n +2 tools/_verify/queue-missing-1.3.15-zh.pages.txt | wc -l`（v1.3.0 队列 3 行头，用 `tail -n +3`）');
md.push('- 表3 歧义桶：见上「歧义桶明细」节（脚本按归一化名分组，组内 >1 个类型即入桶）');
md.push('- 两来源不一致：`jq \'{disagreementCount,sourceAOnlyCount,disagreements}\' tools/_verify/types-1.3.0.json`');
md.push('');

fs.writeFileSync(REPORT, md.join('\n'));
written.push(path.relative(REPO, path.join('tools', `_COVERAGE-CENSUS-${STAMP}.md`)));

// ---------------- 控制台摘要 ----------------
console.log('== 覆盖率普查完成 ==');
console.log('报告:', REPORT);
for (const w of written) console.log('写出:', w);
console.log('-- 全站合计 --');
console.log('Σ uniqueTypeCount =', sumUnique);
console.log('Σ tiers total     =', sumPages);
console.log('Σ 缺页            =', sumMissing);
console.log('Σ 歧义桶          =', sumAmb);
for (const r of rows) {
  const ambTypes = [...r.ambiguous.values()].reduce((s, a) => s + a.length, 0);
  const zh = r.langs.zh, en = r.langs.en;
  console.log(`v${r.ver}: unique=${r.t.uniqueTypeCount} amb=${ambTypes} | zh: has=${zh ? zh.hasPage : 0} miss=${zh ? zh.missing.length : '-'} | en: has=${en ? en.hasPage : 0} miss=${en ? en.missing.length : '-'}`);
}
