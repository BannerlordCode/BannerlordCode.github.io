---
title: "BattleServer"
description: "Auto-generated class reference for BattleServer."
---
# BattleServer

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade.Diamond
**Type:** `public class BattleServer : Client `
**Base:** Client
**Source:** TaleWorlds.MountAndBlade.Diamond/BattleServer.cs

## Overview

Auto-generated stub for `BattleServer`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### Initialize
`public void Initialize(IBattleServerSessionHandler handler)`

### SetBadgeComponent
`public void SetBadgeComponent(IBadgeComponent badgeComponent)`

### StartServer
`public void StartServer()`

### OnTick
`protected override void OnTick()`

### OnConnected
`public override void OnConnected()`

### OnCantConnect
`public override void OnCantConnect()`

### OnDisconnected
`public override void OnDisconnected()`

### BeginEndMission
`public void BeginEndMission()`

### EndMission
`public void EndMission(BattleResult battleResult,GameLog[] gameLogs,int gameTime,Dictionary<int,int> teamScores,Dictionary<PlayerId,int> playerScores)`

### BattleCancelledForPlayerLeaving
`public void BattleCancelledForPlayerLeaving(PlayerId leaverID)`

### BattleStarted
`public void BattleStarted(BattleResult battleResult)`

### UpdateBattleStats
`public void UpdateBattleStats(BattleResult battleResult,Dictionary<int,int> teamScores)`

### DoNotAcceptNewPlayers
`public void DoNotAcceptNewPlayers()`

### OnWarmupEnded
`public void OnWarmupEnded()`

### OnPlayerSpawned
`public void OnPlayerSpawned(PlayerId playerId)`

### GetPeer
`public BattlePeer GetPeer(string name)`

### GetPlayerParty
`public Guid GetPlayerParty(PlayerId playerId)`

### HandlePlayerDisconnect
`public void HandlePlayerDisconnect(PlayerId playerId,DisconnectType disconnectType,BattleResult battleResult)`

### InformGameServerReady
`public async void InformGameServerReady()`

### OnFriendlyHit
`public void OnFriendlyHit(int round,PlayerId hitter,PlayerId victim,float damage)`

### OnFriendlyKill
`public void OnFriendlyKill(int round,PlayerId killer,PlayerId victim)`

### AllPlayersConnected
`public bool AllPlayersConnected()`

## See Also

- [Section index](../)
