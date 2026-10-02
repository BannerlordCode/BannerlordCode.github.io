---
title: "SiegeWeapon"
description: "SiegeWeapon 的自动生成类参考。"
---
# SiegeWeapon

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class SiegeWeapon : UsableMachine,ITargetable `
**Base:** UsableMachine,ITargetable
**Source:** TaleWorlds.MountAndBlade/SiegeWeapon.cs

## 概述

`SiegeWeapon` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/SiegeWeapon.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### SetForcedUse
`public void SetForcedUse(bool value) `

### GetSiegeEngineType
`public abstract SiegeEngineType GetSiegeEngineType()`

### CalculateIsSufficientlyManned
`protected virtual bool CalculateIsSufficientlyManned(BattleSideEnum battleSide) `

### OnInit
`protected internal override void OnInit() `

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement() `

### IsAnyUserBelongsToFormation
`protected virtual bool IsAnyUserBelongsToFormation(Formation formation) `

### OnTickParallel
`protected internal override void OnTickParallel(float dt) `

### OnTick
`protected internal override void OnTick(float dt) `

### TickAuxForInit
`public void TickAuxForInit() `

### OnDeploymentStateChanged
`protected internal virtual void OnDeploymentStateChanged(bool isDeployed) `

### ShouldAutoLeaveDetachmentWhenDisabled
`public override bool ShouldAutoLeaveDetachmentWhenDisabled(BattleSideEnum sideEnum) `

### AutoAttachUserToFormation
`public override bool AutoAttachUserToFormation(BattleSideEnum sideEnum) `

### HasToBeDefendedByUser
`public override bool HasToBeDefendedByUser(BattleSideEnum sideEnum) `

### GetUserMultiplierOfWeapon
`protected float GetUserMultiplierOfWeapon() `

### GetDistanceMultiplierOfWeapon
`protected virtual float GetDistanceMultiplierOfWeapon(Vec3 weaponPos) `

### GetMinimumDistanceBetweenPositions
`protected virtual float GetMinimumDistanceBetweenPositions(Vec3 position) `

### GetHitPointMultiplierOfWeapon
`protected float GetHitPointMultiplierOfWeapon() `

### GetTargetEntity
`public WeakGameEntity GetTargetEntity() `

### GetTargetingOffset
`public Vec3 GetTargetingOffset() `

### GetSide
`public BattleSideEnum GetSide() `

### GetTargetGlobalVelocity
`public Vec3 GetTargetGlobalVelocity() `

### IsDestructable
`public bool IsDestructable() `

### Entity
`public WeakGameEntity Entity() `

### ComputeGlobalPhysicsBoundingBoxMinMax
`public ValueTuple<Vec3,Vec3> ComputeGlobalPhysicsBoundingBoxMinMax() `

### OnShipCaptured
`public virtual void OnShipCaptured(BattleSideEnum newDefaultSide) `

### GetTargetFlags
`public abstract TargetFlags GetTargetFlags()`

### GetTargetValue
`public abstract float GetTargetValue(List<Vec3> weaponPos)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
