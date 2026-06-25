---
title: "BoardGameBase"
description: "BoardGameBase 的自动生成类参考。"
---
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

**用途 / Purpose:** 为 「units」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 BoardGameBase 实例
BoardGameBase boardGameBase = ...;
boardGameBase.InitializeUnits();
```

### InitializeTiles
`public abstract void InitializeTiles()`

**用途 / Purpose:** 为 「tiles」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 BoardGameBase 实例
BoardGameBase boardGameBase = ...;
boardGameBase.InitializeTiles();
```

### InitializeSound
`public abstract void InitializeSound()`

**用途 / Purpose:** 为 「sound」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 BoardGameBase 实例
BoardGameBase boardGameBase = ...;
boardGameBase.InitializeSound();
```

### CalculateValidMoves
`public abstract List<Move> CalculateValidMoves(PawnBase pawn)`

**用途 / Purpose:** 计算「valid moves」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 BoardGameBase 实例
BoardGameBase boardGameBase = ...;
var result = boardGameBase.CalculateValidMoves(pawn);
```

### RollDice
`public virtual void RollDice()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 BoardGameBase 实例
BoardGameBase boardGameBase = ...;
boardGameBase.RollDice();
```

### InitializeDiceBoard
`public virtual void InitializeDiceBoard()`

**用途 / Purpose:** 为 「dice board」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 BoardGameBase 实例
BoardGameBase boardGameBase = ...;
boardGameBase.InitializeDiceBoard();
```

### Reset
`public virtual void Reset()`

**用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 先通过子系统 API 拿到 BoardGameBase 实例
BoardGameBase boardGameBase = ...;
boardGameBase.Reset();
```

### InitializeCapturedUnitsZones
`public virtual void InitializeCapturedUnitsZones()`

**用途 / Purpose:** 为 「captured units zones」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 BoardGameBase 实例
BoardGameBase boardGameBase = ...;
boardGameBase.InitializeCapturedUnitsZones();
```

### SetPawnCaptured
`public virtual void SetPawnCaptured(PawnBase pawn, bool fake = false)`

**用途 / Purpose:** 为 「pawn captured」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BoardGameBase 实例
BoardGameBase boardGameBase = ...;
boardGameBase.SetPawnCaptured(pawn, false);
```

### CalculateAllValidMoves
`public virtual List<List<Move>> CalculateAllValidMoves(BoardGameSide side)`

**用途 / Purpose:** 计算「all valid moves」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 BoardGameBase 实例
BoardGameBase boardGameBase = ...;
var result = boardGameBase.CalculateAllValidMoves(side);
```

### SetUserRay
`public void SetUserRay(Vec3 rayBegin, Vec3 rayEnd)`

**用途 / Purpose:** 为 「user ray」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BoardGameBase 实例
BoardGameBase boardGameBase = ...;
boardGameBase.SetUserRay(rayBegin, rayEnd);
```

### SetStartingPlayer
`public void SetStartingPlayer(PlayerTurn player)`

**用途 / Purpose:** 为 「starting player」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BoardGameBase 实例
BoardGameBase boardGameBase = ...;
boardGameBase.SetStartingPlayer(player);
```

### SetGameOverInfo
`public void SetGameOverInfo(GameOverEnum info)`

**用途 / Purpose:** 为 「game over info」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BoardGameBase 实例
BoardGameBase boardGameBase = ...;
boardGameBase.SetGameOverInfo(info);
```

### HasMovesAvailable
`public bool HasMovesAvailable(ref List<List<Move>> moves)`

**用途 / Purpose:** 判断当前对象是否已经持有 「moves available」。

```csharp
// 先通过子系统 API 拿到 BoardGameBase 实例
BoardGameBase boardGameBase = ...;
var result = boardGameBase.HasMovesAvailable(moves);
```

### GetTotalMovesAvailable
`public int GetTotalMovesAvailable(ref List<List<Move>> moves)`

**用途 / Purpose:** 读取并返回当前对象中 「total moves available」 的结果。

```csharp
// 先通过子系统 API 拿到 BoardGameBase 实例
BoardGameBase boardGameBase = ...;
var result = boardGameBase.GetTotalMovesAvailable(moves);
```

### PlayDiceRollSound
`public void PlayDiceRollSound()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 BoardGameBase 实例
BoardGameBase boardGameBase = ...;
boardGameBase.PlayDiceRollSound();
```

### GetPlayerOneUnitsAlive
`public int GetPlayerOneUnitsAlive()`

**用途 / Purpose:** 读取并返回当前对象中 「player one units alive」 的结果。

```csharp
// 先通过子系统 API 拿到 BoardGameBase 实例
BoardGameBase boardGameBase = ...;
var result = boardGameBase.GetPlayerOneUnitsAlive();
```

### GetPlayerTwoUnitsAlive
`public int GetPlayerTwoUnitsAlive()`

**用途 / Purpose:** 读取并返回当前对象中 「player two units alive」 的结果。

```csharp
// 先通过子系统 API 拿到 BoardGameBase 实例
BoardGameBase boardGameBase = ...;
var result = boardGameBase.GetPlayerTwoUnitsAlive();
```

### GetPlayerOneUnitsDead
`public int GetPlayerOneUnitsDead()`

**用途 / Purpose:** 读取并返回当前对象中 「player one units dead」 的结果。

```csharp
// 先通过子系统 API 拿到 BoardGameBase 实例
BoardGameBase boardGameBase = ...;
var result = boardGameBase.GetPlayerOneUnitsDead();
```

### GetPlayerTwoUnitsDead
`public int GetPlayerTwoUnitsDead()`

**用途 / Purpose:** 读取并返回当前对象中 「player two units dead」 的结果。

```csharp
// 先通过子系统 API 拿到 BoardGameBase 实例
BoardGameBase boardGameBase = ...;
var result = boardGameBase.GetPlayerTwoUnitsDead();
```

### Initialize
`public void Initialize()`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 BoardGameBase 实例
BoardGameBase boardGameBase = ...;
boardGameBase.Initialize();
```

### Tick
`public bool Tick(float dt)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 BoardGameBase 实例
BoardGameBase boardGameBase = ...;
var result = boardGameBase.Tick(0);
```

### ForceDice
`public void ForceDice(int value)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 BoardGameBase 实例
BoardGameBase boardGameBase = ...;
boardGameBase.ForceDice(0);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
BoardGameBase instance = ...;
```

## 参见

- [本区域目录](../)