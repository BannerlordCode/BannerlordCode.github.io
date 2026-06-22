<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultTradeAgreementModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultTradeAgreementModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultTradeAgreementModel : TradeAgreementModel`
**Base:** `TradeAgreementModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultTradeAgreementModel.cs`

## Overview

`DefaultTradeAgreementModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultTradeAgreementModel>(new MyDefaultTradeAgreementModel())` to change how it computes.

## Key Methods

### GetInfluenceCostOfProposingTradeAgreement
```csharp
public override int GetInfluenceCostOfProposingTradeAgreement(Clan proposerClan)
```

### GetMaximumTradeAgreementCount
```csharp
public override int GetMaximumTradeAgreementCount(Kingdom kingdom)
```

### CanMakeTradeAgreement
```csharp
public override bool CanMakeTradeAgreement(Kingdom kingdom, Kingdom other, bool checkOtherSideTradeSupport, out TextObject reason, bool includeReason = false)
```

### GetScoreOfStartingTradeAgreement
```csharp
public override float GetScoreOfStartingTradeAgreement(Kingdom kingdom, Kingdom targetKingdom, Clan clan, out TextObject explanation, bool includeExplanation = false)
```

### GetTradeAgreementDurationInYears
```csharp
public override CampaignTime GetTradeAgreementDurationInYears(Kingdom iniatatingKingdom, Kingdom otherKingdom)
```

## Usage Example

```csharp
// Typical usage of DefaultTradeAgreementModel (Model)
Game.Current.ReplaceModel<DefaultTradeAgreementModel>(new MyDefaultTradeAgreementModel());
```

## See Also

- [Complete Class Catalog](../catalog)