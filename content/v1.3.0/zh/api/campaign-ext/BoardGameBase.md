---
title: "BoardGameBase"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BoardGameBase`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BoardGameBase

**Namespace:** SandBox.BoardGames
**Module:** SandBox.BoardGames
**Type:** `public abstract class BoardGameBase`
**Base:** 无
**File:** `SandBox/BoardGames/BoardGameBase.cs`

## 概述

`BoardGameBase` 位于 `SandBox.BoardGames`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.BoardGames` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TileCount` | `public abstract int TileCount { get; }` |
| `Name` | `public TextObject Name { get; set; }` |
| `InPreMovementStage` | `public bool InPreMovementStage { get; set; }` |
| `Tiles` | `public TileBase Tiles { get; set; }` |
| `PlayerOneUnits` | `public List<PawnBase> PlayerOneUnits { get; set; }` |
| `PlayerTwoUnits` | `public List<PawnBase> PlayerTwoUnits { get; set; }` |
| `LastDice` | `public int LastDice { get; }` |
| `IsReady` | `public bool IsReady { get; }` |
| `PlayerWhoStarted` | `public PlayerTurn PlayerWhoStarted { get; }` |
| `GameOverInfo` | `public GameOverEnum GameOverInfo { get; }` |
| `PlayerTurn` | `public PlayerTurn PlayerTurn { get; set; }` |

## 主要方法

### InitializeUnits
`public abstract void InitializeUnits()`

**用途 / Purpose:** 初始化 `units` 的状态、资源或绑定。

### InitializeTiles
`public abstract void InitializeTiles()`

**用途 / Purpose:** 初始化 `tiles` 的状态、资源或绑定。

### InitializeSound
`public abstract void InitializeSound()`

**用途 / Purpose:** 初始化 `sound` 的状态、资源或绑定。

### CalculateValidMoves
`public abstract List<Move> CalculateValidMoves(PawnBase pawn)`

**用途 / Purpose:** 处理 `calculate valid moves` 相关逻辑。

### RollDice
`public virtual void RollDice()`

**用途 / Purpose:** 处理 `roll dice` 相关逻辑。

### InitializeDiceBoard
`public virtual void InitializeDiceBoard()`

**用途 / Purpose:** 初始化 `dice board` 的状态、资源或绑定。

### Reset
`public virtual void Reset()`

**用途 / Purpose:** 将 `reset` 重置为初始状态。

### InitializeCapturedUnitsZones
`public virtual void InitializeCapturedUnitsZones()`

**用途 / Purpose:** 初始化 `captured units zones` 的状态、资源或绑定。

### SetPawnCaptured
`public virtual void SetPawnCaptured(PawnBase pawn, bool fake = false)`

**用途 / Purpose:** 设置 `pawn captured` 的值或状态。

### CalculateAllValidMoves
`public virtual List<List<Move>> CalculateAllValidMoves(BoardGameSide side)`

**用途 / Purpose:** 处理 `calculate all valid moves` 相关逻辑。

### SetUserRay
`public void SetUserRay(Vec3 rayBegin, Vec3 rayEnd)`

**用途 / Purpose:** 设置 `user ray` 的值或状态。

### SetStartingPlayer
`public void SetStartingPlayer(PlayerTurn player)`

**用途 / Purpose:** 设置 `starting player` 的值或状态。

### SetGameOverInfo
`public void SetGameOverInfo(GameOverEnum info)`

**用途 / Purpose:** 设置 `game over info` 的值或状态。

### HasMovesAvailable
`public bool HasMovesAvailable(ref List<List<Move>> moves)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `moves available`。

### GetTotalMovesAvailable
`public int GetTotalMovesAvailable(ref List<List<Move>> moves)`

**用途 / Purpose:** 获取 `total moves available` 的当前值。

### PlayDiceRollSound
`public void PlayDiceRollSound()`

**用途 / Purpose:** 处理 `play dice roll sound` 相关逻辑。

### GetPlayerOneUnitsAlive
`public int GetPlayerOneUnitsAlive()`

**用途 / Purpose:** 获取 `player one units alive` 的当前值。

### GetPlayerTwoUnitsAlive
`public int GetPlayerTwoUnitsAlive()`

**用途 / Purpose:** 获取 `player two units alive` 的当前值。

### GetPlayerOneUnitsDead
`public int GetPlayerOneUnitsDead()`

**用途 / Purpose:** 获取 `player one units dead` 的当前值。

### GetPlayerTwoUnitsDead
`public int GetPlayerTwoUnitsDead()`

**用途 / Purpose:** 获取 `player two units dead` 的当前值。

### Initialize
`public void Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### Tick
`public bool Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### ForceDice
`public void ForceDice(int value)`

**用途 / Purpose:** 处理 `force dice` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomBoardGameBase();
```

## 参见

- [完整类目录](../catalog)