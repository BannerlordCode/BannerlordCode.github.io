---
title: "RecentPlayersManager"
description: "RecentPlayersManager 的自动生成类参考。"
---
# RecentPlayersManager

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class RecentPlayersManager`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.Diamond/RecentPlayersManager.cs`

## 概述

`RecentPlayersManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `RecentPlayersManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `RecentPlayers` | `public static MBReadOnlyList<RecentPlayerInfo> RecentPlayers { get; }` |
| `Score` | `public int Score { get; }` |
| `ProcessType` | `public RecentPlayersManager.InteractionTypeInfo.InteractionProcessType ProcessType { get; }` |

## 主要方法

### Initialize
`public static void Initialize()`

**用途 / Purpose:** 加载当前对象所需的初始资源、状态或绑定。

```csharp
// 静态调用，不需要实例
RecentPlayersManager.Initialize();
```

### GetRecentPlayerInfos
`public static Task<MBReadOnlyList<RecentPlayerInfo>> GetRecentPlayerInfos()`

**用途 / Purpose:** 读取并返回当前对象中 recent player infos 的结果。

```csharp
// 静态调用，不需要实例
RecentPlayersManager.GetRecentPlayerInfos();
```

### GetRecentPlayerIds
`public static PlayerId GetRecentPlayerIds()`

**用途 / Purpose:** 读取并返回当前对象中 recent player ids 的结果。

```csharp
// 静态调用，不需要实例
RecentPlayersManager.GetRecentPlayerIds();
```

### AddOrUpdatePlayerEntry
`public static void AddOrUpdatePlayerEntry(PlayerId playerId, string playerName, InteractionType interactionType, int forcedIndex)`

**用途 / Purpose:** 将 or update player entry 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
RecentPlayersManager.AddOrUpdatePlayerEntry(playerId, "example", interactionType, 0);
```

### TrimPlayers
`public static void TrimPlayers()`

**用途 / Purpose:** 调用 TrimPlayers 对应的操作。

```csharp
// 静态调用，不需要实例
RecentPlayersManager.TrimPlayers();
```

### Serialize
`public static void Serialize()`

**用途 / Purpose:** 将当前对象序列化为可存储或传输的格式。

```csharp
// 静态调用，不需要实例
RecentPlayersManager.Serialize();
```

### GetPlayersOrdered
`public static IEnumerable<PlayerId> GetPlayersOrdered()`

**用途 / Purpose:** 读取并返回当前对象中 players ordered 的结果。

```csharp
// 静态调用，不需要实例
RecentPlayersManager.GetPlayersOrdered();
```

## 使用示例

```csharp
var manager = RecentPlayersManager.Current;
```

## 参见

- [本区域目录](../)