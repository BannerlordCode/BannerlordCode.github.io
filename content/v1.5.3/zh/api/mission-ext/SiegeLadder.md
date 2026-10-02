---
title: "SiegeLadder"
description: "SiegeLadder 的自动生成类参考。"
---
# SiegeLadder

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeLadder : SiegeWeapon,IPrimarySiegeWeapon,IOrderableWithInteractionArea,IOrderable,ISpawnable `
**Base:** SiegeWeapon,IPrimarySiegeWeapon,IOrderableWithInteractionArea,IOrderable,ISpawnable
**Source:** TaleWorlds.MountAndBlade/SiegeLadder.cs

## 概述

`SiegeLadder` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/SiegeLadder.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetSiegeEngineType
`public override SiegeEngineType GetSiegeEngineType() `

### OnInit
`protected internal override void OnInit() `

### GetOrder
`public override OrderType GetOrder(BattleSideEnum side) `

### HasCompletedAction
`public bool HasCompletedAction() `

### IsDisabledForBattleSide
`public override bool IsDisabledForBattleSide(BattleSideEnum sideEnum) `

### GetDetachmentWeightAux
`protected override float GetDetachmentWeightAux(BattleSideEnum side) `

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement() `

### OnTick
`protected internal override void OnTick(float dt) `

### OnTickParallel
`protected internal override void OnTickParallel(float dt) `

### CreateAIBehaviorObject
`public override UsableMachineAIBase CreateAIBehaviorObject() `

### SetUpStateVisibility
`public void SetUpStateVisibility(bool isVisible) `

### SetAbilityOfFaces
`public override void SetAbilityOfFaces(bool enabled) `

### OnMissionReset
`protected internal override void OnMissionReset() `

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity) `

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject) `

### WriteToNetwork
`public override void WriteToNetwork() `

### GetTargetFlags
`public override TargetFlags GetTargetFlags() `

### GetTargetValue
`public override float GetTargetValue(List<Vec3> weaponPos) `

### GetDistanceMultiplierOfWeapon
`protected override float GetDistanceMultiplierOfWeapon(Vec3 weaponPos) `

### GetSuitableStandingPointFor
`protected override StandingPoint GetSuitableStandingPointFor(BattleSideEnum side,Agent agent = null,List<Agent> agents = null,List<ValueTuple<Agent,float>> agentValuePairs = null) `

### SetSpawnedFromSpawner
`public void SetSpawnedFromSpawner() `

### OnAfterReadFromNetwork
`public override void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord,ISynchedMissionObjectReadableRecord> synchedMissionObjectReadableRecord,bool allowVisibilityUpdate = true) `

### AssignParametersFromSpawner
`public void AssignParametersFromSpawner(string sideTag,string targetWallSegment,int onWallNavMeshId,float downStateRotationRadian,float upperStateRotationRadian,string barrierTagToRemove,string indestructibleMerlonsTag) `

### GetNavmeshFaceIds
`public bool GetNavmeshFaceIds(out List<int> navmeshFaceIds) `

### OnFormationFrameChanged
`public void OnFormationFrameChanged(Agent agent,bool hasFrame,WorldPosition position) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
