<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultCompanionHiringPriceCalculationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultCompanionHiringPriceCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCompanionHiringPriceCalculationModel : CompanionHiringPriceCalculationModel`
**Base:** `CompanionHiringPriceCalculationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCompanionHiringPriceCalculationModel.cs`

## Overview

`DefaultCompanionHiringPriceCalculationModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultCompanionHiringPriceCalculationModel>(new MyDefaultCompanionHiringPriceCalculationModel())` to change how it computes.

## Key Methods

### GetCompanionHiringPrice
```csharp
public override int GetCompanionHiringPrice(Hero companion)
```

## Usage Example

```csharp
// Typical usage of DefaultCompanionHiringPriceCalculationModel (Model)
Game.Current.ReplaceModel<DefaultCompanionHiringPriceCalculationModel>(new MyDefaultCompanionHiringPriceCalculationModel());
```

## See Also

- [Complete Class Catalog](../catalog)