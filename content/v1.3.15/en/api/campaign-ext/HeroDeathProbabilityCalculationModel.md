---
title: "HeroDeathProbabilityCalculationModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HeroDeathProbabilityCalculationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `calculate hero death probability`.

## Usage Example

```csharp
var implementation = new CustomHeroDeathProbabilityCalculationModel();
```

## See Also

- [Complete Class Catalog](../catalog)