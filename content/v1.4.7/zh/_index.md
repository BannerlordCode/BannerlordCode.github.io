---
title: "Bannerlord v1.4.7 文档"
description: "v1.4.7 模组开发文档的中文入口：17 个 API 子系统桶、5 篇架构页与实测的版本差异。当前中文树 23 篇 API 类页。"
---
# Bannerlord v1.4.7 文档

## 这是什么

v1.4.7 是 1.4 系列的一个小版本增量。对模组作者来说，它和 1.4.5 的差别**几乎全是增量**：API 层面没有类型被删除（实测：两边都覆盖的 361 个命名空间里，删除数为 0），新增的类型里八成以上还是 `System.*` 之类的噪声。

真正变化的是**目录的组织方式**。本站的 1.4.7 树按命名空间重新划分成 17 个子系统桶，一个类型只属于一个桶。1.4.5 的树里有 2,199 个重复的类型名、513 个命名空间里有 171 个被拆散到多个目录 —— 点进去像跳到别的地方、再也回不来，是这个结构造成的，不是内容的问题。

## 现在这棵树里有什么

这一节的数字是当前的真实页数。v1.4.7 的源码有 11,387 个 `.cs`，理论上能写出的类页是四位数；但那批由脚本生成的页面已经撤出文档树，当前中文树里手写的正文是：

- **23 篇 API 类页**，分布在 8 个桶里；
- **5 篇架构页**（见下"架构"一节）；
- **17 个子系统桶索引**，每个桶都写清自己覆盖哪个命名空间、约多少类型、当前几页 —— 没有页面的桶直接写"本区当前没有页面"。

要查某个类型到底有没有页面，看 [缺口清单](../GAPS)。

## 和 1.4.5 / 1.3.15 的差别

| | 1.3.15 | 1.4.5 | 1.4.7 |
| --- | --- | --- | --- |
| 源码 `.cs` 数量 | 5,196 | 8,583（转储不完整） | 11,387 |
| 对模组有破坏的删除 | — | — | 1.3.15 → 1.4.7 共 9 个类型消失，其中 `EquipmentFlags` 与 `MissionAgentSpawnLogic` 最值得检查 |
| 文档目录 | A–Z 类型列表 | 22 个手写目录，彼此重复 | 17 个按命名空间规则划分的桶 |
| 同一类型多 URL | 无 | **2,199 个类型名重复** | **0**（硬约束） |

完整数据、测量方法和已知 URL 断裂见 [版本差异](./architecture/version-delta)。

## 模组作者从这里开始

| 我想做的事 | 先读 | 再读 |
| --- | --- | --- |
| 让模组被加载 | [模块系统](./architecture/module-system) | [Core](./api/core/) |
| 在战役里挂行为 | [模块系统](./architecture/module-system) | [Campaign-Ext](./api/campaign-ext/) |
| 改钱、关系、部队 | [Campaign-Ext](./api/campaign-ext/) | [Campaign](./api/campaign/) |
| 做界面 | [界面栈](./architecture/ui-stack) | [GUI](./api/gui/) |
| 存自己的数据 | [存档系统](./architecture/save-system) | [Save System](./api/save-system/) |
| 用调试控制台 | [Engine](./api/engine/) | [MBDebug](./api/engine/MBDebug) |
| 搞清楚引用哪个程序集 | [SDK 总览](./architecture/sdk-overview) | [API 参考](./api/) |
| 排查升级后炸了 | [版本差异](./architecture/version-delta) | [跨版本类对比](../../versions/) |
| 查某个类型有没有页面 | [缺口清单](../GAPS) | [API 参考](./api/) |

## 这个站的导航是树状的

任何一个页面都能一步步走回版本根，再从版本根走到任意页面：

```text
类页 → 同目录索引 → 17 个子系统桶 → API 参考 → 语言首页 → 版本首页
```

