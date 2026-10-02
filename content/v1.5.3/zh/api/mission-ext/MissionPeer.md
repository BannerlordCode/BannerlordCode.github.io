---
title: "MissionPeer"
description: "MissionPeer 的自动生成类参考。"
---
# MissionPeer

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionPeer : PeerComponent `
**Base:** PeerComponent
**Source:** TaleWorlds.MountAndBlade/MissionPeer.cs

## 概述

`MissionPeer` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/MissionPeer.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### RegisterWeaponUsage
`public bool RegisterWeaponUsage(WeaponClass weaponClass,int weight) `

### ResetSpectatorStats
`public void ResetSpectatorStats() `

### SetMutedFromPlatform
`public void SetMutedFromPlatform(bool isMuted) `

### SetMuted
`public void SetMuted(bool isMuted) `

### ResetRequestedKickPollCount
`public void ResetRequestedKickPollCount() `

### IncrementRequestedKickPollCount
`public void IncrementRequestedKickPollCount() `

### GetSelectedPerkIndexWithPerkListIndex
`public int GetSelectedPerkIndexWithPerkListIndex(int troopIndex,int perkListIndex) `

### SelectPerk
`public bool SelectPerk(int perkListIndex,int perkIndex,int enforcedSelectedTroopIndex = -1) `

### HandleVoteChange
`public void HandleVoteChange(CultureVoteTypes voteType,BasicCultureObject culture) `

### OnFinalize
`public override void OnFinalize() `

### OnInitialize
`public override void OnInitialize() `

### GetAmountOfAgentVisualsForPeer
`public int GetAmountOfAgentVisualsForPeer() `

### GetVisuals
`public PeerVisualsHolder GetVisuals(int visualIndex) `

### ClearVisuals
`public void ClearVisuals(int visualIndex) `

### ClearAllVisuals
`public void ClearAllVisuals(bool freeResources = false) `

### OnVisualsSpawned
`public void OnVisualsSpawned(PeerVisualsHolder visualsHolder,int visualIndex) `

### GetAllAgentVisualsForPeer
`public IEnumerable<IAgentVisual> GetAllAgentVisualsForPeer() `

### GetAgentVisualForPeer
`public IAgentVisual GetAgentVisualForPeer(int visualsIndex) `
`public IAgentVisual GetAgentVisualForPeer(int visualsIndex,out IAgentVisual mountAgentVisuals) `

### TickInactivityStatus
`public void TickInactivityStatus() `

### OnKillAnotherPeer
`public void OnKillAnotherPeer(MissionPeer victimPeer) `

### OnKillBot
`public void OnKillBot(string botName) `

### OverrideCultureWithTeamCulture
`public void OverrideCultureWithTeamCulture() `

### GetNumberOfTimesPeerKilledPeer
`public int GetNumberOfTimesPeerKilledPeer(MissionPeer killedPeer) `

### ResetKillRegistry
`public void ResetKillRegistry() `

### RefreshSelectedPerks
`public bool RefreshSelectedPerks() `

### OnTeamInitialPerkInfoReceived
`public void OnTeamInitialPerkInfoReceived(int[] perks) `

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

## 参见

- [本区域目录](../)
- [API 参考](../../)
