<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultVillageProductionCalculatorModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultVillageProductionCalculatorModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultVillageProductionCalculatorModel : VillageProductionCalculatorModel`
**Base:** `VillageProductionCalculatorModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultVillageProductionCalculatorModel.cs`

## Overview

`DefaultVillageProductionCalculatorModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultVillageProductionCalculatorModel>(new MyDefaultVillageProductionCalculatorModel())` to change how it computes.

## Key Methods

### CalculateDailyProductionAmount
```csharp
public override ExplainedNumber CalculateDailyProductionAmount(Village village, ItemObject item)
```

### CalculateDailyFoodProductionAmount
```csharp
public override float CalculateDailyFoodProductionAmount(Village village)
```

### CalculateProductionSpeedOfItemCategory
```csharp
public override float CalculateProductionSpeedOfItemCategory(ItemCategory item)
```

## Usage Example

```csharp
// Typical usage of DefaultVillageProductionCalculatorModel (Model)
Game.Current.ReplaceModel<DefaultVillageProductionCalculatorModel>(new MyDefaultVillageProductionCalculatorModel());
```

## See Also

- [Complete Class Catalog](../catalog)