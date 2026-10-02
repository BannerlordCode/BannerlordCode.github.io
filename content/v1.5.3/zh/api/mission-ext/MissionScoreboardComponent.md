---
title: "MissionScoreboardComponent"
description: "MissionScoreboardComponent 的自动生成类参考。"
---
# MissionScoreboardComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionScoreboardComponent : MissionNetwork `
**Base:** MissionNetwork
**Source:** TaleWorlds.MountAndBlade/MissionScoreboardComponent.cs

## 概述

`MissionScoreboardComponent` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/MissionScoreboardComponent.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### AfterStart
`public override void AfterStart() `

### AddRemoveMessageHandlers
`protected override void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer) `

### OnRemoveBehavior
`public override void OnRemoveBehavior() `

### ResetBotScores
`public void ResetBotScores() `

### ChangeTeamScore
`public void ChangeTeamScore(Team team,int scoreChange) `

### GetSideSafe
`public MissionScoreboardComponent.MissionScoreboardSide GetSideSafe(BattleSideEnum battleSide) `

### GetRoundScore
`public int GetRoundScore(BattleSideEnum side) `

### HandleServerUpdateRoundScoresMessage
`public void HandleServerUpdateRoundScoresMessage(GameNetworkMessage baseMessage) `

### HandleServerSetRoundMVP
`public void HandleServerSetRoundMVP(GameNetworkMessage baseMessage) `

### CalculateTotalNumbers
`public void CalculateTotalNumbers() `

### OnClearScene
`public override void OnClearScene() `

### OnPlayerConnectedToServer
`public override void OnPlayerConnectedToServer(NetworkCommunicator networkPeer) `

### OnPlayerDisconnectedFromServer
`public override void OnPlayerDisconnectedFromServer(NetworkCommunicator networkPeer) `

### OnAgentBuild
`public override void OnAgentBuild(Agent agent,Banner banner) `

### OnAssignPlayerAsSergeantOfFormation
`public override void OnAssignPlayerAsSergeantOfFormation(Agent agent) `

### BotPropertiesChanged
`public void BotPropertiesChanged(BattleSideEnum side) `

### PlayerPropertiesChanged
`public void PlayerPropertiesChanged(NetworkCommunicator player) `
`public void PlayerPropertiesChanged(MissionPeer player) `

### HandleLateNewClientAfterSynchronized
`protected override void HandleLateNewClientAfterSynchronized(NetworkCommunicator networkPeer) `

### HandleServerEventBotDataMessage
`public void HandleServerEventBotDataMessage(GameNetworkMessage baseMessage) `

### OnRoundEnding
`public void OnRoundEnding() `

### OnMultiplayerGameClientBehaviorInitialized
`public void OnMultiplayerGameClientBehaviorInitialized(ref Action<NetworkCommunicator> onBotsControlledChanged) `

### GetMatchWinnerSide
`public BattleSideEnum GetMatchWinnerSide() `

### OnScoreHit
`public override void OnScoreHit(Agent affectedAgent,Agent affectorAgent,WeaponComponentData attackerWeapon,bool isBlocked,bool isSiegeEngineHit,in Blow blow,in AttackCollisionData collisionData,float damagedHp,float hitDistance,float shotDifficulty) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
