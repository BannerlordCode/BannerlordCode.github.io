---
title: "BoardGameTablut"
description: "BoardGameTablut: a public class in SandBox, inheriting BoardGameBase; 34 exposed members (19 methods, 7 properties, 4 fields). Source: SandBox/BoardGames/BoardGameTablut.cs."
---
# BoardGameTablut

**Namespace:** `SandBox.BoardGames`
**Module:** `SandBox`
**Type:** `public class BoardGameTablut : BoardGameBase`
**File:** `SandBox/BoardGames/BoardGameTablut.cs`

## Overview

BoardGameTablut lives in the SandBox module, source file SandBox/BoardGames/BoardGameTablut.cs. It is a public class, implementing/inheriting BoardGameBase; the inheritance chain is BoardGameTablut → BoardGameBase. It exposes 34 public/protected members: 19 methods, 7 properties, 4 fields, 1 constructors, 3 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BoardGameTablut is a top-level type in SandBox, namespace differing from (SandBox.BoardGames) the module directory; inheritance chain BoardGameTablut → BoardGameBase. The surface is method-led (methods 19/34, properties 7/34), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/BoardGames/BoardGameTablut.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TileCount` | `public override int TileCount` | property |
| `RotateBoard` | `protected override bool RotateBoard` | property |
| `PreMovementStagePresent` | `protected override bool PreMovementStagePresent` | property |
| `DiceRollRequired` | `protected override bool DiceRollRequired` | property |
| `BoardGameTablut` | `public BoardGameTablut(MissionBoardGameLogic mission, PlayerTurn startingPlayer) : base(mission, new TextObject(" ", null), startingPlayer)` | constructor |
| `IsCitadelTile` | `public static bool IsCitadelTile(int tileX, int tileY)` | method |
| `InitializeUnits` | `public override void InitializeUnits()` | method |
| `InitializeTiles` | `public override void InitializeTiles()` | method |
| `InitializeSound` | `public override void InitializeSound()` | method |
| `Reset` | `public override void Reset()` | method |
| `List` | `public override List<Move>CalculateValidMoves(PawnBase pawn)` | method |
| `SetPawnCaptured` | `public override void SetPawnCaptured(PawnBase pawn, bool fake = false)` | method |
| `OnAfterBoardSetUp` | `protected override void OnAfterBoardSetUp()` | method |
| `SelectPawn` | `protected override PawnBase SelectPawn(PawnBase pawn)` | method |
| `MovePawnToTileDelayed` | `protected override void MovePawnToTileDelayed(PawnBase pawn, TileBase tile, bool instantMove, bool displayMessage, float delay)` | method |
| `SwitchPlayerTurn` | `protected override void SwitchPlayerTurn()` | method |
| `CheckGameEnded` | `protected override bool CheckGameEnded()` | method |
| `AIMakeMove` | `public bool AIMakeMove(Move move)` | method |
| `HasAvailableMoves` | `public bool HasAvailableMoves(PawnTablut pawn)` | method |
| `GetRandomAvailableMove` | `public Move GetRandomAvailableMove(PawnTablut pawn)` | method |
| `GetWinningMoveIfPresent` | `public Move GetWinningMoveIfPresent(BoardGameSide side)` | method |
| `TakeBoardSnapshot` | `public BoardGameTablut.BoardInformation TakeBoardSnapshot()` | method |
| `UndoMove` | `public void UndoMove(ref BoardGameTablut.BoardInformation board)` | method |
| `CheckGameState` | `public BoardGameTablut.State CheckGameState()` | method |
| `BoardWidth` | `public const int BoardWidth` | field |
| `BoardHeight` | `public const int BoardHeight` | field |
| `AttackerPawnCount` | `public const int AttackerPawnCount` | field |
| `DefenderPawnCount` | `public const int DefenderPawnCount` | field |
| `PawnInformation` | `public struct PawnInformation` | property |
| `BoardInformation` | `public struct BoardInformation` | property |
| `State` | `public enum State` | property |
| `PawnInformation` | `public struct PawnInformation` | nested type |
| `BoardInformation` | `public struct BoardInformation` | nested type |
| `State` | `public enum State` | nested type |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface BoardGameBase](../BoardGameBase)
- [same namespace BoardGameBaghChal](../BoardGameBaghChal)
- [same namespace BoardGameBase](../BoardGameBase)
- [same namespace BoardGameKonane](../BoardGameKonane)
- [same namespace BoardGameMuTorere](../BoardGameMuTorere)
