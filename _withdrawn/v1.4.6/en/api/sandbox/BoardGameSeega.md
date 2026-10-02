---
title: "BoardGameSeega"
description: "BoardGameSeega: a public class in SandBox.BoardGames, inheriting BoardGameBase; 33 exposed members (19 methods, 8 properties, 2 fields). Canonical bucket sandbox. Source: SandBox/BoardGames/BoardGameSeega.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BoardGameSeega

**Namespace:** `SandBox.BoardGames`
**Module:** `SandBox`
**Type:** `public class BoardGameSeega : BoardGameBase`
**File:** `SandBox/BoardGames/BoardGameSeega.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

BoardGameSeega lives in the SandBox module, source file SandBox/BoardGames/BoardGameSeega.cs. It is a public class, implementing/inheriting BoardGameBase; the inheritance chain is BoardGameSeega → BoardGameBase. It exposes 33 public/protected members: 19 methods, 8 properties, 2 fields, 1 constructors, 3 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BoardGameSeega lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.BoardGames`, inheritance chain BoardGameSeega → BoardGameBase. The surface is method-led (methods 19/33, properties 8/33), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/BoardGames/BoardGameSeega.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `TileCount` | `public override int TileCount` | property |
| `UnitsToPlacePerTurnInPreMovementStage` | `protected override int UnitsToPlacePerTurnInPreMovementStage` | property |
| `RotateBoard` | `protected override bool RotateBoard` | property |
| `PreMovementStagePresent` | `protected override bool PreMovementStagePresent` | property |
| `DiceRollRequired` | `protected override bool DiceRollRequired` | property |
| `BoardGameSeega` | `public BoardGameSeega(MissionBoardGameLogic mission, PlayerTurn startingPlayer) : base(mission, new TextObject(" ", null), startingPlayer)` | constructor |
| `InitializeUnits` | `public override void InitializeUnits()` | method |
| `InitializeTiles` | `public override void InitializeTiles()` | method |
| `InitializeSound` | `public override void InitializeSound()` | method |
| `Reset` | `public override void Reset()` | method |
| `List` | `public override List<Move>CalculateValidMoves(PawnBase pawn)` | method |
| `SetPawnCaptured` | `public override void SetPawnCaptured(PawnBase pawn, bool aiSimulation = false)` | method |
| `OnPawnArrivesGoalPosition` | `protected override void OnPawnArrivesGoalPosition(PawnBase pawn, Vec3 prevPos, Vec3 currentPos)` | method |
| `SwitchPlayerTurn` | `protected override void SwitchPlayerTurn()` | method |
| `SelectPawn` | `protected override PawnBase SelectPawn(PawnBase pawn)` | method |
| `MovePawnToTileDelayed` | `protected override void MovePawnToTileDelayed(PawnBase pawn, TileBase tile, bool instantMove, bool displayMessage, float delay)` | method |
| `HandlePreMovementStage` | `protected override void HandlePreMovementStage(float dt)` | method |
| `HandlePreMovementStageAI` | `protected override void HandlePreMovementStageAI(Move move)` | method |
| `CheckGameEnded` | `protected override bool CheckGameEnded()` | method |
| `OnAfterBoardSetUp` | `protected override void OnAfterBoardSetUp()` | method |
| `AIMakeMove` | `public void AIMakeMove(Move move)` | method |
| `int>GetBlockingPawns` | `public Dictionary<PawnBase, int>GetBlockingPawns(bool playerOneBlocked)` | method |
| `TakeBoardSnapshot` | `public BoardGameSeega.BoardInformation TakeBoardSnapshot()` | method |
| `UndoMove` | `public void UndoMove(ref BoardGameSeega.BoardInformation board)` | method |
| `GetTile` | `public TileBase GetTile(int x, int y)` | method |
| `BoardWidth` | `public static readonly int BoardWidth` | field |
| `BoardHeight` | `public static readonly int BoardHeight` | field |
| `BarrierInfo` | `public class BarrierInfo` | property |
| `BoardInformation` | `public struct BoardInformation` | property |
| `PawnInformation` | `public struct PawnInformation` | property |
| `BarrierInfo` | `public class BarrierInfo` | nested type |
| `BoardInformation` | `public struct BoardInformation` | nested type |
| `PawnInformation` | `public struct PawnInformation` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface BoardGameBase](../BoardGameBase/)
- [same namespace BoardGameBaghChal](../BoardGameBaghChal/)
- [same namespace BoardGameBase](../BoardGameBase/)
- [same namespace BoardGameKonane](../BoardGameKonane/)
- [same namespace BoardGameMuTorere](../BoardGameMuTorere/)
