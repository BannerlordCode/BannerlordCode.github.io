---
title: "DefaultNotablePowerModel"
description: "Auto-generated class reference for DefaultNotablePowerModel."
---
# DefaultNotablePowerModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultNotablePowerModel : NotablePowerModel`
**Base:** `NotablePowerModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultNotablePowerModel.cs`

## Overview

`DefaultNotablePowerModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultNotablePowerModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `NotableDisappearPowerLimit` | `public override int NotableDisappearPowerLimit { get; }` |
| `RegularNotableMaxPowerLevel` | `public override int RegularNotableMaxPowerLevel { get; }` |

## Key Methods

### CalculateDailyPowerChangeForHero
`public override ExplainedNumber CalculateDailyPowerChangeForHero(Hero hero, bool includeDescriptions = false)`

**Purpose:** Calculates the current value or result of `daily power change for hero`.

```csharp
// Obtain an instance of DefaultNotablePowerModel from the subsystem API first
DefaultNotablePowerModel defaultNotablePowerModel = ...;
var result = defaultNotablePowerModel.CalculateDailyPowerChangeForHero(hero, false);
```

### GetPowerRankName
`public override TextObject GetPowerRankName(Hero hero)`

**Purpose:** Reads and returns the `power rank name` value held by the current object.

```csharp
// Obtain an instance of DefaultNotablePowerModel from the subsystem API first
DefaultNotablePowerModel defaultNotablePowerModel = ...;
var result = defaultNotablePowerModel.GetPowerRankName(hero);
```

### GetInfluenceBonusToClan
`public override float GetInfluenceBonusToClan(Hero hero)`

**Purpose:** Reads and returns the `influence bonus to clan` value held by the current object.

```csharp
// Obtain an instance of DefaultNotablePowerModel from the subsystem API first
DefaultNotablePowerModel defaultNotablePowerModel = ...;
var result = defaultNotablePowerModel.GetInfluenceBonusToClan(hero);
```

### GetInitialPower
`public override int GetInitialPower(Hero hero)`

**Purpose:** Reads and returns the `initial power` value held by the current object.

```csharp
// Obtain an instance of DefaultNotablePowerModel from the subsystem API first
DefaultNotablePowerModel defaultNotablePowerModel = ...;
var result = defaultNotablePowerModel.GetInitialPower(hero);
```

### GetInitialNotableSupporterCost
`public override int GetInitialNotableSupporterCost(Hero hero)`

**Purpose:** Reads and returns the `initial notable supporter cost` value held by the current object.

```csharp
// Obtain an instance of DefaultNotablePowerModel from the subsystem API first
DefaultNotablePowerModel defaultNotablePowerModel = ...;
var result = defaultNotablePowerModel.GetInitialNotableSupporterCost(hero);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultNotablePowerModel>(new MyDefaultNotablePowerModel());
```

## See Also

- [Area Index](../)