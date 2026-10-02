---
title: "GenericMissionObjectiveTarget"
description: "GenericMissionObjectiveTarget — class in TaleWorlds.MountAndBlade.Missions.Objectives. 4 public members (0 static)."
---

<!-- v147-skeleton -->
# GenericMissionObjectiveTarget

**Namespace:** `TaleWorlds.MountAndBlade.Missions.Objectives`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `internal class GenericMissionObjectiveTarget<T> : MissionObjectiveTarget<T>`  
**Base:** `MissionObjectiveTarget`  
**Source:** `TaleWorlds.MountAndBlade/Missions/Objectives/GenericMissionObjectiveTarget.cs`

## Overview

`GenericMissionObjectiveTarget` is an internal class in TaleWorlds.MountAndBlade.Missions.Objectives. The engine constructs it and exposes it through public APIs; a mod can call the public surface above it but cannot `new` it or reference the type in a signature.

`GenericMissionObjectiveTarget` is a named type in the TaleWorlds.MountAndBlade.Missions.Objectives namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends MissionObjectiveTarget, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `GenericMissionObjectiveTarget`.
- **Instance members** (3): `IsActive`, `GetName`, `GetGlobalPosition`.
- **Extension points** (3): `IsActive`, `GetName`, `GetGlobalPosition`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetGlobalPosition` | method (override) | Overrides the base member. Takes no arguments. Returns `Vec3`. Read path: prefer it over reaching for the backing store. |
| `GetName` | method (override) | Overrides the base member. Takes no arguments. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `IsActive` | method (override) | Overrides the base member. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `GenericMissionObjectiveTarget` | ctor | Instance entry point. Takes 1 argument: `T target`. Returns ``. |

- Constructed as `public GenericMissionObjectiveTarget(T target)`.

## Usage Example

```csharp
// GenericMissionObjectiveTarget is internal: the engine creates it, a mod cannot.
// Use it through whatever the engine exposes, and read the members below.
//   IsActive()
//     bool
//   GetName()
//     TextObject
//   GetGlobalPosition()
//     Vec3
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 3 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade/Missions/Objectives/GenericMissionObjectiveTarget.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MissionObjectiveTarget](../MissionObjectiveTarget/) — `TaleWorlds.MountAndBlade.Missions.Objectives`.

Section: [api/mission-ext/](../) — the other types in this bucket.
