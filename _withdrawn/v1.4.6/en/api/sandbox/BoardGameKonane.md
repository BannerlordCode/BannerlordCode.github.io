---
title: "BoardGameKonane"
description: "BoardGameKonane: a public class in SandBox.BoardGames, inheriting BoardGameBase; 32 exposed members (18 methods, 6 properties, 5 fields). Canonical bucket sandbox. Source: SandBox/BoardGames/BoardGameKonane.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BoardGameKonane

**Namespace:** `SandBox.BoardGames`
**Module:** `SandBox`
**Type:** `public class BoardGameKonane : BoardGameBase`
**File:** `SandBox/BoardGames/BoardGameKonane.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

BoardGameKonane lives in the SandBox module, source file SandBox/BoardGames/BoardGameKonane.cs. It is a public class, implementing/inheriting BoardGameBase; the inheritance chain is BoardGameKonane → BoardGameBase. It exposes 32 public/protected members: 18 methods, 6 properties, 5 fields, 1 constructors, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BoardGameKonane lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.BoardGames`, inheritance chain BoardGameKonane → BoardGameBase. The surface is method-led (methods 18/32, properties 6/32), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/BoardGames/BoardGameKonane.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `TileCount` | `public override int TileCount` | property |
| `RotateBoard` | `protected override bool RotateBoard` | property |
| `PreMovementStagePresent` | `protected override bool PreMovementStagePresent` | property |
| `DiceRollRequired` | `protected override bool DiceRollRequired` | property |
| `BoardGameKonane` | `public BoardGameKonane(MissionBoardGameLogic mission, PlayerTurn startingPlayer) : base(mission, new TextObject(" ", null), startingPlayer)` | constructor |
| `InitializeUnits` | `public override void InitializeUnits()` | method |
| `InitializeTiles` | `public override void InitializeTiles()` | method |
| `InitializeSound` | `public override void InitializeSound()` | method |
| `Reset` | `public override void Reset()` | method |
| `List` | `public override List<Move>CalculateValidMoves(PawnBase pawn)` | method |
| `SetPawnCaptured` | `public override void SetPawnCaptured(PawnBase pawn, bool fake = false)` | method |
| `SelectPawn` | `protected override PawnBase SelectPawn(PawnBase pawn)` | method |
| `HandlePreMovementStage` | `protected override void HandlePreMovementStage(float dt)` | method |
| `HandlePreMovementStageAI` | `protected override void HandlePreMovementStageAI(Move move)` | method |
| `MovePawnToTileDelayed` | `protected override void MovePawnToTileDelayed(PawnBase pawn, TileBase tile, bool instantMove, bool displayMessage, float delay)` | method |
| `SwitchPlayerTurn` | `protected override void SwitchPlayerTurn()` | method |
| `CheckGameEnded` | `protected override bool CheckGameEnded()` | method |
| `OnAfterBoardSetUp` | `protected override void OnAfterBoardSetUp()` | method |
| `AIMakeMove` | `public void AIMakeMove(Move move)` | method |
| `CheckForRemovablePawns` | `public int CheckForRemovablePawns(bool playerOne)` | method |
| `TakeBoardSnapshot` | `public BoardGameKonane.BoardInformation TakeBoardSnapshot()` | method |
| `UndoMove` | `public void UndoMove(ref BoardGameKonane.BoardInformation board)` | method |
| `CheckWhichPawnsAreCaptured` | `protected void CheckWhichPawnsAreCaptured(PawnKonane pawn, bool fake = false)` | method |
| `WhitePawnCount` | `public const int WhitePawnCount` | field |
| `BlackPawnCount` | `public const int BlackPawnCount` | field |
| `BoardWidth` | `public static readonly int BoardWidth` | field |
| `BoardHeight` | `public static readonly int BoardHeight` | field |
| `List` | `public List<PawnBase>RemovablePawns` | field |
| `BoardInformation` | `public struct BoardInformation` | property |
| `PawnInformation` | `public struct PawnInformation` | property |
| `BoardInformation` | `public struct BoardInformation` | nested type |
| `PawnInformation` | `public struct PawnInformation` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface BoardGameBase](../BoardGameBase/)
- [same namespace BoardGameBaghChal](../BoardGameBaghChal/)
- [same namespace BoardGameBase](../BoardGameBase/)
- [same namespace BoardGameMuTorere](../BoardGameMuTorere/)
- [same namespace BoardGamePuluc](../BoardGamePuluc/)
