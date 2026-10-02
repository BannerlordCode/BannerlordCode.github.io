---
title: "DestructableComponent"
description: "DestructableComponent 的自动生成类参考。"
---
# DestructableComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DestructableComponent : SynchedMissionObject,IFocusable `
**Base:** SynchedMissionObject,IFocusable
**Source:** TaleWorlds.MountAndBlade/DestructableComponent.cs

## 概述

`DestructableComponent` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/DestructableComponent.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### OnRemoved
`protected override void OnRemoved(int removeReason) `

### OnInit
`protected internal override void OnInit() `

### GetOriginalState
`public WeakGameEntity GetOriginalState(WeakGameEntity parent) `

### OnEditorInit
`protected internal override void OnEditorInit() `

### OnEditorVariableChanged
`protected internal override void OnEditorVariableChanged(string variableName) `

### OnMissionReset
`protected internal override void OnMissionReset() `

### Reset
`public void Reset() `

### OnEditorTick
`protected internal override void OnEditorTick(float dt) `

### TriggerOnHit
`public void TriggerOnHit(Agent attackerAgent,int inflictedDamage,Vec3 impactPosition,Vec3 impactDirection,in MissionWeapon weapon,int affectorWeaponSlotOrMissileIndex,ScriptComponentBehavior attackerScriptComponentBehavior) `

### OnHit
`protected internal override bool OnHit(Agent attackerAgent,int inflictedDamage,Vec3 impactPosition,Vec3 impactDirection,in MissionWeapon weapon,int affectorWeaponSlotOrMissileIndex,ScriptComponentBehavior attackerScriptComponentBehavior,out bool reportDamage,out float modifiedDamage,out float fireDamage,out float modifiedFireDamage) `

### BurstHeavyHitParticles
`public void BurstHeavyHitParticles() `

### SetDestructionLevel
`public void SetDestructionLevel(int state,int forcedId,float blowMagnitude,Vec3 blowPosition,Vec3 blowDirection,bool noEffects = false) `

### MovesEntity
`protected internal override bool MovesEntity() `

### PreDestroy
`public void PreDestroy() `

### WriteToNetwork
`public override void WriteToNetwork() `

### AddStuckMissile
`public override void AddStuckMissile(GameEntity missileEntity) `

### OnCheckForProblems
`protected internal override bool OnCheckForProblems() `

### OnFocusGain
`public void OnFocusGain(Agent userAgent) `

### OnFocusLose
`public void OnFocusLose(Agent userAgent) `

### GetInfoTextForBeingNotInteractable
`public TextObject GetInfoTextForBeingNotInteractable(Agent userAgent) `

### OnAfterReadFromNetwork
`public override void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord,ISynchedMissionObjectReadableRecord> synchedMissionObjectReadableRecord,bool allowVisibilityUpdate = true) `

### GetDescriptionText
`public TextObject GetDescriptionText(WeakGameEntity gameEntity) `

### OnHitTakenAndDestroyedDelegate
`public delegate void OnHitTakenAndDestroyedDelegate(DestructableComponent target,Agent attackerAgent,in MissionWeapon weapon,ScriptComponentBehavior attackerScriptComponentBehavior,int inflictedDamage)`

### OnHitTakenWithImpactDelegate
`public delegate void OnHitTakenWithImpactDelegate(DestructableComponent target,Agent attackerAgent,Vec3 impactPosition,Vec3 impactDirection,int inflictedDamage)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
