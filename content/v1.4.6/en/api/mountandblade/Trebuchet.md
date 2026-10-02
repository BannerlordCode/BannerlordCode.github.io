---
title: "Trebuchet"
description: "Trebuchet: a public class in TaleWorlds.MountAndBlade, inheriting RangedSiegeWeapon, ISpawnable; 29 exposed members (21 methods, 6 properties, 2 fields). Source: TaleWorlds.MountAndBlade/Trebuchet.cs."
---
# Trebuchet

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class Trebuchet : RangedSiegeWeapon, ISpawnable`
**File:** `TaleWorlds.MountAndBlade/Trebuchet.cs`

## Overview

Trebuchet lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Trebuchet.cs. It is a public class, implementing/inheriting RangedSiegeWeapon, ISpawnable; the inheritance chain is Trebuchet → RangedSiegeWeapon → SiegeWeapon → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior. It exposes 29 public/protected members: 21 methods, 6 properties, 2 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Trebuchet is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain Trebuchet → RangedSiegeWeapon → SiegeWeapon → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior. The surface is method-led (methods 21/29, properties 6/29), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Trebuchet.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DirectionRestriction` | `public override float DirectionRestriction` | property |
| `GetActionTextForStandingPoint` | `public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)` | method |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | method |
| `RegisterAnimationParameters` | `protected override void RegisterAnimationParameters()` | method |
| `GetSiegeEngineType` | `public override SiegeEngineType GetSiegeEngineType()` | method |
| `GetSoundEventIndices` | `protected override void GetSoundEventIndices()` | method |
| `ShootingSpeed` | `protected override float ShootingSpeed` | property |
| `CreateAIBehaviorObject` | `public override UsableMachineAIBase CreateAIBehaviorObject()` | method |
| `OnInit` | `protected internal override void OnInit()` | method |
| `AfterMissionStart` | `public override void AfterMissionStart()` | method |
| `OnRangedSiegeWeaponStateChange` | `protected override void OnRangedSiegeWeaponStateChange()` | method |
| `HorizontalAimSensitivity` | `protected override float HorizontalAimSensitivity` | property |
| `VerticalAimSensitivity` | `protected override float VerticalAimSensitivity` | property |
| `ShootingDirection` | `protected override Vec3 ShootingDirection` | property |
| `HasAmmo` | `protected override bool HasAmmo` | property |
| `ProcessTargetValue` | `public override float ProcessTargetValue(float baseValue, TargetFlags flags)` | method |
| `GetTargetFlags` | `public override TargetFlags GetTargetFlags()` | method |
| `GetTargetValue` | `public override float GetTargetValue(List<Vec3>weaponPos)` | method |
| `CanRotate` | `protected override bool CanRotate()` | method |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `OnTick` | `protected internal override void OnTick(float dt)` | method |
| `OnTickParallel` | `protected internal override void OnTickParallel(float dt)` | method |
| `SetActivationLoadAmmoPoint` | `protected override void SetActivationLoadAmmoPoint(bool activate)` | method |
| `UpdateProjectilePosition` | `protected override void UpdateProjectilePosition()` | method |
| `IsStandingPointNotUsedOnAccountOfBeingAmmoLoad` | `protected internal override bool IsStandingPointNotUsedOnAccountOfBeingAmmoLoad(StandingPoint standingPoint)` | method |
| `GetDetachmentWeightAux` | `protected override float GetDetachmentWeightAux(BattleSideEnum side)` | method |
| `SetSpawnedFromSpawner` | `public void SetSpawnedFromSpawner()` | method |
| `TrebuchetDirectionRestriction` | `public const float TrebuchetDirectionRestriction` | field |
| `ProjectileSpeed` | `public float ProjectileSpeed` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface RangedSiegeWeapon](../RangedSiegeWeapon)
- [base / interface ISpawnable](../ISpawnable)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
