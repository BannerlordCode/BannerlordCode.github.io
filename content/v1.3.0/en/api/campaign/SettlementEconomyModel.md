---
title: "SettlementEconomyModel"
description: "Auto-generated class reference for SettlementEconomyModel."
---
# SettlementEconomyModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementEconomyModel : MBGameModel<SettlementEconomyModel>`
**Base:** `MBGameModel<SettlementEconomyModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementEconomyModel.cs`

## Overview

`SettlementEconomyModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `SettlementEconomyModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetEstimatedDemandForCategory
`public abstract float GetEstimatedDemandForCategory(Town town, ItemData itemData, ItemCategory category)`

**Purpose:** Reads and returns the estimated demand for category value held by the this instance.

```csharp
// Obtain an instance of SettlementEconomyModel from the subsystem API first
SettlementEconomyModel settlementEconomyModel = ...;
var result = settlementEconomyModel.GetEstimatedDemandForCategory(town, itemData, category);
```

### GetDailyDemandForCategory
`public abstract float GetDailyDemandForCategory(Town town, ItemCategory category, int extraProsperity = 0)`

**Purpose:** Reads and returns the daily demand for category value held by the this instance.

```csharp
// Obtain an instance of SettlementEconomyModel from the subsystem API first
SettlementEconomyModel settlementEconomyModel = ...;
var result = settlementEconomyModel.GetDailyDemandForCategory(town, category, 0);
```

### GetDemandChangeFromValue
`public abstract float GetDemandChangeFromValue(float purchaseValue)`

**Purpose:** Reads and returns the demand change from value value held by the this instance.

```csharp
// Obtain an instance of SettlementEconomyModel from the subsystem API first
SettlementEconomyModel settlementEconomyModel = ...;
var result = settlementEconomyModel.GetDemandChangeFromValue(0);
```

### GetSupplyDemandForCategory
`public abstract ValueTuple<float, float> GetSupplyDemandForCategory(Town town, ItemCategory category, float dailySupply, float dailyDemand, float oldSupply, float oldDemand)`

**Purpose:** Reads and returns the supply demand for category value held by the this instance.

```csharp
// Obtain an instance of SettlementEconomyModel from the subsystem API first
SettlementEconomyModel settlementEconomyModel = ...;
var result = settlementEconomyModel.GetSupplyDemandForCategory(town, category, 0, 0, 0, 0);
```

### GetTownGoldChange
`public abstract int GetTownGoldChange(Town town)`

**Purpose:** Reads and returns the town gold change value held by the this instance.

```csharp
// Obtain an instance of SettlementEconomyModel from the subsystem API first
SettlementEconomyModel settlementEconomyModel = ...;
var result = settlementEconomyModel.GetTownGoldChange(town);
```

### CalculateDailySettlementBudgetForItemCategory
`public abstract float CalculateDailySettlementBudgetForItemCategory(Town town, float demand, ItemCategory category)`

**Purpose:** Calculates the current value or result of daily settlement budget for item category.

```csharp
// Obtain an instance of SettlementEconomyModel from the subsystem API first
SettlementEconomyModel settlementEconomyModel = ...;
var result = settlementEconomyModel.CalculateDailySettlementBudgetForItemCategory(town, 0, category);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
SettlementEconomyModel instance = ...;
```

## See Also

- [Area Index](../)