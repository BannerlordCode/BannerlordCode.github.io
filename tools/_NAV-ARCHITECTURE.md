# 导航架构规范 · 本仓库全局观层 → 类页的树状结构定义

**归属**：导航架构线（worker-6）。**`tools/_NAV-ARCHITECTURE.md` 这一个文件，全线只有 worker-6 可写。**
**状态**：**已完成 · 可提交**（验收清单：`tools/_NAV-ARCHITECTURE-invariants.md`，逐条打勾结果见其 §9）
**重建声明**：本文件 2026-10-03 曾被另一条线误写覆盖，且 untracked 无 git 历史。
**原版无副本。** 现在的 814 行是**按不变量清单重建**，不是恢复。路径锚点 49 个逐条 `ls` 复核，0 失效。

> ⚠ **本文档与 `tools/_NAV-SECTION-INDEX-WRITE-DESIGN.md` 不是同一份东西。**
> 后者是「写入边界 / 硬前提窄口」文档，2026-10-03 因文件名误写从本文件抢救出来的副本，归属待裁定。见附录 C4。

---

## 0. 一分钟读法

| 你要写的页 | 放哪 | 看哪节 |
|---|---|---|
| 一个版本的入口 | `content/<version>/_index.md` | §1 §3 |
| 一个域的入口（architecture / guide / native / xml-reference / api） | `content/<version>/<lang>/<domain>/_index.md` | §1 §2 |
| 一个桶的入口 + 桶内子页清单 | `content/<version>/<lang>/api/<bucket>/_index.md` | §1 §2 §7 |
| 一个类 | `content/<version>/<lang>/api/<bucket>/<Class>.md` | §1 §2 |
| 两个类怎么配合 | **不单独成页**，并进桶 `_index.md` 的心智模型段 | §2 |
| 同一类跨版本的 API 差异 | `content/versions/<Class>.md` | §2 §3 |
| 一条「我要做 X」的完整路径 | `content/versions/task-<slug>.md` | §1.4b §3.3 |
| **任何页面里的一条链接** | **按 §4.1 的推导式，不要套简写** | §4 |
| 判断「这棵树合格了吗」 | 按 §5 的 A1–A12 | §5 |

---

## 1. 层级约定

### 1.1 五层的 ASCII 图

读法：方括号 = 该层**唯一**可能的落点；`{}` = 可变槽位；`▼` = 向下钻取；`↖` = 必须存在的回链。

```text
┌─ L0 全局观层 ────────────────────────────────────────────────────────────────┐
│  content/_index.md                         → route  /                      │
│  content/versions/_index.md                → route  /versions/             │
│  content/versions/<Class>.md    (18 个类)  → route  /versions/<Class>/     │
│  content/versions/task-<slug>.md  (5 篇)   → route  /versions/task-<slug>/ │
│  职责：从哪进入 / 先学什么 / 版本之间什么关系。禁止出现方法签名表。           │
└────────────────────────────────┬─────────────────────────────────────────────┘
                                 │  每页必须链回站点首页 content/_index.md  ↖
        ┌────────────────────────┼────────────────────────┐
        ▼                        ▼                        ▼
┌─ L1 版本层 ──────────┐ ┌─ L1 版本层 ──────────┐ ┌─ L1 版本层 ──────────┐
│ content/v1.3.0/      │ │ content/v1.4.5/      │ │ content/v1.5.3/      │
│  _index.md  → /v1.3.0/│ │  _index.md           │ │  ⚠ 无 _index.md      │
│  v1.3.15/  ✅         │ │                      │ │  （见 §1.5 缺口）      │
│  v1.4.6/  ✅         │ │                      │ │                      │
│  v1.4.7/  ✅ (+GAPS) │ │                      │ │                      │
│  职责：选语言 + 选相邻版本 + 状态声明。不列桶清单。                          │
└───────────┬───────────┘ └───────────┬──────────┘ └───────────┬───────────┘
            │  ↖ 必须链回 /                                          │
            ▼                                                         │
┌─ L2 域层（<version>/<lang>/<domain>/）──────────────────────────────────────┐
│  api/          桶集合的集合；有 _index.md                                  │
│  architecture/ 散文：模块地图、SDK 分层、存档原理、版本差异、doc-contract    │
│  guide/        散文：上手教程、任务/战役系统讲解、常见模式                  │
│  native/       P/Invoke 接口类（7 个叶子）                                  │
│  native-1.3.15-src/  ⚠ v1.3.15/v1.4.5 特有；同构但不是通用 domain         │
│  xml-reference/ XML 配置参考                                               │
│  职责：一个域一个 _index.md，列出本域全部兄弟域 + 本域全部叶子。              │
│  ⚠ 真实 domain 名是 guide（单数），不是 guides。                            │
└───────────┬────────────────────────────────────────────────────────────────┘
            ▼
┌─ L3 桶层（<version>/<lang>/api/<bucket>/）─────────────────────────────────┐
│  _index.md                            → route  /…/api/<bucket>/            │
│  职责三件事，一件都不能少：                                                  │
│    ① 列出本桶全部叶子（机械清单）                                            │
│    ② 链回 L4 父级（api/_index.md）                                          │
│    ③ 链回 L2 域层与 L1 版本首页                                             │
│  ⚠ 可能再往下嵌套一层子桶，见 §1.6                                          │
└───────────┬────────────────────────────────────────────────────────────────┘
            ▼
┌─ L4 类页层（leaf）─────────────────────────────────────────────────────────┐
│  content/<version>/<lang>/api/<bucket>/<Class>.md                          │
│      → route  /…/api/<bucket>/<Class>/    ← 带尾斜杠，比文件目录深一层     │
│  职责：这个类是什么心智模型 / 每个方法做什么用 / 可运行的 example。          │
│  必链：../  → 本桶 _index.md   （叶子页回桶索引是 ../，不是 ./_index）       │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 1.2 每层一张表（目录路径 / route / 职责 / 允许内容 / 禁止内容）

| 层 | 目录路径 | Zola route | 职责 | 允许出现 | 禁止出现 |
|---|---|---|---|---|---|
| L0 全局观 | `content/_index.md` | `/` | 站点入口：怎么进入、先学什么、版本关系 | 版本选择表、学习路径、跨版本对比入口 | 任何方法签名表、任何桶清单 |
| L0 全局观 | `content/versions/_index.md` | `/versions/` | 跨版本差异的**唯一**权威入口 | 18 个类对比链接 + 5 篇 task 页链接、读法说明、生成命令 | 逐成员差异表（那是 `versions/<Class>.md` 的活） |
| L0 全局观 | `content/versions/<Class>.md` | `/versions/<Class>/` | 同一个类在多版本间的 public/protected/internal 增删 | 成员级差异表、新增/移除清单 | 与版本无关的用法讲解 |
| L0 全局观 | `content/versions/task-<slug>.md` | `/versions/task-<slug>/` | **任务导向总览页** | 心智模型、逐步路径、每步指向哪个类页、跨版本签名差异提示 | 逐成员签名表、指向自己桶的 `./` 链接 |
| L1 版本 | `content/<version>/_index.md` | `/<version>/` | 选语言、选相邻版本、声明本版状态与规模 | 语言表、版本状态表、跨版本入口 | 桶清单、类名清单 |
| L2 域 | `content/<version>/<lang>/<domain>/_index.md` | `/<version>/<lang>/<domain>/` | 本域入口 + 列出本域全部兄弟域 | 兄弟域链接、本域散文页链接、叶子类链接 | 桶的叶子清单（那是 L3 的活） |
| L3 桶 | `content/<version>/<lang>/api/<bucket>/_index.md` | `/…/api/<bucket>/` | 机械子页清单 + 父链 + 兄弟桶链 + 心智模型段 | 子页清单、父链、兄弟桶链、心智模型段 | 散文方法页（那是 guide/ 的活） |
| L4 类页 | `content/<version>/<lang>/api/<bucket>/<Class>.md` | `/…/api/<bucket>/<Class>/` | 这个类怎么用 | 声明、属性、方法的用途与 example | 兄弟类清单（回桶 `_index.md` 看） |

### 1.3 折叠规则 —— 全文唯一的推导根

```text
route(文件 content/a/b/Foo.md)   = /a/b/Foo/      ← 叶子：路由比文件目录深一层
route(文件 content/a/b/_index.md)= /a/b/          ← 索引：折叠进所在目录，与目录同层
```

**一切相对链接写法都从这两行推导，不背结论。** 见 §4.1 的推导式与 §4.2 的方法论。

> ⚠ **修正一处流传很广的简写**：`tools/_HANDOFF.md` §4 门禁第 7 条写「同桶兄弟 `../Foo`」，
> 而「同桶兄弟 `./Foo`」这个说法在多份契约里流通。**两句都不完整**——它们各自只在一个写入位置成立。
> 完整形态见 §4.1。**在一份叶子页里，`./Foo` 会多一层且不报断链。**
>
> 📌 **本线自证**：本文档第一版正是因为抄了这个简写而写下了一条错误规则，
> 已由 §4.1.0 的对照实验推翻。见附录 C5。

> 基准路径全部按 **Zola 输出 route** 计，不按文件系统计。
> 来源：`tools/_INTEGRATION-GATES.md` §26。实例：链接探针按文件解析报 51 条断链 → 全假阳性。

### 1.4b `content/versions/` 的两类页与命名约定

`content/versions/` 下有两类页，**命名不得互串**（已落盘）：

```text
<Class>.md              逐类对比页。文件名 = 类名。
                        已核实 18 个：Agent / CampaignBehaviorBase / Clan / DiplomacyModel /
                        Formation / Hero / HeroDeveloper / IssueBase / ItemObject / Kingdom /
                        KingdomManager / Mission / MissionBehavior / MobileParty / QuestBase /
                        Settlement / Town / Village        route /versions/<Class>/

