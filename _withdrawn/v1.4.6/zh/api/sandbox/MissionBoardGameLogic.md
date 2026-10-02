---
title: "MissionBoardGameLogic"
description: "MissionBoardGameLogic：SandBox.BoardGames.MissionLogics 的 public 类，继承 MissionLogic；公开成员 34 个（方法 23、属性 9、字段 0）。canonical 桶 sandbox。源文件 SandBox/BoardGames/MissionLogics/MissionBoardGameLogic.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionBoardGameLogic

**Namespace:** `SandBox.BoardGames.MissionLogics`
**Module:** `SandBox`
**Type:** `public class MissionBoardGameLogic : MissionLogic`
**File:** `SandBox/BoardGames/MissionLogics/MissionBoardGameLogic.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

MissionBoardGameLogic 位于 SandBox 模块，源文件 SandBox/BoardGames/MissionLogics/MissionBoardGameLogic.cs。它是一个 public 类，实现/继承 MissionLogic，继承链为 MissionBoardGameLogic → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 34 个：23 方法、9 属性、2 事件。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionBoardGameLogic 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.BoardGames.MissionLogics`，继承链 MissionBoardGameLogic → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 23/34，属性 9/34），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/BoardGames/MissionLogics/MissionBoardGameLogic.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GameStarted;` | `public event Action GameStarted;` | 事件 |
| `GameEnded;` | `public event Action GameEnded;` | 事件 |
| `Board` | `public BoardGameBase Board` | 属性 |
| `AIOpponent` | `public BoardGameAIBase AIOpponent` | 属性 |
| `IsOpposingAgentMovingToPlayingChair` | `public bool IsOpposingAgentMovingToPlayingChair` | 属性 |
| `IsGameInProgress` | `public bool IsGameInProgress` | 属性 |
| `BoardGameFinalState` | `public BoardGameHelper.BoardGameState BoardGameFinalState` | 属性 |
| `CurrentBoardGame` | `public CultureObject.BoardGameType CurrentBoardGame` | 属性 |
| `Difficulty` | `public BoardGameHelper.AIDifficulty Difficulty` | 属性 |
| `BetAmount` | `public int BetAmount` | 属性 |
| `OpposingAgent` | `public Agent OpposingAgent` | 属性 |
| `AfterStart` | `public override void AfterStart()` | 方法 |
| `SetStartingPlayer` | `public void SetStartingPlayer(bool playerOneStarts)` | 方法 |
| `StartBoardGame` | `public void StartBoardGame()` | 方法 |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | 方法 |
| `DetectOpposingAgent` | `public void DetectOpposingAgent()` | 方法 |
| `CheckIfBothSidesAreSitting` | `public bool CheckIfBothSidesAreSitting()` | 方法 |
| `PlayerOneWon` | `public void PlayerOneWon(string message = " ")` | 方法 |
| `PlayerTwoWon` | `public void PlayerTwoWon(string message = " ")` | 方法 |
| `GameWasDraw` | `public void GameWasDraw(string message = " ")` | 方法 |
| `SetGameOver` | `public void SetGameOver(GameOverEnum gameOverInfo)` | 方法 |
| `ForfeitGame` | `public void ForfeitGame()` | 方法 |
| `AIForfeitGame` | `public void AIForfeitGame()` | 方法 |
| `RollDice` | `public void RollDice()` | 方法 |
| `RequiresDiceRolling` | `public bool RequiresDiceRolling()` | 方法 |
| `SetBetAmount` | `public void SetBetAmount(int bet)` | 方法 |
| `SetCurrentDifficulty` | `public void SetCurrentDifficulty(BoardGameHelper.AIDifficulty difficulty)` | 方法 |
| `SetBoardGame` | `public void SetBoardGame(CultureObject.BoardGameType game)` | 方法 |
| `OnEndMission` | `protected override void OnEndMission()` | 方法 |
| `OnEndMissionRequest` | `public override InquiryData OnEndMissionRequest(out bool canLeave)` | 方法 |
| `IsBoardGameAvailable` | `public static bool IsBoardGameAvailable()` | 方法 |
| `IsThereActiveBoardGameWithHero` | `public static bool IsThereActiveBoardGameWithHero(Hero hero)` | 方法 |
| `OnAgentInteraction` | `public override void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)` | 方法 |
| `IsThereAgentAction` | `public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MissionLogic](../../mission-ext/MissionLogic/)
- [同命名空间 MissionBoardGameDebugHandler](../MissionBoardGameDebugHandler/)
