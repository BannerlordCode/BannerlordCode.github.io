---
title: "DefaultVillageProductionCalculatorModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultVillageProductionCalculatorModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultVillageProductionCalculatorModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultVillageProductionCalculatorModel : VillageProductionCalculatorModel`
**Base:** `VillageProductionCalculatorModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultVillageProductionCalculatorModel.cs`

## Overview

`DefaultVillageProductionCalculatorModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultVillageProductionCalculatorModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateDailyProductionAmount
`public override ExplainedNumber CalculateDailyProductionAmount(Village village, ItemObject item)`

**Purpose:** Handles logic related to `calculate daily production amount`.

### CalculateDailyFoodProductionAmount
`public override float CalculateDailyFoodProductionAmount(Village village)`

**Purpose:** Handles logic related to `calculate daily food production amount`.

### CalculateProductionSpeedOfItemCategory
`public override float CalculateProductionSpeedOfItemCategory(ItemCategory item)`

**Purpose:** Handles logic related to `calculate production speed of item category`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultVillageProductionCalculatorModel>(new MyDefaultVillageProductionCalculatorModel());
```

## See Also

- [Complete Class Catalog](../catalog)