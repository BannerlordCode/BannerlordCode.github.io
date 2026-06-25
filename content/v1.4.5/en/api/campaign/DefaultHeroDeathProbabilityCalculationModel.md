---
title: "DefaultHeroDeathProbabilityCalculationModel"
description: "Auto-generated class reference for DefaultHeroDeathProbabilityCalculationModel."
---
# DefaultHeroDeathProbabilityCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultHeroDeathProbabilityCalculationModel : HeroDeathProbabilityCalculationModel`
**Base:** `HeroDeathProbabilityCalculationModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultHeroDeathProbabilityCalculationModel.cs`

## Overview

`DefaultHeroDeathProbabilityCalculationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultHeroDeathProbabilityCalculationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateHeroDeathProbability
`public override float CalculateHeroDeathProbability(Hero hero)`

**Purpose:** Calculates the current value or result of hero death probability.

```csharp
// Obtain an instance of DefaultHeroDeathProbabilityCalculationModel from the subsystem API first
DefaultHeroDeathProbabilityCalculationModel defaultHeroDeathProbabilityCalculationModel = ...;
var result = defaultHeroDeathProbabilityCalculationModel.CalculateHeroDeathProbability(hero);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultHeroDeathProbabilityCalculationModel>(new MyDefaultHeroDeathProbabilityCalculationModel());
```

## See Also

- [Area Index](../)