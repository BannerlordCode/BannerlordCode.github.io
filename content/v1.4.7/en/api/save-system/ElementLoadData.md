---
title: "ElementLoadData"
description: "ElementLoadData — class in TaleWorlds.SaveSystem.Load. 1 public member (0 static)."
---

<!-- v147-skeleton -->
# ElementLoadData

**Namespace:** `TaleWorlds.SaveSystem.Load`  
**Module:** `TaleWorlds.SaveSystem`  
**Type:** `internal class ElementLoadData : VariableLoadData`  
**Base:** `VariableLoadData`  
**Source:** `TaleWorlds.SaveSystem/Load/ElementLoadData.cs`

## Overview

`ElementLoadData` is an internal class in TaleWorlds.SaveSystem.Load. The engine constructs it and exposes it through public APIs; a mod can call the public surface above it but cannot `new` it or reference the type in a signature.

`ElementLoadData` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

It extends VariableLoadData, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Instance members** (1): `ContainerLoadData`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ContainerLoadData` | property | Instance entry point `ContainerLoadData` property. Read it for current state; a declared setter writes that state in place. |

## Usage Example

```csharp
// ElementLoadData is internal: the engine creates it, a mod cannot.
// Use it through whatever the engine exposes, and read the members below.
//   ContainerLoadData
//     ContainerLoadData
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.SaveSystem/Load/ElementLoadData.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ContainerLoadData](../ContainerLoadData/) — `TaleWorlds.SaveSystem.Load`.

Section: [api/save-system/](../) — the other types in this bucket.
