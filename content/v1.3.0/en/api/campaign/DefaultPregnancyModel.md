---
title: "DefaultPregnancyModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultPregnancyModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultPregnancyModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPregnancyModel : PregnancyModel`
**Base:** `PregnancyModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPregnancyModel.cs`

## Overview

`DefaultPregnancyModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultPregnancyModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
`public override float GetDailyChanceOfPregnancyForHero(Hero hero)`

**Purpose:** Gets the current value of `daily chance of pregnancy for hero`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultPregnancyModel>(new MyDefaultPregnancyModel());
```

## See Also

- [Complete Class Catalog](../catalog)