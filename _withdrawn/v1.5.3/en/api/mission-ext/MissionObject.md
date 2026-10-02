---
title: "MissionObject"
description: "Auto-generated class reference for MissionObject."
---
# MissionObject

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionObject : ScriptComponentBehavior `
**Base:** ScriptComponentBehavior
**Source:** TaleWorlds.MountAndBlade/MissionObject.cs

## Overview

Auto-generated stub for `MissionObject`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### SetAbilityOfFaces
`public virtual void SetAbilityOfFaces(bool enabled)`

### SetAbilityOfConditionalFaces
`protected void SetAbilityOfConditionalFaces(bool enabled)`

### OnInit
`protected internal override void OnInit()`

### AttachDynamicNavmeshToEntity
`protected virtual void AttachDynamicNavmeshToEntity()`

### GetEntityToAttachNavMeshFaces
`protected virtual WeakGameEntity GetEntityToAttachNavMeshFaces()`

### OnCheckForProblems
`protected internal override bool OnCheckForProblems()`

### OnPreInit
`protected internal override void OnPreInit()`

### GetHashCode
`public override int GetHashCode()`

### OnMissionReset
`protected internal virtual void OnMissionReset()`

### AfterMissionStart
`public virtual void AfterMissionStart()`

### OnMissionEnded
`public virtual void OnMissionEnded()`

### OnDeploymentFinished
`public virtual void OnDeploymentFinished()`

### OnHit
`protected internal virtual bool OnHit(Agent attackerAgent,int damage,Vec3 impactPosition,Vec3 impactDirection,in MissionWeapon weapon,int affectorWeaponSlotOrMissileIndex,ScriptComponentBehavior attackerScriptComponentBehavior,out bool reportDamage,out float finalDamage,out float fireDamage,out float modifiedFireDamage)`

### SetEnabled
`public void SetEnabled(bool isParentObject = false)`

### SetEnabledAndMakeVisible
`public void SetEnabledAndMakeVisible(bool isParentObject = false,bool enableFaces = false)`

### SetDisabled
`public void SetDisabled(bool isParentObject = false)`

### SetDisabledAndMakeInvisible
`public void SetDisabledAndMakeInvisible(bool isParentObject = false,bool disableFaces = false)`

### OnRemoved
`protected override void OnRemoved(int removeReason)`

### OnEndMission
`public virtual void OnEndMission()`

### MovesEntity
`protected internal override bool MovesEntity()`

### AddStuckMissile
`public virtual void AddStuckMissile(GameEntity missileEntity)`

## See Also

- [Section index](../)
