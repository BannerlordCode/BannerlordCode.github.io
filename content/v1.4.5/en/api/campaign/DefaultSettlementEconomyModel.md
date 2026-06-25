---
title: "DefaultSettlementEconomyModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultSettlementEconomyModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultSettlementEconomyModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementEconomyModel : SettlementEconomyModel`
**Base:** `SettlementEconomyModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultSettlementEconomyModel.cs`

## Overview

`DefaultSettlementEconomyModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultSettlementEconomyModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetValueOfCategory
`public int GetValueOfCategory(ItemCategory category)`

**Purpose:** Gets the current value of `value of category`.

### GetDailyDemandForCategory
`public override float GetDailyDemandForCategory(Town town, ItemCategory category, int extraProsperity)`

**Purpose:** Gets the current value of `daily demand for category`.

### GetTownGoldChange
`public override int GetTownGoldChange(Town town)`

**Purpose:** Gets the current value of `town gold change`.

### CalculateDailySettlementBudgetForItemCategory
`public override float CalculateDailySettlementBudgetForItemCategory(Town town, float demand, ItemCategory category)`

**Purpose:** Handles logic related to `calculate daily settlement budget for item category`.

### GetDemandChangeFromValue
`public override float GetDemandChangeFromValue(float purchaseValue)`

**Purpose:** Gets the current value of `demand change from value`.

### GetEstimatedDemandForCategory
`public override float GetEstimatedDemandForCategory(Town town, ItemData itemData, ItemCategory category)`

**Purpose:** Gets the current value of `estimated demand for category`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultSettlementEconomyModel>(new MyDefaultSettlementEconomyModel());
```

## See Also

- [Complete Class Catalog](../catalog)