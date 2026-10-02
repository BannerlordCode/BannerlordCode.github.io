---
title: "MissionMultiplayerDuel"
description: "Auto-generated class reference for MissionMultiplayerDuel."
---
# MissionMultiplayerDuel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerDuel : MissionMultiplayerGameModeBase `
**Base:** MissionMultiplayerGameModeBase
**Source:** TaleWorlds.MountAndBlade/MissionMultiplayerDuel.cs

## Overview

Auto-generated stub for `MissionMultiplayerDuel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetMissionType
`public override MultiplayerGameType GetMissionType()`

### AfterStart
`public override void AfterStart()`

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

### AddRemoveMessageHandlers
`protected override void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer)`

### HandleEarlyNewClientAfterLoadingFinished
`protected override void HandleEarlyNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)`

### HandleNewClientAfterSynchronized
`protected override void HandleNewClientAfterSynchronized(NetworkCommunicator networkPeer)`

### CheckIfPlayerCanDespawn
`public override bool CheckIfPlayerCanDespawn(MissionPeer missionPeer)`

### OnPlayerDespawn
`public void OnPlayerDespawn(MissionPeer missionPeer)`

### DuelRequestReceived
`public void DuelRequestReceived(MissionPeer requesterPeer,MissionPeer requesteePeer)`

### DuelRequestAccepted
`public void DuelRequestAccepted(Agent requesterAgent,Agent requesteeAgent)`

### OnMissionTick
`public override void OnMissionTick(float dt)`

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent,Agent affectorAgent,AgentState agentState,KillingBlow blow)`

### GetDuelAreaIndexIfDuelTeam
`public int GetDuelAreaIndexIfDuelTeam(Team team)`

### OnAgentBuild
`public override void OnAgentBuild(Agent agent,Banner banner)`

### HandleLateNewClientAfterSynchronized
`protected override void HandleLateNewClientAfterSynchronized(NetworkCommunicator networkPeer)`

### HandleEarlyPlayerDisconnect
`protected override void HandleEarlyPlayerDisconnect(NetworkCommunicator networkPeer)`

### HandlePlayerDisconnect
`protected override void HandlePlayerDisconnect(NetworkCommunicator networkPeer)`

### OnDuelEndedDelegate
`public delegate void OnDuelEndedDelegate(MissionPeer winnerPeer,TroopType troopType)`

## See Also

- [Section index](../)
