---
title: "InventoryCapacityModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InventoryCapacityModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# InventoryCapacityModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class InventoryCapacityModel : MBGameModel<InventoryCapacityModel>`
**Base:** `MBGameModel<InventoryCapacityModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/InventoryCapacityModel.cs`

## Overview

`InventoryCapacityModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `InventoryCapacityModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateInventoryCapacity
`public abstract ExplainedNumber CalculateInventoryCapacity(MobileParty mobileParty, bool isCurrentlyAtSea, bool includeDescriptions = false, int additionalManOnFoot = 0, int additionalSpareMounts = 0, int additionalPackAnimals = 0, bool includeFollowers = false)`

**Purpose:** Handles logic related to `calculate inventory capacity`.

### GetItemAverageWeight
`public abstract int GetItemAverageWeight()`

**Purpose:** Gets the current value of `item average weight`.

### GetItemEffectiveWeight
`public abstract float GetItemEffectiveWeight(EquipmentElement equipmentElement, MobileParty mobileParty, bool isCurrentlyAtSea, out TextObject description)`

**Purpose:** Gets the current value of `item effective weight`.

### CalculateTotalWeightCarried
`public abstract ExplainedNumber CalculateTotalWeightCarried(MobileParty mobileParty, bool isCurrentlyAtSea, bool includeDescriptions = false)`

**Purpose:** Handles logic related to `calculate total weight carried`.

## Usage Example

```csharp
var implementation = new CustomInventoryCapacityModel();
```

## See Also

- [Complete Class Catalog](../catalog)