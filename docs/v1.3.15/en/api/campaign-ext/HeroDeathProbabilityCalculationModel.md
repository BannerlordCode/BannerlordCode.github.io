<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HeroDeathProbabilityCalculationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HeroDeathProbabilityCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class HeroDeathProbabilityCalculationModel : MBGameModel<HeroDeathProbabilityCalculationModel>`
**Base:** `MBGameModel<HeroDeathProbabilityCalculationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/HeroDeathProbabilityCalculationModel.cs`

## Overview

`HeroDeathProbabilityCalculationModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<HeroDeathProbabilityCalculationModel>(new MyHeroDeathProbabilityCalculationModel())` to change how it computes.

## Key Methods

### CalculateHeroDeathProbability
```csharp
public abstract float CalculateHeroDeathProbability(Hero hero)
```

## Usage Example

```csharp
// Typical usage of HeroDeathProbabilityCalculationModel (Model)
Game.Current.ReplaceModel<HeroDeathProbabilityCalculationModel>(new MyHeroDeathProbabilityCalculationModel());
```

## See Also

- [Complete Class Catalog](../catalog)