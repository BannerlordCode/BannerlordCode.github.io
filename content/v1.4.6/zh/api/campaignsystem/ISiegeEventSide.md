---
title: "ISiegeEventSide"
description: "ISiegeEventSide：TaleWorlds.CampaignSystem 的 public 接口；公开成员 16 个（方法 10、属性 6、字段 0）。源文件 TaleWorlds.CampaignSystem/Siege/ISiegeEventSide.cs。"
---
# ISiegeEventSide

**Namespace:** `TaleWorlds.CampaignSystem.Siege`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface ISiegeEventSide`
**File:** `TaleWorlds.CampaignSystem/Siege/ISiegeEventSide.cs`

## 概述

ISiegeEventSide 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/Siege/ISiegeEventSide.cs。它是一个 public 接口，继承链为 ISiegeEventSide。public/protected 成员共 16 个：10 方法、6 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ISiegeEventSide 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.Siege），继承链 ISiegeEventSide。成员构成以方法为主（方法 10/16，属性 6/16），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/Siege/ISiegeEventSide.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SiegeEvent` | `SiegeEvent SiegeEvent` | 属性 |
| `IEnumerable` | `IEnumerable<PartyBase>GetInvolvedPartiesForEventType(MapEvent.BattleTypes mapEventType = MapEvent.BattleTypes.Siege);` | 方法 |
| `GetNextInvolvedPartyForEventType` | `PartyBase GetNextInvolvedPartyForEventType(ref int partyIndex, MapEvent.BattleTypes mapEventType = MapEvent.BattleTypes.Siege);` | 方法 |
| `HasInvolvedPartyForEventType` | `bool HasInvolvedPartyForEventType(PartyBase party, MapEvent.BattleTypes mapEventType = MapEvent.BattleTypes.Siege);` | 方法 |
| `SiegeStrategy` | `SiegeStrategy SiegeStrategy` | 属性 |
| `BattleSide` | `BattleSideEnum BattleSide` | 属性 |
| `OnTroopsKilledOnSide` | `void OnTroopsKilledOnSide(int killCount);` | 方法 |
| `NumberOfTroopsKilledOnSide` | `int NumberOfTroopsKilledOnSide` | 属性 |
| `SiegeEngines` | `SiegeEvent.SiegeEnginesContainer SiegeEngines` | 属性 |
| `AddSiegeEngineMissile` | `void AddSiegeEngineMissile(SiegeEvent.SiegeEngineMissile missile);` | 方法 |
| `RemoveDeprecatedMissiles` | `void RemoveDeprecatedMissiles();` | 方法 |
| `MBReadOnlyList` | `MBReadOnlyList<SiegeEvent.SiegeEngineMissile>SiegeEngineMissiles` | 属性 |
| `SetSiegeStrategy` | `void SetSiegeStrategy(SiegeStrategy strategy);` | 方法 |
| `InitializeSiegeEventSide` | `void InitializeSiegeEventSide();` | 方法 |
| `GetAttackTarget` | `void GetAttackTarget(ISiegeEventSide siegeEventSide, SiegeEngineType siegeEngine, int siegeEngineSlot, out SiegeBombardTargets targetType, out int targetIndex);` | 方法 |
| `FinalizeSiegeEvent` | `void FinalizeSiegeEvent();` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BesiegerCamp](../BesiegerCamp)
- [同命名空间 DefaultSiegeStrategies](../DefaultSiegeStrategies)
- [同命名空间 ISiegeEventVisual](../ISiegeEventVisual)
- [同命名空间 PlayerSiege](../PlayerSiege)
