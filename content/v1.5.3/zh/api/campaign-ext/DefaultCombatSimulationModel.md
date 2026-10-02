---
title: "DefaultCombatSimulationModel"
description: "DefaultCombatSimulationModel 的自动生成类参考。"
---
# DefaultCombatSimulationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCombatSimulationModel : CombatSimulationModel `
**Base:** CombatSimulationModel
**Source:** TaleWorlds.CampaignSystem/GameComponents/DefaultCombatSimulationModel.cs

## 概述

`DefaultCombatSimulationModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/GameComponents/DefaultCombatSimulationModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### SimulateHit
`public override ExplainedNumber SimulateHit(CharacterObject strikerTroop,CharacterObject struckTroop,PartyBase strikerParty,PartyBase struckParty,float strikerAdvantage,MapEvent battle,BattleEnvironment battleEnvironment,float strikerSideMorale,float struckSideMorale) `
`public override ExplainedNumber SimulateHit(Ship strikerShip,Ship struckShip,PartyBase strikerParty,PartyBase struckParty,SiegeEngineType siegeEngine,float strikerAdvantage,MapEvent battle,out int troopCasualties) `

### GetMaximumSiegeEquipmentProgress
`public override float GetMaximumSiegeEquipmentProgress(Settlement settlement) `

### GetNumberOfEquipmentsBuilt
`public override int GetNumberOfEquipmentsBuilt(Settlement settlement) `

### GetSettlementAdvantage
`public override float GetSettlementAdvantage(Settlement settlement) `

### GetSimulationTicksForBattleRound
`public override ValueTuple<int,int> GetSimulationTicksForBattleRound(MapEvent mapEvent) `

### GetBattleAdvantage
`public override void GetBattleAdvantage(MapEvent mapEvent,out ExplainedNumber defenderAdvantage,out ExplainedNumber attackerAdvantage) `

### GetShipSiegeEngineHitChance
`public override float GetShipSiegeEngineHitChance(Ship ship,SiegeEngineType siegeEngineType,BattleSideEnum battleSide) `

### GetPursuitRoundCount
`public override int GetPursuitRoundCount(MapEvent mapEvent) `

### GetBluntDamageChance
`public override float GetBluntDamageChance(CharacterObject strikerTroop,CharacterObject strikedTroop,PartyBase strikerParty,PartyBase strikedParty,MapEvent battle) `

### GetSimulationTickInterval
`public override CampaignTime GetSimulationTickInterval(MapEvent mapEvent) `

### GetParticipatingTroopCount
`public override int GetParticipatingTroopCount(MapEventSide side) `

### GetShipCombatImportance
`public override float GetShipCombatImportance(Ship ship) `

### GetShipCombatScore
`public override float GetShipCombatScore(Ship ship) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
