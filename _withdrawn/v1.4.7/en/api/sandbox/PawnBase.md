---
title: "PawnBase"
description: "PawnBase — class in SandBox.BoardGames.Pawns. 27 public members (4 static)."
---

<!-- v147-skeleton -->
# PawnBase

**Namespace:** `SandBox.BoardGames.Pawns`  
**Module:** `SandBox`  
**Type:** `public abstract class PawnBase`  
**Source:** `SandBox/BoardGames/Pawns/PawnBase.cs`

## Overview

`PawnBase` is a named type in the SandBox.BoardGames.Pawns namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `PawnBase`.
- **Static entry points** (4): `PawnMoveSoundCodeID`, `PawnSelectSoundCodeID`, `PawnTapSoundCodeID`, `PawnRemoveSoundCodeID`.
- **Instance members** (21): `IsPlaced`, `PosBeforeMoving`, `Entity`, `GoalPositions`, `Captured`, `MovingToDifferentTile`, ….
- **Extension points** (8): `IsPlaced`, `PosBeforeMoving`, `Reset`, `AddGoalPosition`, `SetPawnAtPosition`, `MovePawnToGoalPositions`, ….
- **Data and constants** (1): `PosBeforeMovingBase`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `PawnMoveSoundCodeID` | property (static) | Static entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `PawnRemoveSoundCodeID` | property (static) | Static entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `PawnSelectSoundCodeID` | property (static) | Static entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `PawnTapSoundCodeID` | property (static) | Static entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `AddGoalPosition` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `Vec3 goal`. Adds to the collection or relation this type owns. |
| `DisableCollisionBody` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. |
| `EnableCollisionBody` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. |
| `IsPlaced` | property (abstract) | Abstract — a subclass must supply it `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `MovePawnToGoalPositions` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 3 arguments: `bool instantMove`, `float speed`, `bool dragged`. |
| `PosBeforeMoving` | property (virtual) | Virtual — override it to change behaviour for every caller `Vec3` property. Read it for current state; a declared setter writes that state in place. |
| `Reset` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. |
| `SetPawnAtPosition` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `Vec3 position`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `Captured` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `ClearGoalPositions` | method | Instance entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `Entity` | property | Instance entry point `GameEntity` property. Read it for current state; a declared setter writes that state in place. |
| `HasAnyGoalPosition` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `MovePawnToGoalPositionsDelayed` | method | Instance entry point. Takes 4 arguments: `bool instantMove`, `float speed`, `bool dragged`, `float delay`. |
| `Moving` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `MovingToDifferentTile` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `PlayerOne` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `PlayPawnSelectSound` | method | Instance entry point. Takes no arguments. |
| `SetPlayerOne` | method | Instance entry point. Takes 1 argument: `bool playerOne`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `Tick` | method | Instance entry point. Takes 1 argument: `float dt`. Called from the owner’s update loop — do not assume a frame boundary. |
| `UpdatePawnPosition` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |

- Constructed as `protected PawnBase(GameEntity entity, bool playerOne)`.

3 further public members follow the same patterns.
## Usage Example

```csharp
// PawnBase is read through its properties:
//   IsPlaced : bool
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 8 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/BoardGames/Pawns/PawnBase.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/sandbox/](../) — the other types in this bucket.
