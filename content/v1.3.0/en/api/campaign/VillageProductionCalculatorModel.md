---
title: "VillageProductionCalculatorModel"
description: "Auto-generated class reference for VillageProductionCalculatorModel."
---
# VillageProductionCalculatorModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class VillageProductionCalculatorModel : MBGameModel<VillageProductionCalculatorModel>`
**Base:** `MBGameModel<VillageProductionCalculatorModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/VillageProductionCalculatorModel.cs`

## Overview

`VillageProductionCalculatorModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `VillageProductionCalculatorModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateProductionSpeedOfItemCategory
`public abstract float CalculateProductionSpeedOfItemCategory(ItemCategory item)`

**Purpose:** Calculates the current value or result of `production speed of item category`.

```csharp
// Obtain an instance of VillageProductionCalculatorModel from the subsystem API first
VillageProductionCalculatorModel villageProductionCalculatorModel = ...;
var result = villageProductionCalculatorModel.CalculateProductionSpeedOfItemCategory(item);
```

### CalculateDailyProductionAmount
`public abstract ExplainedNumber CalculateDailyProductionAmount(Village village, ItemObject item)`

**Purpose:** Calculates the current value or result of `daily production amount`.

```csharp
// Obtain an instance of VillageProductionCalculatorModel from the subsystem API first
VillageProductionCalculatorModel villageProductionCalculatorModel = ...;
var result = villageProductionCalculatorModel.CalculateDailyProductionAmount(village, item);
```

### CalculateDailyFoodProductionAmount
`public abstract float CalculateDailyFoodProductionAmount(Village village)`

**Purpose:** Calculates the current value or result of `daily food production amount`.

```csharp
// Obtain an instance of VillageProductionCalculatorModel from the subsystem API first
VillageProductionCalculatorModel villageProductionCalculatorModel = ...;
var result = villageProductionCalculatorModel.CalculateDailyFoodProductionAmount(village);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
VillageProductionCalculatorModel instance = ...;
```

## See Also

- [Area Index](../)