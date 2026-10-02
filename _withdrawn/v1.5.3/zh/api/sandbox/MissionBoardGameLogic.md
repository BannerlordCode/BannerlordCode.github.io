---
title: "MissionBoardGameLogic"
description: "MissionBoardGameLogic 的自动生成类参考。"
---
# MissionBoardGameLogic

**Namespace:** SandBox.BoardGames.MissionLogics
**Module:** SandBox
**Type:** `public class MissionBoardGameLogic : MissionLogic `
**Base:** MissionLogic
**Source:** SandBox/BoardGames/MissionLogics/MissionBoardGameLogic.cs

## 概述

`MissionBoardGameLogic` 的自动生成类参考页面。声明来自 `SandBox/BoardGames/MissionLogics/MissionBoardGameLogic.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### AfterStart
`public override void AfterStart() `

### SetStartingPlayer
`public void SetStartingPlayer(bool playerOneStarts) `

### StartBoardGame
`public void StartBoardGame() `

### OnMissionTick
`public override void OnMissionTick(float dt) `

### DetectOpposingAgent
`public void DetectOpposingAgent() `

### CheckIfBothSidesAreSitting
`public bool CheckIfBothSidesAreSitting() `

### PlayerOneWon
`public void PlayerOneWon(string message = "str_boardgame_victory_message") `

### PlayerTwoWon
`public void PlayerTwoWon(string message = "str_boardgame_defeat_message") `

### GameWasDraw
`public void GameWasDraw(string message = "str_boardgame_draw_message") `

### SetGameOver
`public void SetGameOver(GameOverEnum gameOverInfo) `

### ForfeitGame
`public void ForfeitGame() `

### AIForfeitGame
`public void AIForfeitGame() `

### RollDice
`public void RollDice() `

### RequiresDiceRolling
`public bool RequiresDiceRolling() `

### SetBetAmount
`public void SetBetAmount(int bet) `

### SetCurrentDifficulty
`public void SetCurrentDifficulty(BoardGameHelper.AIDifficulty difficulty) `

### SetBoardGame
`public void SetBoardGame(CultureObject.BoardGameType game) `

### OnEndMission
`protected override void OnEndMission() `

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canLeave) `

### IsBoardGameAvailable
`public static bool IsBoardGameAvailable() `

### IsThereActiveBoardGameWithHero
`public static bool IsThereActiveBoardGameWithHero(Hero hero) `

### OnAgentInteraction
`public override void OnAgentInteraction(Agent userAgent,Agent agent,sbyte agentBoneIndex) `

### IsThereAgentAction
`public override bool IsThereAgentAction(Agent userAgent,Agent otherAgent) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
