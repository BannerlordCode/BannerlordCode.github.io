---
title: "MissionMultiplayerGameModeBaseClient"
description: "MissionMultiplayerGameModeBaseClient 的自动生成类参考。"
---
# MissionMultiplayerGameModeBaseClient

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionMultiplayerGameModeBaseClient : MissionNetwork, ICameraModeLogic`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MissionMultiplayerGameModeBaseClient.cs`

## 概述

`MissionMultiplayerGameModeBaseClient` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MissionLobbyComponent` | `public MissionLobbyComponent MissionLobbyComponent { get; }` |
| `MissionNetworkComponent` | `public MissionNetworkComponent MissionNetworkComponent { get; }` |
| `ScoreboardComponent` | `public MissionScoreboardComponent ScoreboardComponent { get; }` |
| `NotificationsComponent` | `public MultiplayerGameNotificationsComponent NotificationsComponent { get; }` |
| `WarmupComponent` | `public MultiplayerWarmupComponent WarmupComponent { get; }` |
| `RoundComponent` | `public IRoundComponent RoundComponent { get; }` |
| `TimerComponent` | `public MultiplayerTimerComponent TimerComponent { get; }` |
| `IsGameModeUsingGold` | `public abstract bool IsGameModeUsingGold { get; }` |
| `IsGameModeTactical` | `public abstract bool IsGameModeTactical { get; }` |
| `IsGameModeUsingCasualGold` | `public virtual bool IsGameModeUsingCasualGold { get; }` |
| `IsGameModeUsingRoundCountdown` | `public abstract bool IsGameModeUsingRoundCountdown { get; }` |
| `IsGameModeUsingAllowCultureChange` | `public virtual bool IsGameModeUsingAllowCultureChange { get; }` |
| `IsGameModeUsingAllowTroopChange` | `public virtual bool IsGameModeUsingAllowTroopChange { get; }` |
| `GameType` | `public abstract MultiplayerGameType GameType { get; }` |
| `IsRoundInProgress` | `public bool IsRoundInProgress { get; }` |
| `IsInWarmup` | `public bool IsInWarmup { get; }` |
| `RemainingTime` | `public float RemainingTime { get; }` |

## 主要方法

### GetGoldAmount
`public abstract int GetGoldAmount()`

**用途 / Purpose:** 读取并返回当前对象中 gold amount 的结果。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeBaseClient 实例
MissionMultiplayerGameModeBaseClient missionMultiplayerGameModeBaseClient = ...;
var result = missionMultiplayerGameModeBaseClient.GetGoldAmount();
```

### GetMissionCameraLockMode
`public virtual SpectatorCameraTypes GetMissionCameraLockMode(bool lockedToMainPlayer)`

**用途 / Purpose:** 读取并返回当前对象中 mission camera lock mode 的结果。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeBaseClient 实例
MissionMultiplayerGameModeBaseClient missionMultiplayerGameModeBaseClient = ...;
var result = missionMultiplayerGameModeBaseClient.GetMissionCameraLockMode(false);
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 behavior initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeBaseClient 实例
MissionMultiplayerGameModeBaseClient missionMultiplayerGameModeBaseClient = ...;
missionMultiplayerGameModeBaseClient.OnBehaviorInitialize();
```

### EarlyStart
`public override void EarlyStart()`

**用途 / Purpose:** 调用 EarlyStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeBaseClient 实例
MissionMultiplayerGameModeBaseClient missionMultiplayerGameModeBaseClient = ...;
missionMultiplayerGameModeBaseClient.EarlyStart();
```

### CheckTimer
`public bool CheckTimer(out int remainingTime, out int remainingWarningTime, bool forceUpdate = false)`

**用途 / Purpose:** 检查timer在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeBaseClient 实例
MissionMultiplayerGameModeBaseClient missionMultiplayerGameModeBaseClient = ...;
var result = missionMultiplayerGameModeBaseClient.CheckTimer(remainingTime, remainingWarningTime, false);
```

### OnGoldAmountChangedForRepresentative
`public abstract void OnGoldAmountChangedForRepresentative(MissionRepresentativeBase representative, int goldAmount)`

**用途 / Purpose:** 在 gold amount changed for representative 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeBaseClient 实例
MissionMultiplayerGameModeBaseClient missionMultiplayerGameModeBaseClient = ...;
missionMultiplayerGameModeBaseClient.OnGoldAmountChangedForRepresentative(representative, 0);
```

### CanRequestTroopChange
`public virtual bool CanRequestTroopChange()`

**用途 / Purpose:** 检查当前对象是否满足 request troop change 的前置条件。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeBaseClient 实例
MissionMultiplayerGameModeBaseClient missionMultiplayerGameModeBaseClient = ...;
var result = missionMultiplayerGameModeBaseClient.CanRequestTroopChange();
```

### CanRequestCultureChange
`public virtual bool CanRequestCultureChange()`

**用途 / Purpose:** 检查当前对象是否满足 request culture change 的前置条件。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeBaseClient 实例
MissionMultiplayerGameModeBaseClient missionMultiplayerGameModeBaseClient = ...;
var result = missionMultiplayerGameModeBaseClient.CanRequestCultureChange();
```

### IsClassAvailable
`public bool IsClassAvailable(MultiplayerClassDivisions.MPHeroClass heroClass)`

**用途 / Purpose:** 判断当前对象是否处于 class available 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeBaseClient 实例
MissionMultiplayerGameModeBaseClient missionMultiplayerGameModeBaseClient = ...;
var result = missionMultiplayerGameModeBaseClient.IsClassAvailable(heroClass);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MissionMultiplayerGameModeBaseClient instance = ...;
```

## 参见

- [本区域目录](../)