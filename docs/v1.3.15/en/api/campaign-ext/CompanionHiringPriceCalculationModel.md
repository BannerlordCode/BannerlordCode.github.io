<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CompanionHiringPriceCalculationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CompanionHiringPriceCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CompanionHiringPriceCalculationModel : MBGameModel<CompanionHiringPriceCalculationModel>`
**Base:** `MBGameModel<CompanionHiringPriceCalculationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CompanionHiringPriceCalculationModel.cs`

## Overview

`CompanionHiringPriceCalculationModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<CompanionHiringPriceCalculationModel>(new MyCompanionHiringPriceCalculationModel())` to change how it computes.

## Key Methods

### GetCompanionHiringPrice
```csharp
public abstract int GetCompanionHiringPrice(Hero companion)
```

## Usage Example

```csharp
// Typical usage of CompanionHiringPriceCalculationModel (Model)
Game.Current.ReplaceModel<CompanionHiringPriceCalculationModel>(new MyCompanionHiringPriceCalculationModel());
```

## See Also

- [Complete Class Catalog](../catalog)