task-<slug>.md          任务导向总览页。文件名 = task- + 短横线 slug。
                        已核实 5 个：task-campaign-action / task-campaign-behavior /
                        task-gamemodel / task-mission-action / task-mod-bootstrap
                        route /versions/task-<slug>/
```

规则：

1. **两类都属 L0 全局观层**，都列在 `content/versions/_index.md` 的索引里。
2. `task-` 前缀是**分类标记**。新页若既想按任务又想按类，**拆成两页**，不造第三种命名。
3. **`task-*.md` 是叶子页，不是 `_index.md`** ⇒ 它的路由比文件目录深一层
   ⇒ 它内部指向 `versions/` 内其他页时**必须写 `./<slug>`**，
   指向版本树里的类页时**必须写 `../<version>/<lang>/api/<桶>/<Class>`**（先上跳一层出 `versions/`）。
4. `task-` 页不得复制 `<Class>.md` 的签名表；要成员级对比就链过去。

### 1.5 树里已存在的结构缺口（实测，不是推测）

1. **`v1.5.3` 没有版本根索引。** `content/v1.5.3/` 下只有 `zh/` 与 `en/`，没有 `_index.md`，
   即 route `/v1.5.3/` 不存在。已核实存在的是 `content/v1.5.3/zh/_index.md`、
   `content/v1.5.3/zh/api/_index.md`、`content/v1.5.3/zh/architecture/_index.md`。
   ⇒ **L1 层对 v1.5.3 断裂**：从站点首页点不进 `/v1.5.3/`。
2. **桶可以再嵌套一层子桶。** `content/v1.4.5/zh/api/view/` 下有
   `MissionViews/`、`Screens/`、`Scripts/`、`Tableaus/`，各自带 `_index.md`
   （例：`content/v1.4.5/zh/api/view/Screens/_index.md`，已核实）。
   ⇒ 写桶索引的相对链接前，**先确认目标在桶根还是在子桶**。

---

## 2. 判定表：「我要写一页 X，它该放在哪」

按顺序问，第一个「是」就是答案。

```text
Q1. X 讲的是同一个类在不同游戏版本之间的成员增删吗？
    是 → content/versions/<Class>.md       （该类名须已在 versions/_index.md 的表里）
    否 ↓
Q2. X 是一条完整任务路径（「我要让 mod 被加载」「我要在战役里挂行为」），
    涉及多个类但不属于任何单个类吗？
    是 → content/versions/task-<slug>.md   （命名约定见 §1.4b 第 3 条）
    否 ↓
Q3. X 的内容依赖某一个游戏版本吗？（写死版本号、版本特有的桶名、反编译行号）
    否 → 先回答 Q3b
    是 ↓
Q3b. 它是一个完整的类参考吗？（声明 + 属性 + 逐方法用途 + example）
    是 → content/<version>/<lang>/api/<bucket>/<Class>.md
        bucket 怎么定见 §2.1
    否 → 它是把两个或几个已有类串起来讲一件怎么做出来的事吗？
        是 → **不单独成页。** 并进目标桶 _index.md 的心智模型段。判据见 §2.2
        否 ↓
Q4. X 是连续散文（上手流程、某子系统的工作原理）？
    是 → content/<version>/<lang>/guide/<slug>.md
         实例：content/v1.4.5/zh/guide/mod-workflow.md
                content/v1.4.5/zh/guide/campaign-system.md
                content/v1.4.5/zh/guide/gauntlet-ui.md
    否 ↓
Q5. X 讲模块结构、SDK 分层、加载顺序、存档原理、版本差异？
    是 → content/<version>/<lang>/architecture/<slug>.md
         实例：content/v1.4.5/zh/architecture/module-system.md
                content/v1.4.5/zh/architecture/sdk-overview.md
                content/v1.4.5/zh/architecture/save-system.md
                content/v1.4.6/zh/architecture/version-delta.md
    否 ↓
Q6. X 是 XML 字段说明 / 原生 P/Invoke 接口？
    是 → xml-reference/ 或 native/（这两域是叶子集合，不是桶）
    否 ↓
Q7. X 是一个目录的入口？（列出子页 + 回父级）
    是 → 那一层目录的 _index.md，并遵守 §7 的 marker 块约束
```

> ⚠ **本表不规定任何链接写法。** 写页内链接一律回 §4.1 的推导式，不要从本表推 href。

### 2.1 「桶怎么定」——判据是**命名空间**，不是名字

> **判据一（找得到目标时）**：该类型真实所在的目录。用 `ls` / `nav-verify --evidence` 查。
> **判据二（要新建页时）**：该类型的**命名空间**。桶是按命名空间切的。

判据二的**仓库原文出处**（不是本文件的推论）：

```text
content/v1.4.7/zh/api/_index.md frontmatter：
  "v1.4.7 的 API 按命名空间分成 17 个桶：一个类型只属于一个桶，同桶重名用 Namespace__Type 区分。"

同页「有页面的桶」表的「覆盖」列，逐桶自述：
  campaign       → TaleWorlds.CampaignSystem 本体
  mission-ext    → TaleWorlds.MountAndBlade + TaleWorlds.Mission 全部实现面
  gui            → ScreenSystem / GauntletUI / TwoDimension
  engine         → TaleWorlds.Engine + Diamond 访问层
  campaign-ext   → CampaignSystem 子命名空间 + ObjectSystem
  core-extra     → TaleWorlds.Core 长尾 + 分类法兜底桶
  mission / core → 刻意做小，只放模组入口类

同页还有两条必须一起记的规则：
  "没有 gameplay/ 目录，也没有 navigationsystem/ 目录" —— 桶名不是猜出来的，是被显式否决过的
  同桶重名 → 文件名写 Namespace__Type
