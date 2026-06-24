<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CompanionHiringPriceCalculationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CompanionHiringPriceCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CompanionHiringPriceCalculationModel : MBGameModel<CompanionHiringPriceCalculationModel>`
**Base:** `MBGameModel<CompanionHiringPriceCalculationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CompanionHiringPriceCalculationModel.cs`

## Overview

`CompanionHiringPriceCalculationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `CompanionHiringPriceCalculationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetCompanionHiringPrice
`public abstract int GetCompanionHiringPrice(Hero companion)`

**Purpose:** Gets the current value of `companion hiring price`.

## Usage Example

```csharp
var implementation = new CustomCompanionHiringPriceCalculationModel();
```

## See Also

- [Complete Class Catalog](../catalog)