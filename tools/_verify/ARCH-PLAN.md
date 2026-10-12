# ARCH-PLAN.md — 开发者大局观手册线 · 架构计划

> **负责人**: lead-15  
> **创建时间**: 2026-10-07  
> **状态**: 已批准（boss-3 #10144），带两条修正：① 每页必须同时产出 zh + en；② worker-G/H 改为「移植」而非「复制」

---

## 1. 现有架构 hub 页清单

**数据来源**: `tools/_verify/arch-existing-pages.tsv`（worker-86 产出）  
**总计**: 47 页，覆盖 6 个版本

| 版本 | 页数 | 页面列表 |
|------|------|----------|
| v1.3.0 | 6 | `_index`, `module-system`, `native-interop`, `save-system`, `sdk-overview`, `version-delta` |
| v1.3.15 | 12 | `_index`, `crash-boundaries`, `developer-roadmap`, `doc-contract`, `module-system`, `native-interop`, `noise-policy`, `sandbox-native-policy`, `save-system`, `scenario-acceptance-E`, `sdk-overview`, `version-delta` |
| v1.4.5 | 15 | `_index`, `crash-boundaries`, `crash-boundary`, `developer-roadmap`, `doc-contract`, `milestone-report`, `module-system`, `native-interop`, `noise-policy`, `roadmap`, `sandbox-native-policy`, `save-system`, `scenario-acceptance-E`, `sdk-overview`, `version-delta` |
| v1.4.6 | 4 | `_index`, `module-map`, `sdk-overview`, `version-delta` |
| v1.4.7 | 6 | `_index`, `module-system`, `save-system`, `sdk-overview`, `ui-stack`, `version-delta` |
| v1.5.3 | 4 | `_index`, `migration-from-1.4.5`, `module-map`, `sdk-overview` |

**注意**: v1.3.15 的 `module-system.md` 缺少 H1 标题（空列）。

---

## 2. 源码证据清单

**数据来源**: `tools/_verify/arch-topic-evidence.tsv`（worker-87 产出）  
**总计**: 8 条证据，覆盖 4 个主题

| 主题 | 文件:行号 | 符号 |
|------|-----------|------|
| 模块系统/加载 | `Module.cs:30` | `public sealed class Module : DotNetObject, IGameStateManagerOwner` |
| 模块系统/加载 | `ModuleInfo.cs:13` | `public readonly List<SubModuleInfo> SubModules` |
| GameModel 装饰模式 | `CampaignGameStarter.cs:59` | `public T GetModel<T>() where T : GameModel` |
| GameModel 装饰模式 | `CampaignGameStarter.cs:76` | `public void AddModel<T>(MBGameModel<T> gameModel) where T : GameModel` |
| 存档系统 | `SaveManager.cs:13` | `public static class SaveManager` |
| 存档系统 | `SaveableCampaignTypeDefiner.cs:40` | `public class SaveableCampaignTypeDefiner : SaveableTypeDefiner` |
| Mission/UI 边界 | `MissionBehavior.cs:9` | `public abstract class MissionBehavior : IMissionBehavior` |
| Mission/UI 边界 | `ViewModel.cs:9` | `public abstract class ViewModel : IViewModel, INotifyPropertyChanged` |

**关键版本差异观察**: 1.3.15 的源码树使用展开的 `TaleWorlds.*` 文件夹（每个程序集一个文件夹），而 1.4.5 使用 `Bannerlord.Source/bin/TaleWorlds.*/TaleWorlds.*/` 嵌套结构，并引入了 `Modules.*` 文件夹（`Modules.SandBox`、`Modules.StoryMode`、`Modules.Native` 等）用于游戏模块。

---

## 3. 缺口清单

### 3.1 跨版本通用缺口（所有版本都缺）

