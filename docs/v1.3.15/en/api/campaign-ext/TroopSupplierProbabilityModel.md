<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TroopSupplierProbabilityModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TroopSupplierProbabilityModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TroopSupplierProbabilityModel : MBGameModel<TroopSupplierProbabilityModel>`
**Base:** `MBGameModel<TroopSupplierProbabilityModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/TroopSupplierProbabilityModel.cs`

## Overview

`TroopSupplierProbabilityModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `TroopSupplierProbabilityModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### EnqueueTroopSpawnProbabilitiesAccordingToUnitSpawnPrioritization
`public abstract void EnqueueTroopSpawnProbabilitiesAccordingToUnitSpawnPrioritization(MapEventParty battleParty, FlattenedTroopRoster priorityTroops, bool includePlayers, int sizeOfSide, bool forcePriorityTroops, List<ValueTuple<FlattenedTroopRosterElement, MapEventParty, float>> priorityList)`

**Purpose:** Handles logic related to `enqueue troop spawn probabilities according to unit spawn prioritization`.

## Usage Example

```csharp
var implementation = new CustomTroopSupplierProbabilityModel();
```

## See Also

- [Complete Class Catalog](../catalog)