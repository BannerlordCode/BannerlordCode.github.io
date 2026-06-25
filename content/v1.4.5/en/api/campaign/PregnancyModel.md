---
title: "PregnancyModel"
description: "Auto-generated class reference for PregnancyModel."
---
# PregnancyModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PregnancyModel : MBGameModel<PregnancyModel>`
**Base:** `MBGameModel<PregnancyModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PregnancyModel.cs`

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

**Purpose:** Reads and returns the daily chance of pregnancy for hero value held by the this instance.

```csharp
// Obtain an instance of PregnancyModel from the subsystem API first
PregnancyModel pregnancyModel = ...;
var result = pregnancyModel.GetDailyChanceOfPregnancyForHero(hero);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
PregnancyModel instance = ...;
```

## See Also

- [Area Index](../)