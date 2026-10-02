---
title: "MultiplayerTeamSelectComponent"
description: "Auto-generated class reference for MultiplayerTeamSelectComponent."
---
# MultiplayerTeamSelectComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerTeamSelectComponent : MissionNetwork `
**Base:** MissionNetwork
**Source:** TaleWorlds.MountAndBlade/MultiplayerTeamSelectComponent.cs

## Overview

Auto-generated stub for `MultiplayerTeamSelectComponent`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

### AddRemoveMessageHandlers
`protected override void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer)`

### AfterStart
`public override void AfterStart()`

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

### HandleLateNewClientAfterSynchronized
`protected override void HandleLateNewClientAfterSynchronized(NetworkCommunicator networkPeer)`

### SelectTeam
`public void SelectTeam()`

### UpdateTeams
`public void UpdateTeams(NetworkCommunicator peer,Team oldTeam,Team newTeam)`

### GetDisabledTeams
`public List<Team> GetDisabledTeams()`

### ChangeTeamServer
`public void ChangeTeamServer(NetworkCommunicator networkPeer,Team team)`

### ChangeTeam
`public void ChangeTeam(Team team)`

### GetPlayerCountForTeam
`public int GetPlayerCountForTeam(Team team)`

### GetFriendsForTeam
`public IEnumerable<VirtualPlayer> GetFriendsForTeam(Team team)`

### BalanceTeams
`public void BalanceTeams()`

### AutoAssignTeam
`public void AutoAssignTeam(NetworkCommunicator peer)`

### OnSelectingTeamDelegate
`public delegate void OnSelectingTeamDelegate(List<Team> disableTeams)`

## See Also

- [Section index](../)
