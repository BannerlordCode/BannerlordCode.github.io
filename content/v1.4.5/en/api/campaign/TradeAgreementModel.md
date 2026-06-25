---
title: "TradeAgreementModel"
description: "Auto-generated class reference for TradeAgreementModel."
---
# TradeAgreementModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TradeAgreementModel : MBGameModel<TradeAgreementModel>`
**Base:** `MBGameModel<TradeAgreementModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/TradeAgreementModel.cs`

## Overview

`TradeAgreementModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `TradeAgreementModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetProfitPerCaravanVisit
`public abstract int GetProfitPerCaravanVisit(MobileParty mobileParty)`

**Purpose:** Reads and returns the `profit per caravan visit` value held by the current object.

```csharp
// Obtain an instance of TradeAgreementModel from the subsystem API first
TradeAgreementModel tradeAgreementModel = ...;
var result = tradeAgreementModel.GetProfitPerCaravanVisit(mobileParty);
```

### GetTradeAgreementDurationInYears
`public abstract CampaignTime GetTradeAgreementDurationInYears(Kingdom iniatatingKingdom, Kingdom otherKingdom)`

**Purpose:** Reads and returns the `trade agreement duration in years` value held by the current object.

```csharp
// Obtain an instance of TradeAgreementModel from the subsystem API first
TradeAgreementModel tradeAgreementModel = ...;
var result = tradeAgreementModel.GetTradeAgreementDurationInYears(iniatatingKingdom, otherKingdom);
```

### GetMaximumTradeAgreementCount
`public abstract int GetMaximumTradeAgreementCount(Kingdom kingdom)`

**Purpose:** Reads and returns the `maximum trade agreement count` value held by the current object.

```csharp
// Obtain an instance of TradeAgreementModel from the subsystem API first
TradeAgreementModel tradeAgreementModel = ...;
var result = tradeAgreementModel.GetMaximumTradeAgreementCount(kingdom);
```

### GetInfluenceCostOfProposingTradeAgreement
`public abstract int GetInfluenceCostOfProposingTradeAgreement(Clan clan)`

**Purpose:** Reads and returns the `influence cost of proposing trade agreement` value held by the current object.

```csharp
// Obtain an instance of TradeAgreementModel from the subsystem API first
TradeAgreementModel tradeAgreementModel = ...;
var result = tradeAgreementModel.GetInfluenceCostOfProposingTradeAgreement(clan);
```

### GetScoreOfStartingTradeAgreement
`public abstract float GetScoreOfStartingTradeAgreement(Kingdom kingdom, Kingdom targetKingdom, Clan clan, out TextObject explanation, bool includeExplanation = false)`

**Purpose:** Reads and returns the `score of starting trade agreement` value held by the current object.

```csharp
// Obtain an instance of TradeAgreementModel from the subsystem API first
TradeAgreementModel tradeAgreementModel = ...;
var result = tradeAgreementModel.GetScoreOfStartingTradeAgreement(kingdom, targetKingdom, clan, explanation, false);
```

### CanMakeTradeAgreement
`public abstract bool CanMakeTradeAgreement(Kingdom kingdom, Kingdom other, bool checkOtherSideTradeSupport, out TextObject reason, bool includeReason = false)`

**Purpose:** Checks whether the current object meets the preconditions for `make trade agreement`.

```csharp
// Obtain an instance of TradeAgreementModel from the subsystem API first
TradeAgreementModel tradeAgreementModel = ...;
var result = tradeAgreementModel.CanMakeTradeAgreement(kingdom, other, false, reason, false);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
TradeAgreementModel instance = ...;
```

## See Also

- [Area Index](../)