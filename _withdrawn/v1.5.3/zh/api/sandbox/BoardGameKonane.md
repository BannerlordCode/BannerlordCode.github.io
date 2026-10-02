---
title: "BoardGameKonane"
description: "BoardGameKonane 的自动生成类参考。"
---
# BoardGameKonane

**Namespace:** SandBox.BoardGames
**Module:** SandBox
**Type:** `public class BoardGameKonane : BoardGameBase `
**Base:** BoardGameBase
**Source:** SandBox/BoardGames/BoardGameKonane.cs

## 概述

`BoardGameKonane` 的自动生成类参考页面。声明来自 `SandBox/BoardGames/BoardGameKonane.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

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

### CalculateValidMoves
`public override List<Move> CalculateValidMoves(PawnBase pawn) `

### SetPawnCaptured
`public override void SetPawnCaptured(PawnBase pawn,bool fake = false) `

### SelectPawn
`protected override PawnBase SelectPawn(PawnBase pawn) `

### HandlePreMovementStage
`protected override void HandlePreMovementStage(float dt) `

### HandlePreMovementStageAI
`protected override void HandlePreMovementStageAI(Move move) `

### MovePawnToTileDelayed
`protected override void MovePawnToTileDelayed(PawnBase pawn,TileBase tile,bool instantMove,bool displayMessage,float delay) `

### SwitchPlayerTurn
`protected override void SwitchPlayerTurn() `

### CheckGameEnded
`protected override bool CheckGameEnded() `

### OnAfterBoardSetUp
`protected override void OnAfterBoardSetUp() `

### AIMakeMove
`public void AIMakeMove(Move move) `

### CheckForRemovablePawns
`public int CheckForRemovablePawns(bool playerOne) `

### TakeBoardSnapshot
`public BoardGameKonane.BoardInformation TakeBoardSnapshot() `

### UndoMove
`public void UndoMove(ref BoardGameKonane.BoardInformation board) `

### CheckWhichPawnsAreCaptured
`protected void CheckWhichPawnsAreCaptured(PawnKonane pawn,bool fake = false) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
