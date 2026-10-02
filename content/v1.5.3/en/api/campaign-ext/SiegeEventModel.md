---
title: "SiegeEventModel"
description: "Auto-generated class reference for SiegeEventModel."
---
# SiegeEventModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SiegeEventModel : MBGameModel<SiegeEventModel> `
**Base:** MBGameModel<SiegeEventModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/SiegeEventModel.cs

## Overview

Auto-generated stub for `SiegeEventModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetSiegeEngineDestructionCasualties
`public abstract int GetSiegeEngineDestructionCasualties(SiegeEvent siegeEvent,BattleSideEnum side,SiegeEngineType destroyedSiegeEngine)`

### GetCasualtyChance
`public abstract float GetCasualtyChance(MobileParty siegeParty,SiegeEvent siegeEvent,BattleSideEnum side)`

### GetColleteralDamageCasualties
`public abstract int GetColleteralDamageCasualties(SiegeEngineType attackerSiegeEngine,MobileParty attackerParty)`

### GetSiegeEngineHitChance
`public abstract float GetSiegeEngineHitChance(SiegeEngineType siegeEngineType,BattleSideEnum battleSide,SiegeBombardTargets target,Town town)`

### GetSiegeEngineMapPrefabName
`public abstract string GetSiegeEngineMapPrefabName(SiegeEngineType siegeEngineType,int wallLevel,BattleSideEnum side)`

### GetSiegeEngineMapProjectilePrefabName
`public abstract string GetSiegeEngineMapProjectilePrefabName(SiegeEngineType siegeEngineType)`

### GetSiegeEngineMapReloadAnimationName
`public abstract string GetSiegeEngineMapReloadAnimationName(SiegeEngineType siegeEngineType,BattleSideEnum side)`

### GetSiegeEngineMapFireAnimationName
`public abstract string GetSiegeEngineMapFireAnimationName(SiegeEngineType siegeEngineType,BattleSideEnum side)`

### GetSiegeEngineMapProjectileBoneIndex
`public abstract sbyte GetSiegeEngineMapProjectileBoneIndex(SiegeEngineType siegeEngineType,BattleSideEnum side)`

### GetSiegeStrategyScore
`public abstract float GetSiegeStrategyScore(SiegeEvent siege,BattleSideEnum side,SiegeStrategy strategy)`

### GetConstructionProgressPerHour
`public abstract float GetConstructionProgressPerHour(SiegeEngineType type,SiegeEvent siegeEvent,ISiegeEventSide side)`

### GetEffectiveSiegePartyForSide
`public abstract MobileParty GetEffectiveSiegePartyForSide(SiegeEvent siegeEvent,BattleSideEnum side)`

### GetAvailableManDayPower
`public abstract float GetAvailableManDayPower(ISiegeEventSide side)`

### GetAvailableAttackerRangedSiegeEngines
`public abstract IEnumerable<SiegeEngineType> GetAvailableAttackerRangedSiegeEngines(PartyBase party)`

### GetAvailableDefenderSiegeEngines
`public abstract IEnumerable<SiegeEngineType> GetAvailableDefenderSiegeEngines(PartyBase party)`

### GetAvailableAttackerRamSiegeEngines
`public abstract IEnumerable<SiegeEngineType> GetAvailableAttackerRamSiegeEngines(PartyBase party)`

### GetAvailableAttackerTowerSiegeEngines
`public abstract IEnumerable<SiegeEngineType> GetAvailableAttackerTowerSiegeEngines(PartyBase party)`

### GetPrebuiltSiegeEnginesOfSettlement
`public abstract IEnumerable<SiegeEngineType> GetPrebuiltSiegeEnginesOfSettlement(Settlement settlement)`

### GetPrebuiltSiegeEnginesOfSiegeCamp
`public abstract IEnumerable<SiegeEngineType> GetPrebuiltSiegeEnginesOfSiegeCamp(BesiegerCamp camp)`

### GetSiegeEngineHitPoints
`public abstract float GetSiegeEngineHitPoints(SiegeEvent siegeEvent,SiegeEngineType siegeEngine,BattleSideEnum battleSide)`

### GetRangedSiegeEngineReloadTime
`public abstract int GetRangedSiegeEngineReloadTime(SiegeEvent siegeEvent,BattleSideEnum side,SiegeEngineType siegeEngine)`

### GetSiegeEngineDamage
`public abstract float GetSiegeEngineDamage(SiegeEvent siegeEvent,BattleSideEnum battleSide,SiegeEngineType siegeEngine,SiegeBombardTargets target)`

### GetPriorityTroopsForSallyOutAmbush
`public abstract FlattenedTroopRoster GetPriorityTroopsForSallyOutAmbush()`

## See Also

- [Section index](../)
