---
title: "BattleResult"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BattleResult`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 向当前集合/状态中添加 `or update player entry`。

### TryGetPlayerEntry
`public bool TryGetPlayerEntry(PlayerId playerId, out BattlePlayerEntry battlePlayerEntry)`

**用途 / Purpose:** 尝试获取 `get player entry`，通常以 out 参数返回结果。

### HandlePlayerDisconnect
`public void HandlePlayerDisconnect(PlayerId playerId)`

**用途 / Purpose:** 处理 `player disconnect` 事件或回调。

### DebugPrint
`public void DebugPrint()`

**用途 / Purpose:** 处理 `debug print` 相关逻辑。

### SetBattleFinished
`public void SetBattleFinished(int winnerTeamNo, bool isPremadeGame, PremadeGameType premadeGameType)`

**用途 / Purpose:** 设置 `battle finished` 的值或状态。

### SetBattleCancelled
`public void SetBattleCancelled()`

**用途 / Purpose:** 设置 `battle cancelled` 的值或状态。

## 使用示例

```csharp
var value = new BattleResult();
value.AddOrUpdatePlayerEntry(playerId, 0, "example", party, 0);
```

## 参见

- [完整类目录](../catalog)