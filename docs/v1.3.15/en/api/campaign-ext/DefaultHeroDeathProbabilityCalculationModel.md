<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultHeroDeathProbabilityCalculationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultHeroDeathProbabilityCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultHeroDeathProbabilityCalculationModel : HeroDeathProbabilityCalculationModel`
**Base:** `HeroDeathProbabilityCalculationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultHeroDeathProbabilityCalculationModel.cs`

## Overview

`DefaultHeroDeathProbabilityCalculationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultHeroDeathProbabilityCalculationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateHeroDeathProbability
`public override float CalculateHeroDeathProbability(Hero hero)`

**Purpose:** Handles logic related to `calculate hero death probability`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultHeroDeathProbabilityCalculationModel>(new MyDefaultHeroDeathProbabilityCalculationModel());
```

## See Also

- [Complete Class Catalog](../catalog)