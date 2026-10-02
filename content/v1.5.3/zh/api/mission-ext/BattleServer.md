---
title: "BattleServer"
description: "BattleServer 的自动生成类参考。"
---
# BattleServer

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade.Diamond
**Type:** `public class BattleServer : Client `
**Base:** Client
**Source:** TaleWorlds.MountAndBlade.Diamond/BattleServer.cs

## 概述

`BattleServer` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade.Diamond/BattleServer.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### Initialize
`public void Initialize(IBattleServerSessionHandler handler) `

### SetBadgeComponent
`public void SetBadgeComponent(IBadgeComponent badgeComponent) `

### StartServer
`public void StartServer() `

### OnTick
`protected override void OnTick() `

### OnConnected
`public override void OnConnected() `

### OnCantConnect
`public override void OnCantConnect() `

### OnDisconnected
`public override void OnDisconnected() `

### BeginEndMission
`public void BeginEndMission() `

### EndMission
`public void EndMission(BattleResult battleResult,GameLog[] gameLogs,int gameTime,Dictionary<int,int> teamScores,Dictionary<PlayerId,int> playerScores) `

### BattleCancelledForPlayerLeaving
`public void BattleCancelledForPlayerLeaving(PlayerId leaverID) `

### BattleStarted
`public void BattleStarted(BattleResult battleResult) `

### UpdateBattleStats
`public void UpdateBattleStats(BattleResult battleResult,Dictionary<int,int> teamScores) `

### DoNotAcceptNewPlayers
`public void DoNotAcceptNewPlayers() `

### OnWarmupEnded
`public void OnWarmupEnded() `

### OnPlayerSpawned
`public void OnPlayerSpawned(PlayerId playerId) `

### GetPeer
`public BattlePeer GetPeer(string name) `
`public BattlePeer GetPeer(PlayerId playerId) `

### GetPlayerParty
`public Guid GetPlayerParty(PlayerId playerId) `

### HandlePlayerDisconnect
`public void HandlePlayerDisconnect(PlayerId playerId,DisconnectType disconnectType,BattleResult battleResult) `

### InformGameServerReady
`public async void InformGameServerReady() `

### OnFriendlyHit
`public void OnFriendlyHit(int round,PlayerId hitter,PlayerId victim,float damage) `

### OnFriendlyKill
`public void OnFriendlyKill(int round,PlayerId killer,PlayerId victim) `

### AllPlayersConnected
`public bool AllPlayersConnected() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
