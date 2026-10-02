---
title: "TauntIndexData"
description: "TauntIndexData — struct in TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData. 6 public members (1 static)."
---

<!-- v147-skeleton -->
# TauntIndexData

**Namespace:** `TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData`  
**Module:** `TaleWorlds.MountAndBlade.Diamond`  
**Type:** `public struct TauntIndexData`  
**Source:** `TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/TauntIndexData.cs`

## Overview

`TauntIndexData` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `TauntIndexData`.
- **Static entry points** (1): `operator`.
- **Instance members** (4): `TauntId`, `TauntIndex`, `Equals`, `GetHashCode`.
- **Extension points** (2): `Equals`, `GetHashCode`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Equals` | method (override) | Overrides the base member. Takes 1 argument: `object obj`. Returns `bool`. |
| `GetHashCode` | method (override) | Overrides the base member. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `operator` | property (static) | Static entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `TauntId` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `TauntIndex` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `TauntIndexData` | ctor | Instance entry point. Takes 2 arguments: `string tauntId`, `int tauntIndex`. Returns ``. |

- Constructed as `public TauntIndexData(string tauntId, int tauntIndex)`.

## Usage Example

```csharp
var data = new TauntIndexData
{
    TauntId = "",
    TauntIndex = 0,
    operator = false,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/TauntIndexData.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/mission-ext/](../) — the other types in this bucket.
