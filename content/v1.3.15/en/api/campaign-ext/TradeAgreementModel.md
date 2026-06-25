---
title: "TradeAgreementModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TradeAgreementModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TradeAgreementModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TradeAgreementModel : MBGameModel<TradeAgreementModel>`
**Base:** `MBGameModel<TradeAgreementModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/TradeAgreementModel.cs`

## Overview

`TradeAgreementModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `TradeAgreementModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetTradeAgreementDurationInYears
`public abstract CampaignTime GetTradeAgreementDurationInYears(Kingdom iniatatingKingdom, Kingdom otherKingdom)`

**Purpose:** Gets the current value of `trade agreement duration in years`.

### GetMaximumTradeAgreementCount
`public abstract int GetMaximumTradeAgreementCount(Kingdom kingdom)`

**Purpose:** Gets the current value of `maximum trade agreement count`.

### GetInfluenceCostOfProposingTradeAgreement
`public abstract int GetInfluenceCostOfProposingTradeAgreement(Clan clan)`

**Purpose:** Gets the current value of `influence cost of proposing trade agreement`.

### GetScoreOfStartingTradeAgreement
`public abstract float GetScoreOfStartingTradeAgreement(Kingdom kingdom, Kingdom targetKingdom, Clan clan, out TextObject explanation, bool includeExplanation = false)`

**Purpose:** Gets the current value of `score of starting trade agreement`.

### CanMakeTradeAgreement
`public abstract bool CanMakeTradeAgreement(Kingdom kingdom, Kingdom other, bool checkOtherSideTradeSupport, out TextObject reason, bool includeReason = false)`

**Purpose:** Checks whether the current object can `make trade agreement`.

## Usage Example

```csharp
var implementation = new CustomTradeAgreementModel();
```

## See Also

- [Complete Class Catalog](../catalog)