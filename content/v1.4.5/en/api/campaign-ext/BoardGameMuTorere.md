---
title: "BoardGameMuTorere"
description: "Auto-generated class reference for BoardGameMuTorere."
---
# BoardGameMuTorere

**Namespace:** SandBox.BoardGames
**Module:** SandBox.BoardGames
**Type:** `public class BoardGameMuTorere : BoardGameBase`
**Base:** `BoardGameBase`
**File:** `Modules.SandBox/SandBox/SandBox.BoardGames/BoardGameMuTorere.cs`

## Overview

`BoardGameMuTorere` lives in `SandBox.BoardGames` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.BoardGames` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### BoardInformation
`public struct BoardInformation(ref PawnInformation pawns, ref TileBaseInformation tiles)`

**Purpose:** Executes the BoardInformation logic.

```csharp
// Obtain an instance of BoardGameMuTorere from the subsystem API first
BoardGameMuTorere boardGameMuTorere = ...;
var result = boardGameMuTorere.BoardInformation(pawns, tiles);
```

### PawnInformation
`public struct PawnInformation(int x)`

**Purpose:** Executes the PawnInformation logic.

```csharp
// Obtain an instance of BoardGameMuTorere from the subsystem API first
BoardGameMuTorere boardGameMuTorere = ...;
var result = boardGameMuTorere.PawnInformation(0);
```

### InitializeUnits
`public override void InitializeUnits()`

**Purpose:** Prepares the resources, state, or bindings required by units.

```csharp
// Obtain an instance of BoardGameMuTorere from the subsystem API first
BoardGameMuTorere boardGameMuTorere = ...;
boardGameMuTorere.InitializeUnits();
```

### InitializeTiles
`public override void InitializeTiles()`

**Purpose:** Prepares the resources, state, or bindings required by tiles.

```csharp
// Obtain an instance of BoardGameMuTorere from the subsystem API first
BoardGameMuTorere boardGameMuTorere = ...;
boardGameMuTorere.InitializeTiles();
```

### InitializeCapturedUnitsZones
`public override void InitializeCapturedUnitsZones()`

**Purpose:** Prepares the resources, state, or bindings required by captured units zones.

```csharp
// Obtain an instance of BoardGameMuTorere from the subsystem API first
BoardGameMuTorere boardGameMuTorere = ...;
boardGameMuTorere.InitializeCapturedUnitsZones();
```

### InitializeSound
`public override void InitializeSound()`

**Purpose:** Prepares the resources, state, or bindings required by sound.

```csharp
// Obtain an instance of BoardGameMuTorere from the subsystem API first
BoardGameMuTorere boardGameMuTorere = ...;
boardGameMuTorere.InitializeSound();
```

### Reset
`public override void Reset()`

**Purpose:** Returns the this instance to its default or initial condition.

```csharp
// Obtain an instance of BoardGameMuTorere from the subsystem API first
BoardGameMuTorere boardGameMuTorere = ...;
boardGameMuTorere.Reset();
```

### CalculateValidMoves
`public override List<Move> CalculateValidMoves(PawnBase pawn)`

**Purpose:** Calculates the current value or result of valid moves.

```csharp
// Obtain an instance of BoardGameMuTorere from the subsystem API first
BoardGameMuTorere boardGameMuTorere = ...;
var result = boardGameMuTorere.CalculateValidMoves(pawn);
```

### FindTileByCoordinate
`public TileMuTorere FindTileByCoordinate(int x)`

**Purpose:** Looks up the matching tile by coordinate in the current collection or scope.

```csharp
// Obtain an instance of BoardGameMuTorere from the subsystem API first
BoardGameMuTorere boardGameMuTorere = ...;
var result = boardGameMuTorere.FindTileByCoordinate(0);
```

### TakePawnsSnapshot
`public BoardInformation TakePawnsSnapshot()`

**Purpose:** Executes the TakePawnsSnapshot logic.

```csharp
// Obtain an instance of BoardGameMuTorere from the subsystem API first
BoardGameMuTorere boardGameMuTorere = ...;
var result = boardGameMuTorere.TakePawnsSnapshot();
```

### UndoMove
`public void UndoMove(ref BoardInformation board)`

**Purpose:** Executes the UndoMove logic.

```csharp
// Obtain an instance of BoardGameMuTorere from the subsystem API first
BoardGameMuTorere boardGameMuTorere = ...;
boardGameMuTorere.UndoMove(board);
```

### AIMakeMove
`public void AIMakeMove(Move move)`

**Purpose:** Executes the AIMakeMove logic.

```csharp
// Obtain an instance of BoardGameMuTorere from the subsystem API first
BoardGameMuTorere boardGameMuTorere = ...;
boardGameMuTorere.AIMakeMove(move);
```

### FindAvailableTile
`public TileBase FindAvailableTile()`

**Purpose:** Looks up the matching available tile in the current collection or scope.

```csharp
// Obtain an instance of BoardGameMuTorere from the subsystem API first
BoardGameMuTorere boardGameMuTorere = ...;
var result = boardGameMuTorere.FindAvailableTile();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BoardGameMuTorere boardGameMuTorere = ...;
boardGameMuTorere.BoardInformation(pawns, tiles);
```

## See Also

- [Area Index](../)