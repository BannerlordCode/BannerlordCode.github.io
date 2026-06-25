---
title: "MultiplayerMain"
description: "MultiplayerMain 的自动生成类参考。"
---
# MultiplayerMain

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MultiplayerMain`
**Base:** 无
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer/MultiplayerMain.cs`

## 概述

`MultiplayerMain` 位于 `TaleWorlds.MountAndBlade.Multiplayer`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsInitialized` | `public static bool IsInitialized { get; }` |

## 主要方法

### Initialize
`public static void Initialize(IGameNetworkHandler gameNetworkHandler)`

**用途 / Purpose:** 加载当前对象所需的初始资源、状态或绑定。

```csharp
// 静态调用，不需要实例
MultiplayerMain.Initialize(gameNetworkHandler);
```

### InitializeAsDedicatedServer
`public static void InitializeAsDedicatedServer(IGameNetworkHandler gameNetworkHandler)`

**用途 / Purpose:** 为 as dedicated server 初始化必要的资源、状态或绑定。

```csharp
// 静态调用，不需要实例
MultiplayerMain.InitializeAsDedicatedServer(gameNetworkHandler);
```

### GetAvailableRankedGameModes
`public static MultiplayerGameType GetAvailableRankedGameModes()`

**用途 / Purpose:** 读取并返回当前对象中 available ranked game modes 的结果。

```csharp
// 静态调用，不需要实例
MultiplayerMain.GetAvailableRankedGameModes();
```

### GetAvailableCustomGameModes
`public static MultiplayerGameType GetAvailableCustomGameModes()`

**用途 / Purpose:** 读取并返回当前对象中 available custom game modes 的结果。

```csharp
// 静态调用，不需要实例
MultiplayerMain.GetAvailableCustomGameModes();
```

### GetAvailableQuickPlayGameModes
`public static MultiplayerGameType GetAvailableQuickPlayGameModes()`

**用途 / Purpose:** 读取并返回当前对象中 available quick play game modes 的结果。

```csharp
// 静态调用，不需要实例
MultiplayerMain.GetAvailableQuickPlayGameModes();
```

### GetAvailableMatchmakerRegions
`public static string GetAvailableMatchmakerRegions()`

**用途 / Purpose:** 读取并返回当前对象中 available matchmaker regions 的结果。

```csharp
// 静态调用，不需要实例
MultiplayerMain.GetAvailableMatchmakerRegions();
```

### GetUserDefaultRegion
`public static string GetUserDefaultRegion()`

**用途 / Purpose:** 读取并返回当前对象中 user default region 的结果。

```csharp
// 静态调用，不需要实例
MultiplayerMain.GetUserDefaultRegion();
```

### GetUserCurrentRegion
`public static string GetUserCurrentRegion()`

**用途 / Purpose:** 读取并返回当前对象中 user current region 的结果。

```csharp
// 静态调用，不需要实例
MultiplayerMain.GetUserCurrentRegion();
```

### GetUserSelectedGameTypes
`public static string GetUserSelectedGameTypes()`

**用途 / Purpose:** 读取并返回当前对象中 user selected game types 的结果。

```csharp
// 静态调用，不需要实例
MultiplayerMain.GetUserSelectedGameTypes();
```

### GetDedicatedCustomServerAuthToken
`public static string GetDedicatedCustomServerAuthToken(List<string> strings)`

**用途 / Purpose:** 读取并返回当前对象中 dedicated custom server auth token 的结果。

```csharp
// 静态调用，不需要实例
MultiplayerMain.GetDedicatedCustomServerAuthToken(strings);
```

## 使用示例

```csharp
MultiplayerMain.Initialize(gameNetworkHandler);
```

## 参见

- [本区域目录](../)