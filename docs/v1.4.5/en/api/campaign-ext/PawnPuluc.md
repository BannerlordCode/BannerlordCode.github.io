<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PawnPuluc`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PawnPuluc

**Namespace:** SandBox.BoardGames.Pawns
**Module:** SandBox.BoardGames
**Type:** `public class PawnPuluc : PawnBase`
**Base:** `PawnBase`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.BoardGames.Pawns/PawnPuluc.cs`

## Overview

`PawnPuluc` lives in `SandBox.BoardGames.Pawns` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.BoardGames.Pawns` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Height` | `public float Height { get; }` |
| `IsPlaced` | `public override bool IsPlaced { get; set; }` |
| `X` | `public int X { get; set; }` |
| `PawnsBelow` | `public List<PawnPuluc> PawnsBelow { get; }` |
| `InPlay` | `public bool InPlay { get; }` |

## Key Methods

### Reset
`public override void Reset()`

**Purpose:** Resets `reset` to its initial state.

### AddGoalPosition
`public override void AddGoalPosition(Vec3 goal)`

**Purpose:** Adds `goal position` to the current collection or state.

### MovePawnToGoalPositions
`public override void MovePawnToGoalPositions(bool instantMove, float speed, bool dragged = false)`

**Purpose:** Handles logic related to `move pawn to goal positions`.

### SetPawnAtPosition
`public override void SetPawnAtPosition(Vec3 position)`

**Purpose:** Sets the value or state of `pawn at position`.

### EnableCollisionBody
`public override void EnableCollisionBody()`

**Purpose:** Handles logic related to `enable collision body`.

### DisableCollisionBody
`public override void DisableCollisionBody()`

**Purpose:** Handles logic related to `disable collision body`.

### MovePawnBackToSpawn
`public void MovePawnBackToSpawn(bool instantMove, float speed, bool fake = false)`

**Purpose:** Handles logic related to `move pawn back to spawn`.

## Usage Example

```csharp
var value = new PawnPuluc();
value.Reset();
```

## See Also

- [Complete Class Catalog](../catalog)