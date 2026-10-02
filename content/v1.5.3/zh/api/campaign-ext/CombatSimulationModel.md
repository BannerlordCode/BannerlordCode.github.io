---
title: "CombatSimulationModel"
description: "CombatSimulationModel 的自动生成类参考。"
---
# CombatSimulationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CombatSimulationModel : MBGameModel<CombatSimulationModel> `
**Base:** MBGameModel<CombatSimulationModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/CombatSimulationModel.cs

## 概述

`CombatSimulationModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/ComponentInterfaces/CombatSimulationModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### SimulateHit
`public abstract ExplainedNumber SimulateHit(CharacterObject strikerTroop,CharacterObject struckTroop,PartyBase strikerParty,PartyBase struckParty,float strikerAdvantage,MapEvent battle,BattleEnvironment battleEnvironment,float strikerSideMorale,float struckSideMorale)`
`public abstract ExplainedNumber SimulateHit(Ship strikerShip,Ship struckShip,PartyBase strikerParty,PartyBase struckParty,SiegeEngineType siegeEngine,float strikerAdvantage,MapEvent battle,out int troopCasualties)`

### GetSimulationTicksForBattleRound
`public abstract ValueTuple<int,int> GetSimulationTicksForBattleRound(MapEvent mapEvent)`

### GetNumberOfEquipmentsBuilt
`public abstract int GetNumberOfEquipmentsBuilt(Settlement settlement)`

### GetMaximumSiegeEquipmentProgress
`public abstract float GetMaximumSiegeEquipmentProgress(Settlement settlement)`

### GetSettlementAdvantage
`public abstract float GetSettlementAdvantage(Settlement settlement)`

### GetBattleAdvantage
`public abstract void GetBattleAdvantage(MapEvent mapEvent,out ExplainedNumber defenderAdvantage,out ExplainedNumber attackerAdvantage)`

### GetShipSiegeEngineHitChance
`public abstract float GetShipSiegeEngineHitChance(Ship ship,SiegeEngineType siegeEngineType,BattleSideEnum battleSide)`

### GetPursuitRoundCount
`public abstract int GetPursuitRoundCount(MapEvent mapEvent)`

### GetBluntDamageChance
`public abstract float GetBluntDamageChance(CharacterObject strikerTroop,CharacterObject strikedTroop,PartyBase strikerParty,PartyBase strikedParty,MapEvent battle)`

### GetSimulationTickInterval
`public abstract CampaignTime GetSimulationTickInterval(MapEvent mapEvent)`

### GetParticipatingTroopCount
`public abstract int GetParticipatingTroopCount(MapEventSide side)`

### GetShipCombatImportance
`public abstract float GetShipCombatImportance(Ship ship)`

### GetShipCombatScore
`public abstract float GetShipCombatScore(Ship ship)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
