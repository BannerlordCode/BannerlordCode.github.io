---
title: "DefaultClanTierModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultClanTierModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultClanTierModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultClanTierModel : ClanTierModel`
**Base:** `ClanTierModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultClanTierModel.cs`

## Overview

`DefaultClanTierModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultClanTierModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MinClanTier` | `public override int MinClanTier { get; }` |
| `MaxClanTier` | `public override int MaxClanTier { get; }` |
| `MercenaryEligibleTier` | `public override int MercenaryEligibleTier { get; }` |
| `VassalEligibleTier` | `public override int VassalEligibleTier { get; }` |
| `BannerEligibleTier` | `public override int BannerEligibleTier { get; }` |
| `RebelClanStartingTier` | `public override int RebelClanStartingTier { get; }` |
| `CompanionToLordClanStartingTier` | `public override int CompanionToLordClanStartingTier { get; }` |

## Key Methods

### CalculateInitialRenown
`public override int CalculateInitialRenown(Clan clan)`

**Purpose:** Handles logic related to `calculate initial renown`.

### CalculateInitialInfluence
`public override int CalculateInitialInfluence(Clan clan)`

**Purpose:** Handles logic related to `calculate initial influence`.

### CalculateTier
`public override int CalculateTier(Clan clan)`

**Purpose:** Handles logic related to `calculate tier`.

### HasUpcomingTier
`public override ValueTuple<ExplainedNumber, bool> HasUpcomingTier(Clan clan, out TextObject extraExplanation, bool includeDescriptions = false)`

**Purpose:** Checks whether the current object has/contains `upcoming tier`.

### GetRequiredRenownForTier
`public override int GetRequiredRenownForTier(int tier)`

**Purpose:** Gets the current value of `required renown for tier`.

### GetPartyLimitForTier
`public override int GetPartyLimitForTier(Clan clan, int clanTierToCheck)`

**Purpose:** Gets the current value of `party limit for tier`.

### GetCompanionLimit
`public override int GetCompanionLimit(Clan clan)`

**Purpose:** Gets the current value of `companion limit`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultClanTierModel>(new MyDefaultClanTierModel());
```

## See Also

- [Complete Class Catalog](../catalog)