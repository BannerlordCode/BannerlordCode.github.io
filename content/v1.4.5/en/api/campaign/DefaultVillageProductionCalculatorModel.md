---
title: "DefaultVillageProductionCalculatorModel"
description: "Auto-generated class reference for DefaultVillageProductionCalculatorModel."
---
# DefaultVillageProductionCalculatorModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultVillageProductionCalculatorModel : VillageProductionCalculatorModel`
**Base:** `VillageProductionCalculatorModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultVillageProductionCalculatorModel.cs`

## Overview

`DefaultVillageProductionCalculatorModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultVillageProductionCalculatorModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateDailyProductionAmount
`public override ExplainedNumber CalculateDailyProductionAmount(Village village, ItemObject item)`

**Purpose:** Calculates the current value or result of `daily production amount`.

```csharp
// Obtain an instance of DefaultVillageProductionCalculatorModel from the subsystem API first
DefaultVillageProductionCalculatorModel defaultVillageProductionCalculatorModel = ...;
var result = defaultVillageProductionCalculatorModel.CalculateDailyProductionAmount(village, item);
```

### CalculateDailyFoodProductionAmount
`public override float CalculateDailyFoodProductionAmount(Village village)`

**Purpose:** Calculates the current value or result of `daily food production amount`.

```csharp
// Obtain an instance of DefaultVillageProductionCalculatorModel from the subsystem API first
DefaultVillageProductionCalculatorModel defaultVillageProductionCalculatorModel = ...;
var result = defaultVillageProductionCalculatorModel.CalculateDailyFoodProductionAmount(village);
```

### CalculateProductionSpeedOfItemCategory
`public override float CalculateProductionSpeedOfItemCategory(ItemCategory item)`

**Purpose:** Calculates the current value or result of `production speed of item category`.

```csharp
// Obtain an instance of DefaultVillageProductionCalculatorModel from the subsystem API first
DefaultVillageProductionCalculatorModel defaultVillageProductionCalculatorModel = ...;
var result = defaultVillageProductionCalculatorModel.CalculateProductionSpeedOfItemCategory(item);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultVillageProductionCalculatorModel>(new MyDefaultVillageProductionCalculatorModel());
```

## See Also

- [Area Index](../)