---
title: "MissionObject"
description: "MissionObject 的自动生成类参考。"
---
# MissionObject

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionObject : ScriptComponentBehavior `
**Base:** ScriptComponentBehavior
**Source:** TaleWorlds.MountAndBlade/MissionObject.cs

## 概述

`MissionObject` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/MissionObject.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### SetAbilityOfFaces
`public virtual void SetAbilityOfFaces(bool enabled) `

### SetAbilityOfConditionalFaces
`protected void SetAbilityOfConditionalFaces(bool enabled) `

### OnInit
`protected internal override void OnInit() `

### AttachDynamicNavmeshToEntity
`protected virtual void AttachDynamicNavmeshToEntity() `

### GetEntityToAttachNavMeshFaces
`protected virtual WeakGameEntity GetEntityToAttachNavMeshFaces() `

### OnCheckForProblems
`protected internal override bool OnCheckForProblems() `

### OnPreInit
`protected internal override void OnPreInit() `

### GetHashCode
`public override int GetHashCode() `

### OnMissionReset
`protected internal virtual void OnMissionReset() `

### AfterMissionStart
`public virtual void AfterMissionStart() `

### OnMissionEnded
`public virtual void OnMissionEnded() `

### OnDeploymentFinished
`public virtual void OnDeploymentFinished() `

### OnHit
`protected internal virtual bool OnHit(Agent attackerAgent,int damage,Vec3 impactPosition,Vec3 impactDirection,in MissionWeapon weapon,int affectorWeaponSlotOrMissileIndex,ScriptComponentBehavior attackerScriptComponentBehavior,out bool reportDamage,out float finalDamage,out float fireDamage,out float modifiedFireDamage) `

### SetEnabled
`public void SetEnabled(bool isParentObject = false) `

### SetEnabledAndMakeVisible
`public void SetEnabledAndMakeVisible(bool isParentObject = false,bool enableFaces = false) `

### SetDisabled
`public void SetDisabled(bool isParentObject = false) `

### SetDisabledAndMakeInvisible
`public void SetDisabledAndMakeInvisible(bool isParentObject = false,bool disableFaces = false) `

### OnRemoved
`protected override void OnRemoved(int removeReason) `

### OnEndMission
`public virtual void OnEndMission() `

### MovesEntity
`protected internal override bool MovesEntity() `

### AddStuckMissile
`public virtual void AddStuckMissile(GameEntity missileEntity) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
