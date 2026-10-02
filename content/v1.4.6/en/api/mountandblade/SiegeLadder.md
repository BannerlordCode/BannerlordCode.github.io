---
title: "SiegeLadder"
description: "SiegeLadder: a public class in TaleWorlds.MountAndBlade, inheriting SiegeWeapon, IPrimarySiegeWeapon; 70 exposed members (25 methods, 12 properties, 30 fields). Source: TaleWorlds.MountAndBlade/SiegeLadder.cs."
---
# SiegeLadder

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SiegeLadder : SiegeWeapon, IPrimarySiegeWeapon, IOrderableWithInteractionArea, IOrderable, ISpawnable`
**File:** `TaleWorlds.MountAndBlade/SiegeLadder.cs`

## Overview

SiegeLadder lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/SiegeLadder.cs. It is a public class, implementing/inheriting SiegeWeapon, IPrimarySiegeWeapon, IOrderableWithInteractionArea, IOrderable, ISpawnable; the inheritance chain is SiegeLadder → SiegeWeapon → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior. It exposes 70 public/protected members: 25 methods, 12 properties, 30 fields, 3 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SiegeLadder is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain SiegeLadder → SiegeWeapon → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior. The surface is method-led (methods 25/70, properties 12/70), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/SiegeLadder.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `InitialWaitPosition` | `public GameEntity InitialWaitPosition` | property |
| `OnWallNavMeshId` | `public int OnWallNavMeshId` | property |
| `TargetCastlePosition` | `public MissionObject TargetCastlePosition` | property |
| `WeaponSide` | `public FormationAI.BehaviorSide WeaponSide` | property |
| `SiegeWeaponPriority` | `public float SiegeWeaponPriority` | property |
| `GetSiegeEngineType` | `public override SiegeEngineType GetSiegeEngineType()` | method |
| `OnInit` | `protected internal override void OnInit()` | method |
| `OverTheWallNavMeshID` | `public int OverTheWallNavMeshID` | property |
| `GetOrder` | `public override OrderType GetOrder(BattleSideEnum side)` | method |
| `State` | `public SiegeLadder.LadderState State` | property |
| `HasCompletedAction` | `public bool HasCompletedAction()` | method |
| `IsDisabledForBattleSide` | `public override bool IsDisabledForBattleSide(BattleSideEnum sideEnum)` | method |
| `GetDetachmentWeightAux` | `protected override float GetDetachmentWeightAux(BattleSideEnum side)` | method |
| `HoldLadders` | `public bool HoldLadders` | property |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `SendLadders` | `public bool SendLadders` | property |
| `OnTick` | `protected internal override void OnTick(float dt)` | method |
| `OnTickParallel` | `protected internal override void OnTickParallel(float dt)` | method |
| `CreateAIBehaviorObject` | `public override UsableMachineAIBase CreateAIBehaviorObject()` | method |
| `SetUpStateVisibility` | `public void SetUpStateVisibility(bool isVisible)` | method |
| `SetAbilityOfFaces` | `public override void SetAbilityOfFaces(bool enabled)` | method |
| `OnMissionReset` | `protected internal override void OnMissionReset()` | method |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | method |
| `GetActionTextForStandingPoint` | `public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)` | method |
| `WriteToNetwork` | `public override void WriteToNetwork()` | method |
| `GetTargetFlags` | `public override TargetFlags GetTargetFlags()` | method |
| `GetTargetValue` | `public override float GetTargetValue(List<Vec3>weaponPos)` | method |
| `GetDistanceMultiplierOfWeapon` | `protected override float GetDistanceMultiplierOfWeapon(Vec3 weaponPos)` | method |
| `GetSuitableStandingPointFor` | `protected override StandingPoint GetSuitableStandingPointFor(BattleSideEnum side, Agent agent = null, List<Agent>agents = null, List<ValueTuple<Agent, float>>agentValuePairs = null)` | method |
| `SetSpawnedFromSpawner` | `public void SetSpawnedFromSpawner()` | method |
| `OnAfterReadFromNetwork` | `public override void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord>synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)` | method |
| `AssignParametersFromSpawner` | `public void AssignParametersFromSpawner(string sideTag, string targetWallSegment, int onWallNavMeshId, float downStateRotationRadian, float upperStateRotationRadian, string barrierTagToRemove, string indestructibleMerlonsTag)` | method |
| `GetNavmeshFaceIds` | `public bool GetNavmeshFaceIds(out List<int>navmeshFaceIds)` | method |
| `OnFormationFrameChanged` | `public void OnFormationFrameChanged(Agent agent, bool hasFrame, WorldPosition position)` | method |
| `ClimbingLimitRadian` | `public const float ClimbingLimitRadian` | field |
| `ClimbingLimitDegree` | `public const float ClimbingLimitDegree` | field |
| `AutomaticUseActivationRange` | `public const float AutomaticUseActivationRange` | field |
| `AttackerTag` | `public string AttackerTag` | field |
| `DefenderTag` | `public string DefenderTag` | field |
| `downStateEntityTag` | `public string downStateEntityTag` | field |
| `IdleAnimation` | `public string IdleAnimation` | field |
| `_idleAnimationIndex` | `public int _idleAnimationIndex` | field |
| `RaiseAnimation` | `public string RaiseAnimation` | field |
| `RaiseAnimationWithoutRootBone` | `public string RaiseAnimationWithoutRootBone` | field |
| `_raiseAnimationWithoutRootBoneIndex` | `public int _raiseAnimationWithoutRootBoneIndex` | field |
| `PushBackAnimation` | `public string PushBackAnimation` | field |
| `_pushBackAnimationIndex` | `public int _pushBackAnimationIndex` | field |
| `PushBackAnimationWithoutRootBone` | `public string PushBackAnimationWithoutRootBone` | field |
| `_pushBackAnimationWithoutRootBoneIndex` | `public int _pushBackAnimationWithoutRootBoneIndex` | field |
| `TrembleWallHeavyAnimation` | `public string TrembleWallHeavyAnimation` | field |
| `TrembleWallLightAnimation` | `public string TrembleWallLightAnimation` | field |
| `TrembleGroundAnimation` | `public string TrembleGroundAnimation` | field |
| `RightStandingPointTag` | `public string RightStandingPointTag` | field |
| `LeftStandingPointTag` | `public string LeftStandingPointTag` | field |
| `FrontStandingPointTag` | `public string FrontStandingPointTag` | field |
| `PushForkItemID` | `public string PushForkItemID` | field |
| `upStateEntityTag` | `public string upStateEntityTag` | field |
| `BodyTag` | `public string BodyTag` | field |
| `CollisionBodyTag` | `public string CollisionBodyTag` | field |
| `InitialWaitPositionTag` | `public string InitialWaitPositionTag` | field |
| `LadderPushTreshold` | `public float LadderPushTreshold` | field |
| `LadderPushTresholdForOneAgent` | `public float LadderPushTresholdForOneAgent` | field |
| `BarrierTagToRemove` | `public string BarrierTagToRemove` | field |
| `IndestructibleMerlonsTag` | `public string IndestructibleMerlonsTag` | field |
| `ISynchedMissionObjectReadableRecord` | `public struct SiegeLadderRecord : ISynchedMissionObjectReadableRecord` | property |
| `LadderState` | `public enum LadderState` | property |
| `LadderAnimationState` | `public enum LadderAnimationState` | property |
| `ISynchedMissionObjectReadableRecord` | `public struct SiegeLadderRecord : ISynchedMissionObjectReadableRecord` | nested type |
| `LadderState` | `public enum LadderState` | nested type |
| `LadderAnimationState` | `public enum LadderAnimationState` | nested type |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface SiegeWeapon](../SiegeWeapon)
- [base / interface IPrimarySiegeWeapon](../IPrimarySiegeWeapon)
- [base / interface IOrderableWithInteractionArea](../IOrderableWithInteractionArea)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
