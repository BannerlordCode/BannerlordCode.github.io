---
title: "BoardGameBaghChal"
description: "BoardGameBaghChal 的自动生成类参考。"
---
# BoardGameBaghChal

**Namespace:** SandBox.BoardGames
**Module:** SandBox.BoardGames
**Type:** `public class BoardGameBaghChal : BoardGameBase`
**Base:** `BoardGameBase`
**File:** `SandBox/BoardGames/BoardGameBaghChal.cs`

## 概述

`BoardGameBaghChal` 位于 `SandBox.BoardGames`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.BoardGames` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TileCount` | `public override int TileCount { get; }` |

## 主要方法

### InitializeUnits
`public override void InitializeUnits()`

**用途 / Purpose:** 为 units 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 BoardGameBaghChal 实例
BoardGameBaghChal boardGameBaghChal = ...;
boardGameBaghChal.InitializeUnits();
```

### InitializeTiles
`public override void InitializeTiles()`

**用途 / Purpose:** 为 tiles 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 BoardGameBaghChal 实例
BoardGameBaghChal boardGameBaghChal = ...;
boardGameBaghChal.InitializeTiles();
```

### InitializeSound
`public override void InitializeSound()`

**用途 / Purpose:** 为 sound 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 BoardGameBaghChal 实例
BoardGameBaghChal boardGameBaghChal = ...;
boardGameBaghChal.InitializeSound();
```

### Reset
`public override void Reset()`

**用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 先通过子系统 API 拿到 BoardGameBaghChal 实例
BoardGameBaghChal boardGameBaghChal = ...;
boardGameBaghChal.Reset();
```

### CalculateAllValidMoves
`public override List<List<Move>> CalculateAllValidMoves(BoardGameSide side)`

**用途 / Purpose:** 计算all valid moves的当前值或结果。

```csharp
// 先通过子系统 API 拿到 BoardGameBaghChal 实例
BoardGameBaghChal boardGameBaghChal = ...;
var result = boardGameBaghChal.CalculateAllValidMoves(side);
```

### CalculateValidMoves
`public override List<Move> CalculateValidMoves(PawnBase pawn)`

**用途 / Purpose:** 计算valid moves的当前值或结果。

```csharp
// 先通过子系统 API 拿到 BoardGameBaghChal 实例
BoardGameBaghChal boardGameBaghChal = ...;
var result = boardGameBaghChal.CalculateValidMoves(pawn);
```

### SetPawnCaptured
`public override void SetPawnCaptured(PawnBase pawn, bool fake = false)`

**用途 / Purpose:** 为 pawn captured 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BoardGameBaghChal 实例
BoardGameBaghChal boardGameBaghChal = ...;
boardGameBaghChal.SetPawnCaptured(pawn, false);
```

### AIMakeMove
`public void AIMakeMove(Move move)`

**用途 / Purpose:** 调用 AIMakeMove 对应的操作。

```csharp
// 先通过子系统 API 拿到 BoardGameBaghChal 实例
BoardGameBaghChal boardGameBaghChal = ...;
boardGameBaghChal.AIMakeMove(move);
```

### TakeBoardSnapshot
`public BoardGameBaghChal.BoardInformation TakeBoardSnapshot()`

**用途 / Purpose:** 调用 TakeBoardSnapshot 对应的操作。

```csharp
// 先通过子系统 API 拿到 BoardGameBaghChal 实例
BoardGameBaghChal boardGameBaghChal = ...;
var result = boardGameBaghChal.TakeBoardSnapshot();
```

### UndoMove
`public void UndoMove(ref BoardGameBaghChal.BoardInformation board)`

**用途 / Purpose:** 调用 UndoMove 对应的操作。

```csharp
// 先通过子系统 API 拿到 BoardGameBaghChal 实例
BoardGameBaghChal boardGameBaghChal = ...;
boardGameBaghChal.UndoMove(board);
```

### GetANonePlacedGoat
`public PawnBaghChal GetANonePlacedGoat()`

**用途 / Purpose:** 读取并返回当前对象中 a none placed goat 的结果。

```csharp
// 先通过子系统 API 拿到 BoardGameBaghChal 实例
BoardGameBaghChal boardGameBaghChal = ...;
var result = boardGameBaghChal.GetANonePlacedGoat();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BoardGameBaghChal boardGameBaghChal = ...;
boardGameBaghChal.InitializeUnits();
```

## 参见

- [本区域目录](../)