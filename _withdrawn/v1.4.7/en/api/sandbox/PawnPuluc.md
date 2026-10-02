---
title: "PawnPuluc"
description: "PawnPuluc — class in SandBox.BoardGames.Pawns. 20 public members (0 static)."
---

<!-- v147-skeleton -->
# PawnPuluc

**Namespace:** `SandBox.BoardGames.Pawns`  
**Module:** `SandBox`  
**Type:** `public class PawnPuluc : PawnBase`  
**Base:** `PawnBase`  
**Source:** `SandBox/BoardGames/Pawns/PawnPuluc.cs`

## Overview

`PawnPuluc` is a named type in the SandBox.BoardGames.Pawns namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends PawnBase, so the members it does not redeclare are inherited from there. 9 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `PawnPuluc`.
- **Instance members** (16): `Height`, `PosBeforeMoving`, `IsPlaced`, `X`, `PawnsBelow`, `InPlay`, ….
- **Extension points** (8): `PosBeforeMoving`, `IsPlaced`, `Reset`, `AddGoalPosition`, `MovePawnToGoalPositions`, `SetPawnAtPosition`, ….
- **Data and constants** (3): `State`, `CapturedBy`, `SpawnPos`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AddGoalPosition` | method (override) | Overrides the base member. Takes 1 argument: `Vec3 goal`. Adds to the collection or relation this type owns. |
| `DisableCollisionBody` | method (override) | Overrides the base member. Takes no arguments. |
| `EnableCollisionBody` | method (override) | Overrides the base member. Takes no arguments. |
| `IsPlaced` | property (override) | Overrides the base member `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `MovePawnToGoalPositions` | method (override) | Overrides the base member. Takes 3 arguments: `bool instantMove`, `float speed`, `bool dragged`. |
| `PosBeforeMoving` | property (override) | Overrides the base member `Vec3` property. Read it for current state; a declared setter writes that state in place. |
| `Reset` | method (override) | Overrides the base member. Takes no arguments. |
| `SetPawnAtPosition` | method (override) | Overrides the base member. Takes 1 argument: `Vec3 position`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `Height` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `InPlay` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `IsInSpawn` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsTopPawn` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `MovementState` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `MovePawnBackToSpawn` | method | Instance entry point. Takes 3 arguments: `bool instantMove`, `float speed`, `bool fake`. |
| `PawnsBelow` | property | Instance entry point `List<PawnPuluc>` property. Read it for current state; a declared setter writes that state in place. |
| `X` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `PawnPuluc` | ctor | Instance entry point. Takes 2 arguments: `GameEntity entity`, `bool playerOne`. Returns ``. |
| `CapturedBy` | field | Instance entry point `PawnPuluc` field — direct storage with no validation or notification. |
| `SpawnPos` | field | Instance entry point `Vec3` field — direct storage with no validation or notification. |
| `State` | field | Instance entry point `PawnPuluc.MovementState` field — direct storage with no validation or notification. |

- Constructed as `public PawnPuluc(GameEntity entity, bool playerOne)`.

## Usage Example

```csharp
var pawnPuluc = new PawnPuluc(entity, playerOne);
pawnPuluc.Reset();
// Read current state through pawnPuluc.Height.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 8 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/BoardGames/Pawns/PawnPuluc.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [PawnBase](../PawnBase/) — `SandBox.BoardGames.Pawns`.

Section: [api/sandbox/](../) — the other types in this bucket.
