---
title: "OrderComponent"
description: "OrderComponent：TaleWorlds.MountAndBlade 的 public 类；公开成员 15 个（方法 10、属性 4、字段 0）。源文件 TaleWorlds.MountAndBlade/OrderComponent.cs。"
---
# OrderComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class OrderComponent`
**File:** `TaleWorlds.MountAndBlade/OrderComponent.cs`

## 概述

OrderComponent 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/OrderComponent.cs。它是一个 public 类（abstract），继承链为 OrderComponent。public/protected 成员共 15 个：10 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：OrderComponent 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 OrderComponent。成员构成以方法为主（方法 10/15，属性 4/15），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/OrderComponent.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetDirection` | `public Vec2 GetDirection(Formation f)` | 方法 |
| `CopyPositionAndDirectionFrom` | `protected void CopyPositionAndDirectionFrom(OrderComponent order)` | 方法 |
| `OrderComponent` | `protected OrderComponent(float tickTimerDuration = 0.5f)` | 构造函数 |
| `OrderType` | `public abstract OrderType OrderType` | 属性 |
| `TickDebug` | `protected virtual void TickDebug(Formation formation)` | 方法 |
| `TickOccasionally` | `protected internal virtual void TickOccasionally(Formation formation, float dt)` | 方法 |
| `OnApply` | `protected internal virtual void OnApply(Formation formation)` | 方法 |
| `OnCancel` | `protected internal virtual void OnCancel(Formation formation)` | 方法 |
| `OnUnitJoinOrLeave` | `protected internal virtual void OnUnitJoinOrLeave(Agent unit, bool isJoining)` | 方法 |
| `IsApplicable` | `protected internal virtual bool IsApplicable(Formation formation)` | 方法 |
| `CanStack` | `protected internal virtual bool CanStack` | 属性 |
| `CancelsPreviousDirectionOrder` | `protected internal virtual bool CancelsPreviousDirectionOrder` | 属性 |
| `CancelsPreviousArrangementOrder` | `protected internal virtual bool CancelsPreviousArrangementOrder` | 属性 |
| `GetSubstituteOrder` | `protected internal virtual MovementOrder GetSubstituteOrder(Formation formation)` | 方法 |
| `OnArrangementChanged` | `protected internal virtual void OnArrangementChanged(Formation formation)` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
