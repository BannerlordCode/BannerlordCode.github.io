---
title: "BatteringRamSpawner"
description: "BatteringRamSpawner — class in TaleWorlds.MountAndBlade.Objects.Siege. 7 public members (0 static)."
---

<!-- v147-skeleton -->
# BatteringRamSpawner

**Namespace:** `TaleWorlds.MountAndBlade.Objects.Siege`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class BatteringRamSpawner : SpawnerBase`  
**Base:** `SpawnerBase`  
**Source:** `TaleWorlds.MountAndBlade/Objects/Siege/BatteringRamSpawner.cs`

## Overview

`BatteringRamSpawner` is a named type in the TaleWorlds.MountAndBlade.Objects.Siege namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends SpawnerBase, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Instance members** (6): `OnEditorInit`, `OnEditorTick`, `OnEditorVariableChanged`, `OnCheckForProblems`, `OnPreInit`, `AssignParameters`.
- **Extension points** (1): `AssignParameters`.
- **Data and constants** (1): `EnableAutoGhostMovement`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AssignParameters` | method (override) | Overrides the base member. Takes 1 argument: `SpawnerEntityMissionHelper _spawnerMissionHelper`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `OnCheckForProblems` | method | Protected — for subclasses only. Takes no arguments. Returns `internal override bool`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnEditorInit` | method | Protected — for subclasses only. Takes no arguments. Returns `internal override void`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnEditorTick` | method | Protected — for subclasses only. Takes 1 argument: `float dt`. Returns `internal override void`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnEditorVariableChanged` | method | Protected — for subclasses only. Takes 1 argument: `string variableName`. Returns `internal override void`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnPreInit` | method | Protected — for subclasses only. Takes no arguments. Returns `internal override void`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `EnableAutoGhostMovement` | field | Instance entry point `bool` field — direct storage with no validation or notification. |

## Usage Example

```csharp
// BatteringRamSpawner exposes no public members in TaleWorlds.MountAndBlade.Objects.Siege.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade/Objects/Siege/BatteringRamSpawner.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [SpawnerBase](../SpawnerBase/) — `TaleWorlds.MountAndBlade.Objects.Siege`.

Section: [api/mission-ext/](../) — the other types in this bucket.
