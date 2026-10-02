---
title: "BoardGameTablut"
description: "BoardGameTablut — class in SandBox.BoardGames. 31 public members (1 static)."
---

<!-- v147-skeleton -->
# BoardGameTablut

**Namespace:** `SandBox.BoardGames`  
**Module:** `SandBox`  
**Type:** `public class BoardGameTablut : BoardGameBase`  
**Base:** `BoardGameBase`  
**Source:** `SandBox/BoardGames/BoardGameTablut.cs`

## Overview

`BoardGameTablut` is a named type in the SandBox.BoardGames namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends BoardGameBase, so the members it does not redeclare are inherited from there. 7 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `BoardGameTablut`.
- **Static entry points** (1): `IsCitadelTile`.
- **Instance members** (25): `TileCount`, `RotateBoard`, `PreMovementStagePresent`, `DiceRollRequired`, `InitializeUnits`, `InitializeTiles`, ….
- **Extension points** (15): `TileCount`, `RotateBoard`, `PreMovementStagePresent`, `DiceRollRequired`, `InitializeUnits`, `InitializeTiles`, ….
- **Data and constants** (4): `BoardWidth`, `BoardHeight`, `AttackerPawnCount`, `DefenderPawnCount`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CalculateValidMoves` | method (override) | Overrides the base member. Takes 1 argument: `PawnBase pawn`. Returns `List<Move>`. |
| `InitializeSound` | method (override) | Overrides the base member. Takes no arguments. |
| `InitializeTiles` | method (override) | Overrides the base member. Takes no arguments. |
| `InitializeUnits` | method (override) | Overrides the base member. Takes no arguments. |
| `IsCitadelTile` | method (static) | Static entry point. Takes 2 arguments: `int tileX`, `int tileY`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `Reset` | method (override) | Overrides the base member. Takes no arguments. |
| `SetPawnCaptured` | method (override) | Overrides the base member. Takes 2 arguments: `PawnBase pawn`, `bool fake`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `TileCount` | property (override) | Overrides the base member `int` property. Read it for current state; a declared setter writes that state in place. |
| `CheckGameEnded` | method (override) | Overrides the base member. Takes no arguments. Returns `bool`. |
| `DiceRollRequired` | property (override) | Overrides the base member `bool` property. Read it for current state; a declared setter writes that state in place. |
| `MovePawnToTileDelayed` | method (override) | Overrides the base member. Takes 5 arguments: `PawnBase pawn`, `TileBase tile`, `bool instantMove`, `bool displayMessage`, …. |
| `OnAfterBoardSetUp` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `PreMovementStagePresent` | property (override) | Overrides the base member `bool` property. Read it for current state; a declared setter writes that state in place. |
| `RotateBoard` | property (override) | Overrides the base member `bool` property. Read it for current state; a declared setter writes that state in place. |
| `SelectPawn` | method (override) | Overrides the base member. Takes 1 argument: `PawnBase pawn`. Returns `PawnBase`. |
| `SwitchPlayerTurn` | method (override) | Overrides the base member. Takes no arguments. |
| `AIMakeMove` | method | Instance entry point. Takes 1 argument: `Move move`. Returns `bool`. |
| `BoardInformation` | property | Instance entry point `struct` property. Read it for current state; a declared setter writes that state in place. |
| `CheckGameState` | method | Instance entry point. Takes no arguments. Returns `BoardGameTablut.State`. |
| `GetRandomAvailableMove` | method | Instance entry point. Takes 1 argument: `PawnTablut pawn`. Returns `Move`. Read path: prefer it over reaching for the backing store. |
| `GetWinningMoveIfPresent` | method | Instance entry point. Takes 1 argument: `BoardGameSide side`. Returns `Move`. Read path: prefer it over reaching for the backing store. |
| `HasAvailableMoves` | method | Instance entry point. Takes 1 argument: `PawnTablut pawn`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `PawnInformation` | property | Instance entry point `struct` property. Read it for current state; a declared setter writes that state in place. |
| `State` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |

- Constructed as `public BoardGameTablut(MissionBoardGameLogic mission, PlayerTurn startingPlayer)`.

7 further public members follow the same patterns.
## Usage Example

```csharp
// Static entry points on BoardGameTablut:
BoardGameTablut.IsCitadelTile(tileX, tileY);
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 15 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/BoardGames/BoardGameTablut.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MissionBoardGameLogic](../MissionBoardGameLogic/) — `SandBox.BoardGames.MissionLogics`.
- [PawnBase](../PawnBase/) — `SandBox.BoardGames.Pawns`.
- [TileBase](../TileBase/) — `SandBox.BoardGames.Tiles`.
- [BoardGameDecal](../BoardGameDecal/) — `SandBox.BoardGames.Objects`.
- [Tile2D](../Tile2D/) — `SandBox.BoardGames.Tiles`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.

Section: [api/sandbox/](../) — the other types in this bucket.
