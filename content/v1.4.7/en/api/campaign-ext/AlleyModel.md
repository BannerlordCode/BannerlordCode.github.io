---
title: "AlleyModel"
description: "AlleyModel — class in TaleWorlds.CampaignSystem.ComponentInterfaces. 15 public members (0 static)."
---

<!-- v147-skeleton -->
# AlleyModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class AlleyModel : MBGameModel<AlleyModel>`  
**Base:** `MBGameModel`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/AlleyModel.cs`

## Overview

`AlleyModel` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

It extends MBGameModel, so the members it does not redeclare are inherited from there. 4 of its own members are properties, which is where most reads and writes land.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Instance members** (15): `DestroyAlleyAfterDaysWhenLeaderIsDeath`, `MinimumTroopCountInPlayerOwnedAlley`, `MaximumTroopCountInPlayerOwnedAlley`, `GetDailyCrimeRatingOfAlley`, `GetDailyXpGainForAssignedClanMember`, `GetDailyXpGainForMainHero`, ….
- **Extension points** (15): `DestroyAlleyAfterDaysWhenLeaderIsDeath`, `MinimumTroopCountInPlayerOwnedAlley`, `MaximumTroopCountInPlayerOwnedAlley`, `GetDailyCrimeRatingOfAlley`, `GetDailyXpGainForAssignedClanMember`, `GetDailyXpGainForMainHero`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `DestroyAlleyAfterDaysWhenLeaderIsDeath` | property (abstract) | Abstract — a subclass must supply it `CampaignTime` property. Read it for current state; a declared setter writes that state in place. |
| `GetAlleyAttackResponseTimeInDays` | method (abstract) | Abstract — a subclass must supply it. Takes 1 argument: `TroopRoster troopRoster`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetClanMembersAndAvailabilityDetailsForLeadingAnAlley` | method (abstract) | Abstract — a subclass must supply it. Takes 1 argument: `Alley alley`. Returns `List<ValueTuple<Hero, DefaultAlleyModel.AlleyMemberAvailabilityDetail>>`. Read path: prefer it over reaching for the backing store. |
| `GetDailyCrimeRatingOfAlley` | property (abstract) | Abstract — a subclass must supply it `float` property. Read path: prefer it over reaching for the backing store. |
| `GetDailyIncomeOfAlley` | method (abstract) | Abstract — a subclass must supply it. Takes 1 argument: `Alley alley`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetDailyXpGainForAssignedClanMember` | method (abstract) | Abstract — a subclass must supply it. Takes 1 argument: `Hero assignedHero`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetDailyXpGainForMainHero` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetDisabledReasonTextForHero` | method (abstract) | Abstract — a subclass must supply it. Takes 3 arguments: `Hero hero`, `Alley alley`, `DefaultAlleyModel.AlleyMemberAvailabilityDetail detail`. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `GetInitialXpGainForMainHero` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetTroopsOfAIOwnedAlley` | method (abstract) | Abstract — a subclass must supply it. Takes 1 argument: `Alley alley`. Returns `TroopRoster`. Read path: prefer it over reaching for the backing store. |
| `GetTroopsOfAlleyForBattleMission` | method (abstract) | Abstract — a subclass must supply it. Takes 1 argument: `Alley alley`. Returns `TroopRoster`. Read path: prefer it over reaching for the backing store. |
| `GetTroopsToRecruitFromAlleyDependingOnAlleyRandom` | method (abstract) | Abstract — a subclass must supply it. Takes 2 arguments: `Alley alley`, `float random`. Returns `TroopRoster`. Read path: prefer it over reaching for the backing store. |
| `GetXpGainAfterSuccessfulAlleyDefenseForMainHero` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `MaximumTroopCountInPlayerOwnedAlley` | property (abstract) | Abstract — a subclass must supply it `int` property. Read it for current state; a declared setter writes that state in place. |
| `MinimumTroopCountInPlayerOwnedAlley` | property (abstract) | Abstract — a subclass must supply it `int` property. Read it for current state; a declared setter writes that state in place. |

## Usage Example

```csharp
var data = new AlleyModel
{
    DestroyAlleyAfterDaysWhenLeaderIsDeath = default,
    MinimumTroopCountInPlayerOwnedAlley = 0,
    MaximumTroopCountInPlayerOwnedAlley = 0,
    GetDailyCrimeRatingOfAlley = 0,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- 15 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/ComponentInterfaces/AlleyModel.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [TroopRoster](../../campaign/TroopRoster/) — `TaleWorlds.CampaignSystem.Roster`.
- [Alley](../../campaign/Alley/) — `TaleWorlds.CampaignSystem.Settlements`.
- [DefaultAlleyModel](../DefaultAlleyModel/) — `TaleWorlds.CampaignSystem.GameComponents`.

Section: [api/campaign-ext/](../) — the other types in this bucket.
