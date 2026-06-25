---
title: "TournamentBehavior"
description: "TournamentBehavior 的自动生成类参考。"
---
# TournamentBehavior

**Namespace:** SandBox.Tournaments.MissionLogics
**Module:** SandBox.Tournaments
**Type:** `public class TournamentBehavior : MissionLogic, ICameraModeLogic`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Tournaments.MissionLogics/TournamentBehavior.cs`

## 概述

`TournamentBehavior` 位于 `SandBox.Tournaments.MissionLogics`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Tournaments.MissionLogics` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Rounds` | `public TournamentRound Rounds { get; }` |
| `IsPlayerEliminated` | `public bool IsPlayerEliminated { get; }` |
| `CurrentRoundIndex` | `public int CurrentRoundIndex { get; }` |
| `LastMatch` | `public TournamentMatch LastMatch { get; }` |
| `NextRound` | `public TournamentRound NextRound { get; }` |
| `Winner` | `public TournamentParticipant Winner { get; }` |
| `IsPlayerParticipating` | `public bool IsPlayerParticipating { get; }` |
| `Settlement` | `public Settlement Settlement { get; }` |
| `BetOdd` | `public float BetOdd { get; }` |
| `BettedDenars` | `public int BettedDenars { get; }` |
| `OverallExpectedDenars` | `public int OverallExpectedDenars { get; }` |

## 主要方法

### GetMissionCameraLockMode
`public SpectatorCameraTypes GetMissionCameraLockMode(bool lockedToMainPlayer)`

**用途 / Purpose:** 读取并返回当前对象中 「mission camera lock mode」 的结果。

```csharp
// 先通过子系统 API 拿到 TournamentBehavior 实例
TournamentBehavior tournamentBehavior = ...;
var result = tournamentBehavior.GetMissionCameraLockMode(false);
```

### GetAllPossibleParticipants
`public MBList<CharacterObject> GetAllPossibleParticipants()`

**用途 / Purpose:** 读取并返回当前对象中 「all possible participants」 的结果。

```csharp
// 先通过子系统 API 拿到 TournamentBehavior 实例
TournamentBehavior tournamentBehavior = ...;
var result = tournamentBehavior.GetAllPossibleParticipants();
```

### DeleteTournamentSetsExcept
`public static void DeleteTournamentSetsExcept(GameEntity selectedSetEntity)`

**用途 / Purpose:** 处理与 「delete tournament sets except」 相关的逻辑。

```csharp
// 静态调用，不需要实例
TournamentBehavior.DeleteTournamentSetsExcept(selectedSetEntity);
```

### DeleteAllTournamentSets
`public static void DeleteAllTournamentSets()`

**用途 / Purpose:** 处理与 「delete all tournament sets」 相关的逻辑。

```csharp
// 静态调用，不需要实例
TournamentBehavior.DeleteAllTournamentSets();
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 在 「start」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TournamentBehavior 实例
TournamentBehavior tournamentBehavior = ...;
tournamentBehavior.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 「mission tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TournamentBehavior 实例
TournamentBehavior tournamentBehavior = ...;
tournamentBehavior.OnMissionTick(0);
```

### StartMatch
`public void StartMatch()`

**用途 / Purpose:** 启动「match」流程或状态机。

```csharp
// 先通过子系统 API 拿到 TournamentBehavior 实例
TournamentBehavior tournamentBehavior = ...;
tournamentBehavior.StartMatch();
```

### SkipMatch
`public void SkipMatch(bool isLeave = false)`

**用途 / Purpose:** 处理与 「skip match」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 TournamentBehavior 实例
TournamentBehavior tournamentBehavior = ...;
tournamentBehavior.SkipMatch(false);
```

### EndTournamentViaLeave
`public void EndTournamentViaLeave()`

**用途 / Purpose:** 处理与 「end tournament via leave」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 TournamentBehavior 实例
TournamentBehavior tournamentBehavior = ...;
tournamentBehavior.EndTournamentViaLeave();
```

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)`

**用途 / Purpose:** 在 「end mission request」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TournamentBehavior 实例
TournamentBehavior tournamentBehavior = ...;
var result = tournamentBehavior.OnEndMissionRequest(canPlayerLeave);
```

### PlaceABet
`public void PlaceABet(int bet)`

**用途 / Purpose:** 处理与 「place a bet」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 TournamentBehavior 实例
TournamentBehavior tournamentBehavior = ...;
tournamentBehavior.PlaceABet(0);
```

### GetExpectedDenarsForBet
`public int GetExpectedDenarsForBet(int bet)`

**用途 / Purpose:** 读取并返回当前对象中 「expected denars for bet」 的结果。

```csharp
// 先通过子系统 API 拿到 TournamentBehavior 实例
TournamentBehavior tournamentBehavior = ...;
var result = tournamentBehavior.GetExpectedDenarsForBet(0);
```

### GetMaximumBet
`public int GetMaximumBet()`

**用途 / Purpose:** 读取并返回当前对象中 「maximum bet」 的结果。

```csharp
// 先通过子系统 API 拿到 TournamentBehavior 实例
TournamentBehavior tournamentBehavior = ...;
var result = tournamentBehavior.GetMaximumBet();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TournamentBehavior tournamentBehavior = ...;
tournamentBehavior.GetMissionCameraLockMode(false);
```

## 参见

- [本区域目录](../)