```

**`Namespace__Type` 重名约定（实测 263 个文件遵守）**：

```bash
# 已核实存在的实例
content/v1.3.0/en/api/viewmodel/ItemClanComparer__TaleWorlds_CampaignSystem_ViewModelCollection_ArmyManagement.md
content/v1.3.0/en/api/mission-ext/CameraFadeState__TaleWorlds_MountAndBlade_View_MissionViews.md
content/v1.4.5/zh/api/viewmodel/InputKeyItemVM__SandBox_ViewModelCollection_Input.md
```

⇒ **新页若桶内已有同名类型，用 `<Type>__<Namespace_下划线化>.md`，不许覆盖已有页。**

**桶名表是逐版本不同的**：

| 版本 | zh 桶集合 | en 桶集合 |
|---|---|---|
| v1.3.0 | campaign, campaign-ext, core, core-extra, engine, gameplay, gui, localization, mission, mission-ext, system, viewmodel（12） | 同 zh（12） |
| v1.3.15 | campaign, campaign-ext, core, core-extra, engine, gui, localization, mission, mission-ext, save-system, system, viewmodel（12） | 同 zh（12） |
| v1.4.5 | boardgames, campaign, campaign-ext, core, core-extra, custombattle, engine, final, gameplay, gui, localization, mission, mission-ext, perks, sandbox, save-system, storymode, system, view, viewmodel（20） | 14；**只有 zh 有** boardgames, custombattle, perks, sandbox, storymode, view |
| v1.4.6 | achievementsystem, activitysystem, campaign, campaign-ext, core, core-extra, custombattle, engine, gui, localization, mission, mission-ext, modulemanager, network, sandbox, save-system, storymode, system, viewmodel（19） | **无任何桶目录** |
| v1.4.7 | achievementsystem, activitysystem, campaign, campaign-ext, core, core-extra, custombattle, engine, gui, mission, mission-ext, modulemanager, network, sandbox, save-system, system, viewmodel（17） | 同 zh（17） |
| v1.5.3 | campaign, campaign-ext, core, core-extra, engine, gui, localization, mission, save-system, storymode（10） | **无任何桶目录** |

### 2.2 「只讲两个类怎么配合」为什么不单独成页

新增一个页面就新增一个必须被索引、被入链、被双语对齐的节点，而 §5 的 A1 要求每个节点都被照顾到。
桶 `_index.md` 已经是「这一桶怎么用」的合法容器，且它本来就带心智模型段。

**判定写法**：把这页内容写成桶索引里的一节，它在 §5 A2 的「子页清单」检查里**不算子页**——
它是段。判据是**内容有没有作者判断成分**，见 §7。

---

## 3. 全局观层的硬要求

### 3.1 先核实：六个版本之间到底是什么关系

> 这一节的所有结论来自实测，**不采信任何转述**。

**核实到的事实（2026-10-03）**：

1. `content/_index.md` 的版本表**只列 3 个版本**：v1.3.15（「最新稳定版」）、v1.4.5（「源码可用」）、
   v1.3.0（「早期版本」）。**v1.4.6 / v1.4.7 / v1.5.3 在站点首页不可达。**
2. `content/v1.4.6/_index.md` 自述：「要一个能用的 v1.4.x 文档 → v1.4.5，覆盖最完整的一版」。
3. `content/v1.4.7/_index.md` 自述：「这是一棵小而手写的小树，而不是一棵生成出来的全树」。
4. `content/versions/_index.md` 只覆盖 **1.3.0 / 1.3.15 / 1.4.5** 三版，18 个类。
5. `tools/class-version-diff.mjs:11-15` 的 `ROOTS` **写死**三棵源码树
   （`bannerlord-1.3.0` / `1.3.15` / `1.4.5`）
   ⇒ **该工具在结构上无法比较 1.4.6 / 1.4.7 / 1.5.3。**

**本文档采用的结论**：

- **对标当前游戏、覆盖最完整的是 `v1.4.5`**（4,269 / 4,312 个 orphan 在这一棵树上；
  zh 树 9,477 文件、en 树 7,193）。但**它不是「最新」**——v1.4.6/1.4.7/1.5.3 版本号更高。
- **v1.3.15 是「最新稳定版」基线**，且是 `content/versions/` 的上界之一。
- **v1.3.0 是历史版本**，`content/versions/` 的下界。
- **v1.4.6 / v1.4.7 / v1.5.3 是增量/未来分支**：v1.4.6 与 v1.5.3 的 en 树**没有任何桶目录**，
  v1.4.7 是手写小树。它们各带 `architecture/version-delta.md`（v1.4.6、v1.4.7 zh/en 已核实存在），
  v1.5.3 带 `architecture/migration-from-1.4.5.md`（已核实存在）。
- **跨版本差异该在哪查**：
  - 1.3.0 ↔ 1.3.15 ↔ 1.4.5 的**逐类成员级差异** → `content/versions/`
    （唯一权威处，`tools/class-version-diff.mjs` 是它的生成器）。
  - 1.4.5 → 1.4.6 / 1.4.7 / 1.5.3 的**模块级与桶结构级差异** → 该版本自己的
    `version-delta.md` / `migration-from-1.4.5.md`。
  - **不在版本树里对读。** 版本树是「某一版的真相」，不是「两版的对比」。

> ⚠ **这是一条会过期的结论。** 若日后 `class-version-diff.mjs` 的 `ROOTS` 扩到 6 棵树，
> 或 `content/versions/` 扩到更多版本，本节必须重写。改之前先跑上面 5 条核实。

### 3.2 `content/_index.md` 内容大纲

| # | 章节标题 | 必须回答的问题 | 至少要有的下钻链接目标（全部已核实存在） |
|---|---|---|---|
| 1 | **我该读哪一版？** | 六个版本分别什么状态？哪个对标当前游戏？哪个是稳定基线？ | `./v1.4.5/`、`./v1.4.7/`、`./v1.4.6/`、`./v1.5.3/zh/`（⚠ 无 `/v1.5.3/`）、`./v1.3.15/`、`./v1.3.0/` |
| 2 | **第一次接触该读什么** | modder 的前 30 分钟读哪 3 页、什么顺序？ | `./v1.4.7/zh/architecture/module-system`、`./v1.4.7/zh/architecture/sdk-overview`、`./v1.4.5/zh/guide/mod-workflow`、`./v1.4.5/zh/guide/game-systems-overview` |
| 3 | **我想做的事 → 从哪进** | 「让 mod 被加载」「挂战役行为」「做界面」「存数据」「排查升级后炸了」分别从哪进？ | 照搬 `content/v1.4.7/_index.md` 的「模组作者从这里开始」表（已实测存在，每格两条真实链接） |
| 4 | **六个版本的关系** | 哪棵是基线、哪些是历史/未来分支、什么时候跨版本查？ | `./versions/`、`./v1.4.6/zh/architecture/version-delta/`、`./v1.5.3/zh/architecture/migration-from-1.4.5/`、`./v1.4.7/zh/architecture/version-delta/` |
| 5 | **语言的粒度** | zh 与 en 树形状一样吗？（v1.4.5 zh 20 桶 / en 14 桶；v1.4.6、v1.5.3 的 en 树没有桶） | `./v1.4.5/zh/`、`./v1.4.5/en/`、`./v1.4.7/zh/`、`./v1.4.7/en/` |
| 6 | **覆盖什么、不覆盖什么** | API 覆盖到什么粒度？哪些生成页哪些手写页？ | `./v1.4.7/GAPS`（已核实）、各桶 `_index.md` |
| 7 | **六层导航怎么走** | 从首页到一个类页要跳几次、每一跳落在哪？ | 引用本文件 §1.1 的 ASCII 图 |

**硬要求**：第 1、3、4 章是这一页存在的理由，缺任何一章即不合格。

### 3.3 `content/versions/_index.md` 内容大纲

| # | 章节标题 | 必须回答的问题 | 至少要有的下钻链接目标 |
|---|---|---|---|
| 1 | **这里查什么、不该查什么** | 「逐类成员级差异」在这里查；「模块/桶结构差异」去各版本 `version-delta`。写清分工。 | `./Hero`、`./Mission`、`./MobileParty` |
| 2 | **覆盖哪些版本、哪些类** | 覆盖 1.3.0/1.3.15/1.4.5 三版、18 个类。为什么不是 6 版？（`class-version-diff.mjs` 的 `ROOTS` 写死三棵） | 生成命令 `node tools/class-version-diff.mjs <Class>` |
| 3 | **类索引表** | 每个类在两版各多少成员、变化几个。**每个类名必须链到 `./<Class>`。** | 现表 18 行已实测全部有链接 |
| 3b | **任务路径表** | 「我想做 X」从哪篇 `task-` 总览页进？**每个任务必须链到 `./task-<slug>`。** | `./task-mod-bootstrap`、`./task-campaign-behavior`、`./task-campaign-action`、`./task-mission-action`、`./task-gamemodel` |
| 3c | **两类页的区别** | `<Class>.md` 看成员级差异；`task-*.md` 看一条完整路径。什么时候用哪个？ | `./Hero` 与 `./task-mod-bootstrap` 作一对样例 |
| 4 | **怎么读这些表** | 新增/移除/无变化各意味着什么、对 modder 采取什么动作 | 无需下钻 |
| 5 | **1.4.6/1.4.7/1.5.3 的差异去哪查** | 指向各版本的 `version-delta` 与 `migration-from-1.4.5` | `../v1.4.6/zh/architecture/version-delta/`、`../v1.4.7/zh/architecture/version-delta/`、`../v1.5.3/zh/architecture/migration-from-1.4.5/` |
| 6 | **没被收录的类怎么办** | 一个类没在这 18+5 篇里，怎么自己查 | `./Hero` 页里的生成命令段 |

---

## 4. 链接书写规则

### 4.1 推导式 + 按写入位置拆分的规则表

#### 4.1.0 推导式（唯一真源，先推再写）

```text
route(叶子页  content/a/b/Foo.md)   = /a/b/Foo/     深度 = 目录深度 + 1
route(索引页  content/a/b/_index.md)= /a/b/         深度 = 目录深度

相对 href 以【当前页的 route】为基准解析。

⇒ 「回到本文件所在的那个目录」需要上跳的层数：
     叶子页   → 1 层  →  ../      （. 什么都不做是错的，会多一层）
     _index.md→ 0 层  →  ./
⇒ 「指向同目录的叶子 Foo」：
     叶子页   → ../Foo
     _index.md→ ./Foo
