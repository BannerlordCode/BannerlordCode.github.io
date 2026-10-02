---
title: "MissionBoardGameLogic"
description: "MissionBoardGameLogic: a public class in SandBox.BoardGames.MissionLogics, inheriting MissionLogic; 34 exposed members (23 methods, 9 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/BoardGames/MissionLogics/MissionBoardGameLogic.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionBoardGameLogic

**Namespace:** `SandBox.BoardGames.MissionLogics`
**Module:** `SandBox`
**Type:** `public class MissionBoardGameLogic : MissionLogic`
**File:** `SandBox/BoardGames/MissionLogics/MissionBoardGameLogic.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MissionBoardGameLogic lives in the SandBox module, source file SandBox/BoardGames/MissionLogics/MissionBoardGameLogic.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is MissionBoardGameLogic → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 34 public/protected members: 23 methods, 9 properties, 2 events.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionBoardGameLogic lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.BoardGames.MissionLogics`, inheritance chain MissionBoardGameLogic → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 23/34, properties 9/34), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/BoardGames/MissionLogics/MissionBoardGameLogic.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GameStarted;` | `public event Action GameStarted;` | event |
| `GameEnded;` | `public event Action GameEnded;` | event |
| `Board` | `public BoardGameBase Board` | property |
| `AIOpponent` | `public BoardGameAIBase AIOpponent` | property |
| `IsOpposingAgentMovingToPlayingChair` | `public bool IsOpposingAgentMovingToPlayingChair` | property |
| `IsGameInProgress` | `public bool IsGameInProgress` | property |
| `BoardGameFinalState` | `public BoardGameHelper.BoardGameState BoardGameFinalState` | property |
| `CurrentBoardGame` | `public CultureObject.BoardGameType CurrentBoardGame` | property |
| `Difficulty` | `public BoardGameHelper.AIDifficulty Difficulty` | property |
| `BetAmount` | `public int BetAmount` | property |
| `OpposingAgent` | `public Agent OpposingAgent` | property |
| `AfterStart` | `public override void AfterStart()` | method |
| `SetStartingPlayer` | `public void SetStartingPlayer(bool playerOneStarts)` | method |
| `StartBoardGame` | `public void StartBoardGame()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `DetectOpposingAgent` | `public void DetectOpposingAgent()` | method |
| `CheckIfBothSidesAreSitting` | `public bool CheckIfBothSidesAreSitting()` | method |
| `PlayerOneWon` | `public void PlayerOneWon(string message = " ")` | method |
| `PlayerTwoWon` | `public void PlayerTwoWon(string message = " ")` | method |
| `GameWasDraw` | `public void GameWasDraw(string message = " ")` | method |
| `SetGameOver` | `public void SetGameOver(GameOverEnum gameOverInfo)` | method |
| `ForfeitGame` | `public void ForfeitGame()` | method |
| `AIForfeitGame` | `public void AIForfeitGame()` | method |
| `RollDice` | `public void RollDice()` | method |
| `RequiresDiceRolling` | `public bool RequiresDiceRolling()` | method |
| `SetBetAmount` | `public void SetBetAmount(int bet)` | method |
| `SetCurrentDifficulty` | `public void SetCurrentDifficulty(BoardGameHelper.AIDifficulty difficulty)` | method |
| `SetBoardGame` | `public void SetBoardGame(CultureObject.BoardGameType game)` | method |
| `OnEndMission` | `protected override void OnEndMission()` | method |
| `OnEndMissionRequest` | `public override InquiryData OnEndMissionRequest(out bool canLeave)` | method |
| `IsBoardGameAvailable` | `public static bool IsBoardGameAvailable()` | method |
| `IsThereActiveBoardGameWithHero` | `public static bool IsThereActiveBoardGameWithHero(Hero hero)` | method |
| `OnAgentInteraction` | `public override void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)` | method |
| `IsThereAgentAction` | `public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionLogic](../../mission-ext/MissionLogic/)
- [same namespace MissionBoardGameDebugHandler](../MissionBoardGameDebugHandler/)
