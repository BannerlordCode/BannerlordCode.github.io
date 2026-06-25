---
title: "BattleServer"
description: "BattleServer 的自动生成类参考。"
---
# BattleServer

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleServer : Client<BattleServer>`
**Base:** `Client<BattleServer>`
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/BattleServer.cs`

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

## 主要方法

### Initialize
`public void Initialize(IBattleServerSessionHandler handler)`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 BattleServer 实例
BattleServer battleServer = ...;
battleServer.Initialize(handler);
```

### SetBadgeComponent
`public void SetBadgeComponent(IBadgeComponent badgeComponent)`

**用途 / Purpose:** 为 「badge component」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BattleServer 实例
BattleServer battleServer = ...;
battleServer.SetBadgeComponent(badgeComponent);
```

### StartServer
`public void StartServer()`

**用途 / Purpose:** 启动「server」流程或状态机。

```csharp
// 先通过子系统 API 拿到 BattleServer 实例
BattleServer battleServer = ...;
battleServer.StartServer();
```

### OnConnected
`public override void OnConnected()`

**用途 / Purpose:** 在 「connected」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BattleServer 实例
BattleServer battleServer = ...;
battleServer.OnConnected();
```

### OnCantConnect
`public override void OnCantConnect()`

**用途 / Purpose:** 在 「cant connect」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BattleServer 实例
BattleServer battleServer = ...;
battleServer.OnCantConnect();
```

### OnDisconnected
`public override void OnDisconnected()`

**用途 / Purpose:** 在 「disconnected」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BattleServer 实例
BattleServer battleServer = ...;
battleServer.OnDisconnected();
```

### BeginEndMission
`public void BeginEndMission()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 BattleServer 实例
BattleServer battleServer = ...;
battleServer.BeginEndMission();
```

### EndMission
`public void EndMission(BattleResult battleResult, GameLog gameLogs, int gameTime, Dictionary<int, int> teamScores, Dictionary<PlayerId, int> playerScores)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 BattleServer 实例
BattleServer battleServer = ...;
battleServer.EndMission(battleResult, gameLogs, 0, dictionary<int, 0, dictionary<PlayerId, 0);
```

### BattleCancelledForPlayerLeaving
`public void BattleCancelledForPlayerLeaving(PlayerId leaverID)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 BattleServer 实例
BattleServer battleServer = ...;
battleServer.BattleCancelledForPlayerLeaving(leaverID);
```

### BattleStarted
`public void BattleStarted(BattleResult battleResult)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 BattleServer 实例
BattleServer battleServer = ...;
battleServer.BattleStarted(battleResult);
```

### UpdateBattleStats
`public void UpdateBattleStats(BattleResult battleResult, Dictionary<int, int> teamScores)`

**用途 / Purpose:** 重新计算并更新 「battle stats」 的最新表示。

```csharp
// 先通过子系统 API 拿到 BattleServer 实例
BattleServer battleServer = ...;
battleServer.UpdateBattleStats(battleResult, dictionary<int, 0);
```

### DoNotAcceptNewPlayers
`public void DoNotAcceptNewPlayers()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 BattleServer 实例
BattleServer battleServer = ...;
battleServer.DoNotAcceptNewPlayers();
```

### OnWarmupEnded
`public void OnWarmupEnded()`

**用途 / Purpose:** 在 「warmup ended」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BattleServer 实例
BattleServer battleServer = ...;
battleServer.OnWarmupEnded();
```

### OnPlayerSpawned
`public void OnPlayerSpawned(PlayerId playerId)`

**用途 / Purpose:** 在 「player spawned」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BattleServer 实例
BattleServer battleServer = ...;
battleServer.OnPlayerSpawned(playerId);
```

### GetPeer
`public BattlePeer GetPeer(string name)`

**用途 / Purpose:** 读取并返回当前对象中 「peer」 的结果。

```csharp
// 先通过子系统 API 拿到 BattleServer 实例
BattleServer battleServer = ...;
var result = battleServer.GetPeer("example");
```

### GetPeer
`public BattlePeer GetPeer(PlayerId playerId)`

**用途 / Purpose:** 读取并返回当前对象中 「peer」 的结果。

```csharp
// 先通过子系统 API 拿到 BattleServer 实例
BattleServer battleServer = ...;
var result = battleServer.GetPeer(playerId);
```

### GetPlayerParty
`public Guid GetPlayerParty(PlayerId playerId)`

**用途 / Purpose:** 读取并返回当前对象中 「player party」 的结果。

```csharp
// 先通过子系统 API 拿到 BattleServer 实例
BattleServer battleServer = ...;
var result = battleServer.GetPlayerParty(playerId);
```

### HandlePlayerDisconnect
`public void HandlePlayerDisconnect(PlayerId playerId, DisconnectType disconnectType, BattleResult battleResult)`

**用途 / Purpose:** 执行与 「player disconnect」 相关的响应逻辑。

```csharp
// 先通过子系统 API 拿到 BattleServer 实例
BattleServer battleServer = ...;
battleServer.HandlePlayerDisconnect(playerId, disconnectType, battleResult);
```

### InformGameServerReady
`public async void InformGameServerReady()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 BattleServer 实例
BattleServer battleServer = ...;
battleServer.InformGameServerReady();
```

### OnFriendlyHit
`public void OnFriendlyHit(int round, PlayerId hitter, PlayerId victim, float damage)`

**用途 / Purpose:** 在 「friendly hit」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BattleServer 实例
BattleServer battleServer = ...;
battleServer.OnFriendlyHit(0, hitter, victim, 0);
```

### OnFriendlyKill
`public void OnFriendlyKill(int round, PlayerId killer, PlayerId victim)`

**用途 / Purpose:** 在 「friendly kill」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BattleServer 实例
BattleServer battleServer = ...;
battleServer.OnFriendlyKill(0, killer, victim);
```

### AllPlayersConnected
`public bool AllPlayersConnected()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 BattleServer 实例
BattleServer battleServer = ...;
var result = battleServer.AllPlayersConnected();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BattleServer battleServer = ...;
battleServer.Initialize(handler);
```

## 参见

- [本区域目录](../)