<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultTradeItemPriceFactorModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultTradeItemPriceFactorModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultTradeItemPriceFactorModel : TradeItemPriceFactorModel`
**Base:** `TradeItemPriceFactorModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultTradeItemPriceFactorModel.cs`

## Overview

`DefaultTradeItemPriceFactorModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultTradeItemPriceFactorModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetTradePenalty
`public override float GetTradePenalty(ItemObject item, MobileParty clientParty, PartyBase merchant, bool isSelling, float inStore, float supply, float demand)`

**Purpose:** Gets the current value of `trade penalty`.

### GetBasePriceFactor
`public override float GetBasePriceFactor(ItemCategory itemCategory, float inStoreValue, float supply, float demand, bool isSelling, int transferValue)`

**Purpose:** Gets the current value of `base price factor`.

### GetPrice
`public override int GetPrice(EquipmentElement itemRosterElement, MobileParty clientParty, PartyBase merchant, bool isSelling, float inStoreValue, float supply, float demand)`

**Purpose:** Gets the current value of `price`.

### GetTheoreticalMaxItemMarketValue
`public override int GetTheoreticalMaxItemMarketValue(ItemObject item)`

**Purpose:** Gets the current value of `theoretical max item market value`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultTradeItemPriceFactorModel>(new MyDefaultTradeItemPriceFactorModel());
```

## See Also

- [Complete Class Catalog](../catalog)