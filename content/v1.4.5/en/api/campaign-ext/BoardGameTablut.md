---
title: "BoardGameTablut"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BoardGameTablut`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BoardGameTablut

**Namespace:** SandBox.BoardGames
**Module:** SandBox.BoardGames
**Type:** `public class BoardGameTablut : BoardGameBase`
**Base:** `BoardGameBase`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.BoardGames/BoardGameTablut.cs`

## Overview

`BoardGameTablut` lives in `SandBox.BoardGames` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.BoardGames` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### PawnInformation
`public struct PawnInformation(int x, int y, bool captured)`

**Purpose:** Handles logic related to `pawn information`.

### BoardInformation
`public struct BoardInformation(ref PawnInformation pawns)`

**Purpose:** Handles logic related to `board information`.

### IsCitadelTile
`public static bool IsCitadelTile(int tileX, int tileY)`

**Purpose:** Handles logic related to `is citadel tile`.

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

### CalculateValidMoves
`public override List<Move> CalculateValidMoves(PawnBase pawn)`

**Purpose:** Handles logic related to `calculate valid moves`.

### SetPawnCaptured
`public override void SetPawnCaptured(PawnBase pawn, bool fake = false)`

**Purpose:** Sets the value or state of `pawn captured`.

### AIMakeMove
`public bool AIMakeMove(Move move)`

**Purpose:** Handles logic related to `a i make move`.

### HasAvailableMoves
`public bool HasAvailableMoves(PawnTablut pawn)`

**Purpose:** Checks whether the current object has/contains `available moves`.

### GetRandomAvailableMove
`public Move GetRandomAvailableMove(PawnTablut pawn)`

**Purpose:** Gets the current value of `random available move`.

### GetWinningMoveIfPresent
`public Move GetWinningMoveIfPresent(BoardGameSide side)`

**Purpose:** Gets the current value of `winning move if present`.

### TakeBoardSnapshot
`public BoardInformation TakeBoardSnapshot()`

**Purpose:** Handles logic related to `take board snapshot`.

### UndoMove
`public void UndoMove(ref BoardInformation board)`

**Purpose:** Handles logic related to `undo move`.

### CheckGameState
`public State CheckGameState()`

**Purpose:** Handles logic related to `check game state`.

## Usage Example

```csharp
var value = new BoardGameTablut();
value.PawnInformation(0, 0, false);
```

## See Also

- [Complete Class Catalog](../catalog)