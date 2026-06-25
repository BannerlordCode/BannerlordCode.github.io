---
title: "BattleResult"
description: "BattleResult 的自动生成类参考。"
---
# BattleResult

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleResult`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.Diamond/BattleResult.cs`

## 概述

`BattleResult` 位于 `TaleWorlds.MountAndBlade.Diamond`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Diamond` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsCancelled` | `public bool IsCancelled { get; }` |
| `WinnerTeamNo` | `public int WinnerTeamNo { get; }` |
| `IsPremadeGame` | `public bool IsPremadeGame { get; }` |
| `PremadeGameType` | `public PremadeGameType PremadeGameType { get; }` |
| `PlayerEntries` | `public Dictionary<string, BattlePlayerEntry> PlayerEntries { get; }` |

## 主要方法

### AddOrUpdatePlayerEntry
`public void AddOrUpdatePlayerEntry(PlayerId playerId, int teamNo, string gameMode, Guid party, int overriddenInitialPlayTime = -1)`

**用途 / Purpose:** 将 「or update player entry」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 BattleResult 实例
BattleResult battleResult = ...;
battleResult.AddOrUpdatePlayerEntry(playerId, 0, "example", party, 0);
```

### TryGetPlayerEntry
`public bool TryGetPlayerEntry(PlayerId playerId, out BattlePlayerEntry battlePlayerEntry)`

**用途 / Purpose:** 尝试获取 「get player entry」 的值，通常通过 out 参数返回是否成功。

```csharp
// 先通过子系统 API 拿到 BattleResult 实例
BattleResult battleResult = ...;
var result = battleResult.TryGetPlayerEntry(playerId, battlePlayerEntry);
```

### HandlePlayerDisconnect
`public void HandlePlayerDisconnect(PlayerId playerId)`

**用途 / Purpose:** 执行与 「player disconnect」 相关的响应逻辑。

```csharp
// 先通过子系统 API 拿到 BattleResult 实例
BattleResult battleResult = ...;
battleResult.HandlePlayerDisconnect(playerId);
```

### DebugPrint
`public void DebugPrint()`

**用途 / Purpose:** 处理与 「debug print」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 BattleResult 实例
BattleResult battleResult = ...;
battleResult.DebugPrint();
```

### SetBattleFinished
`public void SetBattleFinished(int winnerTeamNo, bool isPremadeGame, PremadeGameType premadeGameType)`

**用途 / Purpose:** 为 「battle finished」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BattleResult 实例
BattleResult battleResult = ...;
battleResult.SetBattleFinished(0, false, premadeGameType);
```

### SetBattleCancelled
`public void SetBattleCancelled()`

**用途 / Purpose:** 为 「battle cancelled」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BattleResult 实例
BattleResult battleResult = ...;
battleResult.SetBattleCancelled();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BattleResult battleResult = ...;
battleResult.AddOrUpdatePlayerEntry(playerId, 0, "example", party, 0);
```

## 参见

- [本区域目录](../)