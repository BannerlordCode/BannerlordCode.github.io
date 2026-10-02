# v1.5.3 树状导航规格 / Tree Navigation Spec

> **状态：提案。我没有改动任何共享文件。** 本文件与 `tools/_v153_nav-spec.json` 是给 lead/Boss 裁决的补丁规格。
> 机器可读版本在 `tools/_v153_nav-spec.json`；本文件是人读的同一份东西。

---

## 0. 最重要的结论：sidebar 已经不是硬编码的

任务 brief 里「v1.3.15 菜单是硬编码的」这个前提**已过期**。实测：

`templates/macros/sidebar.html` 第 7–8 行

```tera
{%- set nav = load_data(path="data/navigation.json") -%}
{%- set tree = load_data(path="data/section-tree.json") -%}
```

整个宏靠 `nav.routes` / `nav.groups` / `nav.meta.versions` 渲染，**文件里没有任何版本号或桶名**。
`templates/partials/sidebar.html` 只 import 这个宏并从 `page.lang` 取语言。

所以加一个新版本**不需要改任何 Tera 文件**。这是本规格与 brief 最大的出入，已如实记录（补丁项 P9/P10）。

---

## 1. 补丁清单（10 条）

按落地必要性排序。「插入位置」是相对该文件的锚点，「要加的内容」可直接粘贴。

| # | 文件 | 插入位置 | 要加的确切内容 | 必要性 |
|---|---|---|---|---|
| **P1** | `data/navigation.json` | `meta.versions` 数组 | `"v1.5.3"` | **CRITICAL — 这是整个版本的开关** |
| **P2** | `data/navigation.json` | `routes["/"].children` | `"/v1.5.3/"` | CRITICAL |
| **P3** | `data/navigation.json` | `routes` 新增条目 | 见 §3 的 `<routesBlock>` | CRITICAL |
| **P4** | `data/section-tree.json` | `byRoute` 新增条目 | 见 §3 的 `<sectionTreeBlock>` | HIGH |
| **P5** | `content/_index.md` | 「选择版本」表格 + SECTION INDEX 列表 | 见 §3 | MEDIUM |
| **P6** | `templates/partials/topnav.html` | 硬编码版本链接列表 | `<a href="/v1.5.3/">v1.5.3</a>` | HIGH |
| **P7** | `data/page-navigation.json` | 整个文件 | **重跑，不要手写**：`node tools/generate-page-navigation.mjs` | MEDIUM |
| **P8** | `config.toml` | — | **无需改动**（实测零 version 引用，且根本没有 `[sections]` 表） | NONE |
| **P9** | `templates/macros/sidebar.html` | — | **无需改动**（data-driven，见 §0） | NONE |
| **P10** | `templates/partials/sidebar.html` | — | **无需改动**；只需核对 `content/v1.5.3/**` 的 frontmatter 是否设了 `lang`，否则 zh 侧会用 `config.default_language`（`en`）渲染英文标签 | NONE |

### P1 为什么是开关

`templates/macros/sidebar.html` 里有：

```tera
{%- if nav.meta.versions is containing(current_version) -%}
  {%- set root_key = "/" ~ current_version ~ "/" ~ current_lang ~ "/" -%}
{%- else -%}
  {%- set root_key = "" -%}
{%- endif -%}
```

`meta.versions` 里没有 `v1.5.3` → `root_key = ""` → 落到扁平的「Site Navigation」兜底列表，
**整个版本拿不到树状侧边栏**。这一个数组元素决定 v1.5.3 是不是一等公民。

### P6 为什么单独列

`templates/partials/topnav.html` 是**唯一硬编码版本的模板**。它不走 navigation.json，
所以 P1 做完顶部导航仍然只有 v1.3.15。

---

## 2. 桶（目录）规格

### 2.1 桶不是拍脑袋定的

`tools/_dir-map-canonical.json` 的 38 条 `rules[]` + `entryPointDirs[]`，用**最长前缀优先**匹配
1.5.3 真实的 **621 个命名空间**，得到 20 个桶。`boardgames` 有规则但 0 命中，故为空桶、未建目录。

**已验证**：worker-3 落盘的 `content/v1.5.3/zh/api/` **正好是这 19 个桶**（boardgames 正确地没建）。
规则排序也是对的 —— `TaleWorlds.MountAndBlade.CustomBattle`（custombattle）在
`TaleWorlds.MountAndBlade`（mission-ext）**之前**，首次命中即最长前缀。

