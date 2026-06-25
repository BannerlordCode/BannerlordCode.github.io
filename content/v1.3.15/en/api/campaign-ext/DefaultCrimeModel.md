---
title: "DefaultCrimeModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultCrimeModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultCrimeModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCrimeModel : CrimeModel`
**Base:** `CrimeModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCrimeModel.cs`

## Overview

`DefaultCrimeModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultCrimeModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `DeclareWarCrimeRatingThreshold` | `public override float DeclareWarCrimeRatingThreshold { get; }` |

## Key Methods

### DoesPlayerHaveAnyCrimeRating
`public override bool DoesPlayerHaveAnyCrimeRating(IFaction faction)`

**Purpose:** Handles logic related to `does player have any crime rating`.

### IsPlayerCrimeRatingSevere
`public override bool IsPlayerCrimeRatingSevere(IFaction faction)`

**Purpose:** Handles logic related to `is player crime rating severe`.

### IsPlayerCrimeRatingModerate
`public override bool IsPlayerCrimeRatingModerate(IFaction faction)`

**Purpose:** Handles logic related to `is player crime rating moderate`.

### IsPlayerCrimeRatingMild
`public override bool IsPlayerCrimeRatingMild(IFaction faction)`

**Purpose:** Handles logic related to `is player crime rating mild`.

### GetCost
`public override float GetCost(IFaction faction, CrimeModel.PaymentMethod paymentMethod, float minimumCrimeRating)`

**Purpose:** Gets the current value of `cost`.

### GetDailyCrimeRatingChange
`public override ExplainedNumber GetDailyCrimeRatingChange(IFaction faction, bool includeDescriptions = false)`

**Purpose:** Gets the current value of `daily crime rating change`.

### GetMaxCrimeRating
`public override float GetMaxCrimeRating()`

**Purpose:** Gets the current value of `max crime rating`.

### GetMinAcceptableCrimeRating
`public override float GetMinAcceptableCrimeRating(IFaction faction)`

**Purpose:** Gets the current value of `min acceptable crime rating`.

### GetCrimeRatingAfterPunishment
`public override float GetCrimeRatingAfterPunishment()`

**Purpose:** Gets the current value of `crime rating after punishment`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultCrimeModel>(new MyDefaultCrimeModel());
```

## See Also

- [Complete Class Catalog](../catalog)