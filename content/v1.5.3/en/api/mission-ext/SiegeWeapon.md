---
title: "SiegeWeapon"
description: "Auto-generated class reference for SiegeWeapon."
---
# SiegeWeapon

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class SiegeWeapon : UsableMachine,ITargetable `
**Base:** UsableMachine, ITargetable
**Source:** TaleWorlds.MountAndBlade/SiegeWeapon.cs

## Overview

Auto-generated stub for `SiegeWeapon`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### SetForcedUse
`public void SetForcedUse(bool value)`

### GetSiegeEngineType
`public abstract SiegeEngineType GetSiegeEngineType()`

### CalculateIsSufficientlyManned
`protected virtual bool CalculateIsSufficientlyManned(BattleSideEnum battleSide)`

### OnInit
`protected internal override void OnInit()`

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

### IsAnyUserBelongsToFormation
`protected virtual bool IsAnyUserBelongsToFormation(Formation formation)`

### OnTickParallel
`protected internal override void OnTickParallel(float dt)`

### OnTick
`protected internal override void OnTick(float dt)`

### TickAuxForInit
`public void TickAuxForInit()`

### OnDeploymentStateChanged
`protected internal virtual void OnDeploymentStateChanged(bool isDeployed)`

### ShouldAutoLeaveDetachmentWhenDisabled
`public override bool ShouldAutoLeaveDetachmentWhenDisabled(BattleSideEnum sideEnum)`

### AutoAttachUserToFormation
`public override bool AutoAttachUserToFormation(BattleSideEnum sideEnum)`

### HasToBeDefendedByUser
`public override bool HasToBeDefendedByUser(BattleSideEnum sideEnum)`

### GetUserMultiplierOfWeapon
`protected float GetUserMultiplierOfWeapon()`

### GetDistanceMultiplierOfWeapon
`protected virtual float GetDistanceMultiplierOfWeapon(Vec3 weaponPos)`

### GetMinimumDistanceBetweenPositions
`protected virtual float GetMinimumDistanceBetweenPositions(Vec3 position)`

### GetHitPointMultiplierOfWeapon
`protected float GetHitPointMultiplierOfWeapon()`

### GetTargetEntity
`public WeakGameEntity GetTargetEntity()`

### GetTargetingOffset
`public Vec3 GetTargetingOffset()`

### GetSide
`public BattleSideEnum GetSide()`

### GetTargetGlobalVelocity
`public Vec3 GetTargetGlobalVelocity()`

### IsDestructable
`public bool IsDestructable()`

### Entity
`public WeakGameEntity Entity()`

### ComputeGlobalPhysicsBoundingBoxMinMax
`public ValueTuple<Vec3,Vec3> ComputeGlobalPhysicsBoundingBoxMinMax()`

### OnShipCaptured
`public virtual void OnShipCaptured(BattleSideEnum newDefaultSide)`

### GetTargetFlags
`public abstract TargetFlags GetTargetFlags()`

### GetTargetValue
`public abstract float GetTargetValue(List<Vec3> weaponPos)`

## See Also

- [Section index](../)
