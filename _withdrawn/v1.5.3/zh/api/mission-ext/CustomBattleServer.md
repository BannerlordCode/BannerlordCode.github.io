---
title: "CustomBattleServer"
description: "CustomBattleServer 的自动生成类参考。"
---
# CustomBattleServer

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade.Diamond
**Type:** `public class CustomBattleServer : Client `
**Base:** Client
**Source:** TaleWorlds.MountAndBlade.Diamond/CustomBattleServer.cs

## 概述

`CustomBattleServer` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade.Diamond/CustomBattleServer.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### SetBadgeComponent
`public void SetBadgeComponent(IBadgeComponent badgeComponent) `

### Connect
`public void Connect(ICustomBattleServerSessionHandler handler,string authToken,bool isSinglePlatformServer,string[] loadedModuleIDs,bool allowsOptionalModules,bool isPlayerHosted) `

### OnConnected
`public override void OnConnected() `

### OnCantConnect
`public override void OnCantConnect() `

### OnDisconnected
`public override void OnDisconnected() `

### OnTick
`protected override void OnTick() `

### OnPlayerDisconnectedFromLobbyMessage
`public void OnPlayerDisconnectedFromLobbyMessage(PlayerDisconnectedFromLobbyMessage message) `

### ResponseCustomGameClientConnection
`public void ResponseCustomGameClientConnection(PlayerJoinGameResponseDataFromHost[] playerJoinData) `

### RegisterGame
`public async Task RegisterGame(string gameModule,string gameType,string serverName,int maxPlayerCount,string scene,string uniqueSceneId,int port,string region,string gamePassword,string adminPassword,string spectatorPassword,int permission,int maxSpectatorCount = 0,bool enableSpectators = false) `
`public async Task RegisterGame(int gameDefinitionId,string gameModule,string gameType,string serverName,int maxPlayerCount,string scene,string uniqueSceneId,int port,string region,string gamePassword,string adminPassword,string spectatorPassword,int permission,string overriddenIP,int maxSpectatorCount = 0,bool enableSpectators = false) `

### UpdateCustomGameData
`public void UpdateCustomGameData(string newGameType,string newMap,int newCount) `

### KickPlayer
`public void KickPlayer(PlayerId id,bool banPlayer) `

### HandlePlayerDisconnect
`public void HandlePlayerDisconnect(PlayerId playerId,DisconnectType disconnectType) `

### FinishAsIdle
`public void FinishAsIdle(GameLog[] gameLogs) `

### FinishGame
`public void FinishGame(GameLog[] gameLogs) `

### UpdateGameProperties
`public void UpdateGameProperties(string gameType,string scene,string uniqueSceneId) `

### BeforeStartingNextBattle
`public void BeforeStartingNextBattle(GameLog[] gameLogs) `

### BattleStarted
`public void BattleStarted(Dictionary<PlayerId,int> playerTeams,string cultureTeam1,string cultureTeam2) `

### BattleFinished
`public void BattleFinished(BattleResult battleResult,Dictionary<int,int> teamScores,Dictionary<PlayerId,int> playerScores) `

### UpdateBattleStats
`public void UpdateBattleStats(BattleResult battleResult,Dictionary<int,int> teamScores,Dictionary<PlayerId,int> playerScores) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
