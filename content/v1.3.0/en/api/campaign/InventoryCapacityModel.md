---
title: "InventoryCapacityModel"
description: "Auto-generated class reference for InventoryCapacityModel."
---
# InventoryCapacityModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class InventoryCapacityModel : MBGameModel<InventoryCapacityModel>`
**Base:** `MBGameModel<InventoryCapacityModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/InventoryCapacityModel.cs`

## Overview

`InventoryCapacityModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `InventoryCapacityModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateInventoryCapacity
`public abstract ExplainedNumber CalculateInventoryCapacity(MobileParty mobileParty, bool isCurrentlyAtSea, bool includeDescriptions = false, int additionalManOnFoot = 0, int additionalSpareMounts = 0, int additionalPackAnimals = 0, bool includeFollowers = false)`

**Purpose:** Calculates the current value or result of `inventory capacity`.

```csharp
// Obtain an instance of InventoryCapacityModel from the subsystem API first
InventoryCapacityModel inventoryCapacityModel = ...;
var result = inventoryCapacityModel.CalculateInventoryCapacity(mobileParty, false, false, 0, 0, 0, false);
```

### GetItemAverageWeight
`public abstract int GetItemAverageWeight()`

**Purpose:** Reads and returns the `item average weight` value held by the current object.

```csharp
// Obtain an instance of InventoryCapacityModel from the subsystem API first
InventoryCapacityModel inventoryCapacityModel = ...;
var result = inventoryCapacityModel.GetItemAverageWeight();
```

### GetItemEffectiveWeight
`public abstract float GetItemEffectiveWeight(EquipmentElement equipmentElement, MobileParty mobileParty, out TextObject description)`

**Purpose:** Reads and returns the `item effective weight` value held by the current object.

```csharp
// Obtain an instance of InventoryCapacityModel from the subsystem API first
InventoryCapacityModel inventoryCapacityModel = ...;
var result = inventoryCapacityModel.GetItemEffectiveWeight(equipmentElement, mobileParty, description);
```

### CalculateTotalWeightCarried
`public abstract ExplainedNumber CalculateTotalWeightCarried(MobileParty mobileParty, bool isCurrentlyAtSea, bool includeDescriptions = false)`

**Purpose:** Calculates the current value or result of `total weight carried`.

```csharp
// Obtain an instance of InventoryCapacityModel from the subsystem API first
InventoryCapacityModel inventoryCapacityModel = ...;
var result = inventoryCapacityModel.CalculateTotalWeightCarried(mobileParty, false, false);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
InventoryCapacityModel instance = ...;
```

## See Also

- [Area Index](../)