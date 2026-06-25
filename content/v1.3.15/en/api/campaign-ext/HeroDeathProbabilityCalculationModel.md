---
title: "HeroDeathProbabilityCalculationModel"
description: "Auto-generated class reference for HeroDeathProbabilityCalculationModel."
---
# HeroDeathProbabilityCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class HeroDeathProbabilityCalculationModel : MBGameModel<HeroDeathProbabilityCalculationModel>`
**Base:** `MBGameModel<HeroDeathProbabilityCalculationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/HeroDeathProbabilityCalculationModel.cs`

## Overview

`HeroDeathProbabilityCalculationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `HeroDeathProbabilityCalculationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateHeroDeathProbability
`public abstract float CalculateHeroDeathProbability(Hero hero)`

**Purpose:** **Purpose:** Calculates the current value or result of hero death probability.

```csharp
// Obtain an instance of HeroDeathProbabilityCalculationModel from the subsystem API first
HeroDeathProbabilityCalculationModel heroDeathProbabilityCalculationModel = ...;
var result = heroDeathProbabilityCalculationModel.CalculateHeroDeathProbability(hero);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
HeroDeathProbabilityCalculationModel instance = ...;
```

## See Also

- [Area Index](../)