### 2.2 桶 → sidebar 位置 / 组 / 标签

| slug | 组 | 组标签 | order | 标签 (zh) | 标签 (en) | 实际页数 |
|---|---|---|---|---|---|---|
| `core` | core | 核心与基础 | 0 | 模块入口 | Module Entry | 2 |
| `core-extra` | core | ″ | 1 | 核心扩展 | Core Extra | 570 |
| `localization` | core | ″ | 2 | 本地化 | Localization | 20 |
| `system` | core | ″ | 3 | 系统 | System | 19 |
| `modulemanager` | core | ″ | 4 | 模块管理 | Module Manager | 9 |
| `activitysystem` | core | ″ | 5 | 活动系统 | Activity System | 6 |
| `achievementsystem` | core | ″ | 6 | 成就系统 | Achievement System | 4 |
| `network` | core | ″ | 7 | 网络 | Network | 32 |
| `campaign` | campaign | 战役 | 10 | 战役核心 | Campaign Core | 706 |
| `campaign-ext` | campaign | ″ | 11 | 战役扩展 | Campaign Ext | 771 |
| `mission` | mission | 任务 | 20 | 任务 | Mission | 5 |
| `mission-ext` | mission | ″ | 21 | 任务扩展 | Mission Ext | 1 762 |
| `gui` | ui | 界面 | 30 | 界面 | GUI | 299 |
| `engine` | ui | ″ | 31 | 引擎 | Engine | 158 |
| `viewmodel` | ui | ″ | 32 | 视图模型 | ViewModel | 653 |
| `save-system` | foundation | 持久化 | 40 | 存档系统 | Save System | 56 |
| `sandbox` | gameplay | 玩法模块 | 50 | 沙盒 | SandBox | 669 |
| `storymode` | gameplay | ″ | 51 | 剧情模式 | StoryMode | 189 |
| `custombattle` | gameplay | ″ | 52 | 自定义战斗 | Custom Battle | 40 |

排序理由：按依赖分层（地基 → 战役 → 任务 → UI），和现有 v1.3.15 / v1.4.5 侧边栏顺序一致，
老读者能在同一个位置找到新版本的对应物。

### 2.3 双向表：`slug ← 源命名空间 ← 规则 id/前缀 ← 1.4.5 旧目录`

| api 桶 slug | ← 源命名空间 / 模块 | ← canonical 规则 | 1.4.5 树对应目录 |
|---|---|---|---|
| `core` | （仅门面）`MBSubModuleBase`、`Module` | `entryPointDirs.core` | `core` |
| `core-extra` | `TaleWorlds.Core` / `.DotNet` / `.Library` / `.LinQuick` / `.Starter` | 16, 27, 29, 32, 33, 36 | `core-extra` |
| `localization` | `TaleWorlds.Localization` | 19 | `localization` |
| `system` | `TaleWorlds.InputSystem` | 23, 35 | `system` |
| `modulemanager` | `TaleWorlds.ModuleManager` | 17 | （1.4.5 无此目录） |
| `activitysystem` | `TaleWorlds.ActivitySystem` | 15 | （1.4.5 无） |
| `achievementsystem` | `TaleWorlds.AchievementSystem` | 13 | （1.4.5 无） |
| `network` | `TaleWorlds.Network` | 31 | （1.4.5 无） |
| `campaign` | `TaleWorlds.CampaignSystem`（**仅根命名空间**） | 16 | `campaign` |
| `campaign-ext` | `TaleWorlds.CampaignSystem.{CampaignBehaviors,ComponentInterfaces,Conversation,GameComponents,Issues,SandBox}` + `TaleWorlds.ObjectSystem` | 1, 2, 4, 5, 6, 7, 10, 11, 20 | `campaign-ext` |
| `mission` | （仅门面）`Mission`、`MissionState`、`MissionBehavior`、`Agent`、`Formation` | `entryPointDirs.mission` | `mission` |
| `mission-ext` | `TaleWorlds.MountAndBlade`、`TaleWorlds.Mission` | 18, 30 | `mission-ext` |
| `gui` | `TaleWorlds.ScreenSystem` / `.GauntletUI` / `.TwoDimension` / `.Engine.GauntletUI` | 14, 21, 22, 25 | `gui` + `campaign-ext`（`ScreenBase`/`ScreenLayer` 重复） |
| `engine` | `TaleWorlds.Engine` / `.Engine.InputSystem` / `TaleWorlds.Diamond` | 12, 28, 34 | `engine` |
| `viewmodel` | 三个 `*ViewModelCollection` | 3, 4, 9 | `viewmodel` |
| `save-system` | `TaleWorlds.SaveSystem` | 26 | `save-system` |
| `sandbox` | `SandBox` | 38 | `gameplay/sandbox` |
| `storymode` | `StoryMode` | 37 | `gameplay/storymode` |
| `custombattle` | `TaleWorlds.MountAndBlade.CustomBattle` | 8 | （1.4.5 无） |
| `boardgames` | `TaleWorlds.BoardGames` | 24 | （1.4.5 无）**1.5.3 为空，未建目录** |