每一跳都是一个真实的相对链接；每个目录都有自己的索引页，索引页再链回父级和全部兄弟桶。所以"跳过去回不来"在这个树里是被结构性排除的，而不是靠运气。

## 架构

- [架构总览](./architecture/) — 五张图的总入口
- [SDK 总览](./architecture/sdk-overview) — 程序集分层与引用地图
- [模块系统](./architecture/module-system) — Module 与 MBSubModuleBase
- [存档系统](./architecture/save-system) — SaveManager 与类型注册
- [界面栈](./architecture/ui-stack) — ScreenSystem / Gauntlet / ViewModel
- [版本差异](./architecture/version-delta) — 1.4.7 vs 1.4.5 vs 1.3.15

## API 参考：17 个桶

[API 参考](./api/) 是这一节的入口。**有页面（23 篇）**：

- [campaign](./api/campaign/) — 5 页 · `Campaign` / `CampaignBehaviorBase` / `CampaignEvents` / `CampaignGameStarter` / `IFaction`
- [mission](./api/mission/) — 4 页 · `Mission` / `MissionState` / `MissionBehavior` / `Agent`
- [gui](./api/gui/) — 3 页 · `ScreenManager` / `ScreenBase` / `ScreenLayer`
- [save-system](./api/save-system/) — 3 页 · `SaveManager` / `SaveContext` / `LoadContext`
- [core](./api/core/) — 2 页 · `Module` / `MBSubModuleBase`
- [core-extra](./api/core-extra/) — 2 页 · `Game` / `ViewModel`
- [campaign-ext](./api/campaign-ext/) — 2 页 · `MBObjectBase` / `MBObjectManager`
- [engine](./api/engine/) — 2 页 · `GauntletLayer` / `MBDebug`

**存在但当前 0 页**（每个都有自己的索引页，写明了覆盖范围和类型规模）：

- [mission-ext](./api/mission-ext/) · [viewmodel](./api/viewmodel/) · [sandbox](./api/sandbox/) · [custombattle](./api/custombattle/) · [network](./api/network/) · [system](./api/system/) · [modulemanager](./api/modulemanager/) · [activitysystem](./api/activitysystem/) · [achievementsystem](./api/achievementsystem/)

缺口最大的是 [mission-ext](./api/mission-ext/)（约 669 个类型，`TaleWorlds.MountAndBlade` 全部实现面）和 [viewmodel](./api/viewmodel/)（约 357 个类型）。

## 两个还没有落笔的领域

下面这两个领域在 v1.4.7 源码里真实存在、体量不小，但它们既没有桶目录，也没有任何一篇类页 —— 它们是文档树的盲区，不是被跳过的几个类。

- **本地化（`TaleWorlds.Localization`）** —— 55 个 `.cs`、21 个公开类型、约 518 KB 源码。模组作者最先遇到的 `TextObject` 就在这个模块里，游戏里一切本地化文本都通过它取值；同模块的 `Expressions` 与 `TextProcessor`（含各语言各自的 `LanguageSpecificTextProcessor` 实现）负责文本表达式与按语言分派的语法处理。**本区目前没有任何页面。**
- **战役剧情（`StoryMode`）** —— 89 个 `.cs`、101 个公开类型、约 978 KB 源码，分布在 `GameComponents`、`Missions`、`Quests` 等子命名空间，也就是战役任务与剧情脚本那一层；模块根目录的 `CampaignStoryMode` 是它的入口之一。**本区目前没有任何页面。**

这两处不放链接：目录并不存在，指过去只能落到 404；写一个空索引页则会让读者以为那里本来就该有页面。

## 参见

- ↑ [版本首页](../)
- ↔ [English](../en/)
- ↘ [缺口清单](../GAPS)
- ↘ [跨版本类对比](../../versions/)
- ↘ [v1.4.5 文档](../../v1.4.5/) · [v1.3.15 文档](../../v1.3.15/) · [v1.3.0 文档](../../v1.3.0/)