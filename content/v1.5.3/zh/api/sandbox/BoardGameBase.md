---
title: "BoardGameBase"
description: "BoardGameBase 的自动生成类参考。"
---
# BoardGameBase

**Namespace:** SandBox.BoardGames
**Module:** SandBox
**Type:** `public abstract class BoardGameBase `
**Base:** System.Object
**Source:** SandBox/BoardGames/BoardGameBase.cs

## 概述

`BoardGameBase` 的自动生成类参考页面。声明来自 `SandBox/BoardGames/BoardGameBase.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### InitializeUnits
`public abstract void InitializeUnits()`

### InitializeTiles
`public abstract void InitializeTiles()`

### InitializeSound
`public abstract void InitializeSound()`

### CalculateValidMoves
`public abstract List<Move> CalculateValidMoves(PawnBase pawn)`

### SelectPawn
`protected abstract PawnBase SelectPawn(PawnBase pawn)`

### CheckGameEnded
`protected abstract bool CheckGameEnded()`

### OnAfterBoardSetUp
`protected abstract void OnAfterBoardSetUp()`

### OnAfterBoardRotated
`protected virtual void OnAfterBoardRotated() `

### OnBeforeEndTurn
`protected virtual void OnBeforeEndTurn() `

### RollDice
`public virtual void RollDice() `

### UpdateAllTilesPositions
`protected virtual void UpdateAllTilesPositions() `

### InitializeDiceBoard
`public virtual void InitializeDiceBoard() `

### Reset
`public virtual void Reset() `

### OnPawnArrivesGoalPosition
`protected virtual void OnPawnArrivesGoalPosition(PawnBase pawn,Vec3 prevPos,Vec3 currentPos) `

### HandlePreMovementStage
`protected virtual void HandlePreMovementStage(float dt) `

### InitializeCapturedUnitsZones
`public virtual void InitializeCapturedUnitsZones() `

### HandlePreMovementStageAI
`protected virtual void HandlePreMovementStageAI(Move move) `

### SetPawnCaptured
`public virtual void SetPawnCaptured(PawnBase pawn,bool fake = false) `

### CalculateAllValidMoves
`public virtual List<List<Move>> CalculateAllValidMoves(BoardGameSide side) `

### SwitchPlayerTurn
`protected virtual void SwitchPlayerTurn() `

### MovePawnToTile
`protected virtual void MovePawnToTile(PawnBase pawn,TileBase tile,bool instantMove = false,bool displayMessage = true) `

### MovePawnToTileDelayed
`protected virtual void MovePawnToTileDelayed(PawnBase pawn,TileBase tile,bool instantMove,bool displayMessage,float delay) `

### OnAfterDiceRollAnimation
`protected virtual void OnAfterDiceRollAnimation() `

### SetUserRay
`public void SetUserRay(Vec3 rayBegin,Vec3 rayEnd) `

### SetStartingPlayer
`public void SetStartingPlayer(PlayerTurn player) `

### SetGameOverInfo
`public void SetGameOverInfo(GameOverEnum info) `

### HasMovesAvailable
`public bool HasMovesAvailable(ref List<List<Move>> moves) `

### GetTotalMovesAvailable
`public int GetTotalMovesAvailable(ref List<List<Move>> moves) `

### PlayDiceRollSound
`public void PlayDiceRollSound() `

### GetPlayerOneUnitsAlive
`public int GetPlayerOneUnitsAlive() `

### GetPlayerTwoUnitsAlive
`public int GetPlayerTwoUnitsAlive() `

### GetPlayerOneUnitsDead
`public int GetPlayerOneUnitsDead() `

### GetPlayerTwoUnitsDead
`public int GetPlayerTwoUnitsDead() `

### Initialize
`public void Initialize() `

### RemovePawnFromBoard
`protected void RemovePawnFromBoard(PawnBase pawn,float speed,bool instantMove = false) `

### Tick
`public bool Tick(float dt) `

### ForceDice
`public void ForceDice(int value) `

### InitializeUnit
`protected PawnBase InitializeUnit(PawnBase pawnToInit) `

### HandlePlayerInput
`protected Move HandlePlayerInput(float dt) `

### GetHoveredPawnIfAny
`protected PawnBase GetHoveredPawnIfAny() `

### GetHoveredTileIfAny
`protected TileBase GetHoveredTileIfAny() `

### CheckSwitchPlayerTurn
`protected void CheckSwitchPlayerTurn() `

### OnVictory
`protected void OnVictory(string message = "str_boardgame_victory_message") `

### OnAfterEndTurn
`protected void OnAfterEndTurn() `

### OnDefeat
`protected void OnDefeat(string message = "str_boardgame_defeat_message") `

### OnDraw
`protected void OnDraw(string message = "str_boardgame_draw_message") `

### EndTurn
`protected void EndTurn() `

### ClearValidMoves
`protected void ClearValidMoves() `

### HideAllValidTiles
`protected void HideAllValidTiles() `

### ShowAllValidTiles
`protected void ShowAllValidTiles() `

### OnAIWantsForfeit
`protected void OnAIWantsForfeit() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
