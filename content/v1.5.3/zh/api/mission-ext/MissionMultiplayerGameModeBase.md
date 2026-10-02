---
title: "MissionMultiplayerGameModeBase"
description: "MissionMultiplayerGameModeBase 的自动生成类参考。"
---
# MissionMultiplayerGameModeBase

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionMultiplayerGameModeBase : MissionNetwork `
**Base:** MissionNetwork
**Source:** TaleWorlds.MountAndBlade/MissionMultiplayerGameModeBase.cs

## 概述

`MissionMultiplayerGameModeBase` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/MissionMultiplayerGameModeBase.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetMissionType
`public abstract MultiplayerGameType GetMissionType()`

### CheckIfOvertime
`public virtual bool CheckIfOvertime() `

### OnBehaviorInitialize
`public override void OnBehaviorInitialize() `

### OnMissionTick
`public override void OnMissionTick(float dt) `

### CheckForWarmupEnd
`public virtual bool CheckForWarmupEnd() `

### CheckForRoundEnd
`public virtual bool CheckForRoundEnd() `

### CheckForMatchEnd
`public virtual bool CheckForMatchEnd() `

### UseCultureSelection
`public virtual bool UseCultureSelection() `

### UseRoundController
`public virtual bool UseRoundController() `

### GetWinnerTeam
`public virtual Team GetWinnerTeam() `

### OnPeerChangedTeam
`public virtual void OnPeerChangedTeam(NetworkCommunicator peer,Team oldTeam,Team newTeam) `

### OnClearScene
`public override void OnClearScene() `

### ClearPeerCounts
`public void ClearPeerCounts() `

### ShouldSpawnVisualsForServer
`public bool ShouldSpawnVisualsForServer(NetworkCommunicator spawningNetworkPeer) `

### HandleAgentVisualSpawning
`public void HandleAgentVisualSpawning(NetworkCommunicator spawningNetworkPeer,AgentBuildData spawningAgentBuildData,int troopCountInFormation = 0,bool useCosmetics = true) `

### AllowCustomPlayerBanners
`public virtual bool AllowCustomPlayerBanners() `

### GetScoreForKill
`public virtual int GetScoreForKill(Agent killedAgent) `

### GetTroopNumberMultiplierForMissingPlayer
`public virtual float GetTroopNumberMultiplierForMissingPlayer(MissionPeer spawningPeer) `

### GetCurrentGoldForPeer
`public int GetCurrentGoldForPeer(MissionPeer peer) `

### ChangeCurrentGoldForPeer
`public void ChangeCurrentGoldForPeer(MissionPeer peer,int newAmount) `

### HandleLateNewClientAfterLoadingFinished
`protected override void HandleLateNewClientAfterLoadingFinished(NetworkCommunicator networkPeer) `

### CheckIfPlayerCanDespawn
`public virtual bool CheckIfPlayerCanDespawn(MissionPeer missionPeer) `

### OnPreMissionTick
`public override void OnPreMissionTick(float dt) `

### GetUsedCosmeticsFromPeer
`public Dictionary<string,string> GetUsedCosmeticsFromPeer(MissionPeer missionPeer,BasicCharacterObject selectedTroopCharacter) `

### AddCosmeticItemsToEquipment
`public void AddCosmeticItemsToEquipment(Equipment equipment,Dictionary<string,string> choosenCosmetics) `

### IsClassAvailable
`public bool IsClassAvailable(MultiplayerClassDivisions.MPHeroClass heroClass) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
