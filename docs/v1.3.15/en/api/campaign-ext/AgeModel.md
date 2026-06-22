<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AgeModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgeModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class AgeModel : MBGameModel<AgeModel>`
**Base:** `MBGameModel<AgeModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/AgeModel.cs`

## Overview

`AgeModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<AgeModel>(new MyAgeModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `BecomeInfantAge` | `public abstract int BecomeInfantAge { get; }` |
| `BecomeChildAge` | `public abstract int BecomeChildAge { get; }` |
| `BecomeTeenagerAge` | `public abstract int BecomeTeenagerAge { get; }` |
| `HeroComesOfAge` | `public abstract int HeroComesOfAge { get; }` |
| `BecomeOldAge` | `public abstract int BecomeOldAge { get; }` |
| `MiddleAdultHoodAge` | `public abstract int MiddleAdultHoodAge { get; }` |
| `MaxAge` | `public abstract int MaxAge { get; }` |

## Key Methods

### GetAgeLimitForLocation
```csharp
public abstract void GetAgeLimitForLocation(CharacterObject character, out int minimumAge, out int maximumAge, string additionalTags = "")
```

## Usage Example

```csharp
// Typical usage of AgeModel (Model)
Game.Current.ReplaceModel<AgeModel>(new MyAgeModel());
```

## See Also

- [Complete Class Catalog](../catalog)