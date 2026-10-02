---
title: "DefaultCombatSimulationModel"
description: "DefaultCombatSimulationModel：TaleWorlds.CampaignSystem.GameComponents 的 public 类，继承 CombatSimulationModel；公开成员 13 个（方法 13、属性 0、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultCombatSimulationModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultCombatSimulationModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultCombatSimulationModel : CombatSimulationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCombatSimulationModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## 概述

DefaultCombatSimulationModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultCombatSimulationModel.cs。它是一个 public 类，实现/继承 CombatSimulationModel，继承链为 DefaultCombatSimulationModel → CombatSimulationModel → MBGameModel → GameModel。public/protected 成员共 13 个：13 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultCombatSimulationModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.GameComponents`），命名空间 `TaleWorlds.CampaignSystem.GameComponents`，继承链 DefaultCombatSimulationModel → CombatSimulationModel → MBGameModel → GameModel。成员构成以方法为主（方法 13/13，属性 0/13），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultCombatSimulationModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SimulateHit` | `public override ExplainedNumber SimulateHit(CharacterObject strikerTroop, CharacterObject struckTroop, PartyBase strikerParty, PartyBase struckParty, float strikerAdvantage, MapEvent battle, float strikerSideMorale, float struckSideMorale)` | 方法 |
| `SimulateHit` | `public override ExplainedNumber SimulateHit(Ship strikerShip, Ship struckShip, PartyBase strikerParty, PartyBase struckParty, SiegeEngineType siegeEngine, float strikerAdvantage, MapEvent battle, out int troopCasualties)` | 方法 |
| `GetMaximumSiegeEquipmentProgress` | `public override float GetMaximumSiegeEquipmentProgress(Settlement settlement)` | 方法 |
| `GetNumberOfEquipmentsBuilt` | `public override int GetNumberOfEquipmentsBuilt(Settlement settlement)` | 方法 |
| `GetSettlementAdvantage` | `public override float GetSettlementAdvantage(Settlement settlement)` | 方法 |
| `int>GetSimulationTicksForBattleRound` | `public override ValueTuple<int, int>GetSimulationTicksForBattleRound(MapEvent mapEvent)` | 方法 |
| `GetBattleAdvantage` | `public override void GetBattleAdvantage(MapEvent mapEvent, out ExplainedNumber defenderAdvantage, out ExplainedNumber attackerAdvantage)` | 方法 |
| `GetShipSiegeEngineHitChance` | `public override float GetShipSiegeEngineHitChance(Ship ship, SiegeEngineType siegeEngineType, BattleSideEnum battleSide)` | 方法 |
| `GetPursuitRoundCount` | `public override int GetPursuitRoundCount(MapEvent mapEvent)` | 方法 |
| `GetBluntDamageChance` | `public override float GetBluntDamageChance(CharacterObject strikerTroop, CharacterObject strikedTroop, PartyBase strikerParty, PartyBase strikedParty, MapEvent battle)` | 方法 |
| `GetSimulationTickInterval` | `public override CampaignTime GetSimulationTickInterval(MapEvent mapEvent)` | 方法 |
| `MapEventParty>>GetSimulationShips` | `public override MBList<ValueTuple<Ship, MapEventParty>>GetSimulationShips(MapEvent mapEvent, MBList<MapEventParty>battleParties)` | 方法 |
| `GetParticipatingTroopCount` | `public override int GetParticipatingTroopCount(MapEventSide side)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 CombatSimulationModel](../CombatSimulationModel/)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel/)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel/)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel/)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
