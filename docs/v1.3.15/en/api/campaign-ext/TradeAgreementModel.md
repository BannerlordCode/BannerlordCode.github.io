<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TradeAgreementModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TradeAgreementModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TradeAgreementModel : MBGameModel<TradeAgreementModel>`
**Base:** `MBGameModel<TradeAgreementModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/TradeAgreementModel.cs`

## Overview

`TradeAgreementModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<TradeAgreementModel>(new MyTradeAgreementModel())` to change how it computes.

## Key Methods

### GetTradeAgreementDurationInYears
```csharp
public abstract CampaignTime GetTradeAgreementDurationInYears(Kingdom iniatatingKingdom, Kingdom otherKingdom)
```

### GetMaximumTradeAgreementCount
```csharp
public abstract int GetMaximumTradeAgreementCount(Kingdom kingdom)
```

### GetInfluenceCostOfProposingTradeAgreement
```csharp
public abstract int GetInfluenceCostOfProposingTradeAgreement(Clan clan)
```

### GetScoreOfStartingTradeAgreement
```csharp
public abstract float GetScoreOfStartingTradeAgreement(Kingdom kingdom, Kingdom targetKingdom, Clan clan, out TextObject explanation, bool includeExplanation = false)
```

### CanMakeTradeAgreement
```csharp
public abstract bool CanMakeTradeAgreement(Kingdom kingdom, Kingdom other, bool checkOtherSideTradeSupport, out TextObject reason, bool includeReason = false)
```

## Usage Example

```csharp
// Typical usage of TradeAgreementModel (Model)
Game.Current.ReplaceModel<TradeAgreementModel>(new MyTradeAgreementModel());
```

## See Also

- [Complete Class Catalog](../catalog)