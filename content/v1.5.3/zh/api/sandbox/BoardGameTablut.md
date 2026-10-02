---
title: "BoardGameTablut"
description: "BoardGameTablut 的自动生成类参考。"
---
# BoardGameTablut

**Namespace:** SandBox.BoardGames
**Module:** SandBox
**Type:** `public class BoardGameTablut : BoardGameBase `
**Base:** BoardGameBase
**Source:** SandBox/BoardGames/BoardGameTablut.cs

## 概述

`BoardGameTablut` 的自动生成类参考页面。声明来自 `SandBox/BoardGames/BoardGameTablut.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### IsCitadelTile
`public static bool IsCitadelTile(int tileX,int tileY) `

### InitializeUnits
`public override void InitializeUnits() `

### InitializeTiles
`public override void InitializeTiles() `

### InitializeSound
`public override void InitializeSound() `

### Reset
`public override void Reset() `

### CalculateValidMoves
`public override List<Move> CalculateValidMoves(PawnBase pawn) `

### SetPawnCaptured
`public override void SetPawnCaptured(PawnBase pawn,bool fake = false) `

### OnAfterBoardSetUp
`protected override void OnAfterBoardSetUp() `

### SelectPawn
`protected override PawnBase SelectPawn(PawnBase pawn) `

### MovePawnToTileDelayed
`protected override void MovePawnToTileDelayed(PawnBase pawn,TileBase tile,bool instantMove,bool displayMessage,float delay) `

### SwitchPlayerTurn
`protected override void SwitchPlayerTurn() `

### CheckGameEnded
`protected override bool CheckGameEnded() `

### AIMakeMove
`public bool AIMakeMove(Move move) `

### HasAvailableMoves
`public bool HasAvailableMoves(PawnTablut pawn) `

### GetRandomAvailableMove
`public Move GetRandomAvailableMove(PawnTablut pawn) `

### GetWinningMoveIfPresent
`public Move GetWinningMoveIfPresent(BoardGameSide side) `

### TakeBoardSnapshot
`public BoardGameTablut.BoardInformation TakeBoardSnapshot() `

### UndoMove
`public void UndoMove(ref BoardGameTablut.BoardInformation board) `

### CheckGameState
`public BoardGameTablut.State CheckGameState() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
