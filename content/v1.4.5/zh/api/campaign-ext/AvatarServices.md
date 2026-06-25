---
title: "AvatarServices"
description: "AvatarServices 的自动生成类参考。"
---
# AvatarServices

**Namespace:** TaleWorlds.Avatar.PlayerServices
**Module:** TaleWorlds.Avatar
**Type:** `public static class AvatarServices`
**Base:** 无
**File:** `bin/TaleWorlds.PlayerServices/TaleWorlds.Avatar.PlayerServices/AvatarServices.cs`

## 概述

`AvatarServices` 位于 `TaleWorlds.Avatar.PlayerServices`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Avatar.PlayerServices` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ForcedAvatarCount` | `public static int ForcedAvatarCount { get; }` |

## 主要方法

### GetForcedAvatarIndexOfPlayer
`public static int GetForcedAvatarIndexOfPlayer(PlayerId playerID)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 forced avatar index of player 的结果。

```csharp
// 静态调用，不需要实例
AvatarServices.GetForcedAvatarIndexOfPlayer(playerID);
```

### UpdateAvatarServices
`public static void UpdateAvatarServices(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 avatar services 的最新表示。

```csharp
// 静态调用，不需要实例
AvatarServices.UpdateAvatarServices(0);
```

### GetPlayerAvatar
`public static AvatarDataResponse GetPlayerAvatar(PlayerId playerId, int forcedIndex)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 player avatar 的结果。

```csharp
// 静态调用，不需要实例
AvatarServices.GetPlayerAvatar(playerId, 0);
```

### AddAvatarService
`public static void AddAvatarService(PlayerIdProvidedTypes type, IAvatarService avatarService)`

**用途 / Purpose:** **用途 / Purpose:** 将 avatar service 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
AvatarServices.AddAvatarService(type, avatarService);
```

### ClearAvatarCaches
`public static void ClearAvatarCaches()`

**用途 / Purpose:** **用途 / Purpose:** 清空当前对象中的avatar caches。

```csharp
// 静态调用，不需要实例
AvatarServices.ClearAvatarCaches();
```

## 使用示例

```csharp
AvatarServices.GetForcedAvatarIndexOfPlayer(playerID);
```

## 参见

- [本区域目录](../)