---
title: "StoryModeBanditDensityModel"
description: "StoryModeBanditDensityModel — class in StoryMode.GameComponents. 13 public members (0 static)."
---

<!-- v147-skeleton -->
# StoryModeBanditDensityModel

**Namespace:** `StoryMode.GameComponents`  
**Module:** `StoryMode`  
**Type:** `public class StoryModeBanditDensityModel : BanditDensityModel`  
**Base:** `BanditDensityModel`  
**Source:** `StoryMode/GameComponents/StoryModeBanditDensityModel.cs`

## Overview

`StoryModeBanditDensityModel` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

It extends BanditDensityModel, so the members it does not redeclare are inherited from there. 9 of its own members are properties, which is where most reads and writes land.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Instance members** (13): `NumberOfMaximumBanditPartiesAroundEachHideout`, `NumberOfMaximumBanditPartiesInEachHideout`, `NumberOfMaximumHideoutsAtEachBanditFaction`, `NumberOfInitialHideoutsAtEachBanditFaction`, `NumberOfMinimumBanditPartiesInAHideoutToInfestIt`, `NumberOfMinimumBanditTroopsInHideoutMission`, ….
- **Extension points** (13): `NumberOfMaximumBanditPartiesAroundEachHideout`, `NumberOfMaximumBanditPartiesInEachHideout`, `NumberOfMaximumHideoutsAtEachBanditFaction`, `NumberOfInitialHideoutsAtEachBanditFaction`, `NumberOfMinimumBanditPartiesInAHideoutToInfestIt`, `NumberOfMinimumBanditTroopsInHideoutMission`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetMaximumTroopCountForHideoutMission` | method (override) | Overrides the base member. Takes 2 arguments: `MobileParty party`, `bool isAssault`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetMaxSupportedNumberOfLootersForClan` | method (override) | Overrides the base member. Takes 1 argument: `Clan clan`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetMinimumTroopCountForHideoutMission` | method (override) | Overrides the base member. Takes 2 arguments: `MobileParty party`, `bool isAssault`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `IsPositionInsideNavalSafeZone` | method (override) | Overrides the base member. Takes 1 argument: `CampaignVec2 position`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `NumberOfInitialHideoutsAtEachBanditFaction` | property (override) | Overrides the base member `int` property. Read it for current state; a declared setter writes that state in place. |
| `NumberOfMaximumBanditPartiesAroundEachHideout` | property (override) | Overrides the base member `int` property. Read it for current state; a declared setter writes that state in place. |
| `NumberOfMaximumBanditPartiesInEachHideout` | property (override) | Overrides the base member `int` property. Read it for current state; a declared setter writes that state in place. |
| `NumberOfMaximumHideoutsAtEachBanditFaction` | property (override) | Overrides the base member `int` property. Read it for current state; a declared setter writes that state in place. |
| `NumberOfMaximumTroopCountForBossFightInHideout` | property (override) | Overrides the base member `int` property. Read it for current state; a declared setter writes that state in place. |
| `NumberOfMaximumTroopCountForFirstFightInHideout` | property (override) | Overrides the base member `int` property. Read it for current state; a declared setter writes that state in place. |
| `NumberOfMinimumBanditPartiesInAHideoutToInfestIt` | property (override) | Overrides the base member `int` property. Read it for current state; a declared setter writes that state in place. |
| `NumberOfMinimumBanditTroopsInHideoutMission` | property (override) | Overrides the base member `int` property. Read it for current state; a declared setter writes that state in place. |
| `SpawnPercentageForFirstFightInHideoutMission` | property (override) | Overrides the base member `float` property. Read it for current state; a declared setter writes that state in place. |

## Usage Example

```csharp
var data = new StoryModeBanditDensityModel
{
    NumberOfMaximumBanditPartiesAroundEachHideout = 0,
    NumberOfMaximumBanditPartiesInEachHideout = 0,
    NumberOfMaximumHideoutsAtEachBanditFaction = 0,
    NumberOfInitialHideoutsAtEachBanditFaction = 0,
    NumberOfMinimumBanditPartiesInAHideoutToInfestIt = 0,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- 13 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `StoryMode/GameComponents/StoryModeBanditDensityModel.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [BanditDensityModel](../../campaign-ext/BanditDensityModel/) — `TaleWorlds.CampaignSystem.ComponentInterfaces`.
- [MobileParty](../../campaign/MobileParty/) — `TaleWorlds.CampaignSystem.Party`.

Section: [api/storymode/](../) — the other types in this bucket.