```

**阳性/阴性对照（已实测，可复跑）**：

```text
叶子页 content/v1.3.0/zh/api/campaign/CampaignEvents.md（route …/campaign/CampaignEvents/）
  ./MBEvent   → v1.3.0/zh/api/campaign/CampaignEvents/MBEvent/   ← ❌ 多一层，静默，不报断链
  ../MBEvent  → v1.3.0/zh/api/campaign/MBEvent/                ← ✅ 对
  ../         → v1.3.0/zh/api/campaign/                          ← ✅ 回桶索引

桶索引 content/v1.3.0/zh/api/campaign/_index.md（route …/campaign/）
  ./MBEvent   → v1.3.0/zh/api/campaign/MBEvent/                 ← ✅ 对
  ../         → v1.3.0/zh/api/                                   ← ✅ 回 api 域
  ../../      → v1.3.0/zh/                                       ← ✅ 语言首页（不是版本首页）
  ../../../   → v1.3.0/                                         ← ✅ 版本首页
```

> ⚠ **叶子页里的 `./Foo` 是本仓库最贵的一条静默缺陷**：它解析「成功」，
> 只是落错一层。orphan 口径与断链口径**都看不见它**（见 §5 A12.2 与 A13）。

#### 4.1.1 规则表（每行的「写入位置」是必填，不是可选）

| # | 写入位置 | 目标 | href | 真实例子（已 `ls` / `grep` 核实） |
|---|---|---|---|---|
| L1a | 桶 `_index.md` | 同桶叶子 `Foo` | **`./Foo`** | `content/v1.4.5/zh/api/campaign/_index.md` 内 `./Campaign` `./Hero` `./Clan` `./Kingdom` `./Settlement` |
| L1b | 叶子页 `X.md` | 同桶兄弟 `Foo` | **`../Foo`** | `content/v1.3.0/zh/api/campaign/CampaignEvents.md` 内 `../MBEvent` → `content/v1.3.0/zh/api/campaign/MBEvent.md` 存在 |
| L2a | 桶 `_index.md` | 回 api 域入口 | `../` | `content/v1.3.0/en/api/campaign/_index.md:9` `- [API Reference](../)` |
| L2b | 叶子页 `X.md` | 回本桶 `_index.md` | `../` | `content/v1.3.15/en/api/campaign/Alliance.md` 内 `[Area Index](../)`；`nav-verify --evidence` 确认命中 `…/campaign/_index.md` |
| L3a | 桶 `_index.md` | 语言首页 | `../../` | `content/v1.3.15/zh/api/core/_index.md` 内 `../../architecture/crash-boundaries/` |
| L3b | 桶 `_index.md` | **版本首页** | `../../../` | `content/v1.4.7/en/api/mission/_index.md` 内 `../../../zh/api/mission/Mission` |
| L4a | 桶 `_index.md` | 跨桶叶子（同语言同版本） | `../<目标桶>/Foo` | `content/v1.4.5/zh/api/campaign/_index.md` 内 `../campaign-ext/CampaignBehaviorBase/` |
| L4b | 叶子页 `X.md` | 跨桶叶子 | `../../<目标桶>/Foo` | 推导式：叶子已在桶内一层，上跳 2 层才回到 api 域 |
| L5 | 桶 `_index.md` | 跨桶目录（带尾斜杠） | `../<目标桶>/` | `content/v1.4.7/zh/api/campaign/_index.md` 内 `../mission-ext/` `../viewmodel/` `../save-system/` |
| L6 | 桶 `_index.md` | 跨到域层散文 | `../../<domain>/<slug>` | `content/v1.4.5/en/api/campaign/_index.md` 内 `../../architecture/crash-boundary` |
| L7 | 桶 `_index.md` | 跨语言 | `../../../<lang>/api/<桶>/Foo` | `content/v1.4.7/en/api/mission/_index.md` 内 `../../../zh/api/mission/Mission`、`…/Agent` |
| L8 | 版本首页 | 相邻版本 | `../<版本>/` | `content/v1.4.7/_index.md` 内 `../v1.4.5/` `../v1.4.6/` `../v1.3.15/` `../v1.3.0/` |
| L9 | `versions/<Class>.md` | 同目录另一篇 | `./<Other>` | `content/versions/_index.md` 内 `./Hero` `./Mission` `./MobileParty` |
| L10 | `versions/task-<slug>.md` | 另一篇 task 页 | `./task-<other>` | ⚠ **这一条曾经出错**：`task-*.md` 是叶子页，路由比目录深一层，写 `./task-mission-action` 会解析进**自身**。见 §4.3 |
| L11 | `versions/task-<slug>.md` | 版本树里的类页 | `../<version>/<lang>/api/<桶>/<Class>` | 推导式：先上跳一层出 `versions/`，再下钻。**禁止 `./` 开头的桶内链接**（该页不属于任何桶） |
| L12 | 桶 `_index.md`（子桶） | 同子桶叶子 | `./Foo` | `content/v1.4.5/zh/api/view/Screens/_index.md` 存在；子桶的子页是 `./` 不带桶名 |
| L13 | **桶索引文件名是 `_index.md`，不是 `index.md`** | —— | —— | 全树 `index.md` 数量 = **0**（实测）；536 个索引全部叫 `_index.md` |
| L14 | 链接里**不写** `.md` 后缀、**不写** `_index` | 全部 | —— | `content/v1.4.5/en/api/campaign-ext/AddHeroToPartyAction.md` 写了 `../../final/actions/_index`，该 href **不可解析**（目标文件确实存在） |
| L15 | 不写开头斜杠 | 全部 | —— | `content/v1.3.15/en/architecture/version-delta.md` 内 22 处 `/versions/...`，全被当相对路径解析到 `…/version-delta/versions/…`，全落空 |

> **L4b 的存在意义**：从叶子页写 `../<桶>/Foo` 会上跳到 api 域再进桶，落点是
> `/…/api/<目标桶>/Foo/`；写 `../<桶>/Foo` 只上跳一层，会落到 `/…/api/<桶>/<本页类名>/<目标桶>/Foo/`。
> 这是 L4.2d 说的「能解析但落错层」的又一形态。

### 4.2 🚫 写死警告：不能按子系统直觉猜桶

**本仓库可以亲手复现的两个真实反例（2026-10-03，worker-7 撞上并被逐条链接验证抓出）**：

#### 反例 D：`GauntletLayer` —— 干净的「猜桶」错误

| 项 | 值 |
|---|---|
| 直觉桶 | `mission-ext` |
| **真实桶** | **`engine`** |
| 真实路径（已核实，10 个文件） | `content/v1.3.0/{en,zh}/api/engine/GauntletLayer.md`、`content/v1.3.15/{en,zh}/…`、`content/v1.4.5/{en,zh}/…`、`content/v1.4.6/zh/…`、`content/v1.4.7/{en,zh}/…`、`content/v1.5.3/zh/…` |
| 分布 | **10 棵树全在 `engine`，`mission-ext` 命中 0 次** |
| 命名空间 | `TaleWorlds.Engine.GauntletUI`（见 `content/v1.4.5/zh/api/engine/_index.md` 的 Namespace 表） |

**直觉为什么会错**——仓库里有两个**几乎同名**的命名空间：

```text
gui 桶    覆盖  TaleWorlds.GauntletUI          ← 无 Engine 段
engine 桶 覆盖  TaleWorlds.Engine.GauntletUI  ← 有 Engine 段
```

`content/v1.4.5/zh/api/gui/_index.md` 自己写明了分工：

> 「gui 桶本身不负责把 UI 接入游戏循环，那是 `GauntletLayer` 的工作。……gui 桶在 engine 的
> `GauntletLayer` 之上提供『界面内容与运行逻辑』。」

⇒ **桶的边界画在职责分层上，不画在名字上。**

#### 反例 E：`ScreenBase` —— 不是猜错，是「两个桶都对」

| 项 | 值 |
|---|---|
| 直觉桶 | `gui` |
| **实测** | **`campaign-ext` 与 `gui` 两个桶里都有**（10 个文件逐条核实） |
| 在 `campaign-ext` | `v1.3.15/{en,zh}`、`v1.4.5/{en,zh}` |
| 在 `gui` | `v1.4.5/{en,zh}`、`v1.4.6/zh`、`v1.4.7/{en,zh}`、`v1.5.3/zh` |

仓库自己给了原因（`content/v1.4.7/zh/api/_index.md`）：

> 「1.4.5 的文档树里同一个类型名出现在两个目录共 2,199 次，那正是『点进去发现是别的地方、
> 然后回不来』的根源。」

⇒ **可执行推论**：旧树里跨桶重复的类型，**写链接前必须先确认「我要指的那一版」**，
再查那一版的路径。同一版本内它可能同时有两个真答案；跨版本猜桶则是纯粹的错。

#### 4.2b 可执行动作：发现机制，不是禁令

> **只写禁令没用——这两个反例都是靠「机器逐条验证」抓出来的，不是靠读文档。**

```bash
cd BannerlordCode.github.io
# 步骤 1 —— 列出候选目标的全部真实位置
find content -name "<ClassName>.md" | sort
# 步骤 2 —— 确认解析到的确切 route
node tools/nav-verify.mjs --evidence "<ClassName>"
# 步骤 3 —— 批量跑，不要一篇一篇手写
node tools/nav-verify.mjs --emit-baseline /tmp/base.tsv
```

**判据**：`find` 返回 **0 条**时不要写「该类型不存在」——先证「grep 写错了 / cwd 错了 /
编码不对」不成立（`_INTEGRATION-GATES.md` §9 第 4 条）。返回 **>1 条**时不得任选一条（反例 E）。

#### 4.2c 已知错链（存量，证据强度低于 D/E）

```text
content/v1.3.15/en/architecture/version-delta.md   22 处 /versions/...   ← 开头斜杠（违反 L15）
content/v1.4.5/en/api/campaign-ext/AddHeroToPartyAction.md  → ../../final/actions/_index ← 违反 L14
```

全树 **426** 条断链 / **164** 个来源页（命令 `node tools/nav-verify.mjs`，2026-10-03）。
**既有缺陷，非本线引入，不要顺手修。**

### 4.3 「解析进自身」与「多一层」是同一个 bug 的两种症状

> 实测来源：worker-7 在写 `/versions/task-campaign-action/` 时抓到
> `./task-mission-action` **解析进了它自己**。

**同源解释**：`task-*.md` 是**叶子页**，路由比文件目录深一层（§1.3）。
所以 `./task-mission-action` 实际落到 `/versions/task-campaign-action/task-mission-action/`——
**多了一层**，而这一层恰好「存在」吗？不，它不存在，所以断链口径会报；但当目标就是本页自己时，
多出来的那一层不存在，报的是**自链**而不是断链。

| 症状 | 条件 | 现有门禁看得见吗 |
|---|---|---|
| **多一层**（`./Foo` 写在叶子页） | 目标页存在但路径多一层 | ❌ 断链口径报「解析成功」；orphan 口径报「有入链」。**两道门禁都看不见** |
| **解析进自身** | 目标恰好是本页 | ❌ 同上，两道门禁都看不见 |
| **真 404** | 目标路径不存在 | ✅ 断链口径能报 |

⇒ **同一个动作错误（叶子页里用 `./`），会产生两种症状。**
所以 §5 必须同时有 A12（自链）和 A13（落错层）。

### 4.4 方法论：简写规则不是规则

> **boss 裁定原文：**
> **简写规则不是规则。** 凡是可以靠「路由比目录深一层」推导出来的规则，就写推导，不写结论。
> 写结论必然在某个上下文里失效，而失效时它是静默的。

**本条在本文档里的具体形态**：

| 曾经的简写 | 为什么不成立 | 现在写成 |
|---|---|---|
| 「同桶兄弟 `./Foo`」 | 只在 `_index.md` 里成立 | §4.1.0 推导式 + L1a/L1b 两行 |
| 「跨桶 `../../<bucket>/Foo`」 | 只在叶子页里成立 | L4a（桶索引）/ L4b（叶子页）两行 |
| 「桶索引回版本首页 `../../`」 | 落在语言首页 | L3a（语言首页 `../../`）/ L3b（版本首页 `../../../`） |

**派单反对的正面实例（worker-4）**：它核实后发现自己的结论与 lead 的说法矛盾，
**没有为了对上而将错就错，先报冲突再动手**。boss 评价这是本会话最标准的一次派单反对。

> **本文档不重复这条裁定，只执行它。** §4.1.0 是推导式，§4.1.1 的表由它展开。
> 下次要加规则时，先问「这条能从折叠规则推出来吗」，能推就推，别写成结论。

### 4.5 ⚠ 两套口径不是一回事，别互相否证

| 口径 | 谁在用 | 解析基准 | 测的是 | `_index` 形式 href |
|---|---|---|---|---|
| **orphan 口径** | `tools/_v146_orphan_check.mjs`、`nav-verify.mjs` 的 `routeOf` / `res` | 规范化后与 route 表比对 | **有没有入链** | `res` 无条件补 `/`，`../campaign/_index` → `…/campaign/_index/` → 落空 |
| **链接解析口径** | `tools/audit-links.mjs`（`AUDIT_MODE=url\|file\|either`，默认 `url`） | url 模式按 posix 规范化 route；file 模式按文件系统 | **href 能不能落到文件** | 与 orphan 口径不同 |

`tools/_HANDOFF.md` §3.4 说「`_index` 形式 href 0 次解析成功」，那是在 **orphan 口径**下测的，成立。

> 差值已定位为三组：`_index` 形式 href、根相对形式、大小写。
> **不要拿一套的数否另一套的数。** 报「断链多少条」必须写清用的是哪一套。

---

## 5. 「树」的验收定义

用户说「完美树状结构」。翻译成机器可判定的条件。
三个工具并行开发：`tools/nav-orphans.mjs` / `tools/nav-section-index.mjs` / `tools/nav-verify.mjs`。

| # | 验收条件 | 判定方式 | 负责工具 / 检查项 | 2026-10-03 实测 |
|---|---|---|---|---|
| **A1** | **每个非根页至少有一条从根可达的入链**（orphan = 0） | site-wide 入链计数 = 0 | `nav-orphans.mjs`（主）+ `nav-verify.mjs` 的 `ORPHANS=`（口径须与 `_v146_orphan_check.mjs` 逐字一致） | **4,312 个 orphan / 28 个父目录**。含站点首页自身 |
| **A2** | **每个 `_index.md` 列出它目录下的全部子页** | 子页文件集合 ⊆ 该页解析出的目标集合 | `nav-section-index.mjs` 的 `covered == children` | 536 个 `_index.md` 中 **127** 个目录下有叶子；**93** 个全覆盖；**5** 个有叶子但覆盖 0 |
| **A3** | **每个桶 `_index.md` 有指向上级 `_index.md` 的链接** | 目标集合 ∋ `routeOf(<dir>/_index.md)` | `nav-section-index.mjs` 的 `hasParent` | **535 个非根索引中只有 6 个有父链，529 个没有** |
| **A4** | **从任一页能链回站点首页** | 存在指向 route `''` 的 href | `nav-verify.mjs` 新增 `links_to_root=` | **全站 0 页**链回站点首页 |
| **A5** | **写入前必须通过外部护栏断言** | 写入器调用 `assertStructuralScope()`，越界非零退出 | `nav-section-index.mjs` 的 **PRE-WRITE GUARD**（见 §7） | 断言由 lead-4 在 `content-write-freeze.mjs` 维护，本文件不复制其口径 |
| **A6** | **marker 块之外字节级不变** | 写入后对块外字节断言 | `nav-section-index.mjs` 的 **POST-WRITE OUTSIDE-DIFF == 0** | 全树 107 个 `_index.md` 含该标记 |
| **A7** | **删除/改写行数 = 0** | dry-run 报告显式打印该计数；不为 0 不许写 | `nav-section-index.mjs` 的 **DRY-RUN DELETED/REWRITTEN == 0** | 硬断言，不是报告项 |
| **A8** | **幂等：连跑两次第二次 0 改动** | 第二次 `git diff` 为空 | `nav-section-index.mjs` 的 **IDEMPOTENCE** | — |
| **A9** | **断链净增 = 0** | 与基线清单**逐条** diff，不看总数 | `nav-verify.mjs --baseline <tsv>` → `NEW_BROKEN=0` | 当前 `BROKEN_LINKS=426` |
| **A10** | **重复 marker 不得使解析器崩溃，且必须显式报告** | `BEGIN=n END=m` 且 n≠m 时取第一个 BEGIN→第一个 END，并打印重复位置与计数 | `nav-section-index.mjs` 的 **DUP-MARKER REPORT**（读容忍 + 禁删） | 3 个文件 BEGIN=2/END=1：`content/v1.3.15/en/api/campaign-ext/_index.md`、`content/v1.3.15/zh/api/campaign-ext/_index.md`、`content/v1.4.5/zh/api/campaign-ext/_index.md` |
| **A11** | **阳性对照先行**（门禁第 1 条） | 报「0 问题」前先在已知为真的样本上跑过 | 每个工具的 `--selftest` | ⚠ **当前 `nav-verify.mjs --selftest` 是红的**：`resolved_links=1740 control_files=3 failures=32`（形态 `route 越界`）。**转绿前不得引用它的 `BROKEN_LINKS=0` 当合格证据** |
| **A12** | **自链失败**（任何解析到本页自身的链接） | `res(from, href) === routeOf(page)` → `SELF_LINK`，失败 | **待实现**。`nav-verify.mjs` 新增 `SELF_LINKS=`（已有 `fromLink`/`route`/`hit` 三字段可复用）；分类器归 `nav-section-index.mjs`。**未实现就是未实现** | 见 A12.1 |
| **A13** | **落错层失败**（能解析但落点不是预期层） | 每条链接带语义标签；非预期标签即失败 | **待实现**。`nav-section-index.mjs` 每条新链接打三列 `href | route | 语义标签`；只生成同桶子页清单时标签须恒为 `SIBLING`，否则 `exit 1` | 该护栏已当场抓到过本工具自己的 bug：`../` 曾被误标成 `LANG_HOME` |

### A12.1 自链的两种形态与处置

| 形态 | 判据 | 处置 | 实测 |
|---|---|---|---|
| **良性** | href 指向本页**所在目录**（`./` 或 `.`）——面包屑/导航条里指向「本页」那一条 | 允许，须**显式标注**；**不得用它把本页从 orphan 里救出来** | 178 处 / 162 页（实例 `content/v1.4.5/en/api/core/Game.md:169,175`） |
| **锚点自链** | href 指向本页带 fragment（`./#debugging-tips`） | 允许，单独计数 | 8 处（实例 `content/v1.3.15/en/guide/troubleshooting.md`） |
| **恶性** | 正文里手写的、指向**自己类页**的链接 | **判失败**。按 §4.1.0：叶子页指向同桶兄弟必须是 `../<本页类名>`，**不是 `./<本页类名>`** | **19 处 / 17 页**。实例（行号 `grep -n` 核实）：`content/v1.3.0/zh/api/campaign-ext/AchievementManager.md:66,76` → `../AchievementManager`；`content/v1.3.0/zh/api/campaign/AgingCampaignBehavior.md`；`content/v1.3.0/zh/api/core-extra/AreaInformation.md`；`content/v1.3.0/zh/api/core-extra/MBList.md` |

