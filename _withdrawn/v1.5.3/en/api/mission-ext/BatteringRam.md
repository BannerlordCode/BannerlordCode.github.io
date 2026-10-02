---
title: "BatteringRam"
description: "Auto-generated class reference for BatteringRam."
---
# BatteringRam

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BatteringRam : SiegeWeapon,IPathHolder,IPrimarySiegeWeapon,IMoveableSiegeWeapon,ISpawnable `
**Base:** SiegeWeapon, IPathHolder, IPrimarySiegeWeapon, IMoveableSiegeWeapon, ISpawnable
**Source:** TaleWorlds.MountAndBlade/BatteringRam.cs

## Overview

Auto-generated stub for `BatteringRam`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### HasCompletedAction
`public bool HasCompletedAction()`

### Disable
`public override void Disable()`

### GetSiegeEngineType
`public override SiegeEngineType GetSiegeEngineType()`

### OnInit
`protected internal override void OnInit()`

### OnDeploymentStateChanged
`protected internal override void OnDeploymentStateChanged(bool isDeployed)`

### GetInitialFrame
`public MatrixFrame GetInitialFrame()`

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

### OnTickParallel
`protected internal override void OnTickParallel(float dt)`

### OnTick
`protected internal override void OnTick(float dt)`

### CreateAIBehaviorObject
`public override UsableMachineAIBase CreateAIBehaviorObject()`

### OnMissionReset
`protected internal override void OnMissionReset()`

### WriteToNetwork
`public override void WriteToNetwork()`

### HighlightPath
`public void HighlightPath()`

### SwitchGhostEntityMovementMode
`public void SwitchGhostEntityMovementMode(bool isGhostEnabled)`

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

### GetOrder
`public override OrderType GetOrder(BattleSideEnum side)`

### GetTargetFlags
`public override TargetFlags GetTargetFlags()`

### GetTargetValue
`public override float GetTargetValue(List<Vec3> weaponPos)`

### GetDistanceMultiplierOfWeapon
`protected override float GetDistanceMultiplierOfWeapon(Vec3 weaponPos)`

### SetSpawnedFromSpawner
`public void SetSpawnedFromSpawner()`

### AssignParametersFromSpawner
`public void AssignParametersFromSpawner(string gateTag,string sideTag,int bridgeNavMeshID1,int bridgeNavMeshID2,int ditchNavMeshID1,int ditchNavMeshID2,int groundToBridgeNavMeshID1,int groundToBridgeNavMeshID2,string pathEntityName)`

### OnAfterReadFromNetwork
`public override void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord,ISynchedMissionObjectReadableRecord> synchedMissionObjectReadableRecord,bool allowVisibilityUpdate = true)`

### GetNavmeshFaceIds
`public bool GetNavmeshFaceIds(out List<int> navmeshFaceIds)`

## See Also

- [Section index](../)
