---
title: "SiegeLadder"
description: "SiegeLadder：TaleWorlds.MountAndBlade 的 public 类，继承 SiegeWeapon、IPrimarySiegeWeapon；公开成员 70 个（方法 25、属性 12、字段 30）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/SiegeLadder.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SiegeLadder

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SiegeLadder : SiegeWeapon, IPrimarySiegeWeapon, IOrderableWithInteractionArea, IOrderable, ISpawnable`
**File:** `TaleWorlds.MountAndBlade/SiegeLadder.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

SiegeLadder 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/SiegeLadder.cs。它是一个 public 类，实现/继承 SiegeWeapon、IPrimarySiegeWeapon、IOrderableWithInteractionArea、IOrderable、ISpawnable，继承链为 SiegeLadder → SiegeWeapon → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject。public/protected 成员共 70 个：25 方法、12 属性、30 字段、3 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SiegeLadder 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 SiegeLadder → SiegeWeapon → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject。成员构成以方法为主（方法 25/70，属性 12/70），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/SiegeLadder.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `InitialWaitPosition` | `public GameEntity InitialWaitPosition` | 属性 |
| `OnWallNavMeshId` | `public int OnWallNavMeshId` | 属性 |
| `TargetCastlePosition` | `public MissionObject TargetCastlePosition` | 属性 |
| `WeaponSide` | `public FormationAI.BehaviorSide WeaponSide` | 属性 |
| `SiegeWeaponPriority` | `public float SiegeWeaponPriority` | 属性 |
| `GetSiegeEngineType` | `public override SiegeEngineType GetSiegeEngineType()` | 方法 |
| `OnInit` | `protected internal override void OnInit()` | 方法 |
| `OverTheWallNavMeshID` | `public int OverTheWallNavMeshID` | 属性 |
| `GetOrder` | `public override OrderType GetOrder(BattleSideEnum side)` | 方法 |
| `State` | `public SiegeLadder.LadderState State` | 属性 |
| `HasCompletedAction` | `public bool HasCompletedAction()` | 方法 |
| `IsDisabledForBattleSide` | `public override bool IsDisabledForBattleSide(BattleSideEnum sideEnum)` | 方法 |
| `GetDetachmentWeightAux` | `protected override float GetDetachmentWeightAux(BattleSideEnum side)` | 方法 |
| `HoldLadders` | `public bool HoldLadders` | 属性 |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | 方法 |
| `SendLadders` | `public bool SendLadders` | 属性 |
| `OnTick` | `protected internal override void OnTick(float dt)` | 方法 |
| `OnTickParallel` | `protected internal override void OnTickParallel(float dt)` | 方法 |
| `CreateAIBehaviorObject` | `public override UsableMachineAIBase CreateAIBehaviorObject()` | 方法 |
| `SetUpStateVisibility` | `public void SetUpStateVisibility(bool isVisible)` | 方法 |
| `SetAbilityOfFaces` | `public override void SetAbilityOfFaces(bool enabled)` | 方法 |
| `OnMissionReset` | `protected internal override void OnMissionReset()` | 方法 |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | 方法 |
| `GetActionTextForStandingPoint` | `public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)` | 方法 |
| `WriteToNetwork` | `public override void WriteToNetwork()` | 方法 |
| `GetTargetFlags` | `public override TargetFlags GetTargetFlags()` | 方法 |
| `GetTargetValue` | `public override float GetTargetValue(List<Vec3>weaponPos)` | 方法 |
| `GetDistanceMultiplierOfWeapon` | `protected override float GetDistanceMultiplierOfWeapon(Vec3 weaponPos)` | 方法 |
| `GetSuitableStandingPointFor` | `protected override StandingPoint GetSuitableStandingPointFor(BattleSideEnum side, Agent agent = null, List<Agent>agents = null, List<ValueTuple<Agent, float>>agentValuePairs = null)` | 方法 |
| `SetSpawnedFromSpawner` | `public void SetSpawnedFromSpawner()` | 方法 |
| `OnAfterReadFromNetwork` | `public override void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord>synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)` | 方法 |
| `AssignParametersFromSpawner` | `public void AssignParametersFromSpawner(string sideTag, string targetWallSegment, int onWallNavMeshId, float downStateRotationRadian, float upperStateRotationRadian, string barrierTagToRemove, string indestructibleMerlonsTag)` | 方法 |
| `GetNavmeshFaceIds` | `public bool GetNavmeshFaceIds(out List<int>navmeshFaceIds)` | 方法 |
| `OnFormationFrameChanged` | `public void OnFormationFrameChanged(Agent agent, bool hasFrame, WorldPosition position)` | 方法 |
| `ClimbingLimitRadian` | `public const float ClimbingLimitRadian` | 字段 |
| `ClimbingLimitDegree` | `public const float ClimbingLimitDegree` | 字段 |
| `AutomaticUseActivationRange` | `public const float AutomaticUseActivationRange` | 字段 |
| `AttackerTag` | `public string AttackerTag` | 字段 |
| `DefenderTag` | `public string DefenderTag` | 字段 |
| `downStateEntityTag` | `public string downStateEntityTag` | 字段 |
| `IdleAnimation` | `public string IdleAnimation` | 字段 |
| `_idleAnimationIndex` | `public int _idleAnimationIndex` | 字段 |
| `RaiseAnimation` | `public string RaiseAnimation` | 字段 |
| `RaiseAnimationWithoutRootBone` | `public string RaiseAnimationWithoutRootBone` | 字段 |
| `_raiseAnimationWithoutRootBoneIndex` | `public int _raiseAnimationWithoutRootBoneIndex` | 字段 |
| `PushBackAnimation` | `public string PushBackAnimation` | 字段 |
| `_pushBackAnimationIndex` | `public int _pushBackAnimationIndex` | 字段 |
| `PushBackAnimationWithoutRootBone` | `public string PushBackAnimationWithoutRootBone` | 字段 |
| `_pushBackAnimationWithoutRootBoneIndex` | `public int _pushBackAnimationWithoutRootBoneIndex` | 字段 |
| `TrembleWallHeavyAnimation` | `public string TrembleWallHeavyAnimation` | 字段 |
| `TrembleWallLightAnimation` | `public string TrembleWallLightAnimation` | 字段 |
| `TrembleGroundAnimation` | `public string TrembleGroundAnimation` | 字段 |
| `RightStandingPointTag` | `public string RightStandingPointTag` | 字段 |
| `LeftStandingPointTag` | `public string LeftStandingPointTag` | 字段 |
| `FrontStandingPointTag` | `public string FrontStandingPointTag` | 字段 |
| `PushForkItemID` | `public string PushForkItemID` | 字段 |
| `upStateEntityTag` | `public string upStateEntityTag` | 字段 |
| `BodyTag` | `public string BodyTag` | 字段 |
| `CollisionBodyTag` | `public string CollisionBodyTag` | 字段 |
| `InitialWaitPositionTag` | `public string InitialWaitPositionTag` | 字段 |
| `LadderPushTreshold` | `public float LadderPushTreshold` | 字段 |
| `LadderPushTresholdForOneAgent` | `public float LadderPushTresholdForOneAgent` | 字段 |
| `BarrierTagToRemove` | `public string BarrierTagToRemove` | 字段 |
| `IndestructibleMerlonsTag` | `public string IndestructibleMerlonsTag` | 字段 |
| `ISynchedMissionObjectReadableRecord` | `public struct SiegeLadderRecord : ISynchedMissionObjectReadableRecord` | 属性 |
| `LadderState` | `public enum LadderState` | 属性 |
| `LadderAnimationState` | `public enum LadderAnimationState` | 属性 |
| `ISynchedMissionObjectReadableRecord` | `public struct SiegeLadderRecord : ISynchedMissionObjectReadableRecord` | 嵌套类型 |
| `LadderState` | `public enum LadderState` | 嵌套类型 |
| `LadderAnimationState` | `public enum LadderAnimationState` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 SiegeWeapon](../SiegeWeapon/)
- [基类/接口 IPrimarySiegeWeapon](../IPrimarySiegeWeapon/)
- [基类/接口 IOrderableWithInteractionArea](../IOrderableWithInteractionArea/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
