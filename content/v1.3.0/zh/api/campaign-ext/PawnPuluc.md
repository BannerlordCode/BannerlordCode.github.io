---
title: "PawnPuluc"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PawnPuluc`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PawnPuluc

**Namespace:** SandBox.BoardGames.Pawns
**Module:** SandBox.BoardGames
**Type:** `public class PawnPuluc : PawnBase`
**Base:** `PawnBase`
**File:** `SandBox/BoardGames/Pawns/PawnPuluc.cs`

## 概述

`PawnPuluc` 位于 `SandBox.BoardGames.Pawns`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.BoardGames.Pawns` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Height` | `public float Height { get; }` |
| `PosBeforeMoving` | `public override Vec3 PosBeforeMoving { get; }` |
| `IsPlaced` | `public override bool IsPlaced { get; set; }` |
| `X` | `public int X { get; set; }` |
| `PawnsBelow` | `public List<PawnPuluc> PawnsBelow { get; }` |
| `InPlay` | `public bool InPlay { get; }` |

## 主要方法

### Reset
`public override void Reset()`

**用途 / Purpose:** 将 `reset` 重置为初始状态。

### AddGoalPosition
`public override void AddGoalPosition(Vec3 goal)`

**用途 / Purpose:** 向当前集合/状态中添加 `goal position`。

### MovePawnToGoalPositions
`public override void MovePawnToGoalPositions(bool instantMove, float speed, bool dragged = false)`

**用途 / Purpose:** 处理 `move pawn to goal positions` 相关逻辑。

### SetPawnAtPosition
`public override void SetPawnAtPosition(Vec3 position)`

**用途 / Purpose:** 设置 `pawn at position` 的值或状态。

### EnableCollisionBody
`public override void EnableCollisionBody()`

**用途 / Purpose:** 处理 `enable collision body` 相关逻辑。

### DisableCollisionBody
`public override void DisableCollisionBody()`

**用途 / Purpose:** 处理 `disable collision body` 相关逻辑。

### MovePawnBackToSpawn
`public void MovePawnBackToSpawn(bool instantMove, float speed, bool fake = false)`

**用途 / Purpose:** 处理 `move pawn back to spawn` 相关逻辑。

## 使用示例

```csharp
var value = new PawnPuluc();
value.Reset();
```

## 参见

- [完整类目录](../catalog)