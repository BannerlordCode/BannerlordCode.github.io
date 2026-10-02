---
title: "SiegeEventModel"
description: "SiegeEventModel：TaleWorlds.CampaignSystem 的 public 类，继承 MBGameModel<SiegeEventModel>；公开成员 23 个（方法 23、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/SiegeEventModel.cs。"
---
# SiegeEventModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class SiegeEventModel : MBGameModel<SiegeEventModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SiegeEventModel.cs`

## 概述

SiegeEventModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/SiegeEventModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<SiegeEventModel>，继承链为 SiegeEventModel → MBGameModel。public/protected 成员共 23 个：23 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SiegeEventModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ComponentInterfaces），继承链 SiegeEventModel → MBGameModel。成员构成以方法为主（方法 23/23，属性 0/23），对外主要以操作入口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/SiegeEventModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetSiegeEngineDestructionCasualties` | `public abstract int GetSiegeEngineDestructionCasualties(SiegeEvent siegeEvent, BattleSideEnum side, SiegeEngineType destroyedSiegeEngine);` | 方法 |
| `GetCasualtyChance` | `public abstract float GetCasualtyChance(MobileParty siegeParty, SiegeEvent siegeEvent, BattleSideEnum side);` | 方法 |
| `GetColleteralDamageCasualties` | `public abstract int GetColleteralDamageCasualties(SiegeEngineType attackerSiegeEngine, MobileParty attackerParty);` | 方法 |
| `GetSiegeEngineHitChance` | `public abstract float GetSiegeEngineHitChance(SiegeEngineType siegeEngineType, BattleSideEnum battleSide, SiegeBombardTargets target, Town town);` | 方法 |
| `GetSiegeEngineMapPrefabName` | `public abstract string GetSiegeEngineMapPrefabName(SiegeEngineType siegeEngineType, int wallLevel, BattleSideEnum side);` | 方法 |
| `GetSiegeEngineMapProjectilePrefabName` | `public abstract string GetSiegeEngineMapProjectilePrefabName(SiegeEngineType siegeEngineType);` | 方法 |
| `GetSiegeEngineMapReloadAnimationName` | `public abstract string GetSiegeEngineMapReloadAnimationName(SiegeEngineType siegeEngineType, BattleSideEnum side);` | 方法 |
| `GetSiegeEngineMapFireAnimationName` | `public abstract string GetSiegeEngineMapFireAnimationName(SiegeEngineType siegeEngineType, BattleSideEnum side);` | 方法 |
| `GetSiegeEngineMapProjectileBoneIndex` | `public abstract sbyte GetSiegeEngineMapProjectileBoneIndex(SiegeEngineType siegeEngineType, BattleSideEnum side);` | 方法 |
| `GetSiegeStrategyScore` | `public abstract float GetSiegeStrategyScore(SiegeEvent siege, BattleSideEnum side, SiegeStrategy strategy);` | 方法 |
| `GetConstructionProgressPerHour` | `public abstract float GetConstructionProgressPerHour(SiegeEngineType type, SiegeEvent siegeEvent, ISiegeEventSide side);` | 方法 |
| `GetEffectiveSiegePartyForSide` | `public abstract MobileParty GetEffectiveSiegePartyForSide(SiegeEvent siegeEvent, BattleSideEnum side);` | 方法 |
| `GetAvailableManDayPower` | `public abstract float GetAvailableManDayPower(ISiegeEventSide side);` | 方法 |
| `IEnumerable` | `public abstract IEnumerable<SiegeEngineType>GetAvailableAttackerRangedSiegeEngines(PartyBase party);` | 方法 |
| `IEnumerable` | `public abstract IEnumerable<SiegeEngineType>GetAvailableDefenderSiegeEngines(PartyBase party);` | 方法 |
| `IEnumerable` | `public abstract IEnumerable<SiegeEngineType>GetAvailableAttackerRamSiegeEngines(PartyBase party);` | 方法 |
| `IEnumerable` | `public abstract IEnumerable<SiegeEngineType>GetAvailableAttackerTowerSiegeEngines(PartyBase party);` | 方法 |
| `IEnumerable` | `public abstract IEnumerable<SiegeEngineType>GetPrebuiltSiegeEnginesOfSettlement(Settlement settlement);` | 方法 |
| `IEnumerable` | `public abstract IEnumerable<SiegeEngineType>GetPrebuiltSiegeEnginesOfSiegeCamp(BesiegerCamp camp);` | 方法 |
| `GetSiegeEngineHitPoints` | `public abstract float GetSiegeEngineHitPoints(SiegeEvent siegeEvent, SiegeEngineType siegeEngine, BattleSideEnum battleSide);` | 方法 |
| `GetRangedSiegeEngineReloadTime` | `public abstract int GetRangedSiegeEngineReloadTime(SiegeEvent siegeEvent, BattleSideEnum side, SiegeEngineType siegeEngine);` | 方法 |
| `GetSiegeEngineDamage` | `public abstract float GetSiegeEngineDamage(SiegeEvent siegeEvent, BattleSideEnum battleSide, SiegeEngineType siegeEngine, SiegeBombardTargets target);` | 方法 |
| `GetPriorityTroopsForSallyOutAmbush` | `public abstract FlattenedTroopRoster GetPriorityTroopsForSallyOutAmbush();` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AgeModel](../AgeModel)
- [同命名空间 AlleyModel](../AlleyModel)
- [同命名空间 AllianceModel](../AllianceModel)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
