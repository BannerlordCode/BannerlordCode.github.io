---
title: "CastleGate"
description: "CastleGate：TaleWorlds.MountAndBlade 的 public 类，继承 UsableMachine、IPointDefendable；公开成员 61 个（方法 31、属性 12、字段 15）。源文件 TaleWorlds.MountAndBlade/CastleGate.cs。"
---
# CastleGate

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class CastleGate : UsableMachine, IPointDefendable, ICastleKeyPosition, ITargetable`
**File:** `TaleWorlds.MountAndBlade/CastleGate.cs`

## 概述

CastleGate 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/CastleGate.cs。它是一个 public 类，实现/继承 UsableMachine、IPointDefendable、ICastleKeyPosition、ITargetable，继承链为 CastleGate → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior。public/protected 成员共 61 个：31 方法、12 属性、15 字段、1 构造函数、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CastleGate 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 CastleGate → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior。成员构成以方法为主（方法 31/61，属性 12/61），对外主要以操作入口暴露。继承链上的 ScriptComponentBehavior 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/CastleGate.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MiddlePosition` | `public TacticalPosition MiddlePosition` | 属性 |
| `WaitPosition` | `public TacticalPosition WaitPosition` | 属性 |
| `FocusableObjectType` | `public override FocusableObjectType FocusableObjectType` | 属性 |
| `State` | `public CastleGate.GateState State` | 属性 |
| `IsGateOpen` | `public bool IsGateOpen` | 属性 |
| `AttackerSiegeWeapon` | `public IPrimarySiegeWeapon AttackerSiegeWeapon` | 属性 |
| `IEnumerable` | `public IEnumerable<DefencePoint>DefencePoints` | 属性 |
| `CastleGate` | `public CastleGate()` | 构造函数 |
| `GetPosition` | `public Vec3 GetPosition()` | 方法 |
| `GetOrder` | `public override OrderType GetOrder(BattleSideEnum side)` | 方法 |
| `DefenseSide` | `public FormationAI.BehaviorSide DefenseSide` | 属性 |
| `MiddleFrame` | `public WorldFrame MiddleFrame` | 属性 |
| `DefenseWaitFrame` | `public WorldFrame DefenseWaitFrame` | 属性 |
| `OnInit` | `protected internal override void OnInit()` | 方法 |
| `SetUsableTeam` | `public void SetUsableTeam(Team team)` | 方法 |
| `AfterMissionStart` | `public override void AfterMissionStart()` | 方法 |
| `OnRemoved` | `protected override void OnRemoved(int removeReason)` | 方法 |
| `OnEditorInit` | `protected internal override void OnEditorInit()` | 方法 |
| `OnMissionReset` | `protected internal override void OnMissionReset()` | 方法 |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | 方法 |
| `GetActionTextForStandingPoint` | `public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)` | 方法 |
| `CreateAIBehaviorObject` | `public override UsableMachineAIBase CreateAIBehaviorObject()` | 方法 |
| `OpenDoorAndDisableGateForCivilianMission` | `public void OpenDoorAndDisableGateForCivilianMission()` | 方法 |
| `OpenDoor` | `public void OpenDoor()` | 方法 |
| `CloseDoor` | `public void CloseDoor()` | 方法 |
| `SetAutoOpenState` | `public void SetAutoOpenState(bool isEnabled)` | 方法 |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | 方法 |
| `OnTick` | `protected internal override void OnTick(float dt)` | 方法 |
| `IsAgentOnInconvenientNavmesh` | `protected override bool IsAgentOnInconvenientNavmesh(Agent agent, StandingPoint standingPoint)` | 方法 |
| `GetTargetFlags` | `public TargetFlags GetTargetFlags()` | 方法 |
| `GetTargetValue` | `public float GetTargetValue(List<Vec3>weaponPos)` | 方法 |
| `GetTargetEntity` | `public WeakGameEntity GetTargetEntity()` | 方法 |
| `GetSide` | `public BattleSideEnum GetSide()` | 方法 |
| `GetTargetGlobalVelocity` | `public Vec3 GetTargetGlobalVelocity()` | 方法 |
| `IsDestructable` | `public bool IsDestructable()` | 方法 |
| `Entity` | `public WeakGameEntity Entity()` | 方法 |
| `Vec3>ComputeGlobalPhysicsBoundingBoxMinMax` | `public ValueTuple<Vec3, Vec3>ComputeGlobalPhysicsBoundingBoxMinMax()` | 方法 |
| `CollectGameEntities` | `protected void CollectGameEntities(bool calledFromOnInit)` | 方法 |
| `OnNextDestructionState` | `protected void OnNextDestructionState()` | 方法 |
| `CollectDynamicGameEntities` | `protected void CollectDynamicGameEntities(bool calledFromOnInit)` | 方法 |
| `OnCheckForProblems` | `protected internal override bool OnCheckForProblems()` | 方法 |
| `GetTargetingOffset` | `public Vec3 GetTargetingOffset()` | 方法 |
| `OuterGateTag` | `public const string OuterGateTag` | 字段 |
| `InnerGateTag` | `public const string InnerGateTag` | 字段 |
| `OpeningAnimationName` | `public string OpeningAnimationName` | 字段 |
| `ClosingAnimationName` | `public string ClosingAnimationName` | 字段 |
| `HitAnimationName` | `public string HitAnimationName` | 字段 |
| `PlankHitAnimationName` | `public string PlankHitAnimationName` | 字段 |
| `HitMeleeAnimationName` | `public string HitMeleeAnimationName` | 字段 |
| `DestroyAnimationName` | `public string DestroyAnimationName` | 字段 |
| `NavigationMeshId` | `public int NavigationMeshId` | 字段 |
| `NavigationMeshIdToDisableOnOpen` | `public int NavigationMeshIdToDisableOnOpen` | 字段 |
| `LeftDoorBoneName` | `public string LeftDoorBoneName` | 字段 |
| `RightDoorBoneName` | `public string RightDoorBoneName` | 字段 |
| `ExtraCollisionObjectTagRight` | `public string ExtraCollisionObjectTagRight` | 字段 |
| `ExtraCollisionObjectTagLeft` | `public string ExtraCollisionObjectTagLeft` | 字段 |
| `ActivateExtraColliders` | `public bool ActivateExtraColliders` | 字段 |
| `DoorOwnership` | `public enum DoorOwnership` | 属性 |
| `GateState` | `public enum GateState` | 属性 |
| `DoorOwnership` | `public enum DoorOwnership` | 嵌套类型 |
| `GateState` | `public enum GateState` | 嵌套类型 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 UsableMachine](../UsableMachine)
- [基类/接口 IPointDefendable](../IPointDefendable)
- [基类/接口 ICastleKeyPosition](../ICastleKeyPosition)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
