<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BoardGameBaghChal`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BoardGameBaghChal

**Namespace:** SandBox.BoardGames
**Module:** SandBox.BoardGames
**Type:** `public class BoardGameBaghChal : BoardGameBase`
**Base:** `BoardGameBase`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.BoardGames/BoardGameBaghChal.cs`

## Overview

`BoardGameBaghChal` lives in `SandBox.BoardGames` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.BoardGames` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### BoardInformation
`public struct BoardInformation(ref PawnInformation pawns, ref TileBaseInformation tiles)`

**Purpose:** Handles logic related to `board information`.

### PawnInformation
`public struct PawnInformation(int x, int y, int prevX, int prevY, bool captured, Vec3 position)`

**Purpose:** Handles logic related to `pawn information`.

### InitializeUnits
`public override void InitializeUnits()`

**Purpose:** Initializes the state, resources, or bindings for `units`.

### InitializeTiles
`public override void InitializeTiles()`

**Purpose:** Initializes the state, resources, or bindings for `tiles`.

### InitializeSound
`public override void InitializeSound()`

**Purpose:** Initializes the state, resources, or bindings for `sound`.

### Reset
`public override void Reset()`

**Purpose:** Resets `reset` to its initial state.

### CalculateAllValidMoves
`public override List<List<Move>> CalculateAllValidMoves(BoardGameSide side)`

**Purpose:** Handles logic related to `calculate all valid moves`.

### CalculateValidMoves
`public override List<Move> CalculateValidMoves(PawnBase pawn)`

**Purpose:** Handles logic related to `calculate valid moves`.

### SetPawnCaptured
`public override void SetPawnCaptured(PawnBase pawn, bool fake = false)`

**Purpose:** Sets the value or state of `pawn captured`.

### AIMakeMove
`public void AIMakeMove(Move move)`

**Purpose:** Handles logic related to `a i make move`.

### TakeBoardSnapshot
`public BoardInformation TakeBoardSnapshot()`

**Purpose:** Handles logic related to `take board snapshot`.

### UndoMove
`public void UndoMove(ref BoardInformation board)`

**Purpose:** Handles logic related to `undo move`.

### GetANonePlacedGoat
`public PawnBaghChal GetANonePlacedGoat()`

**Purpose:** Gets the current value of `a none placed goat`.

## Usage Example

```csharp
var value = new BoardGameBaghChal();
value.BoardInformation(pawns, tiles);
```

## See Also

- [Complete Class Catalog](../catalog)