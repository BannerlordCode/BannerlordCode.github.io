---
title: "SandBoxHelpers"
description: "SandBoxHelpers 的自动生成类参考。"
---
# SandBoxHelpers

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public static class SandBoxHelpers`
**Base:** 无
**File:** `SandBox/SandBoxHelpers.cs`

## 概述

`SandBoxHelpers` 位于 `SandBox`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### FollowAgent
`public static void FollowAgent(Agent agent, Agent target)`

**用途 / Purpose:** 处理与 「follow agent」 相关的逻辑。

```csharp
// 静态调用，不需要实例
SandBoxHelpers.FollowAgent(agent, target);
```

### UnfollowAgent
`public static void UnfollowAgent(Agent agent)`

**用途 / Purpose:** 处理与 「unfollow agent」 相关的逻辑。

```csharp
// 静态调用，不需要实例
SandBoxHelpers.UnfollowAgent(agent);
```

### FadeOutAgents
`public static void FadeOutAgents(IEnumerable<Agent> agents, bool hideInstantly, bool hideMount)`

**用途 / Purpose:** 处理与 「fade out agents」 相关的逻辑。

```csharp
// 静态调用，不需要实例
SandBoxHelpers.FadeOutAgents(agents, false, false);
```

### DisableGenericMissionEventScript
`public static void DisableGenericMissionEventScript(string triggeringObjectTag, GenericMissionEvent missionEvent)`

**用途 / Purpose:** 处理与 「disable generic mission event script」 相关的逻辑。

```csharp
// 静态调用，不需要实例
SandBoxHelpers.DisableGenericMissionEventScript("example", missionEvent);
```

### SpawnPlayer
`public static void SpawnPlayer(bool civilianEquipment = false, bool noHorses = false, bool noWeapon = false, bool wieldInitialWeapons = false, string spawnTag = "")`

**用途 / Purpose:** 处理与 「spawn player」 相关的逻辑。

```csharp
// 静态调用，不需要实例
SandBoxHelpers.SpawnPlayer(false, false, false, false, "example");
```

### SpawnPlayer
`public static void SpawnPlayer(GameEntity spawnPosition, bool civilianEquipment = false, bool noHorses = false, bool noWeapon = false, bool wieldInitialWeapons = false)`

**用途 / Purpose:** 处理与 「spawn player」 相关的逻辑。

```csharp
// 静态调用，不需要实例
SandBoxHelpers.SpawnPlayer(spawnPosition, false, false, false, false);
```

### SpawnHorses
`public static List<Agent> SpawnHorses()`

**用途 / Purpose:** 处理与 「spawn horses」 相关的逻辑。

```csharp
// 静态调用，不需要实例
SandBoxHelpers.SpawnHorses();
```

### SpawnSheeps
`public static void SpawnSheeps()`

**用途 / Purpose:** 处理与 「spawn sheeps」 相关的逻辑。

```csharp
// 静态调用，不需要实例
SandBoxHelpers.SpawnSheeps();
```

### SpawnCows
`public static void SpawnCows()`

**用途 / Purpose:** 处理与 「spawn cows」 相关的逻辑。

```csharp
// 静态调用，不需要实例
SandBoxHelpers.SpawnCows();
```

### SpawnGeese
`public static void SpawnGeese()`

**用途 / Purpose:** 处理与 「spawn geese」 相关的逻辑。

```csharp
// 静态调用，不需要实例
SandBoxHelpers.SpawnGeese();
```

### SpawnChicken
`public static void SpawnChicken()`

**用途 / Purpose:** 处理与 「spawn chicken」 相关的逻辑。

```csharp
// 静态调用，不需要实例
SandBoxHelpers.SpawnChicken();
```

### SpawnHogs
`public static void SpawnHogs()`

**用途 / Purpose:** 处理与 「spawn hogs」 相关的逻辑。

```csharp
// 静态调用，不需要实例
SandBoxHelpers.SpawnHogs();
```

### GetRegionMapping
`public static bool GetRegionMapping(PartyNavigationModel model)`

**用途 / Purpose:** 读取并返回当前对象中 「region mapping」 的结果。

```csharp
// 静态调用，不需要实例
SandBoxHelpers.GetRegionMapping(model);
```

## 使用示例

```csharp
SandBoxHelpers.FollowAgent(agent, target);
```

## 参见

- [本区域目录](../)