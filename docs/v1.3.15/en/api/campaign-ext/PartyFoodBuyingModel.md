<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyFoodBuyingModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyFoodBuyingModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyFoodBuyingModel : MBGameModel<PartyFoodBuyingModel>`
**Base:** `MBGameModel<PartyFoodBuyingModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyFoodBuyingModel.cs`

## Overview

`PartyFoodBuyingModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<PartyFoodBuyingModel>(new MyPartyFoodBuyingModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `MinimumDaysFoodToLastWhileBuyingFoodFromTown` | `public abstract float MinimumDaysFoodToLastWhileBuyingFoodFromTown { get; }` |
| `MinimumDaysFoodToLastWhileBuyingFoodFromVillage` | `public abstract float MinimumDaysFoodToLastWhileBuyingFoodFromVillage { get; }` |
| `LowCostFoodPriceAverage` | `public abstract float LowCostFoodPriceAverage { get; }` |

## Key Methods

### FindItemToBuy
```csharp
public abstract void FindItemToBuy(MobileParty mobileParty, Settlement settlement, out ItemRosterElement itemRosterElement, out float itemElementsPrice)
```

## Usage Example

```csharp
// Typical usage of PartyFoodBuyingModel (Model)
Game.Current.ReplaceModel<PartyFoodBuyingModel>(new MyPartyFoodBuyingModel());
```

## See Also

- [Complete Class Catalog](../catalog)