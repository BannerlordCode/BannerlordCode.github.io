<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TroopSupplierProbabilityModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TroopSupplierProbabilityModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TroopSupplierProbabilityModel : MBGameModel<TroopSupplierProbabilityModel>`
**Base:** `MBGameModel<TroopSupplierProbabilityModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/TroopSupplierProbabilityModel.cs`

## Overview

`TroopSupplierProbabilityModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<TroopSupplierProbabilityModel>(new MyTroopSupplierProbabilityModel())` to change how it computes.

## Key Methods

### EnqueueTroopSpawnProbabilitiesAccordingToUnitSpawnPrioritization
```csharp
public abstract void EnqueueTroopSpawnProbabilitiesAccordingToUnitSpawnPrioritization(MapEventParty battleParty, FlattenedTroopRoster priorityTroops, bool includePlayers, int sizeOfSide, bool forcePriorityTroops, List<ValueTuple<FlattenedTroopRosterElement, MapEventParty, float>> priorityList)
```

## Usage Example

```csharp
// Typical usage of TroopSupplierProbabilityModel (Model)
Game.Current.ReplaceModel<TroopSupplierProbabilityModel>(new MyTroopSupplierProbabilityModel());
```

## See Also

- [Complete Class Catalog](../catalog)