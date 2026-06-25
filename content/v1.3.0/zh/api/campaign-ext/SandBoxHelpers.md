---
title: "SandBoxHelpers"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SandBoxHelpers`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 处理 `follow agent` 相关逻辑。

### UnfollowAgent
`public static void UnfollowAgent(Agent agent)`

**用途 / Purpose:** 处理 `unfollow agent` 相关逻辑。

### FadeOutAgents
`public static void FadeOutAgents(IEnumerable<Agent> agents, bool hideInstantly, bool hideMount)`

**用途 / Purpose:** 处理 `fade out agents` 相关逻辑。

### DisableGenericMissionEventScript
`public static void DisableGenericMissionEventScript(string triggeringObjectTag, GenericMissionEvent missionEvent)`

**用途 / Purpose:** 处理 `disable generic mission event script` 相关逻辑。

### SpawnPlayer
`public static void SpawnPlayer(bool civilianEquipment = false, bool noHorses = false, bool noWeapon = false, bool wieldInitialWeapons = false, string spawnTag = "")`

**用途 / Purpose:** 处理 `spawn player` 相关逻辑。

### SpawnPlayer
`public static void SpawnPlayer(GameEntity spawnPosition, bool civilianEquipment = false, bool noHorses = false, bool noWeapon = false, bool wieldInitialWeapons = false)`

**用途 / Purpose:** 处理 `spawn player` 相关逻辑。

### SpawnHorses
`public static List<Agent> SpawnHorses()`

**用途 / Purpose:** 处理 `spawn horses` 相关逻辑。

### SpawnSheeps
`public static void SpawnSheeps()`

**用途 / Purpose:** 处理 `spawn sheeps` 相关逻辑。

### SpawnCows
`public static void SpawnCows()`

**用途 / Purpose:** 处理 `spawn cows` 相关逻辑。

### SpawnGeese
`public static void SpawnGeese()`

**用途 / Purpose:** 处理 `spawn geese` 相关逻辑。

### SpawnChicken
`public static void SpawnChicken()`

**用途 / Purpose:** 处理 `spawn chicken` 相关逻辑。

### SpawnHogs
`public static void SpawnHogs()`

**用途 / Purpose:** 处理 `spawn hogs` 相关逻辑。

### GetRegionMapping
`public static bool GetRegionMapping(PartyNavigationModel model)`

**用途 / Purpose:** 获取 `region mapping` 的当前值。

## 使用示例

```csharp
SandBoxHelpers.FollowAgent(agent, target);
```

## 参见

- [完整类目录](../catalog)