---
title: "Bannerlord v1.4.7"
description: "v1.4.7 模组开发文档入口：对 1.4.5 / 1.3.15 的实测差异、按命名空间重建的 19 个 API 子系统目录，以及两张语言的导航。"
---
# Bannerlord v1.4.7

v1.4.7 的模组开发文档。这一页是整个版本的入口：往下选语言，之后每一页都能一步步走回这里。

| 语言 | 入口 | 说明 |
| --- | --- | --- |
| 中文 | [v1.4.7 中文文档](./zh/) | 1,795 个类页面 + 6 张架构页 + 19 个子系统目录索引 |
| English | [v1.4.7 English documentation](./en/) | Mirror of the Chinese tree; identical directory set and page set |

## v1.4.7 是什么

v1.4.7 是 1.4 系列的一个小版本增量。从模组作者的角度看，它相对 1.4.5 **几乎全是增量**：

- 源码树 `bannerlord-1.4.7/` 有 **11,387** 个 `.cs` 文件，分在 96 个程序集目录下。
- 在两边源码转储都覆盖到的 361 个命名空间里，**被删除的类型数是 0**。
- 新增的 482 个类型里，**390 个是 `System.*` / BCL 噪声**。

**真正变化的是文档的组织方式。** 1.4.7 树按命名空间重新划分成 19 个子系统目录，一个类型只属于一个目录。1.4.5 的树里同一个类型名出现在两个目录共 **2,199** 次、513 个命名空间里有 **171** 个被拆散到多个目录 —— "点进去发现是别的地方、再也回不来"是这个结构造成的，不是内容的问题。v1.4.7 把它变成了硬约束。

## 与相邻版本的差别

| | 1.3.15 | 1.4.5 | 1.4.6 | 1.4.7 |
| --- | --- | --- | --- | --- |
| 源码 `.cs` 数量 | 5,196 | 8,583（转储不完整，缺 35 个程序集目录） | — | 11,387 |
| 对模组有破坏的删除 | — | — | — | 1.3.15 → 1.4.7 共 **9 个类型**消失 |
| 文档目录 | A–Z 类型列表 | 22 个手写目录，彼此重复 | 未接入站点导航 | 19 个按命名空间规则生成 |
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
| 搞清楚引用哪个程序集 | [SDK 总览](./zh/architecture/sdk-overview) | [API 参考](./zh/api/) |
| 排查升级后炸了 | [版本差异](./zh/architecture/version-delta) | [跨版本类对比](../versions/) |

## 这个版本的 19 个 API 目录

| 目录 | 页面 | 目录 | 页面 |
| --- | ---: | --- | ---: |
| [Mission-Ext](./zh/api/mission-ext/) | 1,669 | [Save System](./zh/api/save-system/) | 110 |
| [Core-Extra](./zh/api/core-extra/) | 1,099 | [Network](./zh/api/network/) | 41 |
| [Campaign-Ext](./zh/api/campaign-ext/) | 601 | [CustomBattle](./zh/api/custombattle/) | 40 |
| [Campaign](./zh/api/campaign/) | 589 | [Localization](./zh/api/localization/) | 53 |
| [SandBox](./zh/api/sandbox/) | 554 | [System](./zh/api/system/) | 15 |
| [ViewModel](./zh/api/viewmodel/) | 538 | [ModuleManager](./zh/api/modulemanager/) | 8 |
| [GUI](./zh/api/gui/) | 271 | [ActivitySystem](./zh/api/activitysystem/) | 6 |
| [Engine](./zh/api/engine/) | 250 | [Mission](./zh/api/mission/) | 5 |
| [StoryMode](./zh/api/storymode/) | 168 | [AchievementSystem](./zh/api/achievementsystem/) | 4 |
| | | [Core](./zh/api/core/) | 2 |

**没有 `gameplay/` 目录，也没有 `navigationsystem/` 目录。** 前者被拆成 `sandbox` 与 `storymode`（1.4.5 那个目录本身是混合的，无法用命名空间规则复现）；后者在 1.4.7 里没有任何公开类型，归入 `core-extra`。1.4.5 的树里本来也没有 `navigationsystem`，所以后者才是对齐。

## 跨版本 URL 断裂（已知取舍，5 处）

按命名空间重建目录，必然打散 1.4.5 的少数几个手写目录。下面这张表由 `tools/_dir-map-canonical.json` 的 `parityGaps[]` **直接导入**，不在本页手工誊写：

| `id` | 断掉的 URL | 页数 | 决定 |
| --- | --- | ---: | --- |
| `no-gameplay-bucket` | `1.4.5/gameplay/` → 无对应 | 19 | 接受。1.4.5 该目录本身混合了 `SandBox`、`StoryMode.*` 和裸 `TaleWorlds.MountAndBlade` 类型，无命名空间规则可复现 |
| `mission-bulk-to-mission-ext` | `1.4.5/mission/` 的 52 页 → `mission-ext/` | 52 | 接受。`mission/` 保留为只放 5 个入口类的刻意小目录 |
| `game-to-core-extra` | `1.4.5/core/Game.md` → `core-extra/Game.md` | 1 | 接受。`Game` 的命名空间是 `TaleWorlds.Core` |
| `missionstate-to-mission` | `1.4.5 mission-ext/MissionState.md` → `mission/MissionState.md` | 1 | 接受，为了和 `Mission` / `Agent` / `Formation` 放一起 |
| `boardgames-bucket-removed` | 1.4.5 `boardgames` 家族 → 无对应 | — | 接受。1.4.7 不存在 `TaleWorlds.BoardGames` 命名空间，该桶产出 0 个类型 |

`mission/`（5 页）与 `core/`（2 页）紧挨着 `mission-ext/`（1,669 页）和 `core-extra/`（1,099 页）**是刻意设计的入口桶布局，不是重复路由**。这两个索引页都会说明"完整类型面在兄弟目录里"，并且双向链接。QA 若把它们"修正"回去，反而会制造 404。

## 这个站点的导航是树状的

```text
类型页 → 同目录索引 → 19 个子系统目录 → API 参考 → 版本首页 → 本页 → 站点首页
```

每一跳都是可解析的真实相对链接。每个目录都有自己的索引页，索引页再链回父级和相邻目录。

## 参见

- ↔ [中文文档](./zh/) · [English documentation](./en/)
- ↘ [跨版本类对比](../versions/)
- ↘ [v1.4.5 文档](../v1.4.5/) · [v1.4.6 文档](../v1.4.6/) · [v1.3.15 文档](../v1.3.15/) · [v1.3.0 文档](../v1.3.0/)