<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanTierModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanTierModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ClanTierModel : MBGameModel<ClanTierModel>`
**Base:** `MBGameModel<ClanTierModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ClanTierModel.cs`

## Overview

`ClanTierModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<ClanTierModel>(new MyClanTierModel())` to change how it computes.

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
```csharp
public abstract int CalculateInitialRenown(Clan clan)
```

### CalculateInitialInfluence
```csharp
public abstract int CalculateInitialInfluence(Clan clan)
```

### CalculateTier
```csharp
public abstract int CalculateTier(Clan clan)
```

### HasUpcomingTier
```csharp
public abstract ValueTuple<ExplainedNumber, bool> HasUpcomingTier(Clan clan, out TextObject extraExplanation, bool includeDescriptions = false)
```

### GetRequiredRenownForTier
```csharp
public abstract int GetRequiredRenownForTier(int tier)
```

### GetPartyLimitForTier
```csharp
public abstract int GetPartyLimitForTier(Clan clan, int clanTierToCheck)
```

### GetCompanionLimit
```csharp
public abstract int GetCompanionLimit(Clan clan)
```

## Usage Example

```csharp
// Typical usage of ClanTierModel (Model)
Game.Current.ReplaceModel<ClanTierModel>(new MyClanTierModel());
```

## See Also

- [Complete Class Catalog](../catalog)