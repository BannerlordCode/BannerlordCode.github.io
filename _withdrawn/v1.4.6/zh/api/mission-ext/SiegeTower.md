---
title: "SiegeTower"
description: "SiegeTower：TaleWorlds.MountAndBlade 的 public 类，继承 SiegeWeapon、IPathHolder；公开成员 64 个（方法 35、属性 14、字段 13）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/SiegeTower.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SiegeTower

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SiegeTower : SiegeWeapon, IPathHolder, IPrimarySiegeWeapon, IMoveableSiegeWeapon, ISpawnable`
**File:** `TaleWorlds.MountAndBlade/SiegeTower.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

SiegeTower 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/SiegeTower.cs。它是一个 public 类，实现/继承 SiegeWeapon、IPathHolder、IPrimarySiegeWeapon、IMoveableSiegeWeapon、ISpawnable，继承链为 SiegeTower → SiegeWeapon → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject。public/protected 成员共 64 个：35 方法、14 属性、13 字段、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SiegeTower 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 SiegeTower → SiegeWeapon → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject。成员构成以方法为主（方法 35/64，属性 14/64），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/SiegeTower.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TargetCastlePosition` | `public MissionObject TargetCastlePosition` | 属性 |
| `WeaponSide` | `public FormationAI.BehaviorSide WeaponSide` | 属性 |
| `PathEntity` | `public string PathEntity` | 属性 |
| `EditorGhostEntityMove` | `public bool EditorGhostEntityMove` | 属性 |
| `HasCompletedAction` | `public bool HasCompletedAction()` | 方法 |
| `SiegeWeaponPriority` | `public float SiegeWeaponPriority` | 属性 |
| `OverTheWallNavMeshID` | `public int OverTheWallNavMeshID` | 属性 |
| `MovementComponent` | `public SiegeWeaponMovementComponent MovementComponent` | 属性 |
| `HoldLadders` | `public bool HoldLadders` | 属性 |
| `SendLadders` | `public bool SendLadders` | 属性 |
| `GetGateNavMeshId` | `public int GetGateNavMeshId()` | 方法 |
| `List` | `public List<int>CollectGetDifficultNavmeshIDs()` | 方法 |
| `List` | `public List<int>CollectGetDifficultNavmeshIDsForAttackers()` | 方法 |
| `List` | `public List<int>CollectGetDifficultNavmeshIDsForDefenders()` | 方法 |
| `HasArrivedAtTarget` | `public bool HasArrivedAtTarget` | 属性 |
| `State` | `public SiegeTower.GateState State` | 属性 |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | 方法 |
| `GetActionTextForStandingPoint` | `public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)` | 方法 |
| `WriteToNetwork` | `public override void WriteToNetwork()` | 方法 |
| `GetOrder` | `public override OrderType GetOrder(BattleSideEnum side)` | 方法 |
| `GetTargetFlags` | `public override TargetFlags GetTargetFlags()` | 方法 |
| `GetTargetValue` | `public override float GetTargetValue(List<Vec3>weaponPos)` | 方法 |
| `Disable` | `public override void Disable()` | 方法 |
| `GetSiegeEngineType` | `public override SiegeEngineType GetSiegeEngineType()` | 方法 |
| `CreateAIBehaviorObject` | `public override UsableMachineAIBase CreateAIBehaviorObject()` | 方法 |
| `IsDeactivated` | `public override bool IsDeactivated` | 属性 |
| `OnDeploymentStateChanged` | `protected internal override void OnDeploymentStateChanged(bool isDeployed)` | 方法 |
| `AttachDynamicNavmeshToEntity` | `protected override void AttachDynamicNavmeshToEntity()` | 方法 |
| `GetEntityToAttachNavMeshFaces` | `protected override WeakGameEntity GetEntityToAttachNavMeshFaces()` | 方法 |
| `OnRemoved` | `protected override void OnRemoved(int removeReason)` | 方法 |
| `SetAbilityOfFaces` | `public override void SetAbilityOfFaces(bool enabled)` | 方法 |
| `GetDistanceMultiplierOfWeapon` | `protected override float GetDistanceMultiplierOfWeapon(Vec3 weaponPos)` | 方法 |
| `IsAgentOnInconvenientNavmesh` | `protected override bool IsAgentOnInconvenientNavmesh(Agent agent, StandingPoint standingPoint)` | 方法 |
| `OnInit` | `protected internal override void OnInit()` | 方法 |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | 方法 |
| `OnTick` | `protected internal override void OnTick(float dt)` | 方法 |
| `OnTickParallel` | `protected internal override void OnTickParallel(float dt)` | 方法 |
| `OnMissionReset` | `protected internal override void OnMissionReset()` | 方法 |
| `OnDestroyed` | `public void OnDestroyed(DestructableComponent destroyedComponent, Agent destroyerAgent, in MissionWeapon weapon, ScriptComponentBehavior attackerScriptComponentBehavior, int inflictedDamage)` | 方法 |
| `HighlightPath` | `public void HighlightPath()` | 方法 |
| `SwitchGhostEntityMovementMode` | `public void SwitchGhostEntityMovementMode(bool isGhostEnabled)` | 方法 |
| `GetInitialFrame` | `public MatrixFrame GetInitialFrame()` | 方法 |
| `SetSpawnedFromSpawner` | `public void SetSpawnedFromSpawner()` | 方法 |
| `OnAfterReadFromNetwork` | `public override void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord>synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)` | 方法 |
| `AssignParametersFromSpawner` | `public void AssignParametersFromSpawner(string pathEntityName, string targetWallSegment, string sideTag, int soilNavMeshID1, int soilNavMeshID2, int ditchNavMeshID1, int ditchNavMeshID2, int groundToSoilNavMeshID1, int groundToSoilNavMeshID2, int soilGenericNavMeshID, int groundGenericNavMeshID, Mat3 openStateRotation, string barrierTagToRemove)` | 方法 |
| `GetNavmeshFaceIds` | `public bool GetNavmeshFaceIds(out List<int>navmeshFaceIds)` | 方法 |
| `OnFormationFrameChanged` | `public void OnFormationFrameChanged(Agent agent, bool hasFrame, WorldPosition frame)` | 方法 |
| `GateTag` | `public string GateTag` | 字段 |
| `GateOpenTag` | `public string GateOpenTag` | 字段 |
| `HandleTag` | `public string HandleTag` | 字段 |
| `GateHandleIdleAnimation` | `public string GateHandleIdleAnimation` | 字段 |
| `GateTrembleAnimation` | `public string GateTrembleAnimation` | 字段 |
| `BattlementDestroyedParticle` | `public string BattlementDestroyedParticle` | 字段 |
| `GhostEntityMove` | `public bool GhostEntityMove` | 字段 |
| `GhostEntitySpeedMultiplier` | `public float GhostEntitySpeedMultiplier` | 字段 |
| `WheelDiameter` | `public float WheelDiameter` | 字段 |
| `MinSpeed` | `public float MinSpeed` | 字段 |
| `MaxSpeed` | `public float MaxSpeed` | 字段 |
| `NavMeshIdToDisableOnDestination` | `public int NavMeshIdToDisableOnDestination` | 字段 |
| `BarrierTagToRemove` | `public string BarrierTagToRemove` | 字段 |
| `ISynchedMissionObjectReadableRecord` | `public struct SiegeTowerRecord : ISynchedMissionObjectReadableRecord` | 属性 |
| `GateState` | `public enum GateState` | 属性 |
| `ISynchedMissionObjectReadableRecord` | `public struct SiegeTowerRecord : ISynchedMissionObjectReadableRecord` | 嵌套类型 |
| `GateState` | `public enum GateState` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 SiegeWeapon](../SiegeWeapon/)
- [基类/接口 IPathHolder](../IPathHolder/)
- [基类/接口 IPrimarySiegeWeapon](../IPrimarySiegeWeapon/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
