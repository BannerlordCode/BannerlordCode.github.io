---
title: "CombatSimulationModel"
description: "Auto-generated class reference for CombatSimulationModel."
---
# CombatSimulationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CombatSimulationModel : MBGameModel<CombatSimulationModel> `
**Base:** MBGameModel<CombatSimulationModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/CombatSimulationModel.cs

## Overview

Auto-generated stub for `CombatSimulationModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### SimulateHit
`public abstract ExplainedNumber SimulateHit(CharacterObject strikerTroop,CharacterObject struckTroop,PartyBase strikerParty,PartyBase struckParty,float strikerAdvantage,MapEvent battle,BattleEnvironment battleEnvironment,float strikerSideMorale,float struckSideMorale)`

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

## See Also

- [Section index](../)
