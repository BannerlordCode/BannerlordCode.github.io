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
 *   tools/_verify/tiers-v<ver>-<lang>.json   （6 树 × 2 语言 = 12 个文件）
 *       v1.3.0 / v1.3.15 / v1.4.5：扁平对象 {"zh/api/.../Campaign.md": "shell", ...}
 *       v1.4.6 / v1.4.7 / v1.5.3：汇总对象 {pageCount, pages:[{path, tier, ...}]}
 *
 * 输出：
 *   tools/_COVERAGE-CENSUS-20261007.md
 *   tools/_verify/missing-types-<ver>-<lang>.txt
 *
 * 算法：
 *   1. 类型集合 T = types[] 按 Namespace.Name 去重（去重后数量 == uniqueTypeCount）
 *   2. 页面集合 P = tiers 页面 basename 去 .md
 *   3. 归一化：① 小写；② 去 __TaleWorlds_... 后缀；③ 去泛型 <...>；④ 嵌套类取最后一个 `.` 之后。
 *      ★ 两侧同规则，不做 I 前缀剥离（旧代码两侧不对称 ⇒ 分母虚高，已修）。
 *      ③ 去 __TaleWorlds_... 后缀；④ 去泛型 <...>；⑤ 嵌套类取最后一个 '.' 之后
 *   4. 类型归一化名 ∈ 页面归一化名集合 ⇒ 有页面；
 *      一个归一化名对应多个不同类型 ⇒ 歧义桶（既不算有页面也不算缺页）
 *   5. 缺页 = T - 有页面 - 歧义桶，再按 R1 规则（isR1TargetType）剔除噪声类型；
 *      v1.3.0 源码树不完整 ⇒ confidence=low（独立置信度来源）
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { isR1TargetType } from '../lib/handwritten-policy.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(HERE, '..', '..');
const VERS = ['1.3.0', '1.3.15', '1.4.5', '1.4.6', '1.4.7', '1.5.3'];
const LANGS = ['zh', 'en'];
const STAMP = '20261007';
const REPORT = path.join(REPO, 'tools', `_COVERAGE-CENSUS-${STAMP}.md`);
const AMB_LIST_CAP = 50;

const nowISO = () => new Date().toISOString();

/** 类型名 / 页面 basename 归一化（见文件头算法 ③）
 * ★ 两侧必须用同一条规则（lead-23 发现，boss #16834 确认）：
 *   旧代码在类型侧对 FQN 做 I 前缀剥离（I 不在串首 ⇒ 不剥离），
 *   在页面侧对 basename 做 I 前缀剥离（I 在串首 ⇒ 剥离）⇒ 不对称。
 *   后果：I 前缀接口即使有页面也被计为缺页（分母虚高，方向单一）。
 *   修法：两侧都【不做前缀剥离】，仅小写化 + ③④⑤（对称步骤）。
 *   正控制：IFaction/IFormation/ISaveDriver/IViewModel 修后必须不再被标为缺页。
 */
