<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CrimeModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CrimeModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CrimeModel : MBGameModel<CrimeModel>`
**Base:** `MBGameModel<CrimeModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CrimeModel.cs`

## Overview

`CrimeModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<CrimeModel>(new MyCrimeModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `DeclareWarCrimeRatingThreshold` | `public abstract float DeclareWarCrimeRatingThreshold { get; }` |

## Key Methods

### GetMaxCrimeRating
```csharp
public abstract float GetMaxCrimeRating()
```

### GetMinAcceptableCrimeRating
```csharp
public abstract float GetMinAcceptableCrimeRating(IFaction faction)
```

### GetCrimeRatingAfterPunishment
```csharp
public abstract float GetCrimeRatingAfterPunishment()
```

### DoesPlayerHaveAnyCrimeRating
```csharp
public abstract bool DoesPlayerHaveAnyCrimeRating(IFaction faction)
```

### IsPlayerCrimeRatingSevere
```csharp
public abstract bool IsPlayerCrimeRatingSevere(IFaction faction)
```

### IsPlayerCrimeRatingModerate
```csharp
public abstract bool IsPlayerCrimeRatingModerate(IFaction faction)
```

### IsPlayerCrimeRatingMild
```csharp
public abstract bool IsPlayerCrimeRatingMild(IFaction faction)
```

### GetCost
```csharp
public abstract float GetCost(IFaction faction, CrimeModel.PaymentMethod paymentMethod, float minimumCrimeRating)
```

### GetDailyCrimeRatingChange
```csharp
public abstract ExplainedNumber GetDailyCrimeRatingChange(IFaction faction, bool includeDescriptions = false)
```

## Usage Example

```csharp
// Typical usage of CrimeModel (Model)
Game.Current.ReplaceModel<CrimeModel>(new MyCrimeModel());
```

## See Also

- [Complete Class Catalog](../catalog)