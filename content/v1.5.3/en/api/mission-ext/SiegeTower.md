---
title: "SiegeTower"
description: "Auto-generated class reference for SiegeTower."
---
# SiegeTower

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeTower : SiegeWeapon,IPathHolder,IPrimarySiegeWeapon,IMoveableSiegeWeapon,ISpawnable `
**Base:** SiegeWeapon, IPathHolder, IPrimarySiegeWeapon, IMoveableSiegeWeapon, ISpawnable
**Source:** TaleWorlds.MountAndBlade/SiegeTower.cs

## Overview

Auto-generated stub for `SiegeTower`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### HasCompletedAction
`public bool HasCompletedAction()`

### GetGateNavMeshId
`public int GetGateNavMeshId()`

### CollectGetDifficultNavmeshIDs
`public List<int> CollectGetDifficultNavmeshIDs()`

### CollectGetDifficultNavmeshIDsForAttackers
`public List<int> CollectGetDifficultNavmeshIDsForAttackers()`

### CollectGetDifficultNavmeshIDsForDefenders
`public List<int> CollectGetDifficultNavmeshIDsForDefenders()`

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

### WriteToNetwork
`public override void WriteToNetwork()`

### GetOrder
`public override OrderType GetOrder(BattleSideEnum side)`

### GetTargetFlags
`public override TargetFlags GetTargetFlags()`

### GetTargetValue
`public override float GetTargetValue(List<Vec3> weaponPos)`

### Disable
`public override void Disable()`

### GetSiegeEngineType
`public override SiegeEngineType GetSiegeEngineType()`

### CreateAIBehaviorObject
`public override UsableMachineAIBase CreateAIBehaviorObject()`

### OnDeploymentStateChanged
`protected internal override void OnDeploymentStateChanged(bool isDeployed)`

### AttachDynamicNavmeshToEntity
`protected override void AttachDynamicNavmeshToEntity()`

### GetEntityToAttachNavMeshFaces
`protected override WeakGameEntity GetEntityToAttachNavMeshFaces()`

### OnRemoved
`protected override void OnRemoved(int removeReason)`

### SetAbilityOfFaces
`public override void SetAbilityOfFaces(bool enabled)`

### GetDistanceMultiplierOfWeapon
`protected override float GetDistanceMultiplierOfWeapon(Vec3 weaponPos)`

### IsAgentOnInconvenientNavmesh
`protected override bool IsAgentOnInconvenientNavmesh(Agent agent,StandingPoint standingPoint)`

### OnInit
`protected internal override void OnInit()`

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

### OnTick
`protected internal override void OnTick(float dt)`

### OnTickParallel
`protected internal override void OnTickParallel(float dt)`

### OnMissionReset
`protected internal override void OnMissionReset()`

### OnDestroyed
`public void OnDestroyed(DestructableComponent destroyedComponent,Agent destroyerAgent,in MissionWeapon weapon,ScriptComponentBehavior attackerScriptComponentBehavior,int inflictedDamage)`

### HighlightPath
`public void HighlightPath()`

### SwitchGhostEntityMovementMode
`public void SwitchGhostEntityMovementMode(bool isGhostEnabled)`

### GetInitialFrame
`public MatrixFrame GetInitialFrame()`

### SetSpawnedFromSpawner
`public void SetSpawnedFromSpawner()`

### OnAfterReadFromNetwork
`public override void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord,ISynchedMissionObjectReadableRecord> synchedMissionObjectReadableRecord,bool allowVisibilityUpdate = true)`

### AssignParametersFromSpawner
`public void AssignParametersFromSpawner(string pathEntityName,string targetWallSegment,string sideTag,int soilNavMeshID1,int soilNavMeshID2,int ditchNavMeshID1,int ditchNavMeshID2,int groundToSoilNavMeshID1,int groundToSoilNavMeshID2,int soilGenericNavMeshID,int groundGenericNavMeshID,Mat3 openStateRotation,string barrierTagToRemove)`

### GetNavmeshFaceIds
`public bool GetNavmeshFaceIds(out List<int> navmeshFaceIds)`

### OnFormationFrameChanged
`public void OnFormationFrameChanged(Agent agent,bool hasFrame,WorldPosition frame)`

## See Also

- [Section index](../)
