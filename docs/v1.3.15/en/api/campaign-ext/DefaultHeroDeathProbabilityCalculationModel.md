<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultHeroDeathProbabilityCalculationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultHeroDeathProbabilityCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultHeroDeathProbabilityCalculationModel : HeroDeathProbabilityCalculationModel`
**Base:** `HeroDeathProbabilityCalculationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultHeroDeathProbabilityCalculationModel.cs`

## Overview

`DefaultHeroDeathProbabilityCalculationModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultHeroDeathProbabilityCalculationModel>(new MyDefaultHeroDeathProbabilityCalculationModel())` to change how it computes.

## Key Methods

### CalculateHeroDeathProbability
```csharp
public override float CalculateHeroDeathProbability(Hero hero)
```

## Usage Example

```csharp
// Typical usage of DefaultHeroDeathProbabilityCalculationModel (Model)
Game.Current.ReplaceModel<DefaultHeroDeathProbabilityCalculationModel>(new MyDefaultHeroDeathProbabilityCalculationModel());
```

## See Also

- [Complete Class Catalog](../catalog)