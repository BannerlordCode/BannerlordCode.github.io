<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VillageProductionCalculatorModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VillageProductionCalculatorModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class VillageProductionCalculatorModel : MBGameModel<VillageProductionCalculatorModel>`
**Base:** `MBGameModel<VillageProductionCalculatorModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/VillageProductionCalculatorModel.cs`

## Overview

`VillageProductionCalculatorModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<VillageProductionCalculatorModel>(new MyVillageProductionCalculatorModel())` to change how it computes.

## Key Methods

### CalculateProductionSpeedOfItemCategory
```csharp
public abstract float CalculateProductionSpeedOfItemCategory(ItemCategory item)
```

### CalculateDailyProductionAmount
```csharp
public abstract ExplainedNumber CalculateDailyProductionAmount(Village village, ItemObject item)
```

### CalculateDailyFoodProductionAmount
```csharp
public abstract float CalculateDailyFoodProductionAmount(Village village)
```

## Usage Example

```csharp
// Typical usage of VillageProductionCalculatorModel (Model)
Game.Current.ReplaceModel<VillageProductionCalculatorModel>(new MyVillageProductionCalculatorModel());
```

## See Also

- [Complete Class Catalog](../catalog)