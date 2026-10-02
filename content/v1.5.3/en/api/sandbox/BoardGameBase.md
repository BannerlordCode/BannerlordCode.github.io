---
title: "BoardGameBase"
description: "Auto-generated class reference for BoardGameBase."
---
# BoardGameBase

**Namespace:** SandBox.BoardGames
**Module:** SandBox
**Type:** `public abstract class BoardGameBase `
**Base:** System.Object
**Source:** SandBox/BoardGames/BoardGameBase.cs

## Overview

Auto-generated stub for `BoardGameBase`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

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
`protected virtual void OnAfterBoardRotated()`

### OnBeforeEndTurn
`protected virtual void OnBeforeEndTurn()`

### RollDice
`public virtual void RollDice()`

### UpdateAllTilesPositions
`protected virtual void UpdateAllTilesPositions()`

### InitializeDiceBoard
`public virtual void InitializeDiceBoard()`

### Reset
`public virtual void Reset()`

### OnPawnArrivesGoalPosition
`protected virtual void OnPawnArrivesGoalPosition(PawnBase pawn,Vec3 prevPos,Vec3 currentPos)`

### HandlePreMovementStage
`protected virtual void HandlePreMovementStage(float dt)`

### InitializeCapturedUnitsZones
`public virtual void InitializeCapturedUnitsZones()`

### HandlePreMovementStageAI
`protected virtual void HandlePreMovementStageAI(Move move)`

### SetPawnCaptured
`public virtual void SetPawnCaptured(PawnBase pawn,bool fake = false)`

### CalculateAllValidMoves
`public virtual List<List<Move>> CalculateAllValidMoves(BoardGameSide side)`

### SwitchPlayerTurn
`protected virtual void SwitchPlayerTurn()`

### MovePawnToTile
`protected virtual void MovePawnToTile(PawnBase pawn,TileBase tile,bool instantMove = false,bool displayMessage = true)`

### MovePawnToTileDelayed
`protected virtual void MovePawnToTileDelayed(PawnBase pawn,TileBase tile,bool instantMove,bool displayMessage,float delay)`

### OnAfterDiceRollAnimation
`protected virtual void OnAfterDiceRollAnimation()`

### SetUserRay
`public void SetUserRay(Vec3 rayBegin,Vec3 rayEnd)`

### SetStartingPlayer
`public void SetStartingPlayer(PlayerTurn player)`

### SetGameOverInfo
`public void SetGameOverInfo(GameOverEnum info)`

### HasMovesAvailable
`public bool HasMovesAvailable(ref List<List<Move>> moves)`

### GetTotalMovesAvailable
`public int GetTotalMovesAvailable(ref List<List<Move>> moves)`

### PlayDiceRollSound
`public void PlayDiceRollSound()`

### GetPlayerOneUnitsAlive
`public int GetPlayerOneUnitsAlive()`

### GetPlayerTwoUnitsAlive
`public int GetPlayerTwoUnitsAlive()`

### GetPlayerOneUnitsDead
`public int GetPlayerOneUnitsDead()`

### GetPlayerTwoUnitsDead
`public int GetPlayerTwoUnitsDead()`

### Initialize
`public void Initialize()`

### RemovePawnFromBoard
`protected void RemovePawnFromBoard(PawnBase pawn,float speed,bool instantMove = false)`

### Tick
`public bool Tick(float dt)`

### ForceDice
`public void ForceDice(int value)`

### InitializeUnit
`protected PawnBase InitializeUnit(PawnBase pawnToInit)`

### HandlePlayerInput
`protected Move HandlePlayerInput(float dt)`

### GetHoveredPawnIfAny
`protected PawnBase GetHoveredPawnIfAny()`

### GetHoveredTileIfAny
`protected TileBase GetHoveredTileIfAny()`

### CheckSwitchPlayerTurn
`protected void CheckSwitchPlayerTurn()`

### OnVictory
`protected void OnVictory(string message = "str_boardgame_victory_message")`

### OnAfterEndTurn
`protected void OnAfterEndTurn()`

### OnDefeat
`protected void OnDefeat(string message = "str_boardgame_defeat_message")`

### OnDraw
`protected void OnDraw(string message = "str_boardgame_draw_message")`

### EndTurn
`protected void EndTurn()`

### ClearValidMoves
`protected void ClearValidMoves()`

### HideAllValidTiles
`protected void HideAllValidTiles()`

### ShowAllValidTiles
`protected void ShowAllValidTiles()`

### OnAIWantsForfeit
`protected void OnAIWantsForfeit()`

## See Also

- [Section index](../)
