---
title: "TradeItemPriceFactorModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TradeItemPriceFactorModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TradeItemPriceFactorModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TradeItemPriceFactorModel : MBGameModel<TradeItemPriceFactorModel>`
**Base:** `MBGameModel<TradeItemPriceFactorModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/TradeItemPriceFactorModel.cs`

## Overview

`TradeItemPriceFactorModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `TradeItemPriceFactorModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetTradePenalty
`public abstract float GetTradePenalty(ItemObject item, MobileParty clientParty, PartyBase merchant, bool isSelling, float inStore, float supply, float demand)`

**Purpose:** Gets the current value of `trade penalty`.

### GetBasePriceFactor
`public abstract float GetBasePriceFactor(ItemCategory itemCategory, float inStoreValue, float supply, float demand, bool isSelling, int transferValue)`

**Purpose:** Gets the current value of `base price factor`.

### GetPrice
`public abstract int GetPrice(EquipmentElement itemRosterElement, MobileParty clientParty, PartyBase merchant, bool isSelling, float inStoreValue, float supply, float demand)`

**Purpose:** Gets the current value of `price`.

### GetTheoreticalMaxItemMarketValue
`public abstract int GetTheoreticalMaxItemMarketValue(ItemObject item)`

**Purpose:** Gets the current value of `theoretical max item market value`.

## Usage Example

```csharp
var implementation = new CustomTradeItemPriceFactorModel();
```

## See Also

- [Complete Class Catalog](../catalog)