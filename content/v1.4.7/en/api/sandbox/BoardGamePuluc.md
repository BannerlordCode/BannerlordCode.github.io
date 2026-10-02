---
title: "BoardGamePuluc"
description: "BoardGamePuluc — class in SandBox.BoardGames. 28 public members (0 static)."
---

<!-- v147-skeleton -->
# BoardGamePuluc

**Namespace:** `SandBox.BoardGames`  
**Module:** `SandBox`  
**Type:** `public class BoardGamePuluc : BoardGameBase`  
**Base:** `BoardGameBase`  
**Source:** `SandBox/BoardGames/BoardGamePuluc.cs`

## Overview

`BoardGamePuluc` is a named type in the SandBox.BoardGames namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends BoardGameBase, so the members it does not redeclare are inherited from there. 6 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `BoardGamePuluc`.
- **Instance members** (24): `TileCount`, `RotateBoard`, `PreMovementStagePresent`, `DiceRollRequired`, `InitializeUnits`, `InitializeTiles`, ….
- **Extension points** (19): `TileCount`, `RotateBoard`, `PreMovementStagePresent`, `DiceRollRequired`, `InitializeUnits`, `InitializeTiles`, ….
- **Data and constants** (3): `WhitePawnCount`, `BlackPawnCount`, `TrackTileCount`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CalculateValidMoves` | method (override) | Overrides the base member. Takes 1 argument: `PawnBase pawn`. Returns `List<Move>`. |
| `InitializeDiceBoard` | method (override) | Overrides the base member. Takes no arguments. |
| `InitializeSound` | method (override) | Overrides the base member. Takes no arguments. |
| `InitializeTiles` | method (override) | Overrides the base member. Takes no arguments. |
| `InitializeUnits` | method (override) | Overrides the base member. Takes no arguments. |
| `Reset` | method (override) | Overrides the base member. Takes no arguments. |
| `RollDice` | method (override) | Overrides the base member. Takes no arguments. |
| `TileCount` | property (override) | Overrides the base member `int` property. Read it for current state; a declared setter writes that state in place. |
| `CheckGameEnded` | method (override) | Overrides the base member. Takes no arguments. Returns `bool`. |
| `DiceRollRequired` | property (override) | Overrides the base member `bool` property. Read it for current state; a declared setter writes that state in place. |
| `MovePawnToTile` | method (override) | Overrides the base member. Takes 4 arguments: `PawnBase pawn`, `TileBase tile`, `bool instantMove`, `bool displayMessage`. |
| `OnAfterBoardSetUp` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnAfterDiceRollAnimation` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnBeforeEndTurn` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `PreMovementStagePresent` | property (override) | Overrides the base member `bool` property. Read it for current state; a declared setter writes that state in place. |
| `RotateBoard` | property (override) | Overrides the base member `bool` property. Read it for current state; a declared setter writes that state in place. |
| `SelectPawn` | method (override) | Overrides the base member. Takes 1 argument: `PawnBase pawn`. Returns `PawnBase`. |
| `SwitchPlayerTurn` | method (override) | Overrides the base member. Takes no arguments. |
| `UpdateAllTilesPositions` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `AIMakeMove` | method | Instance entry point. Takes 1 argument: `Move move`. |
| `BoardInformation` | property | Instance entry point `struct` property. Read it for current state; a declared setter writes that state in place. |
| `PawnInformation` | property | Instance entry point `struct` property. Read it for current state; a declared setter writes that state in place. |
| `TakeBoardSnapshot` | method | Instance entry point. Takes no arguments. Returns `BoardGamePuluc.BoardInformation`. |
| `UndoMove` | method | Instance entry point. Takes 1 argument: `ref BoardGamePuluc.BoardInformation board`. |

- Constructed as `public BoardGamePuluc(MissionBoardGameLogic mission, PlayerTurn startingPlayer)`.

4 further public members follow the same patterns.
## Usage Example

```csharp
var boardGamePuluc = new BoardGamePuluc(mission, startingPlayer);
boardGamePuluc.InitializeUnits();
// Read current state through boardGamePuluc.TileCount.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 19 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/BoardGames/BoardGamePuluc.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MissionBoardGameLogic](../MissionBoardGameLogic/) — `SandBox.BoardGames.MissionLogics`.
- [PawnBase](../PawnBase/) — `SandBox.BoardGames.Pawns`.
- [PawnPuluc](../PawnPuluc/) — `SandBox.BoardGames.Pawns`.
- [TileBase](../TileBase/) — `SandBox.BoardGames.Tiles`.
- [BoardGameDecal](../BoardGameDecal/) — `SandBox.BoardGames.Objects`.
- [TilePuluc](../TilePuluc/) — `SandBox.BoardGames.Tiles`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.

Section: [api/sandbox/](../) — the other types in this bucket.
