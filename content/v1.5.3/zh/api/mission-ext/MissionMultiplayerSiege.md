---
title: "MissionMultiplayerSiege"
description: "MissionMultiplayerSiege 的自动生成类参考。"
---
# MissionMultiplayerSiege

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerSiege : MissionMultiplayerGameModeBase,IAnalyticsFlagInfo,IMissionBehavior `
**Base:** MissionMultiplayerGameModeBase,IAnalyticsFlagInfo,IMissionBehavior
**Source:** TaleWorlds.MountAndBlade/MissionMultiplayerSiege.cs

## 概述

`MissionMultiplayerSiege` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/MissionMultiplayerSiege.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize() `

### GetMissionType
`public override MultiplayerGameType GetMissionType() `

### UseRoundController
`public override bool UseRoundController() `

### AfterStart
`public override void AfterStart() `

### OnMissionTick
`public override void OnMissionTick(float dt) `

### CheckForMatchEnd
`public override bool CheckForMatchEnd() `

### GetWinnerTeam
`public override Team GetWinnerTeam() `

### GetFlagOwnerTeam
`public Team GetFlagOwnerTeam(FlagCapturePoint flag) `

### CheckForWarmupEnd
`public override bool CheckForWarmupEnd() `

### HandleEarlyNewClientAfterLoadingFinished
`protected override void HandleEarlyNewClientAfterLoadingFinished(NetworkCommunicator networkPeer) `

### HandleNewClientAfterSynchronized
`protected override void HandleNewClientAfterSynchronized(NetworkCommunicator networkPeer) `

### OnPeerChangedTeam
`public override void OnPeerChangedTeam(NetworkCommunicator peer,Team oldTeam,Team newTeam) `

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent,Agent affectorAgent,AgentState agentState,KillingBlow blow) `

### HandleNewClientAfterLoadingFinished
`protected override void HandleNewClientAfterLoadingFinished(NetworkCommunicator networkPeer) `

### OnRemoveBehavior
`public override void OnRemoveBehavior() `

### OnClearScene
`public override void OnClearScene() `

### OnDestructableComponentDestroyedDelegate
`public delegate void OnDestructableComponentDestroyedDelegate(DestructableComponent destructableComponent,ScriptComponentBehavior attackerScriptComponentBehaviour,MissionPeer[] contributors)`

### OnObjectiveGoldGainedDelegate
`public delegate void OnObjectiveGoldGainedDelegate(MissionPeer peer,int goldGain)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
