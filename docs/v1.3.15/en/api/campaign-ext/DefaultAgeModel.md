<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultAgeModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultAgeModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultAgeModel : AgeModel`
**Base:** `AgeModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultAgeModel.cs`

## Overview

`DefaultAgeModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultAgeModel>(new MyDefaultAgeModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `BecomeInfantAge` | `public override int BecomeInfantAge { get; }` |
| `BecomeChildAge` | `public override int BecomeChildAge { get; }` |
| `BecomeTeenagerAge` | `public override int BecomeTeenagerAge { get; }` |
| `HeroComesOfAge` | `public override int HeroComesOfAge { get; }` |
| `MiddleAdultHoodAge` | `public override int MiddleAdultHoodAge { get; }` |
| `BecomeOldAge` | `public override int BecomeOldAge { get; }` |
| `MaxAge` | `public override int MaxAge { get; }` |

## Key Methods

### GetAgeLimitForLocation
```csharp
public override void GetAgeLimitForLocation(CharacterObject character, out int minimumAge, out int maximumAge, string additionalTags = "")
```

## Usage Example

```csharp
// Typical usage of DefaultAgeModel (Model)
Game.Current.ReplaceModel<DefaultAgeModel>(new MyDefaultAgeModel());
```

## See Also

- [Complete Class Catalog](../catalog)