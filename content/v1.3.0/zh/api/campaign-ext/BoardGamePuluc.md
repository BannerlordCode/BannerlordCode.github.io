---
title: "BoardGamePuluc"
description: "BoardGamePuluc 的自动生成类参考。"
---
# BoardGamePuluc

**Namespace:** SandBox.BoardGames
**Module:** SandBox.BoardGames
**Type:** `public class BoardGamePuluc : BoardGameBase`
**Base:** `BoardGameBase`
**File:** `SandBox/BoardGames/BoardGamePuluc.cs`

## 概述

`BoardGamePuluc` 位于 `SandBox.BoardGames`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.BoardGames` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TileCount` | `public override int TileCount { get; }` |

## 主要方法

### InitializeUnits
`public override void InitializeUnits()`

**用途 / Purpose:** 为 「units」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 BoardGamePuluc 实例
BoardGamePuluc boardGamePuluc = ...;
boardGamePuluc.InitializeUnits();
```

### InitializeTiles
`public override void InitializeTiles()`

**用途 / Purpose:** 为 「tiles」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 BoardGamePuluc 实例
BoardGamePuluc boardGamePuluc = ...;
boardGamePuluc.InitializeTiles();
```

### InitializeSound
`public override void InitializeSound()`

**用途 / Purpose:** 为 「sound」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 BoardGamePuluc 实例
BoardGamePuluc boardGamePuluc = ...;
boardGamePuluc.InitializeSound();
```

### InitializeDiceBoard
`public override void InitializeDiceBoard()`

**用途 / Purpose:** 为 「dice board」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 BoardGamePuluc 实例
BoardGamePuluc boardGamePuluc = ...;
boardGamePuluc.InitializeDiceBoard();
```

### Reset
`public override void Reset()`

**用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 先通过子系统 API 拿到 BoardGamePuluc 实例
BoardGamePuluc boardGamePuluc = ...;
boardGamePuluc.Reset();
```

### CalculateValidMoves
`public override List<Move> CalculateValidMoves(PawnBase pawn)`

**用途 / Purpose:** 计算「valid moves」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 BoardGamePuluc 实例
BoardGamePuluc boardGamePuluc = ...;
var result = boardGamePuluc.CalculateValidMoves(pawn);
```

### RollDice
`public override void RollDice()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 BoardGamePuluc 实例
BoardGamePuluc boardGamePuluc = ...;
boardGamePuluc.RollDice();
```

### AIMakeMove
`public void AIMakeMove(Move move)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 BoardGamePuluc 实例
BoardGamePuluc boardGamePuluc = ...;
boardGamePuluc.AIMakeMove(move);
```

### TakeBoardSnapshot
`public BoardGamePuluc.BoardInformation TakeBoardSnapshot()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 BoardGamePuluc 实例
BoardGamePuluc boardGamePuluc = ...;
var result = boardGamePuluc.TakeBoardSnapshot();
```

### UndoMove
`public void UndoMove(ref BoardGamePuluc.BoardInformation board)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 BoardGamePuluc 实例
BoardGamePuluc boardGamePuluc = ...;
boardGamePuluc.UndoMove(board);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BoardGamePuluc boardGamePuluc = ...;
boardGamePuluc.InitializeUnits();
```

## 参见

- [本区域目录](../)