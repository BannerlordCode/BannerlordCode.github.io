---
title: "SynchedMissionObject"
description: "SynchedMissionObject 的自动生成类参考。"
---
# SynchedMissionObject

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SynchedMissionObject : MissionObject `
**Base:** MissionObject
**Source:** TaleWorlds.MountAndBlade/SynchedMissionObject.cs

## 概述

`SynchedMissionObject` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/SynchedMissionObject.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### OnInit
`protected internal override void OnInit() `

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement() `

### OnTick
`protected internal override void OnTick(float dt) `

### SetLocalPositionSmoothStep
`public void SetLocalPositionSmoothStep(ref Vec3 targetPosition) `

### SetVisibleSynched
`public virtual void SetVisibleSynched(bool value,bool forceChildrenVisible = false) `

### SetPhysicsStateSynched
`public virtual void SetPhysicsStateSynched(bool value,bool setChildren = true) `

### SetDisabledSynched
`public virtual void SetDisabledSynched() `

### SetFrameSynched
`public void SetFrameSynched(ref MatrixFrame frame,bool isClient = false) `

### SetGlobalFrameSynched
`public void SetGlobalFrameSynched(ref MatrixFrame frame,bool isClient = false) `

### SetFrameSynchedOverTime
`public void SetFrameSynchedOverTime(ref MatrixFrame frame,float duration,bool isClient = false) `

### SetGlobalFrameSynchedOverTime
`public void SetGlobalFrameSynchedOverTime(ref MatrixFrame frame,float duration,bool isClient = false) `

### SetAnimationAtChannelSynched
`public void SetAnimationAtChannelSynched(string animationName,int channelNo,float animationSpeed = 1f) `
`public void SetAnimationAtChannelSynched(int animationIndex,int channelNo,float animationSpeed = 1f) `

### SetAnimationChannelParameterSynched
`public void SetAnimationChannelParameterSynched(int channelNo,float parameter) `

### SetAnimationChannelSpeedSynched
`public void SetAnimationChannelSpeedSynched(int channelNo,float speed) `

### PauseSkeletonAnimationSynched
`public void PauseSkeletonAnimationSynched() `

### ResumeSkeletonAnimationSynched
`public void ResumeSkeletonAnimationSynched() `

### BurstParticlesSynched
`public void BurstParticlesSynched(bool doChildren = true) `

### ApplyImpulseSynched
`public void ApplyImpulseSynched(Vec3 localPosition,Vec3 impulse) `

### AddBodyFlagsSynched
`public void AddBodyFlagsSynched(BodyFlags flags,bool applyToChildren = true) `

### RemoveBodyFlagsSynched
`public void RemoveBodyFlagsSynched(BodyFlags flags,bool applyToChildren = true) `

### SetTeamColors
`public void SetTeamColors(uint color,uint color2) `

### SetTeamColorsSynched
`public virtual void SetTeamColorsSynched(uint color,uint color2) `

### WriteToNetwork
`public virtual void WriteToNetwork() `

### OnAfterReadFromNetwork
`public virtual void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord,ISynchedMissionObjectReadableRecord> synchedMissionObjectReadableRecord,bool allowVisibilityUpdate = true) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
