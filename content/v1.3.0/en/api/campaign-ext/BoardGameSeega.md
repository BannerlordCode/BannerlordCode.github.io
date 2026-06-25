---
title: "BoardGameSeega"
description: "Auto-generated class reference for BoardGameSeega."
---
# BoardGameSeega

**Namespace:** SandBox.BoardGames
**Module:** SandBox.BoardGames
**Type:** `public class BoardGameSeega : BoardGameBase`
**Base:** `BoardGameBase`
**File:** `SandBox/BoardGames/BoardGameSeega.cs`

## Overview

`BoardGameSeega` lives in `SandBox.BoardGames` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.BoardGames` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TileCount` | `public override int TileCount { get; }` |

## Key Methods

### InitializeUnits
`public override void InitializeUnits()`

**Purpose:** Prepares the resources, state, or bindings required by units.

```csharp
// Obtain an instance of BoardGameSeega from the subsystem API first
BoardGameSeega boardGameSeega = ...;
boardGameSeega.InitializeUnits();
```

### InitializeTiles
`public override void InitializeTiles()`

**Purpose:** Prepares the resources, state, or bindings required by tiles.

```csharp
// Obtain an instance of BoardGameSeega from the subsystem API first
BoardGameSeega boardGameSeega = ...;
boardGameSeega.InitializeTiles();
```

### InitializeSound
`public override void InitializeSound()`

**Purpose:** Prepares the resources, state, or bindings required by sound.

```csharp
// Obtain an instance of BoardGameSeega from the subsystem API first
BoardGameSeega boardGameSeega = ...;
boardGameSeega.InitializeSound();
```

### Reset
`public override void Reset()`

**Purpose:** Returns the this instance to its default or initial condition.

```csharp
// Obtain an instance of BoardGameSeega from the subsystem API first
BoardGameSeega boardGameSeega = ...;
boardGameSeega.Reset();
```

### CalculateValidMoves
`public override List<Move> CalculateValidMoves(PawnBase pawn)`

**Purpose:** Calculates the current value or result of valid moves.

```csharp
// Obtain an instance of BoardGameSeega from the subsystem API first
BoardGameSeega boardGameSeega = ...;
var result = boardGameSeega.CalculateValidMoves(pawn);
```

### SetPawnCaptured
`public override void SetPawnCaptured(PawnBase pawn, bool aiSimulation = false)`

**Purpose:** Assigns a new value to pawn captured and updates the object's internal state.

```csharp
// Obtain an instance of BoardGameSeega from the subsystem API first
BoardGameSeega boardGameSeega = ...;
boardGameSeega.SetPawnCaptured(pawn, false);
```

### AIMakeMove
`public void AIMakeMove(Move move)`

**Purpose:** Executes the AIMakeMove logic.

```csharp
// Obtain an instance of BoardGameSeega from the subsystem API first
BoardGameSeega boardGameSeega = ...;
boardGameSeega.AIMakeMove(move);
```

### GetBlockingPawns
`public Dictionary<PawnBase, int> GetBlockingPawns(bool playerOneBlocked)`

**Purpose:** Reads and returns the blocking pawns value held by the this instance.

```csharp
// Obtain an instance of BoardGameSeega from the subsystem API first
BoardGameSeega boardGameSeega = ...;
var result = boardGameSeega.GetBlockingPawns(false);
```

### TakeBoardSnapshot
`public BoardGameSeega.BoardInformation TakeBoardSnapshot()`

**Purpose:** Executes the TakeBoardSnapshot logic.

```csharp
// Obtain an instance of BoardGameSeega from the subsystem API first
BoardGameSeega boardGameSeega = ...;
var result = boardGameSeega.TakeBoardSnapshot();
```

### UndoMove
`public void UndoMove(ref BoardGameSeega.BoardInformation board)`

**Purpose:** Executes the UndoMove logic.

```csharp
// Obtain an instance of BoardGameSeega from the subsystem API first
BoardGameSeega boardGameSeega = ...;
boardGameSeega.UndoMove(board);
```

### GetTile
`public TileBase GetTile(int x, int y)`

**Purpose:** Reads and returns the tile value held by the this instance.

```csharp
// Obtain an instance of BoardGameSeega from the subsystem API first
BoardGameSeega boardGameSeega = ...;
var result = boardGameSeega.GetTile(0, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BoardGameSeega boardGameSeega = ...;
boardGameSeega.InitializeUnits();
```

## See Also

- [Area Index](../)