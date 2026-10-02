---
title: "MissionObjectiveProgressInfo"
description: "MissionObjectiveProgressInfo — struct in TaleWorlds.MountAndBlade.Missions.Objectives. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# MissionObjectiveProgressInfo

**Namespace:** `TaleWorlds.MountAndBlade.Missions.Objectives`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public struct MissionObjectiveProgressInfo`  
**Source:** `TaleWorlds.MountAndBlade/Missions/Objectives/MissionObjectiveProgressInfo.cs`

## Overview

`MissionObjectiveProgressInfo` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Instance members** (1): `HasProgress`.
- **Data and constants** (2): `RequiredProgressAmount`, `CurrentProgressAmount`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `HasProgress` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `CurrentProgressAmount` | field | Instance entry point `int` field — direct storage with no validation or notification. |
| `RequiredProgressAmount` | field | Instance entry point `int` field — direct storage with no validation or notification. |

## Usage Example

```csharp
var data = new MissionObjectiveProgressInfo
{
    HasProgress = false,
    RequiredProgressAmount = 0,
    CurrentProgressAmount = 0,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.MountAndBlade/Missions/Objectives/MissionObjectiveProgressInfo.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/mission-ext/](../) — the other types in this bucket.
