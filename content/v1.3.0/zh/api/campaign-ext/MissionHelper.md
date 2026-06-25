---
title: "MissionHelper"
description: "MissionHelper 的自动生成类参考。"
---
# MissionHelper

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public static class MissionHelper`
**Base:** 无
**File:** `SandBox/SandBoxHelpers.cs`

## 概述

`MissionHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `MissionHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### FollowAgent
`public static void FollowAgent(Agent agent, Agent target)`

**用途 / Purpose:** **用途 / Purpose:** 调用 FollowAgent 对应的操作。

```csharp
// 静态调用，不需要实例
MissionHelper.FollowAgent(agent, target);
```

### UnfollowAgent
`public static void UnfollowAgent(Agent agent)`

**用途 / Purpose:** **用途 / Purpose:** 调用 UnfollowAgent 对应的操作。

```csharp
// 静态调用，不需要实例
MissionHelper.UnfollowAgent(agent);
```

### FadeOutAgents
`public static void FadeOutAgents(IEnumerable<Agent> agents, bool hideInstantly, bool hideMount)`

**用途 / Purpose:** **用途 / Purpose:** 调用 FadeOutAgents 对应的操作。

```csharp
// 静态调用，不需要实例
MissionHelper.FadeOutAgents(agents, false, false);
```

### DisableGenericMissionEventScript
`public static void DisableGenericMissionEventScript(string triggeringObjectTag, GenericMissionEvent missionEvent)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DisableGenericMissionEventScript 对应的操作。

```csharp
// 静态调用，不需要实例
MissionHelper.DisableGenericMissionEventScript("example", missionEvent);
```

### SpawnPlayer
`public static void SpawnPlayer(bool civilianEquipment = false, bool noHorses = false, bool noWeapon = false, bool wieldInitialWeapons = false, string spawnTag = "")`

**用途 / Purpose:** **用途 / Purpose:** 调用 SpawnPlayer 对应的操作。

```csharp
// 静态调用，不需要实例
MissionHelper.SpawnPlayer(false, false, false, false, "example");
```

### SpawnPlayer
`public static void SpawnPlayer(GameEntity spawnPosition, bool civilianEquipment = false, bool noHorses = false, bool noWeapon = false, bool wieldInitialWeapons = false)`

**用途 / Purpose:** **用途 / Purpose:** 调用 SpawnPlayer 对应的操作。

```csharp
// 静态调用，不需要实例
MissionHelper.SpawnPlayer(spawnPosition, false, false, false, false);
```

### SpawnHorses
`public static List<Agent> SpawnHorses()`

**用途 / Purpose:** **用途 / Purpose:** 调用 SpawnHorses 对应的操作。

```csharp
// 静态调用，不需要实例
MissionHelper.SpawnHorses();
```

### SpawnSheeps
`public static void SpawnSheeps()`

**用途 / Purpose:** **用途 / Purpose:** 调用 SpawnSheeps 对应的操作。

```csharp
// 静态调用，不需要实例
MissionHelper.SpawnSheeps();
```

### SpawnCows
`public static void SpawnCows()`

**用途 / Purpose:** **用途 / Purpose:** 调用 SpawnCows 对应的操作。

```csharp
// 静态调用，不需要实例
MissionHelper.SpawnCows();
```

### SpawnGeese
`public static void SpawnGeese()`

**用途 / Purpose:** **用途 / Purpose:** 调用 SpawnGeese 对应的操作。

```csharp
// 静态调用，不需要实例
MissionHelper.SpawnGeese();
```

### SpawnChicken
`public static void SpawnChicken()`

**用途 / Purpose:** **用途 / Purpose:** 调用 SpawnChicken 对应的操作。

```csharp
// 静态调用，不需要实例
MissionHelper.SpawnChicken();
```

### SpawnHogs
`public static void SpawnHogs()`

**用途 / Purpose:** **用途 / Purpose:** 调用 SpawnHogs 对应的操作。

```csharp
// 静态调用，不需要实例
MissionHelper.SpawnHogs();
```

## 使用示例

```csharp
MissionHelper.Initialize();
```

## 参见

- [本区域目录](../)