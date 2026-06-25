---
title: "DefaultPartyFoodBuyingModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultPartyFoodBuyingModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultPartyFoodBuyingModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyFoodBuyingModel : PartyFoodBuyingModel`
**Base:** `PartyFoodBuyingModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyFoodBuyingModel.cs`

## Overview

`DefaultPartyFoodBuyingModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultPartyFoodBuyingModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MinimumDaysFoodToLastWhileBuyingFoodFromTown` | `public override float MinimumDaysFoodToLastWhileBuyingFoodFromTown { get; }` |
| `MinimumDaysFoodToLastWhileBuyingFoodFromVillage` | `public override float MinimumDaysFoodToLastWhileBuyingFoodFromVillage { get; }` |
| `LowCostFoodPriceAverage` | `public override float LowCostFoodPriceAverage { get; }` |

## Key Methods

### FindItemToBuy
`public override void FindItemToBuy(MobileParty mobileParty, Settlement settlement, out ItemRosterElement itemElement, out float itemElementsPrice)`

**Purpose:** Handles logic related to `find item to buy`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultPartyFoodBuyingModel>(new MyDefaultPartyFoodBuyingModel());
```

## See Also

- [Complete Class Catalog](../catalog)