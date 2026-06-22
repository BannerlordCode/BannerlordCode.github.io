<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerGlobalMutedPlayersManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerGlobalMutedPlayersManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MultiplayerGlobalMutedPlayersManager`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/MultiplayerGlobalMutedPlayersManager.cs`

## 概述

`MultiplayerGlobalMutedPlayersManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要属性

| Name | Signature |
|------|-----------|
| `MutedPlayers` | `public static List<PlayerId> MutedPlayers { get { return MultiplayerGlobalMutedPlayersManager._mutedPlayers; }` |

## 主要方法

### MutePlayer
```csharp
public static void MutePlayer(PlayerId playerId)
```

### UnmutePlayer
```csharp
public static void UnmutePlayer(PlayerId playerId)
```

### IsUserMuted
```csharp
public static bool IsUserMuted(PlayerId playerId)
```

### ClearMutedPlayers
```csharp
public static void ClearMutedPlayers()
```

## 使用示例

```csharp
// MultiplayerGlobalMutedPlayersManager (Manager) 的典型用法
MultiplayerGlobalMutedPlayersManager.Current;
```

## 参见

- [完整类目录](../catalog)