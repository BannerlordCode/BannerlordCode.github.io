---
title: "SiegeEventModel"
description: "Auto-generated class reference for SiegeEventModel."
---
# SiegeEventModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SiegeEventModel : MBGameModel<SiegeEventModel>`
**Base:** `MBGameModel<SiegeEventModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SiegeEventModel.cs`

## Overview

`SiegeEventModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `SiegeEventModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetSiegeEngineDestructionCasualties
`public abstract int GetSiegeEngineDestructionCasualties(SiegeEvent siegeEvent, BattleSideEnum side, SiegeEngineType destroyedSiegeEngine)`

**Purpose:** Reads and returns the siege engine destruction casualties value held by the this instance.

```csharp
// Obtain an instance of SiegeEventModel from the subsystem API first
SiegeEventModel siegeEventModel = ...;
var result = siegeEventModel.GetSiegeEngineDestructionCasualties(siegeEvent, side, destroyedSiegeEngine);
```

### GetCasualtyChance
`public abstract float GetCasualtyChance(MobileParty siegeParty, SiegeEvent siegeEvent, BattleSideEnum side)`

**Purpose:** Reads and returns the casualty chance value held by the this instance.

```csharp
// Obtain an instance of SiegeEventModel from the subsystem API first
SiegeEventModel siegeEventModel = ...;
var result = siegeEventModel.GetCasualtyChance(siegeParty, siegeEvent, side);
```

### GetColleteralDamageCasualties
`public abstract int GetColleteralDamageCasualties(SiegeEngineType attackerSiegeEngine, MobileParty attackerParty)`

**Purpose:** Reads and returns the colleteral damage casualties value held by the this instance.

```csharp
// Obtain an instance of SiegeEventModel from the subsystem API first
SiegeEventModel siegeEventModel = ...;
var result = siegeEventModel.GetColleteralDamageCasualties(attackerSiegeEngine, attackerParty);
```

### GetSiegeEngineHitChance
`public abstract float GetSiegeEngineHitChance(SiegeEngineType siegeEngineType, BattleSideEnum battleSide, SiegeBombardTargets target, Town town)`

**Purpose:** Reads and returns the siege engine hit chance value held by the this instance.

```csharp
// Obtain an instance of SiegeEventModel from the subsystem API first
SiegeEventModel siegeEventModel = ...;
var result = siegeEventModel.GetSiegeEngineHitChance(siegeEngineType, battleSide, target, town);
```

### GetSiegeEngineMapPrefabName
`public abstract string GetSiegeEngineMapPrefabName(SiegeEngineType siegeEngineType, int wallLevel, BattleSideEnum side)`

**Purpose:** Reads and returns the siege engine map prefab name value held by the this instance.

```csharp
// Obtain an instance of SiegeEventModel from the subsystem API first
SiegeEventModel siegeEventModel = ...;
var result = siegeEventModel.GetSiegeEngineMapPrefabName(siegeEngineType, 0, side);
```

### GetSiegeEngineMapProjectilePrefabName
`public abstract string GetSiegeEngineMapProjectilePrefabName(SiegeEngineType siegeEngineType)`

**Purpose:** Reads and returns the siege engine map projectile prefab name value held by the this instance.

```csharp
// Obtain an instance of SiegeEventModel from the subsystem API first
SiegeEventModel siegeEventModel = ...;
var result = siegeEventModel.GetSiegeEngineMapProjectilePrefabName(siegeEngineType);
```

### GetSiegeEngineMapReloadAnimationName
`public abstract string GetSiegeEngineMapReloadAnimationName(SiegeEngineType siegeEngineType, BattleSideEnum side)`

**Purpose:** Reads and returns the siege engine map reload animation name value held by the this instance.

```csharp
// Obtain an instance of SiegeEventModel from the subsystem API first
SiegeEventModel siegeEventModel = ...;
var result = siegeEventModel.GetSiegeEngineMapReloadAnimationName(siegeEngineType, side);
```

