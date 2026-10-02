---
title: "ContainerHeaderLoadData"
description: "ContainerHeaderLoadData — class in TaleWorlds.SaveSystem.Load. 11 public members (0 static)."
---

<!-- v147-skeleton -->
# ContainerHeaderLoadData

**Namespace:** `TaleWorlds.SaveSystem.Load`  
**Module:** `TaleWorlds.SaveSystem`  
**Type:** `public class ContainerHeaderLoadData`  
**Source:** `TaleWorlds.SaveSystem/Load/ContainerHeaderLoadData.cs`

## Overview

`ContainerHeaderLoadData` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ContainerHeaderLoadData`.
- **Instance members** (10): `Id`, `Target`, `Context`, `TypeDefinition`, `SaveId`, `ElementCount`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ContainerType` | property | Instance entry point `ContainerType` property. Read it for current state; a declared setter writes that state in place. |
| `Context` | property | Instance entry point `LoadContext` property. Read it for current state; a declared setter writes that state in place. |
| `CreateObject` | method | Instance entry point. Takes no arguments. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `ElementCount` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `GetObjectTypeDefinition` | method | Instance entry point. Takes no arguments. Returns `bool`. Read path: prefer it over reaching for the backing store. |
| `Id` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `InitialieReaders` | method | Instance entry point. Takes 1 argument: `SaveEntryFolder saveEntryFolder`. |
| `SaveId` | property | Instance entry point `SaveId` property. Read it for current state; a declared setter writes that state in place. |
| `Target` | property | Instance entry point `object` property. Read it for current state; a declared setter writes that state in place. |
| `TypeDefinition` | property | Instance entry point `ContainerDefinition` property. Read it for current state; a declared setter writes that state in place. |
| `ContainerHeaderLoadData` | ctor | Instance entry point. Takes 2 arguments: `LoadContext context`, `int id`. Returns ``. |

- Constructed as `public ContainerHeaderLoadData(LoadContext context, int id)`.

## Usage Example

```csharp
var data = new ContainerHeaderLoadData
{
    Id = 0,
    Target = default,
    Context = default,
    TypeDefinition = default,
    SaveId = default,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.SaveSystem/Load/ContainerHeaderLoadData.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ContainerDefinition](../ContainerDefinition/) — `TaleWorlds.SaveSystem.Definition`.

Section: [api/save-system/](../) — the other types in this bucket.
