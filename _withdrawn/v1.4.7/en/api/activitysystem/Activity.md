---
title: "Activity"
description: "Activity — class in TaleWorlds.ActivitySystem. 4 public members (0 static)."
---

<!-- v147-skeleton -->
# Activity

**Namespace:** `TaleWorlds.ActivitySystem`  
**Module:** `TaleWorlds.ActivitySystem`  
**Type:** `public class Activity`  
**Source:** `TaleWorlds.ActivitySystem/Activity.cs`

## Overview

`Activity` is a named type in the TaleWorlds.ActivitySystem namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Instance members** (4): `Id`, `IsCompleted`, `IsInProgress`, `IsAvailable`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Id` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `IsAvailable` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsCompleted` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsInProgress` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |

## Usage Example

```csharp
// Activity is read through its properties:
//   Id : string
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.ActivitySystem/Activity.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/activitysystem/](../) — the other types in this bucket.
