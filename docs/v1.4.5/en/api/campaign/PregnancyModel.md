<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PregnancyModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PregnancyModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PregnancyModel : MBGameModel<PregnancyModel>`
**Base:** `MBGameModel<PregnancyModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PregnancyModel.cs`

## Overview

`PregnancyModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `PregnancyModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
`public abstract float GetDailyChanceOfPregnancyForHero(Hero hero)`

**Purpose:** Gets the current value of `daily chance of pregnancy for hero`.

## Usage Example

```csharp
var implementation = new CustomPregnancyModel();
```

## See Also

- [Complete Class Catalog](../catalog)