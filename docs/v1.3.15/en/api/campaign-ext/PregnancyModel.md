<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PregnancyModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PregnancyModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PregnancyModel : MBGameModel<PregnancyModel>`
**Base:** `MBGameModel<PregnancyModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PregnancyModel.cs`

## Overview

`PregnancyModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<PregnancyModel>(new MyPregnancyModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `PregnancyDurationInDays` | `public abstract float PregnancyDurationInDays { get; }` |
| `MaternalMortalityProbabilityInLabor` | `public abstract float MaternalMortalityProbabilityInLabor { get; }` |
| `StillbirthProbability` | `public abstract float StillbirthProbability { get; }` |
| `DeliveringFemaleOffspringProbability` | `public abstract float DeliveringFemaleOffspringProbability { get; }` |
| `DeliveringTwinsProbability` | `public abstract float DeliveringTwinsProbability { get; }` |

## Key Methods

### GetDailyChanceOfPregnancyForHero
```csharp
public abstract float GetDailyChanceOfPregnancyForHero(Hero hero)
```

## Usage Example

```csharp
// Typical usage of PregnancyModel (Model)
Game.Current.ReplaceModel<PregnancyModel>(new MyPregnancyModel());
```

## See Also

- [Complete Class Catalog](../catalog)