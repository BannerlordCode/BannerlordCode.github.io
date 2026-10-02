---
title: "DefaultNotablePowerModel"
description: "DefaultNotablePowerModel — class in TaleWorlds.CampaignSystem.GameComponents. 7 public members (0 static)."
---

<!-- v147-skeleton -->
# DefaultNotablePowerModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultNotablePowerModel : NotablePowerModel`  
**Base:** `NotablePowerModel`  
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultNotablePowerModel.cs`

## Overview

`DefaultNotablePowerModel` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

It extends NotablePowerModel, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Instance members** (7): `NotableDisappearPowerLimit`, `CalculateDailyPowerChangeForHero`, `RegularNotableMaxPowerLevel`, `GetPowerRankName`, `GetInfluenceBonusToClan`, `GetInitialPower`, ….
- **Extension points** (7): `NotableDisappearPowerLimit`, `CalculateDailyPowerChangeForHero`, `RegularNotableMaxPowerLevel`, `GetPowerRankName`, `GetInfluenceBonusToClan`, `GetInitialPower`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CalculateDailyPowerChangeForHero` | method (override) | Overrides the base member. Takes 2 arguments: `Hero hero`, `bool includeDescriptions`. Returns `ExplainedNumber`. |
| `GetInfluenceBonusToClan` | method (override) | Overrides the base member. Takes 1 argument: `Hero hero`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetInitialNotableSupporterCost` | method (override) | Overrides the base member. Takes 1 argument: `Hero hero`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetInitialPower` | method (override) | Overrides the base member. Takes 1 argument: `Hero hero`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetPowerRankName` | method (override) | Overrides the base member. Takes 1 argument: `Hero hero`. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `NotableDisappearPowerLimit` | property (override) | Overrides the base member `int` property. Read it for current state; a declared setter writes that state in place. |
| `RegularNotableMaxPowerLevel` | property (override) | Overrides the base member `int` property. Read it for current state; a declared setter writes that state in place. |

## Usage Example

```csharp
var data = new DefaultNotablePowerModel
{
    NotableDisappearPowerLimit = 0,
    RegularNotableMaxPowerLevel = 0,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- 7 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/GameComponents/DefaultNotablePowerModel.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ExplainedNumber](../../campaign/ExplainedNumber/) — `TaleWorlds.CampaignSystem`.

Section: [api/campaign-ext/](../) — the other types in this bucket.
