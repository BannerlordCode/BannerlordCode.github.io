---
title: "BoardGameKonane"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BoardGameKonane`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BoardGameKonane

**Namespace:** SandBox.BoardGames
**Module:** SandBox.BoardGames
**Type:** `public class BoardGameKonane : BoardGameBase`
**Base:** `BoardGameBase`
**File:** `SandBox/BoardGames/BoardGameKonane.cs`

## 概述

`BoardGameKonane` 位于 `SandBox.BoardGames`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.BoardGames` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TileCount` | `public override int TileCount { get; }` |

## 主要方法

### InitializeUnits
`public override void InitializeUnits()`

**用途 / Purpose:** 初始化 `units` 的状态、资源或绑定。

### InitializeTiles
`public override void InitializeTiles()`

**用途 / Purpose:** 初始化 `tiles` 的状态、资源或绑定。

### InitializeSound
`public override void InitializeSound()`

**用途 / Purpose:** 初始化 `sound` 的状态、资源或绑定。

### Reset
`public override void Reset()`

**用途 / Purpose:** 将 `reset` 重置为初始状态。

### CalculateValidMoves
`public override List<Move> CalculateValidMoves(PawnBase pawn)`

**用途 / Purpose:** 处理 `calculate valid moves` 相关逻辑。

### SetPawnCaptured
`public override void SetPawnCaptured(PawnBase pawn, bool fake = false)`

**用途 / Purpose:** 设置 `pawn captured` 的值或状态。

### AIMakeMove
`public void AIMakeMove(Move move)`

**用途 / Purpose:** 处理 `a i make move` 相关逻辑。

### CheckForRemovablePawns
`public int CheckForRemovablePawns(bool playerOne)`

**用途 / Purpose:** 处理 `check for removable pawns` 相关逻辑。

### TakeBoardSnapshot
`public BoardGameKonane.BoardInformation TakeBoardSnapshot()`

**用途 / Purpose:** 处理 `take board snapshot` 相关逻辑。

### UndoMove
`public void UndoMove(ref BoardGameKonane.BoardInformation board)`

**用途 / Purpose:** 处理 `undo move` 相关逻辑。

## 使用示例

```csharp
var value = new BoardGameKonane();
value.InitializeUnits();
```

## 参见

- [完整类目录](../catalog)