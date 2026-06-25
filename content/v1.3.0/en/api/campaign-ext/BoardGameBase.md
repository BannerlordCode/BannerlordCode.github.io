---
title: "BoardGameBase"
description: "Auto-generated class reference for BoardGameBase."
---
# BoardGameBase

**Namespace:** SandBox.BoardGames
**Module:** SandBox.BoardGames
**Type:** `public abstract class BoardGameBase`
**Base:** none
**File:** `SandBox/BoardGames/BoardGameBase.cs`

## Overview

`BoardGameBase` lives in `SandBox.BoardGames` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.BoardGames` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TileCount` | `public abstract int TileCount { get; }` |
| `Name` | `public TextObject Name { get; set; }` |
| `InPreMovementStage` | `public bool InPreMovementStage { get; set; }` |
| `Tiles` | `public TileBase Tiles { get; set; }` |
| `PlayerOneUnits` | `public List<PawnBase> PlayerOneUnits { get; set; }` |
| `PlayerTwoUnits` | `public List<PawnBase> PlayerTwoUnits { get; set; }` |
| `LastDice` | `public int LastDice { get; }` |
| `IsReady` | `public bool IsReady { get; }` |
| `PlayerWhoStarted` | `public PlayerTurn PlayerWhoStarted { get; }` |
| `GameOverInfo` | `public GameOverEnum GameOverInfo { get; }` |
| `PlayerTurn` | `public PlayerTurn PlayerTurn { get; set; }` |

## Key Methods

### InitializeUnits
`public abstract void InitializeUnits()`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by units.

```csharp
// Obtain an instance of BoardGameBase from the subsystem API first
BoardGameBase boardGameBase = ...;
boardGameBase.InitializeUnits();
```

### InitializeTiles
`public abstract void InitializeTiles()`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by tiles.

```csharp
// Obtain an instance of BoardGameBase from the subsystem API first
BoardGameBase boardGameBase = ...;
boardGameBase.InitializeTiles();
```

### InitializeSound
`public abstract void InitializeSound()`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by sound.

```csharp
// Obtain an instance of BoardGameBase from the subsystem API first
BoardGameBase boardGameBase = ...;
boardGameBase.InitializeSound();
```

### CalculateValidMoves
`public abstract List<Move> CalculateValidMoves(PawnBase pawn)`

**Purpose:** **Purpose:** Calculates the current value or result of valid moves.

```csharp
// Obtain an instance of BoardGameBase from the subsystem API first
BoardGameBase boardGameBase = ...;
var result = boardGameBase.CalculateValidMoves(pawn);
```

### RollDice
`public virtual void RollDice()`

**Purpose:** **Purpose:** Executes the RollDice logic.

```csharp
// Obtain an instance of BoardGameBase from the subsystem API first
BoardGameBase boardGameBase = ...;
boardGameBase.RollDice();
```

### InitializeDiceBoard
`public virtual void InitializeDiceBoard()`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by dice board.

```csharp
// Obtain an instance of BoardGameBase from the subsystem API first
BoardGameBase boardGameBase = ...;
boardGameBase.InitializeDiceBoard();
```

### Reset
`public virtual void Reset()`

**Purpose:** **Purpose:** Returns the this instance to its default or initial condition.

```csharp
// Obtain an instance of BoardGameBase from the subsystem API first
BoardGameBase boardGameBase = ...;
boardGameBase.Reset();
```

### InitializeCapturedUnitsZones
`public virtual void InitializeCapturedUnitsZones()`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by captured units zones.

```csharp
// Obtain an instance of BoardGameBase from the subsystem API first
BoardGameBase boardGameBase = ...;
boardGameBase.InitializeCapturedUnitsZones();
```

### SetPawnCaptured
`public virtual void SetPawnCaptured(PawnBase pawn, bool fake = false)`

**Purpose:** **Purpose:** Assigns a new value to pawn captured and updates the object's internal state.

```csharp
// Obtain an instance of BoardGameBase from the subsystem API first
BoardGameBase boardGameBase = ...;
boardGameBase.SetPawnCaptured(pawn, false);
```

### CalculateAllValidMoves
`public virtual List<List<Move>> CalculateAllValidMoves(BoardGameSide side)`

**Purpose:** **Purpose:** Calculates the current value or result of all valid moves.

```csharp
// Obtain an instance of BoardGameBase from the subsystem API first
BoardGameBase boardGameBase = ...;
var result = boardGameBase.CalculateAllValidMoves(side);
```

