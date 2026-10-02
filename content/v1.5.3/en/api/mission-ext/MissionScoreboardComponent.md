---
title: "MissionScoreboardComponent"
description: "Auto-generated class reference for MissionScoreboardComponent."
---
# MissionScoreboardComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionScoreboardComponent : MissionNetwork `
**Base:** MissionNetwork
**Source:** TaleWorlds.MountAndBlade/MissionScoreboardComponent.cs

## Overview

Auto-generated stub for `MissionScoreboardComponent`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### AfterStart
`public override void AfterStart()`

### AddRemoveMessageHandlers
`protected override void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer)`

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

### ResetBotScores
`public void ResetBotScores()`

### ChangeTeamScore
`public void ChangeTeamScore(Team team,int scoreChange)`

### GetSideSafe
`public MissionScoreboardComponent.MissionScoreboardSide GetSideSafe(BattleSideEnum battleSide)`

### GetRoundScore
`public int GetRoundScore(BattleSideEnum side)`

### HandleServerUpdateRoundScoresMessage
`public void HandleServerUpdateRoundScoresMessage(GameNetworkMessage baseMessage)`

### HandleServerSetRoundMVP
`public void HandleServerSetRoundMVP(GameNetworkMessage baseMessage)`

### CalculateTotalNumbers
`public void CalculateTotalNumbers()`

### OnClearScene
`public override void OnClearScene()`

### OnPlayerConnectedToServer
`public override void OnPlayerConnectedToServer(NetworkCommunicator networkPeer)`

### OnPlayerDisconnectedFromServer
`public override void OnPlayerDisconnectedFromServer(NetworkCommunicator networkPeer)`

### OnAgentBuild
`public override void OnAgentBuild(Agent agent,Banner banner)`

### OnAssignPlayerAsSergeantOfFormation
`public override void OnAssignPlayerAsSergeantOfFormation(Agent agent)`

### BotPropertiesChanged
`public void BotPropertiesChanged(BattleSideEnum side)`

### PlayerPropertiesChanged
`public void PlayerPropertiesChanged(NetworkCommunicator player)`

### HandleLateNewClientAfterSynchronized
`protected override void HandleLateNewClientAfterSynchronized(NetworkCommunicator networkPeer)`

### HandleServerEventBotDataMessage
`public void HandleServerEventBotDataMessage(GameNetworkMessage baseMessage)`

### OnRoundEnding
`public void OnRoundEnding()`

### OnMultiplayerGameClientBehaviorInitialized
`public void OnMultiplayerGameClientBehaviorInitialized(ref Action<NetworkCommunicator> onBotsControlledChanged)`

### GetMatchWinnerSide
`public BattleSideEnum GetMatchWinnerSide()`

### OnScoreHit
`public override void OnScoreHit(Agent affectedAgent,Agent affectorAgent,WeaponComponentData attackerWeapon,bool isBlocked,bool isSiegeEngineHit,in Blow blow,in AttackCollisionData collisionData,float damagedHp,float hitDistance,float shotDifficulty)`

## See Also

- [Section index](../)
