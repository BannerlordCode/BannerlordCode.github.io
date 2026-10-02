---
title: "NavigationMeshDeactivator"
description: "NavigationMeshDeactivator — class in TaleWorlds.MountAndBlade.Source.Objects. 4 public members (0 static)."
---

<!-- v147-skeleton -->
# NavigationMeshDeactivator

**Namespace:** `TaleWorlds.MountAndBlade.Source.Objects`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class NavigationMeshDeactivator : ScriptComponentBehavior`  
**Base:** `ScriptComponentBehavior`  
**Source:** `TaleWorlds.MountAndBlade/Source/Objects/NavigationMeshDeactivator.cs`

## Overview

`NavigationMeshDeactivator` is a named type in the TaleWorlds.MountAndBlade.Source.Objects namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends ScriptComponentBehavior, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Instance members** (4): `DisableAssignedFaces`, `EnableAssignedFaces`, `DisableFaceWithId`, `DisableFaceWithIdForAnimals`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `DisableAssignedFaces` | method | Instance entry point. Takes 1 argument: `Scene scene`. |
| `DisableFaceWithId` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `DisableFaceWithIdForAnimals` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `EnableAssignedFaces` | method | Instance entry point. Takes 1 argument: `Scene scene`. |

## Usage Example

```csharp
// NavigationMeshDeactivator is read through its properties:
//   DisableFaceWithId : int
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.MountAndBlade/Source/Objects/NavigationMeshDeactivator.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/mission-ext/](../) — the other types in this bucket.
