---
title: "MissionPeer"
description: "Auto-generated class reference for MissionPeer."
---
# MissionPeer

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionPeer : PeerComponent `
**Base:** PeerComponent
**Source:** TaleWorlds.MountAndBlade/MissionPeer.cs

## Overview

Auto-generated stub for `MissionPeer`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### RegisterWeaponUsage
`public bool RegisterWeaponUsage(WeaponClass weaponClass,int weight)`

### ResetSpectatorStats
`public void ResetSpectatorStats()`

### SetMutedFromPlatform
`public void SetMutedFromPlatform(bool isMuted)`

### SetMuted
`public void SetMuted(bool isMuted)`

### ResetRequestedKickPollCount
`public void ResetRequestedKickPollCount()`

### IncrementRequestedKickPollCount
`public void IncrementRequestedKickPollCount()`

### GetSelectedPerkIndexWithPerkListIndex
`public int GetSelectedPerkIndexWithPerkListIndex(int troopIndex,int perkListIndex)`

### SelectPerk
`public bool SelectPerk(int perkListIndex,int perkIndex,int enforcedSelectedTroopIndex = -1)`

### HandleVoteChange
`public void HandleVoteChange(CultureVoteTypes voteType,BasicCultureObject culture)`

### OnFinalize
`public override void OnFinalize()`

### OnInitialize
`public override void OnInitialize()`

### GetAmountOfAgentVisualsForPeer
`public int GetAmountOfAgentVisualsForPeer()`

### GetVisuals
`public PeerVisualsHolder GetVisuals(int visualIndex)`

### ClearVisuals
`public void ClearVisuals(int visualIndex)`

### ClearAllVisuals
`public void ClearAllVisuals(bool freeResources = false)`

### OnVisualsSpawned
`public void OnVisualsSpawned(PeerVisualsHolder visualsHolder,int visualIndex)`

### GetAllAgentVisualsForPeer
`public IEnumerable<IAgentVisual> GetAllAgentVisualsForPeer()`

### GetAgentVisualForPeer
`public IAgentVisual GetAgentVisualForPeer(int visualsIndex)`

### TickInactivityStatus
`public void TickInactivityStatus()`

### OnKillAnotherPeer
`public void OnKillAnotherPeer(MissionPeer victimPeer)`

### OnKillBot
`public void OnKillBot(string botName)`

### OverrideCultureWithTeamCulture
`public void OverrideCultureWithTeamCulture()`

### GetNumberOfTimesPeerKilledPeer
`public int GetNumberOfTimesPeerKilledPeer(MissionPeer killedPeer)`

### ResetKillRegistry
`public void ResetKillRegistry()`

### RefreshSelectedPerks
`public bool RefreshSelectedPerks()`

### OnTeamInitialPerkInfoReceived
`public void OnTeamInitialPerkInfoReceived(int[] perks)`

### OnUpdateEquipmentSetIndexEventDelegate
`public delegate void OnUpdateEquipmentSetIndexEventDelegate(MissionPeer lobbyPeer,int equipmentSetIndex)`

### OnPerkUpdateEventDelegate
`public delegate void OnPerkUpdateEventDelegate(MissionPeer peer)`

### OnTeamChangedDelegate
`public delegate void OnTeamChangedDelegate(NetworkCommunicator peer,Team previousTeam,Team newTeam)`

### OnCultureChangedDelegate
`public delegate void OnCultureChangedDelegate(BasicCultureObject newCulture)`

### OnPlayerKilledDelegate
`public delegate void OnPlayerKilledDelegate(MissionPeer killerPeer,MissionPeer killedPeer)`

## See Also

- [Section index](../)
