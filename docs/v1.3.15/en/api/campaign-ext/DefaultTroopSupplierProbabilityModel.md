<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultTroopSupplierProbabilityModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultTroopSupplierProbabilityModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultTroopSupplierProbabilityModel : TroopSupplierProbabilityModel`
**Base:** `TroopSupplierProbabilityModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultTroopSupplierProbabilityModel.cs`

## Overview

`DefaultTroopSupplierProbabilityModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultTroopSupplierProbabilityModel>(new MyDefaultTroopSupplierProbabilityModel())` to change how it computes.

## Key Methods

### EnqueueTroopSpawnProbabilitiesAccordingToUnitSpawnPrioritization
```csharp
public override void EnqueueTroopSpawnProbabilitiesAccordingToUnitSpawnPrioritization(MapEventParty battleParty, FlattenedTroopRoster priorityTroops, bool includePlayer, int sizeOfSide, bool forcePriorityTroops, List<ValueTuple<FlattenedTroopRosterElement, MapEventParty, float>> priorityList)
```

## Usage Example

```csharp
// Typical usage of DefaultTroopSupplierProbabilityModel (Model)
Game.Current.ReplaceModel<DefaultTroopSupplierProbabilityModel>(new MyDefaultTroopSupplierProbabilityModel());
```

## See Also

- [Complete Class Catalog](../catalog)