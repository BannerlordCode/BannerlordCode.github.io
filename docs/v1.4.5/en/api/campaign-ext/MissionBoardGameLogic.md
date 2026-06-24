<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionBoardGameLogic`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionBoardGameLogic

**Namespace:** SandBox.BoardGames.MissionLogics
**Module:** SandBox.BoardGames
**Type:** `public class MissionBoardGameLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.BoardGames.MissionLogics/MissionBoardGameLogic.cs`

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

**Purpose:** Handles logic related to `after start`.

### SetStartingPlayer
`public void SetStartingPlayer(bool playerOneStarts)`

**Purpose:** Sets the value or state of `starting player`.

### StartBoardGame
`public void StartBoardGame()`

**Purpose:** Handles logic related to `start board game`.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### DetectOpposingAgent
`public void DetectOpposingAgent()`

**Purpose:** Handles logic related to `detect opposing agent`.

### CheckIfBothSidesAreSitting
`public bool CheckIfBothSidesAreSitting()`

**Purpose:** Handles logic related to `check if both sides are sitting`.

### PlayerOneWon
`public void PlayerOneWon(string message = "str_boardgame_victory_message")`

**Purpose:** Handles logic related to `player one won`.

### PlayerTwoWon
`public void PlayerTwoWon(string message = "str_boardgame_defeat_message")`

**Purpose:** Handles logic related to `player two won`.

### GameWasDraw
`public void GameWasDraw(string message = "str_boardgame_draw_message")`

**Purpose:** Handles logic related to `game was draw`.

### SetGameOver
`public void SetGameOver(GameOverEnum gameOverInfo)`

**Purpose:** Sets the value or state of `game over`.

### ForfeitGame
`public void ForfeitGame()`

**Purpose:** Handles logic related to `forfeit game`.

### AIForfeitGame
`public void AIForfeitGame()`

**Purpose:** Handles logic related to `a i forfeit game`.

### RollDice
`public void RollDice()`

**Purpose:** Handles logic related to `roll dice`.

### RequiresDiceRolling
`public bool RequiresDiceRolling()`

**Purpose:** Handles logic related to `requires dice rolling`.

### SetBetAmount
`public void SetBetAmount(int bet)`

**Purpose:** Sets the value or state of `bet amount`.

### SetCurrentDifficulty
`public void SetCurrentDifficulty(AIDifficulty difficulty)`

**Purpose:** Sets the value or state of `current difficulty`.

### SetBoardGame
`public void SetBoardGame(BoardGameType game)`

**Purpose:** Sets the value or state of `board game`.

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canLeave)`

**Purpose:** Called when the `end mission request` event is raised.

### IsBoardGameAvailable
`public static bool IsBoardGameAvailable()`

**Purpose:** Handles logic related to `is board game available`.

### IsThereActiveBoardGameWithHero
`public static bool IsThereActiveBoardGameWithHero(Hero hero)`

**Purpose:** Handles logic related to `is there active board game with hero`.

### OnAgentInteraction
`public override void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)`

**Purpose:** Called when the `agent interaction` event is raised.

### IsThereAgentAction
`public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)`

**Purpose:** Handles logic related to `is there agent action`.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new MissionBoardGameLogic());
```

## See Also

- [Complete Class Catalog](../catalog)