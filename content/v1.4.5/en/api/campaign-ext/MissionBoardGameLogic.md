---
title: "MissionBoardGameLogic"
description: "Auto-generated class reference for MissionBoardGameLogic."
---
# MissionBoardGameLogic

**Namespace:** SandBox.BoardGames.MissionLogics
**Module:** SandBox.BoardGames
**Type:** `public class MissionBoardGameLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.BoardGames.MissionLogics/MissionBoardGameLogic.cs`

## Overview

`MissionBoardGameLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `MissionBoardGameLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Board` | `public BoardGameBase Board { get; }` |
| `AIOpponent` | `public BoardGameAIBase AIOpponent { get; }` |
| `IsGameInProgress` | `public bool IsGameInProgress { get; }` |
| `CurrentBoardGame` | `public BoardGameType CurrentBoardGame { get; }` |
| `Difficulty` | `public AIDifficulty Difficulty { get; }` |
| `BetAmount` | `public int BetAmount { get; }` |
| `OpposingAgent` | `public Agent OpposingAgent { get; }` |

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of MissionBoardGameLogic from the subsystem API first
MissionBoardGameLogic missionBoardGameLogic = ...;
missionBoardGameLogic.AfterStart();
```

### SetStartingPlayer
`public void SetStartingPlayer(bool playerOneStarts)`

**Purpose:** Assigns a new value to starting player and updates the object's internal state.

```csharp
// Obtain an instance of MissionBoardGameLogic from the subsystem API first
MissionBoardGameLogic missionBoardGameLogic = ...;
missionBoardGameLogic.SetStartingPlayer(false);
```

### StartBoardGame
`public void StartBoardGame()`

**Purpose:** Starts the board game flow or state machine.

```csharp
// Obtain an instance of MissionBoardGameLogic from the subsystem API first
MissionBoardGameLogic missionBoardGameLogic = ...;
missionBoardGameLogic.StartBoardGame();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of MissionBoardGameLogic from the subsystem API first
MissionBoardGameLogic missionBoardGameLogic = ...;
missionBoardGameLogic.OnMissionTick(0);
```

### DetectOpposingAgent
`public void DetectOpposingAgent()`

**Purpose:** Executes the DetectOpposingAgent logic.

```csharp
// Obtain an instance of MissionBoardGameLogic from the subsystem API first
MissionBoardGameLogic missionBoardGameLogic = ...;
missionBoardGameLogic.DetectOpposingAgent();
```

### CheckIfBothSidesAreSitting
`public bool CheckIfBothSidesAreSitting()`

**Purpose:** Verifies whether if both sides are sitting holds true for the this instance.

```csharp
// Obtain an instance of MissionBoardGameLogic from the subsystem API first
MissionBoardGameLogic missionBoardGameLogic = ...;
var result = missionBoardGameLogic.CheckIfBothSidesAreSitting();
```

### PlayerOneWon
`public void PlayerOneWon(string message = "str_boardgame_victory_message")`

**Purpose:** Executes the PlayerOneWon logic.

```csharp
// Obtain an instance of MissionBoardGameLogic from the subsystem API first
MissionBoardGameLogic missionBoardGameLogic = ...;
missionBoardGameLogic.PlayerOneWon("example");
```

### PlayerTwoWon
`public void PlayerTwoWon(string message = "str_boardgame_defeat_message")`

**Purpose:** Executes the PlayerTwoWon logic.

```csharp
// Obtain an instance of MissionBoardGameLogic from the subsystem API first
MissionBoardGameLogic missionBoardGameLogic = ...;
missionBoardGameLogic.PlayerTwoWon("example");
```

### GameWasDraw
`public void GameWasDraw(string message = "str_boardgame_draw_message")`

**Purpose:** Executes the GameWasDraw logic.

```csharp
// Obtain an instance of MissionBoardGameLogic from the subsystem API first
MissionBoardGameLogic missionBoardGameLogic = ...;
missionBoardGameLogic.GameWasDraw("example");
```

### SetGameOver
`public void SetGameOver(GameOverEnum gameOverInfo)`

**Purpose:** Assigns a new value to game over and updates the object's internal state.

