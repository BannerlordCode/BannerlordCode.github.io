---
title: "ElementSaveData"
description: "ElementSaveData — class in TaleWorlds.SaveSystem.Save. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# ElementSaveData

**Namespace:** `TaleWorlds.SaveSystem.Save`  
**Module:** `TaleWorlds.SaveSystem`  
**Type:** `internal class ElementSaveData : VariableSaveData`  
**Base:** `VariableSaveData`  
**Source:** `TaleWorlds.SaveSystem/Save/ElementSaveData.cs`

## Overview

`ElementSaveData` is an internal class in TaleWorlds.SaveSystem.Save. The engine constructs it and exposes it through public APIs; a mod can call the public surface above it but cannot `new` it or reference the type in a signature.

`ElementSaveData` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

It extends VariableSaveData, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ElementSaveData`.
- **Instance members** (2): `ElementValue`, `ElementIndex`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ElementIndex` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `ElementValue` | property | Instance entry point `object` property. Read it for current state; a declared setter writes that state in place. |
| `ElementSaveData` | ctor | Instance entry point. Takes 3 arguments: `ContainerSaveData containerSaveData`, `object value`, `int index`. Returns ``. |

- Constructed as `public ElementSaveData(ContainerSaveData containerSaveData, object value, int index)`.

## Usage Example

```csharp
// ElementSaveData is internal: the engine creates it, a mod cannot.
// Use it through whatever the engine exposes, and read the members below.
//   ElementValue
//     object
//   ElementIndex
//     int
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.SaveSystem/Save/ElementSaveData.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ContainerSaveData](../ContainerSaveData/) — `TaleWorlds.SaveSystem.Save`.

Section: [api/save-system/](../) — the other types in this bucket.
