---
title: "Sandbox — 沙盒模块：内容、AI 与地图事件"
description: "SandBox 及其子命名空间所在目录，游戏自带的战役模块，约 321 个类型，已收录 5 个页面。"
---
# Sandbox — 沙盒模块：内容、AI 与地图事件

这个桶装的是 `SandBox` 这个命名空间 —— 游戏自带的战役模块本身（`bannerlord-1.4.7/SandBox/` 下 37 个 `.cs`）。它管的是地图上实际发生的事：地图事件、AI 决策、以及内容的定义。

和 [campaign](../campaign/) 的区别是分工不是大小：`campaign/` 是数据（`Hero`、`Party`、`Clan`），`sandbox/` 是规则（这件事怎么发生）。玩家在地图上遭遇劫匪，走的是这里的逻辑，改动它会改变地图行为。

这个桶是全树最大的空桶之一 —— 约 321 个有文档的类型，目前只写了 5 页（4 个作弊项 + 1 个导航中枢）。

## 本区页面（5）

本目录收录 `SandBox` 及其 `GauntletUI`、`View`、`ViewModelCollection` 子命名空间的全部类型，约 321 个。**本区当前有 5 个页面**（撰写进度：5/321）。

| 页面 | 说明 |
| --- | --- |
| [Add1000GoldCheat](Add1000GoldCheat) | 地图作弊项，给玩家主角加 1000 第纳尔。 |
| [Add100InfluenceCheat](Add100InfluenceCheat) | 地图作弊项，给玩家家族加 100 影响力。 |
| [Add100RenownCheat](Add100RenownCheat) | 地图作弊项，给玩家主角加 100 声望。 |
| [AddCraftingMaterialsCheat](AddCraftingMaterialsCheat) | 地图作弊项，给主队伍每种锻造材料各加 10 个。 |
| [AgentNavigator](AgentNavigator) | 任务场景中单个 Agent 的导航与行为调度中枢。 |

## 尚未收录

按命名空间属于这个桶、但没有页面的内容包括：

- **管理者**：`SandBoxGameManager`、`SandBoxManager`、`SandBox`、`CampaignAgentComponent`、`CampaignMissionManager`、`CampaignMapSiegePrefabEntityCache`。
- **地图事件**：`MapEventSide`、`MapEvent`、`VillageLottery` 与整个地图事件触发家族 —— 这是玩家在地图上遇到事情的那一层。
- **AI 与作弊**：根目录下 37 个 `.cs` 里有一大半是作弊（`GameplayCheatsManager`、`BoostSkillCheatGroup`、`Add1000GoldCheat`、`FillCraftingStaminaCheat` 之类），其余是 `AgentNavigator`（已收录）、`EditorSceneMissionManager` 等。作弊这一族目前只收录了 `Add` 系列的四项，其余仍是空白。
- **内容定义**：战役方内容（城镇、村庄、领主）的定义与加载。

它是整棵树里最大的空桶。想了解沙盒战役到底怎么跑，现有页面帮不上忙 —— 起点是 [架构总览](../../architecture/) 的分层结论和 `bannerlord-1.4.7/SandBox/` 的源码。

## 相邻目录

[campaign](../campaign/) · [campaign-ext](../campaign-ext/) · [mission](../mission/) · [mission-ext](../mission-ext/) · [core](../core/) · [core-extra](../core-extra/) · [save-system](../save-system/) · [gui](../gui/) · [viewmodel](../viewmodel/) · [engine](../engine/) · [custombattle](../custombattle/) · [system](../system/) · [network](../network/) · [modulemanager](../modulemanager/) · [activitysystem](../activitysystem/) · [achievementsystem](../achievementsystem/)

## 参见

- ↑ [版本首页](../../)
- ↑ [API 参考](../)
- ↔ [架构总览](../../architecture/)
- ↘ [SDK 总览](../../architecture/sdk-overview)