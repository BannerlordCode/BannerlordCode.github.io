---
title: "Bannerlord v1.4.7"
description: "v1.4.7 模组开发文档入口：按命名空间划分的 17 个 API 子系统目录、中英两棵树，以及实测的版本差异。当前全树 42 篇正文与 40 个目录索引。"
---
# Bannerlord v1.4.7

v1.4.7 的模组开发文档。这一页是整个版本的入口：选语言，然后往下走。整棵树是可往返的 —— 每一页都能一步步走回这里。

| 语言 | 入口 | 当前规模 |
| --- | --- | --- |
| 中文 | [v1.4.7 中文文档](./zh/) | 23 篇 API 类页 + 5 篇架构页 + 17 个子系统目录索引 |
| English | [v1.4.7 English documentation](./en/) | 8 API class pages + 5 architecture pages + 16 subsystem index pages |

## 先说清楚现在有什么

这一节的数字很重要，因为它们和这个版本**理论上的**大小差得很远。v1.4.7 源码树有 11,387 个 `.cs` 文件、按命名空间可以划成 17 个子系统桶；但那 3,598 篇由脚本批量生成的类页已经从文档树里撤出，不再对外提供。当前磁盘上真实存在的是：

- **42 篇正文**：31 篇 API 类页（中 23 / 英 8）、10 篇架构页（中英各 5）、1 篇版本根的 [GAPS](./GAPS)。
- **40 个目录索引**：版本根 1 个、语言首页 2 个、API 总入口 2 个、架构入口 2 个、子系统桶索引 33 个（中 17 / 英 16）。
- 每个子系统桶的目录里，都写着它覆盖哪个命名空间、约有多少类型，以及这个桶现在有几页。没有页面的桶如实写"本区当前没有页面"。

换句话说：**这是一棵小而手写的小树，而不是一棵生成出来的全树。** 下面每一张表里的数字都是当前的真实页数，不是计划页数。想知道哪些类型还没有页面，看 [GAPS](./GAPS) 或者各桶索引页自己的说明。

## v1.4.7 是什么

v1.4.7 是 1.4 系列的一个小版本增量。对模组作者来说它相对 1.4.5 **几乎全是增量**：

- 源码树 `bannerlord-1.4.7/` 有 **11,387** 个 `.cs` 文件，分在 96 个程序集目录下。
- 在两边源码转储都覆盖到的 361 个命名空间里，**被删除的类型数是 0**。
- 新增的 482 个类型里，**390 个是 `System.*` / BCL 噪声**。

**真正变化的是目录的组织方式。** 1.4.7 的树按命名空间重新划分成 17 个子系统目录，一个类型只属于一个目录。1.4.5 的树里同一个类型名出现在两个目录共 **2,199** 次、513 个命名空间里有 **171** 个被拆散到多个目录 —— "点进去发现是别的地方、再也回不来"是这个结构造成的，不是内容的问题。v1.4.7 把它变成了硬约束。

## 与相邻版本的差别

| | 1.3.15 | 1.4.5 | 1.4.6 | 1.4.7 |
| --- | --- | --- | --- | --- |
| 源码 `.cs` 数量 | 5,196 | 8,583（转储不完整，缺 35 个程序集目录） | — | 11,387 |
| 对模组有破坏的删除 | — | — | — | 1.3.15 → 1.4.7 共 **9 个类型**消失 |
| 文档目录 | A–Z 类型列表 | 22 个手写目录，彼此重复 | 未接入站点导航 | 17 个按命名空间规则划分的目录 |
| 同一类型多 URL | 无 | **2,199 个重复** | — | **0**（硬约束） |

从 1.3.15 升到 1.4.7 时消失的 9 个类型里，值得优先检查的两个：

| 类型 | 命名空间 | 谁会受影响 |
| --- | --- | --- |
| `EquipmentFlags` | `TaleWorlds.Core` | 任何直接读装备位标志枚举的模组 |
| `MissionAgentSpawnLogic` | `TaleWorlds.MountAndBlade` | 自定义任务里控制 Agent 生成的战斗模组 |

其余 7 个（`FormationSpawnData`、`OrderReturnButtonWidget`、`MapEventResultExplainer`、`OpenGlLoadException`，以及 `TaleWorlds.MountAndBlade.Diamond` 下的 3 个平台层类型）对普通模组无影响。完整的测量方法、数据表和升级检查清单见 [版本差异](./zh/architecture/version-delta)（[English](./en/architecture/version-delta)）。

