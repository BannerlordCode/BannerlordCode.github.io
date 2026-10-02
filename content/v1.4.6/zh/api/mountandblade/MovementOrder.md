---
title: "MovementOrder"
description: "MovementOrder：TaleWorlds.MountAndBlade 的 public 结构体；公开成员 41 个（方法 25、属性 7、字段 6）。源文件 TaleWorlds.MountAndBlade/MovementOrder.cs。"
---
# MovementOrder

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public struct MovementOrder`
**File:** `TaleWorlds.MountAndBlade/MovementOrder.cs`

## 概述

MovementOrder 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MovementOrder.cs。它是一个 public 结构体，继承链为 MovementOrder。public/protected 成员共 41 个：25 方法、7 属性、6 字段、3 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MovementOrder 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 MovementOrder。成员构成以方法为主（方法 25/41，属性 7/41），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MovementOrder.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TargetFormation` | `public Formation TargetFormation` | 属性 |
| `_targetAgent` | `public Agent _targetAgent` | 属性 |
| `OrderType` | `public OrderType OrderType` | 属性 |
| `MovementState` | `public MovementOrder.MovementStateEnum MovementState` | 属性 |
| `Equals` | `public override bool Equals(object obj)` | 方法 |
| `GetHashCode` | `public override int GetHashCode()` | 方法 |
| `!` | `public static bool operator !` | 运算符 |
| `operator` | `public static bool operator` | 运算符 |
| `MovementOrderChargeToTarget` | `public static MovementOrder MovementOrderChargeToTarget(Formation targetFormation)` | 方法 |
| `MovementOrderFollow` | `public static MovementOrder MovementOrderFollow(Agent targetAgent)` | 方法 |
| `MovementOrderFollowEntity` | `public static MovementOrder MovementOrderFollowEntity(GameEntity targetEntity)` | 方法 |
| `MovementOrderMove` | `public static MovementOrder MovementOrderMove(WorldPosition position)` | 方法 |
| `MovementOrderAttackEntity` | `public static MovementOrder MovementOrderAttackEntity(GameEntity targetEntity, bool surroundEntity)` | 方法 |
| `GetMovementOrderDefensiveness` | `public static int GetMovementOrderDefensiveness(MovementOrder.MovementOrderEnum orderEnum)` | 方法 |
| `GetMovementOrderDefensivenessChange` | `public static int GetMovementOrderDefensivenessChange(MovementOrder.MovementOrderEnum previousOrderEnum, MovementOrder.MovementOrderEnum nextOrderEnum)` | 方法 |
| `GetPosition` | `public Vec2 GetPosition(Formation f)` | 方法 |
| `GetTargetVelocity` | `public Vec2 GetTargetVelocity()` | 方法 |
| `CreateNewOrderWorldPositionMT` | `public WorldPosition CreateNewOrderWorldPositionMT(Formation f, WorldPosition.WorldPositionEnforcedCache worldPositionEnforcedCache)` | 方法 |
| `ResetPositionCache` | `public void ResetPositionCache()` | 方法 |
| `AreOrdersPracticallySame` | `public bool AreOrdersPracticallySame(MovementOrder m1, MovementOrder m2, bool isAIControlled)` | 方法 |
| `OnApply` | `public void OnApply(Formation formation)` | 方法 |
| `OnCancel` | `public void OnCancel(Formation formation)` | 方法 |
| `OnUnitJoinOrLeave` | `public void OnUnitJoinOrLeave(Formation formation, Agent unit, bool isJoining)` | 方法 |
| `IsApplicable` | `public bool IsApplicable(Formation formation)` | 方法 |
| `Tick` | `public bool Tick(Formation formation)` | 方法 |
| `OnArrangementChanged` | `public void OnArrangementChanged(Formation formation)` | 方法 |
| `Advance` | `public void Advance(Formation formation, float distance)` | 方法 |
| `FallBack` | `public void FallBack(Formation formation, float distance)` | 方法 |
| `GetSubstituteOrder` | `public MovementOrder GetSubstituteOrder(Formation formation)` | 方法 |
| `MovementOrderNull` | `public static readonly MovementOrder MovementOrderNull` | 字段 |
| `MovementOrderCharge` | `public static readonly MovementOrder MovementOrderCharge` | 字段 |
| `MovementOrderRetreat` | `public static readonly MovementOrder MovementOrderRetreat` | 字段 |
| `MovementOrderStop` | `public static readonly MovementOrder MovementOrderStop` | 字段 |
| `MovementOrderAdvance` | `public static readonly MovementOrder MovementOrderAdvance` | 字段 |
| `MovementOrderFallBack` | `public static readonly MovementOrder MovementOrderFallBack` | 字段 |
| `MovementOrderEnum` | `public enum MovementOrderEnum` | 属性 |
| `MovementStateEnum` | `public enum MovementStateEnum` | 属性 |
| `Side` | `public enum Side` | 属性 |
| `MovementOrderEnum` | `public enum MovementOrderEnum` | 嵌套类型 |
| `MovementStateEnum` | `public enum MovementStateEnum` | 嵌套类型 |
| `Side` | `public enum Side` | 嵌套类型 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
