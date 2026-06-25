---
title: "PawnBase"
description: "PawnBase 的自动生成类参考。"
---
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

**用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 先通过子系统 API 拿到 PawnBase 实例
PawnBase pawnBase = ...;
pawnBase.Reset();
```

### AddGoalPosition
`public virtual void AddGoalPosition(Vec3 goal)`

**用途 / Purpose:** 将 「goal position」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 PawnBase 实例
PawnBase pawnBase = ...;
pawnBase.AddGoalPosition(goal);
```

### SetPawnAtPosition
`public virtual void SetPawnAtPosition(Vec3 position)`

**用途 / Purpose:** 为 「pawn at position」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PawnBase 实例
PawnBase pawnBase = ...;
pawnBase.SetPawnAtPosition(position);
```

### MovePawnToGoalPositions
`public virtual void MovePawnToGoalPositions(bool instantMove, float speed, bool dragged = false)`

**用途 / Purpose:** 移动「pawn to goal positions」到新的位置或状态。

```csharp
// 先通过子系统 API 拿到 PawnBase 实例
PawnBase pawnBase = ...;
pawnBase.MovePawnToGoalPositions(false, 0, false);
```

### EnableCollisionBody
`public virtual void EnableCollisionBody()`

**用途 / Purpose:** 处理与 「enable collision body」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 PawnBase 实例
PawnBase pawnBase = ...;
pawnBase.EnableCollisionBody();
```

### DisableCollisionBody
`public virtual void DisableCollisionBody()`

**用途 / Purpose:** 处理与 「disable collision body」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 PawnBase 实例
PawnBase pawnBase = ...;
pawnBase.DisableCollisionBody();
```

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 PawnBase 实例
PawnBase pawnBase = ...;
pawnBase.Tick(0);
```

### MovePawnToGoalPositionsDelayed
`public void MovePawnToGoalPositionsDelayed(bool instantMove, float speed, bool dragged, float delay)`

**用途 / Purpose:** 移动「pawn to goal positions delayed」到新的位置或状态。

```csharp
// 先通过子系统 API 拿到 PawnBase 实例
PawnBase pawnBase = ...;
pawnBase.MovePawnToGoalPositionsDelayed(false, 0, false, 0);
```

### SetPlayerOne
`public void SetPlayerOne(bool playerOne)`

**用途 / Purpose:** 为 「player one」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PawnBase 实例
PawnBase pawnBase = ...;
pawnBase.SetPlayerOne(false);
```

### ClearGoalPositions
`public void ClearGoalPositions()`

**用途 / Purpose:** 清空当前对象中的「goal positions」。

```csharp
// 先通过子系统 API 拿到 PawnBase 实例
PawnBase pawnBase = ...;
pawnBase.ClearGoalPositions();
```

### UpdatePawnPosition
`public void UpdatePawnPosition()`

**用途 / Purpose:** 重新计算并更新 「pawn position」 的最新表示。

```csharp
// 先通过子系统 API 拿到 PawnBase 实例
PawnBase pawnBase = ...;
pawnBase.UpdatePawnPosition();
```

### PlayPawnSelectSound
`public void PlayPawnSelectSound()`

**用途 / Purpose:** 处理与 「play pawn select sound」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 PawnBase 实例
PawnBase pawnBase = ...;
pawnBase.PlayPawnSelectSound();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
PawnBase instance = ...;
```

## 参见

- [本区域目录](../)