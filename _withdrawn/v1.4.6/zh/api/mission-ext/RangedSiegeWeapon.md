---
title: "RangedSiegeWeapon"
description: "RangedSiegeWeapon：TaleWorlds.MountAndBlade 的 public 类，继承 SiegeWeapon；公开成员 130 个（方法 68、属性 36、字段 18）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/RangedSiegeWeapon.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# RangedSiegeWeapon

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class RangedSiegeWeapon : SiegeWeapon`
**File:** `TaleWorlds.MountAndBlade/RangedSiegeWeapon.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

RangedSiegeWeapon 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/RangedSiegeWeapon.cs。它是一个 public 类（abstract），实现/继承 SiegeWeapon，继承链为 RangedSiegeWeapon → SiegeWeapon → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject。public/protected 成员共 130 个：68 方法、36 属性、18 字段、2 事件、6 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：RangedSiegeWeapon 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 RangedSiegeWeapon → SiegeWeapon → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject。成员构成以方法为主（方法 68/130，属性 36/130），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/RangedSiegeWeapon.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MultipleFireProjectileId` | `public virtual string MultipleFireProjectileId` | 属性 |
| `MultipleFireProjectileFlyingId` | `public virtual string MultipleFireProjectileFlyingId` | 属性 |
| `MultipleProjectileId` | `public virtual string MultipleProjectileId` | 属性 |
| `MultipleProjectileFlyingId` | `public virtual string MultipleProjectileFlyingId` | 属性 |
| `SingleFireProjectileId` | `public virtual string SingleFireProjectileId` | 属性 |
| `SingleFireProjectileFlyingId` | `public virtual string SingleFireProjectileFlyingId` | 属性 |
| `SingleProjectileId` | `public virtual string SingleProjectileId` | 属性 |
| `SingleProjectileFlyingId` | `public virtual string SingleProjectileFlyingId` | 属性 |
| `Agent>OnAgentLoadsMachine;` | `public event Action<RangedSiegeWeapon, Agent>OnAgentLoadsMachine;` | 事件 |
| `State` | `public RangedSiegeWeapon.WeaponState State` | 属性 |
| `MaximumBallisticError` | `protected virtual float MaximumBallisticError` | 属性 |
| `ShootingSpeed` | `protected abstract float ShootingSpeed` | 属性 |
| `CanShootAtPointCheckingOffset` | `public virtual Vec3 CanShootAtPointCheckingOffset` | 属性 |
| `CameraHolder` | `public GameEntity CameraHolder` | 属性 |
| `MissileStartingGlobalPositionForSimulation` | `protected Vec3 MissileStartingGlobalPositionForSimulation` | 属性 |
| `SkeletonName` | `protected string SkeletonName` | 属性 |
| `FireAnimation` | `protected string FireAnimation` | 属性 |
| `SetUpAnimation` | `protected string SetUpAnimation` | 属性 |
| `FireAnimationIndex` | `protected int FireAnimationIndex` | 属性 |
| `SetUpAnimationIndex` | `protected int SetUpAnimationIndex` | 属性 |
| `LoadedMissileItem` | `protected ItemObject LoadedMissileItem` | 属性 |
| `OnReloadDone;` | `public event RangedSiegeWeapon.OnSiegeWeaponReloadDone OnReloadDone;` | 事件 |
| `WeaponMovesDownToReload` | `protected virtual bool WeaponMovesDownToReload` | 属性 |
| `AmmoCount` | `public int AmmoCount` | 属性 |
| `HasAmmo` | `protected virtual bool HasAmmo` | 属性 |
| `DirectionRestriction` | `public virtual float DirectionRestriction` | 属性 |
| `HorizontalAimSensitivity` | `protected virtual float HorizontalAimSensitivity` | 属性 |
| `VerticalAimSensitivity` | `protected virtual float VerticalAimSensitivity` | 属性 |
| `ReloadSpeedMultiplier` | `protected virtual float ReloadSpeedMultiplier` | 属性 |
| `PlayerForceUse` | `public bool PlayerForceUse` | 属性 |
| `RegisterAnimationParameters` | `protected abstract void RegisterAnimationParameters();` | 方法 |
| `GetSoundEventIndices` | `protected abstract void GetSoundEventIndices();` | 方法 |
| `ConsumeAmmo` | `protected virtual void ConsumeAmmo()` | 方法 |
| `SetAmmo` | `public virtual void SetAmmo(int ammoLeft)` | 方法 |
| `SetStartAmmo` | `public virtual void SetStartAmmo(int ammoLeft)` | 方法 |
| `CheckAmmo` | `protected virtual void CheckAmmo()` | 方法 |
| `ChangeProjectileEntityServer` | `protected void ChangeProjectileEntityServer(Agent loadingAgent, string missileItemID)` | 方法 |
| `ChangeProjectileEntityClient` | `public void ChangeProjectileEntityClient(int index)` | 方法 |
| `OnInit` | `protected internal override void OnInit()` | 方法 |
| `DetermineDefaultBattleSide` | `protected virtual void DetermineDefaultBattleSide()` | 方法 |
| `OnEditorInit` | `protected internal override void OnEditorInit()` | 方法 |
| `OnMissionReset` | `protected internal override void OnMissionReset()` | 方法 |
| `WriteToNetwork` | `public override void WriteToNetwork()` | 方法 |
| `UpdateProjectilePosition` | `protected virtual void UpdateProjectilePosition()` | 方法 |
| `IsInRangeToCheckAlternativePoints` | `public override bool IsInRangeToCheckAlternativePoints(Agent agent)` | 方法 |
| `GetBestPointAlternativeTo` | `public override StandingPoint GetBestPointAlternativeTo(StandingPoint standingPoint, Agent agent)` | 方法 |
| `OnRangedSiegeWeaponStateChange` | `protected virtual void OnRangedSiegeWeaponStateChange()` | 方法 |
| `SetActivationLoadAmmoPoint` | `protected virtual void SetActivationLoadAmmoPoint(bool activate)` | 方法 |
| `GetDetachmentWeightAux` | `protected override float GetDetachmentWeightAux(BattleSideEnum side)` | 方法 |
| `GetDetachmentWeightAuxForExternalAmmoWeapons` | `protected float GetDetachmentWeightAuxForExternalAmmoWeapons(BattleSideEnum side)` | 方法 |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | 方法 |
| `OnTick` | `protected internal override void OnTick(float dt)` | 方法 |
| `ApproachToAngle` | `protected static bool ApproachToAngle(ref float angle, float angleToApproach, bool isMouse, float speed_limit, float dt, float sensitivity)` | 方法 |
| `HandleUserAiming` | `protected virtual void HandleUserAiming(float dt)` | 方法 |
| `GiveInput` | `public void GiveInput(float inputX, float inputY)` | 方法 |
| `GiveExactInput` | `public void GiveExactInput(float targetX, float targetY)` | 方法 |
| `CanRotate` | `protected virtual bool CanRotate()` | 方法 |
| `ApplyAimChange` | `protected virtual void ApplyAimChange()` | 方法 |
| `ApplyCurrentDirectionToEntity` | `protected virtual void ApplyCurrentDirectionToEntity()` | 方法 |
| `GetTargetReleaseAngle` | `public virtual float GetTargetReleaseAngle(Vec3 target)` | 方法 |
| `AimAtThreat` | `public virtual bool AimAtThreat(Threat threat)` | 方法 |
| `AimAtTarget` | `public bool AimAtTarget(Vec3 target)` | 方法 |
| `CheckIsTargetReached` | `public virtual bool CheckIsTargetReached(Vec3 target)` | 方法 |
| `GetEstimatedTargetGlobalPoint` | `public Vec3 GetEstimatedTargetGlobalPoint(Threat threat)` | 方法 |
| `GetEstimatedTargetGlobalPointForAgent` | `public Vec3 GetEstimatedTargetGlobalPointForAgent(Agent agent)` | 方法 |
| `AimAtRotation` | `public virtual void AimAtRotation(float horizontalRotation, float verticalRotation)` | 方法 |
| `OnLoadingAmmoPointUsingCancelled` | `protected void OnLoadingAmmoPointUsingCancelled(Agent agent, bool isCanceledBecauseOfAnimation)` | 方法 |
| `OnAmmoPickupUsingCancelled` | `protected void OnAmmoPickupUsingCancelled(Agent agent, bool isCanceledBecauseOfAnimation)` | 方法 |
| `SendAgentToAmmoPickup` | `protected void SendAgentToAmmoPickup(Agent agent)` | 方法 |
| `SendReloaderAgentToOriginalPoint` | `protected void SendReloaderAgentToOriginalPoint()` | 方法 |
| `Shoot` | `public bool Shoot()` | 方法 |
| `ManualReload` | `public void ManualReload()` | 方法 |
| `AiRequestsShoot` | `public void AiRequestsShoot()` | 方法 |
| `AiRequestsManualReload` | `public void AiRequestsManualReload()` | 方法 |
| `ShootProjectile` | `protected void ShootProjectile()` | 方法 |
| `ShootProjectileAux` | `protected virtual Mission.Missile ShootProjectileAux(ItemObject missileItem, bool randomizeMissileSpeed)` | 方法 |
| `SetupProjectileToShoot` | `protected void SetupProjectileToShoot(bool randomizeMissileSpeed, out Vec3 direction, out Mat3 orientation, out float missileBaseSpeed, out float missileShootingSpeed)` | 方法 |
| `ShootingDirection` | `protected virtual Vec3 ShootingDirection` | 属性 |
| `ProjectileEntityCurrentGlobalPosition` | `public virtual Vec3 ProjectileEntityCurrentGlobalPosition` | 属性 |
| `OnRotationStarted` | `protected void OnRotationStarted()` | 方法 |
| `OnRotationStopped` | `protected void OnRotationStopped()` | 方法 |
| `GetSiegeEngineType` | `public abstract override SiegeEngineType GetSiegeEngineType();` | 方法 |
| `Side` | `public override BattleSideEnum Side` | 属性 |
| `CanShootAtThreat` | `public bool CanShootAtThreat(Threat threat, int attemptCount = 5)` | 方法 |
| `CanShootAtAgent` | `public bool CanShootAtAgent(Agent agent, int attemptCount = 5)` | 方法 |
| `GetEstimatedTargetMovementVector` | `public virtual Vec3 GetEstimatedTargetMovementVector(Vec3 targetCurrentPosition, Vec3 targetVelocity)` | 方法 |
| `CanShootAtPoint` | `public bool CanShootAtPoint(Vec3 target)` | 方法 |
| `CheckFriendlyFireForObjects` | `protected unsafe virtual bool CheckFriendlyFireForObjects(Vec3 target)` | 方法 |
| `IsTargetValid` | `protected internal virtual bool IsTargetValid(ITargetable target)` | 方法 |
| `GetOrder` | `public override OrderType GetOrder(BattleSideEnum side)` | 方法 |
| `GetEntityToAttachNavMeshFaces` | `protected override WeakGameEntity GetEntityToAttachNavMeshFaces()` | 方法 |
| `ProcessTargetValue` | `public abstract float ProcessTargetValue(float baseValue, TargetFlags flags);` | 方法 |
| `OnAfterReadFromNetwork` | `public override void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord>synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)` | 方法 |
| `UpdateAmmoMesh` | `protected virtual void UpdateAmmoMesh()` | 方法 |
| `IsAnyUserBelongsToFormation` | `protected override bool IsAnyUserBelongsToFormation(Formation formation)` | 方法 |
| `GetGlobalVelocity` | `public virtual Vec3 GetGlobalVelocity()` | 方法 |
| `SetPlayerForceUse` | `public void SetPlayerForceUse(bool value)` | 方法 |
| `ShouldDisableTickIfMachineDisabled` | `protected override bool ShouldDisableTickIfMachineDisabled()` | 方法 |
| `OnShipCaptured` | `public override void OnShipCaptured(BattleSideEnum newDefaultSide)` | 方法 |
| `OnDeploymentFinished` | `public override void OnDeploymentFinished()` | 方法 |
| `DefaultDirectionRestriction` | `public const float DefaultDirectionRestriction` | 字段 |
| `CanGoAmmoPickupTag` | `public const string CanGoAmmoPickupTag` | 字段 |
| `DontApplySidePenaltyTag` | `public const string DontApplySidePenaltyTag` | 字段 |
| `ReloadTag` | `public const string ReloadTag` | 字段 |
| `AmmoLoadTag` | `public const string AmmoLoadTag` | 字段 |
| `CameraHolderTag` | `public const string CameraHolderTag` | 字段 |
| `ProjectileTag` | `public const string ProjectileTag` | 字段 |
| `MultipleProjectileCount` | `protected int MultipleProjectileCount` | 字段 |
| `MoveSoundIndex` | `protected int MoveSoundIndex` | 字段 |
| `ReloadSoundIndex` | `protected int ReloadSoundIndex` | 字段 |
| `FireSoundIndex` | `protected int FireSoundIndex` | 字段 |
| `float>PilotReservePriorityValues` | `protected Dictionary<StandingPoint, float>PilotReservePriorityValues` | 字段 |
| `FinalReloadSpeed` | `protected float FinalReloadSpeed` | 字段 |
| `BaseReloadSpeed` | `protected float BaseReloadSpeed` | 字段 |
| `CurrentAmmo` | `protected int CurrentAmmo` | 字段 |
| `TopReleaseAngleRestriction` | `public float TopReleaseAngleRestriction` | 字段 |
| `BottomReleaseAngleRestriction` | `public float BottomReleaseAngleRestriction` | 字段 |
| `TimeGapBetweenShootingEndAndReloadingStart` | `protected float TimeGapBetweenShootingEndAndReloadingStart` | 字段 |
| `ISynchedMissionObjectReadableRecord` | `public struct RangedSiegeWeaponRecord : ISynchedMissionObjectReadableRecord` | 属性 |
| `WeaponState` | `public enum WeaponState` | 属性 |
| `FiringFocus` | `public enum FiringFocus` | 属性 |
| `CameraState` | `public enum CameraState` | 属性 |
| `ForceUseState` | `public enum ForceUseState` | 属性 |
| `OnSiegeWeaponReloadDone` | `public delegate void OnSiegeWeaponReloadDone();` | 方法 |
| `ISynchedMissionObjectReadableRecord` | `public struct RangedSiegeWeaponRecord : ISynchedMissionObjectReadableRecord` | 嵌套类型 |
| `WeaponState` | `public enum WeaponState` | 嵌套类型 |
| `FiringFocus` | `public enum FiringFocus` | 嵌套类型 |
| `CameraState` | `public enum CameraState` | 嵌套类型 |
| `ForceUseState` | `public enum ForceUseState` | 嵌套类型 |
| `OnSiegeWeaponReloadDone` | `public delegate void OnSiegeWeaponReloadDone()` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 SiegeWeapon](../SiegeWeapon/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
