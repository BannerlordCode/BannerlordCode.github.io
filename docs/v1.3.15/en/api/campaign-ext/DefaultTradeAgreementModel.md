<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultTradeAgreementModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultTradeAgreementModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultTradeAgreementModel : TradeAgreementModel`
**Base:** `TradeAgreementModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultTradeAgreementModel.cs`

## Overview

`DefaultTradeAgreementModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultTradeAgreementModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetInfluenceCostOfProposingTradeAgreement
`public override int GetInfluenceCostOfProposingTradeAgreement(Clan proposerClan)`

**Purpose:** Gets the current value of `influence cost of proposing trade agreement`.

### GetMaximumTradeAgreementCount
`public override int GetMaximumTradeAgreementCount(Kingdom kingdom)`

**Purpose:** Gets the current value of `maximum trade agreement count`.

### CanMakeTradeAgreement
`public override bool CanMakeTradeAgreement(Kingdom kingdom, Kingdom other, bool checkOtherSideTradeSupport, out TextObject reason, bool includeReason = false)`

**Purpose:** Checks whether the current object can `make trade agreement`.

### GetScoreOfStartingTradeAgreement
`public override float GetScoreOfStartingTradeAgreement(Kingdom kingdom, Kingdom targetKingdom, Clan clan, out TextObject explanation, bool includeExplanation = false)`

**Purpose:** Gets the current value of `score of starting trade agreement`.

### GetTradeAgreementDurationInYears
`public override CampaignTime GetTradeAgreementDurationInYears(Kingdom iniatatingKingdom, Kingdom otherKingdom)`

**Purpose:** Gets the current value of `trade agreement duration in years`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultTradeAgreementModel>(new MyDefaultTradeAgreementModel());
```

## See Also

- [Complete Class Catalog](../catalog)