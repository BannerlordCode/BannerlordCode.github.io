<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionBoardGameLogic`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionBoardGameLogic

**Namespace:** SandBox.BoardGames.MissionLogics
**Module:** SandBox.BoardGames
**Type:** `public class MissionBoardGameLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.BoardGames.MissionLogics/MissionBoardGameLogic.cs`

## 概述

`MissionBoardGameLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `MissionBoardGameLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Board` | `public BoardGameBase Board { get; }` |
| `AIOpponent` | `public BoardGameAIBase AIOpponent { get; }` |
| `IsGameInProgress` | `public bool IsGameInProgress { get; }` |
| `CurrentBoardGame` | `public BoardGameType CurrentBoardGame { get; }` |
| `Difficulty` | `public AIDifficulty Difficulty { get; }` |
| `BetAmount` | `public int BetAmount { get; }` |
| `OpposingAgent` | `public Agent OpposingAgent { get; }` |

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### SetStartingPlayer
`public void SetStartingPlayer(bool playerOneStarts)`

**用途 / Purpose:** 设置 `starting player` 的值或状态。

### StartBoardGame
`public void StartBoardGame()`

**用途 / Purpose:** 处理 `start board game` 相关逻辑。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### DetectOpposingAgent
`public void DetectOpposingAgent()`

**用途 / Purpose:** 处理 `detect opposing agent` 相关逻辑。

### CheckIfBothSidesAreSitting
`public bool CheckIfBothSidesAreSitting()`

**用途 / Purpose:** 处理 `check if both sides are sitting` 相关逻辑。

### PlayerOneWon
`public void PlayerOneWon(string message = "str_boardgame_victory_message")`

**用途 / Purpose:** 处理 `player one won` 相关逻辑。

### PlayerTwoWon
`public void PlayerTwoWon(string message = "str_boardgame_defeat_message")`

**用途 / Purpose:** 处理 `player two won` 相关逻辑。

### GameWasDraw
`public void GameWasDraw(string message = "str_boardgame_draw_message")`

**用途 / Purpose:** 处理 `game was draw` 相关逻辑。

### SetGameOver
`public void SetGameOver(GameOverEnum gameOverInfo)`

**用途 / Purpose:** 设置 `game over` 的值或状态。

### ForfeitGame
`public void ForfeitGame()`

**用途 / Purpose:** 处理 `forfeit game` 相关逻辑。

### AIForfeitGame
`public void AIForfeitGame()`

**用途 / Purpose:** 处理 `a i forfeit game` 相关逻辑。

### RollDice
`public void RollDice()`

**用途 / Purpose:** 处理 `roll dice` 相关逻辑。

### RequiresDiceRolling
`public bool RequiresDiceRolling()`

**用途 / Purpose:** 处理 `requires dice rolling` 相关逻辑。

### SetBetAmount
`public void SetBetAmount(int bet)`

**用途 / Purpose:** 设置 `bet amount` 的值或状态。

### SetCurrentDifficulty
`public void SetCurrentDifficulty(AIDifficulty difficulty)`

**用途 / Purpose:** 设置 `current difficulty` 的值或状态。

### SetBoardGame
`public void SetBoardGame(BoardGameType game)`

**用途 / Purpose:** 设置 `board game` 的值或状态。

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canLeave)`

**用途 / Purpose:** 当 `end mission request` 事件触发时调用此方法。

### IsBoardGameAvailable
`public static bool IsBoardGameAvailable()`

**用途 / Purpose:** 处理 `is board game available` 相关逻辑。

### IsThereActiveBoardGameWithHero
`public static bool IsThereActiveBoardGameWithHero(Hero hero)`

**用途 / Purpose:** 处理 `is there active board game with hero` 相关逻辑。

### OnAgentInteraction
`public override void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)`

**用途 / Purpose:** 当 `agent interaction` 事件触发时调用此方法。

### IsThereAgentAction
`public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)`

**用途 / Purpose:** 处理 `is there agent action` 相关逻辑。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new MissionBoardGameLogic());
```

## 参见

- [完整类目录](../catalog)