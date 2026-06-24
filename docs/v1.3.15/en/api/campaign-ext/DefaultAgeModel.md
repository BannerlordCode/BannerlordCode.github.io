<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultAgeModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultAgeModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultAgeModel : AgeModel`
**Base:** `AgeModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultAgeModel.cs`

## Overview

`DefaultAgeModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultAgeModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
`public override void GetAgeLimitForLocation(CharacterObject character, out int minimumAge, out int maximumAge, string additionalTags = "")`

**Purpose:** Gets the current value of `age limit for location`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultAgeModel>(new MyDefaultAgeModel());
```

## See Also

- [Complete Class Catalog](../catalog)