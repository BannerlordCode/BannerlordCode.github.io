---
title: "DefaultInventoryCapacityModel"
description: "Auto-generated class reference for DefaultInventoryCapacityModel."
---
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

**Purpose:** **Purpose:** Reads and returns the item average weight value held by the this instance.

```csharp
// Obtain an instance of DefaultInventoryCapacityModel from the subsystem API first
DefaultInventoryCapacityModel defaultInventoryCapacityModel = ...;
var result = defaultInventoryCapacityModel.GetItemAverageWeight();
```

### GetItemEffectiveWeight
`public override float GetItemEffectiveWeight(EquipmentElement equipmentElement, MobileParty mobileParty, bool isCurrentlyAtSea, out TextObject description)`

**Purpose:** **Purpose:** Reads and returns the item effective weight value held by the this instance.

```csharp
// Obtain an instance of DefaultInventoryCapacityModel from the subsystem API first
DefaultInventoryCapacityModel defaultInventoryCapacityModel = ...;
var result = defaultInventoryCapacityModel.GetItemEffectiveWeight(equipmentElement, mobileParty, false, description);
```

### CalculateInventoryCapacity
`public override ExplainedNumber CalculateInventoryCapacity(MobileParty mobileParty, bool isCurrentlyAtSea, bool includeDescriptions = false, int additionalTroops = 0, int additionalSpareMounts = 0, int additionalPackAnimals = 0, bool includeFollowers = false)`

**Purpose:** **Purpose:** Calculates the current value or result of inventory capacity.

```csharp
// Obtain an instance of DefaultInventoryCapacityModel from the subsystem API first
DefaultInventoryCapacityModel defaultInventoryCapacityModel = ...;
var result = defaultInventoryCapacityModel.CalculateInventoryCapacity(mobileParty, false, false, 0, 0, 0, false);
```

### CalculateTotalWeightCarried
`public override ExplainedNumber CalculateTotalWeightCarried(MobileParty mobileParty, bool isCurrentlyAtSea, bool includeDescriptions = false)`

**Purpose:** **Purpose:** Calculates the current value or result of total weight carried.

```csharp
// Obtain an instance of DefaultInventoryCapacityModel from the subsystem API first
DefaultInventoryCapacityModel defaultInventoryCapacityModel = ...;
var result = defaultInventoryCapacityModel.CalculateTotalWeightCarried(mobileParty, false, false);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultInventoryCapacityModel>(new MyDefaultInventoryCapacityModel());
```

## See Also

- [Area Index](../)