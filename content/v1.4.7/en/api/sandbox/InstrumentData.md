---
title: "InstrumentData"
description: "InstrumentData — class in SandBox.Objects. 8 public members (0 static)."
---

<!-- v147-skeleton -->
# InstrumentData

**Namespace:** `SandBox.Objects`  
**Module:** `SandBox`  
**Type:** `public class InstrumentData : MBObjectBase`  
**Base:** `MBObjectBase`  
**Source:** `SandBox/Objects/InstrumentData.cs`

## Overview

`InstrumentData` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

It extends MBObjectBase, so the members it does not redeclare are inherited from there. 4 of its own members are properties, which is where most reads and writes land.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Constructed with** (2): `InstrumentData`, `InstrumentData`.
- **Instance members** (6): `SittingAction`, `StandingAction`, `Tag`, `IsDataWithoutInstrument`, `InitializeInstrumentData`, `Deserialize`.
- **Extension points** (1): `Deserialize`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Deserialize` | method (override) | Overrides the base member. Takes 2 arguments: `MBObjectManager objectManager`, `XmlNode node`. |
| `InitializeInstrumentData` | method | Instance entry point. Takes 3 arguments: `string sittingAction`, `string standingAction`, `bool isDataWithoutInstrument`. |
| `IsDataWithoutInstrument` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `SittingAction` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `StandingAction` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `Tag` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `InstrumentData` | ctor | Instance entry point. Takes no arguments. Returns ``. |
| `InstrumentData` | ctor | Instance entry point. Takes 1 argument: `string stringId`. Returns ``. |

- Constructed as `public InstrumentData()`.
- Constructed as `public InstrumentData(string stringId)`.

## Usage Example

```csharp
var data = new InstrumentData
{
    SittingAction = "",
    StandingAction = "",
    Tag = "",
    IsDataWithoutInstrument = false,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/Objects/InstrumentData.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Attributes](../../campaign/Attributes/) — `TaleWorlds.CampaignSystem.Extensions`.

Section: [api/sandbox/](../) — the other types in this bucket.
