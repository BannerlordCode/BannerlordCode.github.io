---
title: "DefaultPregnancyModel"
description: "Auto-generated class reference for DefaultPregnancyModel."
---
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

**Purpose:** Reads and returns the daily chance of pregnancy for hero value held by the this instance.

```csharp
// Obtain an instance of DefaultPregnancyModel from the subsystem API first
DefaultPregnancyModel defaultPregnancyModel = ...;
var result = defaultPregnancyModel.GetDailyChanceOfPregnancyForHero(hero);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultPregnancyModel>(new MyDefaultPregnancyModel());
```

## See Also

- [Area Index](../)