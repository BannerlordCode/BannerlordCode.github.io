---
title: "BoardGameSeega"
description: "Auto-generated class reference for BoardGameSeega."
---
# BoardGameSeega

**Namespace:** SandBox.BoardGames
**Module:** SandBox
**Type:** `public class BoardGameSeega : BoardGameBase `
**Base:** BoardGameBase
**Source:** SandBox/BoardGames/BoardGameSeega.cs

## Overview

Auto-generated stub for `BoardGameSeega`. Deep documentation is scheduled in a later pass.

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
`public override void SetPawnCaptured(PawnBase pawn,bool aiSimulation = false)`

### OnPawnArrivesGoalPosition
`protected override void OnPawnArrivesGoalPosition(PawnBase pawn,Vec3 prevPos,Vec3 currentPos)`

### SwitchPlayerTurn
`protected override void SwitchPlayerTurn()`

### SelectPawn
`protected override PawnBase SelectPawn(PawnBase pawn)`

### MovePawnToTileDelayed
`protected override void MovePawnToTileDelayed(PawnBase pawn,TileBase tile,bool instantMove,bool displayMessage,float delay)`

### HandlePreMovementStage
`protected override void HandlePreMovementStage(float dt)`

### HandlePreMovementStageAI
`protected override void HandlePreMovementStageAI(Move move)`

### CheckGameEnded
`protected override bool CheckGameEnded()`

### OnAfterBoardSetUp
`protected override void OnAfterBoardSetUp()`

### AIMakeMove
`public void AIMakeMove(Move move)`

### GetBlockingPawns
`public Dictionary<PawnBase,int> GetBlockingPawns(bool playerOneBlocked)`

### TakeBoardSnapshot
`public BoardGameSeega.BoardInformation TakeBoardSnapshot()`

### UndoMove
`public void UndoMove(ref BoardGameSeega.BoardInformation board)`

### GetTile
`public TileBase GetTile(int x,int y)`

## See Also

- [Section index](../)
