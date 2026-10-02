---
title: "BoardGameTablut"
description: "Auto-generated class reference for BoardGameTablut."
---
# BoardGameTablut

**Namespace:** SandBox.BoardGames
**Module:** SandBox
**Type:** `public class BoardGameTablut : BoardGameBase `
**Base:** BoardGameBase
**Source:** SandBox/BoardGames/BoardGameTablut.cs

## Overview

Auto-generated stub for `BoardGameTablut`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### IsCitadelTile
`public static bool IsCitadelTile(int tileX,int tileY)`

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

### OnAfterBoardSetUp
`protected override void OnAfterBoardSetUp()`

### SelectPawn
`protected override PawnBase SelectPawn(PawnBase pawn)`

### MovePawnToTileDelayed
`protected override void MovePawnToTileDelayed(PawnBase pawn,TileBase tile,bool instantMove,bool displayMessage,float delay)`

### SwitchPlayerTurn
`protected override void SwitchPlayerTurn()`

### CheckGameEnded
`protected override bool CheckGameEnded()`

### AIMakeMove
`public bool AIMakeMove(Move move)`

### HasAvailableMoves
`public bool HasAvailableMoves(PawnTablut pawn)`

### GetRandomAvailableMove
`public Move GetRandomAvailableMove(PawnTablut pawn)`

### GetWinningMoveIfPresent
`public Move GetWinningMoveIfPresent(BoardGameSide side)`

### TakeBoardSnapshot
`public BoardGameTablut.BoardInformation TakeBoardSnapshot()`

### UndoMove
`public void UndoMove(ref BoardGameTablut.BoardInformation board)`

### CheckGameState
`public BoardGameTablut.State CheckGameState()`

## See Also

- [Section index](../)
