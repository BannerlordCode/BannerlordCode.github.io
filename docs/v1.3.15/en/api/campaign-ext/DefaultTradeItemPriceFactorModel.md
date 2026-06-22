<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultTradeItemPriceFactorModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultTradeItemPriceFactorModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultTradeItemPriceFactorModel : TradeItemPriceFactorModel`
**Base:** `TradeItemPriceFactorModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultTradeItemPriceFactorModel.cs`

## Overview

`DefaultTradeItemPriceFactorModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultTradeItemPriceFactorModel>(new MyDefaultTradeItemPriceFactorModel())` to change how it computes.

## Key Methods

### GetTradePenalty
```csharp
public override float GetTradePenalty(ItemObject item, MobileParty clientParty, PartyBase merchant, bool isSelling, float inStore, float supply, float demand)
```

### GetBasePriceFactor
```csharp
public override float GetBasePriceFactor(ItemCategory itemCategory, float inStoreValue, float supply, float demand, bool isSelling, int transferValue)
```

### GetPrice
```csharp
public override int GetPrice(EquipmentElement itemRosterElement, MobileParty clientParty, PartyBase merchant, bool isSelling, float inStoreValue, float supply, float demand)
```

### GetTheoreticalMaxItemMarketValue
```csharp
public override int GetTheoreticalMaxItemMarketValue(ItemObject item)
```

## Usage Example

```csharp
// Typical usage of DefaultTradeItemPriceFactorModel (Model)
Game.Current.ReplaceModel<DefaultTradeItemPriceFactorModel>(new MyDefaultTradeItemPriceFactorModel());
```

## See Also

- [Complete Class Catalog](../catalog)