---
title: "MissionMultiplayerGameModeFlagDominationClient"
description: "MissionMultiplayerGameModeFlagDominationClient 的自动生成类参考。"
---
# MissionMultiplayerGameModeFlagDominationClient

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerGameModeFlagDominationClient : MissionMultiplayerGameModeBaseClient,ICommanderInfo,IMissionBehavior `
**Base:** MissionMultiplayerGameModeBaseClient,ICommanderInfo,IMissionBehavior
**Source:** TaleWorlds.MountAndBlade/MissionMultiplayerGameModeFlagDominationClient.cs

## 概述

`MissionMultiplayerGameModeFlagDominationClient` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/MissionMultiplayerGameModeFlagDominationClient.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize() `

### OnRemoveBehavior
`public override void OnRemoveBehavior() `

### AfterStart
`public override void AfterStart() `

### AddRemoveMessageHandlers
`protected override void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer) `

### OnPreparationEnded
`public void OnPreparationEnded() `

### GetMissionCameraLockMode
`public override SpectatorCameraTypes GetMissionCameraLockMode(bool lockedToMainPlayer) `

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent,Agent affectorAgent,AgentState agentState,KillingBlow blow) `

### OnClearScene
`public override void OnClearScene() `

### GetWarningTimer
`protected override int GetWarningTimer() `

### GetFlagOwner
`public Team GetFlagOwner(FlagCapturePoint flag) `

### OnTeamPowerChanged
`public void OnTeamPowerChanged(BattleSideEnum teamSide,float power) `

### OnMoraleChanged
`public void OnMoraleChanged(float morale) `

### OnGoldAmountChangedForRepresentative
`public override void OnGoldAmountChangedForRepresentative(MissionRepresentativeBase representative,int goldAmount) `

### OnNumberOfFlagsChanged
`public void OnNumberOfFlagsChanged() `

### OnBotsControlledChanged
`public void OnBotsControlledChanged(MissionPeer missionPeer,int botAliveCount,int botTotalCount) `

### OnCapturePointOwnerChanged
`public void OnCapturePointOwnerChanged(FlagCapturePoint flagCapturePoint,Team ownerTeam) `

### OnRequestForfeitSpawn
`public void OnRequestForfeitSpawn() `

### GetCompassTargets
`public override List<CompassItemUpdateParams> GetCompassTargets() `

### GetGoldAmount
`public override int GetGoldAmount() `

### OnMissionTick
`public override void OnMissionTick(float dt) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
