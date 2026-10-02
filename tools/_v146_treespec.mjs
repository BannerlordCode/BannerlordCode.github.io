#!/usr/bin/env node
/**
 * _v146_treespec.mjs — the v1.4.6 naming/routing spec, derived from
 * tools/_dir-map-canonical.json and tools/_v146_inventory.json.
 *
 * READ-ONLY with respect to content/: writes only tools/_v146_tree-spec.{md,json}.
 * Usage: node tools/_v146_treespec.mjs
 */
import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { writeGuarded, mkdirGuarded } from './_v146_content_freeze.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = join(HERE, '..');
const DOCS = join(REPO, 'content', 'v1.4.6');
const inv = JSON.parse(readFileSync(join(REPO, 'tools', '_v146_inventory.json'), 'utf8'));
const run = JSON.parse(readFileSync(join(REPO, 'tools', '_v146_stub-run.json'), 'utf8'));
const CANON = JSON.parse(readFileSync(join(REPO, 'tools', '_dir-map-canonical.json'), 'utf8'));
const RF = JSON.parse(readFileSync(join(REPO, '_v146_reserved-paths.json'.replace('_v146', 'tools/_v146')), 'utf8'));
const censusPath = join(REPO, 'tools', '_v146_out', 'census.json');
const census = existsSync(censusPath) ? JSON.parse(readFileSync(censusPath, 'utf8')) : null;

const onDisk = (lang, bucket, file) => existsSync(join(DOCS, lang, 'api', bucket, file));

/* ------------------------------------------------- namespace -> bucket table */

const byRule = new Map();
for (const t of inv.types) {
  const k = t.dirRule;
  if (!byRule.has(k)) byRule.set(k, { rule: k, bucket: t.dir, types: 0, namespaces: new Set(), modules: new Set() });
  const e = byRule.get(k);
  e.types++;
  e.namespaces.add(t.namespace);
  e.modules.add(t.module);
}
const ruleRows = [...byRule.values()]
  .map((e) => ({
    rule: e.rule,
    bucket: e.bucket,
    types: e.types,
    namespaces: [...e.namespaces].sort(),
    sourceModules: [...e.modules].sort(),
  }))
  .sort((a, b) => b.types - a.types);

const bucketRows = Object.entries(inv.byBucket)
  .map(([bucket, v]) => {
    const list = inv.types.filter((t) => t.dir === bucket);
    const reserved = list.filter((t) => RF.owners && Object.values(RF.owners).flat().some((p) => p === 'zh/api/' + bucket + '/' + t.slug));
    return {
      bucket,
      types: v.count,
      kinds: v.kinds,
      rules: Object.keys(v.rules),
      namespaces: [...new Set(list.map((t) => t.namespace))].sort(),
      sourceModules: [...new Set(list.map((t) => t.module))].sort(),
      indexZh: onDisk('zh', bucket, '_index.md'),
      indexEn: onDisk('en', bucket, '_index.md'),
      leafPages: list.length,
      reservedTypes: reserved.map((t) => t.name),
    };
  })
  .sort((a, b) => b.types - a.types);

const spec = {
  version: 'v1.4.6',
  authority: { dirMap: 'tools/_dir-map-canonical.json', schemaVersion: CANON.schemaVersion, version: CANON.version },
  contentFreeze: { active: true, guard: 'tools/_v146_content_freeze.mjs', proof: 'tools/_v146_freeze_proof.mjs' },
  resolutionOrder: CANON.resolutionOrder,
  noiseGate: { excludeNamespaces: CANON.excludeNamespaces.length, excludeSuffixes: CANON.excludeSuffixes, sourceTypoNamespaces: CANON.sourceTypoNamespaces },
  stats: inv.stats,
  pageCounts: {
    pagedPublicTopLevelTypes: inv.stats.pagedPublicTopLevelTypes,
    canonicalBuckets: Object.keys(inv.byBucket).length,
    generatedByThisTool: run.generated,
    generatedFrozenNotWritten: run.frozenLeavesNotWritten + run.frozenIndexesNotWritten,
    reservedTypesSkipped: run.reservedTypesSkipped,
    reservedPathManifestPaths: run.reservedPathManifestPaths,
  },
  parityGaps: CANON.parityGaps,
  namespaceToBucket: ruleRows,
  buckets: bucketRows,
  census: census ? { totals: census.totals, byLang: census.byLang } : null,
};
writeGuarded(join(REPO, 'tools', '_v146_tree-spec.json'), JSON.stringify(spec, null, 1));

