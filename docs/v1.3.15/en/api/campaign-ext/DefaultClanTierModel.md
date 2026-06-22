<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultClanTierModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultClanTierModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultClanTierModel : ClanTierModel`
**Base:** `ClanTierModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultClanTierModel.cs`

## Overview

`DefaultClanTierModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultClanTierModel>(new MyDefaultClanTierModel())` to change how it computes.

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
```csharp
public override int CalculateInitialRenown(Clan clan)
```

### CalculateInitialInfluence
```csharp
public override int CalculateInitialInfluence(Clan clan)
```

### CalculateTier
```csharp
public override int CalculateTier(Clan clan)
```

### HasUpcomingTier
```csharp
public override ValueTuple<ExplainedNumber, bool> HasUpcomingTier(Clan clan, out TextObject extraExplanation, bool includeDescriptions = false)
```

### GetRequiredRenownForTier
```csharp
public override int GetRequiredRenownForTier(int tier)
```

### GetPartyLimitForTier
```csharp
public override int GetPartyLimitForTier(Clan clan, int clanTierToCheck)
```

### GetCompanionLimit
```csharp
public override int GetCompanionLimit(Clan clan)
```

## Usage Example

```csharp
// Typical usage of DefaultClanTierModel (Model)
Game.Current.ReplaceModel<DefaultClanTierModel>(new MyDefaultClanTierModel());
```

## See Also

- [Complete Class Catalog](../catalog)