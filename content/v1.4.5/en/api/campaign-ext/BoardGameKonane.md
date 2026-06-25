---
title: "BoardGameKonane"
description: "Auto-generated class reference for BoardGameKonane."
---
# BoardGameKonane

**Namespace:** SandBox.BoardGames
**Module:** SandBox.BoardGames
**Type:** `public class BoardGameKonane : BoardGameBase`
**Base:** `BoardGameBase`
**File:** `Modules.SandBox/SandBox/SandBox.BoardGames/BoardGameKonane.cs`

## Overview

`BoardGameKonane` lives in `SandBox.BoardGames` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.BoardGames` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### BoardInformation
`public struct BoardInformation(ref PawnInformation pawns, ref TileBaseInformation tiles)`

**Purpose:** **Purpose:** Executes the BoardInformation logic.

```csharp
// Obtain an instance of BoardGameKonane from the subsystem API first
BoardGameKonane boardGameKonane = ...;
var result = boardGameKonane.BoardInformation(pawns, tiles);
```

### PawnInformation
`public struct PawnInformation(int x, int y, int prevX, int prevY, bool captured, Vec3 position)`

**Purpose:** **Purpose:** Executes the PawnInformation logic.

```csharp
// Obtain an instance of BoardGameKonane from the subsystem API first
BoardGameKonane boardGameKonane = ...;
var result = boardGameKonane.PawnInformation(0, 0, 0, 0, false, position);
```

### InitializeUnits
`public override void InitializeUnits()`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by units.

```csharp
// Obtain an instance of BoardGameKonane from the subsystem API first
BoardGameKonane boardGameKonane = ...;
boardGameKonane.InitializeUnits();
```

### InitializeTiles
`public override void InitializeTiles()`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by tiles.

```csharp
// Obtain an instance of BoardGameKonane from the subsystem API first
BoardGameKonane boardGameKonane = ...;
boardGameKonane.InitializeTiles();
```

### InitializeSound
`public override void InitializeSound()`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by sound.

```csharp
// Obtain an instance of BoardGameKonane from the subsystem API first
BoardGameKonane boardGameKonane = ...;
boardGameKonane.InitializeSound();
```

### Reset
`public override void Reset()`

**Purpose:** **Purpose:** Returns the this instance to its default or initial condition.

```csharp
// Obtain an instance of BoardGameKonane from the subsystem API first
BoardGameKonane boardGameKonane = ...;
boardGameKonane.Reset();
```

### CalculateValidMoves
`public override List<Move> CalculateValidMoves(PawnBase pawn)`

**Purpose:** **Purpose:** Calculates the current value or result of valid moves.

```csharp
// Obtain an instance of BoardGameKonane from the subsystem API first
BoardGameKonane boardGameKonane = ...;
var result = boardGameKonane.CalculateValidMoves(pawn);
```

### SetPawnCaptured
`public override void SetPawnCaptured(PawnBase pawn, bool fake = false)`

**Purpose:** **Purpose:** Assigns a new value to pawn captured and updates the object's internal state.

```csharp
// Obtain an instance of BoardGameKonane from the subsystem API first
BoardGameKonane boardGameKonane = ...;
boardGameKonane.SetPawnCaptured(pawn, false);
```

### AIMakeMove
`public void AIMakeMove(Move move)`

**Purpose:** **Purpose:** Executes the AIMakeMove logic.

```csharp
// Obtain an instance of BoardGameKonane from the subsystem API first
BoardGameKonane boardGameKonane = ...;
boardGameKonane.AIMakeMove(move);
```

### CheckForRemovablePawns
`public int CheckForRemovablePawns(bool playerOne)`

**Purpose:** **Purpose:** Verifies whether for removable pawns holds true for the this instance.

```csharp
// Obtain an instance of BoardGameKonane from the subsystem API first
BoardGameKonane boardGameKonane = ...;
var result = boardGameKonane.CheckForRemovablePawns(false);
```

### TakeBoardSnapshot
`public BoardInformation TakeBoardSnapshot()`

**Purpose:** **Purpose:** Executes the TakeBoardSnapshot logic.

```csharp
// Obtain an instance of BoardGameKonane from the subsystem API first
BoardGameKonane boardGameKonane = ...;
var result = boardGameKonane.TakeBoardSnapshot();
```

### UndoMove
`public void UndoMove(ref BoardInformation board)`

**Purpose:** **Purpose:** Executes the UndoMove logic.

```csharp
// Obtain an instance of BoardGameKonane from the subsystem API first
BoardGameKonane boardGameKonane = ...;
boardGameKonane.UndoMove(board);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BoardGameKonane boardGameKonane = ...;
boardGameKonane.BoardInformation(pawns, tiles);
```

## See Also

- [Area Index](../)