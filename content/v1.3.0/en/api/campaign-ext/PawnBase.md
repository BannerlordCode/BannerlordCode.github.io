---
title: "PawnBase"
description: "Auto-generated class reference for PawnBase."
---
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

**Purpose:** Returns the this instance to its default or initial condition.

```csharp
// Obtain an instance of PawnBase from the subsystem API first
PawnBase pawnBase = ...;
pawnBase.Reset();
```

### AddGoalPosition
`public virtual void AddGoalPosition(Vec3 goal)`

**Purpose:** Adds goal position to the current collection or state.

```csharp
// Obtain an instance of PawnBase from the subsystem API first
PawnBase pawnBase = ...;
pawnBase.AddGoalPosition(goal);
```

### SetPawnAtPosition
`public virtual void SetPawnAtPosition(Vec3 position)`

**Purpose:** Assigns a new value to pawn at position and updates the object's internal state.

```csharp
// Obtain an instance of PawnBase from the subsystem API first
PawnBase pawnBase = ...;
pawnBase.SetPawnAtPosition(position);
```

### MovePawnToGoalPositions
`public virtual void MovePawnToGoalPositions(bool instantMove, float speed, bool dragged = false)`

**Purpose:** Moves pawn to goal positions to a new position or state.

```csharp
// Obtain an instance of PawnBase from the subsystem API first
PawnBase pawnBase = ...;
pawnBase.MovePawnToGoalPositions(false, 0, false);
```

### EnableCollisionBody
`public virtual void EnableCollisionBody()`

**Purpose:** Executes the EnableCollisionBody logic.

```csharp
// Obtain an instance of PawnBase from the subsystem API first
PawnBase pawnBase = ...;
pawnBase.EnableCollisionBody();
```

### DisableCollisionBody
`public virtual void DisableCollisionBody()`

**Purpose:** Executes the DisableCollisionBody logic.

```csharp
// Obtain an instance of PawnBase from the subsystem API first
PawnBase pawnBase = ...;
pawnBase.DisableCollisionBody();
```

### Tick
`public void Tick(float dt)`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of PawnBase from the subsystem API first
PawnBase pawnBase = ...;
pawnBase.Tick(0);
```

### MovePawnToGoalPositionsDelayed
`public void MovePawnToGoalPositionsDelayed(bool instantMove, float speed, bool dragged, float delay)`

**Purpose:** Moves pawn to goal positions delayed to a new position or state.

```csharp
// Obtain an instance of PawnBase from the subsystem API first
PawnBase pawnBase = ...;
pawnBase.MovePawnToGoalPositionsDelayed(false, 0, false, 0);
```

### SetPlayerOne
`public void SetPlayerOne(bool playerOne)`

**Purpose:** Assigns a new value to player one and updates the object's internal state.

```csharp
// Obtain an instance of PawnBase from the subsystem API first
PawnBase pawnBase = ...;
pawnBase.SetPlayerOne(false);
```

### ClearGoalPositions
`public void ClearGoalPositions()`

**Purpose:** Removes all goal positions from the this instance.

```csharp
// Obtain an instance of PawnBase from the subsystem API first
PawnBase pawnBase = ...;
pawnBase.ClearGoalPositions();
```

### UpdatePawnPosition
`public void UpdatePawnPosition()`

**Purpose:** Recalculates and stores the latest representation of pawn position.

```csharp
// Obtain an instance of PawnBase from the subsystem API first
PawnBase pawnBase = ...;
pawnBase.UpdatePawnPosition();
```

### PlayPawnSelectSound
`public void PlayPawnSelectSound()`

**Purpose:** Executes the PlayPawnSelectSound logic.

```csharp
// Obtain an instance of PawnBase from the subsystem API first
PawnBase pawnBase = ...;
pawnBase.PlayPawnSelectSound();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
PawnBase instance = ...;
```

## See Also

- [Area Index](../)