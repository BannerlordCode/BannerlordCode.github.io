---
title: "Mission ext — 战斗层的全部实现面（最大的目录）"
description: "TaleWorlds.MountAndBlade 与 TaleWorlds.Mission 所在的目录，669 个 .cs，目前一个页面都没有。"
---
# Mission ext — 战斗层的全部实现面（最大的目录）

这个桶装的是命名空间 `TaleWorlds.MountAndBlade`（1.4.7 里 669 个 `.cs`）以及落在它下面的 `TaleWorlds.Mission`。它是整个分类法里最大的一个面：战斗怎么跑、AI 怎么决策、生成怎么布置、事件怎么触发，全在这里。

按规模它是 `campaign/` 的三倍多。所以第一次找战斗相关 API 而发现这个桶空着，是正常的 —— 它现在是整个文档树里最大的缺口。

模组真正会继承的那 4 个类（`Mission`、`MissionState`、`MissionBehavior`、`Agent`）按名字切到了 [mission](../mission/)，所以 URL 短、也好找。这个桶里剩下的是实现细节：约 669 个类，包括 `AgentCommonAILogic`、`AgentHumanAILogic`、`MissionCombatantsLogic`、`MissionSpawnPhase`、`MissionBoundaryPlacer`、`ActionIndexCache`，以及 `Missions`、`MissionSpawnHandlers`、`Objects`、`Options` 这些子目录。

## 本区页面（0）

本区还没有任何页面。这是准确的说法，不是"暂时没有"。

## 尚未收录

全部内容，按用途分四类：

- **Agent 行为与决策**：`AgentBuildData`、`AgentAIStateFlag`、`AgentState`、`AgentCommonAILogic`、`AgentHumanAILogic`、`AgentDrivenProperties`、`AgentProximityMap`、`AgentSpawnData`。要改士兵的 AI，这是唯一的地方。
- **战斗逻辑与流程**：`MissionCombatantsLogic`、`MissionCombatMechanicsHelper`、`MissionBattleSchedulerClientComponent`、`MissionBattleSideSpawnContext`、`MissionSpawnPhase`、`MissionEquipment`、`MissionScoreboardComponent`、`MissionReinforcementsHelper`。生成阶段和结算都从这里走。
- **阵型**：`Formation`、`FormationClass`、`MissionFormationSpawnData`、`Action`、`AgentAction`、`FormationPosition` 一族。阵型是这个桶里被拆得最散的一块。
- **任务对象与网络**：`MissionObject`、`MissionObjectId`、`MissionNetworkComponent`、`MissionNetwork`、`MissionPeer`、`MissionMultiplayer*`（`MissionMultiplayerSiege`、`MissionMultiplayerTeamDeathmatch` 等 10 个）。

如果你是冲着"改一场战斗"来的，这里的缺口意味着你现阶段只能靠 `bannerlord-1.4.7/` 里的源码和 [架构总览](../../architecture/) 的分层结论。

## 相邻目录

[mission](../mission/) · [campaign](../campaign/) · [campaign-ext](../campaign-ext/) · [core](../core/) · [core-extra](../core-extra/) · [gui](../gui/) · [viewmodel](../viewmodel/) · [engine](../engine/) · [sandbox](../sandbox/) · [custombattle](../custombattle/) · [system](../system/) · [network](../network/) · [modulemanager](../modulemanager/) · [activitysystem](../activitysystem/) · [achievementsystem](../achievementsystem/)

## 参见

- ↑ [版本首页](../../)
- ↑ [API 参考](../)
- ↔ [架构总览](../../architecture/)
- ↘ [SDK 总览](../../architecture/sdk-overview)