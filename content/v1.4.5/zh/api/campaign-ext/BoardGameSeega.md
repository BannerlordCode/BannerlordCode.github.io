---
title: "BoardGameSeega"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BoardGameSeega`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BoardGameSeega

**Namespace:** SandBox.BoardGames
**Module:** SandBox.BoardGames
**Type:** `public class BoardGameSeega : BoardGameBase`
**Base:** `BoardGameBase`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.BoardGames/BoardGameSeega.cs`

## 概述

`BoardGameSeega` 位于 `SandBox.BoardGames`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.BoardGames` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### BoardInformation
`public struct BoardInformation(ref PawnInformation pawns, ref TileBaseInformation tiles)`

**用途 / Purpose:** 处理 `board information` 相关逻辑。

### PawnInformation
`public struct PawnInformation(int x, int y, int prevX, int prevY, bool movedThisTurn, bool captured, Vec3 position)`

**用途 / Purpose:** 处理 `pawn information` 相关逻辑。

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
`public override void SetPawnCaptured(PawnBase pawn, bool aiSimulation = false)`

**用途 / Purpose:** 设置 `pawn captured` 的值或状态。

### AIMakeMove
`public void AIMakeMove(Move move)`

**用途 / Purpose:** 处理 `a i make move` 相关逻辑。

### GetBlockingPawns
`public Dictionary<PawnBase, int> GetBlockingPawns(bool playerOneBlocked)`

**用途 / Purpose:** 获取 `blocking pawns` 的当前值。

### TakeBoardSnapshot
`public BoardInformation TakeBoardSnapshot()`

**用途 / Purpose:** 处理 `take board snapshot` 相关逻辑。

### UndoMove
`public void UndoMove(ref BoardInformation board)`

**用途 / Purpose:** 处理 `undo move` 相关逻辑。

### GetTile
`public TileBase GetTile(int x, int y)`

**用途 / Purpose:** 获取 `tile` 的当前值。

## 使用示例

```csharp
var value = new BoardGameSeega();
value.BoardInformation(pawns, tiles);
```

## 参见

- [完整类目录](../catalog)