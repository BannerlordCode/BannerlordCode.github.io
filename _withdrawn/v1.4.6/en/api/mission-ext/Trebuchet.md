---
title: "Trebuchet"
description: "Trebuchet: a public class in TaleWorlds.MountAndBlade, inheriting RangedSiegeWeapon, ISpawnable; 29 exposed members (21 methods, 6 properties, 2 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/Trebuchet.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Trebuchet

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class Trebuchet : RangedSiegeWeapon, ISpawnable`
**File:** `TaleWorlds.MountAndBlade/Trebuchet.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

Trebuchet lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Trebuchet.cs. It is a public class, implementing/inheriting RangedSiegeWeapon, ISpawnable; the inheritance chain is Trebuchet → RangedSiegeWeapon → SiegeWeapon → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. It exposes 29 public/protected members: 21 methods, 6 properties, 2 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Trebuchet lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain Trebuchet → RangedSiegeWeapon → SiegeWeapon → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 21/29, properties 6/29), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Trebuchet.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface RangedSiegeWeapon](../RangedSiegeWeapon/)
- [base / interface ISpawnable](../ISpawnable/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
