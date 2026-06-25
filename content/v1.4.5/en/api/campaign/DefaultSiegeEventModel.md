---
title: "DefaultSiegeEventModel"
description: "Auto-generated class reference for DefaultSiegeEventModel."
---
# DefaultSiegeEventModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSiegeEventModel : SiegeEventModel`
**Base:** `SiegeEventModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultSiegeEventModel.cs`

## Overview

`DefaultSiegeEventModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultSiegeEventModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetSiegeEngineMapPrefabName
`public override string GetSiegeEngineMapPrefabName(SiegeEngineType type, int wallLevel, BattleSideEnum side)`

**Purpose:** Reads and returns the siege engine map prefab name value held by the this instance.

```csharp
// Obtain an instance of DefaultSiegeEventModel from the subsystem API first
DefaultSiegeEventModel defaultSiegeEventModel = ...;
var result = defaultSiegeEventModel.GetSiegeEngineMapPrefabName(type, 0, side);
```

### GetSiegeEngineMapProjectilePrefabName
`public override string GetSiegeEngineMapProjectilePrefabName(SiegeEngineType type)`

**Purpose:** Reads and returns the siege engine map projectile prefab name value held by the this instance.

```csharp
// Obtain an instance of DefaultSiegeEventModel from the subsystem API first
DefaultSiegeEventModel defaultSiegeEventModel = ...;
var result = defaultSiegeEventModel.GetSiegeEngineMapProjectilePrefabName(type);
```

### GetSiegeEngineMapReloadAnimationName
`public override string GetSiegeEngineMapReloadAnimationName(SiegeEngineType type, BattleSideEnum side)`

**Purpose:** Reads and returns the siege engine map reload animation name value held by the this instance.

```csharp
// Obtain an instance of DefaultSiegeEventModel from the subsystem API first
DefaultSiegeEventModel defaultSiegeEventModel = ...;
var result = defaultSiegeEventModel.GetSiegeEngineMapReloadAnimationName(type, side);
```

### GetSiegeEngineMapFireAnimationName
`public override string GetSiegeEngineMapFireAnimationName(SiegeEngineType type, BattleSideEnum side)`

**Purpose:** Reads and returns the siege engine map fire animation name value held by the this instance.

```csharp
// Obtain an instance of DefaultSiegeEventModel from the subsystem API first
DefaultSiegeEventModel defaultSiegeEventModel = ...;
var result = defaultSiegeEventModel.GetSiegeEngineMapFireAnimationName(type, side);
```

### GetSiegeEngineMapProjectileBoneIndex
`public override sbyte GetSiegeEngineMapProjectileBoneIndex(SiegeEngineType type, BattleSideEnum side)`

**Purpose:** Reads and returns the siege engine map projectile bone index value held by the this instance.

```csharp
// Obtain an instance of DefaultSiegeEventModel from the subsystem API first
DefaultSiegeEventModel defaultSiegeEventModel = ...;
var result = defaultSiegeEventModel.GetSiegeEngineMapProjectileBoneIndex(type, side);
```

### GetEffectiveSiegePartyForSide
`public override MobileParty GetEffectiveSiegePartyForSide(SiegeEvent siegeEvent, BattleSideEnum battleSide)`

**Purpose:** Reads and returns the effective siege party for side value held by the this instance.

```csharp
// Obtain an instance of DefaultSiegeEventModel from the subsystem API first
DefaultSiegeEventModel defaultSiegeEventModel = ...;
var result = defaultSiegeEventModel.GetEffectiveSiegePartyForSide(siegeEvent, battleSide);
```

### GetCasualtyChance
`public override float GetCasualtyChance(MobileParty siegeParty, SiegeEvent siegeEvent, BattleSideEnum side)`

**Purpose:** Reads and returns the casualty chance value held by the this instance.

```csharp
// Obtain an instance of DefaultSiegeEventModel from the subsystem API first
DefaultSiegeEventModel defaultSiegeEventModel = ...;
var result = defaultSiegeEventModel.GetCasualtyChance(siegeParty, siegeEvent, side);
```

### GetSiegeEngineDestructionCasualties
`public override int GetSiegeEngineDestructionCasualties(SiegeEvent siegeEvent, BattleSideEnum side, SiegeEngineType destroyedSiegeEngine)`

**Purpose:** Reads and returns the siege engine destruction casualties value held by the this instance.

```csharp
// Obtain an instance of DefaultSiegeEventModel from the subsystem API first
DefaultSiegeEventModel defaultSiegeEventModel = ...;
var result = defaultSiegeEventModel.GetSiegeEngineDestructionCasualties(siegeEvent, side, destroyedSiegeEngine);
```

### GetColleteralDamageCasualties
`public override int GetColleteralDamageCasualties(SiegeEngineType siegeEngineType, MobileParty party)`

**Purpose:** Reads and returns the colleteral damage casualties value held by the this instance.

```csharp
// Obtain an instance of DefaultSiegeEventModel from the subsystem API first
DefaultSiegeEventModel defaultSiegeEventModel = ...;
var result = defaultSiegeEventModel.GetColleteralDamageCasualties(siegeEngineType, party);
```

### GetSiegeEngineHitChance
`public override float GetSiegeEngineHitChance(SiegeEngineType siegeEngineType, BattleSideEnum battleSide, SiegeBombardTargets target, Town town)`

**Purpose:** Reads and returns the siege engine hit chance value held by the this instance.

```csharp
// Obtain an instance of DefaultSiegeEventModel from the subsystem API first
DefaultSiegeEventModel defaultSiegeEventModel = ...;
var result = defaultSiegeEventModel.GetSiegeEngineHitChance(siegeEngineType, battleSide, target, town);
```

### GetSiegeStrategyScore
`public override float GetSiegeStrategyScore(SiegeEvent siege, BattleSideEnum side, SiegeStrategy strategy)`

**Purpose:** Reads and returns the siege strategy score value held by the this instance.

```csharp
// Obtain an instance of DefaultSiegeEventModel from the subsystem API first
DefaultSiegeEventModel defaultSiegeEventModel = ...;
var result = defaultSiegeEventModel.GetSiegeStrategyScore(siege, side, strategy);
```

### GetConstructionProgressPerHour
`public override float GetConstructionProgressPerHour(SiegeEngineType type, SiegeEvent siegeEvent, ISiegeEventSide side)`

**Purpose:** Reads and returns the construction progress per hour value held by the this instance.

```csharp
// Obtain an instance of DefaultSiegeEventModel from the subsystem API first
DefaultSiegeEventModel defaultSiegeEventModel = ...;
var result = defaultSiegeEventModel.GetConstructionProgressPerHour(type, siegeEvent, side);
```

### GetAvailableManDayPower
`public override float GetAvailableManDayPower(ISiegeEventSide side)`

**Purpose:** Reads and returns the available man day power value held by the this instance.

```csharp
// Obtain an instance of DefaultSiegeEventModel from the subsystem API first
DefaultSiegeEventModel defaultSiegeEventModel = ...;
var result = defaultSiegeEventModel.GetAvailableManDayPower(side);
```

### GetPrebuiltSiegeEnginesOfSettlement
`public override IEnumerable<SiegeEngineType> GetPrebuiltSiegeEnginesOfSettlement(Settlement settlement)`

**Purpose:** Reads and returns the prebuilt siege engines of settlement value held by the this instance.

```csharp
// Obtain an instance of DefaultSiegeEventModel from the subsystem API first
DefaultSiegeEventModel defaultSiegeEventModel = ...;
var result = defaultSiegeEventModel.GetPrebuiltSiegeEnginesOfSettlement(settlement);
```

### GetPrebuiltSiegeEnginesOfSiegeCamp
`public override IEnumerable<SiegeEngineType> GetPrebuiltSiegeEnginesOfSiegeCamp(BesiegerCamp besiegerCamp)`

**Purpose:** Reads and returns the prebuilt siege engines of siege camp value held by the this instance.

```csharp
// Obtain an instance of DefaultSiegeEventModel from the subsystem API first
DefaultSiegeEventModel defaultSiegeEventModel = ...;
var result = defaultSiegeEventModel.GetPrebuiltSiegeEnginesOfSiegeCamp(besiegerCamp);
```

### GetSiegeEngineHitPoints
`public override float GetSiegeEngineHitPoints(SiegeEvent siegeEvent, SiegeEngineType siegeEngine, BattleSideEnum battleSide)`

**Purpose:** Reads and returns the siege engine hit points value held by the this instance.

```csharp
// Obtain an instance of DefaultSiegeEventModel from the subsystem API first
DefaultSiegeEventModel defaultSiegeEventModel = ...;
var result = defaultSiegeEventModel.GetSiegeEngineHitPoints(siegeEvent, siegeEngine, battleSide);
```

### GetSiegeEngineDamage
`public override float GetSiegeEngineDamage(SiegeEvent siegeEvent, BattleSideEnum battleSide, SiegeEngineType siegeEngine, SiegeBombardTargets target)`

**Purpose:** Reads and returns the siege engine damage value held by the this instance.

```csharp
// Obtain an instance of DefaultSiegeEventModel from the subsystem API first
DefaultSiegeEventModel defaultSiegeEventModel = ...;
var result = defaultSiegeEventModel.GetSiegeEngineDamage(siegeEvent, battleSide, siegeEngine, target);
```

### GetRangedSiegeEngineReloadTime
`public override int GetRangedSiegeEngineReloadTime(SiegeEvent siegeEvent, BattleSideEnum side, SiegeEngineType siegeEngine)`

**Purpose:** Reads and returns the ranged siege engine reload time value held by the this instance.

```csharp
// Obtain an instance of DefaultSiegeEventModel from the subsystem API first
DefaultSiegeEventModel defaultSiegeEventModel = ...;
var result = defaultSiegeEventModel.GetRangedSiegeEngineReloadTime(siegeEvent, side, siegeEngine);
```

### GetAvailableAttackerRangedSiegeEngines
`public override IEnumerable<SiegeEngineType> GetAvailableAttackerRangedSiegeEngines(PartyBase party)`

**Purpose:** Reads and returns the available attacker ranged siege engines value held by the this instance.

```csharp
// Obtain an instance of DefaultSiegeEventModel from the subsystem API first
DefaultSiegeEventModel defaultSiegeEventModel = ...;
var result = defaultSiegeEventModel.GetAvailableAttackerRangedSiegeEngines(party);
```

### GetAvailableDefenderSiegeEngines
`public override IEnumerable<SiegeEngineType> GetAvailableDefenderSiegeEngines(PartyBase party)`

**Purpose:** Reads and returns the available defender siege engines value held by the this instance.

```csharp
// Obtain an instance of DefaultSiegeEventModel from the subsystem API first
DefaultSiegeEventModel defaultSiegeEventModel = ...;
var result = defaultSiegeEventModel.GetAvailableDefenderSiegeEngines(party);
```

### GetAvailableAttackerRamSiegeEngines
`public override IEnumerable<SiegeEngineType> GetAvailableAttackerRamSiegeEngines(PartyBase party)`

**Purpose:** Reads and returns the available attacker ram siege engines value held by the this instance.

```csharp
// Obtain an instance of DefaultSiegeEventModel from the subsystem API first
DefaultSiegeEventModel defaultSiegeEventModel = ...;
var result = defaultSiegeEventModel.GetAvailableAttackerRamSiegeEngines(party);
```

### GetAvailableAttackerTowerSiegeEngines
`public override IEnumerable<SiegeEngineType> GetAvailableAttackerTowerSiegeEngines(PartyBase party)`

**Purpose:** Reads and returns the available attacker tower siege engines value held by the this instance.

```csharp
// Obtain an instance of DefaultSiegeEventModel from the subsystem API first
DefaultSiegeEventModel defaultSiegeEventModel = ...;
var result = defaultSiegeEventModel.GetAvailableAttackerTowerSiegeEngines(party);
```

### GetPriorityTroopsForSallyOutAmbush
`public override FlattenedTroopRoster GetPriorityTroopsForSallyOutAmbush()`

**Purpose:** Reads and returns the priority troops for sally out ambush value held by the this instance.

```csharp
// Obtain an instance of DefaultSiegeEventModel from the subsystem API first
DefaultSiegeEventModel defaultSiegeEventModel = ...;
var result = defaultSiegeEventModel.GetPriorityTroopsForSallyOutAmbush();
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultSiegeEventModel>(new MyDefaultSiegeEventModel());
```

## See Also

- [Area Index](../)