---
title: "BoardGameSeega"
description: "BoardGameSeega — class in SandBox.BoardGames. 30 public members (2 static)."
---

<!-- v147-skeleton -->
# BoardGameSeega

**Namespace:** `SandBox.BoardGames`  
**Module:** `SandBox`  
**Type:** `public class BoardGameSeega : BoardGameBase`  
**Base:** `BoardGameBase`  
**Source:** `SandBox/BoardGames/BoardGameSeega.cs`

## Overview

`BoardGameSeega` is a named type in the SandBox.BoardGames namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends BoardGameBase, so the members it does not redeclare are inherited from there. 10 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `BoardGameSeega`.
- **Static entry points** (2): `BoardWidth`, `BoardHeight`.
- **Instance members** (27): `TileCount`, `UnitsToPlacePerTurnInPreMovementStage`, `RotateBoard`, `PreMovementStagePresent`, `DiceRollRequired`, `InitializeUnits`, ….
- **Extension points** (19): `TileCount`, `UnitsToPlacePerTurnInPreMovementStage`, `RotateBoard`, `PreMovementStagePresent`, `DiceRollRequired`, `InitializeUnits`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `BoardHeight` | property (static) | Static entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `BoardWidth` | property (static) | Static entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `CalculateValidMoves` | method (override) | Overrides the base member. Takes 1 argument: `PawnBase pawn`. Returns `List<Move>`. |
| `InitializeSound` | method (override) | Overrides the base member. Takes no arguments. |
| `InitializeTiles` | method (override) | Overrides the base member. Takes no arguments. |
| `InitializeUnits` | method (override) | Overrides the base member. Takes no arguments. |
| `Reset` | method (override) | Overrides the base member. Takes no arguments. |
| `SetPawnCaptured` | method (override) | Overrides the base member. Takes 2 arguments: `PawnBase pawn`, `bool aiSimulation`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `TileCount` | property (override) | Overrides the base member `int` property. Read it for current state; a declared setter writes that state in place. |
| `CheckGameEnded` | method (override) | Overrides the base member. Takes no arguments. Returns `bool`. |
| `DiceRollRequired` | property (override) | Overrides the base member `bool` property. Read it for current state; a declared setter writes that state in place. |
| `HandlePreMovementStage` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `HandlePreMovementStageAI` | method (override) | Overrides the base member. Takes 1 argument: `Move move`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `MovePawnToTileDelayed` | method (override) | Overrides the base member. Takes 5 arguments: `PawnBase pawn`, `TileBase tile`, `bool instantMove`, `bool displayMessage`, …. |
| `OnAfterBoardSetUp` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnPawnArrivesGoalPosition` | method (override) | Overrides the base member. Takes 3 arguments: `PawnBase pawn`, `Vec3 prevPos`, `Vec3 currentPos`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `PreMovementStagePresent` | property (override) | Overrides the base member `bool` property. Read it for current state; a declared setter writes that state in place. |
| `RotateBoard` | property (override) | Overrides the base member `bool` property. Read it for current state; a declared setter writes that state in place. |
| `SelectPawn` | method (override) | Overrides the base member. Takes 1 argument: `PawnBase pawn`. Returns `PawnBase`. |
| `SwitchPlayerTurn` | method (override) | Overrides the base member. Takes no arguments. |
| `UnitsToPlacePerTurnInPreMovementStage` | property (override) | Overrides the base member `int` property. Read it for current state; a declared setter writes that state in place. |
| `AIMakeMove` | method | Instance entry point. Takes 1 argument: `Move move`. |
| `BarrierInfo` | property | Instance entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `BoardInformation` | property | Instance entry point `struct` property. Read it for current state; a declared setter writes that state in place. |

- Constructed as `public BoardGameSeega(MissionBoardGameLogic mission, PlayerTurn startingPlayer)`.

6 further public members follow the same patterns.
## Usage Example

```csharp
var boardGameSeega = new BoardGameSeega(mission, startingPlayer);
boardGameSeega.InitializeUnits();
// Read current state through boardGameSeega.TileCount.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 19 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/BoardGames/BoardGameSeega.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MissionBoardGameLogic](../MissionBoardGameLogic/) — `SandBox.BoardGames.MissionLogics`.
- [PawnSeega](../PawnSeega/) — `SandBox.BoardGames.Pawns`.
- [TileBase](../TileBase/) — `SandBox.BoardGames.Tiles`.
- [BoardGameDecal](../BoardGameDecal/) — `SandBox.BoardGames.Objects`.
- [Tile2D](../Tile2D/) — `SandBox.BoardGames.Tiles`.
- [PawnBase](../PawnBase/) — `SandBox.BoardGames.Pawns`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.

Section: [api/sandbox/](../) — the other types in this bucket.
