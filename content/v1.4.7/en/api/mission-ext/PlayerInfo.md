---
title: "PlayerInfo"
description: "PlayerInfo — class in TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData. 8 public members (0 static)."
---

<!-- v147-skeleton -->
# PlayerInfo

**Namespace:** `TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData`  
**Module:** `TaleWorlds.MountAndBlade.Diamond`  
**Type:** `public class PlayerInfo`  
**Source:** `TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/PlayerInfo.cs`

## Overview

`PlayerInfo` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Instance members** (8): `PlayerId`, `Username`, `ForcedIndex`, `TeamNo`, `Kill`, `Death`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Assist` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `Death` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `ForcedIndex` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `HasSameContentWith` | method | Instance entry point. Takes 1 argument: `PlayerInfo other`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `Kill` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `PlayerId` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `TeamNo` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `Username` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |

## Usage Example

```csharp
var data = new PlayerInfo
{
    PlayerId = "",
    Username = "",
    ForcedIndex = 0,
    TeamNo = 0,
    Kill = 0,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/PlayerInfo.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/mission-ext/](../) — the other types in this bucket.
