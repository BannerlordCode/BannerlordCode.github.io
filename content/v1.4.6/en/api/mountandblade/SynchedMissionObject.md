---
title: "SynchedMissionObject"
description: "SynchedMissionObject: a public class in TaleWorlds.MountAndBlade, inheriting MissionObject; 29 exposed members (24 methods, 4 properties, 0 fields). Source: TaleWorlds.MountAndBlade/SynchedMissionObject.cs."
---
# SynchedMissionObject

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SynchedMissionObject : MissionObject`
**File:** `TaleWorlds.MountAndBlade/SynchedMissionObject.cs`

## Overview

SynchedMissionObject lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/SynchedMissionObject.cs. It is a public class, implementing/inheriting MissionObject; the inheritance chain is SynchedMissionObject → MissionObject → ScriptComponentBehavior. It exposes 29 public/protected members: 24 methods, 4 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SynchedMissionObject is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain SynchedMissionObject → MissionObject → ScriptComponentBehavior. The surface is method-led (methods 24/29, properties 4/29), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/SynchedMissionObject.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Color` | `public uint Color` | property |
| `Color2` | `public uint Color2` | property |
| `SynchronizeCompleted` | `public bool SynchronizeCompleted` | property |
| `OnInit` | `protected internal override void OnInit()` | method |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `OnTick` | `protected internal override void OnTick(float dt)` | method |
| `SetLocalPositionSmoothStep` | `public void SetLocalPositionSmoothStep(ref Vec3 targetPosition)` | method |
| `SetVisibleSynched` | `public virtual void SetVisibleSynched(bool value, bool forceChildrenVisible = false)` | method |
| `SetPhysicsStateSynched` | `public virtual void SetPhysicsStateSynched(bool value, bool setChildren = true)` | method |
| `SetDisabledSynched` | `public virtual void SetDisabledSynched()` | method |
| `SetFrameSynched` | `public void SetFrameSynched(ref MatrixFrame frame, bool isClient = false)` | method |
| `SetGlobalFrameSynched` | `public void SetGlobalFrameSynched(ref MatrixFrame frame, bool isClient = false)` | method |
| `SetFrameSynchedOverTime` | `public void SetFrameSynchedOverTime(ref MatrixFrame frame, float duration, bool isClient = false)` | method |
| `SetGlobalFrameSynchedOverTime` | `public void SetGlobalFrameSynchedOverTime(ref MatrixFrame frame, float duration, bool isClient = false)` | method |
| `SetAnimationAtChannelSynched` | `public void SetAnimationAtChannelSynched(string animationName, int channelNo, float animationSpeed = 1f)` | method |
| `SetAnimationAtChannelSynched` | `public void SetAnimationAtChannelSynched(int animationIndex, int channelNo, float animationSpeed = 1f)` | method |
| `SetAnimationChannelParameterSynched` | `public void SetAnimationChannelParameterSynched(int channelNo, float parameter)` | method |
| `PauseSkeletonAnimationSynched` | `public void PauseSkeletonAnimationSynched()` | method |
| `ResumeSkeletonAnimationSynched` | `public void ResumeSkeletonAnimationSynched()` | method |
| `BurstParticlesSynched` | `public void BurstParticlesSynched(bool doChildren = true)` | method |
| `ApplyImpulseSynched` | `public void ApplyImpulseSynched(Vec3 localPosition, Vec3 impulse)` | method |
| `AddBodyFlagsSynched` | `public void AddBodyFlagsSynched(BodyFlags flags, bool applyToChildren = true)` | method |
| `RemoveBodyFlagsSynched` | `public void RemoveBodyFlagsSynched(BodyFlags flags, bool applyToChildren = true)` | method |
| `SetTeamColors` | `public void SetTeamColors(uint color, uint color2)` | method |
| `SetTeamColorsSynched` | `public virtual void SetTeamColorsSynched(uint color, uint color2)` | method |
| `WriteToNetwork` | `public virtual void WriteToNetwork()` | method |
| `OnAfterReadFromNetwork` | `public virtual void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord>synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)` | method |
| `uint` | `public enum SynchFlags : uint` | property |
| `uint` | `public enum SynchFlags : uint` | nested type |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionObject](../MissionObject)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
