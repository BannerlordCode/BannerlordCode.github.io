---
title: "SettlementEconomyModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementEconomyModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Gets the current value of `estimated demand for category`.

### GetDailyDemandForCategory
`public abstract float GetDailyDemandForCategory(Town town, ItemCategory category, int extraProsperity = 0)`

**Purpose:** Gets the current value of `daily demand for category`.

### GetDemandChangeFromValue
`public abstract float GetDemandChangeFromValue(float purchaseValue)`

**Purpose:** Gets the current value of `demand change from value`.

### GetSupplyDemandForCategory
`public abstract ValueTuple<float, float> GetSupplyDemandForCategory(Town town, ItemCategory category, float dailySupply, float dailyDemand, float oldSupply, float oldDemand)`

**Purpose:** Gets the current value of `supply demand for category`.

### GetTownGoldChange
`public abstract int GetTownGoldChange(Town town)`

**Purpose:** Gets the current value of `town gold change`.

### CalculateDailySettlementBudgetForItemCategory
`public abstract float CalculateDailySettlementBudgetForItemCategory(Town town, float demand, ItemCategory category)`

**Purpose:** Handles logic related to `calculate daily settlement budget for item category`.

## Usage Example

```csharp
var implementation = new CustomSettlementEconomyModel();
```

## See Also

- [Complete Class Catalog](../catalog)