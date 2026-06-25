---
title: "SiegeEventModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SiegeEventModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeEventModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SiegeEventModel : MBGameModel<SiegeEventModel>`
**Base:** `MBGameModel<SiegeEventModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SiegeEventModel.cs`

## Overview

`SiegeEventModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `SiegeEventModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetSiegeEngineDestructionCasualties
`public abstract int GetSiegeEngineDestructionCasualties(SiegeEvent siegeEvent, BattleSideEnum side, SiegeEngineType destroyedSiegeEngine)`

**Purpose:** Gets the current value of `siege engine destruction casualties`.

### GetCasualtyChance
`public abstract float GetCasualtyChance(MobileParty siegeParty, SiegeEvent siegeEvent, BattleSideEnum side)`

**Purpose:** Gets the current value of `casualty chance`.

### GetColleteralDamageCasualties
`public abstract int GetColleteralDamageCasualties(SiegeEngineType attackerSiegeEngine, MobileParty attackerParty)`

**Purpose:** Gets the current value of `colleteral damage casualties`.

### GetSiegeEngineHitChance
`public abstract float GetSiegeEngineHitChance(SiegeEngineType siegeEngineType, BattleSideEnum battleSide, SiegeBombardTargets target, Town town)`

**Purpose:** Gets the current value of `siege engine hit chance`.

### GetSiegeEngineMapPrefabName
`public abstract string GetSiegeEngineMapPrefabName(SiegeEngineType siegeEngineType, int wallLevel, BattleSideEnum side)`

**Purpose:** Gets the current value of `siege engine map prefab name`.

### GetSiegeEngineMapProjectilePrefabName
`public abstract string GetSiegeEngineMapProjectilePrefabName(SiegeEngineType siegeEngineType)`

**Purpose:** Gets the current value of `siege engine map projectile prefab name`.

### GetSiegeEngineMapReloadAnimationName
`public abstract string GetSiegeEngineMapReloadAnimationName(SiegeEngineType siegeEngineType, BattleSideEnum side)`

**Purpose:** Gets the current value of `siege engine map reload animation name`.

### GetSiegeEngineMapFireAnimationName
`public abstract string GetSiegeEngineMapFireAnimationName(SiegeEngineType siegeEngineType, BattleSideEnum side)`

**Purpose:** Gets the current value of `siege engine map fire animation name`.

### GetSiegeEngineMapProjectileBoneIndex
`public abstract sbyte GetSiegeEngineMapProjectileBoneIndex(SiegeEngineType siegeEngineType, BattleSideEnum side)`

**Purpose:** Gets the current value of `siege engine map projectile bone index`.

### GetSiegeStrategyScore
`public abstract float GetSiegeStrategyScore(SiegeEvent siege, BattleSideEnum side, SiegeStrategy strategy)`

**Purpose:** Gets the current value of `siege strategy score`.

### GetConstructionProgressPerHour
`public abstract float GetConstructionProgressPerHour(SiegeEngineType type, SiegeEvent siegeEvent, ISiegeEventSide side)`

**Purpose:** Gets the current value of `construction progress per hour`.

### GetEffectiveSiegePartyForSide
`public abstract MobileParty GetEffectiveSiegePartyForSide(SiegeEvent siegeEvent, BattleSideEnum side)`

**Purpose:** Gets the current value of `effective siege party for side`.

### GetAvailableManDayPower
`public abstract float GetAvailableManDayPower(ISiegeEventSide side)`

**Purpose:** Gets the current value of `available man day power`.

### GetAvailableAttackerRangedSiegeEngines
`public abstract IEnumerable<SiegeEngineType> GetAvailableAttackerRangedSiegeEngines(PartyBase party)`

**Purpose:** Gets the current value of `available attacker ranged siege engines`.

### GetAvailableDefenderSiegeEngines
`public abstract IEnumerable<SiegeEngineType> GetAvailableDefenderSiegeEngines(PartyBase party)`

**Purpose:** Gets the current value of `available defender siege engines`.

### GetAvailableAttackerRamSiegeEngines
`public abstract IEnumerable<SiegeEngineType> GetAvailableAttackerRamSiegeEngines(PartyBase party)`

**Purpose:** Gets the current value of `available attacker ram siege engines`.

### GetAvailableAttackerTowerSiegeEngines
`public abstract IEnumerable<SiegeEngineType> GetAvailableAttackerTowerSiegeEngines(PartyBase party)`

**Purpose:** Gets the current value of `available attacker tower siege engines`.

### GetPrebuiltSiegeEnginesOfSettlement
`public abstract IEnumerable<SiegeEngineType> GetPrebuiltSiegeEnginesOfSettlement(Settlement settlement)`

**Purpose:** Gets the current value of `prebuilt siege engines of settlement`.

### GetPrebuiltSiegeEnginesOfSiegeCamp
`public abstract IEnumerable<SiegeEngineType> GetPrebuiltSiegeEnginesOfSiegeCamp(BesiegerCamp camp)`

**Purpose:** Gets the current value of `prebuilt siege engines of siege camp`.

### GetSiegeEngineHitPoints
`public abstract float GetSiegeEngineHitPoints(SiegeEvent siegeEvent, SiegeEngineType siegeEngine, BattleSideEnum battleSide)`

**Purpose:** Gets the current value of `siege engine hit points`.

### GetRangedSiegeEngineReloadTime
`public abstract int GetRangedSiegeEngineReloadTime(SiegeEvent siegeEvent, BattleSideEnum side, SiegeEngineType siegeEngine)`

**Purpose:** Gets the current value of `ranged siege engine reload time`.

### GetSiegeEngineDamage
`public abstract float GetSiegeEngineDamage(SiegeEvent siegeEvent, BattleSideEnum battleSide, SiegeEngineType siegeEngine, SiegeBombardTargets target)`

**Purpose:** Gets the current value of `siege engine damage`.

### GetPriorityTroopsForSallyOutAmbush
`public abstract FlattenedTroopRoster GetPriorityTroopsForSallyOutAmbush()`

**Purpose:** Gets the current value of `priority troops for sally out ambush`.

## Usage Example

```csharp
var implementation = new CustomSiegeEventModel();
```

## See Also

- [Complete Class Catalog](../catalog)