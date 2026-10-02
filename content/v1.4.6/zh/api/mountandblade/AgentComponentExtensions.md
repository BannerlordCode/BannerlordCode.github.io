---
title: "AgentComponentExtensions"
description: "AgentComponentExtensions：TaleWorlds.MountAndBlade 的 public 类；公开成员 22 个（方法 22、属性 0、字段 0）。源文件 TaleWorlds.MountAndBlade/AgentComponentExtensions.cs。"
---
# AgentComponentExtensions

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class AgentComponentExtensions`
**File:** `TaleWorlds.MountAndBlade/AgentComponentExtensions.cs`

## 概述

AgentComponentExtensions 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/AgentComponentExtensions.cs。它是一个 public 类，继承链为 AgentComponentExtensions。public/protected 成员共 22 个：22 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：AgentComponentExtensions 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 AgentComponentExtensions。成员构成以方法为主（方法 22/22，属性 0/22），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/AgentComponentExtensions.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetMorale` | `public static float GetMorale(this Agent agent)` | 方法 |
| `SetMorale` | `public static void SetMorale(this Agent agent, float morale)` | 方法 |
| `ChangeMorale` | `public static void ChangeMorale(this Agent agent, float delta)` | 方法 |
| `IsRetreating` | `public static bool IsRetreating(this Agent agent, bool isComponentAssured = true)` | 方法 |
| `Retreat` | `public static void Retreat(this Agent agent, bool useCachingSystem = false)` | 方法 |
| `StopRetreatingMoraleComponent` | `public static void StopRetreatingMoraleComponent(this Agent agent)` | 方法 |
| `SetBehaviorValueSet` | `public static void SetBehaviorValueSet(this Agent agent, HumanAIComponent.BehaviorValueSet behaviorValueSet)` | 方法 |
| `RefreshBehaviorValues` | `public static void RefreshBehaviorValues(this Agent agent, MovementOrder.MovementOrderEnum movementOrder, ArrangementOrder.ArrangementOrderEnum arrangementOrder)` | 方法 |
| `SetAIBehaviorValues` | `public static void SetAIBehaviorValues(this Agent agent, HumanAIComponent.AISimpleBehaviorKind behavior, float y1, float x2, float y2, float x3, float y3)` | 方法 |
| `AIMoveToGameObjectEnable` | `public static void AIMoveToGameObjectEnable(this Agent agent, UsableMissionObject usedObject, IDetachment detachment, Agent.AIScriptedFrameFlags scriptedFrameFlags = Agent.AIScriptedFrameFlags.NoAttack)` | 方法 |
| `AIMoveToGameObjectDisable` | `public static void AIMoveToGameObjectDisable(this Agent agent)` | 方法 |
| `AIMoveToGameObjectIsEnabled` | `public static bool AIMoveToGameObjectIsEnabled(this Agent agent)` | 方法 |
| `AIDefendGameObjectEnable` | `public static void AIDefendGameObjectEnable(this Agent agent, UsableMissionObject usedObject, IDetachment detachment)` | 方法 |
| `AIDefendGameObjectDisable` | `public static void AIDefendGameObjectDisable(this Agent agent)` | 方法 |
| `AIDefendGameObjectIsEnabled` | `public static bool AIDefendGameObjectIsEnabled(this Agent agent)` | 方法 |
| `AIInterestedInAnyGameObject` | `public static bool AIInterestedInAnyGameObject(this Agent agent)` | 方法 |
| `AIInterestedInGameObject` | `public static bool AIInterestedInGameObject(this Agent agent, UsableMissionObject usableMissionObject)` | 方法 |
| `AIUseGameObjectEnable` | `public static void AIUseGameObjectEnable(this Agent agent)` | 方法 |
| `AIUseGameObjectDisable` | `public static void AIUseGameObjectDisable(this Agent agent)` | 方法 |
| `AIUseGameObjectIsEnabled` | `public static bool AIUseGameObjectIsEnabled(this Agent agent)` | 方法 |
| `GetFollowedUnit` | `public static Agent GetFollowedUnit(this Agent agent)` | 方法 |
| `SetFollowedUnit` | `public static void SetFollowedUnit(this Agent agent, Agent followedUnit)` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
