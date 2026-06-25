---
title: "VillageProductionCalculatorModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VillageProductionCalculatorModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `calculate production speed of item category`.

### CalculateDailyProductionAmount
`public abstract ExplainedNumber CalculateDailyProductionAmount(Village village, ItemObject item)`

**Purpose:** Handles logic related to `calculate daily production amount`.

### CalculateDailyFoodProductionAmount
`public abstract float CalculateDailyFoodProductionAmount(Village village)`

**Purpose:** Handles logic related to `calculate daily food production amount`.

## Usage Example

```csharp
var implementation = new CustomVillageProductionCalculatorModel();
```

## See Also

- [Complete Class Catalog](../catalog)