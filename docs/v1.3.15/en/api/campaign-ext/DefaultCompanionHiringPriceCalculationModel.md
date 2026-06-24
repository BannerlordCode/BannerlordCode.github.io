<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultCompanionHiringPriceCalculationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultCompanionHiringPriceCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCompanionHiringPriceCalculationModel : CompanionHiringPriceCalculationModel`
**Base:** `CompanionHiringPriceCalculationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCompanionHiringPriceCalculationModel.cs`

## Overview

`DefaultCompanionHiringPriceCalculationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultCompanionHiringPriceCalculationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetCompanionHiringPrice
`public override int GetCompanionHiringPrice(Hero companion)`

**Purpose:** Gets the current value of `companion hiring price`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultCompanionHiringPriceCalculationModel>(new MyDefaultCompanionHiringPriceCalculationModel());
```

## See Also

- [Complete Class Catalog](../catalog)