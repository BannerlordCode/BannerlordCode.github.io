---
title: "StandingPoint"
description: "StandingPoint：TaleWorlds.MountAndBlade 的 public 类，继承 UsableMissionObject；公开成员 33 个（方法 21、属性 7、字段 3）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/StandingPoint.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# StandingPoint

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class StandingPoint : UsableMissionObject`
**File:** `TaleWorlds.MountAndBlade/StandingPoint.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

StandingPoint 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/StandingPoint.cs。它是一个 public 类，实现/继承 UsableMissionObject，继承链为 StandingPoint → UsableMissionObject → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject。public/protected 成员共 33 个：21 方法、7 属性、3 字段、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：StandingPoint 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 StandingPoint → UsableMissionObject → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject。成员构成以方法为主（方法 21/33，属性 7/33），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/StandingPoint.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DisableScriptedFrameFlags` | `public virtual Agent.AIScriptedFrameFlags DisableScriptedFrameFlags` | 属性 |
| `DisableCombatActionsOnUse` | `public override bool DisableCombatActionsOnUse` | 属性 |
| `FavoredUser` | `public Agent FavoredUser` | 属性 |
| `PlayerStopsUsingWhenInteractsWithOther` | `public virtual bool PlayerStopsUsingWhenInteractsWithOther` | 属性 |
| `UseOwnPositionInsteadOfWorldPosition` | `public bool UseOwnPositionInsteadOfWorldPosition` | 属性 |
| `CustomPlayerInteractionDistance` | `public float CustomPlayerInteractionDistance` | 属性 |
| `OnInit` | `protected internal override void OnInit()` | 方法 |
| `OnParentMachinePhysicsStateChanged` | `public void OnParentMachinePhysicsStateChanged()` | 方法 |
| `IsDisabledForAgent` | `public override bool IsDisabledForAgent(Agent agent)` | 方法 |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | 方法 |
| `OnTickParallel3` | `protected internal override void OnTickParallel3(float dt)` | 方法 |
| `OnTick` | `protected internal override void OnTick(float dt)` | 方法 |
| `DoesActionTypeStopUsingGameObject` | `protected virtual bool DoesActionTypeStopUsingGameObject(Agent.ActionCodeType actionType)` | 方法 |
| `OnUse` | `public override void OnUse(Agent userAgent, sbyte agentBoneIndex)` | 方法 |
| `OnUseStopped` | `public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)` | 方法 |
| `GetUserFrameForAgent` | `public override WorldFrame GetUserFrameForAgent(Agent agent)` | 方法 |
| `HasAlternative` | `public virtual bool HasAlternative()` | 方法 |
| `GetUsageScoreForAgent` | `public virtual float GetUsageScoreForAgent(Agent agent)` | 方法 |
| `GetUsageScoreForAgent` | `public virtual float GetUsageScoreForAgent(ValueTuple<Agent, float>agentPair)` | 方法 |
| `SetupOnUsingStoppedBehavior` | `public void SetupOnUsingStoppedBehavior(bool autoAttach, Action<Agent, bool>action)` | 方法 |
| `OnEndMission` | `public override void OnEndMission()` | 方法 |
| `IsUsableBySide` | `protected internal virtual bool IsUsableBySide(BattleSideEnum side)` | 方法 |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | 方法 |
| `IsUsableByAgent` | `public override bool IsUsableByAgent(Agent userAgent)` | 方法 |
| `SetUsableByAIOnly` | `public void SetUsableByAIOnly()` | 方法 |
| `SetUsableByPlayerOnly` | `public void SetUsableByPlayerOnly()` | 方法 |
| `SetUsableByPlayerOrAI` | `public void SetUsableByPlayerOrAI()` | 方法 |
| `StandingPoint` | `public StandingPoint() : base(false)` | 构造函数 |
| `AutoSheathWeapons` | `public bool AutoSheathWeapons` | 字段 |
| `TranslateUser` | `public readonly bool TranslateUser` | 字段 |
| `StandingPointSide` | `protected BattleSideEnum StandingPointSide` | 字段 |
| `StackArray8StandingPoint` | `public struct StackArray8StandingPoint` | 属性 |
| `StackArray8StandingPoint` | `public struct StackArray8StandingPoint` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 UsableMissionObject](../UsableMissionObject/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
