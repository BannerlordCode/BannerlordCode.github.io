---
title: "SettlementAccessModel"
description: "SettlementAccessModel — class in TaleWorlds.CampaignSystem.ComponentInterfaces. 14 public members (0 static)."
---

<!-- v147-skeleton -->
# SettlementAccessModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class SettlementAccessModel : MBGameModel<SettlementAccessModel>`  
**Base:** `MBGameModel`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementAccessModel.cs`

## Overview

`SettlementAccessModel` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

It extends MBGameModel, so the members it does not redeclare are inherited from there. 8 of its own members are properties, which is where most reads and writes land.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Instance members** (14): `CanMainHeroEnterSettlement`, `CanMainHeroEnterLordsHall`, `CanMainHeroEnterDungeon`, `CanMainHeroAccessLocation`, `CanMainHeroDoSettlementAction`, `IsRequestMeetingOptionAvailable`, ….
- **Extension points** (6): `CanMainHeroEnterSettlement`, `CanMainHeroEnterLordsHall`, `CanMainHeroEnterDungeon`, `CanMainHeroAccessLocation`, `CanMainHeroDoSettlementAction`, `IsRequestMeetingOptionAvailable`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CanMainHeroAccessLocation` | method (abstract) | Abstract — a subclass must supply it. Takes 4 arguments: `Settlement settlement`, `string locationId`, `out bool disableOption`, `out TextObject disabledText`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `CanMainHeroDoSettlementAction` | method (abstract) | Abstract — a subclass must supply it. Takes 4 arguments: `Settlement settlement`, `SettlementAccessModel.SettlementAction settlementAction`, `out bool disableOption`, `out TextObject disabledText`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `CanMainHeroEnterDungeon` | method (abstract) | Abstract — a subclass must supply it. Takes 2 arguments: `Settlement settlement`, `out SettlementAccessModel.AccessDetails accessDetails`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `CanMainHeroEnterLordsHall` | method (abstract) | Abstract — a subclass must supply it. Takes 2 arguments: `Settlement settlement`, `out SettlementAccessModel.AccessDetails accessDetails`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `CanMainHeroEnterSettlement` | method (abstract) | Abstract — a subclass must supply it. Takes 2 arguments: `Settlement settlement`, `out SettlementAccessModel.AccessDetails accessDetails`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsRequestMeetingOptionAvailable` | method (abstract) | Abstract — a subclass must supply it. Takes 3 arguments: `Settlement settlement`, `out bool disableOption`, `out TextObject disabledText`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `AccessDetails` | property | Instance entry point `struct` property. Read it for current state; a declared setter writes that state in place. |
| `AccessLevel` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `AccessLimitationReason` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `AccessMethod` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `LimitedAccessSolution` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `PreliminaryActionObligation` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `PreliminaryActionType` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `SettlementAction` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |

## Usage Example

```csharp
var data = new SettlementAccessModel
{
    AccessLevel = default,
    AccessMethod = default,
    AccessLimitationReason = default,
    LimitedAccessSolution = default,
    PreliminaryActionObligation = default,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- 6 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementAccessModel.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/campaign-ext/](../) — the other types in this bucket.