> **19 处恶性自链全部落在 `v1.3.0/zh/`** —— 不是 19 个独立笔误，
> 是那一版叶子页模板的生成规则问题。**按规则修，不要逐页 sed。**

**良性自链不得洗白 orphan 基线。** `_v146_orphan_check.mjs` 的入链计数处**没有 `tg !== from` 守卫**
（`_HANDOFF.md` §3.4 已记录），自链当前**计入入链**。⇒ **A1 与 A12 必须分开计数。**
orphan 基线 4,312 是在「自链计入」口径下测得的；改口径后**基线会变**，必须重新落基线并写明口径。
**禁止**拿新口径的数去和旧口径的 4,312 直接比。

### A12.2 为什么 A12 与 A13 必须是独立验收项

自链同时躲过现有两道门禁：

| 口径 | 看什么 | 自链 / 落错层的表现 |
|---|---|---|
| orphan 口径 | 有没有入链 | 自链**算入链** → 判「不是孤儿」 |
| 断链口径 | href 能不能落到文件 | 自链**解析成功**；「多一层」在目标恰为自身时也解析成功 → 判「不是断链」 |

两道门禁都报绿，而**页面实际没有跳到任何地方**。
这与 `_HANDOFF.md` §3.4 记的机制缺陷同族——当时只影响数字口径，现在有真实后果。
**A12 / A13 不是 A1 或 A9 的特例，是两道门禁盲区的交集。**

