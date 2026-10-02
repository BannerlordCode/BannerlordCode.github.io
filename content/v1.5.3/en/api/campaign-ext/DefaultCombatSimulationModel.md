---
title: "DefaultCombatSimulationModel"
description: "Auto-generated class reference for DefaultCombatSimulationModel."
---
# DefaultCombatSimulationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCombatSimulationModel : CombatSimulationModel `
**Base:** CombatSimulationModel
**Source:** TaleWorlds.CampaignSystem/GameComponents/DefaultCombatSimulationModel.cs

## Overview

Auto-generated stub for `DefaultCombatSimulationModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### SimulateHit
`public override ExplainedNumber SimulateHit(CharacterObject strikerTroop,CharacterObject struckTroop,PartyBase strikerParty,PartyBase struckParty,float strikerAdvantage,MapEvent battle,BattleEnvironment battleEnvironment,float strikerSideMorale,float struckSideMorale)`

### GetMaximumSiegeEquipmentProgress
`public override float GetMaximumSiegeEquipmentProgress(Settlement settlement)`

### GetNumberOfEquipmentsBuilt
`public override int GetNumberOfEquipmentsBuilt(Settlement settlement)`

### GetSettlementAdvantage
`public override float GetSettlementAdvantage(Settlement settlement)`

### GetSimulationTicksForBattleRound
`public override ValueTuple<int,int> GetSimulationTicksForBattleRound(MapEvent mapEvent)`

### GetBattleAdvantage
`public override void GetBattleAdvantage(MapEvent mapEvent,out ExplainedNumber defenderAdvantage,out ExplainedNumber attackerAdvantage)`

### GetShipSiegeEngineHitChance
`public override float GetShipSiegeEngineHitChance(Ship ship,SiegeEngineType siegeEngineType,BattleSideEnum battleSide)`

### GetPursuitRoundCount
`public override int GetPursuitRoundCount(MapEvent mapEvent)`

### GetBluntDamageChance
`public override float GetBluntDamageChance(CharacterObject strikerTroop,CharacterObject strikedTroop,PartyBase strikerParty,PartyBase strikedParty,MapEvent battle)`

### GetSimulationTickInterval
`public override CampaignTime GetSimulationTickInterval(MapEvent mapEvent)`

### GetParticipatingTroopCount
`public override int GetParticipatingTroopCount(MapEventSide side)`

### GetShipCombatImportance
`public override float GetShipCombatImportance(Ship ship)`

### GetShipCombatScore
`public override float GetShipCombatScore(Ship ship)`

## See Also

- [Section index](../)
