---
title: "MissionMultiplayerFlagDomination"
description: "MissionMultiplayerFlagDomination 的自动生成类参考。"
---
# MissionMultiplayerFlagDomination

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerFlagDomination : MissionMultiplayerGameModeBase,IAnalyticsFlagInfo,IMissionBehavior `
**Base:** MissionMultiplayerGameModeBase,IAnalyticsFlagInfo,IMissionBehavior
**Source:** TaleWorlds.MountAndBlade/MissionMultiplayerFlagDomination.cs

## 概述

`MissionMultiplayerFlagDomination` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/MissionMultiplayerFlagDomination.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### UseGold
`public bool UseGold() `

### AllowCustomPlayerBanners
`public override bool AllowCustomPlayerBanners() `

### UseRoundController
`public override bool UseRoundController() `

### GetMissionType
`public override MultiplayerGameType GetMissionType() `

### OnBehaviorInitialize
`public override void OnBehaviorInitialize() `

### AfterStart
`public override void AfterStart() `

### AddRemoveMessageHandlers
`protected override void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer) `

### OnRemoveBehavior
`public override void OnRemoveBehavior() `

### OnPeerChangedTeam
`public override void OnPeerChangedTeam(NetworkCommunicator peer,Team oldTeam,Team newTeam) `

### OnMissionTick
`public override void OnMissionTick(float dt) `

### GetTimeUntilBattleSideVictory
`public float GetTimeUntilBattleSideVictory(BattleSideEnum side) `

### OnClearScene
`public override void OnClearScene() `

### CheckIfOvertime
`public override bool CheckIfOvertime() `

### CheckForWarmupEnd
`public override bool CheckForWarmupEnd() `

### CheckForRoundEnd
`public override bool CheckForRoundEnd() `

### UseCultureSelection
`public override bool UseCultureSelection() `

### OnAgentBuild
`public override void OnAgentBuild(Agent agent,Banner banner) `

### HandleEarlyPlayerDisconnect
`protected override void HandleEarlyPlayerDisconnect(NetworkCommunicator networkPeer) `

### HandleEarlyNewClientAfterLoadingFinished
`protected override void HandleEarlyNewClientAfterLoadingFinished(NetworkCommunicator networkPeer) `

### HandleNewClientAfterSynchronized
`protected override void HandleNewClientAfterSynchronized(NetworkCommunicator networkPeer) `

### ForfeitSpawning
`public void ForfeitSpawning(NetworkCommunicator peer) `

### SetWinnerTeam
`public static void SetWinnerTeam(int winnerTeamNo) `

### GetNumberOfAttackersAroundFlag
`public int GetNumberOfAttackersAroundFlag(FlagCapturePoint capturePoint) `

### GetFlagOwnerTeam
`public Team GetFlagOwnerTeam(FlagCapturePoint flag) `

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent,Agent affectorAgent,AgentState agentState,KillingBlow blow) `

### GetTroopNumberMultiplierForMissingPlayer
`public override float GetTroopNumberMultiplierForMissingPlayer(MissionPeer spawningPeer) `

### HandleNewClientAfterLoadingFinished
`protected override void HandleNewClientAfterLoadingFinished(NetworkCommunicator networkPeer) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
