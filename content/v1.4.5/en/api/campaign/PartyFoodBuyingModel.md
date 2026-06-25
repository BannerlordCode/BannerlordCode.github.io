---
title: "PartyFoodBuyingModel"
description: "Auto-generated class reference for PartyFoodBuyingModel."
---
# PartyFoodBuyingModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyFoodBuyingModel : MBGameModel<PartyFoodBuyingModel>`
**Base:** `MBGameModel<PartyFoodBuyingModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PartyFoodBuyingModel.cs`

## Overview

`PartyFoodBuyingModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `PartyFoodBuyingModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MinimumDaysFoodToLastWhileBuyingFoodFromTown` | `public abstract float MinimumDaysFoodToLastWhileBuyingFoodFromTown { get; }` |
| `MinimumDaysFoodToLastWhileBuyingFoodFromVillage` | `public abstract float MinimumDaysFoodToLastWhileBuyingFoodFromVillage { get; }` |
| `LowCostFoodPriceAverage` | `public abstract float LowCostFoodPriceAverage { get; }` |

## Key Methods

### FindItemToBuy
`public abstract void FindItemToBuy(MobileParty mobileParty, Settlement settlement, out ItemRosterElement itemRosterElement, out float itemElementsPrice)`

**Purpose:** Looks up the matching item to buy in the current collection or scope.

```csharp
// Obtain an instance of PartyFoodBuyingModel from the subsystem API first
PartyFoodBuyingModel partyFoodBuyingModel = ...;
partyFoodBuyingModel.FindItemToBuy(mobileParty, settlement, itemRosterElement, itemElementsPrice);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
PartyFoodBuyingModel instance = ...;
```

## See Also

- [Area Index](../)