---
title: "ContainerLoadData"
description: "ContainerLoadData — class in TaleWorlds.SaveSystem.Load. 10 public members (0 static)."
---

<!-- v147-skeleton -->
# ContainerLoadData

**Namespace:** `TaleWorlds.SaveSystem.Load`  
**Module:** `TaleWorlds.SaveSystem`  
**Type:** `internal class ContainerLoadData`  
**Source:** `TaleWorlds.SaveSystem/Load/ContainerLoadData.cs`

## Overview

`ContainerLoadData` is an internal class in TaleWorlds.SaveSystem.Load. The engine constructs it and exposes it through public APIs; a mod can call the public surface above it but cannot `new` it or reference the type in a signature.

`ContainerLoadData` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ContainerLoadData`.
- **Instance members** (9): `Id`, `Target`, `Context`, `TypeDefinition`, `ContainerHeaderLoadData`, `InitializeReaders`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ContainerHeaderLoadData` | property | Instance entry point `ContainerHeaderLoadData` property. Read it for current state; a declared setter writes that state in place. |
| `Context` | property | Instance entry point `LoadContext` property. Read it for current state; a declared setter writes that state in place. |
| `FillCreatedObject` | method | Instance entry point. Takes no arguments. |
| `FillObject` | method | Instance entry point. Takes no arguments. |
| `Id` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `InitializeReaders` | method | Instance entry point. Takes 1 argument: `SaveEntryFolder saveEntryFolder`. |
| `Read` | method | Instance entry point. Takes no arguments. |
| `Target` | property | Instance entry point `object` property. Read it for current state; a declared setter writes that state in place. |
| `TypeDefinition` | property | Instance entry point `ContainerDefinition` property. Read it for current state; a declared setter writes that state in place. |
| `ContainerLoadData` | ctor | Instance entry point. Takes 1 argument: `ContainerHeaderLoadData headerLoadData`. Returns ``. |

- Constructed as `public ContainerLoadData(ContainerHeaderLoadData headerLoadData)`.

## Usage Example

```csharp
// ContainerLoadData is internal: the engine creates it, a mod cannot.
// Use it through whatever the engine exposes, and read the members below.
//   Id
//     int
//   Target
//     object
//   Context
//     LoadContext
//   TypeDefinition
//     ContainerDefinition
//   ContainerHeaderLoadData
//     ContainerHeaderLoadData
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.SaveSystem/Load/ContainerLoadData.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ContainerHeaderLoadData](../ContainerHeaderLoadData/) — `TaleWorlds.SaveSystem.Load`.
- [ContainerDefinition](../ContainerDefinition/) — `TaleWorlds.SaveSystem.Definition`.
- [ElementLoadData](../ElementLoadData/) — `TaleWorlds.SaveSystem.Load`.

Section: [api/save-system/](../) — the other types in this bucket.
