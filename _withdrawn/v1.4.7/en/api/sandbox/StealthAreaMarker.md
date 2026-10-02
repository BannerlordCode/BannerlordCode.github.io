---
title: "StealthAreaMarker"
description: "StealthAreaMarker — class in SandBox.Objects.AreaMarkers. 4 public members (0 static)."
---

<!-- v147-skeleton -->
# StealthAreaMarker

**Namespace:** `SandBox.Objects.AreaMarkers`  
**Module:** `SandBox`  
**Type:** `public class StealthAreaMarker : AreaMarker`  
**Base:** `AreaMarker`  
**Source:** `SandBox/Objects/AreaMarkers/StealthAreaMarker.cs`

## Overview

`StealthAreaMarker` is a named type in the SandBox.Objects.AreaMarkers namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends AreaMarker, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Instance members** (3): `ReinforcementAllyGroupSpawnPoint`, `WaitPoint`, `AfterMissionStart`.
- **Extension points** (1): `AfterMissionStart`.
- **Data and constants** (1): `ReinforcementAllyGroupId`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AfterMissionStart` | method (override) | Overrides the base member. Takes no arguments. |
| `ReinforcementAllyGroupSpawnPoint` | property | Instance entry point `GameEntity` property. Read it for current state; a declared setter writes that state in place. |
| `WaitPoint` | property | Instance entry point `GameEntity` property. Read it for current state; a declared setter writes that state in place. |
| `ReinforcementAllyGroupId` | field | Instance entry point `string` field — direct storage with no validation or notification. |

## Usage Example

```csharp
// StealthAreaMarker is read through its properties:
//   ReinforcementAllyGroupSpawnPoint : GameEntity
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/Objects/AreaMarkers/StealthAreaMarker.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [AreaMarker](../../mission-ext/AreaMarker/) — `TaleWorlds.MountAndBlade.Objects`.

Section: [api/sandbox/](../) — the other types in this bucket.
