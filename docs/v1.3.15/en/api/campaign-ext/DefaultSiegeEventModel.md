<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultSiegeEventModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultSiegeEventModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSiegeEventModel : SiegeEventModel`
**Base:** `SiegeEventModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSiegeEventModel.cs`

## Overview

`DefaultSiegeEventModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultSiegeEventModel>(new MyDefaultSiegeEventModel())` to change how it computes.

## Key Methods

### GetSiegeEngineMapPrefabName
```csharp
public override string GetSiegeEngineMapPrefabName(SiegeEngineType type, int wallLevel, BattleSideEnum side)
```

### GetSiegeEngineMapProjectilePrefabName
```csharp
public override string GetSiegeEngineMapProjectilePrefabName(SiegeEngineType type)
```

### GetSiegeEngineMapReloadAnimationName
```csharp
public override string GetSiegeEngineMapReloadAnimationName(SiegeEngineType type, BattleSideEnum side)
```

### GetSiegeEngineMapFireAnimationName
```csharp
public override string GetSiegeEngineMapFireAnimationName(SiegeEngineType type, BattleSideEnum side)
```

### GetSiegeEngineMapProjectileBoneIndex
```csharp
public override sbyte GetSiegeEngineMapProjectileBoneIndex(SiegeEngineType type, BattleSideEnum side)
```

### GetEffectiveSiegePartyForSide
```csharp
public override MobileParty GetEffectiveSiegePartyForSide(SiegeEvent siegeEvent, BattleSideEnum battleSide)
```

### GetCasualtyChance
```csharp
public override float GetCasualtyChance(MobileParty siegeParty, SiegeEvent siegeEvent, BattleSideEnum side)
```

### GetSiegeEngineDestructionCasualties
```csharp
public override int GetSiegeEngineDestructionCasualties(SiegeEvent siegeEvent, BattleSideEnum side, SiegeEngineType destroyedSiegeEngine)
```

### GetColleteralDamageCasualties
```csharp
public override int GetColleteralDamageCasualties(SiegeEngineType siegeEngineType, MobileParty party)
```

### GetSiegeEngineHitChance
```csharp
public override float GetSiegeEngineHitChance(SiegeEngineType siegeEngineType, BattleSideEnum battleSide, SiegeBombardTargets target, Town town)
```

### GetSiegeStrategyScore
```csharp
public override float GetSiegeStrategyScore(SiegeEvent siege, BattleSideEnum side, SiegeStrategy strategy)
```

### GetConstructionProgressPerHour
```csharp
public override float GetConstructionProgressPerHour(SiegeEngineType type, SiegeEvent siegeEvent, ISiegeEventSide side)
```

### GetAvailableManDayPower
```csharp
public override float GetAvailableManDayPower(ISiegeEventSide side)
```

### GetPrebuiltSiegeEnginesOfSettlement
```csharp
public override IEnumerable<SiegeEngineType> GetPrebuiltSiegeEnginesOfSettlement(Settlement settlement)
```

### GetPrebuiltSiegeEnginesOfSiegeCamp
```csharp
public override IEnumerable<SiegeEngineType> GetPrebuiltSiegeEnginesOfSiegeCamp(BesiegerCamp besiegerCamp)
```

### GetSiegeEngineHitPoints
```csharp
public override float GetSiegeEngineHitPoints(SiegeEvent siegeEvent, SiegeEngineType siegeEngine, BattleSideEnum battleSide)
```

### GetSiegeEngineDamage
```csharp
public override float GetSiegeEngineDamage(SiegeEvent siegeEvent, BattleSideEnum battleSide, SiegeEngineType siegeEngine, SiegeBombardTargets target)
```

### GetRangedSiegeEngineReloadTime
```csharp
public override int GetRangedSiegeEngineReloadTime(SiegeEvent siegeEvent, BattleSideEnum side, SiegeEngineType siegeEngine)
```

### GetAvailableAttackerRangedSiegeEngines
```csharp
public override IEnumerable<SiegeEngineType> GetAvailableAttackerRangedSiegeEngines(PartyBase party)
```

### GetAvailableDefenderSiegeEngines
```csharp
public override IEnumerable<SiegeEngineType> GetAvailableDefenderSiegeEngines(PartyBase party)
```

### GetAvailableAttackerRamSiegeEngines
```csharp
public override IEnumerable<SiegeEngineType> GetAvailableAttackerRamSiegeEngines(PartyBase party)
```

### GetAvailableAttackerTowerSiegeEngines
```csharp
public override IEnumerable<SiegeEngineType> GetAvailableAttackerTowerSiegeEngines(PartyBase party)
```

### GetPriorityTroopsForSallyOutAmbush
```csharp
public override FlattenedTroopRoster GetPriorityTroopsForSallyOutAmbush()
```

## Usage Example

```csharp
// Typical usage of DefaultSiegeEventModel (Model)
Game.Current.ReplaceModel<DefaultSiegeEventModel>(new MyDefaultSiegeEventModel());
```

## See Also

- [Complete Class Catalog](../catalog)