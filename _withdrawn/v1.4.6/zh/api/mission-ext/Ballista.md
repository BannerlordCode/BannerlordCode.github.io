---
title: "Ballista"
description: "Ballista：TaleWorlds.MountAndBlade 的 public 类，继承 RangedSiegeWeapon、ISpawnable；公开成员 42 个（方法 22、属性 9、字段 11）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/Ballista.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Ballista

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class Ballista : RangedSiegeWeapon, ISpawnable`
**File:** `TaleWorlds.MountAndBlade/Ballista.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

Ballista 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/Ballista.cs。它是一个 public 类，实现/继承 RangedSiegeWeapon、ISpawnable，继承链为 Ballista → RangedSiegeWeapon → SiegeWeapon → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject。public/protected 成员共 42 个：22 方法、9 属性、11 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Ballista 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 Ballista → RangedSiegeWeapon → SiegeWeapon → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject。成员构成以方法为主（方法 22/42，属性 9/42），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/Ballista.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DirectionRestriction` | `public override float DirectionRestriction` | 属性 |
| `ShootingSpeed` | `protected override float ShootingSpeed` | 属性 |
| `CanShootAtPointCheckingOffset` | `public override Vec3 CanShootAtPointCheckingOffset` | 属性 |
| `WeaponMovesDownToReload` | `protected override bool WeaponMovesDownToReload` | 属性 |
| `MultipleProjectileId` | `public override string MultipleProjectileId` | 属性 |
| `MultipleProjectileFlyingId` | `public override string MultipleProjectileFlyingId` | 属性 |
| `RegisterAnimationParameters` | `protected override void RegisterAnimationParameters()` | 方法 |
| `GetSiegeEngineType` | `public override SiegeEngineType GetSiegeEngineType()` | 方法 |
| `OnInit` | `protected internal override void OnInit()` | 方法 |
| `OnPilotAssignedDuringSpawn` | `public override void OnPilotAssignedDuringSpawn()` | 方法 |
| `CanRotate` | `protected override bool CanRotate()` | 方法 |
| `CreateAIBehaviorObject` | `public override UsableMachineAIBase CreateAIBehaviorObject()` | 方法 |
| `OnRangedSiegeWeaponStateChange` | `protected override void OnRangedSiegeWeaponStateChange()` | 方法 |
| `MaximumBallisticError` | `protected override float MaximumBallisticError` | 属性 |
| `HorizontalAimSensitivity` | `protected override float HorizontalAimSensitivity` | 属性 |
| `VerticalAimSensitivity` | `protected override float VerticalAimSensitivity` | 属性 |
| `HandleUserAiming` | `protected override void HandleUserAiming(float dt)` | 方法 |
| `ApplyAimChange` | `protected override void ApplyAimChange()` | 方法 |
| `ApplyCurrentDirectionToEntity` | `protected override void ApplyCurrentDirectionToEntity()` | 方法 |
| `GetSoundEventIndices` | `protected override void GetSoundEventIndices()` | 方法 |
| `IsTargetValid` | `protected internal override bool IsTargetValid(ITargetable target)` | 方法 |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | 方法 |
| `OnTick` | `protected internal override void OnTick(float dt)` | 方法 |
| `OnTickParallel` | `protected internal override void OnTickParallel(float dt)` | 方法 |
| `GetActionTextForStandingPoint` | `public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)` | 方法 |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | 方法 |
| `UpdateAmmoMesh` | `protected override void UpdateAmmoMesh()` | 方法 |
| `ProcessTargetValue` | `public override float ProcessTargetValue(float baseValue, TargetFlags flags)` | 方法 |
| `GetTargetFlags` | `public override TargetFlags GetTargetFlags()` | 方法 |
| `GetTargetValue` | `public override float GetTargetValue(List<Vec3>weaponPos)` | 方法 |
| `SetSpawnedFromSpawner` | `public void SetSpawnedFromSpawner()` | 方法 |
| `NavelTag` | `public string NavelTag` | 字段 |
| `BodyTag` | `public string BodyTag` | 字段 |
| `SkeletonTag` | `public string SkeletonTag` | 字段 |
| `IdleActionName` | `protected string IdleActionName` | 字段 |
| `ReloadActionName` | `protected string ReloadActionName` | 字段 |
| `PlaceAmmoStartActionName` | `protected string PlaceAmmoStartActionName` | 字段 |
| `PlaceAmmoEndActionName` | `protected string PlaceAmmoEndActionName` | 字段 |
| `PickUpAmmoStartActionName` | `protected string PickUpAmmoStartActionName` | 字段 |
| `PickUpAmmoEndActionName` | `protected string PickUpAmmoEndActionName` | 字段 |
| `HorizontalDirectionRestriction` | `public float HorizontalDirectionRestriction` | 字段 |
| `BallistaShootingSpeed` | `public float BallistaShootingSpeed` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 RangedSiegeWeapon](../RangedSiegeWeapon/)
- [基类/接口 ISpawnable](../ISpawnable/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
