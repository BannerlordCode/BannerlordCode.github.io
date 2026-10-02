---
title: "BoardGameBaghChal"
description: "BoardGameBaghChal 的自动生成类参考。"
---
# BoardGameBaghChal

**Namespace:** SandBox.BoardGames
**Module:** SandBox
**Type:** `public class BoardGameBaghChal : BoardGameBase `
**Base:** BoardGameBase
**Source:** SandBox/BoardGames/BoardGameBaghChal.cs

## 概述

`BoardGameBaghChal` 的自动生成类参考页面。声明来自 `SandBox/BoardGames/BoardGameBaghChal.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### InitializeUnits
`public override void InitializeUnits() `

### InitializeTiles
`public override void InitializeTiles() `

### InitializeSound
`public override void InitializeSound() `

### Reset
`public override void Reset() `

### CalculateAllValidMoves
`public override List<List<Move>> CalculateAllValidMoves(BoardGameSide side) `

### CalculateValidMoves
`public override List<Move> CalculateValidMoves(PawnBase pawn) `

### SetPawnCaptured
`public override void SetPawnCaptured(PawnBase pawn,bool fake = false) `

### HandlePreMovementStage
`protected override void HandlePreMovementStage(float dt) `

### HandlePreMovementStageAI
`protected override void HandlePreMovementStageAI(Move move) `

### SelectPawn
`protected override PawnBase SelectPawn(PawnBase pawn) `

### SwitchPlayerTurn
`protected override void SwitchPlayerTurn() `

### CheckGameEnded
`protected override bool CheckGameEnded() `

### OnAfterBoardRotated
`protected override void OnAfterBoardRotated() `

### OnAfterBoardSetUp
`protected override void OnAfterBoardSetUp() `

### MovePawnToTileDelayed
`protected override void MovePawnToTileDelayed(PawnBase pawn,TileBase tile,bool instantMove,bool displayMessage,float delay) `

### AIMakeMove
`public void AIMakeMove(Move move) `

### TakeBoardSnapshot
`public BoardGameBaghChal.BoardInformation TakeBoardSnapshot() `

### UndoMove
`public void UndoMove(ref BoardGameBaghChal.BoardInformation board) `

### GetANonePlacedGoat
`public PawnBaghChal GetANonePlacedGoat() `

### CheckIfPawnCaptures
`protected void CheckIfPawnCaptures(PawnBaghChal pawn,bool fake = false) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
