---
title: "BanditDensityModel"
description: "BanditDensityModel — class in TaleWorlds.CampaignSystem.ComponentInterfaces. 13 public members (0 static)."
---

<!-- v147-skeleton -->
# BanditDensityModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class BanditDensityModel : MBGameModel<BanditDensityModel>`  
**Base:** `MBGameModel`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BanditDensityModel.cs`

## Overview

`BanditDensityModel` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

It extends MBGameModel, so the members it does not redeclare are inherited from there. 9 of its own members are properties, which is where most reads and writes land.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Instance members** (13): `GetMaxSupportedNumberOfLootersForClan`, `NumberOfMinimumBanditPartiesInAHideoutToInfestIt`, `NumberOfMaximumBanditPartiesInEachHideout`, `NumberOfMaximumBanditPartiesAroundEachHideout`, `NumberOfMaximumHideoutsAtEachBanditFaction`, `NumberOfInitialHideoutsAtEachBanditFaction`, ….
- **Extension points** (13): `GetMaxSupportedNumberOfLootersForClan`, `NumberOfMinimumBanditPartiesInAHideoutToInfestIt`, `NumberOfMaximumBanditPartiesInEachHideout`, `NumberOfMaximumBanditPartiesAroundEachHideout`, `NumberOfMaximumHideoutsAtEachBanditFaction`, `NumberOfInitialHideoutsAtEachBanditFaction`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetMaximumTroopCountForHideoutMission` | method (abstract) | Abstract — a subclass must supply it. Takes 2 arguments: `MobileParty party`, `bool isAssault`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetMaxSupportedNumberOfLootersForClan` | method (abstract) | Abstract — a subclass must supply it. Takes 1 argument: `Clan clan`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetMinimumTroopCountForHideoutMission` | method (abstract) | Abstract — a subclass must supply it. Takes 2 arguments: `MobileParty party`, `bool isAssault`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `IsPositionInsideNavalSafeZone` | method (abstract) | Abstract — a subclass must supply it. Takes 1 argument: `CampaignVec2 position`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `NumberOfInitialHideoutsAtEachBanditFaction` | property (abstract) | Abstract — a subclass must supply it `int` property. Read it for current state; a declared setter writes that state in place. |
| `NumberOfMaximumBanditPartiesAroundEachHideout` | property (abstract) | Abstract — a subclass must supply it `int` property. Read it for current state; a declared setter writes that state in place. |
| `NumberOfMaximumBanditPartiesInEachHideout` | property (abstract) | Abstract — a subclass must supply it `int` property. Read it for current state; a declared setter writes that state in place. |
| `NumberOfMaximumHideoutsAtEachBanditFaction` | property (abstract) | Abstract — a subclass must supply it `int` property. Read it for current state; a declared setter writes that state in place. |
| `NumberOfMaximumTroopCountForBossFightInHideout` | property (abstract) | Abstract — a subclass must supply it `int` property. Read it for current state; a declared setter writes that state in place. |
| `NumberOfMaximumTroopCountForFirstFightInHideout` | property (abstract) | Abstract — a subclass must supply it `int` property. Read it for current state; a declared setter writes that state in place. |
| `NumberOfMinimumBanditPartiesInAHideoutToInfestIt` | property (abstract) | Abstract — a subclass must supply it `int` property. Read it for current state; a declared setter writes that state in place. |
| `NumberOfMinimumBanditTroopsInHideoutMission` | property (abstract) | Abstract — a subclass must supply it `int` property. Read it for current state; a declared setter writes that state in place. |
| `SpawnPercentageForFirstFightInHideoutMission` | property (abstract) | Abstract — a subclass must supply it `float` property. Read it for current state; a declared setter writes that state in place. |

## Usage Example

```csharp
var data = new BanditDensityModel
{
    NumberOfMinimumBanditPartiesInAHideoutToInfestIt = 0,
    NumberOfMaximumBanditPartiesInEachHideout = 0,
    NumberOfMaximumBanditPartiesAroundEachHideout = 0,
    NumberOfMaximumHideoutsAtEachBanditFaction = 0,
    NumberOfInitialHideoutsAtEachBanditFaction = 0,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- 13 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/ComponentInterfaces/BanditDensityModel.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MobileParty](../../campaign/MobileParty/) — `TaleWorlds.CampaignSystem.Party`.

Section: [api/campaign-ext/](../) — the other types in this bucket.
