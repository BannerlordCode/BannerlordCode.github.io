---
title: "DefaultTradeItemPriceFactorModel"
description: "Auto-generated class reference for DefaultTradeItemPriceFactorModel."
---
# DefaultTradeItemPriceFactorModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultTradeItemPriceFactorModel : TradeItemPriceFactorModel`
**Base:** `TradeItemPriceFactorModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultTradeItemPriceFactorModel.cs`

## Overview

`DefaultTradeItemPriceFactorModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultTradeItemPriceFactorModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetTradePenalty
`public override float GetTradePenalty(ItemObject item, MobileParty clientParty, PartyBase merchant, bool isSelling, float inStore, float supply, float demand)`

**Purpose:** Reads and returns the trade penalty value held by the this instance.

```csharp
// Obtain an instance of DefaultTradeItemPriceFactorModel from the subsystem API first
DefaultTradeItemPriceFactorModel defaultTradeItemPriceFactorModel = ...;
var result = defaultTradeItemPriceFactorModel.GetTradePenalty(item, clientParty, merchant, false, 0, 0, 0);
```

### GetBasePriceFactor
`public override float GetBasePriceFactor(ItemCategory itemCategory, float inStoreValue, float supply, float demand, bool isSelling, int transferValue)`

**Purpose:** Reads and returns the base price factor value held by the this instance.

```csharp
// Obtain an instance of DefaultTradeItemPriceFactorModel from the subsystem API first
DefaultTradeItemPriceFactorModel defaultTradeItemPriceFactorModel = ...;
var result = defaultTradeItemPriceFactorModel.GetBasePriceFactor(itemCategory, 0, 0, 0, false, 0);
```

### GetPrice
`public override int GetPrice(EquipmentElement itemRosterElement, MobileParty clientParty, PartyBase merchant, bool isSelling, float inStoreValue, float supply, float demand)`

**Purpose:** Reads and returns the price value held by the this instance.

```csharp
// Obtain an instance of DefaultTradeItemPriceFactorModel from the subsystem API first
DefaultTradeItemPriceFactorModel defaultTradeItemPriceFactorModel = ...;
var result = defaultTradeItemPriceFactorModel.GetPrice(itemRosterElement, clientParty, merchant, false, 0, 0, 0);
```

### GetTheoreticalMaxItemMarketValue
`public override int GetTheoreticalMaxItemMarketValue(ItemObject item)`

**Purpose:** Reads and returns the theoretical max item market value value held by the this instance.

```csharp
// Obtain an instance of DefaultTradeItemPriceFactorModel from the subsystem API first
DefaultTradeItemPriceFactorModel defaultTradeItemPriceFactorModel = ...;
var result = defaultTradeItemPriceFactorModel.GetTheoreticalMaxItemMarketValue(item);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultTradeItemPriceFactorModel>(new MyDefaultTradeItemPriceFactorModel());
```

## See Also

- [Area Index](../)