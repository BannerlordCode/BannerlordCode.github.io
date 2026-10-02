---
title: "BatteringRam"
description: "BatteringRam 的自动生成类参考。"
---
# BatteringRam

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BatteringRam : SiegeWeapon,IPathHolder,IPrimarySiegeWeapon,IMoveableSiegeWeapon,ISpawnable `
**Base:** SiegeWeapon,IPathHolder,IPrimarySiegeWeapon,IMoveableSiegeWeapon,ISpawnable
**Source:** TaleWorlds.MountAndBlade/BatteringRam.cs

## 概述

`BatteringRam` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/BatteringRam.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### HasCompletedAction
`public bool HasCompletedAction() `

### Disable
`public override void Disable() `

### GetSiegeEngineType
`public override SiegeEngineType GetSiegeEngineType() `

### OnInit
`protected internal override void OnInit() `

### OnDeploymentStateChanged
`protected internal override void OnDeploymentStateChanged(bool isDeployed) `

### GetInitialFrame
`public MatrixFrame GetInitialFrame() `

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement() `

### OnTickParallel
`protected internal override void OnTickParallel(float dt) `

### OnTick
`protected internal override void OnTick(float dt) `

### CreateAIBehaviorObject
`public override UsableMachineAIBase CreateAIBehaviorObject() `

### OnMissionReset
`protected internal override void OnMissionReset() `

### WriteToNetwork
`public override void WriteToNetwork() `

### HighlightPath
`public void HighlightPath() `

### SwitchGhostEntityMovementMode
`public void SwitchGhostEntityMovementMode(bool isGhostEnabled) `

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity) `

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject) `

### GetOrder
`public override OrderType GetOrder(BattleSideEnum side) `

### GetTargetFlags
`public override TargetFlags GetTargetFlags() `

### GetTargetValue
`public override float GetTargetValue(List<Vec3> weaponPos) `

### GetDistanceMultiplierOfWeapon
`protected override float GetDistanceMultiplierOfWeapon(Vec3 weaponPos) `

### SetSpawnedFromSpawner
`public void SetSpawnedFromSpawner() `

### AssignParametersFromSpawner
`public void AssignParametersFromSpawner(string gateTag,string sideTag,int bridgeNavMeshID1,int bridgeNavMeshID2,int ditchNavMeshID1,int ditchNavMeshID2,int groundToBridgeNavMeshID1,int groundToBridgeNavMeshID2,string pathEntityName) `

### OnAfterReadFromNetwork
`public override void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord,ISynchedMissionObjectReadableRecord> synchedMissionObjectReadableRecord,bool allowVisibilityUpdate = true) `

### GetNavmeshFaceIds
`public bool GetNavmeshFaceIds(out List<int> navmeshFaceIds) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
