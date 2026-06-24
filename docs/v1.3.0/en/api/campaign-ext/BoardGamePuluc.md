<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BoardGamePuluc`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BoardGamePuluc

**Namespace:** SandBox.BoardGames
**Module:** SandBox.BoardGames
**Type:** `public class BoardGamePuluc : BoardGameBase`
**Base:** `BoardGameBase`
**File:** `SandBox/BoardGames/BoardGamePuluc.cs`

## Overview

`BoardGamePuluc` lives in `SandBox.BoardGames` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.BoardGames` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TileCount` | `public override int TileCount { get; }` |

## Key Methods

### InitializeUnits
`public override void InitializeUnits()`

**Purpose:** Initializes the state, resources, or bindings for `units`.

### InitializeTiles
`public override void InitializeTiles()`

**Purpose:** Initializes the state, resources, or bindings for `tiles`.

### InitializeSound
`public override void InitializeSound()`

**Purpose:** Initializes the state, resources, or bindings for `sound`.

### InitializeDiceBoard
`public override void InitializeDiceBoard()`

**Purpose:** Initializes the state, resources, or bindings for `dice board`.

### Reset
`public override void Reset()`

**Purpose:** Resets `reset` to its initial state.

### CalculateValidMoves
`public override List<Move> CalculateValidMoves(PawnBase pawn)`

**Purpose:** Handles logic related to `calculate valid moves`.

### RollDice
`public override void RollDice()`

**Purpose:** Handles logic related to `roll dice`.

### AIMakeMove
`public void AIMakeMove(Move move)`

**Purpose:** Handles logic related to `a i make move`.

### TakeBoardSnapshot
`public BoardGamePuluc.BoardInformation TakeBoardSnapshot()`

**Purpose:** Handles logic related to `take board snapshot`.

### UndoMove
`public void UndoMove(ref BoardGamePuluc.BoardInformation board)`

**Purpose:** Handles logic related to `undo move`.

## Usage Example

```csharp
var value = new BoardGamePuluc();
value.InitializeUnits();
```

## See Also

- [Complete Class Catalog](../catalog)