---
title: "BoardGameMuTorere"
description: "BoardGameMuTorere 的自动生成类参考。"
---
# BoardGameMuTorere

**Namespace:** SandBox.BoardGames
**Module:** SandBox
**Type:** `public class BoardGameMuTorere : BoardGameBase `
**Base:** BoardGameBase
**Source:** SandBox/BoardGames/BoardGameMuTorere.cs

## 概述

`BoardGameMuTorere` 的自动生成类参考页面。声明来自 `SandBox/BoardGames/BoardGameMuTorere.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### InitializeUnits
`public override void InitializeUnits() `

### InitializeTiles
`public override void InitializeTiles() `

### InitializeCapturedUnitsZones
`public override void InitializeCapturedUnitsZones() `

### InitializeSound
`public override void InitializeSound() `

### Reset
`public override void Reset() `

### CalculateValidMoves
`public override List<Move> CalculateValidMoves(PawnBase pawn) `

### SelectPawn
`protected override PawnBase SelectPawn(PawnBase pawn) `

### MovePawnToTileDelayed
`protected override void MovePawnToTileDelayed(PawnBase pawn,TileBase tile,bool instantMove,bool displayMessage,float delay) `

### SwitchPlayerTurn
`protected override void SwitchPlayerTurn() `

### CheckGameEnded
`protected override bool CheckGameEnded() `

### OnAfterBoardSetUp
`protected override void OnAfterBoardSetUp() `

### FindTileByCoordinate
`public TileMuTorere FindTileByCoordinate(int x) `

### TakePawnsSnapshot
`public BoardGameMuTorere.BoardInformation TakePawnsSnapshot() `

### UndoMove
`public void UndoMove(ref BoardGameMuTorere.BoardInformation board) `

### AIMakeMove
`public void AIMakeMove(Move move) `

### FindAvailableTile
`public TileBase FindAvailableTile() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