### GetSiegeEngineMapFireAnimationName
`public abstract string GetSiegeEngineMapFireAnimationName(SiegeEngineType siegeEngineType, BattleSideEnum side)`

**Purpose:** Reads and returns the siege engine map fire animation name value held by the this instance.

```csharp
// Obtain an instance of SiegeEventModel from the subsystem API first
SiegeEventModel siegeEventModel = ...;
var result = siegeEventModel.GetSiegeEngineMapFireAnimationName(siegeEngineType, side);
```

### GetSiegeEngineMapProjectileBoneIndex
`public abstract sbyte GetSiegeEngineMapProjectileBoneIndex(SiegeEngineType siegeEngineType, BattleSideEnum side)`

**Purpose:** Reads and returns the siege engine map projectile bone index value held by the this instance.

```csharp
// Obtain an instance of SiegeEventModel from the subsystem API first
SiegeEventModel siegeEventModel = ...;
var result = siegeEventModel.GetSiegeEngineMapProjectileBoneIndex(siegeEngineType, side);
```

### GetSiegeStrategyScore
`public abstract float GetSiegeStrategyScore(SiegeEvent siege, BattleSideEnum side, SiegeStrategy strategy)`

**Purpose:** Reads and returns the siege strategy score value held by the this instance.

```csharp
// Obtain an instance of SiegeEventModel from the subsystem API first
SiegeEventModel siegeEventModel = ...;
var result = siegeEventModel.GetSiegeStrategyScore(siege, side, strategy);
```

### GetConstructionProgressPerHour
`public abstract float GetConstructionProgressPerHour(SiegeEngineType type, SiegeEvent siegeEvent, ISiegeEventSide side)`

**Purpose:** Reads and returns the construction progress per hour value held by the this instance.

```csharp
// Obtain an instance of SiegeEventModel from the subsystem API first
SiegeEventModel siegeEventModel = ...;
var result = siegeEventModel.GetConstructionProgressPerHour(type, siegeEvent, side);
```

### GetEffectiveSiegePartyForSide
`public abstract MobileParty GetEffectiveSiegePartyForSide(SiegeEvent siegeEvent, BattleSideEnum side)`

**Purpose:** Reads and returns the effective siege party for side value held by the this instance.

```csharp
// Obtain an instance of SiegeEventModel from the subsystem API first
SiegeEventModel siegeEventModel = ...;
var result = siegeEventModel.GetEffectiveSiegePartyForSide(siegeEvent, side);
```

### GetAvailableManDayPower
`public abstract float GetAvailableManDayPower(ISiegeEventSide side)`

**Purpose:** Reads and returns the available man day power value held by the this instance.

```csharp
// Obtain an instance of SiegeEventModel from the subsystem API first
SiegeEventModel siegeEventModel = ...;
var result = siegeEventModel.GetAvailableManDayPower(side);
```

### GetAvailableAttackerRangedSiegeEngines
`public abstract IEnumerable<SiegeEngineType> GetAvailableAttackerRangedSiegeEngines(PartyBase party)`

**Purpose:** Reads and returns the available attacker ranged siege engines value held by the this instance.

```csharp
// Obtain an instance of SiegeEventModel from the subsystem API first
SiegeEventModel siegeEventModel = ...;
var result = siegeEventModel.GetAvailableAttackerRangedSiegeEngines(party);
```

### GetAvailableDefenderSiegeEngines
`public abstract IEnumerable<SiegeEngineType> GetAvailableDefenderSiegeEngines(PartyBase party)`

**Purpose:** Reads and returns the available defender siege engines value held by the this instance.

```csharp
// Obtain an instance of SiegeEventModel from the subsystem API first
SiegeEventModel siegeEventModel = ...;
var result = siegeEventModel.GetAvailableDefenderSiegeEngines(party);
```

### GetAvailableAttackerRamSiegeEngines
`public abstract IEnumerable<SiegeEngineType> GetAvailableAttackerRamSiegeEngines(PartyBase party)`

