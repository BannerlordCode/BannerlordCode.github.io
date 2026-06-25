---
title: "BannerlordMissions"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BannerlordMissions`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BannerlordMissions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class BannerlordMissions`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BannerlordMissions.cs`

## 概述

`BannerlordMissions` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateAtmosphereInfoForMission
`public static AtmosphereInfo CreateAtmosphereInfoForMission(string seasonId, int timeOfDay)`

**用途 / Purpose:** 创建一个 `atmosphere info for mission` 实例或对象。

### OpenCustomBattleMission
`public static Mission OpenCustomBattleMission(string scene, BasicCharacterObject playerCharacter, CustomBattleCombatant playerParty, CustomBattleCombatant enemyParty, bool isPlayerGeneral, BasicCharacterObject playerSideGeneralCharacter, string sceneLevels = "", string seasonString = "", float timeOfDay = 6f)`

**用途 / Purpose:** 处理 `open custom battle mission` 相关逻辑。

### OpenSiegeMissionWithDeployment
`public static Mission OpenSiegeMissionWithDeployment(string scene, BasicCharacterObject playerCharacter, CustomBattleCombatant playerParty, CustomBattleCombatant enemyParty, bool isPlayerGeneral, float wallHitPointPercentages, bool hasAnySiegeTower, List<MissionSiegeWeapon> siegeWeaponsOfAttackers, List<MissionSiegeWeapon> siegeWeaponsOfDefenders, bool isPlayerAttacker, int sceneUpgradeLevel = 0, string seasonString = "", bool isSallyOut = false, bool isReliefForceAttack = false, float timeOfDay = 6f)`

**用途 / Purpose:** 处理 `open siege mission with deployment` 相关逻辑。

### OpenCustomBattleLordsHallMission
`public static Mission OpenCustomBattleLordsHallMission(string scene, BasicCharacterObject playerCharacter, CustomBattleCombatant playerParty, CustomBattleCombatant enemyParty, BasicCharacterObject playerSideGeneralCharacter, string sceneLevels = "", int sceneUpgradeLevel = 0, string seasonString = "")`

**用途 / Purpose:** 处理 `open custom battle lords hall mission` 相关逻辑。

## 使用示例

```csharp
BannerlordMissions.CreateAtmosphereInfoForMission("example", 0);
```

## 参见

- [完整类目录](../catalog)