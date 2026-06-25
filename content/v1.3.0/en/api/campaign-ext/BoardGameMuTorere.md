---
title: "BoardGameMuTorere"
description: "Auto-generated class reference for BoardGameMuTorere."
---
# BoardGameMuTorere

**Namespace:** SandBox.BoardGames
**Module:** SandBox.BoardGames
**Type:** `public class BoardGameMuTorere : BoardGameBase`
**Base:** `BoardGameBase`
**File:** `SandBox/BoardGames/BoardGameMuTorere.cs`

## Overview

`BoardGameMuTorere` lives in `SandBox.BoardGames` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.BoardGames` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TileCount` | `public override int TileCount { get; }` |

## Key Methods

### InitializeUnits
`public override void InitializeUnits()`

**Purpose:** Prepares the resources, state, or bindings required by `units`.

```csharp
// Obtain an instance of BoardGameMuTorere from the subsystem API first
BoardGameMuTorere boardGameMuTorere = ...;
boardGameMuTorere.InitializeUnits();
```

### InitializeTiles
`public override void InitializeTiles()`

**Purpose:** Prepares the resources, state, or bindings required by `tiles`.

```csharp
// Obtain an instance of BoardGameMuTorere from the subsystem API first
BoardGameMuTorere boardGameMuTorere = ...;
boardGameMuTorere.InitializeTiles();
```

### InitializeCapturedUnitsZones
`public override void InitializeCapturedUnitsZones()`

**Purpose:** Prepares the resources, state, or bindings required by `captured units zones`.

```csharp
// Obtain an instance of BoardGameMuTorere from the subsystem API first
BoardGameMuTorere boardGameMuTorere = ...;
boardGameMuTorere.InitializeCapturedUnitsZones();
```

### InitializeSound
`public override void InitializeSound()`

**Purpose:** Prepares the resources, state, or bindings required by `sound`.

```csharp
// Obtain an instance of BoardGameMuTorere from the subsystem API first
BoardGameMuTorere boardGameMuTorere = ...;
boardGameMuTorere.InitializeSound();
```

### Reset
`public override void Reset()`

**Purpose:** Returns the current object to its default or initial condition.

```csharp
// Obtain an instance of BoardGameMuTorere from the subsystem API first
BoardGameMuTorere boardGameMuTorere = ...;
boardGameMuTorere.Reset();
```

### CalculateValidMoves
`public override List<Move> CalculateValidMoves(PawnBase pawn)`

**Purpose:** Calculates the current value or result of `valid moves`.

```csharp
// Obtain an instance of BoardGameMuTorere from the subsystem API first
BoardGameMuTorere boardGameMuTorere = ...;
var result = boardGameMuTorere.CalculateValidMoves(pawn);
```

### FindTileByCoordinate
`public TileMuTorere FindTileByCoordinate(int x)`

**Purpose:** Looks up the matching `tile by coordinate` in the current collection or scope.

```csharp
// Obtain an instance of BoardGameMuTorere from the subsystem API first
BoardGameMuTorere boardGameMuTorere = ...;
var result = boardGameMuTorere.FindTileByCoordinate(0);
```

### TakePawnsSnapshot
`public BoardGameMuTorere.BoardInformation TakePawnsSnapshot()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of BoardGameMuTorere from the subsystem API first
BoardGameMuTorere boardGameMuTorere = ...;
var result = boardGameMuTorere.TakePawnsSnapshot();
```

### UndoMove
`public void UndoMove(ref BoardGameMuTorere.BoardInformation board)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of BoardGameMuTorere from the subsystem API first
BoardGameMuTorere boardGameMuTorere = ...;
boardGameMuTorere.UndoMove(board);
```

### AIMakeMove
`public void AIMakeMove(Move move)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of BoardGameMuTorere from the subsystem API first
BoardGameMuTorere boardGameMuTorere = ...;
boardGameMuTorere.AIMakeMove(move);
```

### FindAvailableTile
`public TileBase FindAvailableTile()`

**Purpose:** Looks up the matching `available tile` in the current collection or scope.

```csharp
// Obtain an instance of BoardGameMuTorere from the subsystem API first
BoardGameMuTorere boardGameMuTorere = ...;
var result = boardGameMuTorere.FindAvailableTile();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BoardGameMuTorere boardGameMuTorere = ...;
boardGameMuTorere.InitializeUnits();
```

## See Also

- [Area Index](../)