---
title: "DefaultSiegeEventModel"
description: "DefaultSiegeEventModel：TaleWorlds.CampaignSystem 的 public 类，继承 SiegeEventModel；公开成员 23 个（方法 23、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultSiegeEventModel.cs。"
---
# DefaultSiegeEventModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultSiegeEventModel : SiegeEventModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSiegeEventModel.cs`

## 概述

DefaultSiegeEventModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultSiegeEventModel.cs。它是一个 public 类，实现/继承 SiegeEventModel，继承链为 DefaultSiegeEventModel → SiegeEventModel → MBGameModel。public/protected 成员共 23 个：23 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultSiegeEventModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.GameComponents），继承链 DefaultSiegeEventModel → SiegeEventModel → MBGameModel。成员构成以方法为主（方法 23/23，属性 0/23），对外主要以操作入口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultSiegeEventModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetSiegeEngineMapPrefabName` | `public override string GetSiegeEngineMapPrefabName(SiegeEngineType type, int wallLevel, BattleSideEnum side)` | 方法 |
| `GetSiegeEngineMapProjectilePrefabName` | `public override string GetSiegeEngineMapProjectilePrefabName(SiegeEngineType type)` | 方法 |
| `GetSiegeEngineMapReloadAnimationName` | `public override string GetSiegeEngineMapReloadAnimationName(SiegeEngineType type, BattleSideEnum side)` | 方法 |
| `GetSiegeEngineMapFireAnimationName` | `public override string GetSiegeEngineMapFireAnimationName(SiegeEngineType type, BattleSideEnum side)` | 方法 |
| `GetSiegeEngineMapProjectileBoneIndex` | `public override sbyte GetSiegeEngineMapProjectileBoneIndex(SiegeEngineType type, BattleSideEnum side)` | 方法 |
| `GetEffectiveSiegePartyForSide` | `public override MobileParty GetEffectiveSiegePartyForSide(SiegeEvent siegeEvent, BattleSideEnum battleSide)` | 方法 |
| `GetCasualtyChance` | `public override float GetCasualtyChance(MobileParty siegeParty, SiegeEvent siegeEvent, BattleSideEnum side)` | 方法 |
| `GetSiegeEngineDestructionCasualties` | `public override int GetSiegeEngineDestructionCasualties(SiegeEvent siegeEvent, BattleSideEnum side, SiegeEngineType destroyedSiegeEngine)` | 方法 |
| `GetColleteralDamageCasualties` | `public override int GetColleteralDamageCasualties(SiegeEngineType siegeEngineType, MobileParty party)` | 方法 |
| `GetSiegeEngineHitChance` | `public override float GetSiegeEngineHitChance(SiegeEngineType siegeEngineType, BattleSideEnum battleSide, SiegeBombardTargets target, Town town)` | 方法 |
| `GetSiegeStrategyScore` | `public override float GetSiegeStrategyScore(SiegeEvent siege, BattleSideEnum side, SiegeStrategy strategy)` | 方法 |
| `GetConstructionProgressPerHour` | `public override float GetConstructionProgressPerHour(SiegeEngineType type, SiegeEvent siegeEvent, ISiegeEventSide side)` | 方法 |
| `GetAvailableManDayPower` | `public override float GetAvailableManDayPower(ISiegeEventSide side)` | 方法 |
| `IEnumerable` | `public override IEnumerable<SiegeEngineType>GetPrebuiltSiegeEnginesOfSettlement(Settlement settlement)` | 方法 |
| `IEnumerable` | `public override IEnumerable<SiegeEngineType>GetPrebuiltSiegeEnginesOfSiegeCamp(BesiegerCamp besiegerCamp)` | 方法 |
| `GetSiegeEngineHitPoints` | `public override float GetSiegeEngineHitPoints(SiegeEvent siegeEvent, SiegeEngineType siegeEngine, BattleSideEnum battleSide)` | 方法 |
| `GetSiegeEngineDamage` | `public override float GetSiegeEngineDamage(SiegeEvent siegeEvent, BattleSideEnum battleSide, SiegeEngineType siegeEngine, SiegeBombardTargets target)` | 方法 |
| `GetRangedSiegeEngineReloadTime` | `public override int GetRangedSiegeEngineReloadTime(SiegeEvent siegeEvent, BattleSideEnum side, SiegeEngineType siegeEngine)` | 方法 |
| `IEnumerable` | `public override IEnumerable<SiegeEngineType>GetAvailableAttackerRangedSiegeEngines(PartyBase party)` | 方法 |
| `IEnumerable` | `public override IEnumerable<SiegeEngineType>GetAvailableDefenderSiegeEngines(PartyBase party)` | 方法 |
| `IEnumerable` | `public override IEnumerable<SiegeEngineType>GetAvailableAttackerRamSiegeEngines(PartyBase party)` | 方法 |
| `IEnumerable` | `public override IEnumerable<SiegeEngineType>GetAvailableAttackerTowerSiegeEngines(PartyBase party)` | 方法 |
| `GetPriorityTroopsForSallyOutAmbush` | `public override FlattenedTroopRoster GetPriorityTroopsForSallyOutAmbush()` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 SiegeEventModel](../SiegeEventModel)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
