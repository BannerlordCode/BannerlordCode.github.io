---
title: "BoardGamePuluc"
description: "BoardGamePuluc: a public class in SandBox, inheriting BoardGameBase; 30 exposed members (18 methods, 6 properties, 3 fields). Source: SandBox/BoardGames/BoardGamePuluc.cs."
---
# BoardGamePuluc

**Namespace:** `SandBox.BoardGames`
**Module:** `SandBox`
**Type:** `public class BoardGamePuluc : BoardGameBase`
**File:** `SandBox/BoardGames/BoardGamePuluc.cs`

## Overview

BoardGamePuluc lives in the SandBox module, source file SandBox/BoardGames/BoardGamePuluc.cs. It is a public class, implementing/inheriting BoardGameBase; the inheritance chain is BoardGamePuluc → BoardGameBase. It exposes 30 public/protected members: 18 methods, 6 properties, 3 fields, 1 constructors, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BoardGamePuluc is a top-level type in SandBox, namespace differing from (SandBox.BoardGames) the module directory; inheritance chain BoardGamePuluc → BoardGameBase. The surface is method-led (methods 18/30, properties 6/30), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/BoardGames/BoardGamePuluc.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TileCount` | `public override int TileCount` | property |
| `RotateBoard` | `protected override bool RotateBoard` | property |
| `PreMovementStagePresent` | `protected override bool PreMovementStagePresent` | property |
| `DiceRollRequired` | `protected override bool DiceRollRequired` | property |
| `BoardGamePuluc` | `public BoardGamePuluc(MissionBoardGameLogic mission, PlayerTurn startingPlayer) : base(mission, new TextObject(" ", null), startingPlayer)` | constructor |
| `InitializeUnits` | `public override void InitializeUnits()` | method |
| `InitializeTiles` | `public override void InitializeTiles()` | method |
| `InitializeSound` | `public override void InitializeSound()` | method |
| `InitializeDiceBoard` | `public override void InitializeDiceBoard()` | method |
| `Reset` | `public override void Reset()` | method |
| `List` | `public override List<Move>CalculateValidMoves(PawnBase pawn)` | method |
| `RollDice` | `public override void RollDice()` | method |
| `OnAfterBoardSetUp` | `protected override void OnAfterBoardSetUp()` | method |
| `SelectPawn` | `protected override PawnBase SelectPawn(PawnBase pawn)` | method |
| `SwitchPlayerTurn` | `protected override void SwitchPlayerTurn()` | method |
| `CheckGameEnded` | `protected override bool CheckGameEnded()` | method |
| `UpdateAllTilesPositions` | `protected override void UpdateAllTilesPositions()` | method |
| `OnBeforeEndTurn` | `protected override void OnBeforeEndTurn()` | method |
| `MovePawnToTile` | `protected override void MovePawnToTile(PawnBase pawn, TileBase tile, bool instantMove = false, bool displayMessage = true)` | method |
| `OnAfterDiceRollAnimation` | `protected override void OnAfterDiceRollAnimation()` | method |
| `AIMakeMove` | `public void AIMakeMove(Move move)` | method |
| `TakeBoardSnapshot` | `public BoardGamePuluc.BoardInformation TakeBoardSnapshot()` | method |
| `UndoMove` | `public void UndoMove(ref BoardGamePuluc.BoardInformation board)` | method |
| `WhitePawnCount` | `public const int WhitePawnCount` | field |
| `BlackPawnCount` | `public const int BlackPawnCount` | field |
| `TrackTileCount` | `public const int TrackTileCount` | field |
| `PawnInformation` | `public struct PawnInformation` | property |
| `BoardInformation` | `public struct BoardInformation` | property |
| `PawnInformation` | `public struct PawnInformation` | nested type |
| `BoardInformation` | `public struct BoardInformation` | nested type |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface BoardGameBase](../BoardGameBase)
- [same namespace BoardGameBaghChal](../BoardGameBaghChal)
- [same namespace BoardGameBase](../BoardGameBase)
- [same namespace BoardGameKonane](../BoardGameKonane)
- [same namespace BoardGameMuTorere](../BoardGameMuTorere)
