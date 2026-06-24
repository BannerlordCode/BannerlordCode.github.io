<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BoardGameBase`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BoardGameBase

**Namespace:** SandBox.BoardGames
**Module:** SandBox.BoardGames
**Type:** `public abstract class BoardGameBase`
**Base:** none
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.BoardGames/BoardGameBase.cs`

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

**Purpose:** Initializes the state, resources, or bindings for `units`.

### InitializeTiles
`public abstract void InitializeTiles()`

**Purpose:** Initializes the state, resources, or bindings for `tiles`.

### InitializeSound
`public abstract void InitializeSound()`

**Purpose:** Initializes the state, resources, or bindings for `sound`.

### CalculateValidMoves
`public abstract List<Move> CalculateValidMoves(PawnBase pawn)`

**Purpose:** Handles logic related to `calculate valid moves`.

### RollDice
`public virtual void RollDice()`

**Purpose:** Handles logic related to `roll dice`.

### InitializeDiceBoard
`public virtual void InitializeDiceBoard()`

**Purpose:** Initializes the state, resources, or bindings for `dice board`.

### Reset
`public virtual void Reset()`

**Purpose:** Resets `reset` to its initial state.

### InitializeCapturedUnitsZones
`public virtual void InitializeCapturedUnitsZones()`

**Purpose:** Initializes the state, resources, or bindings for `captured units zones`.

### SetPawnCaptured
`public virtual void SetPawnCaptured(PawnBase pawn, bool fake = false)`

**Purpose:** Sets the value or state of `pawn captured`.

### CalculateAllValidMoves
`public virtual List<List<Move>> CalculateAllValidMoves(BoardGameSide side)`

**Purpose:** Handles logic related to `calculate all valid moves`.

### SetUserRay
`public void SetUserRay(Vec3 rayBegin, Vec3 rayEnd)`

**Purpose:** Sets the value or state of `user ray`.

### SetStartingPlayer
`public void SetStartingPlayer(PlayerTurn player)`

**Purpose:** Sets the value or state of `starting player`.

### SetGameOverInfo
`public void SetGameOverInfo(GameOverEnum info)`

**Purpose:** Sets the value or state of `game over info`.

### HasMovesAvailable
`public bool HasMovesAvailable(ref List<List<Move>> moves)`

**Purpose:** Checks whether the current object has/contains `moves available`.

### GetTotalMovesAvailable
`public int GetTotalMovesAvailable(ref List<List<Move>> moves)`

**Purpose:** Gets the current value of `total moves available`.

### PlayDiceRollSound
`public void PlayDiceRollSound()`

**Purpose:** Handles logic related to `play dice roll sound`.

### GetPlayerOneUnitsAlive
`public int GetPlayerOneUnitsAlive()`

**Purpose:** Gets the current value of `player one units alive`.

### GetPlayerTwoUnitsAlive
`public int GetPlayerTwoUnitsAlive()`

**Purpose:** Gets the current value of `player two units alive`.

### GetPlayerOneUnitsDead
`public int GetPlayerOneUnitsDead()`

**Purpose:** Gets the current value of `player one units dead`.

### GetPlayerTwoUnitsDead
`public int GetPlayerTwoUnitsDead()`

**Purpose:** Gets the current value of `player two units dead`.

### Initialize
`public void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### Tick
`public bool Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### ForceDice
`public void ForceDice(int value)`

**Purpose:** Handles logic related to `force dice`.

## Usage Example

```csharp
var implementation = new CustomBoardGameBase();
```

## See Also

- [Complete Class Catalog](../catalog)