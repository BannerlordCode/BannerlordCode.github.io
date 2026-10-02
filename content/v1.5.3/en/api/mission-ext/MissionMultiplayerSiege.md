---
title: "MissionMultiplayerSiege"
description: "Auto-generated class reference for MissionMultiplayerSiege."
---
# MissionMultiplayerSiege

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerSiege : MissionMultiplayerGameModeBase,IAnalyticsFlagInfo,IMissionBehavior `
**Base:** MissionMultiplayerGameModeBase, IAnalyticsFlagInfo, IMissionBehavior
**Source:** TaleWorlds.MountAndBlade/MissionMultiplayerSiege.cs

## Overview

Auto-generated stub for `MissionMultiplayerSiege`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

### GetMissionType
`public override MultiplayerGameType GetMissionType()`

### UseRoundController
`public override bool UseRoundController()`

### AfterStart
`public override void AfterStart()`

### OnMissionTick
`public override void OnMissionTick(float dt)`

### CheckForMatchEnd
`public override bool CheckForMatchEnd()`

### GetWinnerTeam
`public override Team GetWinnerTeam()`

### GetFlagOwnerTeam
`public Team GetFlagOwnerTeam(FlagCapturePoint flag)`

### CheckForWarmupEnd
`public override bool CheckForWarmupEnd()`

### HandleEarlyNewClientAfterLoadingFinished
`protected override void HandleEarlyNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)`

### HandleNewClientAfterSynchronized
`protected override void HandleNewClientAfterSynchronized(NetworkCommunicator networkPeer)`

### OnPeerChangedTeam
`public override void OnPeerChangedTeam(NetworkCommunicator peer,Team oldTeam,Team newTeam)`

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent,Agent affectorAgent,AgentState agentState,KillingBlow blow)`

### HandleNewClientAfterLoadingFinished
`protected override void HandleNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)`

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

### OnClearScene
`public override void OnClearScene()`

### OnDestructableComponentDestroyedDelegate
`public delegate void OnDestructableComponentDestroyedDelegate(DestructableComponent destructableComponent,ScriptComponentBehavior attackerScriptComponentBehaviour,MissionPeer[] contributors)`

### OnObjectiveGoldGainedDelegate
`public delegate void OnObjectiveGoldGainedDelegate(MissionPeer peer,int goldGain)`

## See Also

- [Section index](../)
