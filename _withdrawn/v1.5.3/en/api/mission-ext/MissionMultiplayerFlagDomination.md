---
title: "MissionMultiplayerFlagDomination"
description: "Auto-generated class reference for MissionMultiplayerFlagDomination."
---
# MissionMultiplayerFlagDomination

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerFlagDomination : MissionMultiplayerGameModeBase,IAnalyticsFlagInfo,IMissionBehavior `
**Base:** MissionMultiplayerGameModeBase, IAnalyticsFlagInfo, IMissionBehavior
**Source:** TaleWorlds.MountAndBlade/MissionMultiplayerFlagDomination.cs

## Overview

Auto-generated stub for `MissionMultiplayerFlagDomination`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### UseGold
`public bool UseGold()`

### AllowCustomPlayerBanners
`public override bool AllowCustomPlayerBanners()`

### UseRoundController
`public override bool UseRoundController()`

### GetMissionType
`public override MultiplayerGameType GetMissionType()`

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

### AfterStart
`public override void AfterStart()`

### AddRemoveMessageHandlers
`protected override void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer)`

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

### OnPeerChangedTeam
`public override void OnPeerChangedTeam(NetworkCommunicator peer,Team oldTeam,Team newTeam)`

### OnMissionTick
`public override void OnMissionTick(float dt)`

### GetTimeUntilBattleSideVictory
`public float GetTimeUntilBattleSideVictory(BattleSideEnum side)`

### OnClearScene
`public override void OnClearScene()`

### CheckIfOvertime
`public override bool CheckIfOvertime()`

### CheckForWarmupEnd
`public override bool CheckForWarmupEnd()`

### CheckForRoundEnd
`public override bool CheckForRoundEnd()`

### UseCultureSelection
`public override bool UseCultureSelection()`

### OnAgentBuild
`public override void OnAgentBuild(Agent agent,Banner banner)`

### HandleEarlyPlayerDisconnect
`protected override void HandleEarlyPlayerDisconnect(NetworkCommunicator networkPeer)`

### HandleEarlyNewClientAfterLoadingFinished
`protected override void HandleEarlyNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)`

### HandleNewClientAfterSynchronized
`protected override void HandleNewClientAfterSynchronized(NetworkCommunicator networkPeer)`

### ForfeitSpawning
`public void ForfeitSpawning(NetworkCommunicator peer)`

### SetWinnerTeam
`public static void SetWinnerTeam(int winnerTeamNo)`

### GetNumberOfAttackersAroundFlag
`public int GetNumberOfAttackersAroundFlag(FlagCapturePoint capturePoint)`

### GetFlagOwnerTeam
`public Team GetFlagOwnerTeam(FlagCapturePoint flag)`

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent,Agent affectorAgent,AgentState agentState,KillingBlow blow)`

### GetTroopNumberMultiplierForMissingPlayer
`public override float GetTroopNumberMultiplierForMissingPlayer(MissionPeer spawningPeer)`

### HandleNewClientAfterLoadingFinished
`protected override void HandleNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)`

## See Also

- [Section index](../)
