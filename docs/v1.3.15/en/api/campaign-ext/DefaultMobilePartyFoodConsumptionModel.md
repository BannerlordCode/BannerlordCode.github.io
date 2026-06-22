<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultMobilePartyFoodConsumptionModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultMobilePartyFoodConsumptionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMobilePartyFoodConsumptionModel : MobilePartyFoodConsumptionModel`
**Base:** `MobilePartyFoodConsumptionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMobilePartyFoodConsumptionModel.cs`

## Overview

`DefaultMobilePartyFoodConsumptionModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultMobilePartyFoodConsumptionModel>(new MyDefaultMobilePartyFoodConsumptionModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `NumberOfMenOnMapToEatOneFood` | `public override int NumberOfMenOnMapToEatOneFood { get; }` |

## Key Methods

### CalculateDailyBaseFoodConsumptionf
```csharp
public override ExplainedNumber CalculateDailyBaseFoodConsumptionf(MobileParty party, bool includeDescription = false)
```

### CalculateDailyFoodConsumptionf
```csharp
public override ExplainedNumber CalculateDailyFoodConsumptionf(MobileParty party, ExplainedNumber baseConsumption)
```

### DoesPartyConsumeFood
```csharp
public override bool DoesPartyConsumeFood(MobileParty mobileParty)
```

## Usage Example

```csharp
// Typical usage of DefaultMobilePartyFoodConsumptionModel (Model)
Game.Current.ReplaceModel<DefaultMobilePartyFoodConsumptionModel>(new MyDefaultMobilePartyFoodConsumptionModel());
```

## See Also

- [Complete Class Catalog](../catalog)