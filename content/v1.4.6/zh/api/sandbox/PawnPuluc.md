---
title: "PawnPuluc"
description: "PawnPuluc：SandBox 的 public 类，继承 PawnBase；公开成员 18 个（方法 7、属性 7、字段 2）。源文件 SandBox/BoardGames/Pawns/PawnPuluc.cs。"
---
# PawnPuluc

**Namespace:** `SandBox.BoardGames.Pawns`
**Module:** `SandBox`
**Type:** `public class PawnPuluc : PawnBase`
**File:** `SandBox/BoardGames/Pawns/PawnPuluc.cs`

## 概述

PawnPuluc 位于 SandBox 模块，源文件 SandBox/BoardGames/Pawns/PawnPuluc.cs。它是一个 public 类，实现/继承 PawnBase，继承链为 PawnPuluc → PawnBase。public/protected 成员共 18 个：7 方法、7 属性、2 字段、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PawnPuluc 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.BoardGames.Pawns），继承链 PawnPuluc → PawnBase。成员构成以方法为主（方法 7/18，属性 7/18），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/BoardGames/Pawns/PawnPuluc.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Height` | `public float Height` | 属性 |
| `PosBeforeMoving` | `public override Vec3 PosBeforeMoving` | 属性 |
| `IsPlaced` | `public override bool IsPlaced` | 属性 |
| `X` | `public int X` | 属性 |
| `List` | `public List<PawnPuluc>PawnsBelow` | 属性 |
| `InPlay` | `public bool InPlay` | 属性 |
| `PawnPuluc` | `public PawnPuluc(GameEntity entity, bool playerOne) : base(entity, playerOne)` | 构造函数 |
| `Reset` | `public override void Reset()` | 方法 |
| `AddGoalPosition` | `public override void AddGoalPosition(Vec3 goal)` | 方法 |
| `MovePawnToGoalPositions` | `public override void MovePawnToGoalPositions(bool instantMove, float speed, bool dragged = false)` | 方法 |
| `SetPawnAtPosition` | `public override void SetPawnAtPosition(Vec3 position)` | 方法 |
| `EnableCollisionBody` | `public override void EnableCollisionBody()` | 方法 |
| `DisableCollisionBody` | `public override void DisableCollisionBody()` | 方法 |
| `MovePawnBackToSpawn` | `public void MovePawnBackToSpawn(bool instantMove, float speed, bool fake = false)` | 方法 |
| `IsInSpawn` | `public bool IsInSpawn` | 字段 |
| `IsTopPawn` | `public bool IsTopPawn` | 字段 |
| `MovementState` | `public enum MovementState` | 属性 |
| `MovementState` | `public enum MovementState` | 嵌套类型 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 PawnBase](../PawnBase)
- [同命名空间 PawnBaghChal](../PawnBaghChal)
- [同命名空间 PawnBase](../PawnBase)
- [同命名空间 PawnKonane](../PawnKonane)
- [同命名空间 PawnMuTorere](../PawnMuTorere)
