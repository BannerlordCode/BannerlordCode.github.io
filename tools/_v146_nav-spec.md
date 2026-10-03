# v1.4.6 树状导航补丁规格

机读版：`tools/_v146_nav-spec.json`（逐条 patch、route/edge 清单、pending 策略、check_result）
校验脚本：`tools/_v146_nav-check.mjs`（dir-map fail-closed + route 相对链接闸门）
作者：worker-10。**共享文件（`config.toml` / `templates/**` / `data/**` / `content/_index.md` / `content/versions/**`）我没有改，只交规格。**

---

## 0. 唯一权威：`tools/_dir-map-canonical.json`（schemaVersion 由它自己的 `_parseContract` 声明）

目录映射、噪声排除、入口类覆写、链接层级、parity gap **全部只从这个文件读**，本规格不手抄映射表。

- 我的页面引用的 19 个桶全部由该 artifact 现算产生：checker 启动时断言 `schemaVersion` 等于该 artifact 自己在 `_parseContract` 里声明的值（**不写死数字** —— 写死的副本正是 v3→v5 那次 bump 让整条导航门禁 fail-closed 停摆的原因，见 `tools/_dir_map_contract.mjs`；本 spec 的 `dirMapSchemaVersion` 字段已降级为 advisory，`null` = 不钉版本），并断言 `rules` / `defaultDir` / `entryPointDirs` / `linkRules` / `excludeNamespaces` / `excludeSuffixes` / `resolutionOrder` 七个键都在，**任一形状不认识就 exit 2，不静默降级**。
- 本轮我在自己页面里清掉的作废桶名（旧 §1 slug，已作废）：`library/`、`core/`(作为 Core 的桶)、`objectsystem/`、`screensystem/`、`savesystem/`、`engine-gauntletui/`、`inputsystem/`、`dotnet/`、`campaignsystem/`、`campaignsystem-viewmodelcollection/`、`mountandblade/`、`mountandblade-view/`、`sandbox-gauntletui/`、`twodimension/`、`gauntletui-data/`。
- `TextObject` 归 **`localization/`**（不是 `core-extra/`）。我的页面只在 `TaleWorlds.Localization` 行链 `api/localization/`，没有任何地方把 `TextObject` 说成在 `core-extra`。
- `ModuleManager` **类型在任何版本都不存在**，永远不建这个页面。`modulemanager/` 桶装的是该命名空间里**其它**类型（`ModuleInfo`、`SubModuleInfo`、`ModuleHelper`、`ModuleCategory`、`ModuleType`、`DependedModule`、`Extensions`、`IPlatformModuleExtension`）——我的 module-map 就是这么写的。

### ⚠️ `mission` / `core` 是有意的入口类 carve-out 桶，不是重复路由 bug

7 条覆写只剩这 7 条真覆写：`Mission` / `MissionState` / `MissionBehavior` / `Agent` / `Formation` → `mission`；`MBSubModuleBase` / `Module` → `core`。

**这两个桶故意很小**：modder 打开站点时最先找的就是「我要继承哪个基类」，把 7 个入口类型单独成桶，点两次就能到；完整 API 仍在 `../mission-ext/` 与 `../core-extra/`。

- 每个类型只有一个页面（one type = one path），**不存在同一类型两份页面**。
- **后续 QA 不要「修」**：把它们挪回 `mission-ext/` / `core-extra/` 会让这两个桶的唯一入口消失，制造 404。
- 桶 `_index.md` 顶部必须写明「本桶只放 mod 入口类，完整 API 在 `../mission-ext/`」，并**双向互链**（桶 → 完整 API 区，完整 API 区 → 桶）。

### `gameplay` 桶不建

1.4.5 的 `gameplay/` 桶语义混乱（同时装着 SandBox、StoryMode.* 和裸 `TaleWorlds.MountAndBlade` 类型），没有任何命名空间规则能复现它，复刻等于搬缺陷。代价是那 19 个 URL 在 v1.4.6 没有对应，**直接引用 artifact 的 `parityGaps` 结构化数据**，不要另写散文版。

---

## 1. 导航真相（Boss 实测；AGENTS.md 已过时，别引用）

sidebar 是 data-driven：`templates/macros/sidebar.html` 通过 `load_data(path="data/navigation.json")` + `load_data(path="data/section-tree.json")`，用 `nav.routes` / `nav.groups` / `nav.meta.versions` 渲染，**没有任何硬编码 v1.3.15 菜单，也没有硬编码 api 桶名**。

