---
title: "NotablePowerModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NotablePowerModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NotablePowerModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class NotablePowerModel : MBGameModel<NotablePowerModel>`
**Base:** `MBGameModel<NotablePowerModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/NotablePowerModel.cs`

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

**Purpose:** Handles logic related to `calculate daily power change for hero`.

### GetPowerRankName
`public abstract TextObject GetPowerRankName(Hero hero)`

**Purpose:** Gets the current value of `power rank name`.

### GetInfluenceBonusToClan
`public abstract float GetInfluenceBonusToClan(Hero hero)`

**Purpose:** Gets the current value of `influence bonus to clan`.

### GetInitialPower
`public abstract int GetInitialPower(Hero hero)`

**Purpose:** Gets the current value of `initial power`.

### GetInitialNotableSupporterCost
`public abstract int GetInitialNotableSupporterCost(Hero hero)`

**Purpose:** Gets the current value of `initial notable supporter cost`.

## Usage Example

```csharp
var implementation = new CustomNotablePowerModel();
```

## See Also

- [Complete Class Catalog](../catalog)