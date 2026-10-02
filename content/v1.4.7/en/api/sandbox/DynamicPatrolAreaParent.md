---
title: "DynamicPatrolAreaParent"
description: "DynamicPatrolAreaParent — class in SandBox.Objects. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# DynamicPatrolAreaParent

**Namespace:** `SandBox.Objects`  
**Module:** `SandBox`  
**Type:** `public class DynamicPatrolAreaParent : MissionObject`  
**Base:** `MissionObject`  
**Source:** `SandBox/Objects/DynamicPatrolAreaParent.cs`

## Overview

`DynamicPatrolAreaParent` is a named type in the SandBox.Objects namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends MissionObject, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Instance members** (3): `OnEditorTick`, `DrawPath`, `UniqueId`.
- **Extension points** (1): `OnEditorTick`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnEditorTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `DrawPath` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `UniqueId` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |

## Usage Example

```csharp
// DynamicPatrolAreaParent is read through its properties:
//   DrawPath : bool
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/Objects/DynamicPatrolAreaParent.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/sandbox/](../) — the other types in this bucket.
