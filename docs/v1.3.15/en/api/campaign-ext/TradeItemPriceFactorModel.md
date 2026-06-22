<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TradeItemPriceFactorModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TradeItemPriceFactorModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TradeItemPriceFactorModel : MBGameModel<TradeItemPriceFactorModel>`
**Base:** `MBGameModel<TradeItemPriceFactorModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/TradeItemPriceFactorModel.cs`

## Overview

`TradeItemPriceFactorModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<TradeItemPriceFactorModel>(new MyTradeItemPriceFactorModel())` to change how it computes.

## Key Methods

### GetTradePenalty
```csharp
public abstract float GetTradePenalty(ItemObject item, MobileParty clientParty, PartyBase merchant, bool isSelling, float inStore, float supply, float demand)
```

### GetBasePriceFactor
```csharp
public abstract float GetBasePriceFactor(ItemCategory itemCategory, float inStoreValue, float supply, float demand, bool isSelling, int transferValue)
```

### GetPrice
```csharp
public abstract int GetPrice(EquipmentElement itemRosterElement, MobileParty clientParty, PartyBase merchant, bool isSelling, float inStoreValue, float supply, float demand)
```

### GetTheoreticalMaxItemMarketValue
```csharp
public abstract int GetTheoreticalMaxItemMarketValue(ItemObject item)
```

## Usage Example

```csharp
// Typical usage of TradeItemPriceFactorModel (Model)
Game.Current.ReplaceModel<TradeItemPriceFactorModel>(new MyTradeItemPriceFactorModel());
```

## See Also

- [Complete Class Catalog](../catalog)