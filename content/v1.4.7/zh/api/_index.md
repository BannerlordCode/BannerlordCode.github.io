---
title: "API 参考 — 按任务找入口"
description: "v1.4.7 的 API 按命名空间分成 17 个桶：一个类型只属于一个桶，同桶重名用 Namespace__Type 区分。中文树当前 30 篇类页。"
---
# API 参考 — 按任务找入口

这不是签名墙。先决定你要做的事，从下面的表进对应桶，再进具体类页。**同一类型只存在于一个桶** —— 1.4.5 的文档树里同一个类型名出现在两个目录共 2,199 次，那正是"点进去发现是别的地方、然后回不来"的根源。v1.4.7 修掉了这一点。

下面两张表里的页数都是**当前的真实页数**。有 3,598 篇类页曾由脚本批量生成并一度挂在这些目录下，现已撤出文档树；每个桶的索引页都写明了自己覆盖哪个命名空间、约多少类型、当前几页。要查某个类型有没有页面，看 [缺口清单](../../GAPS)。

## 有页面的桶（8 个，30 篇）

| 桶 | 页数 | 覆盖 | 页面 |
| --- | ---: | --- | --- |
| [campaign](campaign/) | 5 | `TaleWorlds.CampaignSystem` 本体 | [Campaign](campaign/Campaign) · [CampaignBehaviorBase](campaign/CampaignBehaviorBase) · [CampaignEvents](campaign/CampaignEvents) · [CampaignGameStarter](campaign/CampaignGameStarter) · [IFaction](campaign/IFaction) |
| [mission](mission/) | 4 | 战斗入口类（按名字从 mission-ext 切出） | [Mission](mission/Mission) · [MissionState](mission/MissionState) · [MissionBehavior](mission/MissionBehavior) · [Agent](mission/Agent) |
| [gui](gui/) | 3 | `ScreenSystem` / `GauntletUI` / `TwoDimension` | [ScreenManager](gui/ScreenManager) · [ScreenBase](gui/ScreenBase) · [ScreenLayer](gui/ScreenLayer) |
| [save-system](save-system/) | 3 | `TaleWorlds.SaveSystem` | [SaveManager](save-system/SaveManager) · [SaveContext](save-system/SaveContext) · [LoadContext](save-system/LoadContext) |
| [core](core/) | 2 | 模块加载入口 | [Module](core/Module) · [MBSubModuleBase](core/MBSubModuleBase) |
| [core-extra](core-extra/) | 9 | `TaleWorlds.Core` 长尾 + 分类法兜底桶 | [Game](core-extra/Game) · [ViewModel](core-extra/ViewModel) · [BoardGameHelper](core-extra/BoardGameHelper) · [AIDifficulty](core-extra/AIDifficulty) · [BoardGameState](core-extra/BoardGameState) · [CaravanHelper](core-extra/CaravanHelper) · [AlleyHelper](core-extra/AlleyHelper) · [BarterHelper](core-extra/BarterHelper) · [BuildingHelper](core-extra/BuildingHelper) |
| [campaign-ext](campaign-ext/) | 2 | `CampaignSystem` 子命名空间 + `ObjectSystem` | [MBObjectBase](campaign-ext/MBObjectBase) · [MBObjectManager](campaign-ext/MBObjectManager) |
| [engine](engine/) | 2 | `TaleWorlds.Engine` + `Diamond` 访问层 | [GauntletLayer](engine/GauntletLayer) · [MBDebug](engine/MBDebug) |

## 当前 0 页的桶（9 个）

这些目录都存在、都有索引页，索引页里写明了覆盖的命名空间和类型规模：

| 桶 | 覆盖 | 类型规模 |
| --- | --- | ---: |
| [mission-ext](mission-ext/) | `TaleWorlds.MountAndBlade` + `TaleWorlds.Mission` 全部实现面 | 约 669 |
| [viewmodel](viewmodel/) | 三个 `*.ViewModelCollection` 命名空间 | 约 357 |
| [sandbox](sandbox/) | `SandBox` 及其 `GauntletUI` / `View` / `ViewModelCollection` 子命名空间 | 约 321 |
| [custombattle](custombattle/) | `TaleWorlds.MountAndBlade.CustomBattle` 及其子命名空间 | 约 41 |
| [network](network/) | `TaleWorlds.Network` | 约 38 |
| [system](system/) | `TaleWorlds.InputSystem` 等放行的运行时命名空间 | 约 20 |
| [modulemanager](modulemanager/) | `TaleWorlds.ModuleManager` | 8 |
| [activitysystem](activitysystem/) | `TaleWorlds.ActivitySystem` | 6 |
| [achievementsystem](achievementsystem/) | `TaleWorlds.AchievementSystem` | 4 |

"类型规模"是源码树里的类型数，不是页面数 —— 这些桶的页面数当前是 0。

> **没有 `gameplay/` 目录，也没有 `navigationsystem/` 目录。** 前者被拆进 `sandbox`（1.4.5 那个目录本身是混合的，无法用命名空间规则复现），后者在 1.4.7 里没有公开类型，归入 `core-extra`。原因见 [版本差异](../architecture/version-delta)。

> `mission/` 与 `core/` 刻意做小，只放模组入口类；完整的 `TaleWorlds.MountAndBlade` 与基础层分别在 `mission-ext/` 与 `core-extra/`。

## 两个还没有落笔的领域

下面这两个领域在 v1.4.7 源码里真实存在、体量不小，但它们既没有桶目录，也没有任何一篇类页 —— 它们是文档树的盲区，不是被跳过的几个类。

- **本地化（`TaleWorlds.Localization`）** —— 55 个 `.cs`、21 个公开类型、约 518 KB 源码。模组作者最先遇到的 `TextObject` 就在这个模块里，游戏里一切本地化文本都通过它取值；同模块的 `Expressions` 与 `TextProcessor`（含各语言各自的 `LanguageSpecificTextProcessor` 实现）负责文本表达式与按语言分派的语法处理。**本区目前没有任何页面。**
- **战役剧情（`StoryMode`）** —— 89 个 `.cs`、101 个公开类型、约 978 KB 源码，分布在 `GameComponents`、`Missions`、`Quests` 等子命名空间，也就是战役任务与剧情脚本那一层；模块根目录的 `CampaignStoryMode` 是它的入口之一。**本区目前没有任何页面。**

这两处不放链接：目录并不存在，指过去只能落到 404；写一个空索引页则会让读者以为那里本来就该有页面。

## 依赖阅读顺序

1. [架构总览](../architecture/) —— 先确认自己处于哪一层。
2. 本页的两张表 —— 进入对应子系统。
3. 桶索引页 —— 它列出该桶现有的全部页面、覆盖范围与缺口，并链回父级和全部兄弟桶。
4. 具体类页 —— 看心智模型、何时用、何时不要用、风险。

## 参见

- ↑ [语言首页](../)
- ↔ [架构总览](../architecture/)
- ↘ [缺口清单](../../GAPS)
- ↘ [跨版本类对比](../../../versions/)