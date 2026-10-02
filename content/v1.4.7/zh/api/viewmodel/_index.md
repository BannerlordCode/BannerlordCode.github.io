---
title: "Viewmodel — ViewModelCollection：界面数据源"
description: "三个 *.ViewModelCollection 命名空间所在目录，第二大桶，目前一个页面都没有。"
---
# Viewmodel — ViewModelCollection：界面数据源

这个桶装三个 `*.ViewModelCollection` 命名空间：`TaleWorlds.CampaignSystem.ViewModelCollection`、`TaleWorlds.MountAndBlade.ViewModelCollection`（8 个 `.cs`）、`TaleWorlds.Core.ViewModelCollection`（12 个）。按分类法算下来约 357 个类型，是第二大桶。

它是界面那一侧的**数据源**：Gauntlet XML 里写的控件绑定到这些属性通知模型上，模型变了，界面刷新。控件本身在 [gui](../gui/)，两者要一起看。

值得先知道的一件事：`ViewModel` 基类在 [core-extra](../core-extra/)，不在这里。原因是它属于 `TaleWorlds.Core`，而这个桶装的是 `TaleWorlds.Core.ViewModelCollection` 这个**子命名空间**里的类型。基类和它的 Collection 子命名空间因此分在两个目录，这是前缀规则的结果。

命名空间决定了桶，但也带来一个实际后果：`CampaignSystem` 的 ViewModel 在这个桶，`CampaignSystem` 的实体在 [campaign](../campaign/)，中间隔着一次跳转。做界面时你要在两者之间来回走。

## 本区页面（0）

本目录收录三个 `*.ViewModelCollection` 命名空间的全部类型，约 357 个。**本区当前没有页面**（撰写进度：0/357）。

## 尚未收录

全部。按用途分三类：

- **物品与库存行**：`ItemStackVM`、`ItemComponentVM`、物品数量与耐久行一族的 ViewModel。
- **部队、家族与地图**：`PartyVM`、`ClanVM`、`KingdomVM`、`SettlementVM`、地图标记与图标一族的绑定模型。
- **各界面专用模型**：比武大会（`TournamentBracketVM` 一族）、库存与制作、交易、外交对话、以及战斗侧的 scoreboard 与 HUD 模型（`MountAndBlade.ViewModelCollection` 那 8 个类型）。

约 357 个类型，是整个文档树里第二大的缺口 —— 只有 [mission-ext](../mission-ext/) 比它大。基类 `ViewModel` 本身在 [core-extra](../core-extra/ViewModel)，所以"属性通知怎么工作"那一层现在还能查到；具体的界面模型一页都查不到。

## 相邻目录

[gui](../gui/) · [engine](../engine/) · [core](../core/) · [core-extra](../core-extra/) · [campaign](../campaign/) · [campaign-ext](../campaign-ext/) · [save-system](../save-system/) · [mission](../mission/) · [mission-ext](../mission-ext/) · [sandbox](../sandbox/) · [custombattle](../custombattle/) · [system](../system/) · [network](../network/) · [modulemanager](../modulemanager/) · [activitysystem](../activitysystem/) · [achievementsystem](../achievementsystem/)

## 参见

- ↑ [版本首页](../../)
- ↑ [API 参考](../)
- ↔ [架构总览](../../architecture/)
- ↘ [界面栈](../../architecture/ui-stack)