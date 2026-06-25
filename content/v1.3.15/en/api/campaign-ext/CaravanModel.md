---
title: "CaravanModel"
description: "Auto-generated class reference for CaravanModel."
---
# CaravanModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CaravanModel : MBGameModel<CaravanModel>`
**Base:** `MBGameModel<CaravanModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CaravanModel.cs`

## Overview

`CaravanModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `CaravanModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxNumberOfItemsToBuyFromSingleCategory` | `public abstract int MaxNumberOfItemsToBuyFromSingleCategory { get; }` |

## Key Methods

### GetMaxGoldToSpendOnOneItemCategory
`public abstract int GetMaxGoldToSpendOnOneItemCategory(MobileParty caravan, ItemCategory itemCategory)`

**Purpose:** **Purpose:** Reads and returns the max gold to spend on one item category value held by the this instance.

```csharp
// Obtain an instance of CaravanModel from the subsystem API first
CaravanModel caravanModel = ...;
var result = caravanModel.GetMaxGoldToSpendOnOneItemCategory(caravan, itemCategory);
```

### GetInitialTradeGold
`public abstract int GetInitialTradeGold(Hero owner, bool isNavalCaravan, bool eliteCaravan)`

**Purpose:** **Purpose:** Reads and returns the initial trade gold value held by the this instance.

```csharp
// Obtain an instance of CaravanModel from the subsystem API first
CaravanModel caravanModel = ...;
var result = caravanModel.GetInitialTradeGold(owner, false, false);
```

### GetCaravanFormingCost
`public abstract int GetCaravanFormingCost(bool eliteCaravan, bool navalCaravan)`

**Purpose:** **Purpose:** Reads and returns the caravan forming cost value held by the this instance.

```csharp
// Obtain an instance of CaravanModel from the subsystem API first
CaravanModel caravanModel = ...;
var result = caravanModel.GetCaravanFormingCost(false, false);
```

### GetPowerChangeAfterCaravanCreation
`public abstract int GetPowerChangeAfterCaravanCreation(Hero hero, MobileParty caravanParty)`

**Purpose:** **Purpose:** Reads and returns the power change after caravan creation value held by the this instance.

```csharp
// Obtain an instance of CaravanModel from the subsystem API first
CaravanModel caravanModel = ...;
var result = caravanModel.GetPowerChangeAfterCaravanCreation(hero, caravanParty);
```

### CanHeroCreateCaravan
`public abstract bool CanHeroCreateCaravan(Hero hero)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for hero create caravan.

```csharp
// Obtain an instance of CaravanModel from the subsystem API first
CaravanModel caravanModel = ...;
var result = caravanModel.CanHeroCreateCaravan(hero);
```

### GetEliteCaravanSpawnChance
`public abstract float GetEliteCaravanSpawnChance(Hero hero)`

**Purpose:** **Purpose:** Reads and returns the elite caravan spawn chance value held by the this instance.

```csharp
// Obtain an instance of CaravanModel from the subsystem API first
CaravanModel caravanModel = ...;
var result = caravanModel.GetEliteCaravanSpawnChance(hero);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
CaravanModel instance = ...;
```

## See Also

- [Area Index](../)