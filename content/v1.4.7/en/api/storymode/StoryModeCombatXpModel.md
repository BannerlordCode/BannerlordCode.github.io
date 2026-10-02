---
title: "StoryModeCombatXpModel"
description: "StoryModeCombatXpModel — class in StoryMode.GameComponents. 4 public members (0 static)."
---

<!-- v147-skeleton -->
# StoryModeCombatXpModel

**Namespace:** `StoryMode.GameComponents`  
**Module:** `StoryMode`  
**Type:** `public class StoryModeCombatXpModel : CombatXpModel`  
**Base:** `CombatXpModel`  
**Source:** `StoryMode/GameComponents/StoryModeCombatXpModel.cs`

## Overview

`StoryModeCombatXpModel` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

It extends CombatXpModel, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Instance members** (4): `CaptainRadius`, `GetSkillForWeapon`, `GetXpFromHit`, `GetXpMultiplierFromShotDifficulty`.
- **Extension points** (4): `CaptainRadius`, `GetSkillForWeapon`, `GetXpFromHit`, `GetXpMultiplierFromShotDifficulty`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CaptainRadius` | property (override) | Overrides the base member `float` property. Read it for current state; a declared setter writes that state in place. |
| `GetSkillForWeapon` | method (override) | Overrides the base member. Takes 2 arguments: `WeaponComponentData weapon`, `bool isSiegeEngineHit`. Returns `SkillObject`. Read path: prefer it over reaching for the backing store. |
| `GetXpFromHit` | method (override) | Overrides the base member. Takes 7 arguments: `CharacterObject attackerTroop`, `CharacterObject captain`, `CharacterObject attackedTroop`, `PartyBase attackerParty`, …. Returns `ExplainedNumber`. Read path: prefer it over reaching for the backing store. |
| `GetXpMultiplierFromShotDifficulty` | method (override) | Overrides the base member. Takes 1 argument: `float shotDifficulty`. Returns `float`. Read path: prefer it over reaching for the backing store. |

## Usage Example

```csharp
var data = new StoryModeCombatXpModel
{
    CaptainRadius = 0,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- 4 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `StoryMode/GameComponents/StoryModeCombatXpModel.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Extensions](../../engine/Extensions/) — `TaleWorlds.Engine.GauntletUI`.
- [ExplainedNumber](../../campaign/ExplainedNumber/) — `TaleWorlds.CampaignSystem`.

Section: [api/storymode/](../) — the other types in this bucket.
