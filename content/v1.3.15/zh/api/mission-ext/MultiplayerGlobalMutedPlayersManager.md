---
title: "MultiplayerGlobalMutedPlayersManager"
description: "MultiplayerGlobalMutedPlayersManager 的自动生成类参考。"
---
# MultiplayerGlobalMutedPlayersManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MultiplayerGlobalMutedPlayersManager`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/MultiplayerGlobalMutedPlayersManager.cs`

## 概述

`MultiplayerGlobalMutedPlayersManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `MultiplayerGlobalMutedPlayersManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MutedPlayers` | `public static List<PlayerId> MutedPlayers { get; }` |

## 主要方法

### MutePlayer
`public static void MutePlayer(PlayerId playerId)`

**用途 / Purpose:** 处理与 「mute player」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MultiplayerGlobalMutedPlayersManager.MutePlayer(playerId);
```

### UnmutePlayer
`public static void UnmutePlayer(PlayerId playerId)`

**用途 / Purpose:** 处理与 「unmute player」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MultiplayerGlobalMutedPlayersManager.UnmutePlayer(playerId);
```

### IsUserMuted
`public static bool IsUserMuted(PlayerId playerId)`

**用途 / Purpose:** 判断当前对象是否处于 「user muted」 状态或条件。

```csharp
// 静态调用，不需要实例
MultiplayerGlobalMutedPlayersManager.IsUserMuted(playerId);
```

### ClearMutedPlayers
`public static void ClearMutedPlayers()`

**用途 / Purpose:** 清空当前对象中的「muted players」。

```csharp
// 静态调用，不需要实例
MultiplayerGlobalMutedPlayersManager.ClearMutedPlayers();
```

## 使用示例

```csharp
var manager = MultiplayerGlobalMutedPlayersManager.Current;
```

## 参见

- [本区域目录](../)