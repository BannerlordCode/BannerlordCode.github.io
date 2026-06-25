---
title: "BoardGamePuluc"
description: "Auto-generated class reference for BoardGamePuluc."
---
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

**Purpose:** Prepares the resources, state, or bindings required by units.

```csharp
// Obtain an instance of BoardGamePuluc from the subsystem API first
BoardGamePuluc boardGamePuluc = ...;
boardGamePuluc.InitializeUnits();
```

### InitializeTiles
`public override void InitializeTiles()`

**Purpose:** Prepares the resources, state, or bindings required by tiles.

```csharp
// Obtain an instance of BoardGamePuluc from the subsystem API first
BoardGamePuluc boardGamePuluc = ...;
boardGamePuluc.InitializeTiles();
```

### InitializeSound
`public override void InitializeSound()`

**Purpose:** Prepares the resources, state, or bindings required by sound.

```csharp
// Obtain an instance of BoardGamePuluc from the subsystem API first
BoardGamePuluc boardGamePuluc = ...;
boardGamePuluc.InitializeSound();
```

### InitializeDiceBoard
`public override void InitializeDiceBoard()`

**Purpose:** Prepares the resources, state, or bindings required by dice board.

```csharp
// Obtain an instance of BoardGamePuluc from the subsystem API first
BoardGamePuluc boardGamePuluc = ...;
boardGamePuluc.InitializeDiceBoard();
```

### Reset
`public override void Reset()`

**Purpose:** Returns the this instance to its default or initial condition.

```csharp
// Obtain an instance of BoardGamePuluc from the subsystem API first
BoardGamePuluc boardGamePuluc = ...;
boardGamePuluc.Reset();
```

### CalculateValidMoves
`public override List<Move> CalculateValidMoves(PawnBase pawn)`

**Purpose:** Calculates the current value or result of valid moves.

```csharp
// Obtain an instance of BoardGamePuluc from the subsystem API first
BoardGamePuluc boardGamePuluc = ...;
var result = boardGamePuluc.CalculateValidMoves(pawn);
```

### RollDice
`public override void RollDice()`

**Purpose:** Executes the RollDice logic.

```csharp
// Obtain an instance of BoardGamePuluc from the subsystem API first
BoardGamePuluc boardGamePuluc = ...;
boardGamePuluc.RollDice();
```

### AIMakeMove
`public void AIMakeMove(Move move)`

**Purpose:** Executes the AIMakeMove logic.

```csharp
// Obtain an instance of BoardGamePuluc from the subsystem API first
BoardGamePuluc boardGamePuluc = ...;
boardGamePuluc.AIMakeMove(move);
```

### TakeBoardSnapshot
`public BoardGamePuluc.BoardInformation TakeBoardSnapshot()`

**Purpose:** Executes the TakeBoardSnapshot logic.

```csharp
// Obtain an instance of BoardGamePuluc from the subsystem API first
BoardGamePuluc boardGamePuluc = ...;
var result = boardGamePuluc.TakeBoardSnapshot();
```

### UndoMove
`public void UndoMove(ref BoardGamePuluc.BoardInformation board)`

**Purpose:** Executes the UndoMove logic.

```csharp
// Obtain an instance of BoardGamePuluc from the subsystem API first
BoardGamePuluc boardGamePuluc = ...;
boardGamePuluc.UndoMove(board);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BoardGamePuluc boardGamePuluc = ...;
boardGamePuluc.InitializeUnits();
```

## See Also

- [Area Index](../)