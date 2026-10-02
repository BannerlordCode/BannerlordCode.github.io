---
title: "SiegeWeapon"
description: "SiegeWeapon: a public class in TaleWorlds.MountAndBlade, inheriting UsableMachine, ITargetable; 33 exposed members (27 methods, 6 properties, 0 fields). Source: TaleWorlds.MountAndBlade/SiegeWeapon.cs."
---
# SiegeWeapon

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class SiegeWeapon : UsableMachine, ITargetable`
**File:** `TaleWorlds.MountAndBlade/SiegeWeapon.cs`

## Overview

SiegeWeapon lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/SiegeWeapon.cs. It is a public class (abstract), implementing/inheriting UsableMachine, ITargetable; the inheritance chain is SiegeWeapon → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior. It exposes 33 public/protected members: 27 methods, 6 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SiegeWeapon is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain SiegeWeapon → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior. The surface is method-led (methods 27/33, properties 6/33), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/SiegeWeapon.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ForcedUse` | `public bool ForcedUse` | property |
| `IsUsed` | `public bool IsUsed` | property |
| `SetForcedUse` | `public void SetForcedUse(bool value)` | method |
| `Side` | `public virtual BattleSideEnum Side` | property |
| `HitObjectName` | `public override TextObject HitObjectName` | property |
| `GetSiegeEngineType` | `public abstract SiegeEngineType GetSiegeEngineType();` | method |
| `CalculateIsSufficientlyManned` | `protected virtual bool CalculateIsSufficientlyManned(BattleSideEnum battleSide)` | method |
| `OnInit` | `protected internal override void OnInit()` | method |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `IsAnyUserBelongsToFormation` | `protected virtual bool IsAnyUserBelongsToFormation(Formation formation)` | method |
| `OnTickParallel` | `protected internal override void OnTickParallel(float dt)` | method |
| `OnTick` | `protected internal override void OnTick(float dt)` | method |
| `TickAuxForInit` | `public void TickAuxForInit()` | method |
| `OnDeploymentStateChanged` | `protected internal virtual void OnDeploymentStateChanged(bool isDeployed)` | method |
| `HasWaitFrame` | `public override bool HasWaitFrame` | property |
| `IsDeactivated` | `public override bool IsDeactivated` | property |
| `ShouldAutoLeaveDetachmentWhenDisabled` | `public override bool ShouldAutoLeaveDetachmentWhenDisabled(BattleSideEnum sideEnum)` | method |
| `AutoAttachUserToFormation` | `public override bool AutoAttachUserToFormation(BattleSideEnum sideEnum)` | method |
| `HasToBeDefendedByUser` | `public override bool HasToBeDefendedByUser(BattleSideEnum sideEnum)` | method |
| `GetUserMultiplierOfWeapon` | `protected float GetUserMultiplierOfWeapon()` | method |
| `GetDistanceMultiplierOfWeapon` | `protected virtual float GetDistanceMultiplierOfWeapon(Vec3 weaponPos)` | method |
| `GetMinimumDistanceBetweenPositions` | `protected virtual float GetMinimumDistanceBetweenPositions(Vec3 position)` | method |
| `GetHitPointMultiplierOfWeapon` | `protected float GetHitPointMultiplierOfWeapon()` | method |
| `GetTargetEntity` | `public WeakGameEntity GetTargetEntity()` | method |
| `GetTargetingOffset` | `public Vec3 GetTargetingOffset()` | method |
| `GetSide` | `public BattleSideEnum GetSide()` | method |
| `GetTargetGlobalVelocity` | `public Vec3 GetTargetGlobalVelocity()` | method |
| `IsDestructable` | `public bool IsDestructable()` | method |
| `Entity` | `public WeakGameEntity Entity()` | method |
| `Vec3>ComputeGlobalPhysicsBoundingBoxMinMax` | `public ValueTuple<Vec3, Vec3>ComputeGlobalPhysicsBoundingBoxMinMax()` | method |
| `OnShipCaptured` | `public virtual void OnShipCaptured(BattleSideEnum newDefaultSide)` | method |
| `GetTargetFlags` | `public abstract TargetFlags GetTargetFlags();` | method |
| `GetTargetValue` | `public abstract float GetTargetValue(List<Vec3>weaponPos);` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface UsableMachine](../UsableMachine)
- [base / interface ITargetable](../ITargetable)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