### SetUserRay
`public void SetUserRay(Vec3 rayBegin, Vec3 rayEnd)`

**Purpose:** **Purpose:** Assigns a new value to user ray and updates the object's internal state.

```csharp
// Obtain an instance of BoardGameBase from the subsystem API first
BoardGameBase boardGameBase = ...;
boardGameBase.SetUserRay(rayBegin, rayEnd);
```

### SetStartingPlayer
`public void SetStartingPlayer(PlayerTurn player)`

**Purpose:** **Purpose:** Assigns a new value to starting player and updates the object's internal state.

```csharp
// Obtain an instance of BoardGameBase from the subsystem API first
BoardGameBase boardGameBase = ...;
boardGameBase.SetStartingPlayer(player);
```

### SetGameOverInfo
`public void SetGameOverInfo(GameOverEnum info)`

**Purpose:** **Purpose:** Assigns a new value to game over info and updates the object's internal state.

```csharp
// Obtain an instance of BoardGameBase from the subsystem API first
BoardGameBase boardGameBase = ...;
boardGameBase.SetGameOverInfo(info);
```

### HasMovesAvailable
`public bool HasMovesAvailable(ref List<List<Move>> moves)`

**Purpose:** **Purpose:** Determines whether the this instance already holds moves available.

```csharp
// Obtain an instance of BoardGameBase from the subsystem API first
BoardGameBase boardGameBase = ...;
var result = boardGameBase.HasMovesAvailable(moves);
```

### GetTotalMovesAvailable
`public int GetTotalMovesAvailable(ref List<List<Move>> moves)`

**Purpose:** **Purpose:** Reads and returns the total moves available value held by the this instance.

```csharp
// Obtain an instance of BoardGameBase from the subsystem API first
BoardGameBase boardGameBase = ...;
var result = boardGameBase.GetTotalMovesAvailable(moves);
```

### PlayDiceRollSound
`public void PlayDiceRollSound()`

**Purpose:** **Purpose:** Executes the PlayDiceRollSound logic.

```csharp
// Obtain an instance of BoardGameBase from the subsystem API first
BoardGameBase boardGameBase = ...;
boardGameBase.PlayDiceRollSound();
```

### GetPlayerOneUnitsAlive
`public int GetPlayerOneUnitsAlive()`

**Purpose:** **Purpose:** Reads and returns the player one units alive value held by the this instance.

```csharp
// Obtain an instance of BoardGameBase from the subsystem API first
BoardGameBase boardGameBase = ...;
var result = boardGameBase.GetPlayerOneUnitsAlive();
```

### GetPlayerTwoUnitsAlive
`public int GetPlayerTwoUnitsAlive()`

**Purpose:** **Purpose:** Reads and returns the player two units alive value held by the this instance.

```csharp
// Obtain an instance of BoardGameBase from the subsystem API first
BoardGameBase boardGameBase = ...;
var result = boardGameBase.GetPlayerTwoUnitsAlive();
```

### GetPlayerOneUnitsDead
`public int GetPlayerOneUnitsDead()`

**Purpose:** **Purpose:** Reads and returns the player one units dead value held by the this instance.

```csharp
// Obtain an instance of BoardGameBase from the subsystem API first
BoardGameBase boardGameBase = ...;
var result = boardGameBase.GetPlayerOneUnitsDead();
```

### GetPlayerTwoUnitsDead
`public int GetPlayerTwoUnitsDead()`

**Purpose:** **Purpose:** Reads and returns the player two units dead value held by the this instance.

```csharp
// Obtain an instance of BoardGameBase from the subsystem API first
BoardGameBase boardGameBase = ...;
var result = boardGameBase.GetPlayerTwoUnitsDead();
```

### Initialize
`public void Initialize()`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of BoardGameBase from the subsystem API first
BoardGameBase boardGameBase = ...;
boardGameBase.Initialize();
```

### Tick
`public bool Tick(float dt)`

**Purpose:** **Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of BoardGameBase from the subsystem API first
BoardGameBase boardGameBase = ...;
var result = boardGameBase.Tick(0);
```

### ForceDice
`public void ForceDice(int value)`

**Purpose:** **Purpose:** Executes the ForceDice logic.

```csharp
// Obtain an instance of BoardGameBase from the subsystem API first
BoardGameBase boardGameBase = ...;
boardGameBase.ForceDice(0);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
BoardGameBase instance = ...;
```

## See Also

- [Area Index](../)