## 模组作者从这里开始

| 我想做的事 | 先读 | 再读 |
| --- | --- | --- |
| 让模组被加载 | [模块系统](./zh/architecture/module-system) | [Core](./zh/api/core/) |
| 在战役里挂行为 | [模块系统](./zh/architecture/module-system) | [Campaign-Ext](./zh/api/campaign-ext/) |
| 改钱、关系、部队 | [Campaign-Ext](./zh/api/campaign-ext/) | [Campaign](./zh/api/campaign/) |
| 做界面 | [界面栈](./zh/architecture/ui-stack) | [GUI](./zh/api/gui/) |
| 存自己的数据 | [存档系统](./zh/architecture/save-system) | [Save System](./zh/api/save-system/) |
| 用调试控制台 | [Engine](./zh/api/engine/) | [MBDebug](./zh/api/engine/MBDebug) |
| 搞清楚引用哪个程序集 | [SDK 总览](./zh/architecture/sdk-overview) | [API 参考](./zh/api/) |
| 排查升级后炸了 | [版本差异](./zh/architecture/version-delta) | [跨版本类对比](../versions/) |
| 查某个类型有没有页面 | [GAPS](./GAPS) | [API 参考](./zh/api/) |

## 17 个 API 子系统目录（中文树，当前页数）

有页的桶先列，因为这些是你现在能点进去读到的：

| 目录 | 覆盖 | 当前页数 |
| --- | --- | ---: |
| [Campaign](./zh/api/campaign/) | `TaleWorlds.CampaignSystem` 本体 | 5 |
| [Mission](./zh/api/mission/) | 战斗入口类 `Mission` / `Agent` / `MissionState` / `MissionBehavior` | 4 |
| [GUI](./zh/api/gui/) | `ScreenSystem` / `GauntletUI` / `TwoDimension` | 3 |
| [Save System](./zh/api/save-system/) | `TaleWorlds.SaveSystem` | 3 |
| [Core](./zh/api/core/) | 模块加载入口 `Module` / `MBSubModuleBase` | 2 |
| [Core-Extra](./zh/api/core-extra/) | `TaleWorlds.Core` 长尾 + 分类法兜底桶 | 2 |
| [Campaign-Ext](./zh/api/campaign-ext/) | `CampaignSystem` 子命名空间 + `ObjectSystem` | 2 |
| [Engine](./zh/api/engine/) | `TaleWorlds.Engine` + `Diamond` 访问层 | 2 |

以下 9 个目录存在、有索引页，但当前页数为 0：

[Mission-Ext](./zh/api/mission-ext/)（约 669 个类型，缺口最大）· [ViewModel](./zh/api/viewmodel/)（约 357）· [Sandbox](./zh/api/sandbox/)（约 321）· [CustomBattle](./zh/api/custombattle/)（约 41）· [Network](./zh/api/network/)（约 38）· [System](./zh/api/system/)（约 20）· [ModuleManager](./zh/api/modulemanager/)（8）· [ActivitySystem](./zh/api/activitysystem/)（6）· [AchievementSystem](./zh/api/achievementsystem/)（4）

**没有 `gameplay/` 目录，也没有 `navigationsystem/` 目录。** 前者被拆进 `sandbox`（见 [版本差异](./zh/architecture/version-delta)）；后者在 1.4.7 里没有任何公开类型，归入 `core-extra`。

**英文树的形状和中文树不同。** 英文侧目前只有 `campaign`（5 页）、`campaign-ext`（2 页）、`core`（1 页）有内容；`save-system` 在英文树下**连目录都没有**，那三个页面目前只在中文树里。英文桶索引页由另一条工作线同步维护，页数以各目录自己的索引页为准。

## 这个站点的导航是树状的

```text
类页 → 同目录索引 → 17 个子系统目录 → API 参考 → 语言首页 → 版本首页
```

每一跳都是可解析的真实相对链接。每个目录都有自己的索引页，索引页列出该桶的全部现有页面，并同时链回父级和**全部 16 个兄弟桶** —— 所以从任何一个桶跳到相邻桶，再跳回来，不会断。

## 参见

- ↔ [中文文档](./zh/) · [English documentation](./en/)
- ↘ [缺口清单](./GAPS)
- ↘ [跨版本类对比](../versions/)
- ↘ [v1.4.5 文档](../v1.4.5/) · [v1.4.6 文档](../v1.4.6/) · [v1.3.15 文档](../v1.3.15/) · [v1.3.0 文档](../v1.3.0/)