| 界面元素 | 生成者 | v1.4.6 要不要改 |
| --- | --- | --- |
| 版本下拉 | `templates/partials/topnav.html` 遍历 `nav.meta.versions`，逐个检查 `nav.routes['/<v>/<lang>/']`；跳转目标来自 `data/relkey_map.json` | **模板不改** |
| 侧边栏 | `templates/macros/sidebar.html`：只渲染 `node.parent == /<v>/<lang>/` **且** `node.group` 命中 `nav.groups` 的 route；子项来自 `node.children` 与 `section-tree.byRoute[...].subsections` | **模板不改** |
| 面包屑 | `templates/macros/breadcrumb.html` 用 Zola `page.ancestors` + `get_section()` | **模板不改** |
| 父级 / prev / next | `templates/macros/page-navigation.html` 读 Zola `parent_section.pages` | **模板不改**，页面存在即成立 |
| 结构数据 | `data/section-tree.json` ← `tools/generate-section-tree.mjs`；`data/navigation.json` routes ← `tools/_regen_nav.mjs`（保留旧 `label`/`group`）；`data/relkey_map.json` ← `tools/generate-relkey-map.mjs`（`VERSIONS` 硬编码）；`data/page-navigation.json` ← `tools/generate-page-navigation.mjs` | 全部**重新生成，不手写** |

---

## 2. 补丁清单（应用顺序 P1 → P2 → P0 → P3 → P4 → P5）

### P0 · `data/navigation.json` → `meta.versions`（**这就是开关**）

```diff
- "versions": ["v1.3.15", "v1.3.0", "v1.4.5"]
+ "versions": ["v1.3.15", "v1.3.0", "v1.4.5", "v1.4.6"]
```

显式标为**开关**：在这一行写入 v1.4.6 之前，顶栏下拉永远不会渲染 v1.4.6 条目，`templates/macros/sidebar.html` 也不会把 `/v1.4.6/<lang>/` 当语言根，该版本所有 URL 都掉进扁平的 `Site Navigation` 兜底。**其它任何补丁都替代不了这一行。**

### P1 · `data/section-tree.json` → 重新生成

```bash
node tools/generate-section-tree.mjs
```

生成后应新增：`/v1.4.6/zh/`、`/v1.4.6/en/`、`/v1.4.6/{zh,en}/api/`、`/v1.4.6/{zh,en}/architecture/`。未生成前 `node tools/audit-navigation.mjs` 会以 `missing section route /v1.4.6/...` 失败。**不要手改这个文件。**

### P2 · `data/navigation.json` → 先重新生成，再补 `group` / `label`

```bash
node tools/_regen_nav.mjs
```

**(a) 该版本 route 条目的命名规则**（照现有版本条目的 key 形状写）：

- key 形状：`"/<version>/<lang>/<section>/"`，**每个分区一条，不给叶子页建条目**。
  现有 464 条 route **全部是分区根**（例：`/v1.3.15/zh/api/campaign/`），`/v1.4.5/zh/api/campaign/` 的 `children` 是 `0`，而它下面 40+ 个类页是靠 `section-tree.byRoute[...].subsections` 自动派生的 → **叶子条目一律不建**，否则与自动派生重复。
- 字段：`{ label: {zh, en}, group, collapsed, order, parent, children }`
- `parent`：去掉最后一段 → `/v1.4.6/zh/architecture/` 的 parent 是 `/v1.4.6/zh/`（`_regen_nav.mjs` 自动算）。
- `children`：section tree 的 subsections（`_regen_nav.mjs` 自动填）。
- `label`：zh/en 必须都有（版本下拉读 `label[lang]`）。照 v1.4.5 的写法：三个根用 `{zh:"Bannerlord v1.4.5", en:"Bannerlord v1.4.5"}`，分区用 `{zh:"API 参考", en:"API Reference"}` / `{zh:"架构总览", en:"Architecture"}`。

**(b) 为什么 `group` 必须手补**：`_regen_nav.mjs` 里是 `group: ex?.group ?? null`，新 route 走 `null`；而 sidebar 只渲染 `group` 命中的 route → **症状：重新生成完 v1.4.6 侧边栏一个字都不显示**（看着像模板坏了，其实模板没问题）。

