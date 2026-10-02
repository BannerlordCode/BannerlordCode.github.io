---
title: "AnimalSpawnSettings"
description: "AnimalSpawnSettings — class in TaleWorlds.MountAndBlade.Objects. 2 public members (1 static)."
---

<!-- v147-skeleton -->
# AnimalSpawnSettings

**Namespace:** `TaleWorlds.MountAndBlade.Objects`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class AnimalSpawnSettings : ScriptComponentBehavior`  
**Base:** `ScriptComponentBehavior`  
**Source:** `TaleWorlds.MountAndBlade/Objects/AnimalSpawnSettings.cs`

## Overview

`AnimalSpawnSettings` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

It extends ScriptComponentBehavior, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Static entry points** (1): `CheckAndSetAnimalAgentFlags`.
- **Instance members** (1): `DisableWandering`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CheckAndSetAnimalAgentFlags` | method (static) | Static entry point. Takes 2 arguments: `GameEntity spawnEntity`, `Agent animalAgent`. |
| `DisableWandering` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |

## Usage Example

```csharp
var data = new AnimalSpawnSettings
{
    DisableWandering = false,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.MountAndBlade/Objects/AnimalSpawnSettings.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/mission-ext/](../) — the other types in this bucket.
