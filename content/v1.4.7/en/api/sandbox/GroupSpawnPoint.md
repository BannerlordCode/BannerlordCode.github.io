---
title: "GroupSpawnPoint"
description: "GroupSpawnPoint — class in SandBox.Objects. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# GroupSpawnPoint

**Namespace:** `SandBox.Objects`  
**Module:** `SandBox`  
**Type:** `public class GroupSpawnPoint : UsablePlace`  
**Base:** `UsablePlace`  
**Source:** `SandBox/Objects/GroupSpawnPoint.cs`

## Overview

`GroupSpawnPoint` is a named type in the SandBox.Objects namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends UsablePlace, so the members it does not redeclare are inherited from there. 3 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Instance members** (3): `IsInstant`, `Delay`, `SpawnCount`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Delay` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `IsInstant` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `SpawnCount` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |

## Usage Example

```csharp
// GroupSpawnPoint is read through its properties:
//   IsInstant : bool
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `SandBox/Objects/GroupSpawnPoint.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/sandbox/](../) — the other types in this bucket.