> 第 4 列只是**给人看的对照**，不是生成规则。1.4.5 树本身是脏的（2 199 个类型名跨桶重复、
> 171/513 命名空间跨桶分裂），照抄会得到错误归属。1.5.3 只按 canonical 表分桶。

### 2.4 `entryPointDirs` 的当前语义（2026-10-02 复核）

Boss 已把 `entryPointDirs` 修成干净的 `类型名 -> dir` 字符串映射，共 **7 条真覆写**，
按**精确、区分大小写的简单类型名**在最长前缀解析**之后**应用：

- `Mission` / `MissionState` / `MissionBehavior` / `Agent` / `Formation` → `mission`
- `MBSubModuleBase` / `Module` → `core`

**消费方必须先滤掉 4 个下划线开头的说明键**（`_match` / `_why` / `_parityGaps` / `_noModuleManager`），
否则会把它们误当成覆写。7 条已逐条复核，全部落在声明的桶里。

### 2.5 四个最容易踩的坑（已实测确认）

1. `TaleWorlds.ObjectSystem` → **`campaign-ext`**，没有 `objectsystem` 目录。
2. `TaleWorlds.ScreenSystem` → **`gui`**，没有 `screensystem` 目录。
3. `TaleWorlds.MountAndBlade.CustomBattle` 依赖**最长前缀优先**才落到 `custombattle`；
   若改回首次命中，它会被 `TaleWorlds.MountAndBlade` 吞进 `mission-ext`。
4. **`TextObject` 在 `localization`，不在 `core-extra`。** 命名空间是 `TaleWorlds.Localization`，
   规则 19 直接判给 `localization`，没有任何覆写碰它。
   （2026-10-02 更正：本规格早前版本按一份**过期的** `entryPointDirs` 写成 core-extra；
   canonical 表的 `_why` 明确写着 `TextObject->localization (NOT core-extra)`。）
   顺带：`MBDebug` 与 `GauntletLayer` 在 **`engine`**，`GameModels` 在 **`campaign`**。

### 2.6 carve-out 桶（`mission` / `core`）为什么这么小

这两个桶**只放 mod 门面类**，是「预期布局、不是重复路由」。

- v1.4.5 的 `mission/` 有 78 页，其中 **52 页是裸 `TaleWorlds.MountAndBlade` 的手工清单**，
  命名空间规则复刻不出来。**这正是本桶故意小的原因 —— 是纠正，不是缺失。**
- 1.4.5 的 `core/Game.md` 在 1.5.3 按规则移到了 `core-extra/`，这是唯一的 core 归属变化。

需要出现在桶 `_index.md` 顶部、并与父桶**双向互链**的说明文字（zh 版）：

```markdown
> mod 入口类 [Mission](../mission/Mission)、[Agent](../mission/Agent)、[Formation](../mission/Formation)
> 被单独抽到 Mission 桶，**预期布局、非重复路由**，一个类型只落盘一次。完整战斗 API 在 [Mission-Ext](../mission-ext/)。
```

```markdown
> **完整 API 在 [Core-Extra](../core-extra/)**：Game、GameStateManager、GameManagerBase、TextObject、
> ViewModel 等运行时基础类型都在那边。本桶只放模块加载入口，**预期布局、不是重复路由**。
```

**交付状态**：worker-3 已在 zh 侧落盘并带双向链接（已验证）；en 侧待 worker-4 镜像。

---

