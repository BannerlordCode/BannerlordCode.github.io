---
title: "PawnBase"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PawnBase`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PawnBase

**Namespace:** SandBox.BoardGames.Pawns
**Module:** SandBox.BoardGames
**Type:** `public abstract class PawnBase`
**Base:** none
**File:** `SandBox/BoardGames/Pawns/PawnBase.cs`

## Overview

`PawnBase` lives in `SandBox.BoardGames.Pawns` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.BoardGames.Pawns` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PawnMoveSoundCodeID` | `public static int PawnMoveSoundCodeID { get; set; }` |
| `PawnSelectSoundCodeID` | `public static int PawnSelectSoundCodeID { get; set; }` |
| `PawnTapSoundCodeID` | `public static int PawnTapSoundCodeID { get; set; }` |
| `PawnRemoveSoundCodeID` | `public static int PawnRemoveSoundCodeID { get; set; }` |
| `IsPlaced` | `public abstract bool IsPlaced { get; set; }` |
| `PosBeforeMoving` | `public virtual Vec3 PosBeforeMoving { get; set; }` |
| `Entity` | `public GameEntity Entity { get; }` |
| `Captured` | `public bool Captured { get; }` |
| `MovingToDifferentTile` | `public bool MovingToDifferentTile { get; }` |
| `Moving` | `public bool Moving { get; }` |
| `PlayerOne` | `public bool PlayerOne { get; }` |
| `HasAnyGoalPosition` | `public bool HasAnyGoalPosition { get; }` |

## Key Methods

### Reset
`public virtual void Reset()`

**Purpose:** Resets `reset` to its initial state.

### AddGoalPosition
`public virtual void AddGoalPosition(Vec3 goal)`

**Purpose:** Adds `goal position` to the current collection or state.

### SetPawnAtPosition
`public virtual void SetPawnAtPosition(Vec3 position)`

**Purpose:** Sets the value or state of `pawn at position`.

### MovePawnToGoalPositions
`public virtual void MovePawnToGoalPositions(bool instantMove, float speed, bool dragged = false)`

**Purpose:** Handles logic related to `move pawn to goal positions`.

### EnableCollisionBody
`public virtual void EnableCollisionBody()`

**Purpose:** Handles logic related to `enable collision body`.

### DisableCollisionBody
`public virtual void DisableCollisionBody()`

**Purpose:** Handles logic related to `disable collision body`.

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### MovePawnToGoalPositionsDelayed
`public void MovePawnToGoalPositionsDelayed(bool instantMove, float speed, bool dragged, float delay)`

**Purpose:** Handles logic related to `move pawn to goal positions delayed`.

### SetPlayerOne
`public void SetPlayerOne(bool playerOne)`

**Purpose:** Sets the value or state of `player one`.

### ClearGoalPositions
`public void ClearGoalPositions()`

**Purpose:** Handles logic related to `clear goal positions`.

### UpdatePawnPosition
`public void UpdatePawnPosition()`

**Purpose:** Updates the state or data of `pawn position`.

### PlayPawnSelectSound
`public void PlayPawnSelectSound()`

**Purpose:** Handles logic related to `play pawn select sound`.

## Usage Example

```csharp
var implementation = new CustomPawnBase();
```

## See Also

- [Complete Class Catalog](../catalog)