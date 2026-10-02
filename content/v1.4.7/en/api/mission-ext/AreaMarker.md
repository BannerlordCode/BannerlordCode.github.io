---
title: "AreaMarker"
description: "AreaMarker — class in TaleWorlds.MountAndBlade.Objects. 12 public members (0 static)."
---

<!-- v147-skeleton -->
# AreaMarker

**Namespace:** `TaleWorlds.MountAndBlade.Objects`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class AreaMarker : MissionObject, ITrackableBase`  
**Base:** `MissionObject, ITrackableBase`  
**Source:** `TaleWorlds.MountAndBlade/Objects/AreaMarker.cs`

## Overview

`AreaMarker` is a named type in the TaleWorlds.MountAndBlade.Objects namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends MissionObject, ITrackableBase, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Instance members** (10): `Tag`, `OnEditorTick`, `OnEditorInit`, `IsPositionInRange`, `GetUsableMachinesInRange`, `GetUsableMachinesWithTagInRange`, ….
- **Extension points** (6): `Tag`, `GetUsableMachinesInRange`, `GetUsableMachinesWithTagInRange`, `GetGameEntitiesWithTagInRange`, `GetName`, `GetPosition`.
- **Data and constants** (2): `AreaIndex`, `CheckToggle`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetGameEntitiesWithTagInRange` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `string tag`. Returns `List<GameEntity>`. Read path: prefer it over reaching for the backing store. |
| `GetName` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `GetPosition` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Returns `Vec3`. Read path: prefer it over reaching for the backing store. |
| `GetUsableMachinesInRange` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `string excludeTag`. Returns `List<UsableMachine>`. Read path: prefer it over reaching for the backing store. |
| `GetUsableMachinesWithTagInRange` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `string tag`. Returns `List<UsableMachine>`. Read path: prefer it over reaching for the backing store. |
| `Tag` | property (virtual) | Virtual — override it to change behaviour for every caller `string` property. Read it for current state; a declared setter writes that state in place. |
| `AreaRadius` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `IsPositionInRange` | method | Instance entry point. Takes 1 argument: `Vec3 position`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnEditorInit` | method | Protected — for subclasses only. Takes no arguments. Returns `internal override void`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnEditorTick` | method | Protected — for subclasses only. Takes 1 argument: `float dt`. Returns `internal override void`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `AreaIndex` | field | Instance entry point `int` field — direct storage with no validation or notification. |
| `CheckToggle` | field | Instance entry point `bool` field — direct storage with no validation or notification. |

## Usage Example

```csharp
// AreaMarker is read through its properties:
//   Tag : string
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 6 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade/Objects/AreaMarker.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/mission-ext/](../) — the other types in this bucket.
