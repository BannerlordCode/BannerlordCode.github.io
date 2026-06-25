---
title: "DefaultCaravanModel"
description: "Auto-generated class reference for DefaultCaravanModel."
---
# DefaultCaravanModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCaravanModel : CaravanModel`
**Base:** `CaravanModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultCaravanModel.cs`

## Overview

`DefaultCaravanModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultCaravanModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetEliteCaravanSpawnChance
`public override float GetEliteCaravanSpawnChance(Hero hero)`

**Purpose:** Reads and returns the elite caravan spawn chance value held by the this instance.

```csharp
// Obtain an instance of DefaultCaravanModel from the subsystem API first
DefaultCaravanModel defaultCaravanModel = ...;
var result = defaultCaravanModel.GetEliteCaravanSpawnChance(hero);
```

### GetPowerChangeAfterCaravanCreation
`public override int GetPowerChangeAfterCaravanCreation(Hero hero, MobileParty caravanParty)`

**Purpose:** Reads and returns the power change after caravan creation value held by the this instance.

```csharp
// Obtain an instance of DefaultCaravanModel from the subsystem API first
DefaultCaravanModel defaultCaravanModel = ...;
var result = defaultCaravanModel.GetPowerChangeAfterCaravanCreation(hero, caravanParty);
```

### CanHeroCreateCaravan
`public override bool CanHeroCreateCaravan(Hero hero)`

**Purpose:** Checks whether the this instance meets the preconditions for hero create caravan.

```csharp
// Obtain an instance of DefaultCaravanModel from the subsystem API first
DefaultCaravanModel defaultCaravanModel = ...;
var result = defaultCaravanModel.CanHeroCreateCaravan(hero);
```

### GetCaravanFormingCost
`public override int GetCaravanFormingCost(bool largerCaravan, bool navalCaravan)`

**Purpose:** Reads and returns the caravan forming cost value held by the this instance.

```csharp
// Obtain an instance of DefaultCaravanModel from the subsystem API first
DefaultCaravanModel defaultCaravanModel = ...;
var result = defaultCaravanModel.GetCaravanFormingCost(false, false);
```

### GetInitialTradeGold
`public override int GetInitialTradeGold(Hero owner, bool navalCaravan, bool largeCaravan)`

**Purpose:** Reads and returns the initial trade gold value held by the this instance.

```csharp
// Obtain an instance of DefaultCaravanModel from the subsystem API first
DefaultCaravanModel defaultCaravanModel = ...;
var result = defaultCaravanModel.GetInitialTradeGold(owner, false, false);
```

### GetMaxGoldToSpendOnOneItemCategory
`public override int GetMaxGoldToSpendOnOneItemCategory(MobileParty caravan, ItemCategory itemCategory)`

**Purpose:** Reads and returns the max gold to spend on one item category value held by the this instance.

```csharp
// Obtain an instance of DefaultCaravanModel from the subsystem API first
DefaultCaravanModel defaultCaravanModel = ...;
var result = defaultCaravanModel.GetMaxGoldToSpendOnOneItemCategory(caravan, itemCategory);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultCaravanModel>(new MyDefaultCaravanModel());
```

## See Also

- [Area Index](../)