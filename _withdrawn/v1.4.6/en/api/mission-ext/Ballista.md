---
title: "Ballista"
description: "Ballista: a public class in TaleWorlds.MountAndBlade, inheriting RangedSiegeWeapon, ISpawnable; 42 exposed members (22 methods, 9 properties, 11 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/Ballista.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Ballista

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class Ballista : RangedSiegeWeapon, ISpawnable`
**File:** `TaleWorlds.MountAndBlade/Ballista.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

Ballista lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Ballista.cs. It is a public class, implementing/inheriting RangedSiegeWeapon, ISpawnable; the inheritance chain is Ballista → RangedSiegeWeapon → SiegeWeapon → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. It exposes 42 public/protected members: 22 methods, 9 properties, 11 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Ballista lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain Ballista → RangedSiegeWeapon → SiegeWeapon → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 22/42, properties 9/42), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Ballista.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `DirectionRestriction` | `public override float DirectionRestriction` | property |
| `ShootingSpeed` | `protected override float ShootingSpeed` | property |
| `CanShootAtPointCheckingOffset` | `public override Vec3 CanShootAtPointCheckingOffset` | property |
| `WeaponMovesDownToReload` | `protected override bool WeaponMovesDownToReload` | property |
| `MultipleProjectileId` | `public override string MultipleProjectileId` | property |
| `MultipleProjectileFlyingId` | `public override string MultipleProjectileFlyingId` | property |
| `RegisterAnimationParameters` | `protected override void RegisterAnimationParameters()` | method |
| `GetSiegeEngineType` | `public override SiegeEngineType GetSiegeEngineType()` | method |
| `OnInit` | `protected internal override void OnInit()` | method |
| `OnPilotAssignedDuringSpawn` | `public override void OnPilotAssignedDuringSpawn()` | method |
| `CanRotate` | `protected override bool CanRotate()` | method |
| `CreateAIBehaviorObject` | `public override UsableMachineAIBase CreateAIBehaviorObject()` | method |
| `OnRangedSiegeWeaponStateChange` | `protected override void OnRangedSiegeWeaponStateChange()` | method |
| `MaximumBallisticError` | `protected override float MaximumBallisticError` | property |
| `HorizontalAimSensitivity` | `protected override float HorizontalAimSensitivity` | property |
| `VerticalAimSensitivity` | `protected override float VerticalAimSensitivity` | property |
| `HandleUserAiming` | `protected override void HandleUserAiming(float dt)` | method |
| `ApplyAimChange` | `protected override void ApplyAimChange()` | method |
| `ApplyCurrentDirectionToEntity` | `protected override void ApplyCurrentDirectionToEntity()` | method |
| `GetSoundEventIndices` | `protected override void GetSoundEventIndices()` | method |
| `IsTargetValid` | `protected internal override bool IsTargetValid(ITargetable target)` | method |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `OnTick` | `protected internal override void OnTick(float dt)` | method |
| `OnTickParallel` | `protected internal override void OnTickParallel(float dt)` | method |
| `GetActionTextForStandingPoint` | `public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)` | method |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | method |
| `UpdateAmmoMesh` | `protected override void UpdateAmmoMesh()` | method |
| `ProcessTargetValue` | `public override float ProcessTargetValue(float baseValue, TargetFlags flags)` | method |
| `GetTargetFlags` | `public override TargetFlags GetTargetFlags()` | method |
| `GetTargetValue` | `public override float GetTargetValue(List<Vec3>weaponPos)` | method |
| `SetSpawnedFromSpawner` | `public void SetSpawnedFromSpawner()` | method |
| `NavelTag` | `public string NavelTag` | field |
| `BodyTag` | `public string BodyTag` | field |
| `SkeletonTag` | `public string SkeletonTag` | field |
| `IdleActionName` | `protected string IdleActionName` | field |
| `ReloadActionName` | `protected string ReloadActionName` | field |
| `PlaceAmmoStartActionName` | `protected string PlaceAmmoStartActionName` | field |
| `PlaceAmmoEndActionName` | `protected string PlaceAmmoEndActionName` | field |
| `PickUpAmmoStartActionName` | `protected string PickUpAmmoStartActionName` | field |
| `PickUpAmmoEndActionName` | `protected string PickUpAmmoEndActionName` | field |
| `HorizontalDirectionRestriction` | `public float HorizontalDirectionRestriction` | field |
| `BallistaShootingSpeed` | `public float BallistaShootingSpeed` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface RangedSiegeWeapon](../RangedSiegeWeapon/)
- [base / interface ISpawnable](../ISpawnable/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
