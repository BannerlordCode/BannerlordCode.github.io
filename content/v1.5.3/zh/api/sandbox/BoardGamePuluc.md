---
title: "BoardGamePuluc"
description: "BoardGamePuluc 的自动生成类参考。"
---
# BoardGamePuluc

**Namespace:** SandBox.BoardGames
**Module:** SandBox
**Type:** `public class BoardGamePuluc : BoardGameBase `
**Base:** BoardGameBase
**Source:** SandBox/BoardGames/BoardGamePuluc.cs

## 概述

`BoardGamePuluc` 的自动生成类参考页面。声明来自 `SandBox/BoardGames/BoardGamePuluc.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### InitializeUnits
`public override void InitializeUnits() `

### InitializeTiles
`public override void InitializeTiles() `

### InitializeSound
`public override void InitializeSound() `

### InitializeDiceBoard
`public override void InitializeDiceBoard() `

### Reset
`public override void Reset() `

### CalculateValidMoves
`public override List<Move> CalculateValidMoves(PawnBase pawn) `

### RollDice
`public override void RollDice() `

### OnAfterBoardSetUp
`protected override void OnAfterBoardSetUp() `

### SelectPawn
`protected override PawnBase SelectPawn(PawnBase pawn) `

### SwitchPlayerTurn
`protected override void SwitchPlayerTurn() `

### CheckGameEnded
`protected override bool CheckGameEnded() `

### UpdateAllTilesPositions
`protected override void UpdateAllTilesPositions() `

### OnBeforeEndTurn
`protected override void OnBeforeEndTurn() `

### MovePawnToTile
`protected override void MovePawnToTile(PawnBase pawn,TileBase tile,bool instantMove = false,bool displayMessage = true) `

### OnAfterDiceRollAnimation
`protected override void OnAfterDiceRollAnimation() `

### AIMakeMove
`public void AIMakeMove(Move move) `

### TakeBoardSnapshot
`public BoardGamePuluc.BoardInformation TakeBoardSnapshot() `

### UndoMove
`public void UndoMove(ref BoardGamePuluc.BoardInformation board) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
