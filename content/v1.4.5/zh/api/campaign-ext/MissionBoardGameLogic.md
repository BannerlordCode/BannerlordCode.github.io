---
title: "MissionBoardGameLogic"
description: "MissionBoardGameLogic 的自动生成类参考。"
---
# MissionBoardGameLogic

**Namespace:** SandBox.BoardGames.MissionLogics
**Module:** SandBox.BoardGames
**Type:** `public class MissionBoardGameLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.BoardGames.MissionLogics/MissionBoardGameLogic.cs`

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

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MissionBoardGameLogic 实例
MissionBoardGameLogic missionBoardGameLogic = ...;
missionBoardGameLogic.AfterStart();
```

### SetStartingPlayer
`public void SetStartingPlayer(bool playerOneStarts)`

**用途 / Purpose:** 为 「starting player」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionBoardGameLogic 实例
MissionBoardGameLogic missionBoardGameLogic = ...;
missionBoardGameLogic.SetStartingPlayer(false);
```

### StartBoardGame
`public void StartBoardGame()`

**用途 / Purpose:** 启动「board game」流程或状态机。

```csharp
// 先通过子系统 API 拿到 MissionBoardGameLogic 实例
MissionBoardGameLogic missionBoardGameLogic = ...;
missionBoardGameLogic.StartBoardGame();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 「mission tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBoardGameLogic 实例
MissionBoardGameLogic missionBoardGameLogic = ...;
missionBoardGameLogic.OnMissionTick(0);
```

### DetectOpposingAgent
`public void DetectOpposingAgent()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MissionBoardGameLogic 实例
MissionBoardGameLogic missionBoardGameLogic = ...;
missionBoardGameLogic.DetectOpposingAgent();
```

### CheckIfBothSidesAreSitting
`public bool CheckIfBothSidesAreSitting()`

**用途 / Purpose:** 检查「if both sides are sitting」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 MissionBoardGameLogic 实例
MissionBoardGameLogic missionBoardGameLogic = ...;
var result = missionBoardGameLogic.CheckIfBothSidesAreSitting();
```

### PlayerOneWon
`public void PlayerOneWon(string message = "str_boardgame_victory_message")`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MissionBoardGameLogic 实例
MissionBoardGameLogic missionBoardGameLogic = ...;
missionBoardGameLogic.PlayerOneWon("example");
```

### PlayerTwoWon
`public void PlayerTwoWon(string message = "str_boardgame_defeat_message")`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MissionBoardGameLogic 实例
MissionBoardGameLogic missionBoardGameLogic = ...;
missionBoardGameLogic.PlayerTwoWon("example");
```

### GameWasDraw
`public void GameWasDraw(string message = "str_boardgame_draw_message")`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MissionBoardGameLogic 实例
MissionBoardGameLogic missionBoardGameLogic = ...;
missionBoardGameLogic.GameWasDraw("example");
```

### SetGameOver
`public void SetGameOver(GameOverEnum gameOverInfo)`

**用途 / Purpose:** 为 「game over」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionBoardGameLogic 实例
MissionBoardGameLogic missionBoardGameLogic = ...;
missionBoardGameLogic.SetGameOver(gameOverInfo);
```

### ForfeitGame
`public void ForfeitGame()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MissionBoardGameLogic 实例
MissionBoardGameLogic missionBoardGameLogic = ...;
missionBoardGameLogic.ForfeitGame();
```

### AIForfeitGame
`public void AIForfeitGame()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MissionBoardGameLogic 实例
MissionBoardGameLogic missionBoardGameLogic = ...;
missionBoardGameLogic.AIForfeitGame();
```

### RollDice
`public void RollDice()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MissionBoardGameLogic 实例
MissionBoardGameLogic missionBoardGameLogic = ...;
missionBoardGameLogic.RollDice();
```

### RequiresDiceRolling
`public bool RequiresDiceRolling()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MissionBoardGameLogic 实例
MissionBoardGameLogic missionBoardGameLogic = ...;
var result = missionBoardGameLogic.RequiresDiceRolling();
```

### SetBetAmount
`public void SetBetAmount(int bet)`

**用途 / Purpose:** 为 「bet amount」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionBoardGameLogic 实例
MissionBoardGameLogic missionBoardGameLogic = ...;
missionBoardGameLogic.SetBetAmount(0);
```

### SetCurrentDifficulty
`public void SetCurrentDifficulty(AIDifficulty difficulty)`

**用途 / Purpose:** 为 「current difficulty」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionBoardGameLogic 实例
MissionBoardGameLogic missionBoardGameLogic = ...;
missionBoardGameLogic.SetCurrentDifficulty(difficulty);
```

### SetBoardGame
`public void SetBoardGame(BoardGameType game)`

**用途 / Purpose:** 为 「board game」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionBoardGameLogic 实例
MissionBoardGameLogic missionBoardGameLogic = ...;
missionBoardGameLogic.SetBoardGame(game);
```

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canLeave)`

**用途 / Purpose:** 在 「end mission request」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBoardGameLogic 实例
MissionBoardGameLogic missionBoardGameLogic = ...;
var result = missionBoardGameLogic.OnEndMissionRequest(canLeave);
```

### IsBoardGameAvailable
`public static bool IsBoardGameAvailable()`

**用途 / Purpose:** 判断当前对象是否处于 「board game available」 状态或条件。

```csharp
// 静态调用，不需要实例
MissionBoardGameLogic.IsBoardGameAvailable();
```

### IsThereActiveBoardGameWithHero
`public static bool IsThereActiveBoardGameWithHero(Hero hero)`

**用途 / Purpose:** 判断当前对象是否处于 「there active board game with hero」 状态或条件。

```csharp
// 静态调用，不需要实例
MissionBoardGameLogic.IsThereActiveBoardGameWithHero(hero);
```

### OnAgentInteraction
`public override void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)`

**用途 / Purpose:** 在 「agent interaction」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBoardGameLogic 实例
MissionBoardGameLogic missionBoardGameLogic = ...;
missionBoardGameLogic.OnAgentInteraction(userAgent, agent, 0);
```

### IsThereAgentAction
`public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)`

**用途 / Purpose:** 判断当前对象是否处于 「there agent action」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionBoardGameLogic 实例
MissionBoardGameLogic missionBoardGameLogic = ...;
var result = missionBoardGameLogic.IsThereAgentAction(userAgent, otherAgent);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionBoardGameLogic>();
```

## 参见

- [本区域目录](../)