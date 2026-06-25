---
title: "DefaultSettlementEconomyModel"
description: "Auto-generated class reference for DefaultSettlementEconomyModel."
---
# DefaultSettlementEconomyModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementEconomyModel : SettlementEconomyModel`
**Base:** `SettlementEconomyModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementEconomyModel.cs`

## Overview

`DefaultSettlementEconomyModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultSettlementEconomyModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetSupplyDemandForCategory
`public override ValueTuple<float, float> GetSupplyDemandForCategory(Town town, ItemCategory category, float dailySupply, float dailyDemand, float oldSupply, float oldDemand)`

**Purpose:** **Purpose:** Reads and returns the supply demand for category value held by the this instance.

```csharp
// Obtain an instance of DefaultSettlementEconomyModel from the subsystem API first
DefaultSettlementEconomyModel defaultSettlementEconomyModel = ...;
var result = defaultSettlementEconomyModel.GetSupplyDemandForCategory(town, category, 0, 0, 0, 0);
```

### GetDailyDemandForCategory
`public override float GetDailyDemandForCategory(Town town, ItemCategory category, int extraProsperity)`

**Purpose:** **Purpose:** Reads and returns the daily demand for category value held by the this instance.

```csharp
// Obtain an instance of DefaultSettlementEconomyModel from the subsystem API first
DefaultSettlementEconomyModel defaultSettlementEconomyModel = ...;
var result = defaultSettlementEconomyModel.GetDailyDemandForCategory(town, category, 0);
```

### GetTownGoldChange
`public override int GetTownGoldChange(Town town)`

**Purpose:** **Purpose:** Reads and returns the town gold change value held by the this instance.

```csharp
// Obtain an instance of DefaultSettlementEconomyModel from the subsystem API first
DefaultSettlementEconomyModel defaultSettlementEconomyModel = ...;
var result = defaultSettlementEconomyModel.GetTownGoldChange(town);
```

### CalculateDailySettlementBudgetForItemCategory
`public override float CalculateDailySettlementBudgetForItemCategory(Town town, float demand, ItemCategory category)`

**Purpose:** **Purpose:** Calculates the current value or result of daily settlement budget for item category.

```csharp
// Obtain an instance of DefaultSettlementEconomyModel from the subsystem API first
DefaultSettlementEconomyModel defaultSettlementEconomyModel = ...;
var result = defaultSettlementEconomyModel.CalculateDailySettlementBudgetForItemCategory(town, 0, category);
```

### GetDemandChangeFromValue
`public override float GetDemandChangeFromValue(float purchaseValue)`

**Purpose:** **Purpose:** Reads and returns the demand change from value value held by the this instance.

```csharp
// Obtain an instance of DefaultSettlementEconomyModel from the subsystem API first
DefaultSettlementEconomyModel defaultSettlementEconomyModel = ...;
var result = defaultSettlementEconomyModel.GetDemandChangeFromValue(0);
```

### GetEstimatedDemandForCategory
`public override float GetEstimatedDemandForCategory(Town town, ItemData itemData, ItemCategory category)`

**Purpose:** **Purpose:** Reads and returns the estimated demand for category value held by the this instance.

```csharp
// Obtain an instance of DefaultSettlementEconomyModel from the subsystem API first
DefaultSettlementEconomyModel defaultSettlementEconomyModel = ...;
var result = defaultSettlementEconomyModel.GetEstimatedDemandForCategory(town, itemData, category);
```

### GetValueOfCategory
`public int GetValueOfCategory(ItemCategory category)`

**Purpose:** **Purpose:** Reads and returns the value of category value held by the this instance.

```csharp
// Obtain an instance of DefaultSettlementEconomyModel from the subsystem API first
DefaultSettlementEconomyModel defaultSettlementEconomyModel = ...;
var result = defaultSettlementEconomyModel.GetValueOfCategory(category);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultSettlementEconomyModel>(new MyDefaultSettlementEconomyModel());
```

## See Also

- [Area Index](../)