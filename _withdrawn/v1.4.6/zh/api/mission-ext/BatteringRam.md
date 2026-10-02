---
title: "BatteringRam"
description: "BatteringRam：TaleWorlds.MountAndBlade 的 public 类，继承 SiegeWeapon、IPathHolder；公开成员 49 个（方法 24、属性 14、字段 9）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/BatteringRam.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BatteringRam

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BatteringRam : SiegeWeapon, IPathHolder, IPrimarySiegeWeapon, IMoveableSiegeWeapon, ISpawnable`
**File:** `TaleWorlds.MountAndBlade/BatteringRam.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

BatteringRam 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/BatteringRam.cs。它是一个 public 类，实现/继承 SiegeWeapon、IPathHolder、IPrimarySiegeWeapon、IMoveableSiegeWeapon、ISpawnable，继承链为 BatteringRam → SiegeWeapon → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject。public/protected 成员共 49 个：24 方法、14 属性、9 字段、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BatteringRam 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 BatteringRam → SiegeWeapon → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject。成员构成以方法为主（方法 24/49，属性 14/49），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/BatteringRam.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MovementComponent` | `public SiegeWeaponMovementComponent MovementComponent` | 属性 |
| `WeaponSide` | `public FormationAI.BehaviorSide WeaponSide` | 属性 |
| `PathEntity` | `public string PathEntity` | 属性 |
| `EditorGhostEntityMove` | `public bool EditorGhostEntityMove` | 属性 |
| `State` | `public BatteringRam.RamState State` | 属性 |
| `TargetCastlePosition` | `public MissionObject TargetCastlePosition` | 属性 |
| `HasCompletedAction` | `public bool HasCompletedAction()` | 方法 |
| `SiegeWeaponPriority` | `public float SiegeWeaponPriority` | 属性 |
| `OverTheWallNavMeshID` | `public int OverTheWallNavMeshID` | 属性 |
| `HoldLadders` | `public bool HoldLadders` | 属性 |
| `SendLadders` | `public bool SendLadders` | 属性 |
| `HasArrivedAtTarget` | `public bool HasArrivedAtTarget` | 属性 |
| `Disable` | `public override void Disable()` | 方法 |
| `GetSiegeEngineType` | `public override SiegeEngineType GetSiegeEngineType()` | 方法 |
| `OnInit` | `protected internal override void OnInit()` | 方法 |
| `OnDeploymentStateChanged` | `protected internal override void OnDeploymentStateChanged(bool isDeployed)` | 方法 |
| `GetInitialFrame` | `public MatrixFrame GetInitialFrame()` | 方法 |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | 方法 |
| `OnTickParallel` | `protected internal override void OnTickParallel(float dt)` | 方法 |
| `OnTick` | `protected internal override void OnTick(float dt)` | 方法 |
| `CreateAIBehaviorObject` | `public override UsableMachineAIBase CreateAIBehaviorObject()` | 方法 |
| `OnMissionReset` | `protected internal override void OnMissionReset()` | 方法 |
| `WriteToNetwork` | `public override void WriteToNetwork()` | 方法 |
| `IsDeactivated` | `public override bool IsDeactivated` | 属性 |
| `HighlightPath` | `public void HighlightPath()` | 方法 |
| `SwitchGhostEntityMovementMode` | `public void SwitchGhostEntityMovementMode(bool isGhostEnabled)` | 方法 |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | 方法 |
| `GetActionTextForStandingPoint` | `public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)` | 方法 |
| `GetOrder` | `public override OrderType GetOrder(BattleSideEnum side)` | 方法 |
| `GetTargetFlags` | `public override TargetFlags GetTargetFlags()` | 方法 |
| `GetTargetValue` | `public override float GetTargetValue(List<Vec3>weaponPos)` | 方法 |
| `GetDistanceMultiplierOfWeapon` | `protected override float GetDistanceMultiplierOfWeapon(Vec3 weaponPos)` | 方法 |
| `SetSpawnedFromSpawner` | `public void SetSpawnedFromSpawner()` | 方法 |
| `AssignParametersFromSpawner` | `public void AssignParametersFromSpawner(string gateTag, string sideTag, int bridgeNavMeshID1, int bridgeNavMeshID2, int ditchNavMeshID1, int ditchNavMeshID2, int groundToBridgeNavMeshID1, int groundToBridgeNavMeshID2, string pathEntityName)` | 方法 |
| `OnAfterReadFromNetwork` | `public override void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord>synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)` | 方法 |
| `GetNavmeshFaceIds` | `public bool GetNavmeshFaceIds(out List<int>navmeshFaceIds)` | 方法 |
| `GhostEntityMove` | `public bool GhostEntityMove` | 字段 |
| `GhostEntitySpeedMultiplier` | `public float GhostEntitySpeedMultiplier` | 字段 |
| `WheelDiameter` | `public float WheelDiameter` | 字段 |
| `GateNavMeshId` | `public int GateNavMeshId` | 字段 |
| `DisabledNavMeshID` | `public int DisabledNavMeshID` | 字段 |
| `NavMeshIdToDisableOnDestination` | `public int NavMeshIdToDisableOnDestination` | 字段 |
| `MinSpeed` | `public float MinSpeed` | 字段 |
| `MaxSpeed` | `public float MaxSpeed` | 字段 |
| `DamageMultiplier` | `public float DamageMultiplier` | 字段 |
| `ISynchedMissionObjectReadableRecord` | `public struct BatteringRamRecord : ISynchedMissionObjectReadableRecord` | 属性 |
| `RamState` | `public enum RamState` | 属性 |
| `ISynchedMissionObjectReadableRecord` | `public struct BatteringRamRecord : ISynchedMissionObjectReadableRecord` | 嵌套类型 |
| `RamState` | `public enum RamState` | 嵌套类型 |

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
