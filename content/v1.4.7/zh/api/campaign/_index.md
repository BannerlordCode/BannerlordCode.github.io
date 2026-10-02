---
title: "Campaign — 战役世界：实体与状态"
description: "TaleWorlds.CampaignSystem 本体所在的目录：战役世界的实体与读写它们的规则。目前 5 页。"
---
# Campaign — 战役世界：实体与状态

这个桶装的是 `TaleWorlds.CampaignSystem` **这个命名空间本身**，也就是战役世界本体：谁在里面、现在是什么状态、改状态的规则怎么走。1.4.7 里这个命名空间根目录下有 135 个 `.cs`。

对模组作者来说，它是"持久世界"这一层的入口。`Hero`、`Party`、`Clan`、`Kingdom`、`Town`、`ItemObject` 都在这里，它们是存档里真正存在的东西 —— 和战斗里那些转瞬即逝的对象是两种东西。判断一个字段该放哪，看的就是这条线：会进存档的进这里，只活在战斗场景里的去 [mission-ext](../mission-ext/)。

`CampaignSystem` 的子命名空间**不在这里**，它们按前缀规则被分到了别处：

| 子命名空间 | 落到哪个桶 |
| --- | --- |
| `CampaignBehaviors`、`ComponentInterfaces`、`GameComponents` | [campaign-ext](../campaign-ext/) |
| `Conversation`、`Issues`、`PartyBasedVisitables` | [campaign-ext](../campaign-ext/) |
| `SandBox` | [sandbox](../sandbox/) |
| `ViewModelCollection` | [viewmodel](../viewmodel/) |

界面上看到的那些 `*VM` 也因此不在这里 —— 它们是绑定层，不是状态层。

## 本区页面（5）

| 页面 | 讲的是什么 |
| --- | --- |
| [Campaign](./Campaign) | 战役世界单例：当前战役、时间推进、事件总线 |
| [CampaignGameStarter](./CampaignGameStarter) | 模块往上面挂战役行为的那道门 |
| [CampaignBehaviorBase](./CampaignBehaviorBase) | 挂在 `CampaignGameStarter` 上的东西的基类 |
| [CampaignEvents](./CampaignEvents) | 战役在其上触发事件的静态枢纽 |
| [IFaction](./IFaction) | `Clan` 与 `Kingdom` 背后的派系抽象 |

这 5 页合起来是一条完整的上手路径：`CampaignGameStarter` 挂一个 `CampaignBehaviorBase`，行为里挂 `CampaignEvents` 的处理器，改动通过 `Campaign` 落到 `IFaction` 这类派系对象上。

## 尚未收录

按命名空间规则属于这个桶、但目前没有页面的东西，包括：`Hero`、`Party`、`Clan`、`Kingdom`、`Settlement` 家族、`ItemObject`、装备与打造模型、外交模型、地图事件（`MapEvents`）、遭遇（`Encounters`）、选举（`Election`）、比武大会与竞技场（`TournamentGames`）、库存与贸易（`Inventory`、`BarterSystem`）、角色成长（`CharacterDevelopment`），以及 `GameState` 与存档兼容（`SaveCompability`）那部分。这个桶现在覆盖的是入口，不是主体。

## 相邻目录

[core](../core/) · [core-extra](../core-extra/) · [campaign-ext](../campaign-ext/) · [save-system](../save-system/) · [mission](../mission/) · [mission-ext](../mission-ext/) · [gui](../gui/) · [viewmodel](../viewmodel/) · [engine](../engine/) · [sandbox](../sandbox/) · [custombattle](../custombattle/) · [system](../system/) · [network](../network/) · [modulemanager](../modulemanager/) · [activitysystem](../activitysystem/) · [achievementsystem](../achievementsystem/)

## 参见

- ↑ [版本首页](../../)
- ↑ [API 参考](../)
- ↔ [架构总览](../../architecture/)
- ↘ [模块系统](../../architecture/module-system)