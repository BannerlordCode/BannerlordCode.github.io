---
title: "BaseSynchedMissionObjectReadableRecord"
description: "Auto-generated class reference for BaseSynchedMissionObjectReadableRecord."
---
# BaseSynchedMissionObjectReadableRecord

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct BaseSynchedMissionObjectReadableRecord`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/BaseSynchedMissionObjectReadableRecord.cs`

## Overview

`BaseSynchedMissionObjectReadableRecord` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SetVisibilityExcludeParents` | `public bool SetVisibilityExcludeParents { get; }` |
| `SynchTransform` | `public bool SynchTransform { get; }` |
| `GameObjectFrame` | `public MatrixFrame GameObjectFrame { get; }` |
| `SynchronizeFrameOverTime` | `public bool SynchronizeFrameOverTime { get; }` |
| `LastSynchedFrame` | `public MatrixFrame LastSynchedFrame { get; }` |
| `Duration` | `public float Duration { get; }` |
| `HasSkeleton` | `public bool HasSkeleton { get; }` |
| `SynchAnimation` | `public bool SynchAnimation { get; }` |
| `AnimationIndex` | `public int AnimationIndex { get; }` |
| `AnimationSpeed` | `public float AnimationSpeed { get; }` |
| `AnimationParameter` | `public float AnimationParameter { get; }` |
| `IsSkeletonAnimationPaused` | `public bool IsSkeletonAnimationPaused { get; }` |
| `SynchColors` | `public bool SynchColors { get; }` |
| `Color` | `public uint Color { get; }` |
| `Color2` | `public uint Color2 { get; }` |
| `IsDisabled` | `public bool IsDisabled { get; }` |

## Key Methods

### ReadFromNetwork
`public bool ReadFromNetwork(ref bool bufferReadValid)`

**Purpose:** **Purpose:** Reads the data or state of from network.

```csharp
// Obtain an instance of BaseSynchedMissionObjectReadableRecord from the subsystem API first
BaseSynchedMissionObjectReadableRecord baseSynchedMissionObjectReadableRecord = ...;
var result = baseSynchedMissionObjectReadableRecord.ReadFromNetwork(bufferReadValid);
```

### SetSetVisibilityExcludeParents
`public void SetSetVisibilityExcludeParents(bool visible)`

**Purpose:** **Purpose:** Assigns a new value to set visibility exclude parents and updates the object's internal state.

```csharp
// Obtain an instance of BaseSynchedMissionObjectReadableRecord from the subsystem API first
BaseSynchedMissionObjectReadableRecord baseSynchedMissionObjectReadableRecord = ...;
baseSynchedMissionObjectReadableRecord.SetSetVisibilityExcludeParents(false);
```

### CreateFromNetworkWithTypeIndex
`public static ValueTuple<BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord> CreateFromNetworkWithTypeIndex(int typeIndex)`

**Purpose:** **Purpose:** Constructs a new from network with type index entity and returns it to the caller.

```csharp
// Static call; no instance required
BaseSynchedMissionObjectReadableRecord.CreateFromNetworkWithTypeIndex(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BaseSynchedMissionObjectReadableRecord baseSynchedMissionObjectReadableRecord = ...;
baseSynchedMissionObjectReadableRecord.ReadFromNetwork(bufferReadValid);
```

## See Also

- [Area Index](../)