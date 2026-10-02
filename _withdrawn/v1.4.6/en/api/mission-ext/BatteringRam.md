---
title: "BatteringRam"
description: "BatteringRam: a public class in TaleWorlds.MountAndBlade, inheriting SiegeWeapon, IPathHolder; 49 exposed members (24 methods, 14 properties, 9 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/BatteringRam.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BatteringRam

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BatteringRam : SiegeWeapon, IPathHolder, IPrimarySiegeWeapon, IMoveableSiegeWeapon, ISpawnable`
**File:** `TaleWorlds.MountAndBlade/BatteringRam.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

BatteringRam lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/BatteringRam.cs. It is a public class, implementing/inheriting SiegeWeapon, IPathHolder, IPrimarySiegeWeapon, IMoveableSiegeWeapon, ISpawnable; the inheritance chain is BatteringRam → SiegeWeapon → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. It exposes 49 public/protected members: 24 methods, 14 properties, 9 fields, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BatteringRam lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain BatteringRam → SiegeWeapon → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 24/49, properties 14/49), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/BatteringRam.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MovementComponent` | `public SiegeWeaponMovementComponent MovementComponent` | property |
| `WeaponSide` | `public FormationAI.BehaviorSide WeaponSide` | property |
| `PathEntity` | `public string PathEntity` | property |
| `EditorGhostEntityMove` | `public bool EditorGhostEntityMove` | property |
| `State` | `public BatteringRam.RamState State` | property |
| `TargetCastlePosition` | `public MissionObject TargetCastlePosition` | property |
| `HasCompletedAction` | `public bool HasCompletedAction()` | method |
| `SiegeWeaponPriority` | `public float SiegeWeaponPriority` | property |
| `OverTheWallNavMeshID` | `public int OverTheWallNavMeshID` | property |
| `HoldLadders` | `public bool HoldLadders` | property |
| `SendLadders` | `public bool SendLadders` | property |
| `HasArrivedAtTarget` | `public bool HasArrivedAtTarget` | property |
| `Disable` | `public override void Disable()` | method |
| `GetSiegeEngineType` | `public override SiegeEngineType GetSiegeEngineType()` | method |
| `OnInit` | `protected internal override void OnInit()` | method |
| `OnDeploymentStateChanged` | `protected internal override void OnDeploymentStateChanged(bool isDeployed)` | method |
| `GetInitialFrame` | `public MatrixFrame GetInitialFrame()` | method |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `OnTickParallel` | `protected internal override void OnTickParallel(float dt)` | method |
| `OnTick` | `protected internal override void OnTick(float dt)` | method |
| `CreateAIBehaviorObject` | `public override UsableMachineAIBase CreateAIBehaviorObject()` | method |
| `OnMissionReset` | `protected internal override void OnMissionReset()` | method |
| `WriteToNetwork` | `public override void WriteToNetwork()` | method |
| `IsDeactivated` | `public override bool IsDeactivated` | property |
| `HighlightPath` | `public void HighlightPath()` | method |
| `SwitchGhostEntityMovementMode` | `public void SwitchGhostEntityMovementMode(bool isGhostEnabled)` | method |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | method |
| `GetActionTextForStandingPoint` | `public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)` | method |
| `GetOrder` | `public override OrderType GetOrder(BattleSideEnum side)` | method |
| `GetTargetFlags` | `public override TargetFlags GetTargetFlags()` | method |
| `GetTargetValue` | `public override float GetTargetValue(List<Vec3>weaponPos)` | method |
| `GetDistanceMultiplierOfWeapon` | `protected override float GetDistanceMultiplierOfWeapon(Vec3 weaponPos)` | method |
| `SetSpawnedFromSpawner` | `public void SetSpawnedFromSpawner()` | method |
| `AssignParametersFromSpawner` | `public void AssignParametersFromSpawner(string gateTag, string sideTag, int bridgeNavMeshID1, int bridgeNavMeshID2, int ditchNavMeshID1, int ditchNavMeshID2, int groundToBridgeNavMeshID1, int groundToBridgeNavMeshID2, string pathEntityName)` | method |
| `OnAfterReadFromNetwork` | `public override void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord>synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)` | method |
| `GetNavmeshFaceIds` | `public bool GetNavmeshFaceIds(out List<int>navmeshFaceIds)` | method |
| `GhostEntityMove` | `public bool GhostEntityMove` | field |
| `GhostEntitySpeedMultiplier` | `public float GhostEntitySpeedMultiplier` | field |
| `WheelDiameter` | `public float WheelDiameter` | field |
| `GateNavMeshId` | `public int GateNavMeshId` | field |
| `DisabledNavMeshID` | `public int DisabledNavMeshID` | field |
| `NavMeshIdToDisableOnDestination` | `public int NavMeshIdToDisableOnDestination` | field |
| `MinSpeed` | `public float MinSpeed` | field |
| `MaxSpeed` | `public float MaxSpeed` | field |
| `DamageMultiplier` | `public float DamageMultiplier` | field |
| `ISynchedMissionObjectReadableRecord` | `public struct BatteringRamRecord : ISynchedMissionObjectReadableRecord` | property |
| `RamState` | `public enum RamState` | property |
| `ISynchedMissionObjectReadableRecord` | `public struct BatteringRamRecord : ISynchedMissionObjectReadableRecord` | nested type |
| `RamState` | `public enum RamState` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface SiegeWeapon](../SiegeWeapon/)
- [base / interface IPathHolder](../IPathHolder/)
- [base / interface IPrimarySiegeWeapon](../IPrimarySiegeWeapon/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
