---
title: "PawnBase"
description: "PawnBase：SandBox.BoardGames.Pawns 的 public 类；公开成员 26 个（方法 12、属性 13、字段 0）。canonical 桶 sandbox。源文件 SandBox/BoardGames/Pawns/PawnBase.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PawnBase

**Namespace:** `SandBox.BoardGames.Pawns`
**Module:** `SandBox`
**Type:** `public abstract class PawnBase`
**File:** `SandBox/BoardGames/Pawns/PawnBase.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

PawnBase 位于 SandBox 模块，源文件 SandBox/BoardGames/Pawns/PawnBase.cs。它是一个 public 类（abstract），继承链为 PawnBase。public/protected 成员共 26 个：12 方法、13 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PawnBase 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.BoardGames.Pawns`，继承链 PawnBase。成员构成以属性为主（属性 13/26，方法 12/26），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/BoardGames/Pawns/PawnBase.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PawnMoveSoundCodeID` | `public static int PawnMoveSoundCodeID` | 属性 |
| `PawnSelectSoundCodeID` | `public static int PawnSelectSoundCodeID` | 属性 |
| `PawnTapSoundCodeID` | `public static int PawnTapSoundCodeID` | 属性 |
| `PawnRemoveSoundCodeID` | `public static int PawnRemoveSoundCodeID` | 属性 |
| `IsPlaced` | `public abstract bool IsPlaced` | 属性 |
| `PosBeforeMoving` | `public virtual Vec3 PosBeforeMoving` | 属性 |
| `Entity` | `public GameEntity Entity` | 属性 |
| `List` | `protected List<Vec3>GoalPositions` | 属性 |
| `Captured` | `public bool Captured` | 属性 |
| `MovingToDifferentTile` | `public bool MovingToDifferentTile` | 属性 |
| `Moving` | `public bool Moving` | 属性 |
| `PlayerOne` | `public bool PlayerOne` | 属性 |
| `HasAnyGoalPosition` | `public bool HasAnyGoalPosition` | 属性 |
| `PawnBase` | `protected PawnBase(GameEntity entity, bool playerOne)` | 构造函数 |
| `Reset` | `public virtual void Reset()` | 方法 |
| `AddGoalPosition` | `public virtual void AddGoalPosition(Vec3 goal)` | 方法 |
| `SetPawnAtPosition` | `public virtual void SetPawnAtPosition(Vec3 position)` | 方法 |
| `MovePawnToGoalPositions` | `public virtual void MovePawnToGoalPositions(bool instantMove, float speed, bool dragged = false)` | 方法 |
| `EnableCollisionBody` | `public virtual void EnableCollisionBody()` | 方法 |
| `DisableCollisionBody` | `public virtual void DisableCollisionBody()` | 方法 |
| `Tick` | `public void Tick(float dt)` | 方法 |
| `MovePawnToGoalPositionsDelayed` | `public void MovePawnToGoalPositionsDelayed(bool instantMove, float speed, bool dragged, float delay)` | 方法 |
| `SetPlayerOne` | `public void SetPlayerOne(bool playerOne)` | 方法 |
| `ClearGoalPositions` | `public void ClearGoalPositions()` | 方法 |
| `UpdatePawnPosition` | `public void UpdatePawnPosition()` | 方法 |
| `PlayPawnSelectSound` | `public void PlayPawnSelectSound()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 PawnBaghChal](../PawnBaghChal/)
- [同命名空间 PawnKonane](../PawnKonane/)
- [同命名空间 PawnMuTorere](../PawnMuTorere/)
- [同命名空间 PawnPuluc](../PawnPuluc/)
