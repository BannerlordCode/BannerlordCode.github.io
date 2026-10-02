---
title: "BehaviorComponent"
description: "BehaviorComponent：TaleWorlds.MountAndBlade 的 public 类；公开成员 26 个（方法 16、属性 6、字段 2）。源文件 TaleWorlds.MountAndBlade/BehaviorComponent.cs。"
---
# BehaviorComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class BehaviorComponent`
**File:** `TaleWorlds.MountAndBlade/BehaviorComponent.cs`

## 概述

BehaviorComponent 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/BehaviorComponent.cs。它是一个 public 类（abstract），继承链为 BehaviorComponent。public/protected 成员共 26 个：16 方法、6 属性、2 字段、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BehaviorComponent 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 BehaviorComponent。成员构成以方法为主（方法 16/26，属性 6/26），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/BehaviorComponent.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Formation` | `public Formation Formation` | 属性 |
| `BehaviorCoherence` | `public float BehaviorCoherence` | 属性 |
| `BehaviorComponent` | `protected BehaviorComponent(Formation formation)` | 构造函数 |
| `BehaviorComponent` | `protected BehaviorComponent()` | 构造函数 |
| `OnBehaviorActivatedAux` | `protected virtual void OnBehaviorActivatedAux()` | 方法 |
| `OnBehaviorCanceled` | `public virtual void OnBehaviorCanceled()` | 方法 |
| `OnLostAIControl` | `public virtual void OnLostAIControl()` | 方法 |
| `OnAgentRemoved` | `public virtual void OnAgentRemoved(Agent agent)` | 方法 |
| `RemindSergeantPlayer` | `public void RemindSergeantPlayer()` | 方法 |
| `TickOccasionally` | `public virtual void TickOccasionally()` | 方法 |
| `NavmeshlessTargetPositionPenalty` | `public virtual float NavmeshlessTargetPositionPenalty` | 属性 |
| `GetAIWeight` | `public float GetAIWeight()` | 方法 |
| `GetAiWeight` | `protected abstract float GetAiWeight();` | 方法 |
| `CurrentOrder` | `public MovementOrder CurrentOrder` | 属性 |
| `PreserveExpireTime` | `public float PreserveExpireTime` | 属性 |
| `WeightFactor` | `public float WeightFactor` | 属性 |
| `ResetBehavior` | `public virtual void ResetBehavior()` | 方法 |
| `GetBehaviorString` | `public virtual TextObject GetBehaviorString()` | 方法 |
| `OnValidBehaviorSideChanged` | `public virtual void OnValidBehaviorSideChanged()` | 方法 |
| `CalculateCurrentOrder` | `protected virtual void CalculateCurrentOrder()` | 方法 |
| `PrecalculateMovementOrder` | `public void PrecalculateMovementOrder()` | 方法 |
| `Equals` | `public override bool Equals(object obj)` | 方法 |
| `GetHashCode` | `public override int GetHashCode()` | 方法 |
| `OnDeploymentFinished` | `public virtual void OnDeploymentFinished()` | 方法 |
| `FormArrangementDistanceToOrderPosition` | `protected const float FormArrangementDistanceToOrderPosition` | 字段 |
| `CurrentFacingOrder` | `protected FacingOrder CurrentFacingOrder` | 字段 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
