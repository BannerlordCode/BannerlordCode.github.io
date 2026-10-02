---
title: "RangedSiegeWeapon"
description: "RangedSiegeWeapon: a public class in TaleWorlds.MountAndBlade, inheriting SiegeWeapon; 130 exposed members (68 methods, 36 properties, 18 fields). Source: TaleWorlds.MountAndBlade/RangedSiegeWeapon.cs."
---
# RangedSiegeWeapon

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class RangedSiegeWeapon : SiegeWeapon`
**File:** `TaleWorlds.MountAndBlade/RangedSiegeWeapon.cs`

## Overview

RangedSiegeWeapon lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/RangedSiegeWeapon.cs. It is a public class (abstract), implementing/inheriting SiegeWeapon; the inheritance chain is RangedSiegeWeapon → SiegeWeapon → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior. It exposes 130 public/protected members: 68 methods, 36 properties, 18 fields, 2 events, 6 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: RangedSiegeWeapon is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain RangedSiegeWeapon → SiegeWeapon → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior. The surface is method-led (methods 68/130, properties 36/130), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/RangedSiegeWeapon.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MultipleFireProjectileId` | `public virtual string MultipleFireProjectileId` | property |
| `MultipleFireProjectileFlyingId` | `public virtual string MultipleFireProjectileFlyingId` | property |
| `MultipleProjectileId` | `public virtual string MultipleProjectileId` | property |
| `MultipleProjectileFlyingId` | `public virtual string MultipleProjectileFlyingId` | property |
| `SingleFireProjectileId` | `public virtual string SingleFireProjectileId` | property |
| `SingleFireProjectileFlyingId` | `public virtual string SingleFireProjectileFlyingId` | property |
| `SingleProjectileId` | `public virtual string SingleProjectileId` | property |
| `SingleProjectileFlyingId` | `public virtual string SingleProjectileFlyingId` | property |
| `Agent>OnAgentLoadsMachine;` | `public event Action<RangedSiegeWeapon, Agent>OnAgentLoadsMachine;` | event |
| `State` | `public RangedSiegeWeapon.WeaponState State` | property |
| `MaximumBallisticError` | `protected virtual float MaximumBallisticError` | property |
| `ShootingSpeed` | `protected abstract float ShootingSpeed` | property |
| `CanShootAtPointCheckingOffset` | `public virtual Vec3 CanShootAtPointCheckingOffset` | property |
| `CameraHolder` | `public GameEntity CameraHolder` | property |
| `MissileStartingGlobalPositionForSimulation` | `protected Vec3 MissileStartingGlobalPositionForSimulation` | property |
| `SkeletonName` | `protected string SkeletonName` | property |
| `FireAnimation` | `protected string FireAnimation` | property |
| `SetUpAnimation` | `protected string SetUpAnimation` | property |
| `FireAnimationIndex` | `protected int FireAnimationIndex` | property |
| `SetUpAnimationIndex` | `protected int SetUpAnimationIndex` | property |
| `LoadedMissileItem` | `protected ItemObject LoadedMissileItem` | property |
| `OnReloadDone;` | `public event RangedSiegeWeapon.OnSiegeWeaponReloadDone OnReloadDone;` | event |
| `WeaponMovesDownToReload` | `protected virtual bool WeaponMovesDownToReload` | property |
| `AmmoCount` | `public int AmmoCount` | property |
| `HasAmmo` | `protected virtual bool HasAmmo` | property |
| `DirectionRestriction` | `public virtual float DirectionRestriction` | property |
| `HorizontalAimSensitivity` | `protected virtual float HorizontalAimSensitivity` | property |
| `VerticalAimSensitivity` | `protected virtual float VerticalAimSensitivity` | property |
| `ReloadSpeedMultiplier` | `protected virtual float ReloadSpeedMultiplier` | property |
| `PlayerForceUse` | `public bool PlayerForceUse` | property |
| `RegisterAnimationParameters` | `protected abstract void RegisterAnimationParameters();` | method |
| `GetSoundEventIndices` | `protected abstract void GetSoundEventIndices();` | method |
| `ConsumeAmmo` | `protected virtual void ConsumeAmmo()` | method |
| `SetAmmo` | `public virtual void SetAmmo(int ammoLeft)` | method |
| `SetStartAmmo` | `public virtual void SetStartAmmo(int ammoLeft)` | method |
| `CheckAmmo` | `protected virtual void CheckAmmo()` | method |
| `ChangeProjectileEntityServer` | `protected void ChangeProjectileEntityServer(Agent loadingAgent, string missileItemID)` | method |
| `ChangeProjectileEntityClient` | `public void ChangeProjectileEntityClient(int index)` | method |
| `OnInit` | `protected internal override void OnInit()` | method |
| `DetermineDefaultBattleSide` | `protected virtual void DetermineDefaultBattleSide()` | method |
| `OnEditorInit` | `protected internal override void OnEditorInit()` | method |
| `OnMissionReset` | `protected internal override void OnMissionReset()` | method |
| `WriteToNetwork` | `public override void WriteToNetwork()` | method |
| `UpdateProjectilePosition` | `protected virtual void UpdateProjectilePosition()` | method |
| `IsInRangeToCheckAlternativePoints` | `public override bool IsInRangeToCheckAlternativePoints(Agent agent)` | method |
| `GetBestPointAlternativeTo` | `public override StandingPoint GetBestPointAlternativeTo(StandingPoint standingPoint, Agent agent)` | method |
| `OnRangedSiegeWeaponStateChange` | `protected virtual void OnRangedSiegeWeaponStateChange()` | method |
| `SetActivationLoadAmmoPoint` | `protected virtual void SetActivationLoadAmmoPoint(bool activate)` | method |
| `GetDetachmentWeightAux` | `protected override float GetDetachmentWeightAux(BattleSideEnum side)` | method |
| `GetDetachmentWeightAuxForExternalAmmoWeapons` | `protected float GetDetachmentWeightAuxForExternalAmmoWeapons(BattleSideEnum side)` | method |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `OnTick` | `protected internal override void OnTick(float dt)` | method |
| `ApproachToAngle` | `protected static bool ApproachToAngle(ref float angle, float angleToApproach, bool isMouse, float speed_limit, float dt, float sensitivity)` | method |
| `HandleUserAiming` | `protected virtual void HandleUserAiming(float dt)` | method |
| `GiveInput` | `public void GiveInput(float inputX, float inputY)` | method |
| `GiveExactInput` | `public void GiveExactInput(float targetX, float targetY)` | method |
| `CanRotate` | `protected virtual bool CanRotate()` | method |
| `ApplyAimChange` | `protected virtual void ApplyAimChange()` | method |
| `ApplyCurrentDirectionToEntity` | `protected virtual void ApplyCurrentDirectionToEntity()` | method |
| `GetTargetReleaseAngle` | `public virtual float GetTargetReleaseAngle(Vec3 target)` | method |
| `AimAtThreat` | `public virtual bool AimAtThreat(Threat threat)` | method |
| `AimAtTarget` | `public bool AimAtTarget(Vec3 target)` | method |
| `CheckIsTargetReached` | `public virtual bool CheckIsTargetReached(Vec3 target)` | method |
| `GetEstimatedTargetGlobalPoint` | `public Vec3 GetEstimatedTargetGlobalPoint(Threat threat)` | method |
| `GetEstimatedTargetGlobalPointForAgent` | `public Vec3 GetEstimatedTargetGlobalPointForAgent(Agent agent)` | method |
| `AimAtRotation` | `public virtual void AimAtRotation(float horizontalRotation, float verticalRotation)` | method |
| `OnLoadingAmmoPointUsingCancelled` | `protected void OnLoadingAmmoPointUsingCancelled(Agent agent, bool isCanceledBecauseOfAnimation)` | method |
| `OnAmmoPickupUsingCancelled` | `protected void OnAmmoPickupUsingCancelled(Agent agent, bool isCanceledBecauseOfAnimation)` | method |
| `SendAgentToAmmoPickup` | `protected void SendAgentToAmmoPickup(Agent agent)` | method |
| `SendReloaderAgentToOriginalPoint` | `protected void SendReloaderAgentToOriginalPoint()` | method |
| `Shoot` | `public bool Shoot()` | method |
| `ManualReload` | `public void ManualReload()` | method |
| `AiRequestsShoot` | `public void AiRequestsShoot()` | method |
| `AiRequestsManualReload` | `public void AiRequestsManualReload()` | method |
| `ShootProjectile` | `protected void ShootProjectile()` | method |
| `ShootProjectileAux` | `protected virtual Mission.Missile ShootProjectileAux(ItemObject missileItem, bool randomizeMissileSpeed)` | method |
| `SetupProjectileToShoot` | `protected void SetupProjectileToShoot(bool randomizeMissileSpeed, out Vec3 direction, out Mat3 orientation, out float missileBaseSpeed, out float missileShootingSpeed)` | method |
| `ShootingDirection` | `protected virtual Vec3 ShootingDirection` | property |
| `ProjectileEntityCurrentGlobalPosition` | `public virtual Vec3 ProjectileEntityCurrentGlobalPosition` | property |
| `OnRotationStarted` | `protected void OnRotationStarted()` | method |
| `OnRotationStopped` | `protected void OnRotationStopped()` | method |
| `GetSiegeEngineType` | `public abstract override SiegeEngineType GetSiegeEngineType();` | method |
| `Side` | `public override BattleSideEnum Side` | property |
| `CanShootAtThreat` | `public bool CanShootAtThreat(Threat threat, int attemptCount = 5)` | method |
| `CanShootAtAgent` | `public bool CanShootAtAgent(Agent agent, int attemptCount = 5)` | method |
| `GetEstimatedTargetMovementVector` | `public virtual Vec3 GetEstimatedTargetMovementVector(Vec3 targetCurrentPosition, Vec3 targetVelocity)` | method |
| `CanShootAtPoint` | `public bool CanShootAtPoint(Vec3 target)` | method |
| `CheckFriendlyFireForObjects` | `protected unsafe virtual bool CheckFriendlyFireForObjects(Vec3 target)` | method |
| `IsTargetValid` | `protected internal virtual bool IsTargetValid(ITargetable target)` | method |
| `GetOrder` | `public override OrderType GetOrder(BattleSideEnum side)` | method |
| `GetEntityToAttachNavMeshFaces` | `protected override WeakGameEntity GetEntityToAttachNavMeshFaces()` | method |
| `ProcessTargetValue` | `public abstract float ProcessTargetValue(float baseValue, TargetFlags flags);` | method |
| `OnAfterReadFromNetwork` | `public override void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord>synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)` | method |
| `UpdateAmmoMesh` | `protected virtual void UpdateAmmoMesh()` | method |
| `IsAnyUserBelongsToFormation` | `protected override bool IsAnyUserBelongsToFormation(Formation formation)` | method |
| `GetGlobalVelocity` | `public virtual Vec3 GetGlobalVelocity()` | method |
| `SetPlayerForceUse` | `public void SetPlayerForceUse(bool value)` | method |
| `ShouldDisableTickIfMachineDisabled` | `protected override bool ShouldDisableTickIfMachineDisabled()` | method |
| `OnShipCaptured` | `public override void OnShipCaptured(BattleSideEnum newDefaultSide)` | method |
| `OnDeploymentFinished` | `public override void OnDeploymentFinished()` | method |
| `DefaultDirectionRestriction` | `public const float DefaultDirectionRestriction` | field |
| `CanGoAmmoPickupTag` | `public const string CanGoAmmoPickupTag` | field |
| `DontApplySidePenaltyTag` | `public const string DontApplySidePenaltyTag` | field |
| `ReloadTag` | `public const string ReloadTag` | field |
| `AmmoLoadTag` | `public const string AmmoLoadTag` | field |
| `CameraHolderTag` | `public const string CameraHolderTag` | field |
| `ProjectileTag` | `public const string ProjectileTag` | field |
| `MultipleProjectileCount` | `protected int MultipleProjectileCount` | field |
| `MoveSoundIndex` | `protected int MoveSoundIndex` | field |
| `ReloadSoundIndex` | `protected int ReloadSoundIndex` | field |
| `FireSoundIndex` | `protected int FireSoundIndex` | field |
| `float>PilotReservePriorityValues` | `protected Dictionary<StandingPoint, float>PilotReservePriorityValues` | field |
| `FinalReloadSpeed` | `protected float FinalReloadSpeed` | field |
| `BaseReloadSpeed` | `protected float BaseReloadSpeed` | field |
| `CurrentAmmo` | `protected int CurrentAmmo` | field |
| `TopReleaseAngleRestriction` | `public float TopReleaseAngleRestriction` | field |
| `BottomReleaseAngleRestriction` | `public float BottomReleaseAngleRestriction` | field |
| `TimeGapBetweenShootingEndAndReloadingStart` | `protected float TimeGapBetweenShootingEndAndReloadingStart` | field |
| `ISynchedMissionObjectReadableRecord` | `public struct RangedSiegeWeaponRecord : ISynchedMissionObjectReadableRecord` | property |
| `WeaponState` | `public enum WeaponState` | property |
| `FiringFocus` | `public enum FiringFocus` | property |
| `CameraState` | `public enum CameraState` | property |
| `ForceUseState` | `public enum ForceUseState` | property |
| `OnSiegeWeaponReloadDone` | `public delegate void OnSiegeWeaponReloadDone();` | method |
| `ISynchedMissionObjectReadableRecord` | `public struct RangedSiegeWeaponRecord : ISynchedMissionObjectReadableRecord` | nested type |
| `WeaponState` | `public enum WeaponState` | nested type |
| `FiringFocus` | `public enum FiringFocus` | nested type |
| `CameraState` | `public enum CameraState` | nested type |
| `ForceUseState` | `public enum ForceUseState` | nested type |
| `OnSiegeWeaponReloadDone` | `public delegate void OnSiegeWeaponReloadDone()` | nested type |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface SiegeWeapon](../SiegeWeapon)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