**Purpose:** Reads and returns the available attacker ram siege engines value held by the this instance.

```csharp
// Obtain an instance of SiegeEventModel from the subsystem API first
SiegeEventModel siegeEventModel = ...;
var result = siegeEventModel.GetAvailableAttackerRamSiegeEngines(party);
```

### GetAvailableAttackerTowerSiegeEngines
`public abstract IEnumerable<SiegeEngineType> GetAvailableAttackerTowerSiegeEngines(PartyBase party)`

**Purpose:** Reads and returns the available attacker tower siege engines value held by the this instance.

```csharp
// Obtain an instance of SiegeEventModel from the subsystem API first
SiegeEventModel siegeEventModel = ...;
var result = siegeEventModel.GetAvailableAttackerTowerSiegeEngines(party);
```

### GetPrebuiltSiegeEnginesOfSettlement
`public abstract IEnumerable<SiegeEngineType> GetPrebuiltSiegeEnginesOfSettlement(Settlement settlement)`

**Purpose:** Reads and returns the prebuilt siege engines of settlement value held by the this instance.

```csharp
// Obtain an instance of SiegeEventModel from the subsystem API first
SiegeEventModel siegeEventModel = ...;
var result = siegeEventModel.GetPrebuiltSiegeEnginesOfSettlement(settlement);
```

### GetPrebuiltSiegeEnginesOfSiegeCamp
`public abstract IEnumerable<SiegeEngineType> GetPrebuiltSiegeEnginesOfSiegeCamp(BesiegerCamp camp)`

**Purpose:** Reads and returns the prebuilt siege engines of siege camp value held by the this instance.

```csharp
// Obtain an instance of SiegeEventModel from the subsystem API first
SiegeEventModel siegeEventModel = ...;
var result = siegeEventModel.GetPrebuiltSiegeEnginesOfSiegeCamp(camp);
```

### GetSiegeEngineHitPoints
`public abstract float GetSiegeEngineHitPoints(SiegeEvent siegeEvent, SiegeEngineType siegeEngine, BattleSideEnum battleSide)`

**Purpose:** Reads and returns the siege engine hit points value held by the this instance.

```csharp
// Obtain an instance of SiegeEventModel from the subsystem API first
SiegeEventModel siegeEventModel = ...;
var result = siegeEventModel.GetSiegeEngineHitPoints(siegeEvent, siegeEngine, battleSide);
```

### GetRangedSiegeEngineReloadTime
`public abstract int GetRangedSiegeEngineReloadTime(SiegeEvent siegeEvent, BattleSideEnum side, SiegeEngineType siegeEngine)`

**Purpose:** Reads and returns the ranged siege engine reload time value held by the this instance.

```csharp
// Obtain an instance of SiegeEventModel from the subsystem API first
SiegeEventModel siegeEventModel = ...;
var result = siegeEventModel.GetRangedSiegeEngineReloadTime(siegeEvent, side, siegeEngine);
```

### GetSiegeEngineDamage
`public abstract float GetSiegeEngineDamage(SiegeEvent siegeEvent, BattleSideEnum battleSide, SiegeEngineType siegeEngine, SiegeBombardTargets target)`

**Purpose:** Reads and returns the siege engine damage value held by the this instance.

```csharp
// Obtain an instance of SiegeEventModel from the subsystem API first
SiegeEventModel siegeEventModel = ...;
var result = siegeEventModel.GetSiegeEngineDamage(siegeEvent, battleSide, siegeEngine, target);
```

### GetPriorityTroopsForSallyOutAmbush
`public abstract FlattenedTroopRoster GetPriorityTroopsForSallyOutAmbush()`

**Purpose:** Reads and returns the priority troops for sally out ambush value held by the this instance.

```csharp
// Obtain an instance of SiegeEventModel from the subsystem API first
SiegeEventModel siegeEventModel = ...;
var result = siegeEventModel.GetPriorityTroopsForSallyOutAmbush();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
SiegeEventModel instance = ...;
```

## See Also

- [Area Index](../)