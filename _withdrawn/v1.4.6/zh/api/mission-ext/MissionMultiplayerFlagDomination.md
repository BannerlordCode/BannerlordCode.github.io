---
title: "MissionMultiplayerFlagDomination"
description: "MissionMultiplayerFlagDomination：TaleWorlds.MountAndBlade 的 public 类，继承 MissionMultiplayerGameModeBase、IAnalyticsFlagInfo；公开成员 47 个（方法 27、属性 5、字段 14）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/MissionMultiplayerFlagDomination.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionMultiplayerFlagDomination

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionMultiplayerFlagDomination : MissionMultiplayerGameModeBase, IAnalyticsFlagInfo, IMissionBehavior`
**File:** `TaleWorlds.MountAndBlade/MissionMultiplayerFlagDomination.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MissionMultiplayerFlagDomination 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MissionMultiplayerFlagDomination.cs。它是一个 public 类，实现/继承 MissionMultiplayerGameModeBase、IAnalyticsFlagInfo、IMissionBehavior，继承链为 MissionMultiplayerFlagDomination → MissionMultiplayerGameModeBase → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 47 个：27 方法、5 属性、14 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionMultiplayerFlagDomination 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 MissionMultiplayerFlagDomination → MissionMultiplayerGameModeBase → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 27/47，属性 5/47），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MissionMultiplayerFlagDomination.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsGameModeHidingAllAgentVisuals` | `public override bool IsGameModeHidingAllAgentVisuals` | 属性 |
| `IsGameModeUsingOpposingTeams` | `public override bool IsGameModeUsingOpposingTeams` | 属性 |
| `MBReadOnlyList` | `public MBReadOnlyList<FlagCapturePoint>AllCapturePoints` | 属性 |
| `MoraleRounded` | `public float MoraleRounded` | 属性 |
| `GameModeUsesSingleSpawning` | `public bool GameModeUsesSingleSpawning` | 属性 |
| `UseGold` | `public bool UseGold()` | 方法 |
| `AllowCustomPlayerBanners` | `public override bool AllowCustomPlayerBanners()` | 方法 |
| `UseRoundController` | `public override bool UseRoundController()` | 方法 |
| `MissionMultiplayerFlagDomination` | `public MissionMultiplayerFlagDomination(MultiplayerGameType gameType)` | 构造函数 |
| `GetMissionType` | `public override MultiplayerGameType GetMissionType()` | 方法 |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | 方法 |
| `AfterStart` | `public override void AfterStart()` | 方法 |
| `AddRemoveMessageHandlers` | `protected override void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer)` | 方法 |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | 方法 |
| `OnPeerChangedTeam` | `public override void OnPeerChangedTeam(NetworkCommunicator peer, Team oldTeam, Team newTeam)` | 方法 |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | 方法 |
| `GetTimeUntilBattleSideVictory` | `public float GetTimeUntilBattleSideVictory(BattleSideEnum side)` | 方法 |
| `OnClearScene` | `public override void OnClearScene()` | 方法 |
| `CheckIfOvertime` | `public override bool CheckIfOvertime()` | 方法 |
| `CheckForWarmupEnd` | `public override bool CheckForWarmupEnd()` | 方法 |
| `CheckForRoundEnd` | `public override bool CheckForRoundEnd()` | 方法 |
| `UseCultureSelection` | `public override bool UseCultureSelection()` | 方法 |
| `OnAgentBuild` | `public override void OnAgentBuild(Agent agent, Banner banner)` | 方法 |
| `HandleEarlyPlayerDisconnect` | `protected override void HandleEarlyPlayerDisconnect(NetworkCommunicator networkPeer)` | 方法 |
| `HandleEarlyNewClientAfterLoadingFinished` | `protected override void HandleEarlyNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)` | 方法 |
| `HandleNewClientAfterSynchronized` | `protected override void HandleNewClientAfterSynchronized(NetworkCommunicator networkPeer)` | 方法 |
| `ForfeitSpawning` | `public void ForfeitSpawning(NetworkCommunicator peer)` | 方法 |
| `SetWinnerTeam` | `public static void SetWinnerTeam(int winnerTeamNo)` | 方法 |
| `GetNumberOfAttackersAroundFlag` | `public int GetNumberOfAttackersAroundFlag(FlagCapturePoint capturePoint)` | 方法 |
| `GetFlagOwnerTeam` | `public Team GetFlagOwnerTeam(FlagCapturePoint flag)` | 方法 |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | 方法 |
| `GetTroopNumberMultiplierForMissingPlayer` | `public override float GetTroopNumberMultiplierForMissingPlayer(MissionPeer spawningPeer)` | 方法 |
| `HandleNewClientAfterLoadingFinished` | `protected override void HandleNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)` | 方法 |
| `NumberOfFlagsInGame` | `public const int NumberOfFlagsInGame` | 字段 |
| `MoraleRoundPrecision` | `public const float MoraleRoundPrecision` | 字段 |
| `DefaultGoldAmountForTroopSelectionForSkirmish` | `public const int DefaultGoldAmountForTroopSelectionForSkirmish` | 字段 |
| `MaxGoldAmountToCarryOverForSkirmish` | `public const int MaxGoldAmountToCarryOverForSkirmish` | 字段 |
| `InitialGoldAmountForTroopSelectionForBattle` | `public const int InitialGoldAmountForTroopSelectionForBattle` | 字段 |
| `DefaultGoldAmountForTroopSelectionForBattle` | `public const int DefaultGoldAmountForTroopSelectionForBattle` | 字段 |
| `MaxGoldAmountToCarryOverForBattle` | `public const int MaxGoldAmountToCarryOverForBattle` | 字段 |
| `TimeTillFlagRemovalForPriorInfoInSeconds` | `public const float TimeTillFlagRemovalForPriorInfoInSeconds` | 字段 |
| `PointRemovalTimeInSecondsForBattle` | `public const float PointRemovalTimeInSecondsForBattle` | 字段 |
| `PointRemovalTimeInSecondsForCaptain` | `public const float PointRemovalTimeInSecondsForCaptain` | 字段 |
| `PointRemovalTimeInSecondsForSkirmish` | `public const float PointRemovalTimeInSecondsForSkirmish` | 字段 |
| `MoraleMultiplierForEachFlagForBattle` | `public const float MoraleMultiplierForEachFlagForBattle` | 字段 |
| `MoraleMultiplierForEachFlagForCaptain` | `public const float MoraleMultiplierForEachFlagForCaptain` | 字段 |
| `MoraleMultiplierForEachFlagForSkirmish` | `public const float MoraleMultiplierForEachFlagForSkirmish` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MissionMultiplayerGameModeBase](../MissionMultiplayerGameModeBase/)
- [基类/接口 IAnalyticsFlagInfo](../IAnalyticsFlagInfo/)
- [基类/接口 IMissionBehavior](../IMissionBehavior/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
