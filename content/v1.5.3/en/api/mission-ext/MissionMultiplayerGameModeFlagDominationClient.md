---
title: "MissionMultiplayerGameModeFlagDominationClient"
description: "Auto-generated class reference for MissionMultiplayerGameModeFlagDominationClient."
---
# MissionMultiplayerGameModeFlagDominationClient

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerGameModeFlagDominationClient : MissionMultiplayerGameModeBaseClient,ICommanderInfo,IMissionBehavior `
**Base:** MissionMultiplayerGameModeBaseClient, ICommanderInfo, IMissionBehavior
**Source:** TaleWorlds.MountAndBlade/MissionMultiplayerGameModeFlagDominationClient.cs

## Overview

Auto-generated stub for `MissionMultiplayerGameModeFlagDominationClient`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

### AfterStart
`public override void AfterStart()`

### AddRemoveMessageHandlers
`protected override void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer)`

### OnPreparationEnded
`public void OnPreparationEnded()`

### GetMissionCameraLockMode
`public override SpectatorCameraTypes GetMissionCameraLockMode(bool lockedToMainPlayer)`

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent,Agent affectorAgent,AgentState agentState,KillingBlow blow)`

### OnClearScene
`public override void OnClearScene()`

### GetWarningTimer
`protected override int GetWarningTimer()`

### GetFlagOwner
`public Team GetFlagOwner(FlagCapturePoint flag)`

### OnTeamPowerChanged
`public void OnTeamPowerChanged(BattleSideEnum teamSide,float power)`

### OnMoraleChanged
`public void OnMoraleChanged(float morale)`

### OnGoldAmountChangedForRepresentative
`public override void OnGoldAmountChangedForRepresentative(MissionRepresentativeBase representative,int goldAmount)`

### OnNumberOfFlagsChanged
`public void OnNumberOfFlagsChanged()`

### OnBotsControlledChanged
`public void OnBotsControlledChanged(MissionPeer missionPeer,int botAliveCount,int botTotalCount)`

### OnCapturePointOwnerChanged
`public void OnCapturePointOwnerChanged(FlagCapturePoint flagCapturePoint,Team ownerTeam)`

### OnRequestForfeitSpawn
`public void OnRequestForfeitSpawn()`

### GetCompassTargets
`public override List<CompassItemUpdateParams> GetCompassTargets()`

### GetGoldAmount
`public override int GetGoldAmount()`

### OnMissionTick
`public override void OnMissionTick(float dt)`

## See Also

- [Section index](../)