## 3. 可直接粘贴的补丁内容

### `<routesBlock>` — 加进 `data/navigation.json` 的 `routes`

命名规则照现有版本：`/v1.5.3/{lang}/`、`/v1.5.3/{lang}/api/`、`/v1.5.3/{lang}/api/<slug>/`。
每个 route 对象必须带齐 `label{zh,en}` / `group` / `collapsed` / `order` / `parent` / `children`。

```json
"/v1.5.3/": {
  "label": { "zh": "Bannerlord v1.5.3 文档", "en": "Bannerlord v1.5.3 Documentation" },
  "group": "start", "collapsed": false, "order": 4, "parent": "/",
  "children": ["/v1.5.3/en/", "/v1.5.3/zh/"]
},
"/v1.5.3/zh/": {
  "label": { "zh": "Bannerlord v1.5.3 文档", "en": "Bannerlord v1.5.3 Documentation" },
  "group": "start", "collapsed": false, "order": 0, "parent": "/v1.5.3/",
  "children": ["/v1.5.3/zh/api/", "/v1.5.3/zh/architecture/"]
},
"/v1.5.3/zh/api/": {
  "label": { "zh": "API 参考", "en": "API Reference" },
  "group": "api", "collapsed": false, "order": 2, "parent": "/v1.5.3/zh/",
  "children": [
    "/v1.5.3/zh/api/campaign/", "/v1.5.3/zh/api/campaign-ext/", "/v1.5.3/zh/api/mission/",
    "/v1.5.3/zh/api/mission-ext/", "/v1.5.3/zh/api/gui/", "/v1.5.3/zh/api/viewmodel/",
    "/v1.5.3/zh/api/engine/", "/v1.5.3/zh/api/core/", "/v1.5.3/zh/api/core-extra/",
    "/v1.5.3/zh/api/save-system/", "/v1.5.3/zh/api/localization/", "/v1.5.3/zh/api/system/",
    "/v1.5.3/zh/api/sandbox/", "/v1.5.3/zh/api/storymode/", "/v1.5.3/zh/api/custombattle/",
    "/v1.5.3/zh/api/network/", "/v1.5.3/zh/api/activitysystem/", "/v1.5.3/zh/api/achievementsystem/",
    "/v1.5.3/zh/api/modulemanager/"
  ]
},
"/v1.5.3/zh/architecture/": {
  "label": { "zh": "架构 (v1.5.3)", "en": "Architecture (v1.5.3)" },
  "group": "architecture", "collapsed": false, "order": 1, "parent": "/v1.5.3/zh/",
  "children": []
}
```

每个 `/v1.5.3/{lang}/api/<slug>/` 条目照 §2.2 的组/order/标签，`children: []`
（叶子由 section-tree 的 `subsections` 提供）。`/v1.5.3/en/**` 同构镜像一份。

**叶子页要不要单独条目？不要。** 照现有版本惯例：叶子由 `data/section-tree.json` 的
`byRoute[<桶>].subsections` + `pages` 数量驱动，sidebar 宏会自动渲染。自创叶子条目会立刻过期。

### `<sectionTreeBlock>` — 加进 `data/section-tree.json` 的 `byRoute`

先试 `node tools/generate-section-tree.mjs` 自动发现；不行就手加：

```json
"/v1.5.3/":        { "title": "Bannerlord v1.5.3 文档 / Documentation", "weight": null, "pages": 0,
                    "subsections": ["/v1.5.3/en/", "/v1.5.3/zh/"] },
"/v1.5.3/zh/":     { "title": "Bannerlord v1.5.3 文档", "weight": null, "pages": 0,
                    "subsections": ["/v1.5.3/zh/api/", "/v1.5.3/zh/architecture/"] },
"/v1.5.3/zh/api/": { "title": "API 参考：v1.5.3", "weight": null, "pages": 0,
                    "subsections": ["/v1.5.3/zh/api/campaign/", "…其余 18 个桶…"] }
```

### P5 — `content/_index.md`

「选择版本」表格加一行：

```markdown
| **v1.5.3** | 最新 / Newest | [查看文档 / View Docs](./v1.5.3/) |
```

并在 `<!-- BEGIN SECTION INDEX -->` 的站点栏目列表加：

```markdown
- [Bannerlord v1.5.3 文档 / Bannerlord v1.5.3 Documentation](./v1.5.3/)
```

