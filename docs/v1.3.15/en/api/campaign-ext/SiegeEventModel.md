<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SiegeEventModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeEventModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SiegeEventModel : MBGameModel<SiegeEventModel>`
**Base:** `MBGameModel<SiegeEventModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SiegeEventModel.cs`

## Overview

`SiegeEventModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<SiegeEventModel>(new MySiegeEventModel())` to change how it computes.

## Key Methods

### GetSiegeEngineDestructionCasualties
```csharp
public abstract int GetSiegeEngineDestructionCasualties(SiegeEvent siegeEvent, BattleSideEnum side, SiegeEngineType destroyedSiegeEngine)
```

### GetCasualtyChance
```csharp
public abstract float GetCasualtyChance(MobileParty siegeParty, SiegeEvent siegeEvent, BattleSideEnum side)
```

### GetColleteralDamageCasualties
```csharp
public abstract int GetColleteralDamageCasualties(SiegeEngineType attackerSiegeEngine, MobileParty attackerParty)
```

### GetSiegeEngineHitChance
```csharp
public abstract float GetSiegeEngineHitChance(SiegeEngineType siegeEngineType, BattleSideEnum battleSide, SiegeBombardTargets target, Town town)
```

### GetSiegeEngineMapPrefabName
```csharp
public abstract string GetSiegeEngineMapPrefabName(SiegeEngineType siegeEngineType, int wallLevel, BattleSideEnum side)
```

### GetSiegeEngineMapProjectilePrefabName
```csharp
public abstract string GetSiegeEngineMapProjectilePrefabName(SiegeEngineType siegeEngineType)
```

### GetSiegeEngineMapReloadAnimationName
```csharp
public abstract string GetSiegeEngineMapReloadAnimationName(SiegeEngineType siegeEngineType, BattleSideEnum side)
```

### GetSiegeEngineMapFireAnimationName
```csharp
public abstract string GetSiegeEngineMapFireAnimationName(SiegeEngineType siegeEngineType, BattleSideEnum side)
```

### GetSiegeEngineMapProjectileBoneIndex
```csharp
public abstract sbyte GetSiegeEngineMapProjectileBoneIndex(SiegeEngineType siegeEngineType, BattleSideEnum side)
```

### GetSiegeStrategyScore
```csharp
public abstract float GetSiegeStrategyScore(SiegeEvent siege, BattleSideEnum side, SiegeStrategy strategy)
```

### GetConstructionProgressPerHour
```csharp
public abstract float GetConstructionProgressPerHour(SiegeEngineType type, SiegeEvent siegeEvent, ISiegeEventSide side)
```

### GetEffectiveSiegePartyForSide
```csharp
public abstract MobileParty GetEffectiveSiegePartyForSide(SiegeEvent siegeEvent, BattleSideEnum side)
```

### GetAvailableManDayPower
```csharp
public abstract float GetAvailableManDayPower(ISiegeEventSide side)
```

### GetAvailableAttackerRangedSiegeEngines
```csharp
public abstract IEnumerable<SiegeEngineType> GetAvailableAttackerRangedSiegeEngines(PartyBase party)
```

### GetAvailableDefenderSiegeEngines
```csharp
public abstract IEnumerable<SiegeEngineType> GetAvailableDefenderSiegeEngines(PartyBase party)
```

### GetAvailableAttackerRamSiegeEngines
```csharp
public abstract IEnumerable<SiegeEngineType> GetAvailableAttackerRamSiegeEngines(PartyBase party)
```

### GetAvailableAttackerTowerSiegeEngines
```csharp
public abstract IEnumerable<SiegeEngineType> GetAvailableAttackerTowerSiegeEngines(PartyBase party)
```

### GetPrebuiltSiegeEnginesOfSettlement
```csharp
public abstract IEnumerable<SiegeEngineType> GetPrebuiltSiegeEnginesOfSettlement(Settlement settlement)
```

### GetPrebuiltSiegeEnginesOfSiegeCamp
```csharp
public abstract IEnumerable<SiegeEngineType> GetPrebuiltSiegeEnginesOfSiegeCamp(BesiegerCamp camp)
```

### GetSiegeEngineHitPoints
```csharp
public abstract float GetSiegeEngineHitPoints(SiegeEvent siegeEvent, SiegeEngineType siegeEngine, BattleSideEnum battleSide)
```

### GetRangedSiegeEngineReloadTime
```csharp
public abstract int GetRangedSiegeEngineReloadTime(SiegeEvent siegeEvent, BattleSideEnum side, SiegeEngineType siegeEngine)
```

### GetSiegeEngineDamage
```csharp
public abstract float GetSiegeEngineDamage(SiegeEvent siegeEvent, BattleSideEnum battleSide, SiegeEngineType siegeEngine, SiegeBombardTargets target)
```

### GetPriorityTroopsForSallyOutAmbush
```csharp
public abstract FlattenedTroopRoster GetPriorityTroopsForSallyOutAmbush()
```

## Usage Example

```csharp
// Typical usage of SiegeEventModel (Model)
Game.Current.ReplaceModel<SiegeEventModel>(new MySiegeEventModel());
```

## See Also

- [Complete Class Catalog](../catalog)