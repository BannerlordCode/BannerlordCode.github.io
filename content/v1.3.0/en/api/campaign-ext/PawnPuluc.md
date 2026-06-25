---
title: "PawnPuluc"
description: "Auto-generated class reference for PawnPuluc."
---
# PawnPuluc

**Namespace:** SandBox.BoardGames.Pawns
**Module:** SandBox.BoardGames
**Type:** `public class PawnPuluc : PawnBase`
**Base:** `PawnBase`
**File:** `SandBox/BoardGames/Pawns/PawnPuluc.cs`

## Overview

`PawnPuluc` lives in `SandBox.BoardGames.Pawns` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.BoardGames.Pawns` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Height` | `public float Height { get; }` |
| `PosBeforeMoving` | `public override Vec3 PosBeforeMoving { get; }` |
| `IsPlaced` | `public override bool IsPlaced { get; set; }` |
| `X` | `public int X { get; set; }` |
| `PawnsBelow` | `public List<PawnPuluc> PawnsBelow { get; }` |
| `InPlay` | `public bool InPlay { get; }` |

## Key Methods

### Reset
`public override void Reset()`

**Purpose:** **Purpose:** Returns the this instance to its default or initial condition.

```csharp
// Obtain an instance of PawnPuluc from the subsystem API first
PawnPuluc pawnPuluc = ...;
pawnPuluc.Reset();
```

### AddGoalPosition
`public override void AddGoalPosition(Vec3 goal)`

**Purpose:** **Purpose:** Adds goal position to the current collection or state.

```csharp
// Obtain an instance of PawnPuluc from the subsystem API first
PawnPuluc pawnPuluc = ...;
pawnPuluc.AddGoalPosition(goal);
```

### MovePawnToGoalPositions
`public override void MovePawnToGoalPositions(bool instantMove, float speed, bool dragged = false)`

**Purpose:** **Purpose:** Moves pawn to goal positions to a new position or state.

```csharp
// Obtain an instance of PawnPuluc from the subsystem API first
PawnPuluc pawnPuluc = ...;
pawnPuluc.MovePawnToGoalPositions(false, 0, false);
```

### SetPawnAtPosition
`public override void SetPawnAtPosition(Vec3 position)`

**Purpose:** **Purpose:** Assigns a new value to pawn at position and updates the object's internal state.

```csharp
// Obtain an instance of PawnPuluc from the subsystem API first
PawnPuluc pawnPuluc = ...;
pawnPuluc.SetPawnAtPosition(position);
```

### EnableCollisionBody
`public override void EnableCollisionBody()`

**Purpose:** **Purpose:** Executes the EnableCollisionBody logic.

```csharp
// Obtain an instance of PawnPuluc from the subsystem API first
PawnPuluc pawnPuluc = ...;
pawnPuluc.EnableCollisionBody();
```

### DisableCollisionBody
`public override void DisableCollisionBody()`

**Purpose:** **Purpose:** Executes the DisableCollisionBody logic.

```csharp
// Obtain an instance of PawnPuluc from the subsystem API first
PawnPuluc pawnPuluc = ...;
pawnPuluc.DisableCollisionBody();
```

### MovePawnBackToSpawn
`public void MovePawnBackToSpawn(bool instantMove, float speed, bool fake = false)`

**Purpose:** **Purpose:** Moves pawn back to spawn to a new position or state.

```csharp
// Obtain an instance of PawnPuluc from the subsystem API first
PawnPuluc pawnPuluc = ...;
pawnPuluc.MovePawnBackToSpawn(false, 0, false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PawnPuluc pawnPuluc = ...;
pawnPuluc.Reset();
```

## See Also

- [Area Index](../)