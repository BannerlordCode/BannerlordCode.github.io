---
title: "ClanTierModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanTierModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ClanTierModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ClanTierModel : MBGameModel<ClanTierModel>`
**Base:** `MBGameModel<ClanTierModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/ClanTierModel.cs`

## Overview

`ClanTierModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `ClanTierModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MinClanTier` | `public abstract int MinClanTier { get; }` |
| `MaxClanTier` | `public abstract int MaxClanTier { get; }` |
| `MercenaryEligibleTier` | `public abstract int MercenaryEligibleTier { get; }` |
| `VassalEligibleTier` | `public abstract int VassalEligibleTier { get; }` |
| `BannerEligibleTier` | `public abstract int BannerEligibleTier { get; }` |
| `RebelClanStartingTier` | `public abstract int RebelClanStartingTier { get; }` |
| `CompanionToLordClanStartingTier` | `public abstract int CompanionToLordClanStartingTier { get; }` |

## Key Methods

### CalculateInitialRenown
`public abstract int CalculateInitialRenown(Clan clan)`

**Purpose:** Handles logic related to `calculate initial renown`.

### CalculateInitialInfluence
`public abstract int CalculateInitialInfluence(Clan clan)`

**Purpose:** Handles logic related to `calculate initial influence`.

### CalculateTier
`public abstract int CalculateTier(Clan clan)`

**Purpose:** Handles logic related to `calculate tier`.

### GetRequiredRenownForTier
`public abstract int GetRequiredRenownForTier(int tier)`

**Purpose:** Gets the current value of `required renown for tier`.

### GetPartyLimitForTier
`public abstract int GetPartyLimitForTier(Clan clan, int clanTierToCheck)`

**Purpose:** Gets the current value of `party limit for tier`.

### GetCompanionLimit
`public abstract int GetCompanionLimit(Clan clan)`

**Purpose:** Gets the current value of `companion limit`.

## Usage Example

```csharp
var implementation = new CustomClanTierModel();
```

## See Also

- [Complete Class Catalog](../catalog)