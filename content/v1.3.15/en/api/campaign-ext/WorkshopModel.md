---
title: "WorkshopModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WorkshopModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WorkshopModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class WorkshopModel : MBGameModel<WorkshopModel>`
**Base:** `MBGameModel<WorkshopModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/WorkshopModel.cs`

## Overview

`WorkshopModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `WorkshopModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
`public abstract int GetMaxWorkshopCountForClanTier(int tier)`

**Purpose:** Gets the current value of `max workshop count for clan tier`.

### GetCostForPlayer
`public abstract int GetCostForPlayer(Workshop workshop)`

**Purpose:** Gets the current value of `cost for player`.

### GetCostForNotable
`public abstract int GetCostForNotable(Workshop workshop)`

**Purpose:** Gets the current value of `cost for notable`.

### GetNotableOwnerForWorkshop
`public abstract Hero GetNotableOwnerForWorkshop(Workshop workshop)`

**Purpose:** Gets the current value of `notable owner for workshop`.

### GetEffectiveConversionSpeedOfProduction
`public abstract ExplainedNumber GetEffectiveConversionSpeedOfProduction(Workshop workshop, float speed, bool includeDescriptions)`

**Purpose:** Gets the current value of `effective conversion speed of production`.

### GetConvertProductionCost
`public abstract int GetConvertProductionCost(WorkshopType workshopType)`

**Purpose:** Gets the current value of `convert production cost`.

### CanPlayerSellWorkshop
`public abstract bool CanPlayerSellWorkshop(Workshop workshop, out TextObject explanation)`

**Purpose:** Checks whether the current object can `player sell workshop`.

### GetTradeXpPerWarehouseProduction
`public abstract float GetTradeXpPerWarehouseProduction(EquipmentElement production)`

**Purpose:** Gets the current value of `trade xp per warehouse production`.

## Usage Example

```csharp
var implementation = new CustomWorkshopModel();
```

## See Also

- [Complete Class Catalog](../catalog)