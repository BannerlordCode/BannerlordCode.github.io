---
title: "DefaultMobilePartyFoodConsumptionModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultMobilePartyFoodConsumptionModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultMobilePartyFoodConsumptionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMobilePartyFoodConsumptionModel : MobilePartyFoodConsumptionModel`
**Base:** `MobilePartyFoodConsumptionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMobilePartyFoodConsumptionModel.cs`

## Overview

`DefaultMobilePartyFoodConsumptionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultMobilePartyFoodConsumptionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `NumberOfMenOnMapToEatOneFood` | `public override int NumberOfMenOnMapToEatOneFood { get; }` |

## Key Methods

### CalculateDailyBaseFoodConsumptionf
`public override ExplainedNumber CalculateDailyBaseFoodConsumptionf(MobileParty party, bool includeDescription = false)`

**Purpose:** Handles logic related to `calculate daily base food consumptionf`.

### CalculateDailyFoodConsumptionf
`public override ExplainedNumber CalculateDailyFoodConsumptionf(MobileParty party, ExplainedNumber baseConsumption)`

**Purpose:** Handles logic related to `calculate daily food consumptionf`.

### DoesPartyConsumeFood
`public override bool DoesPartyConsumeFood(MobileParty mobileParty)`

**Purpose:** Handles logic related to `does party consume food`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultMobilePartyFoodConsumptionModel>(new MyDefaultMobilePartyFoodConsumptionModel());
```

## See Also

- [Complete Class Catalog](../catalog)