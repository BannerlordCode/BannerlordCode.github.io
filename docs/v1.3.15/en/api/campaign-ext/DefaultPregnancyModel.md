<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultPregnancyModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultPregnancyModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPregnancyModel : PregnancyModel`
**Base:** `PregnancyModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPregnancyModel.cs`

## Overview

`DefaultPregnancyModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultPregnancyModel>(new MyDefaultPregnancyModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `PregnancyDurationInDays` | `public override float PregnancyDurationInDays { get; }` |
| `MaternalMortalityProbabilityInLabor` | `public override float MaternalMortalityProbabilityInLabor { get; }` |
| `StillbirthProbability` | `public override float StillbirthProbability { get; }` |
| `DeliveringFemaleOffspringProbability` | `public override float DeliveringFemaleOffspringProbability { get; }` |
| `DeliveringTwinsProbability` | `public override float DeliveringTwinsProbability { get; }` |

## Key Methods

### GetDailyChanceOfPregnancyForHero
```csharp
public override float GetDailyChanceOfPregnancyForHero(Hero hero)
```

## Usage Example

```csharp
// Typical usage of DefaultPregnancyModel (Model)
Game.Current.ReplaceModel<DefaultPregnancyModel>(new MyDefaultPregnancyModel());
```

## See Also

- [Complete Class Catalog](../catalog)