### A13.1 「落错层」为什么也躲过门禁

叶子页里的 `./Foo` 解析到 `/…/<bucket>/<X>/Foo/`。若 `Foo` 恰好不存在，
断链口径**会**报；若 `Foo` 存在但你本意是同桶兄弟，正确答案是 `/…/<bucket>/Foo/`——
解析器**无法区分**这两个意图，因为它只验「落点是否存在」，不验「落点是不是你要的那一层」。

⇒ **断链口径的通过不等于链接正确。** 必须由 A13 的语义标签来判。

### A12.3 ⚠ 本条数值的口径声明与未归因差异

> **引用 A12 的数时必须一并引用本节。** 三个探针给出三个不同的数，**原因未归因，三个都不能当权威。**

**口径声明**：本探针**不跳过 fenced code block**。为回答「fence 是不是差异来源」，
另做了一次对照实验——按 CommonMark 规则配对围栏后重新测量：

```text
剥离规则（CommonMark）：
  开围栏  ^ {0,3}(`{3,}|~{3,})(info)   反引号围栏的 info 不得含反引号
  闭合围栏  同字符 且 长度 >= 开围栏 且 其后只允许空白（不可带 info string）

阳性/阴性 fixture（4 条，全部 PASS；任何一条 FAIL 则探针 fail-closed 不出数）：
  F1  反引号块，~~~ 在块内是字面量          blocks=1  before=5 after=2
  F1b 波浪号围栏                            blocks=1  before=3 after=2
  F1c 闭合围栏长度 >= 开围栏                blocks=1  before=3 after=2
  F2  闭合带 info string 不算闭合（worker-5 报的 bug） blocks=1 before=4 after=2

四个数（分子分母齐全）：
  扫到的 block 数        165,011      （含 1 个未闭合；330,024 条围栏行；38,653 个文件有围栏）
  排除的链接数          25
  剔除前全树链接总数    140,432
  剔除后全树链接总数    140,407
  剔除前自链            205      → 剔除后 205      delta = 0
  剔除前锚点自链        8        → 剔除后 8        delta = 0
  剔除前恶性自链        19       → 剔除后 19       delta = 0
