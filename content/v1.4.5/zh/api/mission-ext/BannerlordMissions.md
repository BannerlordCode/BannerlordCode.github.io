---
title: "BannerlordMissions"
description: "BannerlordMissions 的自动生成类参考。"
---
# BannerlordMissions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class BannerlordMissions`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BannerlordMissions.cs`

## 概述

`BannerlordMissions` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateAtmosphereInfoForMission
`public static AtmosphereInfo CreateAtmosphereInfoForMission(string seasonId, int timeOfDay)`

**用途 / Purpose:** 构建一个新的 atmosphere info for mission 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
BannerlordMissions.CreateAtmosphereInfoForMission("example", 0);
```

### OpenCustomBattleMission
`public static Mission OpenCustomBattleMission(string scene, BasicCharacterObject playerCharacter, CustomBattleCombatant playerParty, CustomBattleCombatant enemyParty, bool isPlayerGeneral, BasicCharacterObject playerSideGeneralCharacter, string sceneLevels = "", string seasonString = "", float timeOfDay = 6f)`

**用途 / Purpose:** 打开custom battle mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
BannerlordMissions.OpenCustomBattleMission("example", playerCharacter, playerParty, enemyParty, false, playerSideGeneralCharacter, "example", "example", 0);
```

### OpenSiegeMissionWithDeployment
`public static Mission OpenSiegeMissionWithDeployment(string scene, BasicCharacterObject playerCharacter, CustomBattleCombatant playerParty, CustomBattleCombatant enemyParty, bool isPlayerGeneral, float wallHitPointPercentages, bool hasAnySiegeTower, List<MissionSiegeWeapon> siegeWeaponsOfAttackers, List<MissionSiegeWeapon> siegeWeaponsOfDefenders, bool isPlayerAttacker, int sceneUpgradeLevel = 0, string seasonString = "", bool isSallyOut = false, bool isReliefForceAttack = false, float timeOfDay = 6f)`

**用途 / Purpose:** 打开siege mission with deployment对应的资源或界面。

```csharp
// 静态调用，不需要实例
BannerlordMissions.OpenSiegeMissionWithDeployment("example", playerCharacter, playerParty, enemyParty, false, 0, false, siegeWeaponsOfAttackers, siegeWeaponsOfDefenders, false, 0, "example", false, false, 0);
```

### OpenCustomBattleLordsHallMission
`public static Mission OpenCustomBattleLordsHallMission(string scene, BasicCharacterObject playerCharacter, CustomBattleCombatant playerParty, CustomBattleCombatant enemyParty, BasicCharacterObject playerSideGeneralCharacter, string sceneLevels = "", int sceneUpgradeLevel = 0, string seasonString = "")`

**用途 / Purpose:** 打开custom battle lords hall mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
BannerlordMissions.OpenCustomBattleLordsHallMission("example", playerCharacter, playerParty, enemyParty, playerSideGeneralCharacter, "example", 0, "example");
```

## 使用示例

```csharp
BannerlordMissions.CreateAtmosphereInfoForMission("example", 0);
```

## 参见

- [本区域目录](../)