---
title: "BoardGameKonane"
description: "Auto-generated class reference for BoardGameKonane."
---
# BoardGameKonane

**Namespace:** SandBox.BoardGames
**Module:** SandBox
**Type:** `public class BoardGameKonane : BoardGameBase `
**Base:** BoardGameBase
**Source:** SandBox/BoardGames/BoardGameKonane.cs

## Overview

Auto-generated stub for `BoardGameKonane`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### InitializeUnits
`public override void InitializeUnits()`

### InitializeTiles
`public override void InitializeTiles()`

### InitializeSound
`public override void InitializeSound()`

### Reset
`public override void Reset()`

### CalculateValidMoves
`public override List<Move> CalculateValidMoves(PawnBase pawn)`

### SetPawnCaptured
`public override void SetPawnCaptured(PawnBase pawn,bool fake = false)`

### SelectPawn
`protected override PawnBase SelectPawn(PawnBase pawn)`

### HandlePreMovementStage
`protected override void HandlePreMovementStage(float dt)`

### HandlePreMovementStageAI
`protected override void HandlePreMovementStageAI(Move move)`

### MovePawnToTileDelayed
`protected override void MovePawnToTileDelayed(PawnBase pawn,TileBase tile,bool instantMove,bool displayMessage,float delay)`

### SwitchPlayerTurn
`protected override void SwitchPlayerTurn()`

### CheckGameEnded
`protected override bool CheckGameEnded()`

### OnAfterBoardSetUp
`protected override void OnAfterBoardSetUp()`

### AIMakeMove
`public void AIMakeMove(Move move)`

### CheckForRemovablePawns
`public int CheckForRemovablePawns(bool playerOne)`

### TakeBoardSnapshot
`public BoardGameKonane.BoardInformation TakeBoardSnapshot()`

### UndoMove
`public void UndoMove(ref BoardGameKonane.BoardInformation board)`

### CheckWhichPawnsAreCaptured
`protected void CheckWhichPawnsAreCaptured(PawnKonane pawn,bool fake = false)`

## See Also

- [Section index](../)