| 缺口 | 职责 | 优先级 |
|------|------|--------|
| **GameModel 装饰模式** | 解释 `CampaignGameStarter.AddModel<T>` / `MBGameModel<T>` 装饰模式，含 `GetModel<T>()` 读取、`Initialize(T)` 注入 BaseModel 的机制 | P0 |
| **Campaign 事件系统** | `CampaignEvents` 事件总线机制，Behavior 如何订阅/取消订阅，事件时机与生命周期 | P0 |
| **Mission 生命周期** | `Mission` 从创建到销毁的完整生命周期，`MissionState.OpenNew` 工厂模式，`MissionBehavior` 注册时机 | P0 |
| **UI 三层架构** | `ScreenManager` / `GauntletLayer` / `ViewModel` 三层职责边界，Screen 生命周期与 VM 绑定 | P1 |
| **存档对象图** | `SaveableTypeDefiner` / `SaveContext` / `LoadContext` / `DefinitionContext` 协作机制，自定义类如何进入存档图 | P1 |
| **Action 家族** | `*Action.Apply` 模式统一入口，为什么不能直接改字段，Action 与事件级联的关系 | P1 |

### 3.2 版本特定缺口

| 版本 | 缺口 | 职责 |
|------|------|------|
| v1.3.0 | 缺少 `crash-boundaries` | 崩溃边界页（可复用 v1.3.15 的） |
| v1.3.0 | 缺少 `developer-roadmap` | 开发者路线图（可复用 v1.3.15 的） |
| v1.4.6 | 缺少 `crash-boundaries` | 崩溃边界页 |
| v1.4.6 | 缺少 `developer-roadmap` | 开发者路线图 |
| v1.4.6 | 缺少 `module-system` | 模块系统详解 |
| v1.4.6 | 缺少 `save-system` | 存档系统 |
| v1.4.6 | 缺少 `native-interop` | 托管/原生互操作 |
| v1.4.7 | 缺少 `crash-boundaries` | 崩溃边界页 |
| v1.4.7 | 缺少 `developer-roadmap` | 开发者路线图 |
| v1.4.7 | 缺少 `native-interop` | 托管/原生互操作 |
| v1.5.3 | 缺少 `crash-boundaries` | 崩溃边界页 |
| v1.5.3 | 缺少 `developer-roadmap` | 开发者路线图 |
| v1.5.3 | 缺少 `module-system` | 模块系统详解 |
| v1.5.3 | 缺少 `save-system` | 存档系统 |
| v1.5.3 | 缺少 `native-interop` | 托管/原生互操作 |

---

## 4. 计划新增/重写的页清单

### 4.1 核心新增页（P0，所有版本通用）

| 页名 | 职责 | 目标树 | 语言 |
|------|------|--------|------|
| `gamemodel-decorator.md` | GameModel 装饰模式：`CampaignGameStarter.AddModel<T>` / `MBGameModel<T>` 机制，含 `GetModel<T>()` 读取、`Initialize(T)` 注入 BaseModel，附真实 mod 示例 | v1.3.15, v1.4.5, v1.4.6, v1.4.7, v1.5.3 | zh |
| `campaign-events.md` | Campaign 事件系统：`CampaignEvents` 事件总线，Behavior 订阅/取消订阅，事件时机与生命周期 | v1.3.15, v1.4.5, v1.4.6, v1.4.7, v1.5.3 | zh |
| `mission-lifecycle.md` | Mission 生命周期：`Mission` 创建到销毁，`MissionState.OpenNew` 工厂，`MissionBehavior` 注册时机 | v1.3.15, v1.4.5, v1.4.6, v1.4.7, v1.5.3 | zh |
| `ui-three-layers.md` | UI 三层架构：`ScreenManager` / `GauntletLayer` / `ViewModel` 职责边界，Screen 生命周期与 VM 绑定 | v1.3.15, v1.4.5, v1.4.6, v1.4.7, v1.5.3 | zh |
| `save-object-graph.md` | 存档对象图：`SaveableTypeDefiner` / `SaveContext` / `LoadContext` / `DefinitionContext` 协作，自定义类进入存档图 | v1.3.15, v1.4.5, v1.4.6, v1.4.7, v1.5.3 | zh |
| `action-family.md` | Action 家族：`*Action.Apply` 统一入口，为什么不能直接改字段，Action 与事件级联 | v1.3.15, v1.4.5, v1.4.6, v1.4.7, v1.5.3 | zh |

