---
title: "DefaultPartyFoodBuyingModel"
description: "Auto-generated class reference for DefaultPartyFoodBuyingModel."
---
# DefaultPartyFoodBuyingModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyFoodBuyingModel : PartyFoodBuyingModel`
**Base:** `PartyFoodBuyingModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultPartyFoodBuyingModel.cs`

## Overview

`DefaultPartyFoodBuyingModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultPartyFoodBuyingModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### FindItemToBuy
`public override void FindItemToBuy(MobileParty mobileParty, Settlement settlement, out ItemRosterElement itemElement, out float itemElementsPrice)`

**Purpose:** Looks up the matching item to buy in the current collection or scope.

```csharp
// Obtain an instance of DefaultPartyFoodBuyingModel from the subsystem API first
DefaultPartyFoodBuyingModel defaultPartyFoodBuyingModel = ...;
defaultPartyFoodBuyingModel.FindItemToBuy(mobileParty, settlement, itemElement, itemElementsPrice);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultPartyFoodBuyingModel>(new MyDefaultPartyFoodBuyingModel());
```

## See Also

- [Area Index](../)