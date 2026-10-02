---
title: "BoardGameBaghChal"
description: "BoardGameBaghChal — class in SandBox.BoardGames. 31 public members (2 static)."
---

<!-- v147-skeleton -->
# BoardGameBaghChal

**Namespace:** `SandBox.BoardGames`  
**Module:** `SandBox`  
**Type:** `public class BoardGameBaghChal : BoardGameBase`  
**Base:** `BoardGameBase`  
**Source:** `SandBox/BoardGames/BoardGameBaghChal.cs`

## Overview

`BoardGameBaghChal` is a named type in the SandBox.BoardGames namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends BoardGameBase, so the members it does not redeclare are inherited from there. 8 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `BoardGameBaghChal`.
- **Static entry points** (2): `BoardWidth`, `BoardHeight`.
- **Instance members** (26): `TileCount`, `RotateBoard`, `PreMovementStagePresent`, `DiceRollRequired`, `InitializeUnits`, `InitializeTiles`, ….
- **Extension points** (19): `TileCount`, `RotateBoard`, `PreMovementStagePresent`, `DiceRollRequired`, `InitializeUnits`, `InitializeTiles`, ….
- **Data and constants** (2): `UnitCountTiger`, `UnitCountGoat`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `BoardHeight` | property (static) | Static entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `BoardWidth` | property (static) | Static entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `CalculateAllValidMoves` | method (override) | Overrides the base member. Takes 1 argument: `BoardGameSide side`. Returns `List<List<Move>>`. |
| `CalculateValidMoves` | method (override) | Overrides the base member. Takes 1 argument: `PawnBase pawn`. Returns `List<Move>`. |
| `InitializeSound` | method (override) | Overrides the base member. Takes no arguments. |
| `InitializeTiles` | method (override) | Overrides the base member. Takes no arguments. |
| `InitializeUnits` | method (override) | Overrides the base member. Takes no arguments. |
| `Reset` | method (override) | Overrides the base member. Takes no arguments. |
| `SetPawnCaptured` | method (override) | Overrides the base member. Takes 2 arguments: `PawnBase pawn`, `bool fake`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `TileCount` | property (override) | Overrides the base member `int` property. Read it for current state; a declared setter writes that state in place. |
| `CheckGameEnded` | method (override) | Overrides the base member. Takes no arguments. Returns `bool`. |
| `DiceRollRequired` | property (override) | Overrides the base member `bool` property. Read it for current state; a declared setter writes that state in place. |
| `HandlePreMovementStage` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `HandlePreMovementStageAI` | method (override) | Overrides the base member. Takes 1 argument: `Move move`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `MovePawnToTileDelayed` | method (override) | Overrides the base member. Takes 5 arguments: `PawnBase pawn`, `TileBase tile`, `bool instantMove`, `bool displayMessage`, …. |
| `OnAfterBoardRotated` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnAfterBoardSetUp` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `PreMovementStagePresent` | property (override) | Overrides the base member `bool` property. Read it for current state; a declared setter writes that state in place. |
| `RotateBoard` | property (override) | Overrides the base member `bool` property. Read it for current state; a declared setter writes that state in place. |
| `SelectPawn` | method (override) | Overrides the base member. Takes 1 argument: `PawnBase pawn`. Returns `PawnBase`. |
| `SwitchPlayerTurn` | method (override) | Overrides the base member. Takes no arguments. |
| `AIMakeMove` | method | Instance entry point. Takes 1 argument: `Move move`. |
| `BoardInformation` | property | Instance entry point `struct` property. Read it for current state; a declared setter writes that state in place. |
| `GetANonePlacedGoat` | method | Instance entry point. Takes no arguments. Returns `PawnBaghChal`. Read path: prefer it over reaching for the backing store. |

- Constructed as `public BoardGameBaghChal(MissionBoardGameLogic mission, PlayerTurn startingPlayer)`.

7 further public members follow the same patterns.
## Usage Example

```csharp
var boardGameBaghChal = new BoardGameBaghChal(mission, startingPlayer);
boardGameBaghChal.InitializeUnits();
// Read current state through boardGameBaghChal.TileCount.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 19 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/BoardGames/BoardGameBaghChal.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MissionBoardGameLogic](../MissionBoardGameLogic/) — `SandBox.BoardGames.MissionLogics`.
- [TileBase](../TileBase/) — `SandBox.BoardGames.Tiles`.
- [PawnBaghChal](../PawnBaghChal/) — `SandBox.BoardGames.Pawns`.
- [PawnBase](../PawnBase/) — `SandBox.BoardGames.Pawns`.
- [BoardGameDecal](../BoardGameDecal/) — `SandBox.BoardGames.Objects`.
- [Tile2D](../Tile2D/) — `SandBox.BoardGames.Tiles`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.

Section: [api/sandbox/](../) — the other types in this bucket.
