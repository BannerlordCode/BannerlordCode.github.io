---
title: "MissionHelper"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionHelper`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionHelper

**命名空间:** SandBox
**模块:** SandBox
**类型:** `public static class MissionHelper`
**领域:** campaign-ext

## 概述

`MissionHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `MissionHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

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
MissionHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