---

## 4. 双向可达层级表（验收依据）

**核心规则**：`tools/audit-links.mjs` 把**每个页面 route 当作一个目录**。所以：

- **section 索引页**（`_index.md`）的 route 目录**就是**桶目录本身 → 子页用 `./Type`
- **叶子页**的 route 目录是 `.../Type/` → 同桶兄弟用 `../Type`，回桶用 `../`

| 层级 | 文件 | route | ↑ 上行 | ↓ 下行 | ↔ 同级前后 |
|---|---|---|---|---|---|
| **L4 叶子类页** | `content/v1.5.3/{lang}/api/<slug>/<Type>.md` | `/v1.5.3/{lang}/api/<slug>/<Type>/` | `[<slug> 目录](../)` | 无 | prev `[← <Prev>](../<Prev>)`、next `[<Next> →](../<Next>)`，**仅同桶**；首/末项**整条省略**，不要留空锚点 |
| **L3 桶索引** | `content/v1.5.3/{lang}/api/<slug>/_index.md` | `/v1.5.3/{lang}/api/<slug>/` | `[API 参考](../)` | 每个叶子 `[<Type>](./<Type>)` ← **必须是 `./`** | prev/next 桶 `[← <PrevBucket>](../<PrevBucket>/)`、`[<NextBucket> →](../<NextBucket>/)`，按 §2.2 order |
| **L2 API 索引** | `content/v1.5.3/{lang}/api/_index.md` | `/v1.5.3/{lang}/api/` | `[v1.5.3 首页](../)` | 每桶 `[<slug>](./<slug>/)` ← **必须是 `./`** | 横向见 L1 |
| **L1 版本首页** | `content/v1.5.3/{lang}/_index.md` | `/v1.5.3/{lang}/` | `[站点首页](../../)`、另一语言 `[../../en/]` | `[API 参考](./api/)`、`[架构](./architecture/)` | prev 版本 `[← v1.4.5](../../v1.4.5/)`；**v1.5.3 是最新，next 整条省略**；`[跨版本类对比](../../versions/)` |
| **L0 站点首页** | `content/_index.md` | `/` | — | 版本表每行一条 | `[v1.4.5](./v1.4.5/)` · `[v1.3.15](./v1.3.15/)` · `[v1.3.0](./v1.3.0/)` · `[跨版本](./versions/)` |

**架构页特殊深度**（我自己写的时候在这上面栽了，记录下来）：

| 文件 | route | 到 `/versions/` | 到 `api/` |
|---|---|---|---|
| `architecture/_index.md` | `/v1.5.3/{lang}/architecture/` | `../../../versions/` | `../api/` |
| `architecture/<page>.md` | `/v1.5.3/{lang}/architecture/<page>/` | `../../../../versions/` | `../../api/` |

### 已验证实例

| 起始文件 | ↑ 上行 | ↓ 下行 | ↔ 横向 |
|---|---|---|---|
| `api/campaign/Hero.md` | `[战役核心](../)` | — | `[Clan](../Clan)` |
| `api/campaign/_index.md` | `[API 参考](../)` | `[Hero](./Hero)` · `[Clan](./Clan)` | `[战役扩展](../campaign-ext/)` · `[任务](../mission/)` |
| `api/_index.md` | `[v1.5.3 首页](../)` | `[战役核心](./campaign/)` · `[界面](./gui/)` | `[架构](../architecture/)` |
| `architecture/sdk-overview.md` | `[架构总览](../)` | `[战役核心](../../api/campaign/)` | `[模块地图](../module-map)` · `[迁移](../migration-from-1.4.5)` |
| `_index.md` | `[站点首页](../../)` | `[API 参考](./api/)` · `[架构](./architecture/)` | `[v1.4.5](../../v1.4.5/)` |

### 自链陷阱

页面永远不要用自己 route 链自己。`content/v1.5.3/zh/_index.md` 链 `./api/` 和 `./architecture/`，
**绝不**链 `./`。（仓库里有 `tools/fix-breadcrumb-self-links.mjs` 专门修这类问题。）

---

## 5. 叶子清单的派生规则

不枚举（几千条，Worker-3/4 一落页就过期）。规则：

