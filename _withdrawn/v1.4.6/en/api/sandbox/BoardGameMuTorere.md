---
title: "BoardGameMuTorere"
description: "BoardGameMuTorere: a public class in SandBox.BoardGames, inheriting BoardGameBase; 27 exposed members (16 methods, 6 properties, 2 fields). Canonical bucket sandbox. Source: SandBox/BoardGames/BoardGameMuTorere.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BoardGameMuTorere

**Namespace:** `SandBox.BoardGames`
**Module:** `SandBox`
**Type:** `public class BoardGameMuTorere : BoardGameBase`
**File:** `SandBox/BoardGames/BoardGameMuTorere.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

BoardGameMuTorere lives in the SandBox module, source file SandBox/BoardGames/BoardGameMuTorere.cs. It is a public class, implementing/inheriting BoardGameBase; the inheritance chain is BoardGameMuTorere → BoardGameBase. It exposes 27 public/protected members: 16 methods, 6 properties, 2 fields, 1 constructors, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BoardGameMuTorere lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.BoardGames`, inheritance chain BoardGameMuTorere → BoardGameBase. The surface is method-led (methods 16/27, properties 6/27), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/BoardGames/BoardGameMuTorere.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `TileCount` | `public override int TileCount` | property |
| `RotateBoard` | `protected override bool RotateBoard` | property |
| `PreMovementStagePresent` | `protected override bool PreMovementStagePresent` | property |
| `DiceRollRequired` | `protected override bool DiceRollRequired` | property |
| `BoardGameMuTorere` | `public BoardGameMuTorere(MissionBoardGameLogic mission, PlayerTurn startingPlayer) : base(mission, new TextObject(" ", null), startingPlayer)` | constructor |
| `InitializeUnits` | `public override void InitializeUnits()` | method |
| `InitializeTiles` | `public override void InitializeTiles()` | method |
| `InitializeCapturedUnitsZones` | `public override void InitializeCapturedUnitsZones()` | method |
| `InitializeSound` | `public override void InitializeSound()` | method |
| `Reset` | `public override void Reset()` | method |
| `List` | `public override List<Move>CalculateValidMoves(PawnBase pawn)` | method |
| `SelectPawn` | `protected override PawnBase SelectPawn(PawnBase pawn)` | method |
| `MovePawnToTileDelayed` | `protected override void MovePawnToTileDelayed(PawnBase pawn, TileBase tile, bool instantMove, bool displayMessage, float delay)` | method |
| `SwitchPlayerTurn` | `protected override void SwitchPlayerTurn()` | method |
| `CheckGameEnded` | `protected override bool CheckGameEnded()` | method |
| `OnAfterBoardSetUp` | `protected override void OnAfterBoardSetUp()` | method |
| `FindTileByCoordinate` | `public TileMuTorere FindTileByCoordinate(int x)` | method |
| `TakePawnsSnapshot` | `public BoardGameMuTorere.BoardInformation TakePawnsSnapshot()` | method |
| `UndoMove` | `public void UndoMove(ref BoardGameMuTorere.BoardInformation board)` | method |
| `AIMakeMove` | `public void AIMakeMove(Move move)` | method |
| `FindAvailableTile` | `public TileBase FindAvailableTile()` | method |
| `WhitePawnCount` | `public const int WhitePawnCount` | field |
| `BlackPawnCount` | `public const int BlackPawnCount` | field |
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
- [same namespace BoardGameKonane](../BoardGameKonane/)
- [same namespace BoardGamePuluc](../BoardGamePuluc/)
