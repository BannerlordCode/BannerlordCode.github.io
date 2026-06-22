<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultCrimeModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultCrimeModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCrimeModel : CrimeModel`
**Base:** `CrimeModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCrimeModel.cs`

## Overview

`DefaultCrimeModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultCrimeModel>(new MyDefaultCrimeModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `DeclareWarCrimeRatingThreshold` | `public override float DeclareWarCrimeRatingThreshold { get; }` |

## Key Methods

### DoesPlayerHaveAnyCrimeRating
```csharp
public override bool DoesPlayerHaveAnyCrimeRating(IFaction faction)
```

### IsPlayerCrimeRatingSevere
```csharp
public override bool IsPlayerCrimeRatingSevere(IFaction faction)
```

### IsPlayerCrimeRatingModerate
```csharp
public override bool IsPlayerCrimeRatingModerate(IFaction faction)
```

### IsPlayerCrimeRatingMild
```csharp
public override bool IsPlayerCrimeRatingMild(IFaction faction)
```

### GetCost
```csharp
public override float GetCost(IFaction faction, CrimeModel.PaymentMethod paymentMethod, float minimumCrimeRating)
```

### GetDailyCrimeRatingChange
```csharp
public override ExplainedNumber GetDailyCrimeRatingChange(IFaction faction, bool includeDescriptions = false)
```

### GetMaxCrimeRating
```csharp
public override float GetMaxCrimeRating()
```

### GetMinAcceptableCrimeRating
```csharp
public override float GetMinAcceptableCrimeRating(IFaction faction)
```

### GetCrimeRatingAfterPunishment
```csharp
public override float GetCrimeRatingAfterPunishment()
```

## Usage Example

```csharp
// Typical usage of DefaultCrimeModel (Model)
Game.Current.ReplaceModel<DefaultCrimeModel>(new MyDefaultCrimeModel());
```

## See Also

- [Complete Class Catalog](../catalog)