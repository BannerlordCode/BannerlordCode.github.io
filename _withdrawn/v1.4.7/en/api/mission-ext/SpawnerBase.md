---
title: "SpawnerBase"
description: "SpawnerBase — class in TaleWorlds.MountAndBlade.Objects.Siege. 5 public members (0 static)."
---

<!-- v147-skeleton -->
# SpawnerBase

**Namespace:** `TaleWorlds.MountAndBlade.Objects.Siege`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class SpawnerBase : ScriptComponentBehavior`  
**Base:** `ScriptComponentBehavior`  
**Source:** `TaleWorlds.MountAndBlade/Objects/Siege/SpawnerBase.cs`

## Overview

`SpawnerBase` is a named type in the TaleWorlds.MountAndBlade.Objects.Siege namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends ScriptComponentBehavior, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Instance members** (2): `OnCheckForProblems`, `AssignParameters`.
- **Extension points** (1): `AssignParameters`.
- **Data and constants** (3): `_spawnerEditorHelper`, `_spawnerMissionHelper`, `_spawnerMissionHelperFire`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AssignParameters` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `SpawnerEntityMissionHelper _spawnerMissionHelper`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `OnCheckForProblems` | method | Protected — for subclasses only. Takes no arguments. Returns `internal override bool`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `_spawnerEditorHelper` | field | Protected — for subclasses only `SpawnerEntityEditorHelper` field — direct storage with no validation or notification. |
| `_spawnerMissionHelper` | field | Protected — for subclasses only `SpawnerEntityMissionHelper` field — direct storage with no validation or notification. |
| `_spawnerMissionHelperFire` | field | Protected — for subclasses only `SpawnerEntityMissionHelper` field — direct storage with no validation or notification. |

## Usage Example

```csharp
// SpawnerBase exposes no public members in TaleWorlds.MountAndBlade.Objects.Siege.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade/Objects/Siege/SpawnerBase.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/mission-ext/](../) — the other types in this bucket.
