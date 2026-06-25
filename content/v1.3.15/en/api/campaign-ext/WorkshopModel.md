---
title: "WorkshopModel"
description: "Auto-generated class reference for WorkshopModel."
---
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

**Purpose:** Reads and returns the `max workshop count for clan tier` value held by the current object.

```csharp
// Obtain an instance of WorkshopModel from the subsystem API first
WorkshopModel workshopModel = ...;
var result = workshopModel.GetMaxWorkshopCountForClanTier(0);
```

### GetCostForPlayer
`public abstract int GetCostForPlayer(Workshop workshop)`

**Purpose:** Reads and returns the `cost for player` value held by the current object.

```csharp
// Obtain an instance of WorkshopModel from the subsystem API first
WorkshopModel workshopModel = ...;
var result = workshopModel.GetCostForPlayer(workshop);
```

### GetCostForNotable
`public abstract int GetCostForNotable(Workshop workshop)`

**Purpose:** Reads and returns the `cost for notable` value held by the current object.

```csharp
// Obtain an instance of WorkshopModel from the subsystem API first
WorkshopModel workshopModel = ...;
var result = workshopModel.GetCostForNotable(workshop);
```

### GetNotableOwnerForWorkshop
`public abstract Hero GetNotableOwnerForWorkshop(Workshop workshop)`

**Purpose:** Reads and returns the `notable owner for workshop` value held by the current object.

```csharp
// Obtain an instance of WorkshopModel from the subsystem API first
WorkshopModel workshopModel = ...;
var result = workshopModel.GetNotableOwnerForWorkshop(workshop);
```

### GetEffectiveConversionSpeedOfProduction
`public abstract ExplainedNumber GetEffectiveConversionSpeedOfProduction(Workshop workshop, float speed, bool includeDescriptions)`

**Purpose:** Reads and returns the `effective conversion speed of production` value held by the current object.

```csharp
// Obtain an instance of WorkshopModel from the subsystem API first
WorkshopModel workshopModel = ...;
var result = workshopModel.GetEffectiveConversionSpeedOfProduction(workshop, 0, false);
```

### GetConvertProductionCost
`public abstract int GetConvertProductionCost(WorkshopType workshopType)`

**Purpose:** Reads and returns the `convert production cost` value held by the current object.

```csharp
// Obtain an instance of WorkshopModel from the subsystem API first
WorkshopModel workshopModel = ...;
var result = workshopModel.GetConvertProductionCost(workshopType);
```

### CanPlayerSellWorkshop
`public abstract bool CanPlayerSellWorkshop(Workshop workshop, out TextObject explanation)`

**Purpose:** Checks whether the current object meets the preconditions for `player sell workshop`.

```csharp
// Obtain an instance of WorkshopModel from the subsystem API first
WorkshopModel workshopModel = ...;
var result = workshopModel.CanPlayerSellWorkshop(workshop, explanation);
```

### GetTradeXpPerWarehouseProduction
`public abstract float GetTradeXpPerWarehouseProduction(EquipmentElement production)`

**Purpose:** Reads and returns the `trade xp per warehouse production` value held by the current object.

```csharp
// Obtain an instance of WorkshopModel from the subsystem API first
WorkshopModel workshopModel = ...;
var result = workshopModel.GetTradeXpPerWarehouseProduction(production);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
WorkshopModel instance = ...;
```

## See Also

- [Area Index](../)