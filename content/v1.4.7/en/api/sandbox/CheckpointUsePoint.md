---
title: "CheckpointUsePoint"
description: "CheckpointUsePoint — class in SandBox.Objects.Usables. 7 public members (0 static)."
---

<!-- v147-skeleton -->
# CheckpointUsePoint

**Namespace:** `SandBox.Objects.Usables`  
**Module:** `SandBox`  
**Type:** `public class CheckpointUsePoint : UsableMachine`  
**Base:** `UsableMachine`  
**Source:** `SandBox/Objects/Usables/CheckpointUsePoint.cs`

## Overview

`CheckpointUsePoint` is a named type in the SandBox.Objects.Usables namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends UsableMachine, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Instance members** (5): `OnInit`, `AfterMissionStart`, `OnTick`, `GetActionTextForStandingPoint`, `GetDescriptionText`.
- **Extension points** (5): `OnInit`, `AfterMissionStart`, `OnTick`, `GetActionTextForStandingPoint`, `GetDescriptionText`.
- **Data and constants** (2): `CheckpointSpawnPointTag`, `UniqueId`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AfterMissionStart` | method (override) | Overrides the base member. Takes no arguments. |
| `GetActionTextForStandingPoint` | method (override) | Overrides the base member. Takes 1 argument: `UsableMissionObject usableGameObject`. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `GetDescriptionText` | method (override) | Overrides the base member. Takes 1 argument: `WeakGameEntity gameEntity`. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `OnInit` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `CheckpointSpawnPointTag` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `UniqueId` | field | Instance entry point `int` field — direct storage with no validation or notification. |

## Usage Example

```csharp
// CheckpointUsePoint exposes no public members in SandBox.Objects.Usables.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 5 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/Objects/Usables/CheckpointUsePoint.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [CheckpointMissionLogic](../CheckpointMissionLogic/) — `SandBox.Missions`.

Section: [api/sandbox/](../) — the other types in this bucket.
