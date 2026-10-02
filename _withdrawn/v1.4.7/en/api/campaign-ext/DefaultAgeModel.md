---
title: "DefaultAgeModel"
description: "DefaultAgeModel — class in TaleWorlds.CampaignSystem.GameComponents. 21 public members (0 static)."
---

<!-- v147-skeleton -->
# DefaultAgeModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultAgeModel : AgeModel`  
**Base:** `AgeModel`  
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultAgeModel.cs`

## Overview

`DefaultAgeModel` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

It extends AgeModel, so the members it does not redeclare are inherited from there. 7 of its own members are properties, which is where most reads and writes land.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Instance members** (8): `BecomeInfantAge`, `BecomeChildAge`, `BecomeTeenagerAge`, `HeroComesOfAge`, `MiddleAdultHoodAge`, `BecomeOldAge`, ….
- **Extension points** (8): `BecomeInfantAge`, `BecomeChildAge`, `BecomeTeenagerAge`, `HeroComesOfAge`, `MiddleAdultHoodAge`, `BecomeOldAge`, ….
- **Data and constants** (13): `TavernVisitorTag`, `TavernDrinkerTag`, `SlowTownsmanTag`, `TownsfolkCarryingStuffTag`, `BroomsWomanTag`, `DancerTag`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `BecomeChildAge` | property (override) | Overrides the base member `int` property. Read it for current state; a declared setter writes that state in place. |
| `BecomeInfantAge` | property (override) | Overrides the base member `int` property. Read it for current state; a declared setter writes that state in place. |
| `BecomeOldAge` | property (override) | Overrides the base member `int` property. Read it for current state; a declared setter writes that state in place. |
| `BecomeTeenagerAge` | property (override) | Overrides the base member `int` property. Read it for current state; a declared setter writes that state in place. |
| `GetAgeLimitForLocation` | method (override) | Overrides the base member. Takes 4 arguments: `CharacterObject character`, `out int minimumAge`, `out int maximumAge`, `string additionalTags`. Read path: prefer it over reaching for the backing store. |
| `HeroComesOfAge` | property (override) | Overrides the base member `int` property. Read it for current state; a declared setter writes that state in place. |
| `MaxAge` | property (override) | Overrides the base member `int` property. Read it for current state; a declared setter writes that state in place. |
| `MiddleAdultHoodAge` | property (override) | Overrides the base member `int` property. Read it for current state; a declared setter writes that state in place. |
| `AlleyGangMemberTag` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `BarberTag` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `BeggarTag` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `BroomsWomanTag` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `ChildTag` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `DancerTag` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `InfantTag` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `NotaryTag` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `SlowTownsmanTag` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `TavernDrinkerTag` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `TavernVisitorTag` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `TeenagerTag` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `TownsfolkCarryingStuffTag` | const | Instance entry point. Takes no arguments. Returns `string`. |

## Usage Example

```csharp
var data = new DefaultAgeModel
{
    BecomeInfantAge = 0,
    BecomeChildAge = 0,
    BecomeTeenagerAge = 0,
    HeroComesOfAge = 0,
    MiddleAdultHoodAge = 0,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- 8 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/GameComponents/DefaultAgeModel.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [AgeModel](../AgeModel/) — `TaleWorlds.CampaignSystem.ComponentInterfaces`.

Section: [api/campaign-ext/](../) — the other types in this bucket.