```js
const setGroup = (route, group, label) => {
  const node = nav.routes[route];
  if (!node) return console.warn('missing route', route);
  node.group = group;
  if (label) node.label = label;
};
setGroup('/v1.4.6/zh/', 'start', { zh: 'Bannerlord v1.4.6', en: 'Bannerlord v1.4.6' });
setGroup('/v1.4.6/en/', 'start', { zh: 'Bannerlord v1.4.6', en: 'Bannerlord v1.4.6' });
for (const lang of ['zh', 'en']) {
  setGroup(`/v1.4.6/${lang}/api/`, 'api', { zh: 'API 参考', en: 'API Reference' });
  setGroup(`/v1.4.6/${lang}/architecture/`, 'architecture', { zh: '架构总览', en: 'Architecture' });
  // 只有在确实要建这些分区时才补，不要凭空加 route
  setGroup(`/v1.4.6/${lang}/guide/`, 'guide', { zh: '入门指南', en: 'Getting Started Guide' });
  setGroup(`/v1.4.6/${lang}/native/`, 'native', { zh: '原生接口', en: 'Native Reference' });
  setGroup(`/v1.4.6/${lang}/xml-reference/`, 'xml', { zh: 'XML 参考', en: 'XML Reference' });
}
```

叶子与桶路由的 `group` 保持 `null` 即可（v1.4.5 有 119 条 route 就是 `null`，它们通过父节点 `children` 渲染）。

### P3 · `tools/generate-relkey-map.mjs` → 加 root

```diff
- const VERSIONS = ['v1.3.15', 'v1.3.0', 'v1.4.5'];
+ const VERSIONS = ['v1.3.15', 'v1.3.0', 'v1.4.5', 'v1.4.6'];
```

```bash
node tools/generate-relkey-map.mjs
```

不改这一行，跨版本切换永远回落到语言根 → **「点进类页后跳过去回不来」的第二个成因**。

### P4 · `content/_index.md` → 版本表加一行

```markdown
| **v1.4.6** | 最新源码快照（平铺模块布局）/ Newest source snapshot (flat module layout) | [查看文档 / View Docs](./v1.4.6/zh/) |
```

然后 `node tools/generate-section-indexes.mjs`（下面的 SECTION INDEX 区块是机器生成的）。

### P5 · `data/page-navigation.json` → 重新生成

```bash
node tools/generate-page-navigation.mjs
```

叶子页的 Parent/Previous/Next/Related 数据，**不要手写条目**。

### P6–P11 · 不需要改（如实写明，避免重复劳动）

| 文件 | 结论 |
| --- | --- |
| `templates/macros/sidebar.html` | **不改**。data-driven，从 `nav.meta.versions` 推导语言根、从 `nav.groups` 渲染分组；P0+P2 之后与 v1.4.5 行为一致。 |
| `templates/partials/sidebar.html` | **不改**。纯 dispatcher。 |
| `templates/partials/topnav.html` | **不改**。唯一硬编码版本的是 v1.3.15 的 native-source 下拉项（有意为之）；其余下拉全走 `nav.meta.versions`。 |
| `templates/macros/breadcrumb.html` | **不改**。Zola ancestors 驱动，祖先层都有真实 `_index.md` 即成立。 |
| `templates/macros/page-navigation.html` | **不改**。父级与 prev/next 渲染期算，天然双向。**不要往正文手写 prev/next。** |
| `config.toml` | **实测无任何 version 引用**（只有 base_url/title/description、search/markdown/slugify/link_checker 与空 taxonomies）。`[slugify] paths = "off"` 已保住 `api/<bucket>/` 目录名 → **无需改动**。 |

### P12 ·（可选）`tools/class-version-diff.mjs` 支持 1.4.6

`ROOTS` 硬编码 1.3.0/1.3.15/1.4.5；另注意本机 `bannerlord-1.4.5/` **没有 C# 源码**，该工具对 1.4.5 返回 not found——应改用 `bannerlord-1.3.15/` 比对并写「1.4.5 未核实」，不要伪装成一致。

---

## 3. 双向可达层级表（验收依据）

链接按 **route 相对**解析：页面 route 自带尾斜杠，一个 `..` 只弹一层。`fs.existsSync` 不是有效检查——错层级的链接作为文件是真实存在的。

