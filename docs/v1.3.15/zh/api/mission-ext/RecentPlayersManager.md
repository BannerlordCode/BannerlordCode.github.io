<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RecentPlayersManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### GetRecentPlayerInfos
`public static Task<MBReadOnlyList<RecentPlayerInfo>> GetRecentPlayerInfos()`

**用途 / Purpose:** 获取 `recent player infos` 的当前值。

### GetRecentPlayerIds
`public static PlayerId GetRecentPlayerIds()`

**用途 / Purpose:** 获取 `recent player ids` 的当前值。

### AddOrUpdatePlayerEntry
`public static void AddOrUpdatePlayerEntry(PlayerId playerId, string playerName, InteractionType interactionType, int forcedIndex)`

**用途 / Purpose:** 向当前集合/状态中添加 `or update player entry`。

### TrimPlayers
`public static void TrimPlayers()`

**用途 / Purpose:** 处理 `trim players` 相关逻辑。

### Serialize
`public static void Serialize()`

**用途 / Purpose:** 处理 `serialize` 相关逻辑。

### GetPlayersOrdered
`public static IEnumerable<PlayerId> GetPlayersOrdered()`

**用途 / Purpose:** 获取 `players ordered` 的当前值。

## 使用示例

```csharp
var manager = RecentPlayersManager.Current;
```

## 参见

- [完整类目录](../catalog)