---
title: "VertexAnimator"
description: "VertexAnimator: a public class in TaleWorlds.MountAndBlade, inheriting SynchedMissionObject; 20 exposed members (17 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade/VertexAnimator.cs."
---
# VertexAnimator

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class VertexAnimator : SynchedMissionObject`
**File:** `TaleWorlds.MountAndBlade/VertexAnimator.cs`

## Overview

VertexAnimator lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/VertexAnimator.cs. It is a public class, implementing/inheriting SynchedMissionObject; the inheritance chain is VertexAnimator → SynchedMissionObject → MissionObject → ScriptComponentBehavior. It exposes 20 public/protected members: 17 methods, 1 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: VertexAnimator is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain VertexAnimator → SynchedMissionObject → MissionObject → ScriptComponentBehavior. The surface is method-led (methods 17/20, properties 1/20), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/VertexAnimator.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `VertexAnimator` | `public VertexAnimator()` | constructor |
| `OnInit` | `protected internal override void OnInit()` | method |
| `OnEditorInit` | `protected internal override void OnEditorInit()` | method |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `OnTick` | `protected internal override void OnTick(float dt)` | method |
| `PlayOnce` | `public void PlayOnce()` | method |
| `Pause` | `public void Pause()` | method |
| `Play` | `public void Play()` | method |
| `Resume` | `public void Resume()` | method |
| `Stop` | `public void Stop()` | method |
| `StopAndGoToEnd` | `public void StopAndGoToEnd()` | method |
| `SetAnimation` | `public void SetAnimation(int beginKey, int endKey, float speed)` | method |
| `SetAnimationSynched` | `public void SetAnimationSynched(int beginKey, int endKey, float speed)` | method |
| `SetProgressSynched` | `public void SetProgressSynched(float value)` | method |
| `OnRemoved` | `protected override void OnRemoved(int removeReason)` | method |
| `OnEditorTick` | `protected internal override void OnEditorTick(float dt)` | method |
| `WriteToNetwork` | `public override void WriteToNetwork()` | method |
| `OnAfterReadFromNetwork` | `public override void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord>synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)` | method |
| `ISynchedMissionObjectReadableRecord` | `public struct VertexAnimatorRecord : ISynchedMissionObjectReadableRecord` | property |
| `ISynchedMissionObjectReadableRecord` | `public struct VertexAnimatorRecord : ISynchedMissionObjectReadableRecord` | nested type |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface SynchedMissionObject](../SynchedMissionObject)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
