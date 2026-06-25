---
title: "BoardGameTablut"
description: "Auto-generated class reference for BoardGameTablut."
---
# BoardGameTablut

**Namespace:** SandBox.BoardGames
**Module:** SandBox.BoardGames
**Type:** `public class BoardGameTablut : BoardGameBase`
**Base:** `BoardGameBase`
**File:** `Modules.SandBox/SandBox/SandBox.BoardGames/BoardGameTablut.cs`

## Overview

`BoardGameTablut` lives in `SandBox.BoardGames` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.BoardGames` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### PawnInformation
`public struct PawnInformation(int x, int y, bool captured)`

**Purpose:** Executes the PawnInformation logic.

```csharp
// Obtain an instance of BoardGameTablut from the subsystem API first
BoardGameTablut boardGameTablut = ...;
var result = boardGameTablut.PawnInformation(0, 0, false);
```

### BoardInformation
`public struct BoardInformation(ref PawnInformation pawns)`

**Purpose:** Executes the BoardInformation logic.

```csharp
// Obtain an instance of BoardGameTablut from the subsystem API first
BoardGameTablut boardGameTablut = ...;
var result = boardGameTablut.BoardInformation(pawns);
```

### IsCitadelTile
`public static bool IsCitadelTile(int tileX, int tileY)`

**Purpose:** Determines whether the this instance is in the citadel tile state or condition.

```csharp
// Static call; no instance required
BoardGameTablut.IsCitadelTile(0, 0);
```

### InitializeUnits
`public override void InitializeUnits()`

**Purpose:** Prepares the resources, state, or bindings required by units.

```csharp
// Obtain an instance of BoardGameTablut from the subsystem API first
BoardGameTablut boardGameTablut = ...;
boardGameTablut.InitializeUnits();
```

### InitializeTiles
`public override void InitializeTiles()`

**Purpose:** Prepares the resources, state, or bindings required by tiles.

```csharp
// Obtain an instance of BoardGameTablut from the subsystem API first
BoardGameTablut boardGameTablut = ...;
boardGameTablut.InitializeTiles();
```

### InitializeSound
`public override void InitializeSound()`

**Purpose:** Prepares the resources, state, or bindings required by sound.

```csharp
// Obtain an instance of BoardGameTablut from the subsystem API first
BoardGameTablut boardGameTablut = ...;
boardGameTablut.InitializeSound();
```

### Reset
`public override void Reset()`

**Purpose:** Returns the this instance to its default or initial condition.

```csharp
// Obtain an instance of BoardGameTablut from the subsystem API first
BoardGameTablut boardGameTablut = ...;
boardGameTablut.Reset();
```

### CalculateValidMoves
`public override List<Move> CalculateValidMoves(PawnBase pawn)`

**Purpose:** Calculates the current value or result of valid moves.

```csharp
// Obtain an instance of BoardGameTablut from the subsystem API first
BoardGameTablut boardGameTablut = ...;
var result = boardGameTablut.CalculateValidMoves(pawn);
```

### SetPawnCaptured
`public override void SetPawnCaptured(PawnBase pawn, bool fake = false)`

**Purpose:** Assigns a new value to pawn captured and updates the object's internal state.

```csharp
// Obtain an instance of BoardGameTablut from the subsystem API first
BoardGameTablut boardGameTablut = ...;
boardGameTablut.SetPawnCaptured(pawn, false);
```

### AIMakeMove
`public bool AIMakeMove(Move move)`

**Purpose:** Executes the AIMakeMove logic.

```csharp
// Obtain an instance of BoardGameTablut from the subsystem API first
BoardGameTablut boardGameTablut = ...;
var result = boardGameTablut.AIMakeMove(move);
```

### HasAvailableMoves
`public bool HasAvailableMoves(PawnTablut pawn)`

**Purpose:** Determines whether the this instance already holds available moves.

```csharp
// Obtain an instance of BoardGameTablut from the subsystem API first
BoardGameTablut boardGameTablut = ...;
var result = boardGameTablut.HasAvailableMoves(pawn);
```

### GetRandomAvailableMove
`public Move GetRandomAvailableMove(PawnTablut pawn)`

**Purpose:** Reads and returns the random available move value held by the this instance.

```csharp
// Obtain an instance of BoardGameTablut from the subsystem API first
BoardGameTablut boardGameTablut = ...;
var result = boardGameTablut.GetRandomAvailableMove(pawn);
```

### GetWinningMoveIfPresent
`public Move GetWinningMoveIfPresent(BoardGameSide side)`

**Purpose:** Reads and returns the winning move if present value held by the this instance.

```csharp
// Obtain an instance of BoardGameTablut from the subsystem API first
BoardGameTablut boardGameTablut = ...;
var result = boardGameTablut.GetWinningMoveIfPresent(side);
```

### TakeBoardSnapshot
`public BoardInformation TakeBoardSnapshot()`

**Purpose:** Executes the TakeBoardSnapshot logic.

```csharp
// Obtain an instance of BoardGameTablut from the subsystem API first
BoardGameTablut boardGameTablut = ...;
var result = boardGameTablut.TakeBoardSnapshot();
```

### UndoMove
`public void UndoMove(ref BoardInformation board)`

**Purpose:** Executes the UndoMove logic.

```csharp
// Obtain an instance of BoardGameTablut from the subsystem API first
BoardGameTablut boardGameTablut = ...;
boardGameTablut.UndoMove(board);
```

### CheckGameState
`public State CheckGameState()`

**Purpose:** Verifies whether game state holds true for the this instance.

```csharp
// Obtain an instance of BoardGameTablut from the subsystem API first
BoardGameTablut boardGameTablut = ...;
var result = boardGameTablut.CheckGameState();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BoardGameTablut boardGameTablut = ...;
boardGameTablut.PawnInformation(0, 0, false);
```

## See Also

- [Area Index](../)