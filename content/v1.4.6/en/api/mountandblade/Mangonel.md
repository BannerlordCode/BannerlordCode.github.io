---
title: "Mangonel"
description: "Mangonel: a public class in TaleWorlds.MountAndBlade, inheriting RangedSiegeWeapon, ISpawnable; 36 exposed members (22 methods, 6 properties, 8 fields). Source: TaleWorlds.MountAndBlade/Mangonel.cs."
---
# Mangonel

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class Mangonel : RangedSiegeWeapon, ISpawnable`
**File:** `TaleWorlds.MountAndBlade/Mangonel.cs`

## Overview

Mangonel lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Mangonel.cs. It is a public class, implementing/inheriting RangedSiegeWeapon, ISpawnable; the inheritance chain is Mangonel → RangedSiegeWeapon → SiegeWeapon → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior. It exposes 36 public/protected members: 22 methods, 6 properties, 8 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Mangonel is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain Mangonel → RangedSiegeWeapon → SiegeWeapon → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior. The surface is method-led (methods 22/36, properties 6/36), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Mangonel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MaximumBallisticError` | `protected override float MaximumBallisticError` | property |
| `ShootingSpeed` | `protected override float ShootingSpeed` | property |
| `RegisterAnimationParameters` | `protected override void RegisterAnimationParameters()` | method |
| `CreateAIBehaviorObject` | `public override UsableMachineAIBase CreateAIBehaviorObject()` | method |
| `GetSiegeEngineType` | `public override SiegeEngineType GetSiegeEngineType()` | method |
| `OnInit` | `protected internal override void OnInit()` | method |
| `OnEditorInit` | `protected internal override void OnEditorInit()` | method |
| `OnPilotAssignedDuringSpawn` | `public override void OnPilotAssignedDuringSpawn()` | method |
| `CanRotate` | `protected override bool CanRotate()` | method |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `OnTick` | `protected internal override void OnTick(float dt)` | method |
| `OnTickParallel` | `protected internal override void OnTickParallel(float dt)` | method |
| `SetActivationLoadAmmoPoint` | `protected override void SetActivationLoadAmmoPoint(bool activate)` | method |
| `UpdateProjectilePosition` | `protected override void UpdateProjectilePosition()` | method |
| `OnRangedSiegeWeaponStateChange` | `protected override void OnRangedSiegeWeaponStateChange()` | method |
| `GetSoundEventIndices` | `protected override void GetSoundEventIndices()` | method |
| `HorizontalAimSensitivity` | `protected override float HorizontalAimSensitivity` | property |
| `VerticalAimSensitivity` | `protected override float VerticalAimSensitivity` | property |
| `ShootingDirection` | `protected override Vec3 ShootingDirection` | property |
| `HasAmmo` | `protected override bool HasAmmo` | property |
| `ApplyAimChange` | `protected override void ApplyAimChange()` | method |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | method |
| `GetActionTextForStandingPoint` | `public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)` | method |
| `GetTargetFlags` | `public override TargetFlags GetTargetFlags()` | method |
| `GetTargetValue` | `public override float GetTargetValue(List<Vec3>weaponPos)` | method |
| `ProcessTargetValue` | `public override float ProcessTargetValue(float baseValue, TargetFlags flags)` | method |
| `GetDetachmentWeightAux` | `protected override float GetDetachmentWeightAux(BattleSideEnum side)` | method |
| `SetSpawnedFromSpawner` | `public void SetSpawnedFromSpawner()` | method |
| `MangonelBodySkeleton` | `public string MangonelBodySkeleton` | field |
| `MangonelBodyFire` | `public string MangonelBodyFire` | field |
| `MangonelBodyReload` | `public string MangonelBodyReload` | field |
| `MangonelRopeFire` | `public string MangonelRopeFire` | field |
| `MangonelRopeReload` | `public string MangonelRopeReload` | field |
| `MangonelAimAnimation` | `public string MangonelAimAnimation` | field |
| `ProjectileBoneName` | `public string ProjectileBoneName` | field |
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
