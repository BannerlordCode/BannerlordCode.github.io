---
title: "CastleGate"
description: "CastleGate: a public class in TaleWorlds.MountAndBlade, inheriting UsableMachine, IPointDefendable; 61 exposed members (31 methods, 12 properties, 15 fields). Source: TaleWorlds.MountAndBlade/CastleGate.cs."
---
# CastleGate

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class CastleGate : UsableMachine, IPointDefendable, ICastleKeyPosition, ITargetable`
**File:** `TaleWorlds.MountAndBlade/CastleGate.cs`

## Overview

CastleGate lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/CastleGate.cs. It is a public class, implementing/inheriting UsableMachine, IPointDefendable, ICastleKeyPosition, ITargetable; the inheritance chain is CastleGate → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior. It exposes 61 public/protected members: 31 methods, 12 properties, 15 fields, 1 constructors, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CastleGate is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain CastleGate → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior. The surface is method-led (methods 31/61, properties 12/61), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/CastleGate.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MiddlePosition` | `public TacticalPosition MiddlePosition` | property |
| `WaitPosition` | `public TacticalPosition WaitPosition` | property |
| `FocusableObjectType` | `public override FocusableObjectType FocusableObjectType` | property |
| `State` | `public CastleGate.GateState State` | property |
| `IsGateOpen` | `public bool IsGateOpen` | property |
| `AttackerSiegeWeapon` | `public IPrimarySiegeWeapon AttackerSiegeWeapon` | property |
| `IEnumerable` | `public IEnumerable<DefencePoint>DefencePoints` | property |
| `CastleGate` | `public CastleGate()` | constructor |
| `GetPosition` | `public Vec3 GetPosition()` | method |
| `GetOrder` | `public override OrderType GetOrder(BattleSideEnum side)` | method |
| `DefenseSide` | `public FormationAI.BehaviorSide DefenseSide` | property |
| `MiddleFrame` | `public WorldFrame MiddleFrame` | property |
| `DefenseWaitFrame` | `public WorldFrame DefenseWaitFrame` | property |
| `OnInit` | `protected internal override void OnInit()` | method |
| `SetUsableTeam` | `public void SetUsableTeam(Team team)` | method |
| `AfterMissionStart` | `public override void AfterMissionStart()` | method |
| `OnRemoved` | `protected override void OnRemoved(int removeReason)` | method |
| `OnEditorInit` | `protected internal override void OnEditorInit()` | method |
| `OnMissionReset` | `protected internal override void OnMissionReset()` | method |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | method |
| `GetActionTextForStandingPoint` | `public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)` | method |
| `CreateAIBehaviorObject` | `public override UsableMachineAIBase CreateAIBehaviorObject()` | method |
| `OpenDoorAndDisableGateForCivilianMission` | `public void OpenDoorAndDisableGateForCivilianMission()` | method |
| `OpenDoor` | `public void OpenDoor()` | method |
| `CloseDoor` | `public void CloseDoor()` | method |
| `SetAutoOpenState` | `public void SetAutoOpenState(bool isEnabled)` | method |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `OnTick` | `protected internal override void OnTick(float dt)` | method |
| `IsAgentOnInconvenientNavmesh` | `protected override bool IsAgentOnInconvenientNavmesh(Agent agent, StandingPoint standingPoint)` | method |
| `GetTargetFlags` | `public TargetFlags GetTargetFlags()` | method |
| `GetTargetValue` | `public float GetTargetValue(List<Vec3>weaponPos)` | method |
| `GetTargetEntity` | `public WeakGameEntity GetTargetEntity()` | method |
| `GetSide` | `public BattleSideEnum GetSide()` | method |
| `GetTargetGlobalVelocity` | `public Vec3 GetTargetGlobalVelocity()` | method |
| `IsDestructable` | `public bool IsDestructable()` | method |
| `Entity` | `public WeakGameEntity Entity()` | method |
| `Vec3>ComputeGlobalPhysicsBoundingBoxMinMax` | `public ValueTuple<Vec3, Vec3>ComputeGlobalPhysicsBoundingBoxMinMax()` | method |
| `CollectGameEntities` | `protected void CollectGameEntities(bool calledFromOnInit)` | method |
| `OnNextDestructionState` | `protected void OnNextDestructionState()` | method |
| `CollectDynamicGameEntities` | `protected void CollectDynamicGameEntities(bool calledFromOnInit)` | method |
| `OnCheckForProblems` | `protected internal override bool OnCheckForProblems()` | method |
| `GetTargetingOffset` | `public Vec3 GetTargetingOffset()` | method |
| `OuterGateTag` | `public const string OuterGateTag` | field |
| `InnerGateTag` | `public const string InnerGateTag` | field |
| `OpeningAnimationName` | `public string OpeningAnimationName` | field |
| `ClosingAnimationName` | `public string ClosingAnimationName` | field |
| `HitAnimationName` | `public string HitAnimationName` | field |
| `PlankHitAnimationName` | `public string PlankHitAnimationName` | field |
| `HitMeleeAnimationName` | `public string HitMeleeAnimationName` | field |
| `DestroyAnimationName` | `public string DestroyAnimationName` | field |
| `NavigationMeshId` | `public int NavigationMeshId` | field |
| `NavigationMeshIdToDisableOnOpen` | `public int NavigationMeshIdToDisableOnOpen` | field |
| `LeftDoorBoneName` | `public string LeftDoorBoneName` | field |
| `RightDoorBoneName` | `public string RightDoorBoneName` | field |
| `ExtraCollisionObjectTagRight` | `public string ExtraCollisionObjectTagRight` | field |
| `ExtraCollisionObjectTagLeft` | `public string ExtraCollisionObjectTagLeft` | field |
| `ActivateExtraColliders` | `public bool ActivateExtraColliders` | field |
| `DoorOwnership` | `public enum DoorOwnership` | property |
| `GateState` | `public enum GateState` | property |
| `DoorOwnership` | `public enum DoorOwnership` | nested type |
| `GateState` | `public enum GateState` | nested type |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface UsableMachine](../UsableMachine)
- [base / interface IPointDefendable](../IPointDefendable)
- [base / interface ICastleKeyPosition](../ICastleKeyPosition)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
