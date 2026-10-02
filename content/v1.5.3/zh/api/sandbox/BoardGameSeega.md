---
title: "BoardGameSeega"
description: "BoardGameSeega 的自动生成类参考。"
---
# BoardGameSeega

**Namespace:** SandBox.BoardGames
**Module:** SandBox
**Type:** `public class BoardGameSeega : BoardGameBase `
**Base:** BoardGameBase
**Source:** SandBox/BoardGames/BoardGameSeega.cs

## 概述

`BoardGameSeega` 的自动生成类参考页面。声明来自 `SandBox/BoardGames/BoardGameSeega.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

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
`public override void SetPawnCaptured(PawnBase pawn,bool aiSimulation = false) `

### OnPawnArrivesGoalPosition
`protected override void OnPawnArrivesGoalPosition(PawnBase pawn,Vec3 prevPos,Vec3 currentPos) `

### SwitchPlayerTurn
`protected override void SwitchPlayerTurn() `

### SelectPawn
`protected override PawnBase SelectPawn(PawnBase pawn) `

### MovePawnToTileDelayed
`protected override void MovePawnToTileDelayed(PawnBase pawn,TileBase tile,bool instantMove,bool displayMessage,float delay) `

### HandlePreMovementStage
`protected override void HandlePreMovementStage(float dt) `

### HandlePreMovementStageAI
`protected override void HandlePreMovementStageAI(Move move) `

### CheckGameEnded
`protected override bool CheckGameEnded() `

### OnAfterBoardSetUp
`protected override void OnAfterBoardSetUp() `

### AIMakeMove
`public void AIMakeMove(Move move) `

### GetBlockingPawns
`public Dictionary<PawnBase,int> GetBlockingPawns(bool playerOneBlocked) `

### TakeBoardSnapshot
`public BoardGameSeega.BoardInformation TakeBoardSnapshot() `

### UndoMove
`public void UndoMove(ref BoardGameSeega.BoardInformation board) `

### GetTile
`public TileBase GetTile(int x,int y) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
