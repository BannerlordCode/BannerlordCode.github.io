---
title: "BoardGameMuTorere"
description: "Auto-generated class reference for BoardGameMuTorere."
---
# BoardGameMuTorere

**Namespace:** SandBox.BoardGames
**Module:** SandBox
**Type:** `public class BoardGameMuTorere : BoardGameBase `
**Base:** BoardGameBase
**Source:** SandBox/BoardGames/BoardGameMuTorere.cs

## Overview

Auto-generated stub for `BoardGameMuTorere`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### InitializeUnits
`public override void InitializeUnits()`

### InitializeTiles
`public override void InitializeTiles()`

### InitializeCapturedUnitsZones
`public override void InitializeCapturedUnitsZones()`

### InitializeSound
`public override void InitializeSound()`

### Reset
`public override void Reset()`

### CalculateValidMoves
`public override List<Move> CalculateValidMoves(PawnBase pawn)`

### SelectPawn
`protected override PawnBase SelectPawn(PawnBase pawn)`

### MovePawnToTileDelayed
`protected override void MovePawnToTileDelayed(PawnBase pawn,TileBase tile,bool instantMove,bool displayMessage,float delay)`

### SwitchPlayerTurn
`protected override void SwitchPlayerTurn()`

### CheckGameEnded
`protected override bool CheckGameEnded()`

### OnAfterBoardSetUp
`protected override void OnAfterBoardSetUp()`

### FindTileByCoordinate
`public TileMuTorere FindTileByCoordinate(int x)`

### TakePawnsSnapshot
`public BoardGameMuTorere.BoardInformation TakePawnsSnapshot()`

### UndoMove
`public void UndoMove(ref BoardGameMuTorere.BoardInformation board)`

### AIMakeMove
`public void AIMakeMove(Move move)`

### FindAvailableTile
`public TileBase FindAvailableTile()`

## See Also

- [Section index](../)
