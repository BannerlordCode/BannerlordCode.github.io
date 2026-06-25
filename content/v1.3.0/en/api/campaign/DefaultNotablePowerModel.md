---
title: "DefaultNotablePowerModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultNotablePowerModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `calculate daily power change for hero`.

### GetPowerRankName
`public override TextObject GetPowerRankName(Hero hero)`

**Purpose:** Gets the current value of `power rank name`.

### GetInfluenceBonusToClan
`public override float GetInfluenceBonusToClan(Hero hero)`

**Purpose:** Gets the current value of `influence bonus to clan`.

### GetInitialPower
`public override int GetInitialPower(Hero hero)`

**Purpose:** Gets the current value of `initial power`.

### GetInitialNotableSupporterCost
`public override int GetInitialNotableSupporterCost(Hero hero)`

**Purpose:** Gets the current value of `initial notable supporter cost`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultNotablePowerModel>(new MyDefaultNotablePowerModel());
```

## See Also

- [Complete Class Catalog](../catalog)