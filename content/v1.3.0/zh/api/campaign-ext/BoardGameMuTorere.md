---
title: "BoardGameMuTorere"
description: "BoardGameMuTorere 的自动生成类参考。"
---
# BoardGameMuTorere

**Namespace:** SandBox.BoardGames
**Module:** SandBox.BoardGames
**Type:** `public class BoardGameMuTorere : BoardGameBase`
**Base:** `BoardGameBase`
**File:** `SandBox/BoardGames/BoardGameMuTorere.cs`

## 概述

`BoardGameMuTorere` 位于 `SandBox.BoardGames`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

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
// 先通过子系统 API 拿到 BoardGameMuTorere 实例
BoardGameMuTorere boardGameMuTorere = ...;
boardGameMuTorere.InitializeUnits();
```

### InitializeTiles
`public override void InitializeTiles()`

**用途 / Purpose:** 为 「tiles」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 BoardGameMuTorere 实例
BoardGameMuTorere boardGameMuTorere = ...;
boardGameMuTorere.InitializeTiles();
```

### InitializeCapturedUnitsZones
`public override void InitializeCapturedUnitsZones()`

**用途 / Purpose:** 为 「captured units zones」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 BoardGameMuTorere 实例
BoardGameMuTorere boardGameMuTorere = ...;
boardGameMuTorere.InitializeCapturedUnitsZones();
```

### InitializeSound
`public override void InitializeSound()`

**用途 / Purpose:** 为 「sound」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 BoardGameMuTorere 实例
BoardGameMuTorere boardGameMuTorere = ...;
boardGameMuTorere.InitializeSound();
```

### Reset
`public override void Reset()`

**用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 先通过子系统 API 拿到 BoardGameMuTorere 实例
BoardGameMuTorere boardGameMuTorere = ...;
boardGameMuTorere.Reset();
```

### CalculateValidMoves
`public override List<Move> CalculateValidMoves(PawnBase pawn)`

**用途 / Purpose:** 计算「valid moves」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 BoardGameMuTorere 实例
BoardGameMuTorere boardGameMuTorere = ...;
var result = boardGameMuTorere.CalculateValidMoves(pawn);
```

### FindTileByCoordinate
`public TileMuTorere FindTileByCoordinate(int x)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「tile by coordinate」。

```csharp
// 先通过子系统 API 拿到 BoardGameMuTorere 实例
BoardGameMuTorere boardGameMuTorere = ...;
var result = boardGameMuTorere.FindTileByCoordinate(0);
```

### TakePawnsSnapshot
`public BoardGameMuTorere.BoardInformation TakePawnsSnapshot()`

**用途 / Purpose:** 处理与 「take pawns snapshot」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 BoardGameMuTorere 实例
BoardGameMuTorere boardGameMuTorere = ...;
var result = boardGameMuTorere.TakePawnsSnapshot();
```

### UndoMove
`public void UndoMove(ref BoardGameMuTorere.BoardInformation board)`

**用途 / Purpose:** 处理与 「undo move」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 BoardGameMuTorere 实例
BoardGameMuTorere boardGameMuTorere = ...;
boardGameMuTorere.UndoMove(board);
```

### AIMakeMove
`public void AIMakeMove(Move move)`

**用途 / Purpose:** 处理与 「ai make move」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 BoardGameMuTorere 实例
BoardGameMuTorere boardGameMuTorere = ...;
boardGameMuTorere.AIMakeMove(move);
```

### FindAvailableTile
`public TileBase FindAvailableTile()`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「available tile」。

```csharp
// 先通过子系统 API 拿到 BoardGameMuTorere 实例
BoardGameMuTorere boardGameMuTorere = ...;
var result = boardGameMuTorere.FindAvailableTile();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BoardGameMuTorere boardGameMuTorere = ...;
boardGameMuTorere.InitializeUnits();
```

## 参见

- [本区域目录](../)