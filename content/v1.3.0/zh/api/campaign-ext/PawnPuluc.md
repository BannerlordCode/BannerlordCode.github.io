---
title: "PawnPuluc"
description: "PawnPuluc 的自动生成类参考。"
---
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

**用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 先通过子系统 API 拿到 PawnPuluc 实例
PawnPuluc pawnPuluc = ...;
pawnPuluc.Reset();
```

### AddGoalPosition
`public override void AddGoalPosition(Vec3 goal)`

**用途 / Purpose:** 将 「goal position」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 PawnPuluc 实例
PawnPuluc pawnPuluc = ...;
pawnPuluc.AddGoalPosition(goal);
```

### MovePawnToGoalPositions
`public override void MovePawnToGoalPositions(bool instantMove, float speed, bool dragged = false)`

**用途 / Purpose:** 移动「pawn to goal positions」到新的位置或状态。

```csharp
// 先通过子系统 API 拿到 PawnPuluc 实例
PawnPuluc pawnPuluc = ...;
pawnPuluc.MovePawnToGoalPositions(false, 0, false);
```

### SetPawnAtPosition
`public override void SetPawnAtPosition(Vec3 position)`

**用途 / Purpose:** 为 「pawn at position」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PawnPuluc 实例
PawnPuluc pawnPuluc = ...;
pawnPuluc.SetPawnAtPosition(position);
```

### EnableCollisionBody
`public override void EnableCollisionBody()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 PawnPuluc 实例
PawnPuluc pawnPuluc = ...;
pawnPuluc.EnableCollisionBody();
```

### DisableCollisionBody
`public override void DisableCollisionBody()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 PawnPuluc 实例
PawnPuluc pawnPuluc = ...;
pawnPuluc.DisableCollisionBody();
```

### MovePawnBackToSpawn
`public void MovePawnBackToSpawn(bool instantMove, float speed, bool fake = false)`

**用途 / Purpose:** 移动「pawn back to spawn」到新的位置或状态。

```csharp
// 先通过子系统 API 拿到 PawnPuluc 实例
PawnPuluc pawnPuluc = ...;
pawnPuluc.MovePawnBackToSpawn(false, 0, false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PawnPuluc pawnPuluc = ...;
pawnPuluc.Reset();
```

## 参见

- [本区域目录](../)