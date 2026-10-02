---
title: "SpawnedItemEntity"
description: "SpawnedItemEntity 的自动生成类参考。"
---
# SpawnedItemEntity

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SpawnedItemEntity : UsableMissionObject `
**Base:** UsableMissionObject
**Source:** TaleWorlds.MountAndBlade/SpawnedItemEntity.cs

## 概述

`SpawnedItemEntity` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/SpawnedItemEntity.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetActionMessage
`public TextObject GetActionMessage(ItemObject weaponToReplaceWith,bool fillUp) `

### GetDescriptionMessage
`public TextObject GetDescriptionMessage(bool fillUp) `

### Initialize
`public void Initialize(MissionWeapon weapon,bool hasLifeTime,Mission.WeaponSpawnFlags spawnFlags,in Vec3 fakeSimulationVelocity,bool spawnedOnACorpse = false) `

### AfterMissionStart
`public override void AfterMissionStart() `

### OnInit
`protected internal override void OnInit() `

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement() `

### OnTick
`protected internal override void OnTick(float dt) `

### OnTickParallel2
`protected internal override void OnTickParallel2(float dt) `

### OnTickOccasionally
`protected internal override void OnTickOccasionally(float currentFrameDeltaTime) `

### OnPreInit
`protected internal override void OnPreInit() `

### OnRemoved
`protected override void OnRemoved(int removeReason) `

### AttachWeaponToWeapon
`public void AttachWeaponToWeapon(MissionWeapon attachedWeapon,ref MatrixFrame attachLocalFrame) `

### IsReadyToBeDeleted
`public bool IsReadyToBeDeleted() `

### OnUseStopped
`public override void OnUseStopped(Agent userAgent,bool isSuccessful,int preferenceIndex) `

### OnUse
`public override void OnUse(Agent userAgent,sbyte agentBoneIndex) `

### IsDisabledForAgent
`public override bool IsDisabledForAgent(Agent agent) `

### OnPhysicsCollision
`protected internal override void OnPhysicsCollision(ref PhysicsContact contact,WeakGameEntity entity0,WeakGameEntity entity1) `

### IsStuckMissile
`public bool IsStuckMissile() `

### IsQuiverAndNotEmpty
`public bool IsQuiverAndNotEmpty() `

### IsBanner
`public bool IsBanner() `

### GetInfoTextForBeingNotInteractable
`public override TextObject GetInfoTextForBeingNotInteractable(Agent userAgent) `

### StopPhysicsAndSetFrameForClient
`public void StopPhysicsAndSetFrameForClient(MatrixFrame frame,GameEntity parent) `

### ConsumeWeaponAmount
`public void ConsumeWeaponAmount(short consumedAmount) `

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity) `

### RequestDeletionOnNextTick
`public void RequestDeletionOnNextTick() `

### OnAfterReadFromNetwork
`public override void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord,ISynchedMissionObjectReadableRecord> synchedMissionObjectReadableRecord,bool allowVisibilityUpdate = true) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
