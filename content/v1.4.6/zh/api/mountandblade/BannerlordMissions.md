---
title: "BannerlordMissions"
description: "BannerlordMissions：TaleWorlds.MountAndBlade 的 public 类；公开成员 4 个（方法 4、属性 0、字段 0）。源文件 TaleWorlds.MountAndBlade/BannerlordMissions.cs。"
---
# BannerlordMissions

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class BannerlordMissions`
**File:** `TaleWorlds.MountAndBlade/BannerlordMissions.cs`

## 概述

BannerlordMissions 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/BannerlordMissions.cs。它是一个 public 类，继承链为 BannerlordMissions。public/protected 成员共 4 个：4 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BannerlordMissions 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 BannerlordMissions。成员构成以方法为主（方法 4/4，属性 0/4），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/BannerlordMissions.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CreateAtmosphereInfoForMission` | `public static AtmosphereInfo CreateAtmosphereInfoForMission(string seasonId, int timeOfDay)` | 方法 |
| `OpenCustomBattleMission` | `public static Mission OpenCustomBattleMission(string scene, BasicCharacterObject playerCharacter, CustomBattleCombatant playerParty, CustomBattleCombatant enemyParty, bool isPlayerGeneral, BasicCharacterObject playerSideGeneralCharacter, string sceneLevels = "", string seasonString = "", float timeOfDay = 6f)` | 方法 |
| `OpenSiegeMissionWithDeployment` | `public static Mission OpenSiegeMissionWithDeployment(string scene, BasicCharacterObject playerCharacter, CustomBattleCombatant playerParty, CustomBattleCombatant enemyParty, bool isPlayerGeneral, float[]wallHitPointPercentages, bool hasAnySiegeTower, List<MissionSiegeWeapon>siegeWeaponsOfAttackers, List<MissionSiegeWeapon>siegeWeaponsOfDefenders, bool isPlayerAttacker, int sceneUpgradeLevel = 0, string seasonString = "", bool isSallyOut = false, bool isReliefForceAttack = false, float timeOfDay = 6f)` | 方法 |
| `OpenCustomBattleLordsHallMission` | `public static Mission OpenCustomBattleLordsHallMission(string scene, BasicCharacterObject playerCharacter, CustomBattleCombatant playerParty, CustomBattleCombatant enemyParty, BasicCharacterObject playerSideGeneralCharacter, string sceneLevels = "", int sceneUpgradeLevel = 0, string seasonString = "")` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
