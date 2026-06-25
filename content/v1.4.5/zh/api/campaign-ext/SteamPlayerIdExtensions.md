---
title: "SteamPlayerIdExtensions"
description: "SteamPlayerIdExtensions 的自动生成类参考。"
---
# SteamPlayerIdExtensions

**Namespace:** TaleWorlds.PlatformService.Steam
**Module:** TaleWorlds.PlatformService
**Type:** `public static class SteamPlayerIdExtensions`
**Base:** 无
**File:** `bin/TaleWorlds.PlatformService.Steam/TaleWorlds.PlatformService.Steam/SteamPlayerIdExtensions.cs`

## 概述

`SteamPlayerIdExtensions` 位于 `TaleWorlds.PlatformService.Steam`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.PlatformService.Steam` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### ToPlayerId
`public static PlayerId ToPlayerId(this CSteamID steamId)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ToPlayerId 对应的操作。

```csharp
// 静态调用，不需要实例
SteamPlayerIdExtensions.ToPlayerId(steamId);
```

### ToSteamId
`public static CSteamID ToSteamId(this PlayerId playerId)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ToSteamId 对应的操作。

```csharp
// 静态调用，不需要实例
SteamPlayerIdExtensions.ToSteamId(playerId);
```

### IsValidSteamId
`public static bool IsValidSteamId(this PlayerId playerId)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 valid steam id 状态或条件。

```csharp
// 静态调用，不需要实例
SteamPlayerIdExtensions.IsValidSteamId(playerId);
```

## 使用示例

```csharp
SteamPlayerIdExtensions.ToPlayerId(steamId);
```

## 参见

- [本区域目录](../)