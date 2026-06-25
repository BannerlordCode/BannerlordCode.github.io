---
title: "BattleServer"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BattleServer`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattleServer

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleServer : Client<BattleServer>`
**Base:** `Client<BattleServer>`
**File:** `TaleWorlds.MountAndBlade.Diamond/BattleServer.cs`

## 概述

`BattleServer` 位于 `TaleWorlds.MountAndBlade.Diamond`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Diamond` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SceneName` | `public string SceneName { get; }` |
| `GameType` | `public string GameType { get; }` |
| `Faction1` | `public string Faction1 { get; }` |
| `Faction2` | `public string Faction2 { get; }` |
| `MinRequiredPlayerCountToStartBattle` | `public int MinRequiredPlayerCountToStartBattle { get; }` |
| `BattleSize` | `public int BattleSize { get; }` |
| `RoundThreshold` | `public int RoundThreshold { get; }` |
| `MoraleThreshold` | `public float MoraleThreshold { get; }` |
| `BattleId` | `public Guid BattleId { get; }` |
| `UseAnalytics` | `public bool UseAnalytics { get; }` |
| `CaptureMovementData` | `public bool CaptureMovementData { get; }` |
| `AnalyticsServiceAddress` | `public string AnalyticsServiceAddress { get; }` |
| `IsPremadeGame` | `public bool IsPremadeGame { get; }` |
| `PremadeGameType` | `public PremadeGameType PremadeGameType { get; }` |
| `AssignedPlayers` | `public PlayerId AssignedPlayers { get; }` |
| `IsActive` | `public bool IsActive { get; }` |
| `IsFinished` | `public bool IsFinished { get; }` |

## 主要方法

### Initialize
`public void Initialize(IBattleServerSessionHandler handler)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### SetBadgeComponent
`public void SetBadgeComponent(IBadgeComponent badgeComponent)`

**用途 / Purpose:** 设置 `badge component` 的值或状态。

### StartServer
`public void StartServer()`

**用途 / Purpose:** 处理 `start server` 相关逻辑。

### OnConnected
`public override void OnConnected()`

**用途 / Purpose:** 当 `connected` 事件触发时调用此方法。

### OnCantConnect
`public override void OnCantConnect()`

**用途 / Purpose:** 当 `cant connect` 事件触发时调用此方法。

### OnDisconnected
`public override void OnDisconnected()`

**用途 / Purpose:** 当 `disconnected` 事件触发时调用此方法。

### BeginEndMission
`public void BeginEndMission()`

**用途 / Purpose:** 处理 `begin end mission` 相关逻辑。

### EndMission
`public void EndMission(BattleResult battleResult, GameLog gameLogs, int gameTime, Dictionary<int, int> teamScores, Dictionary<PlayerId, int> playerScores)`

**用途 / Purpose:** 处理 `end mission` 相关逻辑。

### BattleCancelledForPlayerLeaving
`public void BattleCancelledForPlayerLeaving(PlayerId leaverID)`

**用途 / Purpose:** 处理 `battle cancelled for player leaving` 相关逻辑。

### BattleStarted
`public void BattleStarted(BattleResult battleResult)`

**用途 / Purpose:** 处理 `battle started` 相关逻辑。

### UpdateBattleStats
`public void UpdateBattleStats(BattleResult battleResult, Dictionary<int, int> teamScores)`

**用途 / Purpose:** 更新 `battle stats` 的状态或数据。

### DoNotAcceptNewPlayers
`public void DoNotAcceptNewPlayers()`

**用途 / Purpose:** 处理 `do not accept new players` 相关逻辑。

### OnWarmupEnded
`public void OnWarmupEnded()`

**用途 / Purpose:** 当 `warmup ended` 事件触发时调用此方法。

### OnPlayerSpawned
`public void OnPlayerSpawned(PlayerId playerId)`

**用途 / Purpose:** 当 `player spawned` 事件触发时调用此方法。

### GetPeer
`public BattlePeer GetPeer(string name)`

**用途 / Purpose:** 获取 `peer` 的当前值。

### GetPeer
`public BattlePeer GetPeer(PlayerId playerId)`

**用途 / Purpose:** 获取 `peer` 的当前值。

### GetPlayerParty
`public Guid GetPlayerParty(PlayerId playerId)`

**用途 / Purpose:** 获取 `player party` 的当前值。

### HandlePlayerDisconnect
`public void HandlePlayerDisconnect(PlayerId playerId, DisconnectType disconnectType, BattleResult battleResult)`

**用途 / Purpose:** 处理 `player disconnect` 事件或回调。

### InformGameServerReady
`public void InformGameServerReady()`

**用途 / Purpose:** 处理 `inform game server ready` 相关逻辑。

### OnFriendlyHit
`public void OnFriendlyHit(int round, PlayerId hitter, PlayerId victim, float damage)`

**用途 / Purpose:** 当 `friendly hit` 事件触发时调用此方法。

### OnFriendlyKill
`public void OnFriendlyKill(int round, PlayerId killer, PlayerId victim)`

**用途 / Purpose:** 当 `friendly kill` 事件触发时调用此方法。

### AllPlayersConnected
`public bool AllPlayersConnected()`

**用途 / Purpose:** 处理 `all players connected` 相关逻辑。

## 使用示例

```csharp
var value = new BattleServer();
value.Initialize(handler);
```

## 参见

- [完整类目录](../catalog)