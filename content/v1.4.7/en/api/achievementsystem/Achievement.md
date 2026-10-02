---
title: "Achievement"
description: "Achievement — class in TaleWorlds.AchievementSystem. 8 public members (0 static)."
---

<!-- v147-skeleton -->
# Achievement

**Namespace:** `TaleWorlds.AchievementSystem`  
**Module:** `TaleWorlds.AchievementSystem`  
**Type:** `public class Achievement`  
**Source:** `TaleWorlds.AchievementSystem/Achievement.cs`

## Overview

`Achievement` is a named type in the TaleWorlds.AchievementSystem namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Instance members** (8): `Id`, `LockedDisplayName`, `UnlockedDisplayName`, `LockedDescription`, `UnlockedDescription`, `TargetProgress`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CurrentProgress` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `Id` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `IsUnlocked` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `LockedDescription` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `LockedDisplayName` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `TargetProgress` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `UnlockedDescription` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `UnlockedDisplayName` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |

## Usage Example

```csharp
// Achievement is read through its properties:
//   Id : string
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.AchievementSystem/Achievement.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/achievementsystem/](../) — the other types in this bucket.
