---
title: "MobilePartyFoodConsumptionModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MobilePartyFoodConsumptionModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MobilePartyFoodConsumptionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MobilePartyFoodConsumptionModel : MBGameModel<MobilePartyFoodConsumptionModel>`
**Base:** `MBGameModel<MobilePartyFoodConsumptionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MobilePartyFoodConsumptionModel.cs`

## Overview

`MobilePartyFoodConsumptionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `MobilePartyFoodConsumptionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `NumberOfMenOnMapToEatOneFood` | `public abstract int NumberOfMenOnMapToEatOneFood { get; }` |

## Key Methods

### CalculateDailyBaseFoodConsumptionf
`public abstract ExplainedNumber CalculateDailyBaseFoodConsumptionf(MobileParty party, bool includeDescription = false)`

**Purpose:** Handles logic related to `calculate daily base food consumptionf`.

### CalculateDailyFoodConsumptionf
`public abstract ExplainedNumber CalculateDailyFoodConsumptionf(MobileParty party, ExplainedNumber baseConsumption)`

**Purpose:** Handles logic related to `calculate daily food consumptionf`.

### DoesPartyConsumeFood
`public abstract bool DoesPartyConsumeFood(MobileParty mobileParty)`

**Purpose:** Handles logic related to `does party consume food`.

## Usage Example

```csharp
var implementation = new CustomMobilePartyFoodConsumptionModel();
```

## See Also

- [Complete Class Catalog](../catalog)