```

**两个可复核的发现**：

1. `close_candidates_rejected = 0` —— 在**本仓库真实语料**里，**没有任何一条闭合围栏带info string**。
   ⇒ worker-5 报的解析 bug 确实存在（fixture F2 能抓出来），但**它在本语料上不会发生**，
   因此**不能解释 29 / 1,773 的差异**。
2. block 数 165,011 与 worker-5 报的 165,013 **同量级**（差 2，落在树并发移动范围内）。

**但结论仍然是「未归因」**：

| 数 | 来源 | 剥离状态 | 工具支撑 |
|---|---|---|---|
| **205** | 本探针 | 不剥离 205 / 剥离 205（两跑相同） | 有：4 条 fixture + 四个数 |
| **398** | worker-5 | 自述 `analyze()` **无 fence-skipping、无测试** | **无** |
| **331** | worker-5 | 自述同上（398 去 fence 后） | **无** |

⇒ 按 `tools/_INTEGRATION-GATES.md` §9 第 5 条与 handoff 第 5 条，
**三个数并列保留，各自标明口径与剥离状态；在两探针对齐前不取平均、不挑一个当权威。**
我的实验能证明「**在本语料上**fence 不改变自链数」，**不能证明 worker-5 的 398 是错的**
——它可能数的是另一种东西（例如把结构不同的内容也算进来）。**未归因就是未归因。**

> 另注：分母（全树链接数）本身在动——同一晚内测到 140,350 / 140,432，
> 因为其他线在并发写入。**任何跨小时的数对比都要先对齐测量时刻。**

---

## 6. 反模式清单

| # | 用户原话 | 禁止项 | 本仓库真实反例（2026-10-03 存在） |
|---|---|---|---|
| **P1** | 「标签页只能单向跳转，跳过去回不来」 | 任何页面不得只出不回。叶子页必须能回桶索引（`../`），桶索引必须能回父级（A3）。 | `content/v1.4.5/zh/api/campaign/CampaignEvents.md` 没有 `../` 回桶索引。全树 **529/535** 个非根 `_index.md` 无父链 |
| **P2** | 「不是树状结构」 | 不得出现只有入链没有出链的悬空叶；每一跳双向可走。 | `content/v1.4.5/zh/api/viewmodel/_index.md`：目录有 **605** 个叶子，索引只链 **42** 个。同类 en 树 `content/v1.4.5/en/api/viewmodel/_index.md` 链了 **600** 个 —— zh/en 形状不一致本身就是「不成树」 |
| **P3** | 「跳着跳着就直接 404 了」 | 写 href 前查真实路径（§4.2b）。带 `.md`、带 `_index`、带开头斜杠三种写法一律禁止。 | `content/v1.4.5/en/api/campaign-ext/AddHeroToPartyAction.md` → `../../final/actions/_index`；`content/v1.3.15/en/architecture/version-delta.md` → 22 处 `/versions/...`。全树 **426** 条断链 / **164** 个来源页 |
| **P4** | 「只有 API 列表没有大局观」 | 站点首页与版本首页必须有「先学什么」章（§3.2 第 2、3 章）。 | `content/_index.md` 版本表只有 3 行，**v1.4.6 / v1.4.7 / v1.5.3 不可达**；`content/v1.5.3/` 连 `_index.md` 都没有，L1 层对它是断的 |
| **P5** | 「类覆盖不完全」 | 每棵桶索引必须列出目录下全部现有页；缺页要**如实写缺**，不静默。 | `content/v1.4.5/zh/api/campaign/_index.md` 有 1,361 个叶子、只列 56 个（其中 1,087 个是 orphan）。对照 `content/v1.4.5/en/api/campaign/_index.md` 有 1,360 个叶子、只列 18 个 |
| **P6** | 「有些文件夹是源码不是文档」 | `content/` 下只放文档。源码树不得作为导航目标。 | `tools/class-version-diff.mjs` 的 `ROOTS` 指向仓库根的 `bannerlord-*`，**不是** `content/` 路由 —— 它只能用来生成 `content/versions/` 的正文，不能用来生成站内链接 |
| **P7** | 「同名类在多个桶重复出现」 | 一个类型在一个版本树里只属于一个桶。发现重复 → 合并；新页用 `<Type>__<Namespace>.md` | **`ScreenBase` 同时存在于 `campaign-ext` 与 `gui`**：`content/v1.4.5/zh/api/campaign-ext/ScreenBase.md` **与** `content/v1.4.5/zh/api/gui/ScreenBase.md`（均已核实）。v1.3.15 同样双份 |
| **P8** | 「版本对读」 | 跨版本差异不得靠「两个版本树并排读」。一律走 `content/versions/` 或该版本自己的 `version-delta`。 | `tools/class-version-diff.mjs:11-15` 的 `ROOTS` 只支持 3 版。想比 1.4.7 与 1.5.3 在该工具下**不可能** |
| **P9** | （新）「按简写套链接，跳到隔壁去了」 | 不得把任何链接简写当公式套用。一切写法从 §4.1.0 的折叠规则推导，并按**写入位置**区分（§4.4）。 | 反例 D / E（§4.2）；以及叶子页写 `./Foo` 多一层（§4.1.0 对照） |

---

## 7. 硬前提的窄口例外

> ### ⚠ 本节是**第三层留痕**，不是治理文件
>
> **本节不构成治理授权。** 只读 `tools/lib/content-write-freeze.mjs` 就下结论的人会得到不同答案。
> 下个会话若出现这种情形，请一并查这三份：
>
> 1. `tools/lib/content-write-freeze.mjs` —— **lead-4 独占**，绝对表述正在改为「除下列显式登记条目外」，
>    并加显式 structural-only allowlist + `assertStructuralScope()` 断言。**本线任何人都碰不了它。**
> 2. `tools/RETIRED_BODY_GENERATORS.md` —— 本线独占，**策略登记表**。
> 3. 本文件 —— 只描述树的形状与链接写法，**不复述治理**。
>
> 写入边界的完整展开（为什么本项目倾向不用脚本、重复 marker 的缝）见
> `tools/_NAV-SECTION-INDEX-WRITE-DESIGN.md`（2026-10-03 从本文件误写覆盖中抢救的副本，归属待裁定）。

### 7.1 裁定（原文，不改写）

```text
允许：只写  <!-- BEGIN SECTION INDEX --> ... <!-- END SECTION INDEX --> 这两块之间的机械子页清单
禁止：写 marker 块之外的任何一行（包括散文、心智模型段、手写链接）
禁止：写任何非 _index.md 的文件（叶子类页一律手写，硬前提不动）
禁止：改动已有人工链接 —— 只能新增缺失项
必须：幂等，连跑两次第二次 0 改动，用 git diff 证明
必须：先 --dry-run 出报告，人看过，再落盘
必须：dry-run 报告里显式列出「本次会删除/改写的行数 = 0」，不为 0 就不许写
```

**这是对硬前提的修改，不是解释。** 留痕比圆场重要。

### 7.2 为什么只对 `_index.md` 成立

判据是**「这段内容有没有作者判断成分」**，不是「这是不是 Markdown」。

桶 `_index.md` 的子页清单是**机械清单**：其正确内容由「该目录下有哪些文件」唯一决定，
两个作者写出来一样。硬前提保护的是「机器不得生成正文」——散文、心智模型段、
方法用途、example 全都带作者判断。

> ⚠ **这个判据不得外推。** 「有作者判断成分 ⇒ 允许自动化」是对**内容性质**的判断，
> 不是文件类型的豁免清单。下次会话若想用它论证别的自动化，先回答：
> 那一段内容有没有作者判断成分？答「有」就自动出局。

### 7.3 护栏：外部断言，不是自述

```text
机制：  assertStructuralScope()  ——  由 lead-4 在 tools/lib/content-write-freeze.mjs 中提供
调用方：tools/nav-section-index.mjs 必须【调用】它，不得自己声明合规
行为：  越界时非零退出
顺序：  护栏必须先于写入器存在。等 lead-4 的 allowlist 条目落盘后才允许跑写入器。
```

**自述合规是承诺，断言是拦截。** 写入器不得在内部做「我检查过我没越界」这种自检。

> `tools/lib/content-write-freeze.mjs` 当前绝对口径原文（**读取时间 2026-10-03，
> lead-4 修改中，以落盘后为准**）：
>
> ```text
> HARD PREMISE (boss, user-directed): every page under content/ must be written
> by hand. No script may emit any .md under content/, regardless of accuracy,
> labelling, or prior authorisation. Generated content is withdrawn, not improved.
> ```
>
> 本节**一个字都不改**这段原文。例外以登记条目的形式追加在旁边。

### 7.4 与旧生成器禁用的关系

`tools/RETIRED_BODY_GENERATORS.md:75` 现状：`generate-section-indexes.mjs` =
**Retired — requires an explicit structural-only redesign before it may write index output**；
同表 `:76` `create-catalog-sections.mjs` / `:77` `ensure-sections.mjs` = **Structural-only**。

**禁用原因不是「它写坏了 `_index.md`」**。`git log --follow` + `df15c2ff8e`：
当时是 **45 个能写 `content/` 的脚本批量改名冻结**，防的是**误跑**。
⇒ 本裁定**相当于对 `generate-section-indexes.mjs` 的 structural-only 修复版**。

### 7.5 重复 marker 的分层裁定

实测 3 个文件 BEGIN=2 / END=1（§5 A10 列出路径）。

| 层 | 裁定 |
|---|---|
| **读模式** | 解析器必须容忍：确定性处理（第一个 BEGIN 到第一个 END），且**必须显式报告**重复位置与计数。不崩，也不悄悄当正常。 |
| **写模式** | **删除仍然禁止。** 本轮及第二轮都不许工具删那行。留作独立提案等单独裁定。 |

---

## 附录 A · 复算本文档全部数字的命令

```bash
cd C:/WorkSpace/Bannerlord/BannerlordCode.github.io

node tools/nav-verify.mjs                    # PAGES=39015 BROKEN_LINKS=426 ORPHANS=4312 ORPHAN_PARENTS=28
node tools/nav-verify.mjs --selftest         # ⚠ 当前 failures=32，见 A11
node tools/nav-verify.mjs --emit-baseline tools/_nav-baseline.tsv
node tools/_v146_orphan_check.mjs            # 孤儿口径的独立复核（须与 nav-verify 同数）
node tools/audit-links.mjs                   # 另一套口径（文件系统探针），数不同是正常的，见 §4.5

# §4.1.0 的路由规则阳性/阴性对照
node -e "const r='v1.3.0/zh/api/campaign/CampaignEvents/';
const res=(f,h)=>{const s=f.split('/').filter(Boolean);for(const x of h.split('/')){if(x==='.'||x==='')continue;if(x==='..')s.pop();else s.push(x);}return s.join('/')+'/'};
console.log('./MBEvent ->',res(r,'./MBEvent')); console.log('../MBEvent ->',res(r,'../MBEvent'))"

# 桶名集合（§2.1）
ls content/v1.4.5/zh/api content/v1.4.5/en/api

# 版本根索引缺口（§1.5）
ls content/v1.5.3/

# 重复 marker（§5 A10）
for f in $(grep -rl "BEGIN SECTION INDEX" content --include=_index.md); do
  echo "$(grep -c 'BEGIN SECTION INDEX' $f)/$(grep -c 'END SECTION INDEX' $f) $f"
