---
title: "SynchedMissionObject"
description: "Auto-generated class reference for SynchedMissionObject."
---
# SynchedMissionObject

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SynchedMissionObject : MissionObject `
**Base:** MissionObject
**Source:** TaleWorlds.MountAndBlade/SynchedMissionObject.cs

## Overview

Auto-generated stub for `SynchedMissionObject`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### OnInit
`protected internal override void OnInit()`

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

### OnTick
`protected internal override void OnTick(float dt)`

### SetLocalPositionSmoothStep
`public void SetLocalPositionSmoothStep(ref Vec3 targetPosition)`

### SetVisibleSynched
`public virtual void SetVisibleSynched(bool value,bool forceChildrenVisible = false)`

### SetPhysicsStateSynched
`public virtual void SetPhysicsStateSynched(bool value,bool setChildren = true)`

### SetDisabledSynched
`public virtual void SetDisabledSynched()`

### SetFrameSynched
`public void SetFrameSynched(ref MatrixFrame frame,bool isClient = false)`

### SetGlobalFrameSynched
`public void SetGlobalFrameSynched(ref MatrixFrame frame,bool isClient = false)`

### SetFrameSynchedOverTime
`public void SetFrameSynchedOverTime(ref MatrixFrame frame,float duration,bool isClient = false)`

### SetGlobalFrameSynchedOverTime
`public void SetGlobalFrameSynchedOverTime(ref MatrixFrame frame,float duration,bool isClient = false)`

### SetAnimationAtChannelSynched
`public void SetAnimationAtChannelSynched(string animationName,int channelNo,float animationSpeed = 1f)`

### SetAnimationChannelParameterSynched
`public void SetAnimationChannelParameterSynched(int channelNo,float parameter)`

### SetAnimationChannelSpeedSynched
`public void SetAnimationChannelSpeedSynched(int channelNo,float speed)`

### PauseSkeletonAnimationSynched
`public void PauseSkeletonAnimationSynched()`

### ResumeSkeletonAnimationSynched
`public void ResumeSkeletonAnimationSynched()`

### BurstParticlesSynched
`public void BurstParticlesSynched(bool doChildren = true)`

### ApplyImpulseSynched
`public void ApplyImpulseSynched(Vec3 localPosition,Vec3 impulse)`

### AddBodyFlagsSynched
`public void AddBodyFlagsSynched(BodyFlags flags,bool applyToChildren = true)`

### RemoveBodyFlagsSynched
`public void RemoveBodyFlagsSynched(BodyFlags flags,bool applyToChildren = true)`

### SetTeamColors
`public void SetTeamColors(uint color,uint color2)`

### SetTeamColorsSynched
`public virtual void SetTeamColorsSynched(uint color,uint color2)`

### WriteToNetwork
`public virtual void WriteToNetwork()`

### OnAfterReadFromNetwork
`public virtual void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord,ISynchedMissionObjectReadableRecord> synchedMissionObjectReadableRecord,bool allowVisibilityUpdate = true)`

## See Also

- [Section index](../)
