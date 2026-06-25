---
title: "PawnBase"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PawnBase`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PawnBase

**Namespace:** SandBox.BoardGames.Pawns
**Module:** SandBox.BoardGames
**Type:** `public abstract class PawnBase`
**Base:** 无
**File:** `SandBox/BoardGames/Pawns/PawnBase.cs`

## 概述

`PawnBase` 位于 `SandBox.BoardGames.Pawns`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.BoardGames.Pawns` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PawnMoveSoundCodeID` | `public static int PawnMoveSoundCodeID { get; set; }` |
| `PawnSelectSoundCodeID` | `public static int PawnSelectSoundCodeID { get; set; }` |
| `PawnTapSoundCodeID` | `public static int PawnTapSoundCodeID { get; set; }` |
| `PawnRemoveSoundCodeID` | `public static int PawnRemoveSoundCodeID { get; set; }` |
| `IsPlaced` | `public abstract bool IsPlaced { get; set; }` |
| `PosBeforeMoving` | `public virtual Vec3 PosBeforeMoving { get; set; }` |
| `Entity` | `public GameEntity Entity { get; }` |
| `Captured` | `public bool Captured { get; }` |
| `MovingToDifferentTile` | `public bool MovingToDifferentTile { get; }` |
| `Moving` | `public bool Moving { get; }` |
| `PlayerOne` | `public bool PlayerOne { get; }` |
| `HasAnyGoalPosition` | `public bool HasAnyGoalPosition { get; }` |

## 主要方法

### Reset
`public virtual void Reset()`

**用途 / Purpose:** 将 `reset` 重置为初始状态。

### AddGoalPosition
`public virtual void AddGoalPosition(Vec3 goal)`

**用途 / Purpose:** 向当前集合/状态中添加 `goal position`。

### SetPawnAtPosition
`public virtual void SetPawnAtPosition(Vec3 position)`

**用途 / Purpose:** 设置 `pawn at position` 的值或状态。

### MovePawnToGoalPositions
`public virtual void MovePawnToGoalPositions(bool instantMove, float speed, bool dragged = false)`

**用途 / Purpose:** 处理 `move pawn to goal positions` 相关逻辑。

### EnableCollisionBody
`public virtual void EnableCollisionBody()`

**用途 / Purpose:** 处理 `enable collision body` 相关逻辑。

### DisableCollisionBody
`public virtual void DisableCollisionBody()`

**用途 / Purpose:** 处理 `disable collision body` 相关逻辑。

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### MovePawnToGoalPositionsDelayed
`public void MovePawnToGoalPositionsDelayed(bool instantMove, float speed, bool dragged, float delay)`

**用途 / Purpose:** 处理 `move pawn to goal positions delayed` 相关逻辑。

### SetPlayerOne
`public void SetPlayerOne(bool playerOne)`

**用途 / Purpose:** 设置 `player one` 的值或状态。

### ClearGoalPositions
`public void ClearGoalPositions()`

**用途 / Purpose:** 处理 `clear goal positions` 相关逻辑。

### UpdatePawnPosition
`public void UpdatePawnPosition()`

**用途 / Purpose:** 更新 `pawn position` 的状态或数据。

### PlayPawnSelectSound
`public void PlayPawnSelectSound()`

**用途 / Purpose:** 处理 `play pawn select sound` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomPawnBase();
```

## 参见

- [完整类目录](../catalog)