| 层级 | route | 写法 |
| --- | --- | --- |
| 叶子（api 桶内类页） | `/v1.4.6/zh/api/<bucket>/<Type>/` | 同桶兄弟 `../<OtherType>`；跨桶 `../../<other-bucket>/<OtherType>`；桶索引 `../` |
| 桶 `_index.md` | `/v1.4.6/zh/api/<bucket>/` | 本桶叶子 `./<Type>`；父索引 `../`；语言根 `../../` |
| `api/_index.md` | `/v1.4.6/zh/api/` | 语言根 `../` |
| 语言根 `_index.md` | `/v1.4.6/zh/` | 架构分区 `architecture/`；api 分区 `api/`；另一语言 `../en/`；站点根 `../../` |
| 架构分区 `_index.md` | `/v1.4.6/zh/architecture/` | 本分区子页 `./<page>`；语言根 `../../`；api 分区 `../api/`；另一语言 `../../en/architecture/` |
| 架构叶子页 | `/v1.4.6/zh/architecture/<page>/` | 同级 `../<page>`；分区索引 `../`；语言根 `../../`；api 叶子 `../../api/<bucket>/<Type>`；另一语言 `../../../en/architecture/<page>/`；站点根 `../../../` |
| 跨版本（叶子，4 段） | — | `../../../../v1.4.5/zh/architecture/<page>/`（**弹的层数 == 自身 route 段数**，语言段属于**目标树**） |
| 跨版本（分区索引，3 段） | — | `../../../v1.4.5/zh/architecture/` |
| 站点 `content/_index.md` | `/` | `./v1.4.6/zh/` |

**禁止**：`content/` 泄漏进 href；同版本链接里出现版本段；api 叶子页用 `../<bucket>/<Name>`（少一层）；叶子页用 `./<Name>`；`../` 超过自身 route 段数；自引用；链到越权文件 `content/v1.4.6/_index.md`。

**关于锚定 grep 的适用范围**：`grep -nE '\]\(\.\./[a-z-]+/[A-Za-z]'` 是为 **api 叶子页** 定义的（那里单层 `../<bucket>/<Name>` 少一层）。架构页合法使用 `../../api/<bucket>/<Name>`（brief §2），所以这条 grep **必须限定在 `content/v1.4.6/*/*/api/**`**，不能跑在架构页上，否则全是假阳性。

---

## 4. 越权产物（请 lead 上报 Boss 处置）

`content/v1.4.6/_index.md`（**无语言后缀**）在本工作树中存在，但不在任何 worker 的授权范围内（我的授权是 `content/v1.4.6/{zh,en}/_index.md` 两个语言根）。后果是 route `/v1.4.6/` 存在但语言归属不清。worker-10 的处置：首次回报后**不再改动**它，并已把自己页面里所有指向它的链接**全部移除**（语言根页面改链 `../en/` 与站点根 `../../`）。

---

## 5. 验收

```bash
cd C:/WorkSpace/Bannerlord/BannerlordCode.github.io
node tools/_v146_nav-check.mjs            # dir-map fail-closed + route 相对链接 + 反向规则
node tools/generate-section-tree.mjs --check
node tools/audit-navigation.mjs
node tools/generate-page-navigation.mjs
AUDIT_MODE=url AUDIT_CONTENT_ROOT=content/v1.4.6 node tools/audit-links.mjs
```

`tools/_v146_nav-check.mjs` 的判定线：`ROUTES_MISSING=0`、`EDGES_MISSING=0`、`OWNED_LINKS_BROKEN=0`、`LINK_RULE_VIOLATIONS=0`；`OWNED_LINKS_PENDING` 允许 > 0（指向并行 api 批次），交接清单必须列出，api 收敛后应归 0。

交付时实测（我的 10 个页面 + spec/checker）：

```
dir map OK: schemaVersion=5 rules=34 buckets=19 overrides=7
ROUTES_MISSING=0  EDGES_MISSING=0
OWNED_LINKS_OK=238  OWNED_LINKS_PENDING=0  OWNED_LINKS_BROKEN=0
LINK_RULE_VIOLATIONS=0
API_BUCKETS_REFERENCED=achievementsystem,activitysystem,campaign,campaign-ext,core,
core-extra,custombattle,engine,gui,localization,mission,mission-ext,modulemanager,
network,sandbox,save-system,storymode,system,viewmodel

AUDIT_MODE=url AUDIT_CONTENT_ROOT=content/v1.4.6 node tools/audit-links.mjs
  FILES=12435  TOTAL_LINKS=104533
  BROKEN_LINKS=130  RESOLVE_NEITHER=128  FILES_WITH_BROKEN=5
  → 我的页面 0 条；130 条全在 api 批次（zh|en/api/_index.md 各 31 条仍指向作废 §1 桶名，
    campaign 桶 3 个类页的同桶兄弟链接待其页面生成）
```

---

## 6. 回滚

P0/P2 是往 `navigation.json` 加条目，P1 是重新生成 section-tree：回滚 = 删掉 `/v1.4.6/` 相关条目、把 `meta.versions` 改回三项，再跑一次 P1+P2 的生成命令。P3/P4/P5 各改一行常量或一行表格，重跑对应命令即回滚。`content/v1.4.6/**` 与其它版本目录无交集，不会牵连 v1.3.15 / v1.4.5。