### 4.2 重写/增强页（P1）

| 页名 | 职责 | 目标树 | 语言 |
|------|------|--------|------|
| `sdk-overview.md` | 增强：加入 GameModel 装饰模式、Campaign 事件、Mission 生命周期的分层说明 | 所有版本 | zh |
| `module-system.md` | 增强：加入 `Module` / `ModuleInfo` / `SubModule` 的加载顺序与依赖解析 | 所有版本 | zh |
| `save-system.md` | 增强：加入 `SaveableTypeDefiner` / `SaveContext` / `LoadContext` 协作图 | 所有版本 | zh |
| `version-delta.md` | 增强：加入 1.4.5 的 `Modules.*` 文件夹变化说明 | v1.4.5, v1.4.6, v1.4.7, v1.5.3 | zh |

### 4.3 版本特定新增页

| 页名 | 职责 | 目标树 | 语言 |
|------|------|--------|------|
| `crash-boundaries.md` | 从 v1.3.15 复制并适配 | v1.3.0, v1.4.6, v1.4.7, v1.5.3 | zh |
| `developer-roadmap.md` | 从 v1.3.15 复制并适配 | v1.3.0, v1.4.6, v1.4.7, v1.5.3 | zh |
| `module-system.md` | 从 v1.3.15 复制并适配 | v1.4.6, v1.5.3 | zh |
| `save-system.md` | 从 v1.3.15 复制并适配 | v1.4.6, v1.5.3 | zh |
| `native-interop.md` | 从 v1.3.15 复制并适配 | v1.4.6, v1.4.7, v1.5.3 | zh |

---

## 5. Worker 单元划分

### 5.1 已完成的只读 worker

| Worker | 任务 | 产出文件 | 状态 |
|--------|------|----------|------|
| worker-86 | 列出所有架构 hub 页 | `tools/_verify/arch-existing-pages.tsv` | ✅ 完成 |
| worker-87 | 收集源码证据 | `tools/_verify/arch-topic-evidence.tsv` | ✅ 完成 |
| worker-88 | 完整 census（含命令与原始输出） | `tools/_verify/arch-census-raw.md` | 🔄 运行中 |
| worker-90 | 完整 census（含命令与原始输出） | `tools/_verify/arch-census-raw.md` | 🔄 运行中 |

### 5.2 计划中的写作 worker（已批准，带修正）

**修正 ①**: 每页必须同时产出 zh + en（双语约定）。
**修正 ②**: worker-G/H 改为「移植」而非「复制」——每页在目标版本树里重新核源，逐条保留/删改，报告差异。

| Worker | 负责页 | 目标树 | 产出文件 | 备注 |
|--------|--------|--------|----------|------|
| worker-A | `gamemodel-decorator.md` | v1.3.15 | `content/v1.3.15/zh/architecture/gamemodel-decorator.md` + `content/v1.3.15/en/architecture/gamemodel-decorator.md` | 双语 |
| worker-B | `campaign-events.md` | v1.3.15 | `content/v1.3.15/zh/architecture/campaign-events.md` + `content/v1.3.15/en/architecture/campaign-events.md` | 双语 |
| worker-B（补充） | `campaign-event-system.md` | v1.3.15 | `content/v1.3.15/zh/architecture/campaign-event-system.md` + `content/v1.3.15/en/architecture/campaign-event-system.md` | 双语；实际产出，与 `campaign-events.md` 分工互补 |

