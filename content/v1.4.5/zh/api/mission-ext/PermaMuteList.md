---
title: "PermaMuteList"
description: "PermaMuteList 的自动生成类参考。"
---
# PermaMuteList

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class PermaMuteList`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/PermaMuteList.cs`

## 概述

`PermaMuteList` 位于 `TaleWorlds.MountAndBlade.Diamond`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Diamond` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `HasMutedPlayersLoaded` | `public static bool HasMutedPlayersLoaded { get; }` |

## 主要方法

### SetPermanentMuteAvailableCallback
`public static void SetPermanentMuteAvailableCallback(Func<bool> getPermanentMuteAvailable)`

**用途 / Purpose:** 为 「permanent mute available callback」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
PermaMuteList.SetPermanentMuteAvailableCallback(getPermanentMuteAvailable);
```

### LoadMutedPlayers
`public static async Task LoadMutedPlayers(PlayerId currentPlayerId)`

**用途 / Purpose:** 从持久化存储或流中读取 「muted players」。

```csharp
// 静态调用，不需要实例
PermaMuteList.LoadMutedPlayers(currentPlayerId);
```

### SaveMutedPlayers
`public static async void SaveMutedPlayers()`

**用途 / Purpose:** 将 「muted players」 写入持久化存储或流中。

```csharp
// 静态调用，不需要实例
PermaMuteList.SaveMutedPlayers();
```

### IsPlayerMuted
`public static bool IsPlayerMuted(PlayerId player)`

**用途 / Purpose:** 判断当前对象是否处于 「player muted」 状态或条件。

```csharp
// 静态调用，不需要实例
PermaMuteList.IsPlayerMuted(player);
```

### MutePlayer
`public static void MutePlayer(PlayerId player, string name)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
PermaMuteList.MutePlayer(player, "example");
```

### RemoveMutedPlayer
`public static void RemoveMutedPlayer(PlayerId player)`

**用途 / Purpose:** 从当前容器或状态中移除 「muted player」。

```csharp
// 静态调用，不需要实例
PermaMuteList.RemoveMutedPlayer(player);
```

## 使用示例

```csharp
PermaMuteList.SetPermanentMuteAvailableCallback(getPermanentMuteAvailable);
```

## 参见

- [本区域目录](../)