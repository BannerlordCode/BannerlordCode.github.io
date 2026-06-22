<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RecentPlayersManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RecentPlayersManager

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class RecentPlayersManager`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.Diamond/RecentPlayersManager.cs`

## 概述

`RecentPlayersManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要属性

| Name | Signature |
|------|-----------|
| `RecentPlayers` | `public static MBReadOnlyList<RecentPlayerInfo> RecentPlayers { get; }` |
| `Score` | `public int Score { get; }` |
| `ProcessType` | `public RecentPlayersManager.InteractionTypeInfo.InteractionProcessType ProcessType { get; }` |

## 主要方法

### Initialize
```csharp
public static void Initialize()
```

### GetRecentPlayerInfos
```csharp
public static Task<MBReadOnlyList<RecentPlayerInfo>> GetRecentPlayerInfos()
```

### GetRecentPlayerIds
```csharp
public static PlayerId GetRecentPlayerIds()
```

### AddOrUpdatePlayerEntry
```csharp
public static void AddOrUpdatePlayerEntry(PlayerId playerId, string playerName, InteractionType interactionType, int forcedIndex)
```

### TrimPlayers
```csharp
public static void TrimPlayers()
```

### Serialize
```csharp
public static void Serialize()
```

### GetPlayersOrdered
```csharp
public static IEnumerable<PlayerId> GetPlayersOrdered()
```

## 使用示例

```csharp
// RecentPlayersManager (Manager) 的典型用法
RecentPlayersManager.Current;
```

## 参见

- [完整类目录](../catalog)