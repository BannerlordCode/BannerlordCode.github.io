---
title: "SiegeTower"
description: "SiegeTower: a public class in TaleWorlds.MountAndBlade, inheriting SiegeWeapon, IPathHolder; 64 exposed members (35 methods, 14 properties, 13 fields). Source: TaleWorlds.MountAndBlade/SiegeTower.cs."
---
# SiegeTower

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SiegeTower : SiegeWeapon, IPathHolder, IPrimarySiegeWeapon, IMoveableSiegeWeapon, ISpawnable`
**File:** `TaleWorlds.MountAndBlade/SiegeTower.cs`

## Overview

SiegeTower lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/SiegeTower.cs. It is a public class, implementing/inheriting SiegeWeapon, IPathHolder, IPrimarySiegeWeapon, IMoveableSiegeWeapon, ISpawnable; the inheritance chain is SiegeTower → SiegeWeapon → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior. It exposes 64 public/protected members: 35 methods, 14 properties, 13 fields, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SiegeTower is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain SiegeTower → SiegeWeapon → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior. The surface is method-led (methods 35/64, properties 14/64), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/SiegeTower.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TargetCastlePosition` | `public MissionObject TargetCastlePosition` | property |
| `WeaponSide` | `public FormationAI.BehaviorSide WeaponSide` | property |
| `PathEntity` | `public string PathEntity` | property |
| `EditorGhostEntityMove` | `public bool EditorGhostEntityMove` | property |
| `HasCompletedAction` | `public bool HasCompletedAction()` | method |
| `SiegeWeaponPriority` | `public float SiegeWeaponPriority` | property |
| `OverTheWallNavMeshID` | `public int OverTheWallNavMeshID` | property |
| `MovementComponent` | `public SiegeWeaponMovementComponent MovementComponent` | property |
| `HoldLadders` | `public bool HoldLadders` | property |
| `SendLadders` | `public bool SendLadders` | property |
| `GetGateNavMeshId` | `public int GetGateNavMeshId()` | method |
| `List` | `public List<int>CollectGetDifficultNavmeshIDs()` | method |
| `List` | `public List<int>CollectGetDifficultNavmeshIDsForAttackers()` | method |
| `List` | `public List<int>CollectGetDifficultNavmeshIDsForDefenders()` | method |
| `HasArrivedAtTarget` | `public bool HasArrivedAtTarget` | property |
| `State` | `public SiegeTower.GateState State` | property |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | method |
| `GetActionTextForStandingPoint` | `public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)` | method |
| `WriteToNetwork` | `public override void WriteToNetwork()` | method |
| `GetOrder` | `public override OrderType GetOrder(BattleSideEnum side)` | method |
| `GetTargetFlags` | `public override TargetFlags GetTargetFlags()` | method |
| `GetTargetValue` | `public override float GetTargetValue(List<Vec3>weaponPos)` | method |
| `Disable` | `public override void Disable()` | method |
| `GetSiegeEngineType` | `public override SiegeEngineType GetSiegeEngineType()` | method |
| `CreateAIBehaviorObject` | `public override UsableMachineAIBase CreateAIBehaviorObject()` | method |
| `IsDeactivated` | `public override bool IsDeactivated` | property |
| `OnDeploymentStateChanged` | `protected internal override void OnDeploymentStateChanged(bool isDeployed)` | method |
| `AttachDynamicNavmeshToEntity` | `protected override void AttachDynamicNavmeshToEntity()` | method |
| `GetEntityToAttachNavMeshFaces` | `protected override WeakGameEntity GetEntityToAttachNavMeshFaces()` | method |
| `OnRemoved` | `protected override void OnRemoved(int removeReason)` | method |
| `SetAbilityOfFaces` | `public override void SetAbilityOfFaces(bool enabled)` | method |
| `GetDistanceMultiplierOfWeapon` | `protected override float GetDistanceMultiplierOfWeapon(Vec3 weaponPos)` | method |
| `IsAgentOnInconvenientNavmesh` | `protected override bool IsAgentOnInconvenientNavmesh(Agent agent, StandingPoint standingPoint)` | method |
| `OnInit` | `protected internal override void OnInit()` | method |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `OnTick` | `protected internal override void OnTick(float dt)` | method |
| `OnTickParallel` | `protected internal override void OnTickParallel(float dt)` | method |
| `OnMissionReset` | `protected internal override void OnMissionReset()` | method |
| `OnDestroyed` | `public void OnDestroyed(DestructableComponent destroyedComponent, Agent destroyerAgent, in MissionWeapon weapon, ScriptComponentBehavior attackerScriptComponentBehavior, int inflictedDamage)` | method |
| `HighlightPath` | `public void HighlightPath()` | method |
| `SwitchGhostEntityMovementMode` | `public void SwitchGhostEntityMovementMode(bool isGhostEnabled)` | method |
| `GetInitialFrame` | `public MatrixFrame GetInitialFrame()` | method |
| `SetSpawnedFromSpawner` | `public void SetSpawnedFromSpawner()` | method |
| `OnAfterReadFromNetwork` | `public override void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord>synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)` | method |
| `AssignParametersFromSpawner` | `public void AssignParametersFromSpawner(string pathEntityName, string targetWallSegment, string sideTag, int soilNavMeshID1, int soilNavMeshID2, int ditchNavMeshID1, int ditchNavMeshID2, int groundToSoilNavMeshID1, int groundToSoilNavMeshID2, int soilGenericNavMeshID, int groundGenericNavMeshID, Mat3 openStateRotation, string barrierTagToRemove)` | method |
| `GetNavmeshFaceIds` | `public bool GetNavmeshFaceIds(out List<int>navmeshFaceIds)` | method |
| `OnFormationFrameChanged` | `public void OnFormationFrameChanged(Agent agent, bool hasFrame, WorldPosition frame)` | method |
| `GateTag` | `public string GateTag` | field |
| `GateOpenTag` | `public string GateOpenTag` | field |
| `HandleTag` | `public string HandleTag` | field |
| `GateHandleIdleAnimation` | `public string GateHandleIdleAnimation` | field |
| `GateTrembleAnimation` | `public string GateTrembleAnimation` | field |
| `BattlementDestroyedParticle` | `public string BattlementDestroyedParticle` | field |
| `GhostEntityMove` | `public bool GhostEntityMove` | field |
| `GhostEntitySpeedMultiplier` | `public float GhostEntitySpeedMultiplier` | field |
| `WheelDiameter` | `public float WheelDiameter` | field |
| `MinSpeed` | `public float MinSpeed` | field |
| `MaxSpeed` | `public float MaxSpeed` | field |
| `NavMeshIdToDisableOnDestination` | `public int NavMeshIdToDisableOnDestination` | field |
| `BarrierTagToRemove` | `public string BarrierTagToRemove` | field |
| `ISynchedMissionObjectReadableRecord` | `public struct SiegeTowerRecord : ISynchedMissionObjectReadableRecord` | property |
| `GateState` | `public enum GateState` | property |
| `ISynchedMissionObjectReadableRecord` | `public struct SiegeTowerRecord : ISynchedMissionObjectReadableRecord` | nested type |
| `GateState` | `public enum GateState` | nested type |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface SiegeWeapon](../SiegeWeapon)
- [base / interface IPathHolder](../IPathHolder)
- [base / interface IPrimarySiegeWeapon](../IPrimarySiegeWeapon)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
