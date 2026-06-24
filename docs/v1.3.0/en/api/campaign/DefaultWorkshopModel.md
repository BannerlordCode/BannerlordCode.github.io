<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultWorkshopModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultWorkshopModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultWorkshopModel : WorkshopModel`
**Base:** `WorkshopModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultWorkshopModel.cs`

## Overview

`DefaultWorkshopModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultWorkshopModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
`public override ExplainedNumber GetEffectiveConversionSpeedOfProduction(Workshop workshop, float speed, bool includeDescription)`

**Purpose:** Gets the current value of `effective conversion speed of production`.

### GetMaxWorkshopCountForClanTier
`public override int GetMaxWorkshopCountForClanTier(int tier)`

**Purpose:** Gets the current value of `max workshop count for clan tier`.

### GetCostForPlayer
`public override int GetCostForPlayer(Workshop workshop)`

**Purpose:** Gets the current value of `cost for player`.

### GetCostForNotable
`public override int GetCostForNotable(Workshop workshop)`

**Purpose:** Gets the current value of `cost for notable`.

### GetNotableOwnerForWorkshop
`public override Hero GetNotableOwnerForWorkshop(Workshop workshop)`

**Purpose:** Gets the current value of `notable owner for workshop`.

### GetConvertProductionCost
`public override int GetConvertProductionCost(WorkshopType workshopType)`

**Purpose:** Gets the current value of `convert production cost`.

### CanPlayerSellWorkshop
`public override bool CanPlayerSellWorkshop(Workshop workshop, out TextObject explanation)`

**Purpose:** Checks whether the current object can `player sell workshop`.

### GetTradeXpPerWarehouseProduction
`public override float GetTradeXpPerWarehouseProduction(EquipmentElement production)`

**Purpose:** Gets the current value of `trade xp per warehouse production`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultWorkshopModel>(new MyDefaultWorkshopModel());
```

## See Also

- [Complete Class Catalog](../catalog)