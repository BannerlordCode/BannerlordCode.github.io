---
title: "BoardGameBaghChal"
description: "Auto-generated class reference for BoardGameBaghChal."
---
# BoardGameBaghChal

**Namespace:** SandBox.BoardGames
**Module:** SandBox
**Type:** `public class BoardGameBaghChal : BoardGameBase `
**Base:** BoardGameBase
**Source:** SandBox/BoardGames/BoardGameBaghChal.cs

## Overview

Auto-generated stub for `BoardGameBaghChal`. Deep documentation is scheduled in a later pass.

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

### CalculateAllValidMoves
`public override List<List<Move>> CalculateAllValidMoves(BoardGameSide side)`

### CalculateValidMoves
`public override List<Move> CalculateValidMoves(PawnBase pawn)`

### SetPawnCaptured
`public override void SetPawnCaptured(PawnBase pawn,bool fake = false)`

### HandlePreMovementStage
`protected override void HandlePreMovementStage(float dt)`

### HandlePreMovementStageAI
`protected override void HandlePreMovementStageAI(Move move)`

### SelectPawn
`protected override PawnBase SelectPawn(PawnBase pawn)`

### SwitchPlayerTurn
`protected override void SwitchPlayerTurn()`

### CheckGameEnded
`protected override bool CheckGameEnded()`

### OnAfterBoardRotated
`protected override void OnAfterBoardRotated()`

### OnAfterBoardSetUp
`protected override void OnAfterBoardSetUp()`

### MovePawnToTileDelayed
`protected override void MovePawnToTileDelayed(PawnBase pawn,TileBase tile,bool instantMove,bool displayMessage,float delay)`

### AIMakeMove
`public void AIMakeMove(Move move)`

### TakeBoardSnapshot
`public BoardGameBaghChal.BoardInformation TakeBoardSnapshot()`

### UndoMove
`public void UndoMove(ref BoardGameBaghChal.BoardInformation board)`

### GetANonePlacedGoat
`public PawnBaghChal GetANonePlacedGoat()`

### CheckIfPawnCaptures
`protected void CheckIfPawnCaptures(PawnBaghChal pawn,bool fake = false)`

## See Also

- [Section index](../)