```csharp
// Obtain an instance of MissionBoardGameLogic from the subsystem API first
MissionBoardGameLogic missionBoardGameLogic = ...;
missionBoardGameLogic.SetGameOver(gameOverInfo);
```

### ForfeitGame
`public void ForfeitGame()`

**Purpose:** Executes the ForfeitGame logic.

```csharp
// Obtain an instance of MissionBoardGameLogic from the subsystem API first
MissionBoardGameLogic missionBoardGameLogic = ...;
missionBoardGameLogic.ForfeitGame();
```

### AIForfeitGame
`public void AIForfeitGame()`

**Purpose:** Executes the AIForfeitGame logic.

```csharp
// Obtain an instance of MissionBoardGameLogic from the subsystem API first
MissionBoardGameLogic missionBoardGameLogic = ...;
missionBoardGameLogic.AIForfeitGame();
```

### RollDice
`public void RollDice()`

**Purpose:** Executes the RollDice logic.

```csharp
// Obtain an instance of MissionBoardGameLogic from the subsystem API first
MissionBoardGameLogic missionBoardGameLogic = ...;
missionBoardGameLogic.RollDice();
```

### RequiresDiceRolling
`public bool RequiresDiceRolling()`

**Purpose:** Executes the RequiresDiceRolling logic.

```csharp
// Obtain an instance of MissionBoardGameLogic from the subsystem API first
MissionBoardGameLogic missionBoardGameLogic = ...;
var result = missionBoardGameLogic.RequiresDiceRolling();
```

### SetBetAmount
`public void SetBetAmount(int bet)`

**Purpose:** Assigns a new value to bet amount and updates the object's internal state.

```csharp
// Obtain an instance of MissionBoardGameLogic from the subsystem API first
MissionBoardGameLogic missionBoardGameLogic = ...;
missionBoardGameLogic.SetBetAmount(0);
```

### SetCurrentDifficulty
`public void SetCurrentDifficulty(AIDifficulty difficulty)`

**Purpose:** Assigns a new value to current difficulty and updates the object's internal state.

```csharp
// Obtain an instance of MissionBoardGameLogic from the subsystem API first
MissionBoardGameLogic missionBoardGameLogic = ...;
missionBoardGameLogic.SetCurrentDifficulty(difficulty);
```

### SetBoardGame
`public void SetBoardGame(BoardGameType game)`

**Purpose:** Assigns a new value to board game and updates the object's internal state.

```csharp
// Obtain an instance of MissionBoardGameLogic from the subsystem API first
MissionBoardGameLogic missionBoardGameLogic = ...;
missionBoardGameLogic.SetBoardGame(game);
```

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canLeave)`

**Purpose:** Invoked when the end mission request event is raised.

```csharp
// Obtain an instance of MissionBoardGameLogic from the subsystem API first
MissionBoardGameLogic missionBoardGameLogic = ...;
var result = missionBoardGameLogic.OnEndMissionRequest(canLeave);
```

### IsBoardGameAvailable
`public static bool IsBoardGameAvailable()`

**Purpose:** Determines whether the this instance is in the board game available state or condition.

```csharp
// Static call; no instance required
MissionBoardGameLogic.IsBoardGameAvailable();
```

### IsThereActiveBoardGameWithHero
`public static bool IsThereActiveBoardGameWithHero(Hero hero)`

**Purpose:** Determines whether the this instance is in the there active board game with hero state or condition.

```csharp
// Static call; no instance required
MissionBoardGameLogic.IsThereActiveBoardGameWithHero(hero);
```

### OnAgentInteraction
`public override void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)`

**Purpose:** Invoked when the agent interaction event is raised.

```csharp
// Obtain an instance of MissionBoardGameLogic from the subsystem API first
MissionBoardGameLogic missionBoardGameLogic = ...;
missionBoardGameLogic.OnAgentInteraction(userAgent, agent, 0);
```

### IsThereAgentAction
`public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)`

**Purpose:** Determines whether the this instance is in the there agent action state or condition.

```csharp
// Obtain an instance of MissionBoardGameLogic from the subsystem API first
MissionBoardGameLogic missionBoardGameLogic = ...;
var result = missionBoardGameLogic.IsThereAgentAction(userAgent, otherAgent);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionBoardGameLogic>();
```

## See Also

- [Area Index](../)