- `content/v1.5.3/{lang}/api/<slug>/<Type>.md` → route `/v1.5.3/{lang}/api/<slug>/<Type>/`，**一条 route**。
- 桶内跨命名空间同名 → 文件名 `<命名空间末段>__<类型名>.md`（如 `Campaign__IFaction.md`），
  依据 `dirMap.collisionRule`。**一个类型绝不写两个文件。**
- prev/next 顺序由 `data/page-navigation.json` 提供（补丁 P7，重跑生成，**不手写**）。

---

## 6. parity 缺口记账（不为对平而造桶/造页）

| 缺口 | 处置 |
|---|---|
| 1.4.5 `api/gameplay/` 19 个 URL 在 1.5.3 无对应 | **不建桶、不造页**。`sandbox`/`storymode` 已提升为顶层桶。记为预期 |
| 1.4.5 `core/Game.md` → 1.5.3 `core-extra/Game` | 唯一一处 core 归属变化，已写进迁移指南 §3.2 |
| 1.4.5 `mission/` 78 页中 52 页是裸手工清单 | 规则复刻不出来。**这正是 mission 桶故意小的原因**，见 §2.5 |
| `gameplay` 桶消失本身 | 是「1.4.5 目录语义混乱、1.5.3 改为按命名空间分桶」的证据，已写进迁移指南 §3.1 |
| en/api 10 桶 vs zh/api 20 桶 | **已解决**：worker-4 补齐，现两侧均 19 桶 / 5 969 叶子，完全对齐 |

---

## 7. 开放项

| id | 严重度 | 事项 | 实测 | 建议 | 状态 |
|---|---|---|---|---|---|
| **O1** | HIGH | `core-extra` 会被 `defaultDir` 灌进第三方代码 | 110 个非 Bannerlord 命名空间会落到 core-extra，类型数推算 5 157；其中只有 22 个命名空间是真 `TaleWorlds.Core/DotNet/Library/Starter` | 实际落盘只有 570 页 —— 生成器没有发布这些，符合预期。仍建议加显式 ignore-list 让行为有保证 | 实际已缓解 |
| **O2** | MEDIUM | `boardgames` 桶为空 | 规则 24 存在但 0 命名空间命中 | 不建桶。**已确认落盘 19 桶里没有它** | 已解决 |
| **O3** | — | `entryPointDirs` 混了三种词汇 | Boss 已修为干净的 `类型名 -> dir` 映射，7 条真覆写，空桶与拼错条目全清 | 无。**已划掉** | 已解决 |
| **O4** | LOW | 覆写按裸类型名匹配，可能把同名 BCL/生成类型拖进 mod 桶 | `LoadContext`/`Campaign` 已不在覆写表 → 前缀规则直接判对。残留：7 条中有 4 条在 1.5.3 别处有同名类型（`Module`↔mscorlib、`Mission`/`Agent`↔ManagedCallbacks、`MissionState`↔StoryMode）。落盘实测**未泄漏**（`core/` 恰好 2 页、`mission/` 恰好 5 页） | 依赖共享噪声门（unmapped 52→1）。**已降级** | 基本解决 |
| **O5** | LOW | api 叶子覆盖 | zh/en 均 19 桶 / 5 969 叶子，完全对齐 | 无。`typesAfterOverride` 只当上界看 | 已解决 |
| **O6** | MEDIUM | worker-3 的 6 个 api stub 跨桶兄弟链接写错 | 21 条断链：`api/core-extra/GameModels.md`、`api/engine/GauntletLayer.md`、`api/gui/ScreenBase.md`、`api/gui/ScreenManager.md`、`api/mission/Mission.md`、`api/mission/MissionState.md`。叶子页用了 `../<bucket>/<Type>`，解析成 `api/<自己桶>/<bucket>/<Type>`；正确应为 `../../<bucket>/<Type>` | 这 6 个文件一次 sed 即可。**不是我的树，不动** | OPEN（派给 worker-3） |

---

## 8. 我发现的 worker-3 产物缺陷（供其修复，我未动手）

1. `zh/api/mission/_index.md`：**frontmatter + 「模块心智模型」块出现了两次**（重复前置）。
2. `zh/api/mission-ext/_index.md`：同一条 carve-out 说明**重复 3 次**（24、37、50 行），
   像是按字母分组模板被逐组注入。
3. 两处都用了 `./../mission/Mission` 这种怪写法，正确是 `../mission/Mission`。能解析，但不是本站风格。
