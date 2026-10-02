---
title: "CustomBattleServer"
description: "Auto-generated class reference for CustomBattleServer."
---
# CustomBattleServer

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade.Diamond
**Type:** `public class CustomBattleServer : Client `
**Base:** Client
**Source:** TaleWorlds.MountAndBlade.Diamond/CustomBattleServer.cs

## Overview

Auto-generated stub for `CustomBattleServer`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### SetBadgeComponent
`public void SetBadgeComponent(IBadgeComponent badgeComponent)`

### Connect
`public void Connect(ICustomBattleServerSessionHandler handler,string authToken,bool isSinglePlatformServer,string[] loadedModuleIDs,bool allowsOptionalModules,bool isPlayerHosted)`

### OnConnected
`public override void OnConnected()`

### OnCantConnect
`public override void OnCantConnect()`

### OnDisconnected
`public override void OnDisconnected()`

### OnTick
`protected override void OnTick()`

### OnPlayerDisconnectedFromLobbyMessage
`public void OnPlayerDisconnectedFromLobbyMessage(PlayerDisconnectedFromLobbyMessage message)`

### ResponseCustomGameClientConnection
`public void ResponseCustomGameClientConnection(PlayerJoinGameResponseDataFromHost[] playerJoinData)`

### RegisterGame
`public async Task RegisterGame(string gameModule,string gameType,string serverName,int maxPlayerCount,string scene,string uniqueSceneId,int port,string region,string gamePassword,string adminPassword,string spectatorPassword,int permission,int maxSpectatorCount = 0,bool enableSpectators = false)`

### UpdateCustomGameData
`public void UpdateCustomGameData(string newGameType,string newMap,int newCount)`

### KickPlayer
`public void KickPlayer(PlayerId id,bool banPlayer)`

### HandlePlayerDisconnect
`public void HandlePlayerDisconnect(PlayerId playerId,DisconnectType disconnectType)`

### FinishAsIdle
`public void FinishAsIdle(GameLog[] gameLogs)`

### FinishGame
`public void FinishGame(GameLog[] gameLogs)`

### UpdateGameProperties
`public void UpdateGameProperties(string gameType,string scene,string uniqueSceneId)`

### BeforeStartingNextBattle
`public void BeforeStartingNextBattle(GameLog[] gameLogs)`

### BattleStarted
`public void BattleStarted(Dictionary<PlayerId,int> playerTeams,string cultureTeam1,string cultureTeam2)`

### BattleFinished
`public void BattleFinished(BattleResult battleResult,Dictionary<int,int> teamScores,Dictionary<PlayerId,int> playerScores)`

### UpdateBattleStats
`public void UpdateBattleStats(BattleResult battleResult,Dictionary<int,int> teamScores,Dictionary<PlayerId,int> playerScores)`

## See Also

- [Section index](../)