/* ------------------------------------------------------------------- md */

const L = [];
L.push('# v1.4.6 API 树规格（canonical 路由）');
L.push('');
L.push('**唯一权威：`tools/_dir-map-canonical.json`（schemaVersion ' + CANON.schemaVersion + '，version ' + CANON.version + '）。** 本文件不自行发明目录名，只把 artifact 的解析结果落到文档树上。');
L.push('');
L.push('> **content/ 已冻结**：页必须逐页手写，脚本不得产出 `content/**.md`。本工具线现已只读，写操作由 `tools/_v146_content_freeze.mjs` 硬拦截，证据见 `tools/_v146_out/freeze-proof.json`。');
L.push('');
L.push('## 0. 解析顺序（照抄 artifact，未提前 return）');
L.push('');
for (const r of CANON.resolutionOrder) L.push('1. ' + r);
L.push('');
L.push('伪码：');
L.push('');
L.push('```');
for (const p of CANON._resolutionPseudocode) L.push(p);
L.push('```');
L.push('');
L.push('## 1. 噪声门（读 artifact，不自维护清单）');
L.push('');
L.push('- `excludeNamespaces`：' + CANON.excludeNamespaces.length + ' 条前缀');
L.push('- `excludeSuffixes`：`' + CANON.excludeSuffixes.join('` / `') + '`');
L.push('- `sourceTypoNamespaces`：`' + CANON.sourceTypoNamespaces.join('` / `') + '`');
L.push('');
L.push('1.4.6 实测被 artifact 排除的类型数：**' + inv.stats.excludedByNamespaceRules + '**（按规则分组前 8）：');
L.push('');
L.push('| 排除规则 | 类型数 |');
L.push('| --- | --- |');
for (const [k, v] of Object.entries(inv.stats.excludedBreakdown).slice(0, 8)) L.push('| `' + k + '` | ' + v + ' |');
L.push('');
L.push('另有 ' + inv.stats.nonPublicTopLevel + ' 个非 public 顶层类型、' + inv.stats.syntheticSkipped + ' 个编译器合成类型、' + inv.stats.primitiveNamedSkipped + ' 个名字是 C# 基本类型的类型（委托抽取错位）被丢弃，均不建页。');
L.push('');
L.push('**未命中任何规则、落到 `defaultDir` 的命名空间**（`' + CANON.defaultDir + '`）：');
L.push('');
const unm = Object.entries(inv.stats.unmappedNamespaces);
if (!unm.length) {
  L.push('（无）');
} else {
  L.push('| 命名空间 | 类型数 |');
  L.push('| --- | --- |');
  for (const [ns, n] of unm) L.push('| `' + ns + '` | ' + n + ' |');
  L.push('');
  L.push('> 这是 artifact 本身的覆盖缺口，不是本工具的判断。**需要 Boss 决定是否补规则。**');
}
L.push('');
L.push('## 2. 命名空间 → 桶（附命中的规则 id）');
L.push('');
L.push('| 命中的规则 | 桶 | 类型数 | 命名空间数 | 命名空间 |');
L.push('| --- | --- | --- | --- | --- |');
for (const r of ruleRows) {
  const shown = r.namespaces.slice(0, 4).map((n) => '`' + n + '`').join(' ');
  L.push('| `' + r.rule + '` | `' + r.bucket + '` | ' + r.types + ' | ' + r.namespaces.length + ' | ' + shown + (r.namespaces.length > 4 ? ' …' : '') + ' |');
}
L.push('');
L.push('> `rule:<prefix>` 表示命中 `rules[]` 的最长前缀；`entryPointDirs.<TypeName>` 表示第 3 步按简单类型名覆写；`defaultDir` 表示前两步都没命中。');
L.push('');
L.push('**第 3 步覆写确实生效的证据**（Boss 预警的静默故障）：');
L.push('');
L.push('- step 2 前缀规则命中：' + inv.stats.step2RoutedTypes + ' 个类型');
L.push('- step 3 `entryPointDirs` 覆写：' + inv.stats.step3OverrideTypes + ' 个类型 —— `Mission` / `MissionState` / `MissionBehavior` / `Agent` / `Formation` → `mission`，`MBSubModuleBase` / `Module` → `core`');
L.push('- 实测 `mission` 桶 = ' + (inv.byBucket.mission ? inv.byBucket.mission.count : 0) + '，`core` 桶 = ' + (inv.byBucket.core ? inv.byBucket.core.count : 0) + '（artifact 预期 5 / 2）');
L.push('');
L.push('## 3. 桶清单（每个桶都有 zh/en `_index.md`）');
L.push('');
L.push('| 桶 | 类型数 | 命名空间数 | 主要命名空间 | `_index.md` zh/en | 桶内保留类型 |');
L.push('| --- | --- | --- | --- | --- | --- |');
for (const b of bucketRows) {
  const shown = b.namespaces.slice(0, 3).map((n) => '`' + n + '`').join(' ');
  L.push('| `' + b.bucket + '` | ' + b.types + ' | ' + b.namespaces.length + ' | ' + shown + (b.namespaces.length > 3 ? ' …' : '') + ' | ' + (b.indexZh && b.indexEn ? 'Y/Y' : '**缺**') + ' | ' + (b.reservedTypes.join('、') || '—') + ' |');
}
L.push('');
L.push('### 3.1 `mission` / `core` 是入口类 carve-out，不是重复路由 bug');
L.push('');
L.push('`mission` 只放 `Mission` / `MissionState` / `MissionBehavior` / `Agent` / `Formation` 五个 mod 高频入口，完整任务 API 在 `../mission-ext/`；`core` 只放 `MBSubModuleBase` / `Module` 两个加载入口，完整 Core API 在 `../core-extra/`。两个桶首页都写了这句话并与对端桶**双向互链**。这是 artifact `entryPointDirs` 的明确定义，后续 QA 不要「修」成 404。');
L.push('');
L.push('### 3.2 parity gap（直接引用 artifact 的 `parityGaps`，不另写散文版）');
L.push('');
L.push('| id | from | to | 页数 | 决定 |');
L.push('| --- | --- | --- | --- | --- |');
for (const g of CANON.parityGaps) L.push('| `' + g.id + '` | `' + g.from + '` | `' + g.to + '` | ' + g.pages + ' | ' + g.decision + ' |');
L.push('');
L.push('## 4. 链接层级（照抄 artifact `linkRules`，不硬编码自己那份）');
L.push('');
L.push('| 场景 | 写法 |');
L.push('| --- | --- |');
L.push('| 叶子 → 同桶兄弟 | `' + CANON.linkRules.leafToSibling + '` |');
L.push('| 叶子 → 跨桶 | `' + CANON.linkRules.leafToCrossBucket + '` |');
L.push('| 叶子 → 区块索引 | `' + CANON.linkRules.leafToSectionIndex + '` |');
L.push('| 桶 `_index` → 同桶叶子 | `' + CANON.linkRules.bucketIndexToLeaf + '` |');
L.push('| 桶 `_index` → 父索引 | `' + CANON.linkRules.bucketIndexToParentIndex + '` |');
L.push('| 桶 `_index` → 语言根 | `' + CANON.linkRules.bucketIndexToLangRoot + '` |');
L.push('| `api/_index` → 语言根 | `' + CANON.linkRules.apiIndexToLangRoot + '` |');
L.push('| 跨版本 | `' + CANON.linkRules.crossVersion + '` |');
L.push('');
L.push('**禁止**（artifact `linkRules.forbidden`）：');
L.push('');
for (const f of CANON.linkRules.forbidden) L.push('- ' + f);
L.push('');
L.push('`popToSiteRoot`：`' + CANON.linkRules.popToSiteRoot + '`');
L.push('');
L.push('## 5. 门禁');
L.push('');
L.push('| 门禁 | 含义 | 最近一次结果 |');
L.push('| --- | --- | --- |');
for (const n of run.gateNotes) L.push('| ' + n.split(' ')[0] + ' | ' + n.replace(/^G\d\s*/, '') + ' | ' + (inv.stats.gates.failures.length ? '**FAIL**' : 'PASS') + ' |');
L.push('');
L.push('## 6. content/ 冻结状态');
L.push('');
L.push('- 守卫：`tools/_v146_content_freeze.mjs`（`writeGuarded` / `mkdirGuarded` / `unlinkGuarded` / `rmdirGuarded` / `renameGuarded`，任何 `content/` 下的变更直接抛错）');
L.push('- 自检：`node tools/_v146_content_freeze.mjs` → 4 个 content/ 变更操作全部 BLOCKED，`tools/` 下写入 ALLOWED');
L.push('- 端到端证明：`node tools/_v146_freeze_proof.mjs` → 跑完 extract / stubs / treespec / census 四个工具后，`content/v1.4.6` 的 added / removed / changed 全部为 0');
L.push('- 绕过开关：`CONTENT_WRITE_ALLOW=1` 只用于本地考古，**禁止**用于产品运行与任何触碰 `content/**` 的提交');
L.push('');
L.push('### 6.1 生成器曾写 `content/` 的全部代码位置（现已全部改走守卫或被 FROZEN 短路）');
L.push('');
L.push('| 工具 | 位置 | 操作 | 现状 |');
L.push('| --- | --- | --- | --- |');
L.push('| `_v146_stubs.mjs` | reclaim 段 `unlinkGuarded` / `rmdirGuarded` | 删旧桶页 | 走守卫，且 `FROZEN` 时整个 reclaim 循环不执行 |');
L.push('| `_v146_stubs.mjs` | 叶子生成 `mkdirGuarded` + `writeGuarded` | 写类型页 | 走守卫，且 `FROZEN` 时 `continue` 跳过 |');
L.push('| `_v146_stubs.mjs` | 桶索引生成 `mkdirGuarded` + `writeGuarded` | 写 `_index.md` | 同上 |');
L.push('| `_v146_stubs.mjs` | api 落地页 `mkdirGuarded` + `writeGuarded` | 写 `api/_index.md` | 同上 |');
L.push('| `_v146_stubs.mjs` | run 报告 `writeGuarded(tools/_v146_stub-run.json)` | 写 `tools/` | 允许（不在 `content/`） |');
L.push('| `_v146_extract.mjs` | `writeGuarded(OUT_JSON)` | 写 `tools/_v146_inventory.json` | 允许 |');
L.push('| `_v146_treespec.mjs` | `writeGuarded(tools/_v146_tree-spec.{json,md})` | 写 `tools/` | 允许 |');
L.push('| `_v146_census.mjs` | `writeGuarded(tools/_v146_out/*)` | 写 `tools/` | 允许 |');
L.push('');
L.push('## 7. 手写 / 生成页对账');
L.push('');
if (!census) L.push('（未运行 `node tools/_v146_census.mjs`）');
else {
  L.push('| 语言 | 页面总数 | 手写深写 | 生成 | 其它 |');
  L.push('| --- | --- | --- | --- | --- |');
  for (const l of ['zh', 'en']) {
    const b = census.byLang[l];
    L.push('| ' + l + ' | ' + b.total + ' | ' + (b['handwritten-deep'] + b['handwritten-deep-with-generator-fingerprint']) + ' | ' + b.generated + ' | ' + b.other + ' |');
  }
  L.push('');
  L.push('判据见 `tools/_v146_out/census.md`：判据 A 只看生成器指纹字符串，判据 B 只看章节结构与真实 csharp 代码块，两套互不依赖，交叉统计在 `tools/_v146_out/census.json`。');
}
L.push('');
L.push('## 8. 复跑方式（冻结后）');
L.push('');
L.push('```bash');
L.push('cd C:/WorkSpace/Bannerlord/BannerlordCode.github.io');
L.push('node tools/_v146_content_freeze.mjs   # 守卫自检');
L.push('node tools/_v146_extract.mjs         # 扫描 1.4.6 源码 -> tools/_v146_inventory.json');
L.push('node tools/_v146_stubs.mjs           # 只读：只跑门禁，不写 content/');
L.push('node tools/_v146_treespec.mjs        # 刷新本文件');
L.push('node tools/_v146_census.mjs          # 手写/生成对账');
L.push('node tools/_v146_freeze_proof.mjs    # 端到端证明 content/ 未被改动');
L.push('AUDIT_MODE=url AUDIT_CONTENT_ROOT=content/v1.4.6 node tools/audit-links.mjs');
L.push('```');
L.push('');
mkdirGuarded(join(REPO, 'tools', '_v146_out'), { recursive: true });
writeGuarded(join(REPO, 'tools', '_v146_tree-spec.md'), L.join('\n'));
console.log('wrote tools/_v146_tree-spec.md and tools/_v146_tree-spec.json');
console.log('buckets:', bucketRows.length, '| types:', inv.stats.pagedPublicTopLevelTypes, '| rules used:', ruleRows.length);
