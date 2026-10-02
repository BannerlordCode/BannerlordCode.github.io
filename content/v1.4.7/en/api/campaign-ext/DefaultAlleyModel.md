---
title: "DefaultAlleyModel"
description: "DefaultAlleyModel — class in TaleWorlds.CampaignSystem.GameComponents. 18 public members (0 static)."
---

<!-- v147-skeleton -->
# DefaultAlleyModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultAlleyModel : AlleyModel`  
**Base:** `AlleyModel`  
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultAlleyModel.cs`

## Overview

`DefaultAlleyModel` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

It extends AlleyModel, so the members it does not redeclare are inherited from there. 5 of its own members are properties, which is where most reads and writes land.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Instance members** (16): `DestroyAlleyAfterDaysWhenLeaderIsDeath`, `MinimumTroopCountInPlayerOwnedAlley`, `MaximumTroopCountInPlayerOwnedAlley`, `GetDailyCrimeRatingOfAlley`, `GetDailyXpGainForAssignedClanMember`, `GetDailyXpGainForMainHero`, ….
- **Extension points** (15): `DestroyAlleyAfterDaysWhenLeaderIsDeath`, `MinimumTroopCountInPlayerOwnedAlley`, `MaximumTroopCountInPlayerOwnedAlley`, `GetDailyCrimeRatingOfAlley`, `GetDailyXpGainForAssignedClanMember`, `GetDailyXpGainForMainHero`, ….
- **Data and constants** (2): `MinimumRoguerySkillNeededForLeadingAnAlley`, `MaximumMercyTraitNeededForLeadingAnAlley`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `DestroyAlleyAfterDaysWhenLeaderIsDeath` | property (override) | Overrides the base member `CampaignTime` property. Read it for current state; a declared setter writes that state in place. |
| `GetAlleyAttackResponseTimeInDays` | method (override) | Overrides the base member. Takes 1 argument: `TroopRoster troopRoster`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetClanMembersAndAvailabilityDetailsForLeadingAnAlley` | method (override) | Overrides the base member. Takes 1 argument: `Alley alley`. Returns `List<ValueTuple<Hero, DefaultAlleyModel.AlleyMemberAvailabilityDetail>>`. Read path: prefer it over reaching for the backing store. |
| `GetDailyCrimeRatingOfAlley` | property (override) | Overrides the base member `float` property. Read path: prefer it over reaching for the backing store. |
| `GetDailyIncomeOfAlley` | method (override) | Overrides the base member. Takes 1 argument: `Alley alley`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetDailyXpGainForAssignedClanMember` | method (override) | Overrides the base member. Takes 1 argument: `Hero assignedHero`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetDailyXpGainForMainHero` | method (override) | Overrides the base member. Takes no arguments. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetDisabledReasonTextForHero` | method (override) | Overrides the base member. Takes 3 arguments: `Hero hero`, `Alley alley`, `DefaultAlleyModel.AlleyMemberAvailabilityDetail detail`. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `GetInitialXpGainForMainHero` | method (override) | Overrides the base member. Takes no arguments. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetTroopsOfAIOwnedAlley` | method (override) | Overrides the base member. Takes 1 argument: `Alley alley`. Returns `TroopRoster`. Read path: prefer it over reaching for the backing store. |
| `GetTroopsOfAlleyForBattleMission` | method (override) | Overrides the base member. Takes 1 argument: `Alley alley`. Returns `TroopRoster`. Read path: prefer it over reaching for the backing store. |
| `GetTroopsToRecruitFromAlleyDependingOnAlleyRandom` | method (override) | Overrides the base member. Takes 2 arguments: `Alley alley`, `float random`. Returns `TroopRoster`. Read path: prefer it over reaching for the backing store. |
| `GetXpGainAfterSuccessfulAlleyDefenseForMainHero` | method (override) | Overrides the base member. Takes no arguments. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `MaximumTroopCountInPlayerOwnedAlley` | property (override) | Overrides the base member `int` property. Read it for current state; a declared setter writes that state in place. |
| `MinimumTroopCountInPlayerOwnedAlley` | property (override) | Overrides the base member `int` property. Read it for current state; a declared setter writes that state in place. |
| `AlleyMemberAvailabilityDetail` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `MaximumMercyTraitNeededForLeadingAnAlley` | const | Instance entry point. Takes no arguments. Returns `int`. |
| `MinimumRoguerySkillNeededForLeadingAnAlley` | const | Instance entry point. Takes no arguments. Returns `int`. |

## Usage Example

```csharp
var data = new DefaultAlleyModel
{
    DestroyAlleyAfterDaysWhenLeaderIsDeath = default,
    MinimumTroopCountInPlayerOwnedAlley = 0,
    MaximumTroopCountInPlayerOwnedAlley = 0,
    GetDailyCrimeRatingOfAlley = 0,
    AlleyMemberAvailabilityDetail = default,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- 15 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/GameComponents/DefaultAlleyModel.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [AlleyModel](../AlleyModel/) — `TaleWorlds.CampaignSystem.ComponentInterfaces`.
- [TroopRoster](../../campaign/TroopRoster/) — `TaleWorlds.CampaignSystem.Roster`.
- [Alley](../../campaign/Alley/) — `TaleWorlds.CampaignSystem.Settlements`.
- [DefaultTraits](../../campaign/DefaultTraits/) — `TaleWorlds.CampaignSystem.CharacterDevelopment`.
- [Min](../../core-extra/Min/) — `TaleWorlds.LinQuick`.
- [Town](../../campaign/Town/) — `TaleWorlds.CampaignSystem.Settlements`.

Section: [api/campaign-ext/](../) — the other types in this bucket.
