<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultWorkshopModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultWorkshopModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultWorkshopModel : WorkshopModel`
**Base:** `WorkshopModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultWorkshopModel.cs`

## Overview

`DefaultWorkshopModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultWorkshopModel>(new MyDefaultWorkshopModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `WarehouseCapacity` | `public override int WarehouseCapacity { get; }` |
| `DaysForPlayerSaveWorkshopFromBankruptcy` | `public override int DaysForPlayerSaveWorkshopFromBankruptcy { get; }` |
| `CapitalLowLimit` | `public override int CapitalLowLimit { get; }` |
| `InitialCapital` | `public override int InitialCapital { get; }` |
| `DailyExpense` | `public override int DailyExpense { get; }` |
| `DefaultWorkshopCountInSettlement` | `public override int DefaultWorkshopCountInSettlement { get; }` |
| `MaximumWorkshopsPlayerCanHave` | `public override int MaximumWorkshopsPlayerCanHave { get; }` |

## Key Methods

### GetEffectiveConversionSpeedOfProduction
```csharp
public override ExplainedNumber GetEffectiveConversionSpeedOfProduction(Workshop workshop, float speed, bool includeDescription)
```

### GetMaxWorkshopCountForClanTier
```csharp
public override int GetMaxWorkshopCountForClanTier(int tier)
```

### GetCostForPlayer
```csharp
public override int GetCostForPlayer(Workshop workshop)
```

### GetCostForNotable
```csharp
public override int GetCostForNotable(Workshop workshop)
```

### GetNotableOwnerForWorkshop
```csharp
public override Hero GetNotableOwnerForWorkshop(Workshop workshop)
```

### GetConvertProductionCost
```csharp
public override int GetConvertProductionCost(WorkshopType workshopType)
```

### CanPlayerSellWorkshop
```csharp
public override bool CanPlayerSellWorkshop(Workshop workshop, out TextObject explanation)
```

### GetTradeXpPerWarehouseProduction
```csharp
public override float GetTradeXpPerWarehouseProduction(EquipmentElement production)
```

## Usage Example

```csharp
// Typical usage of DefaultWorkshopModel (Model)
Game.Current.ReplaceModel<DefaultWorkshopModel>(new MyDefaultWorkshopModel());
```

## See Also

- [Complete Class Catalog](../catalog)