---
title: "AgeModel"
description: "AgeModel — class in TaleWorlds.CampaignSystem.ComponentInterfaces. 8 public members (0 static)."
---

<!-- v147-skeleton -->
# AgeModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class AgeModel : MBGameModel<AgeModel>`  
**Base:** `MBGameModel`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/AgeModel.cs`

## Overview

`AgeModel` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

It extends MBGameModel, so the members it does not redeclare are inherited from there. 7 of its own members are properties, which is where most reads and writes land.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Instance members** (8): `BecomeInfantAge`, `BecomeChildAge`, `BecomeTeenagerAge`, `HeroComesOfAge`, `BecomeOldAge`, `MiddleAdultHoodAge`, ….
- **Extension points** (8): `BecomeInfantAge`, `BecomeChildAge`, `BecomeTeenagerAge`, `HeroComesOfAge`, `BecomeOldAge`, `MiddleAdultHoodAge`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `BecomeChildAge` | property (abstract) | Abstract — a subclass must supply it `int` property. Read it for current state; a declared setter writes that state in place. |
| `BecomeInfantAge` | property (abstract) | Abstract — a subclass must supply it `int` property. Read it for current state; a declared setter writes that state in place. |
| `BecomeOldAge` | property (abstract) | Abstract — a subclass must supply it `int` property. Read it for current state; a declared setter writes that state in place. |
| `BecomeTeenagerAge` | property (abstract) | Abstract — a subclass must supply it `int` property. Read it for current state; a declared setter writes that state in place. |
| `GetAgeLimitForLocation` | method (abstract) | Abstract — a subclass must supply it. Takes 4 arguments: `CharacterObject character`, `out int minimumAge`, `out int maximumAge`, `string additionalTags`. Read path: prefer it over reaching for the backing store. |
| `HeroComesOfAge` | property (abstract) | Abstract — a subclass must supply it `int` property. Read it for current state; a declared setter writes that state in place. |
| `MaxAge` | property (abstract) | Abstract — a subclass must supply it `int` property. Read it for current state; a declared setter writes that state in place. |
| `MiddleAdultHoodAge` | property (abstract) | Abstract — a subclass must supply it `int` property. Read it for current state; a declared setter writes that state in place. |

## Usage Example

```csharp
var data = new AgeModel
{
    BecomeInfantAge = 0,
    BecomeChildAge = 0,
    BecomeTeenagerAge = 0,
    HeroComesOfAge = 0,
    BecomeOldAge = 0,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- 8 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/ComponentInterfaces/AgeModel.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/campaign-ext/](../) — the other types in this bucket.
