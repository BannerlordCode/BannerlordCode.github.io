---
title: "CombatSimulationModel"
description: "CombatSimulationModel：TaleWorlds.CampaignSystem.ComponentInterfaces 的 public 类，继承 MBGameModel<CombatSimulationModel>；公开成员 13 个（方法 13、属性 0、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/CombatSimulationModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CombatSimulationModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class CombatSimulationModel : MBGameModel<CombatSimulationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CombatSimulationModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## 概述

CombatSimulationModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/CombatSimulationModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<CombatSimulationModel>，继承链为 CombatSimulationModel → MBGameModel → GameModel。public/protected 成员共 13 个：13 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CombatSimulationModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`），命名空间 `TaleWorlds.CampaignSystem.ComponentInterfaces`，继承链 CombatSimulationModel → MBGameModel → GameModel。成员构成以方法为主（方法 13/13，属性 0/13），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/CombatSimulationModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SimulateHit` | `public abstract ExplainedNumber SimulateHit(CharacterObject strikerTroop, CharacterObject struckTroop, PartyBase strikerParty, PartyBase struckParty, float strikerAdvantage, MapEvent battle, float strikerSideMorale, float struckSideMorale);` | 方法 |
| `SimulateHit` | `public abstract ExplainedNumber SimulateHit(Ship strikerShip, Ship struckShip, PartyBase strikerParty, PartyBase struckParty, SiegeEngineType siegeEngine, float strikerAdvantage, MapEvent battle, out int troopCasualties);` | 方法 |
| `int>GetSimulationTicksForBattleRound` | `public abstract ValueTuple<int, int>GetSimulationTicksForBattleRound(MapEvent mapEvent);` | 方法 |
| `GetNumberOfEquipmentsBuilt` | `public abstract int GetNumberOfEquipmentsBuilt(Settlement settlement);` | 方法 |
| `GetMaximumSiegeEquipmentProgress` | `public abstract float GetMaximumSiegeEquipmentProgress(Settlement settlement);` | 方法 |
| `GetSettlementAdvantage` | `public abstract float GetSettlementAdvantage(Settlement settlement);` | 方法 |
| `GetBattleAdvantage` | `public abstract void GetBattleAdvantage(MapEvent mapEvent, out ExplainedNumber defenderAdvantage, out ExplainedNumber attackerAdvantage);` | 方法 |
| `GetShipSiegeEngineHitChance` | `public abstract float GetShipSiegeEngineHitChance(Ship ship, SiegeEngineType siegeEngineType, BattleSideEnum battleSide);` | 方法 |
| `GetPursuitRoundCount` | `public abstract int GetPursuitRoundCount(MapEvent mapEvent);` | 方法 |
| `GetBluntDamageChance` | `public abstract float GetBluntDamageChance(CharacterObject strikerTroop, CharacterObject strikedTroop, PartyBase strikerParty, PartyBase strikedParty, MapEvent battle);` | 方法 |
| `GetSimulationTickInterval` | `public abstract CampaignTime GetSimulationTickInterval(MapEvent mapEvent);` | 方法 |
| `MapEventParty>>GetSimulationShips` | `public abstract MBList<ValueTuple<Ship, MapEventParty>>GetSimulationShips(MapEvent mapEvent, MBList<MapEventParty>battleParties);` | 方法 |
| `GetParticipatingTroopCount` | `public abstract int GetParticipatingTroopCount(MapEventSide side);` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MBGameModel](../../core-extra/MBGameModel__1/)
- [同命名空间 AgeModel](../AgeModel/)
- [同命名空间 AlleyModel](../AlleyModel/)
- [同命名空间 AllianceModel](../AllianceModel/)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
