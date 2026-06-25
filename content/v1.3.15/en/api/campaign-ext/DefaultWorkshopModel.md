---
title: "DefaultWorkshopModel"
description: "Auto-generated class reference for DefaultWorkshopModel."
---
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

**Purpose:** Reads and returns the `effective conversion speed of production` value held by the current object.

```csharp
// Obtain an instance of DefaultWorkshopModel from the subsystem API first
DefaultWorkshopModel defaultWorkshopModel = ...;
var result = defaultWorkshopModel.GetEffectiveConversionSpeedOfProduction(workshop, 0, false);
```

### GetMaxWorkshopCountForClanTier
`public override int GetMaxWorkshopCountForClanTier(int tier)`

**Purpose:** Reads and returns the `max workshop count for clan tier` value held by the current object.

```csharp
// Obtain an instance of DefaultWorkshopModel from the subsystem API first
DefaultWorkshopModel defaultWorkshopModel = ...;
var result = defaultWorkshopModel.GetMaxWorkshopCountForClanTier(0);
```

### GetCostForPlayer
`public override int GetCostForPlayer(Workshop workshop)`

**Purpose:** Reads and returns the `cost for player` value held by the current object.

```csharp
// Obtain an instance of DefaultWorkshopModel from the subsystem API first
DefaultWorkshopModel defaultWorkshopModel = ...;
var result = defaultWorkshopModel.GetCostForPlayer(workshop);
```

### GetCostForNotable
`public override int GetCostForNotable(Workshop workshop)`

**Purpose:** Reads and returns the `cost for notable` value held by the current object.

```csharp
// Obtain an instance of DefaultWorkshopModel from the subsystem API first
DefaultWorkshopModel defaultWorkshopModel = ...;
var result = defaultWorkshopModel.GetCostForNotable(workshop);
```

### GetNotableOwnerForWorkshop
`public override Hero GetNotableOwnerForWorkshop(Workshop workshop)`

**Purpose:** Reads and returns the `notable owner for workshop` value held by the current object.

```csharp
// Obtain an instance of DefaultWorkshopModel from the subsystem API first
DefaultWorkshopModel defaultWorkshopModel = ...;
var result = defaultWorkshopModel.GetNotableOwnerForWorkshop(workshop);
```

### GetConvertProductionCost
`public override int GetConvertProductionCost(WorkshopType workshopType)`

**Purpose:** Reads and returns the `convert production cost` value held by the current object.

```csharp
// Obtain an instance of DefaultWorkshopModel from the subsystem API first
DefaultWorkshopModel defaultWorkshopModel = ...;
var result = defaultWorkshopModel.GetConvertProductionCost(workshopType);
```

### CanPlayerSellWorkshop
`public override bool CanPlayerSellWorkshop(Workshop workshop, out TextObject explanation)`

**Purpose:** Checks whether the current object meets the preconditions for `player sell workshop`.

```csharp
// Obtain an instance of DefaultWorkshopModel from the subsystem API first
DefaultWorkshopModel defaultWorkshopModel = ...;
var result = defaultWorkshopModel.CanPlayerSellWorkshop(workshop, explanation);
```

### GetTradeXpPerWarehouseProduction
`public override float GetTradeXpPerWarehouseProduction(EquipmentElement production)`

**Purpose:** Reads and returns the `trade xp per warehouse production` value held by the current object.

```csharp
// Obtain an instance of DefaultWorkshopModel from the subsystem API first
DefaultWorkshopModel defaultWorkshopModel = ...;
var result = defaultWorkshopModel.GetTradeXpPerWarehouseProduction(production);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultWorkshopModel>(new MyDefaultWorkshopModel());
```

## See Also

- [Area Index](../)