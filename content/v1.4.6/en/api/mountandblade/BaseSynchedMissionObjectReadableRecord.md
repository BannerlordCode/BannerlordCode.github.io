---
title: "BaseSynchedMissionObjectReadableRecord"
description: "BaseSynchedMissionObjectReadableRecord: a public struct in TaleWorlds.MountAndBlade; 19 exposed members (3 methods, 16 properties, 0 fields). Source: TaleWorlds.MountAndBlade/BaseSynchedMissionObjectReadableRecord.cs."
---
# BaseSynchedMissionObjectReadableRecord

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public struct BaseSynchedMissionObjectReadableRecord`
**File:** `TaleWorlds.MountAndBlade/BaseSynchedMissionObjectReadableRecord.cs`

## Overview

BaseSynchedMissionObjectReadableRecord lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/BaseSynchedMissionObjectReadableRecord.cs. It is a public struct; the inheritance chain is BaseSynchedMissionObjectReadableRecord. It exposes 19 public/protected members: 3 methods, 16 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BaseSynchedMissionObjectReadableRecord is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain BaseSynchedMissionObjectReadableRecord. The surface is property-led (properties 16/19, methods 3/19), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/BaseSynchedMissionObjectReadableRecord.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SetVisibilityExcludeParents` | `public bool SetVisibilityExcludeParents` | property |
| `SynchTransform` | `public bool SynchTransform` | property |
| `GameObjectFrame` | `public MatrixFrame GameObjectFrame` | property |
| `SynchronizeFrameOverTime` | `public bool SynchronizeFrameOverTime` | property |
| `LastSynchedFrame` | `public MatrixFrame LastSynchedFrame` | property |
| `Duration` | `public float Duration` | property |
| `HasSkeleton` | `public bool HasSkeleton` | property |
| `SynchAnimation` | `public bool SynchAnimation` | property |
| `AnimationIndex` | `public int AnimationIndex` | property |
| `AnimationSpeed` | `public float AnimationSpeed` | property |
| `AnimationParameter` | `public float AnimationParameter` | property |
| `IsSkeletonAnimationPaused` | `public bool IsSkeletonAnimationPaused` | property |
| `SynchColors` | `public bool SynchColors` | property |
| `Color` | `public uint Color` | property |
| `Color2` | `public uint Color2` | property |
| `IsDisabled` | `public bool IsDisabled` | property |
| `ReadFromNetwork` | `public bool ReadFromNetwork(ref bool bufferReadValid)` | method |
| `SetSetVisibilityExcludeParents` | `public void SetSetVisibilityExcludeParents(bool visible)` | method |
| `ISynchedMissionObjectReadableRecord>CreateFromNetworkWithTypeIndex` | `public static ValueTuple<BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord>CreateFromNetworkWithTypeIndex(int typeIndex)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
