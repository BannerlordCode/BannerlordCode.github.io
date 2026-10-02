---
title: "DependentVersionMissmatchItem"
description: "DependentVersionMissmatchItem — struct in TaleWorlds.MountAndBlade.Launcher.Library. 2 public members (0 static)."
---

<!-- v147-skeleton -->
# DependentVersionMissmatchItem

**Namespace:** `TaleWorlds.MountAndBlade.Launcher.Library`  
**Module:** `TaleWorlds.MountAndBlade.Launcher.Library`  
**Type:** `public struct DependentVersionMissmatchItem`  
**Source:** `TaleWorlds.MountAndBlade.Launcher.Library/DependentVersionMissmatchItem.cs`

## Overview

`DependentVersionMissmatchItem` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `DependentVersionMissmatchItem`.
- **Instance members** (1): `MissmatchedModuleId`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `MissmatchedModuleId` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `DependentVersionMissmatchItem` | ctor | Instance entry point. Takes 3 arguments: `string missmatchedModuleId`, `List<Tuple<DependedModule`, `ApplicationVersion>> missmatchedDependencies`. Returns ``. |

- Constructed as `public DependentVersionMissmatchItem(string missmatchedModuleId, List<Tuple<DependedModule, ApplicationVersion>> missmatchedDependencies)`.

## Usage Example

```csharp
var data = new DependentVersionMissmatchItem
{
    MissmatchedModuleId = "",
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.MountAndBlade.Launcher.Library/DependentVersionMissmatchItem.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [DependedModule](../../modulemanager/DependedModule/) — `TaleWorlds.ModuleManager`.

Section: [api/mission-ext/](../) — the other types in this bucket.
