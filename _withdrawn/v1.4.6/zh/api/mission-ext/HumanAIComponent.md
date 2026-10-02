---
title: "HumanAIComponent"
description: "HumanAIComponent：TaleWorlds.MountAndBlade 的 public 类，继承 AgentComponent；公开成员 41 个（方法 27、属性 8、字段 1）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/HumanAIComponent.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# HumanAIComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class HumanAIComponent : AgentComponent`
**File:** `TaleWorlds.MountAndBlade/HumanAIComponent.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

HumanAIComponent 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/HumanAIComponent.cs。它是一个 public 类，实现/继承 AgentComponent，继承链为 HumanAIComponent → AgentComponent。public/protected 成员共 41 个：27 方法、8 属性、1 字段、1 构造函数、4 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：HumanAIComponent 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 HumanAIComponent → AgentComponent。成员构成以方法为主（方法 27/41，属性 8/41），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/HumanAIComponent.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `FollowedAgent` | `public Agent FollowedAgent` | 属性 |
| `ShouldCatchUpWithFormation` | `public bool ShouldCatchUpWithFormation` | 属性 |
| `IsDefending` | `public bool IsDefending` | 属性 |
| `HasTimedScriptedFrame` | `public bool HasTimedScriptedFrame` | 属性 |
| `HumanAIComponent` | `public HumanAIComponent(Agent agent) : base(agent)` | 构造函数 |
| `OverrideBehaviorParams` | `public void OverrideBehaviorParams(HumanAIComponent.AISimpleBehaviorKind behavior, float y1, float x2, float y2, float x3, float y3)` | 方法 |
| `SyncBehaviorParamsIfNecessary` | `public void SyncBehaviorParamsIfNecessary()` | 方法 |
| `DisablePickUpForAgentIfNeeded` | `public void DisablePickUpForAgentIfNeeded()` | 方法 |
| `OnTickParallel` | `public override void OnTickParallel(float dt)` | 方法 |
| `OnTick` | `public override void OnTick(float dt)` | 方法 |
| `OnAgentRemoved` | `public override void OnAgentRemoved()` | 方法 |
| `OnComponentRemoved` | `public override void OnComponentRemoved()` | 方法 |
| `IsInImportantCombatAction` | `public bool IsInImportantCombatAction()` | 方法 |
| `GetCurrentlyMovingGameObject` | `public UsableMissionObject GetCurrentlyMovingGameObject()` | 方法 |
| `GetCurrentlyDefendingGameObject` | `public UsableMissionObject GetCurrentlyDefendingGameObject()` | 方法 |
| `MoveToUsableGameObject` | `public void MoveToUsableGameObject(UsableMissionObject usedObject, IDetachment detachment, Agent.AIScriptedFrameFlags scriptedFrameFlags = Agent.AIScriptedFrameFlags.NoAttack)` | 方法 |
| `MoveToClear` | `public void MoveToClear()` | 方法 |
| `StartDefendingGameObject` | `public void StartDefendingGameObject(UsableMissionObject usedObject, IDetachment detachment)` | 方法 |
| `StopDefendingGameObject` | `public void StopDefendingGameObject()` | 方法 |
| `IsInterestedInAnyGameObject` | `public bool IsInterestedInAnyGameObject()` | 方法 |
| `IsInterestedInGameObject` | `public bool IsInterestedInGameObject(UsableMissionObject usableMissionObject)` | 方法 |
| `FollowAgent` | `public void FollowAgent(Agent agent)` | 方法 |
| `GetDesiredSpeedInFormation` | `public float GetDesiredSpeedInFormation(bool isCharging)` | 方法 |
| `AdjustSpeedLimit` | `public void AdjustSpeedLimit(Agent agent, float desiredSpeed, bool limitIsMultiplier)` | 方法 |
| `ParallelUpdateFormationMovement` | `public void ParallelUpdateFormationMovement()` | 方法 |
| `OnRetreating` | `public override void OnRetreating()` | 方法 |
| `OnDismount` | `public override void OnDismount(Agent mount)` | 方法 |
| `SetBehaviorValueSet` | `public void SetBehaviorValueSet(HumanAIComponent.BehaviorValueSet behaviorValueSet)` | 方法 |
| `RefreshBehaviorValues` | `public void RefreshBehaviorValues(MovementOrder.MovementOrderEnum movementOrder, ArrangementOrder.ArrangementOrderEnum arrangementOrder)` | 方法 |
| `ForceDisablePickUpForAgent` | `public void ForceDisablePickUpForAgent()` | 方法 |
| `SetScriptedPositionAndDirectionTimed` | `public void SetScriptedPositionAndDirectionTimed(Vec2 position, float directionAsRotationInRadians, float duration)` | 方法 |
| `DisableTimedScriptedMovement` | `public void DisableTimedScriptedMovement()` | 方法 |
| `FormationSpeedAdjustmentEnabled` | `public static bool FormationSpeedAdjustmentEnabled` | 字段 |
| `BehaviorValues` | `public struct BehaviorValues` | 属性 |
| `AISimpleBehaviorKind` | `public enum AISimpleBehaviorKind` | 属性 |
| `BehaviorValueSet` | `public enum BehaviorValueSet` | 属性 |
| `UsableObjectInterestKind` | `public enum UsableObjectInterestKind` | 属性 |
| `BehaviorValues` | `public struct BehaviorValues` | 嵌套类型 |
| `AISimpleBehaviorKind` | `public enum AISimpleBehaviorKind` | 嵌套类型 |
| `BehaviorValueSet` | `public enum BehaviorValueSet` | 嵌套类型 |
| `UsableObjectInterestKind` | `public enum UsableObjectInterestKind` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 AgentComponent](../AgentComponent/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
