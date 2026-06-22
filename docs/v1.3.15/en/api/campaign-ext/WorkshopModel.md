<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WorkshopModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WorkshopModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class WorkshopModel : MBGameModel<WorkshopModel>`
**Base:** `MBGameModel<WorkshopModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/WorkshopModel.cs`

## Overview

`WorkshopModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<WorkshopModel>(new MyWorkshopModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `DaysForPlayerSaveWorkshopFromBankruptcy` | `public abstract int DaysForPlayerSaveWorkshopFromBankruptcy { get; }` |
| `CapitalLowLimit` | `public abstract int CapitalLowLimit { get; }` |
| `InitialCapital` | `public abstract int InitialCapital { get; }` |
| `DailyExpense` | `public abstract int DailyExpense { get; }` |
| `WarehouseCapacity` | `public abstract int WarehouseCapacity { get; }` |
| `DefaultWorkshopCountInSettlement` | `public abstract int DefaultWorkshopCountInSettlement { get; }` |
| `MaximumWorkshopsPlayerCanHave` | `public abstract int MaximumWorkshopsPlayerCanHave { get; }` |

## Key Methods

### GetMaxWorkshopCountForClanTier
```csharp
public abstract int GetMaxWorkshopCountForClanTier(int tier)
```

### GetCostForPlayer
```csharp
public abstract int GetCostForPlayer(Workshop workshop)
```

### GetCostForNotable
```csharp
public abstract int GetCostForNotable(Workshop workshop)
```

### GetNotableOwnerForWorkshop
```csharp
public abstract Hero GetNotableOwnerForWorkshop(Workshop workshop)
```

### GetEffectiveConversionSpeedOfProduction
```csharp
public abstract ExplainedNumber GetEffectiveConversionSpeedOfProduction(Workshop workshop, float speed, bool includeDescriptions)
```

### GetConvertProductionCost
```csharp
public abstract int GetConvertProductionCost(WorkshopType workshopType)
```

### CanPlayerSellWorkshop
```csharp
public abstract bool CanPlayerSellWorkshop(Workshop workshop, out TextObject explanation)
```

### GetTradeXpPerWarehouseProduction
```csharp
public abstract float GetTradeXpPerWarehouseProduction(EquipmentElement production)
```

## Usage Example

```csharp
// Typical usage of WorkshopModel (Model)
Game.Current.ReplaceModel<WorkshopModel>(new MyWorkshopModel());
```

## See Also

- [Complete Class Catalog](../catalog)