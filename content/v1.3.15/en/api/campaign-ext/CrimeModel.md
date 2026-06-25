---
title: "CrimeModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CrimeModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CrimeModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CrimeModel : MBGameModel<CrimeModel>`
**Base:** `MBGameModel<CrimeModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CrimeModel.cs`

## Overview

`CrimeModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `CrimeModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `DeclareWarCrimeRatingThreshold` | `public abstract float DeclareWarCrimeRatingThreshold { get; }` |

## Key Methods

### GetMaxCrimeRating
`public abstract float GetMaxCrimeRating()`

**Purpose:** Gets the current value of `max crime rating`.

### GetMinAcceptableCrimeRating
`public abstract float GetMinAcceptableCrimeRating(IFaction faction)`

**Purpose:** Gets the current value of `min acceptable crime rating`.

### GetCrimeRatingAfterPunishment
`public abstract float GetCrimeRatingAfterPunishment()`

**Purpose:** Gets the current value of `crime rating after punishment`.

### DoesPlayerHaveAnyCrimeRating
`public abstract bool DoesPlayerHaveAnyCrimeRating(IFaction faction)`

**Purpose:** Handles logic related to `does player have any crime rating`.

### IsPlayerCrimeRatingSevere
`public abstract bool IsPlayerCrimeRatingSevere(IFaction faction)`

**Purpose:** Handles logic related to `is player crime rating severe`.

### IsPlayerCrimeRatingModerate
`public abstract bool IsPlayerCrimeRatingModerate(IFaction faction)`

**Purpose:** Handles logic related to `is player crime rating moderate`.

### IsPlayerCrimeRatingMild
`public abstract bool IsPlayerCrimeRatingMild(IFaction faction)`

**Purpose:** Handles logic related to `is player crime rating mild`.

### GetCost
`public abstract float GetCost(IFaction faction, CrimeModel.PaymentMethod paymentMethod, float minimumCrimeRating)`

**Purpose:** Gets the current value of `cost`.

### GetDailyCrimeRatingChange
`public abstract ExplainedNumber GetDailyCrimeRatingChange(IFaction faction, bool includeDescriptions = false)`

**Purpose:** Gets the current value of `daily crime rating change`.

## Usage Example

```csharp
var implementation = new CustomCrimeModel();
```

## See Also

- [Complete Class Catalog](../catalog)