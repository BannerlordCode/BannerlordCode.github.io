---
title: "BoardGameTablut"
description: "BoardGameTablut 的自动生成类参考。"
---
# BoardGameTablut

**Namespace:** SandBox.BoardGames
**Module:** SandBox.BoardGames
**Type:** `public class BoardGameTablut : BoardGameBase`
**Base:** `BoardGameBase`
**File:** `Modules.SandBox/SandBox/SandBox.BoardGames/BoardGameTablut.cs`

## 概述

`BoardGameTablut` 位于 `SandBox.BoardGames`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.BoardGames` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### PawnInformation
`public struct PawnInformation(int x, int y, bool captured)`

**用途 / Purpose:** 处理与 「pawn information」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 BoardGameTablut 实例
BoardGameTablut boardGameTablut = ...;
var result = boardGameTablut.PawnInformation(0, 0, false);
```

### BoardInformation
`public struct BoardInformation(ref PawnInformation pawns)`

**用途 / Purpose:** 处理与 「board information」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 BoardGameTablut 实例
BoardGameTablut boardGameTablut = ...;
var result = boardGameTablut.BoardInformation(pawns);
```

### IsCitadelTile
`public static bool IsCitadelTile(int tileX, int tileY)`

**用途 / Purpose:** 判断当前对象是否处于 「citadel tile」 状态或条件。

```csharp
// 静态调用，不需要实例
BoardGameTablut.IsCitadelTile(0, 0);
```

### InitializeUnits
`public override void InitializeUnits()`

**用途 / Purpose:** 为 「units」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 BoardGameTablut 实例
BoardGameTablut boardGameTablut = ...;
boardGameTablut.InitializeUnits();
```

### InitializeTiles
`public override void InitializeTiles()`

**用途 / Purpose:** 为 「tiles」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 BoardGameTablut 实例
BoardGameTablut boardGameTablut = ...;
boardGameTablut.InitializeTiles();
```

### InitializeSound
`public override void InitializeSound()`

**用途 / Purpose:** 为 「sound」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 BoardGameTablut 实例
BoardGameTablut boardGameTablut = ...;
boardGameTablut.InitializeSound();
```

### Reset
`public override void Reset()`

**用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 先通过子系统 API 拿到 BoardGameTablut 实例
BoardGameTablut boardGameTablut = ...;
boardGameTablut.Reset();
```

### CalculateValidMoves
`public override List<Move> CalculateValidMoves(PawnBase pawn)`

**用途 / Purpose:** 计算「valid moves」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 BoardGameTablut 实例
BoardGameTablut boardGameTablut = ...;
var result = boardGameTablut.CalculateValidMoves(pawn);
```

### SetPawnCaptured
`public override void SetPawnCaptured(PawnBase pawn, bool fake = false)`

**用途 / Purpose:** 为 「pawn captured」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BoardGameTablut 实例
BoardGameTablut boardGameTablut = ...;
boardGameTablut.SetPawnCaptured(pawn, false);
```

### AIMakeMove
`public bool AIMakeMove(Move move)`

**用途 / Purpose:** 处理与 「ai make move」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 BoardGameTablut 实例
BoardGameTablut boardGameTablut = ...;
var result = boardGameTablut.AIMakeMove(move);
```

### HasAvailableMoves
`public bool HasAvailableMoves(PawnTablut pawn)`

**用途 / Purpose:** 判断当前对象是否已经持有 「available moves」。

```csharp
// 先通过子系统 API 拿到 BoardGameTablut 实例
BoardGameTablut boardGameTablut = ...;
var result = boardGameTablut.HasAvailableMoves(pawn);
```

### GetRandomAvailableMove
`public Move GetRandomAvailableMove(PawnTablut pawn)`

**用途 / Purpose:** 读取并返回当前对象中 「random available move」 的结果。

```csharp
// 先通过子系统 API 拿到 BoardGameTablut 实例
BoardGameTablut boardGameTablut = ...;
var result = boardGameTablut.GetRandomAvailableMove(pawn);
```

### GetWinningMoveIfPresent
`public Move GetWinningMoveIfPresent(BoardGameSide side)`

**用途 / Purpose:** 读取并返回当前对象中 「winning move if present」 的结果。

```csharp
// 先通过子系统 API 拿到 BoardGameTablut 实例
BoardGameTablut boardGameTablut = ...;
var result = boardGameTablut.GetWinningMoveIfPresent(side);
```

### TakeBoardSnapshot
`public BoardInformation TakeBoardSnapshot()`

**用途 / Purpose:** 处理与 「take board snapshot」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 BoardGameTablut 实例
BoardGameTablut boardGameTablut = ...;
var result = boardGameTablut.TakeBoardSnapshot();
```

### UndoMove
`public void UndoMove(ref BoardInformation board)`

**用途 / Purpose:** 处理与 「undo move」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 BoardGameTablut 实例
BoardGameTablut boardGameTablut = ...;
boardGameTablut.UndoMove(board);
```

### CheckGameState
`public State CheckGameState()`

**用途 / Purpose:** 检查「game state」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 BoardGameTablut 实例
BoardGameTablut boardGameTablut = ...;
var result = boardGameTablut.CheckGameState();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BoardGameTablut boardGameTablut = ...;
boardGameTablut.PawnInformation(0, 0, false);
```

## 参见

- [本区域目录](../)