---
title: "BoardGameBaghChal"
description: "BoardGameBaghChal: a public class in SandBox.BoardGames, inheriting BoardGameBase; 33 exposed members (20 methods, 6 properties, 4 fields). Canonical bucket sandbox. Source: SandBox/BoardGames/BoardGameBaghChal.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BoardGameBaghChal

**Namespace:** `SandBox.BoardGames`
**Module:** `SandBox`
**Type:** `public class BoardGameBaghChal : BoardGameBase`
**File:** `SandBox/BoardGames/BoardGameBaghChal.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

BoardGameBaghChal lives in the SandBox module, source file SandBox/BoardGames/BoardGameBaghChal.cs. It is a public class, implementing/inheriting BoardGameBase; the inheritance chain is BoardGameBaghChal → BoardGameBase. It exposes 33 public/protected members: 20 methods, 6 properties, 4 fields, 1 constructors, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BoardGameBaghChal lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.BoardGames`, inheritance chain BoardGameBaghChal → BoardGameBase. The surface is method-led (methods 20/33, properties 6/33), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/BoardGames/BoardGameBaghChal.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `TileCount` | `public override int TileCount` | property |
| `RotateBoard` | `protected override bool RotateBoard` | property |
| `PreMovementStagePresent` | `protected override bool PreMovementStagePresent` | property |
| `DiceRollRequired` | `protected override bool DiceRollRequired` | property |
| `BoardGameBaghChal` | `public BoardGameBaghChal(MissionBoardGameLogic mission, PlayerTurn startingPlayer) : base(mission, new TextObject(" ", null), startingPlayer)` | constructor |
| `InitializeUnits` | `public override void InitializeUnits()` | method |
| `InitializeTiles` | `public override void InitializeTiles()` | method |
| `InitializeSound` | `public override void InitializeSound()` | method |
| `Reset` | `public override void Reset()` | method |
| `List` | `public override List<List<Move>>CalculateAllValidMoves(BoardGameSide side)` | method |
| `List` | `public override List<Move>CalculateValidMoves(PawnBase pawn)` | method |
| `SetPawnCaptured` | `public override void SetPawnCaptured(PawnBase pawn, bool fake = false)` | method |
| `HandlePreMovementStage` | `protected override void HandlePreMovementStage(float dt)` | method |
| `HandlePreMovementStageAI` | `protected override void HandlePreMovementStageAI(Move move)` | method |
| `SelectPawn` | `protected override PawnBase SelectPawn(PawnBase pawn)` | method |
| `SwitchPlayerTurn` | `protected override void SwitchPlayerTurn()` | method |
| `CheckGameEnded` | `protected override bool CheckGameEnded()` | method |
| `OnAfterBoardRotated` | `protected override void OnAfterBoardRotated()` | method |
| `OnAfterBoardSetUp` | `protected override void OnAfterBoardSetUp()` | method |
| `MovePawnToTileDelayed` | `protected override void MovePawnToTileDelayed(PawnBase pawn, TileBase tile, bool instantMove, bool displayMessage, float delay)` | method |
| `AIMakeMove` | `public void AIMakeMove(Move move)` | method |
| `TakeBoardSnapshot` | `public BoardGameBaghChal.BoardInformation TakeBoardSnapshot()` | method |
| `UndoMove` | `public void UndoMove(ref BoardGameBaghChal.BoardInformation board)` | method |
| `GetANonePlacedGoat` | `public PawnBaghChal GetANonePlacedGoat()` | method |
| `CheckIfPawnCaptures` | `protected void CheckIfPawnCaptures(PawnBaghChal pawn, bool fake = false)` | method |
| `UnitCountTiger` | `public const int UnitCountTiger` | field |
| `UnitCountGoat` | `public const int UnitCountGoat` | field |
| `BoardWidth` | `public static readonly int BoardWidth` | field |
| `BoardHeight` | `public static readonly int BoardHeight` | field |
| `BoardInformation` | `public struct BoardInformation` | property |
| `PawnInformation` | `public struct PawnInformation` | property |
| `BoardInformation` | `public struct BoardInformation` | nested type |
| `PawnInformation` | `public struct PawnInformation` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface BoardGameBase](../BoardGameBase/)
- [same namespace BoardGameBase](../BoardGameBase/)
- [same namespace BoardGameKonane](../BoardGameKonane/)
- [same namespace BoardGameMuTorere](../BoardGameMuTorere/)
- [same namespace BoardGamePuluc](../BoardGamePuluc/)
