---
title: "NotablePowerModel"
description: "Auto-generated class reference for NotablePowerModel."
---
# NotablePowerModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class NotablePowerModel : MBGameModel<NotablePowerModel>`
**Base:** `MBGameModel<NotablePowerModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/NotablePowerModel.cs`

## Overview

`NotablePowerModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `NotablePowerModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `RegularNotableMaxPowerLevel` | `public abstract int RegularNotableMaxPowerLevel { get; }` |
| `NotableDisappearPowerLimit` | `public abstract int NotableDisappearPowerLimit { get; }` |

## Key Methods

### CalculateDailyPowerChangeForHero
`public abstract ExplainedNumber CalculateDailyPowerChangeForHero(Hero hero, bool includeDescriptions = false)`

**Purpose:** Calculates the current value or result of daily power change for hero.

```csharp
// Obtain an instance of NotablePowerModel from the subsystem API first
NotablePowerModel notablePowerModel = ...;
var result = notablePowerModel.CalculateDailyPowerChangeForHero(hero, false);
```

### GetPowerRankName
`public abstract TextObject GetPowerRankName(Hero hero)`

**Purpose:** Reads and returns the power rank name value held by the this instance.

```csharp
// Obtain an instance of NotablePowerModel from the subsystem API first
NotablePowerModel notablePowerModel = ...;
var result = notablePowerModel.GetPowerRankName(hero);
```

### GetInfluenceBonusToClan
`public abstract float GetInfluenceBonusToClan(Hero hero)`

**Purpose:** Reads and returns the influence bonus to clan value held by the this instance.

```csharp
// Obtain an instance of NotablePowerModel from the subsystem API first
NotablePowerModel notablePowerModel = ...;
var result = notablePowerModel.GetInfluenceBonusToClan(hero);
```

### GetInitialPower
`public abstract int GetInitialPower(Hero hero)`

**Purpose:** Reads and returns the initial power value held by the this instance.

```csharp
// Obtain an instance of NotablePowerModel from the subsystem API first
NotablePowerModel notablePowerModel = ...;
var result = notablePowerModel.GetInitialPower(hero);
```

### GetInitialNotableSupporterCost
`public abstract int GetInitialNotableSupporterCost(Hero hero)`

**Purpose:** Reads and returns the initial notable supporter cost value held by the this instance.

```csharp
// Obtain an instance of NotablePowerModel from the subsystem API first
NotablePowerModel notablePowerModel = ...;
var result = notablePowerModel.GetInitialNotableSupporterCost(hero);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
NotablePowerModel instance = ...;
```

## See Also

- [Area Index](../)