done
```

## 附录 B · 与任务书描述不符的事实（留痕）

| # | 说法 | 实测 | 影响 |
|---|---|---|---|
| B1 | 「从桶 `_index.md` 上两层到版本首页 `../../`」 | `../../` 从桶落 `/<ver>/<lang>/`（语言首页）。版本首页要 `../../../` | §4 L3a/L3b。仓库实例：`content/v1.3.0/en/api/campaign/_index.md:10` 标着 `[Version Home](../../)` 但落在语言首页 |
| B2 | 「39,015 页」 | 对，但**其中 2 个是 `.txt`**（`content/v1.3.15/{en,zh}/native-1.3.15-src/ALL-FUNCTIONS-LIST.txt`）。`.md` 是 39,013 | 全树 `index.md` = 0 |
| B3 | 「域层 = architecture/api/guides/native」 | 真实 domain 是 **`guide`（单数）**，另有 **`xml-reference`**、`native-1.3.15-src` | §1.2 按真实名写 |
| B4 | 「六个版本树」 | 版本根 `_index.md` 只有 **5 个**；**v1.5.3 没有**，`/v1.5.3/` 路由不存在 | §1.5 记为 L1 层缺口 |
| B5 | 「结构是 `content/<version>/<lang>/api/<bucket>/<Class>.md`」 | 只在 v1.4.5 zh 树成立。桶名逐版不同，v1.4.6/v1.5.3 的 en 树**零个桶目录** | §2.1 逐版实测桶名表 |
| B6 | 「桶层 = `content/<version>/<lang>/api/<bucket>/`」 | 存在**第二级子桶**（`content/v1.4.5/zh/api/view/{MissionViews,Screens,Scripts,Tableaus}/`） | §1.5 / §4 L12 |
| B7 | 「orphan 只分布在 28 个父目录，前 8 是 …」 | ✅ 完全一致，数字也一致 | §5.1 |
| B8 | 「536 个 `_index.md`」 | ✅ 一致。但其中 **409 个所在目录没有任何叶子**；**529/535 个非根索引无父链** | §5 A2/A3 |
| B9 | （未提） | **全站 0 页链回站点首页**；站点首页自身是 4,312 orphan 里的 1 个 | §5 A4 |
| B10 | 「`ScreenBase` 实际在 `campaign-ext`，**不在** `gui`」 | **只对一半**：`ScreenBase` 在 `campaign-ext` 与 `gui` **两个桶里都有**（10 个文件核实）。只有 v1.4.6/1.4.7/1.5.3 是 `gui` 独占 | §4.2 反例 E 改为「两个桶都对」 |
| B11 | 「`GauntletLayer` 实际在 `engine`」 | ✅ 成立：10 棵树全在 `engine`，`mission-ext` 命中 0 | §4.2 反例 D，并补根因 |
| B12 | （未提）`tools/_HANDOFF.md` §4 门禁第 7 条「同桶兄弟 `../Foo`」 | 该简写**只在叶子页成立**；在桶 `_index.md` 里应是 `./Foo`。两处简写都不完整 | §1.3 / §4.1 / §4.4 已改为推导式 |

## 附录 C · 事故记录（已发生，写下来是为了下次不重犯）

### C1 · 把正则当字符串切分：`split('\r?\n/')`

- **形态**：护栏断言里写了 `text.split('\r?\n/')`——把正则当成字符串字面量，
  于是它不是「按换行切」，而是「按字面字符 `\r?\n/` 切」。断言因此结构性地失效。
- **失效方向**：**报假失败**（不是假通过）。字面量在正文里几乎不出现，切出来往往是一整块，
  块外对比必然不等，于是断言总是报越界。
- **为什么比假通过更隐蔽**：一个**总是报越界**的护栏，会诱导人去关掉它、降成 warning、
  或给它加白名单——而这些动作会把一个「应该拦住写入」的断言变成「从不拦住写入」。
  **假通过让人放心，假失败让人拆掉防线。**
- **规范**：断言里任何看起来像正则的东西必须是 `/…/` 或 `new RegExp(...)`。
  提交前用阳性对照验一次：**输入一段已知合法的正文，断言必须通过**。
  一个从不通过的断言，与一个从不运行的断言同样无用。

### C2 · 层级分类器的层级 bug

来源：worker-5 自查发现路由语义分类器把 `../` 误标成 `LANG_HOME`，已修，selftest 20/20 绿。

**规范**：「能解析但标错层」与「能解析但落错层」是同一类静默缺陷——都返回 exit 0，
都产出一份看起来合理的报告。任何按层级语义分类的解析器必须有**覆盖每层各一个**的
阳性对照 fixture，且断言是**分层**的（返回的层 == 期望的层），不是只断言「解析成功了」。
见 §5 A13。

### C3 · 自链同时躲过 orphan 与断链两道门禁

见 §5 A12.2。当时只当作「数字口径的已知机制缺陷」（`_HANDOFF.md` §3.4），
后来才显出它有真实后果：**页面可以「有入链」而实际没跳到任何地方**。

### C4 · 文件名误写覆盖，独占文件被销毁

**发生**：2026-10-03，另一条工作线把它的设计文档写进了 `tools/_NAV-ARCHITECTURE.md`
（本线独占文件），覆盖掉本线 792 行 / ~45KB 的规范。
该文件 **untracked**，`git log` 无任何历史，**无法 checkout 恢复**。

**处置**：先把对方原文**逐字**抢救到 `tools/_NAV-SECTION-INDEX-WRITE-DESIGN.md`，
再恢复本线文档。**没有销毁任何一方内容。**

**规范**：
1. **独占文件第一次落盘后立刻告诉 lead**，让归属进入团队状态，而不是只存在于一个人的 brief 里。
2. **untracked 的独占文档没有恢复路径。** 交付物应当尽早进入版本控制，或至少有一份异地副本。
3. 发现别人写了你的独占文件时，**第一动作是抢救，不是覆盖**。
   覆盖能把冲突变成静默的数据丢失；抢救能把冲突变成一次显式的裁定请求。

### C5 · 把「位置相关」的规则写成不带条件的简写

见 §4.4。简写在它成立的那个上下文里永远是对的，所以错误不会在写规则时暴露，
只会在别人套用时静默失效。**能从折叠规则推导出来的，就写推导。**

**本条的自证素材（本线自己的错，已改）**：本文档的第一版把
`content/v1.3.0/zh/api/campaign/CampaignEvents.md` 里的 `../MBEvent`
当成反例，并写下了「叶子页要指同桶兄弟必须写 `./MBEvent`，不是 `../MBEvent`」。

**这句话是错的。** `../MBEvent` 正是叶子页的正确写法（`./MBEvent` 会多一层）。
成因就是本节：写成了「同桶兄弟 `./Foo`」这种不带条件的简写，
写的人（我）把它套到叶子页上，就得出了一句看起来很有依据的错误规范。

> **「本条曾写反，经 worker-6 实测对照修正」——留痕比悄悄改对更重要。**
> 不写这一句，下个会话读到第一版的残留物（若有）可能又照抄回去。

---

## 附录 B 补 · §5.1 A1 的当前分布（修 orphan 的优先级）

```
1087  v1.4.5/en/api/campaign/        ← 最大的一块
 871  v1.4.5/zh/api/campaign/
 781  v1.4.5/zh/api/campaign-ext/
 671  v1.4.5/zh/api/mission-ext/
 500  v1.4.5/zh/api/viewmodel/
 259  v1.4.5/zh/api/gui/
  68  v1.4.5/en/api/mission/
  19  v1.4.5/zh/api/mission/
  11  v1.5.3/zh/api/storymode/
   9  v1.3.15/en/api/campaign-ext/
   8  v1.3.15/zh/api/campaign-ext/
   8  v1.4.5/zh/api/core-extra/
  … 共 28 个父目录，合计 4,312
by_tree: v1.3.0=2  v1.3.15=27  v1.4.5=4269  v1.4.6=0  v1.4.7=1  v1.5.3=12  (根)=1
```

前 8 个目录合计 4,256 / 4,312 = **98.7%**（分母已量）。

> **修 orphan 的唯一有效动作**：orphan 的定义是「没有任何页链到它」，
> 所以只有一种修法：在某个非孤儿页上加一条指向它的链接。
> **常见错误修法**是「把它加进自己的父桶 `_index.md` 的清单」——如果那个父桶索引本身也是 orphan，
> 这条链不改变任何东西。**先查来源页是不是非 orphan，再决定链加在哪。**

### B9 之外的新发现（补记）

- **全站 0 页链回站点首页**（route `''`）→ 已立为 A4。
- **全树 `index.md` 数量 = 0**；536 个索引全部叫 `_index.md`。
- **A13 的护栏已当场抓到过本工具自己的 bug**：`../` 曾被误标成 `LANG_HOME`。