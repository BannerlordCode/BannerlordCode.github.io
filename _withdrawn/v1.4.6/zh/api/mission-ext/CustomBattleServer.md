---
title: "CustomBattleServer"
description: "CustomBattleServer：TaleWorlds.MountAndBlade.Diamond 的 public 类，继承 Client<CustomBattleServer>；公开成员 33 个（方法 20、属性 11、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Diamond/CustomBattleServer.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CustomBattleServer

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class CustomBattleServer : Client<CustomBattleServer>`
**File:** `TaleWorlds.MountAndBlade.Diamond/CustomBattleServer.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

CustomBattleServer 位于 TaleWorlds.MountAndBlade.Diamond 模块，源文件 TaleWorlds.MountAndBlade.Diamond/CustomBattleServer.cs。它是一个 public 类，实现/继承 Client<CustomBattleServer>，继承链为 CustomBattleServer → Client → DiamondClientApplicationObject。public/protected 成员共 33 个：20 方法、11 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CustomBattleServer 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Diamond`，继承链 CustomBattleServer → Client → DiamondClientApplicationObject。成员构成以方法为主（方法 20/33，属性 11/33），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Diamond/CustomBattleServer.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Finished` | `public bool Finished` | 属性 |
| `IsRegistered` | `public bool IsRegistered` | 属性 |
| `IsPlaying` | `public bool IsPlaying` | 属性 |
| `Connected` | `public bool Connected` | 属性 |
| `CurrentState` | `public CustomBattleServer.State CurrentState` | 属性 |
| `IsIdle` | `public bool IsIdle` | 属性 |
| `CustomGameType` | `public string CustomGameType` | 属性 |
| `CustomGameScene` | `public string CustomGameScene` | 属性 |
| `Port` | `public int Port` | 属性 |
| `BattleResult` | `public MultipleBattleResult BattleResult` | 属性 |
| `CustomBattleServer` | `public CustomBattleServer(DiamondClientApplication diamondClientApplication, IClientSessionProvider<CustomBattleServer>provider) : base(diamondClientApplication, provider, false)` | 构造函数 |
| `SetBadgeComponent` | `public void SetBadgeComponent(IBadgeComponent badgeComponent)` | 方法 |
| `Connect` | `public void Connect(ICustomBattleServerSessionHandler handler, string authToken, bool isSinglePlatformServer, string[]loadedModuleIDs, bool allowsOptionalModules, bool isPlayerHosted)` | 方法 |
| `OnConnected` | `public override void OnConnected()` | 方法 |
| `OnCantConnect` | `public override void OnCantConnect()` | 方法 |
| `OnDisconnected` | `public override void OnDisconnected()` | 方法 |
| `OnTick` | `protected override void OnTick()` | 方法 |
| `OnPlayerDisconnectedFromLobbyMessage` | `public void OnPlayerDisconnectedFromLobbyMessage(PlayerDisconnectedFromLobbyMessage message)` | 方法 |
| `ResponseCustomGameClientConnection` | `public void ResponseCustomGameClientConnection(PlayerJoinGameResponseDataFromHost[]playerJoinData)` | 方法 |
| `RegisterGame` | `public async Task RegisterGame(string gameModule, string gameType, string serverName, int maxPlayerCount, string scene, string uniqueSceneId, int port, string region, string gamePassword, string adminPassword, int permission)` | 方法 |
| `RegisterGame` | `public async Task RegisterGame(int gameDefinitionId, string gameModule, string gameType, string serverName, int maxPlayerCount, string scene, string uniqueSceneId, int port, string region, string gamePassword, string adminPassword, int permission, string overriddenIP)` | 方法 |
| `UpdateCustomGameData` | `public void UpdateCustomGameData(string newGameType, string newMap, int newCount)` | 方法 |
| `KickPlayer` | `public void KickPlayer(PlayerId id, bool banPlayer)` | 方法 |
| `HandlePlayerDisconnect` | `public void HandlePlayerDisconnect(PlayerId playerId, DisconnectType disconnectType)` | 方法 |
| `FinishAsIdle` | `public void FinishAsIdle(GameLog[]gameLogs)` | 方法 |
| `FinishGame` | `public void FinishGame(GameLog[]gameLogs)` | 方法 |
| `UpdateGameProperties` | `public void UpdateGameProperties(string gameType, string scene, string uniqueSceneId)` | 方法 |
| `BeforeStartingNextBattle` | `public void BeforeStartingNextBattle(GameLog[]gameLogs)` | 方法 |
| `BattleStarted` | `public void BattleStarted(Dictionary<PlayerId, int>playerTeams, string cultureTeam1, string cultureTeam2)` | 方法 |
| `BattleFinished` | `public void BattleFinished(BattleResult battleResult, Dictionary<int, int>teamScores, Dictionary<PlayerId, int>playerScores)` | 方法 |
| `UpdateBattleStats` | `public void UpdateBattleStats(BattleResult battleResult, Dictionary<int, int>teamScores, Dictionary<PlayerId, int>playerScores)` | 方法 |
| `State` | `public enum State` | 属性 |
| `State` | `public enum State` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 Client](../../engine/Client__1/)
- [同命名空间 Announcement](../Announcement/)
- [同命名空间 AnnouncementType](../AnnouncementType/)
- [同命名空间 AnotherPlayerData](../AnotherPlayerData/)
- [同命名空间 AnotherPlayerState](../AnotherPlayerState/)