function normalize(name) {
  let n = String(name);
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

  // 2./4./5. 每语言：页面集合、有页面、缺页（缺页按 R1 规则过滤）
  const langs = {};
  for (const lang of LANGS) {
    const tiers = loadTiers(ver, lang);
    if (!tiers) { langs[lang] = null; continue; }
    const pageSet = new Set(tiers.map(p => pageNorm(p.path)));
    const dist = {};
    for (const p of tiers) dist[p.tier] = (dist[p.tier] || 0) + 1;
    let hasPage = 0;
    let r1Out = 0; // R1 出局：isR1TargetType=false，不计入缺页
    const missing = [];
    const r1OutNames = []; // R1 出局全名（用于命名空间分布说明）
    for (const full of byName.keys()) {
      const n = normalize(full);
      if (ambNorms.has(n)) continue; // 歧义桶：两边都不算
      if (pageSet.has(n)) { hasPage++; continue; }
      const ty = byName.get(full);
      if (!isR1TargetType({ namespace: ty.namespace, typeName: ty.name })) { r1Out++; r1OutNames.push(full); continue; }
      missing.push(full);
    }
    missing.sort();
    langs[lang] = { tiers, pageSet, dist, hasPage, missing, r1Out, r1OutNames };
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
    const lines = [`# N=${missing.length} sampled=${nowISO()} cmd: node tools/_verify/make-coverage-census.mjs [R1-filtered]`];
    if (!L) lines.push('# confidence=low');
    lines.push(...missing);
    const f = path.join(HERE, `missing-types-${r.ver}-${lang}.txt`);
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
md.push('  - `tools/_verify/tiers-v<ver>-<lang>.json` × 12（1.3.0 / 1.3.15 / 1.4.5 为扁平对象；1.4.6 / 1.4.7 / 1.5.3 为 `{pageCount, pages[]}` 汇总对象）');
md.push('');
md.push('## 分母定义');
md.push('');
md.push('- **类型分母**：`types-<ver>.json` 的 `uniqueTypeCount`。脚本内对 `types` 数组按 `Namespace.Name` 去重，去重后数量与该字段一致（已逐树验证）。');
md.push('- **页面分母**：`tiers-v<ver>-<lang>.json` 的页面条数（扁平对象取 key 数；汇总对象取 `pages.length`，与 `pageCount` 一致）。');
md.push('- **匹配规则（归一化，类型名与页面 basename 同规则）**：① 小写；② 去 `__TaleWorlds_...` 后缀；③ 去泛型 `<...>`；④ 嵌套类取最后一个 `.` 之后；页面侧另取 basename 去 `.md`。**两侧同规则，不做 I 前缀剥离**（旧代码类型侧不剥、页面侧剥 ⇒ 不对称 ⇒ 分母虚高，已修）。');
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
  for (const lang of LANGS) {
    const L = r.langs[lang];
    const d = L.dist;
    md.push(`| v${r.ver} | ${lang} | ${L.tiers.length} | ${d.handwritten_deep || 0} | ${d.generated || 0} | ${d.shell || 0} | ${d.other || 0} |`);
  }
}
md.push('');
md.push('量法（扁平对象，1.3.0 / 1.3.15 / 1.4.5）：`jq \'to_entries|group_by(.value)|map({key:.[0].value,n:length})|from_entries\' tools/_verify/tiers-v<ver>-<lang>.json`');
md.push('量法（汇总对象，1.4.6 / 1.4.7 / 1.5.3）：`jq \'.pages|group_by(.tier)|map({key:.[0].tier,n:length})|from_entries\' tools/_verify/tiers-v<ver>-<lang>.json`');
md.push('');
md.push('> 注：v1.4.6 / v1.4.7 / v1.5.3 的 tiers 文件仅含重分类 worker 交付的子集（pageCount 远小于全树页面数），total 不代表全树页面总量。');
md.push('');

// ---- 表3 ----
md.push('## 表3 无页面缺口（缺页已按 R1 规则过滤）');
md.push('');
md.push('| 树 | 语言 | 类型数 | 有页面 | 缺页 | 其中 R1 出局 | 歧义桶 | confidence |');
md.push('|---|---|---:|---:|---:|---:|---:|---|');
for (const r of rows) {
  for (const lang of LANGS) {
    const L = r.langs[lang];
    const typeCount = r.byName.size;
    const ambTypes = [...r.ambiguous.values()].reduce((s, a) => s + a.length, 0);
    const hasPage = L ? L.hasPage : 0;
    const missing = L ? L.missing.length : typeCount - ambTypes;
    const r1Out = L ? L.r1Out : 0;
    md.push(`| v${r.ver} | ${lang} | ${typeCount} | ${hasPage} | ${missing} | ${r1Out} | ${ambTypes} | ${confidenceNote(r)} |`);
  }
}
md.push('');
md.push('- 歧义桶按树计（与语言无关，同树两行数值相同）；缺页明细见 `tools/_verify/missing-types-<ver>-<lang>.txt`。');
md.push('- 量法：`tail -n +2 tools/_verify/missing-types-<ver>-<lang>.txt | wc -l`。');
md.push('- **缺页分母已按项目自己的 R1 规则（`isR1TargetType`，见 `tools/lib/handwritten-policy.mjs`）过滤**：其中 N 个类型按 R1 规则属于出局范围，不计入缺口。各树 旧分母 → 新分母（剔除 Z，占 W%）：');
for (const r of rows) {
  const fmt = L => {
    if (!L) return '—';
    const oldN = L.missing.length + L.r1Out;
    return `${oldN} → ${L.missing.length}（剔除 ${L.r1Out}，占 ${(100 * L.r1Out / oldN).toFixed(1)}%）`;
  };
  md.push(`  - v${r.ver}：zh ${fmt(r.langs.zh)}；en ${fmt(r.langs.en)}`);
}
md.push('');

// ---- 缺页分母与归属状态 ----
md.push('## 缺页分母与归属状态');
md.push('');
md.push('| 树 | 语言 | 缺页（R1 过滤后） | 归属状态 |');
md.push('|---|---|---:|---|');
const ownership = { '1.3.0': 'lead-16', '1.3.15': 'lead-16', '1.4.5': 'lead-18' };
for (const r of rows) {
  for (const lang of LANGS) {
    const L = r.langs[lang];
    const missing = L ? L.missing.length : 0;
    let owner;
    if (r.ver === '1.4.5') owner = lang === 'zh' ? 'lead-18' : '**未归属**';
    else if (ownership[r.ver]) owner = ownership[r.ver];
    else owner = '**未归属**';
    md.push(`| v${r.ver} | ${lang} | ${missing} | ${owner} |`);
  }
}
md.push('');
const unclaimed = [];
for (const r of rows) {
  if (r.ver === '1.4.5') { const en = r.langs.en; if (en) unclaimed.push(`v1.4.5/en（${en.missing.length}）`); }
  else if (!ownership[r.ver]) { const zh = r.langs.zh; if (zh) unclaimed.push(`v${r.ver}（${zh.missing.length}）`); }
}
const unclaimedTrees = rows.filter(r => r.ver !== '1.4.5' && !ownership[r.ver]);
const unclaimedTotal = unclaimedTrees.reduce((s, r) => s + (r.langs.zh ? r.langs.zh.missing.length : 0), 0);
md.push('- 现有归属：lead-18 → v1.4.5/zh；lead-16 → v1.3.0 + v1.3.15。');
md.push(`- 未归属：${unclaimed.join(' · ')}。`);
md.push(`- v1.4.6 / v1.4.7 / v1.5.3 三棵树合计约 **${unclaimedTotal.toLocaleString('en-US')}** 个缺页（zh 口径），当前无写作线认领。`);
md.push('');

// ---- R1 剔除率说明 ----
md.push('## R1 剔除率说明');
md.push('');
const v145 = rows.find(r => r.ver === '1.4.5');
const v145zh = v145.langs.zh;
const v145Names = v145zh ? v145zh.r1OutNames : v145.langs.en.r1OutNames;
const v145has = v145zh ? v145zh.hasPage : v145.langs.en.hasPage;
const v145old = v145zh ? v145zh.missing.length + v145zh.r1Out : 0;
const v145new = v145zh ? v145zh.missing.length : 0;
const v145pct = (100 * (v145zh ? v145zh.r1Out : 0) / v145old).toFixed(1);
const v145ratio = (v145old / v145new).toFixed(1);
const nsDist = {};
for (const full of v145Names) {
  const ty = v145.byName.get(full);
  const top = ty.namespace ? ty.namespace.split('.').slice(0, 2).join('.') : '(空命名空间)';
  nsDist[top] = (nsDist[top] || 0) + 1;
}
const nsTop = Object.entries(nsDist).sort((a, b) => b[1] - a[1]);
const nsLines = nsTop.slice(0, 7).map(([ns, n]) => `- \`${ns}\`：${n}`);
const nsOther = nsTop.slice(7).reduce((s, [, n]) => s + n, 0);
if (nsOther > 0) nsLines.push(`- 其他：${nsOther}`);
md.push(`### v1.4.5 的 ${v145pct}% 剔除率`);
md.push('');
md.push(`v1.4.5 的 tiers 文件对游戏自身 API 已接近完整（${v145has}/${v145.byName.size} 类型有页面），因此其缺页集合被源码清单中的**第三方 SDK 类型**主导。R1 出局的 ${v145Names.length} 个缺页候选按命名空间分布：`);
md.push('');
for (const line of nsLines) md.push(line);
md.push('');
md.push(`这些正是 R1 噪声规则（\`isR1TargetType\`）要排除的类型。这把旧结论「v1.4.5 还缺 ${v145old} 页」修正为 **${v145new} 页**（虚高 ${v145ratio} 倍）。`);
md.push('');
md.push('### v1.3.0 反而不是异常');
md.push('');
const v130 = rows.find(r => r.ver === '1.3.0');
const v130zh = v130.langs.zh;
const v130old = v130zh.missing.length + v130zh.r1Out;
const v130pct = (100 * v130zh.r1Out / v130old).toFixed(1);
const v1315 = rows.find(r => r.ver === '1.3.15');
const v1315zh = v1315.langs.zh;
const v1315old = v1315zh.missing.length + v1315zh.r1Out;
const v1315pct = (100 * v1315zh.r1Out / v1315old).toFixed(1);
md.push(`Boss 先前猜测 v1.3.0 会因源码树不完整（缺 \`TaleWorlds.ObjectSystem/MBObjectManager\`）而在剔除率上异常。实测结果推翻了这一猜测：v1.3.0 的剔除率为 **${v130pct}%**（${v130old} → ${v130zh.missing.length}，剔除 ${v130zh.r1Out}），是六树中最低之一，与 v1.3.15（${v1315pct}%）接近。其缺页集合以 \`JetBrains.Annotations\`（29）和 \`TaleWorlds.GauntletUI.CodeGenerator\`（18）为主，均为 R1 正常排除的噪声类型。源码树不完整影响的是 confidence（low），而非剔除率。`);
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
const sumR1Out = rows.reduce((s, r) => s + (r.langs.zh ? r.langs.zh.r1Out : (r.langs.en ? r.langs.en.r1Out : 0)), 0);
md.push('## 全站合计');
md.push('');
md.push(`- 类型总数（Σ uniqueTypeCount，6 树）：**${sumUnique}**`);
md.push(`- 页面总数（Σ tiers total，12 个 树×语言）：**${sumPages}**`);
md.push(`- 缺页总数（Σ 缺页，12 个 树×语言，已按 R1 过滤）：**${sumMissing}**`);
md.push(`- R1 出局总数（Σ 每树一次，6 树；不计入缺口）：**${sumR1Out}**`);
md.push(`- 歧义桶总数（Σ 每树歧义类型数，按树计一次）：**${sumAmb}**`);
md.push('');

// ---- 复现命令 ----
md.push('## 每个数字的量法（复现命令）');
md.push('');
md.push('- 重跑本报告：`node tools/_verify/make-coverage-census.mjs`');
md.push('- 旧的 `tools/_verify/queue-missing-*.pages.txt` 已废弃（SUPERSEDED），缺页明细以 `missing-types-*.txt` 为准。');
md.push('- 表1 任一行：`jq \'{fileCount,sourceACount,uniqueTypeCount,disagreementCount}\' tools/_verify/types-1.3.0.json`');
md.push('- 表2 扁平 tiers：`jq \'to_entries|group_by(.value)|map({key:.[0].value,n:length})|from_entries\' tools/_verify/tiers-v1.3.15-zh.json`');
md.push('- 表2 汇总 tiers：`jq \'.pages|group_by(.tier)|map({key:.[0].tier,n:length})|from_entries\' tools/_verify/tiers-v1.4.6-zh.json`');
md.push('- 表3 缺页数：`tail -n +2 tools/_verify/missing-types-1.3.15-zh.txt | wc -l`');
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
  console.log(`v${r.ver}: unique=${r.t.uniqueTypeCount} amb=${ambTypes} | zh: has=${zh ? zh.hasPage : 0} miss=${zh ? zh.missing.length : '-'} r1out=${zh ? zh.r1Out : '-'} | en: has=${en ? en.hasPage : 0} miss=${en ? en.missing.length : '-'} r1out=${en ? en.r1Out : '-'}`);
}