**worker-B 实际产出登记（2026-10-07）**: 计划名 `campaign-events.md`，实际产出两页（均双语、互链）：
- `campaign-event-system.md` = 三类协作心智模型（`CampaignEvents` / `CampaignEventDispatcher` / `CampaignEventReceiver` 如何协作）
- `campaign-events.md` = 事件总线机械原理 + 接入手册（Behavior 订阅/退订、事件时机与生命周期）
两页均已存在且 0 断链；避免下一批按计划名判「缺页」再重派（今日已发生 3 次）。
| worker-C | `mission-lifecycle.md` | v1.3.15 | `content/v1.3.15/zh/architecture/mission-lifecycle.md` + `content/v1.3.15/en/architecture/mission-lifecycle.md` | 双语 |
| worker-D | `ui-three-layers.md` | v1.3.15 | `content/v1.3.15/zh/architecture/ui-three-layers.md` + `content/v1.3.15/en/architecture/ui-three-layers.md` | 双语 |
| worker-E | `save-object-graph.md` | v1.3.15 | `content/v1.3.15/zh/architecture/save-object-graph.md` + `content/v1.3.15/en/architecture/save-object-graph.md` | 双语 |
| worker-F | `action-family.md` | v1.3.15 | `content/v1.3.15/zh/architecture/action-family.md` + `content/v1.3.15/en/architecture/action-family.md` | 双语；**两阶段形态**（见下） |

**两阶段形态（boss-3 #12637，2026-10-07）**: 单阶段（读+写）必进读循环；改为每页一对 worker：
- **阶段一（只读，落盘证据）**：worker 只交 `tools/_verify/arch-evidence/<slug>.md`，含 ① 目标类/成员源文件路径+声明行号（贴 grep 命令与原始输出）② 逐成员一行：签名|文件:行号|它做什么 ③ ≥3 条可编译调用示例候选（带 file:行号）④ 三条协作/层级关系 file:行号 证据 ⑤ 该页现在是否存在/字节数/六节情况。**禁止写正文、禁止继续读别的文件**（证据够 5 条就停）。
- **阶段二（只写，不读源码）**：worker 拿到阶段一证据文件内容（直接贴在 brief 里），只做「把证据写成正文并落盘」。**不允许再去读源码**。要求：六节齐全+逐成员+引用边界检查+U+FFFD=0+补父索引链+批前/批后 audit-links 两套数。
- **并发**: 每页一对 worker，仍守并发 ≤2。
| worker-G | 移植 `crash-boundaries.md` 到 v1.3.0/v1.4.6/v1.4.7/v1.5.3 | 多版本 | 各版本 `content/*/zh/architecture/crash-boundaries.md` + `content/*/en/architecture/crash-boundaries.md` | 移植：重新核源，报告差异 |
| worker-H | 移植 `developer-roadmap.md` 到 v1.3.0/v1.4.6/v1.4.7/v1.5.3 | 多版本 | 各版本 `content/*/zh/architecture/developer-roadmap.md` + `content/*/en/architecture/developer-roadmap.md` | 移植：重新核源，报告差异 |

**注意**: 每个 worker 必须拿到明确的 files 清单 + 验收判据 + 要产出的文件名 + 落盘路径。

---

## 6. 验收判据

### 6.0 节 schema 声明（必读，先于 6.1）

本仓类页规范六节为：**概述 / 心智模型 / 怎么用（怎么拿到 = 源树 + `file:行号` + 入口）/ 关键成员（逐成员说明用途）/ 真实示例 / 参见**。

**架构 hub 页形态可以不同**，但每一页必须在文件里显式声明它用的是哪套节 schema，以及与规范六节的映射关系。

已验收试点 `gamemodel-decorator.md` 的实际节 → 规范节映射：

| 实际节（hub 形态） | 承担的规范节 |
|---|---|
| `## 一句话定位` | 概述 |
| `## 心智模型` | 心智模型 |
| `## 真实最小示例`（含 `### 关键源码位置`） | 怎么用（怎么拿到）+ 真实示例 |
| `## 常见误用` | 心智模型（何时不要用）的展开 |
| `## 导航` | 参见 |

⇒ 架构 hub 页**不要求**逐成员节（它按机制/层组织，不按类型成员组织）。

### 6.0b 类页硬判据（缺即判未通过）

> **用户最核心的要求是「这个类里面每个方法是做什么用的」。**

凡交付的是**类页**（`content/<ver>/<lang>/api/**/<TypeName>.md`），必须含一个「**关键成员 / 主要成员**」节，**逐成员一行说明用途**。

