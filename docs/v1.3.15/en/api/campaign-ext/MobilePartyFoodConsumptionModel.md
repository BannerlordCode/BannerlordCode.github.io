<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MobilePartyFoodConsumptionModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MobilePartyFoodConsumptionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MobilePartyFoodConsumptionModel : MBGameModel<MobilePartyFoodConsumptionModel>`
**Base:** `MBGameModel<MobilePartyFoodConsumptionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MobilePartyFoodConsumptionModel.cs`

## Overview

`MobilePartyFoodConsumptionModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<MobilePartyFoodConsumptionModel>(new MyMobilePartyFoodConsumptionModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `NumberOfMenOnMapToEatOneFood` | `public abstract int NumberOfMenOnMapToEatOneFood { get; }` |

## Key Methods

### CalculateDailyBaseFoodConsumptionf
```csharp
public abstract ExplainedNumber CalculateDailyBaseFoodConsumptionf(MobileParty party, bool includeDescription = false)
```

### CalculateDailyFoodConsumptionf
```csharp
public abstract ExplainedNumber CalculateDailyFoodConsumptionf(MobileParty party, ExplainedNumber baseConsumption)
```

### DoesPartyConsumeFood
```csharp
public abstract bool DoesPartyConsumeFood(MobileParty mobileParty)
```

## Usage Example

```csharp
// Typical usage of MobilePartyFoodConsumptionModel (Model)
Game.Current.ReplaceModel<MobilePartyFoodConsumptionModel>(new MyMobilePartyFoodConsumptionModel());
```

## See Also

- [Complete Class Catalog](../catalog)