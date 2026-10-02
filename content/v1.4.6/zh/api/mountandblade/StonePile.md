---
title: "StonePile"
description: "StonePile：TaleWorlds.MountAndBlade 的 public 类，继承 UsableMachine、IDetachment；公开成员 27 个（方法 17、属性 5、字段 2）。源文件 TaleWorlds.MountAndBlade/StonePile.cs。"
---
# StonePile

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class StonePile : UsableMachine, IDetachment`
**File:** `TaleWorlds.MountAndBlade/StonePile.cs`

## 概述

StonePile 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/StonePile.cs。它是一个 public 类，实现/继承 UsableMachine、IDetachment，继承链为 StonePile → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior。public/protected 成员共 27 个：17 方法、5 属性、2 字段、1 构造函数、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：StonePile 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 StonePile → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior。成员构成以方法为主（方法 17/27，属性 5/27），对外主要以操作入口暴露。继承链上的 ScriptComponentBehavior 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/StonePile.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AmmoCount` | `public int AmmoCount` | 属性 |
| `HasThrowingPointUsed` | `public bool HasThrowingPointUsed` | 属性 |
| `Side` | `public virtual BattleSideEnum Side` | 属性 |
| `MaxUserCount` | `public override int MaxUserCount` | 属性 |
| `StonePile` | `protected StonePile()` | 构造函数 |
| `ConsumeAmmo` | `protected void ConsumeAmmo()` | 方法 |
| `SetAmmo` | `public void SetAmmo(int ammoLeft)` | 方法 |
| `CheckAmmo` | `protected virtual void CheckAmmo()` | 方法 |
| `OnInit` | `protected internal override void OnInit()` | 方法 |
| `OnMissionReset` | `protected internal override void OnMissionReset()` | 方法 |
| `AfterMissionStart` | `public override void AfterMissionStart()` | 方法 |
| `GetActionTextForStandingPoint` | `public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)` | 方法 |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | 方法 |
| `CreateAIBehaviorObject` | `public override UsableMachineAIBase CreateAIBehaviorObject()` | 方法 |
| `IsInRangeToCheckAlternativePoints` | `public override bool IsInRangeToCheckAlternativePoints(Agent agent)` | 方法 |
| `GetBestPointAlternativeTo` | `public override StandingPoint GetBestPointAlternativeTo(StandingPoint standingPoint, Agent agent)` | 方法 |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | 方法 |
| `OnTick` | `protected internal override void OnTick(float dt)` | 方法 |
| `WriteToNetwork` | `public override void WriteToNetwork()` | 方法 |
| `GetSuitableStandingPointFor` | `protected override StandingPoint GetSuitableStandingPointFor(BattleSideEnum side, Agent agent = null, List<Agent>agents = null, List<ValueTuple<Agent, float>>agentValuePairs = null)` | 方法 |
| `GetDetachmentWeightAux` | `protected override float GetDetachmentWeightAux(BattleSideEnum side)` | 方法 |
| `UpdateAmmoMesh` | `protected virtual void UpdateAmmoMesh()` | 方法 |
| `StartingAmmoCount` | `public int StartingAmmoCount` | 字段 |
| `GivenItemID` | `public string GivenItemID` | 字段 |
| `ISynchedMissionObjectReadableRecord` | `public struct StonePileRecord : ISynchedMissionObjectReadableRecord` | 属性 |
| `ISynchedMissionObjectReadableRecord` | `public struct StonePileRecord : ISynchedMissionObjectReadableRecord` | 嵌套类型 |
| `StackArray8ThrowingPoint` | `public struct StackArray8ThrowingPoint` | 嵌套类型 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 UsableMachine](../UsableMachine)
- [基类/接口 IDetachment](../IDetachment)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
