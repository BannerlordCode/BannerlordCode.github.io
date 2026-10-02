---
title: "RangedSiegeWeapon"
description: "RangedSiegeWeapon 的自动生成类参考。"
---
# RangedSiegeWeapon

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class RangedSiegeWeapon : SiegeWeapon `
**Base:** SiegeWeapon
**Source:** TaleWorlds.MountAndBlade/RangedSiegeWeapon.cs

## 概述

`RangedSiegeWeapon` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/RangedSiegeWeapon.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### RegisterAnimationParameters
`protected abstract void RegisterAnimationParameters()`

### GetSoundEventIndices
`protected abstract void GetSoundEventIndices()`

### ConsumeAmmo
`protected virtual void ConsumeAmmo() `

### SetAmmo
`public virtual void SetAmmo(int ammoLeft) `

### SetStartAmmo
`public virtual void SetStartAmmo(int ammoLeft) `

### CheckAmmo
`protected virtual void CheckAmmo() `

### ChangeProjectileEntityServer
`protected void ChangeProjectileEntityServer(Agent loadingAgent,string missileItemID) `

### ChangeProjectileEntityClient
`public void ChangeProjectileEntityClient(int index) `

### OnInit
`protected internal override void OnInit() `

### DetermineDefaultBattleSide
`protected virtual void DetermineDefaultBattleSide() `

### OnEditorInit
`protected internal override void OnEditorInit() `

### OnMissionReset
`protected internal override void OnMissionReset() `

### WriteToNetwork
`public override void WriteToNetwork() `

### UpdateProjectilePosition
`protected virtual void UpdateProjectilePosition() `

### IsInRangeToCheckAlternativePoints
`public override bool IsInRangeToCheckAlternativePoints(Agent agent) `

### GetBestPointAlternativeTo
`public override StandingPoint GetBestPointAlternativeTo(StandingPoint standingPoint,Agent agent) `

### OnRangedSiegeWeaponStateChange
`protected virtual void OnRangedSiegeWeaponStateChange() `

### SetActivationLoadAmmoPoint
`protected virtual void SetActivationLoadAmmoPoint(bool activate) `

### GetDetachmentWeightAux
`protected override float GetDetachmentWeightAux(BattleSideEnum side) `

### GetDetachmentWeightAuxForExternalAmmoWeapons
`protected float GetDetachmentWeightAuxForExternalAmmoWeapons(BattleSideEnum side) `

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement() `

### OnTick
`protected internal override void OnTick(float dt) `

### ApproachToAngle
`protected static bool ApproachToAngle(ref float angle,float angleToApproach,bool isMouse,float speed_limit,float dt,float sensitivity) `

### HandleUserAiming
`protected virtual void HandleUserAiming(float dt) `

### GiveInput
`public void GiveInput(float inputX,float inputY) `

### GiveExactInput
`public void GiveExactInput(float targetX,float targetY) `

### CanRotate
`protected virtual bool CanRotate() `

### ApplyAimChange
`protected virtual void ApplyAimChange() `

### ApplyCurrentDirectionToEntity
`protected virtual void ApplyCurrentDirectionToEntity() `

### GetTargetReleaseAngle
`public virtual float GetTargetReleaseAngle(Vec3 target) `

### AimAtThreat
`public virtual bool AimAtThreat(Threat threat) `

### AimAtTarget
`public bool AimAtTarget(Vec3 target) `

### CheckIsTargetReached
`public virtual bool CheckIsTargetReached(Vec3 target) `

### GetEstimatedTargetGlobalPoint
`public Vec3 GetEstimatedTargetGlobalPoint(Threat threat) `

### GetEstimatedTargetGlobalPointForAgent
`public Vec3 GetEstimatedTargetGlobalPointForAgent(Agent agent) `

### AimAtRotation
`public virtual void AimAtRotation(float horizontalRotation,float verticalRotation) `

### OnLoadingAmmoPointUsingCancelled
`protected void OnLoadingAmmoPointUsingCancelled(Agent agent,bool isCanceledBecauseOfAnimation) `

### OnAmmoPickupUsingCancelled
`protected void OnAmmoPickupUsingCancelled(Agent agent,bool isCanceledBecauseOfAnimation) `

### SendAgentToAmmoPickup
`protected void SendAgentToAmmoPickup(Agent agent) `

### SendReloaderAgentToOriginalPoint
`protected void SendReloaderAgentToOriginalPoint() `

### Shoot
`public bool Shoot() `

### ManualReload
`public void ManualReload() `

### AiRequestsShoot
`public void AiRequestsShoot() `

### AiRequestsManualReload
`public void AiRequestsManualReload() `

### ShootProjectile
`protected void ShootProjectile() `

### ShootProjectileAux
`protected virtual Mission.Missile ShootProjectileAux(ItemObject missileItem,bool randomizeMissileSpeed) `

### SetupProjectileToShoot
`protected void SetupProjectileToShoot(bool randomizeMissileSpeed,out Vec3 direction,out Mat3 orientation,out float missileBaseSpeed,out float missileShootingSpeed) `

### OnRotationStarted
`protected void OnRotationStarted() `

### OnRotationStopped
`protected void OnRotationStopped() `

### GetSiegeEngineType
`public abstract override SiegeEngineType GetSiegeEngineType()`

### CanShootAtThreat
`public bool CanShootAtThreat(Threat threat,int attemptCount = 5) `

### CanShootAtAgent
`public bool CanShootAtAgent(Agent agent,int attemptCount = 5) `

### GetEstimatedTargetMovementVector
`public virtual Vec3 GetEstimatedTargetMovementVector(Vec3 targetCurrentPosition,Vec3 targetVelocity) `

### CanShootAtPoint
`public bool CanShootAtPoint(Vec3 target) `

### CheckFriendlyFireForObjects
`protected unsafe virtual bool CheckFriendlyFireForObjects(Vec3 target) `

### IsTargetValid
`protected internal virtual bool IsTargetValid(ITargetable target) `

### GetOrder
`public override OrderType GetOrder(BattleSideEnum side) `

### GetEntityToAttachNavMeshFaces
`protected override WeakGameEntity GetEntityToAttachNavMeshFaces() `

### ProcessTargetValue
`public abstract float ProcessTargetValue(float baseValue,TargetFlags flags)`

### OnAfterReadFromNetwork
`public override void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord,ISynchedMissionObjectReadableRecord> synchedMissionObjectReadableRecord,bool allowVisibilityUpdate = true) `

### UpdateAmmoMesh
`protected virtual void UpdateAmmoMesh() `

### IsAnyUserBelongsToFormation
`protected override bool IsAnyUserBelongsToFormation(Formation formation) `

### GetGlobalVelocity
`public virtual Vec3 GetGlobalVelocity() `

### SetPlayerForceUse
`public void SetPlayerForceUse(bool value) `

### ShouldDisableTickIfMachineDisabled
`protected override bool ShouldDisableTickIfMachineDisabled() `

### OnShipCaptured
`public override void OnShipCaptured(BattleSideEnum newDefaultSide) `

### OnDeploymentFinished
`public override void OnDeploymentFinished() `

### OnSiegeWeaponReloadDone
`public delegate void OnSiegeWeaponReloadDone()`

## 参见

- [本区域目录](../)
- [API 参考](../../)
