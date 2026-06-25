---
title: "TradeItemPriceFactorModel"
description: "Auto-generated class reference for TradeItemPriceFactorModel."
---
# TradeItemPriceFactorModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TradeItemPriceFactorModel : MBGameModel<TradeItemPriceFactorModel>`
**Base:** `MBGameModel<TradeItemPriceFactorModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/TradeItemPriceFactorModel.cs`

## Overview

`TradeItemPriceFactorModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `TradeItemPriceFactorModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetTradePenalty
`public abstract float GetTradePenalty(ItemObject item, MobileParty clientParty, PartyBase merchant, bool isSelling, float inStore, float supply, float demand)`

**Purpose:** Reads and returns the `trade penalty` value held by the current object.

```csharp
// Obtain an instance of TradeItemPriceFactorModel from the subsystem API first
TradeItemPriceFactorModel tradeItemPriceFactorModel = ...;
var result = tradeItemPriceFactorModel.GetTradePenalty(item, clientParty, merchant, false, 0, 0, 0);
```

### GetBasePriceFactor
`public abstract float GetBasePriceFactor(ItemCategory itemCategory, float inStoreValue, float supply, float demand, bool isSelling, int transferValue)`

**Purpose:** Reads and returns the `base price factor` value held by the current object.

```csharp
// Obtain an instance of TradeItemPriceFactorModel from the subsystem API first
TradeItemPriceFactorModel tradeItemPriceFactorModel = ...;
var result = tradeItemPriceFactorModel.GetBasePriceFactor(itemCategory, 0, 0, 0, false, 0);
```

### GetPrice
`public abstract int GetPrice(EquipmentElement itemRosterElement, MobileParty clientParty, PartyBase merchant, bool isSelling, float inStoreValue, float supply, float demand)`

**Purpose:** Reads and returns the `price` value held by the current object.

```csharp
// Obtain an instance of TradeItemPriceFactorModel from the subsystem API first
TradeItemPriceFactorModel tradeItemPriceFactorModel = ...;
var result = tradeItemPriceFactorModel.GetPrice(itemRosterElement, clientParty, merchant, false, 0, 0, 0);
```

### GetTheoreticalMaxItemMarketValue
`public abstract int GetTheoreticalMaxItemMarketValue(ItemObject item)`

**Purpose:** Reads and returns the `theoretical max item market value` value held by the current object.

```csharp
// Obtain an instance of TradeItemPriceFactorModel from the subsystem API first
TradeItemPriceFactorModel tradeItemPriceFactorModel = ...;
var result = tradeItemPriceFactorModel.GetTheoreticalMaxItemMarketValue(item);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
TradeItemPriceFactorModel instance = ...;
```

## See Also

- [Area Index](../)