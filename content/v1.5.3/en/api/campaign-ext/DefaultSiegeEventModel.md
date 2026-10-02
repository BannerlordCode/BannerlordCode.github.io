---
title: "DefaultSiegeEventModel"
description: "Auto-generated class reference for DefaultSiegeEventModel."
---
# DefaultSiegeEventModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSiegeEventModel : SiegeEventModel `
**Base:** SiegeEventModel
**Source:** TaleWorlds.CampaignSystem/GameComponents/DefaultSiegeEventModel.cs

## Overview

Auto-generated stub for `DefaultSiegeEventModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetSiegeEngineMapPrefabName
`public override string GetSiegeEngineMapPrefabName(SiegeEngineType type,int wallLevel,BattleSideEnum side)`

### GetSiegeEngineMapProjectilePrefabName
`public override string GetSiegeEngineMapProjectilePrefabName(SiegeEngineType type)`

### GetSiegeEngineMapReloadAnimationName
`public override string GetSiegeEngineMapReloadAnimationName(SiegeEngineType type,BattleSideEnum side)`

### GetSiegeEngineMapFireAnimationName
`public override string GetSiegeEngineMapFireAnimationName(SiegeEngineType type,BattleSideEnum side)`

### GetSiegeEngineMapProjectileBoneIndex
`public override sbyte GetSiegeEngineMapProjectileBoneIndex(SiegeEngineType type,BattleSideEnum side)`

### GetEffectiveSiegePartyForSide
`public override MobileParty GetEffectiveSiegePartyForSide(SiegeEvent siegeEvent,BattleSideEnum battleSide)`

### GetCasualtyChance
`public override float GetCasualtyChance(MobileParty siegeParty,SiegeEvent siegeEvent,BattleSideEnum side)`

### GetSiegeEngineDestructionCasualties
`public override int GetSiegeEngineDestructionCasualties(SiegeEvent siegeEvent,BattleSideEnum side,SiegeEngineType destroyedSiegeEngine)`

### GetColleteralDamageCasualties
`public override int GetColleteralDamageCasualties(SiegeEngineType siegeEngineType,MobileParty party)`

### GetSiegeEngineHitChance
`public override float GetSiegeEngineHitChance(SiegeEngineType siegeEngineType,BattleSideEnum battleSide,SiegeBombardTargets target,Town town)`

### GetSiegeStrategyScore
`public override float GetSiegeStrategyScore(SiegeEvent siege,BattleSideEnum side,SiegeStrategy strategy)`

### GetConstructionProgressPerHour
`public override float GetConstructionProgressPerHour(SiegeEngineType type,SiegeEvent siegeEvent,ISiegeEventSide side)`

### GetAvailableManDayPower
`public override float GetAvailableManDayPower(ISiegeEventSide side)`

### GetPrebuiltSiegeEnginesOfSettlement
`public override IEnumerable<SiegeEngineType> GetPrebuiltSiegeEnginesOfSettlement(Settlement settlement)`

### GetPrebuiltSiegeEnginesOfSiegeCamp
`public override IEnumerable<SiegeEngineType> GetPrebuiltSiegeEnginesOfSiegeCamp(BesiegerCamp besiegerCamp)`

### GetSiegeEngineHitPoints
`public override float GetSiegeEngineHitPoints(SiegeEvent siegeEvent,SiegeEngineType siegeEngine,BattleSideEnum battleSide)`

### GetSiegeEngineDamage
`public override float GetSiegeEngineDamage(SiegeEvent siegeEvent,BattleSideEnum battleSide,SiegeEngineType siegeEngine,SiegeBombardTargets target)`

### GetRangedSiegeEngineReloadTime
`public override int GetRangedSiegeEngineReloadTime(SiegeEvent siegeEvent,BattleSideEnum side,SiegeEngineType siegeEngine)`

### GetAvailableAttackerRangedSiegeEngines
`public override IEnumerable<SiegeEngineType> GetAvailableAttackerRangedSiegeEngines(PartyBase party)`

### GetAvailableDefenderSiegeEngines
`public override IEnumerable<SiegeEngineType> GetAvailableDefenderSiegeEngines(PartyBase party)`

### GetAvailableAttackerRamSiegeEngines
`public override IEnumerable<SiegeEngineType> GetAvailableAttackerRamSiegeEngines(PartyBase party)`

### GetAvailableAttackerTowerSiegeEngines
`public override IEnumerable<SiegeEngineType> GetAvailableAttackerTowerSiegeEngines(PartyBase party)`

### GetPriorityTroopsForSallyOutAmbush
`public override FlattenedTroopRoster GetPriorityTroopsForSallyOutAmbush()`

## See Also

- [Section index](../)
