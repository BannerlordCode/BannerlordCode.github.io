---
title: "SiegeWeapon"
description: "SiegeWeapon：TaleWorlds.MountAndBlade 的 public 类，继承 UsableMachine、ITargetable；公开成员 33 个（方法 27、属性 6、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/SiegeWeapon.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SiegeWeapon

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class SiegeWeapon : UsableMachine, ITargetable`
**File:** `TaleWorlds.MountAndBlade/SiegeWeapon.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

SiegeWeapon 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/SiegeWeapon.cs。它是一个 public 类（abstract），实现/继承 UsableMachine、ITargetable，继承链为 SiegeWeapon → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject。public/protected 成员共 33 个：27 方法、6 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SiegeWeapon 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 SiegeWeapon → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject。成员构成以方法为主（方法 27/33，属性 6/33），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/SiegeWeapon.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ForcedUse` | `public bool ForcedUse` | 属性 |
| `IsUsed` | `public bool IsUsed` | 属性 |
| `SetForcedUse` | `public void SetForcedUse(bool value)` | 方法 |
| `Side` | `public virtual BattleSideEnum Side` | 属性 |
| `HitObjectName` | `public override TextObject HitObjectName` | 属性 |
| `GetSiegeEngineType` | `public abstract SiegeEngineType GetSiegeEngineType();` | 方法 |
| `CalculateIsSufficientlyManned` | `protected virtual bool CalculateIsSufficientlyManned(BattleSideEnum battleSide)` | 方法 |
| `OnInit` | `protected internal override void OnInit()` | 方法 |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | 方法 |
| `IsAnyUserBelongsToFormation` | `protected virtual bool IsAnyUserBelongsToFormation(Formation formation)` | 方法 |
| `OnTickParallel` | `protected internal override void OnTickParallel(float dt)` | 方法 |
| `OnTick` | `protected internal override void OnTick(float dt)` | 方法 |
| `TickAuxForInit` | `public void TickAuxForInit()` | 方法 |
| `OnDeploymentStateChanged` | `protected internal virtual void OnDeploymentStateChanged(bool isDeployed)` | 方法 |
| `HasWaitFrame` | `public override bool HasWaitFrame` | 属性 |
| `IsDeactivated` | `public override bool IsDeactivated` | 属性 |
| `ShouldAutoLeaveDetachmentWhenDisabled` | `public override bool ShouldAutoLeaveDetachmentWhenDisabled(BattleSideEnum sideEnum)` | 方法 |
| `AutoAttachUserToFormation` | `public override bool AutoAttachUserToFormation(BattleSideEnum sideEnum)` | 方法 |
| `HasToBeDefendedByUser` | `public override bool HasToBeDefendedByUser(BattleSideEnum sideEnum)` | 方法 |
| `GetUserMultiplierOfWeapon` | `protected float GetUserMultiplierOfWeapon()` | 方法 |
| `GetDistanceMultiplierOfWeapon` | `protected virtual float GetDistanceMultiplierOfWeapon(Vec3 weaponPos)` | 方法 |
| `GetMinimumDistanceBetweenPositions` | `protected virtual float GetMinimumDistanceBetweenPositions(Vec3 position)` | 方法 |
| `GetHitPointMultiplierOfWeapon` | `protected float GetHitPointMultiplierOfWeapon()` | 方法 |
| `GetTargetEntity` | `public WeakGameEntity GetTargetEntity()` | 方法 |
| `GetTargetingOffset` | `public Vec3 GetTargetingOffset()` | 方法 |
| `GetSide` | `public BattleSideEnum GetSide()` | 方法 |
| `GetTargetGlobalVelocity` | `public Vec3 GetTargetGlobalVelocity()` | 方法 |
| `IsDestructable` | `public bool IsDestructable()` | 方法 |
| `Entity` | `public WeakGameEntity Entity()` | 方法 |
| `Vec3>ComputeGlobalPhysicsBoundingBoxMinMax` | `public ValueTuple<Vec3, Vec3>ComputeGlobalPhysicsBoundingBoxMinMax()` | 方法 |
| `OnShipCaptured` | `public virtual void OnShipCaptured(BattleSideEnum newDefaultSide)` | 方法 |
| `GetTargetFlags` | `public abstract TargetFlags GetTargetFlags();` | 方法 |
| `GetTargetValue` | `public abstract float GetTargetValue(List<Vec3>weaponPos);` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 UsableMachine](../UsableMachine/)
- [基类/接口 ITargetable](../ITargetable/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
