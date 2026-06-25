---
title: "DefaultInventoryCapacityModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultInventoryCapacityModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultInventoryCapacityModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultInventoryCapacityModel : InventoryCapacityModel`
**Base:** `InventoryCapacityModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultInventoryCapacityModel.cs`

## Overview

`DefaultInventoryCapacityModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultInventoryCapacityModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetItemAverageWeight
`public override int GetItemAverageWeight()`

**Purpose:** Gets the current value of `item average weight`.

### GetItemEffectiveWeight
`public override float GetItemEffectiveWeight(EquipmentElement equipmentElement, MobileParty mobileParty, out TextObject description)`

**Purpose:** Gets the current value of `item effective weight`.

### CalculateInventoryCapacity
`public override ExplainedNumber CalculateInventoryCapacity(MobileParty mobileParty, bool isCurrentlyAtSea, bool includeDescriptions = false, int additionalTroops = 0, int additionalSpareMounts = 0, int additionalPackAnimals = 0, bool includeFollowers = false)`

**Purpose:** Handles logic related to `calculate inventory capacity`.

### CalculateTotalWeightCarried
`public override ExplainedNumber CalculateTotalWeightCarried(MobileParty mobileParty, bool isCurrentlyAtSea, bool includeDescriptions = false)`

**Purpose:** Handles logic related to `calculate total weight carried`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultInventoryCapacityModel>(new MyDefaultInventoryCapacityModel());
```

## See Also

- [Complete Class Catalog](../catalog)