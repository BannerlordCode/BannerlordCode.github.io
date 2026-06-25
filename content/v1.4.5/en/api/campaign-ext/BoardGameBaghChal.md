---
title: "BoardGameBaghChal"
description: "Auto-generated class reference for BoardGameBaghChal."
---
# BoardGameBaghChal

**Namespace:** SandBox.BoardGames
**Module:** SandBox.BoardGames
**Type:** `public class BoardGameBaghChal : BoardGameBase`
**Base:** `BoardGameBase`
**File:** `Modules.SandBox/SandBox/SandBox.BoardGames/BoardGameBaghChal.cs`

## Overview

`BoardGameBaghChal` lives in `SandBox.BoardGames` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.BoardGames` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### BoardInformation
`public struct BoardInformation(ref PawnInformation pawns, ref TileBaseInformation tiles)`

**Purpose:** **Purpose:** Executes the BoardInformation logic.

```csharp
// Obtain an instance of BoardGameBaghChal from the subsystem API first
BoardGameBaghChal boardGameBaghChal = ...;
var result = boardGameBaghChal.BoardInformation(pawns, tiles);
```

### PawnInformation
`public struct PawnInformation(int x, int y, int prevX, int prevY, bool captured, Vec3 position)`

**Purpose:** **Purpose:** Executes the PawnInformation logic.

```csharp
// Obtain an instance of BoardGameBaghChal from the subsystem API first
BoardGameBaghChal boardGameBaghChal = ...;
var result = boardGameBaghChal.PawnInformation(0, 0, 0, 0, false, position);
```

### InitializeUnits
`public override void InitializeUnits()`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by units.

```csharp
// Obtain an instance of BoardGameBaghChal from the subsystem API first
BoardGameBaghChal boardGameBaghChal = ...;
boardGameBaghChal.InitializeUnits();
```

### InitializeTiles
`public override void InitializeTiles()`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by tiles.

```csharp
// Obtain an instance of BoardGameBaghChal from the subsystem API first
BoardGameBaghChal boardGameBaghChal = ...;
boardGameBaghChal.InitializeTiles();
```

### InitializeSound
`public override void InitializeSound()`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by sound.

```csharp
// Obtain an instance of BoardGameBaghChal from the subsystem API first
BoardGameBaghChal boardGameBaghChal = ...;
boardGameBaghChal.InitializeSound();
```

### Reset
`public override void Reset()`

**Purpose:** **Purpose:** Returns the this instance to its default or initial condition.

```csharp
// Obtain an instance of BoardGameBaghChal from the subsystem API first
BoardGameBaghChal boardGameBaghChal = ...;
boardGameBaghChal.Reset();
```

### CalculateAllValidMoves
`public override List<List<Move>> CalculateAllValidMoves(BoardGameSide side)`

**Purpose:** **Purpose:** Calculates the current value or result of all valid moves.

```csharp
// Obtain an instance of BoardGameBaghChal from the subsystem API first
BoardGameBaghChal boardGameBaghChal = ...;
var result = boardGameBaghChal.CalculateAllValidMoves(side);
```

### CalculateValidMoves
`public override List<Move> CalculateValidMoves(PawnBase pawn)`

**Purpose:** **Purpose:** Calculates the current value or result of valid moves.

```csharp
// Obtain an instance of BoardGameBaghChal from the subsystem API first
BoardGameBaghChal boardGameBaghChal = ...;
var result = boardGameBaghChal.CalculateValidMoves(pawn);
```

### SetPawnCaptured
`public override void SetPawnCaptured(PawnBase pawn, bool fake = false)`

**Purpose:** **Purpose:** Assigns a new value to pawn captured and updates the object's internal state.

```csharp
// Obtain an instance of BoardGameBaghChal from the subsystem API first
BoardGameBaghChal boardGameBaghChal = ...;
boardGameBaghChal.SetPawnCaptured(pawn, false);
```

### AIMakeMove
`public void AIMakeMove(Move move)`

**Purpose:** **Purpose:** Executes the AIMakeMove logic.

```csharp
// Obtain an instance of BoardGameBaghChal from the subsystem API first
BoardGameBaghChal boardGameBaghChal = ...;
boardGameBaghChal.AIMakeMove(move);
```

### TakeBoardSnapshot
`public BoardInformation TakeBoardSnapshot()`

**Purpose:** **Purpose:** Executes the TakeBoardSnapshot logic.

```csharp
// Obtain an instance of BoardGameBaghChal from the subsystem API first
BoardGameBaghChal boardGameBaghChal = ...;
var result = boardGameBaghChal.TakeBoardSnapshot();
```

### UndoMove
`public void UndoMove(ref BoardInformation board)`

**Purpose:** **Purpose:** Executes the UndoMove logic.

```csharp
// Obtain an instance of BoardGameBaghChal from the subsystem API first
BoardGameBaghChal boardGameBaghChal = ...;
boardGameBaghChal.UndoMove(board);
```

### GetANonePlacedGoat
`public PawnBaghChal GetANonePlacedGoat()`

**Purpose:** **Purpose:** Reads and returns the a none placed goat value held by the this instance.

```csharp
// Obtain an instance of BoardGameBaghChal from the subsystem API first
BoardGameBaghChal boardGameBaghChal = ...;
var result = boardGameBaghChal.GetANonePlacedGoat();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BoardGameBaghChal boardGameBaghChal = ...;
boardGameBaghChal.BoardInformation(pawns, tiles);
```

## See Also

- [Area Index](../)