- 只列签名（`public void Foo(int x)`）**不算**——那是脚本能生成的。
- 缺这一节的类页 **判为未通过**，即使六节其它部分齐全。
- 架构 hub 页不受本条约束（见 6.0 的 schema 声明）。

### 6.0c 补链与 orphan 复测（每批硬判据）

> 新页无入链 ⇒ 每写一页多一个 orphan。用户的「树状、能跳回来」要求会直接崩。

**常设规则**：每写出一页，必须在**同一批里**把它接进所属父索引的机械子页清单（如 `content/v1.3.15/{zh,en}/architecture/_index.md`）。

做法：
1. 每批收尾跑一次补链：`node tools/nav-section-index.mjs`（有护栏、幂等、只动 `<!-- BEGIN/END SECTION INDEX -->` 块），或由 worker 手写补进该块内。
2. 收尾复测：`node tools/nav-orphans.mjs --by-parent`。
3. 报告里**批前 / 批后两个 orphan 数都要给**；要求**该批不让 orphan 上升**。

**这一条不达标，批不算完成。**

---

### 6.1 每页必须包含

1. **Frontmatter**: `title`, `description`（有信息量）
2. **一句话定位**: 去掉类名仍能懂
3. **心智模型**: 是什么、何时用、何时不要用、怎么用、依赖谁、出错会怎样
4. **真实最小示例**: 可编译的 csharp，逐条核源、带 `file:行号`
5. **常见误用**: 至少 3 条
6. **树状导航**: `↑ Parent` / `↔ Sibling` / `↓ Children` / 相关类型
7. **相关类页链接**: 相对链接，目标必须存在
8. **节 schema 声明**（见 6.0）
9. **补链已执行**（见 6.0c）

### 6.2 链接规则

- 同行 leaf 用 `[X](../X)`
- 父节索引用 `[..](../)`
- 跨子目录用 `[X](../../<subdir>/<X>)`
- 绝不直接链 `_index.md`

### 6.3 数字必须附命令

- 凡报「N 处」，必须能说出还有哪一类没被计入
- 报数写「HEAD 口径 + 命令」+ 当时的 policy 文件 mtime

---

## 7. 进度追踪

| 阶段 | 状态 | 备注 |
|------|------|------|
| 只读阶段 | ✅ 完成 | worker-86/87 已交付 |
| ARCH-PLAN 落盘 | ✅ 完成 | 本文件 |
| ARCH-PLAN 验收 | ✅ 完成 | boss-3 #10144 批准，带两条修正 |
| 写作阶段 | 🔄 进行中 | worker-A/B/C 已交付（gamemodel-decorator / campaign-events+bEvent-system / mission-lifecycle）；**第一批 P0-4/5/6（ui-three-layers / save-object-graph / action-family）已派 worker-D/E/F** |
| 验收阶段 | ⏳ 待开始 | 写作完成后进行 |

**lead-19 接手（2026-10-07）**: 实测门禁基线 BROKEN_LINKS=0 / orphans=0。`campaign-events.md` 已交付但**尚未入 `_index.md` SECTION INDEX**（当前靠 `campaign-event-system.md` 互链兜底，orphan=0）——第一批收尾时一并补入索引。进度落盘见 `tools/_verify/lead-arch2-PROGRESS.md`。

---

## 8. 风险与依赖

1. **源码树不完整**: 1.3.0 缺少 `TaleWorlds.ObjectSystem` 和 `MBObjectManager.cs`，对 1.3.0 尤其弱
2. **反编译产物**: 1.4.5 是 ILSpy 10.1.0 反编译产物，`//IL_` 标注覆盖 1,827/8,583 文件，0 个 `.xml`
3. **文件系统慢**: worker-88/90 报告文件系统响应慢，可能需要更长超时
4. **merge 后外壳变化**: `templates/**`、`config.toml`、`content/_index.md`、`content/versions/_index.md` 已更新，架构树需接进新外壳

---

**计划版本**: v1.0  
**最后更新**: 2026-10-07
