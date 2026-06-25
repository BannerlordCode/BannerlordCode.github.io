---
title: "SynchedMissionObject"
description: "Auto-generated class reference for SynchedMissionObject."
---
# SynchedMissionObject

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SynchedMissionObject : MissionObject`
**Base:** `MissionObject`
**File:** `TaleWorlds.MountAndBlade/SynchedMissionObject.cs`

## Overview

`SynchedMissionObject` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Color` | `public uint Color { get; }` |
| `Color2` | `public uint Color2 { get; }` |
| `SynchronizeCompleted` | `public bool SynchronizeCompleted { get; }` |

## Key Methods

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**Purpose:** **Purpose:** Reads and returns the tick requirement value held by the this instance.

```csharp
// Obtain an instance of SynchedMissionObject from the subsystem API first
SynchedMissionObject synchedMissionObject = ...;
var result = synchedMissionObject.GetTickRequirement();
```

### SetLocalPositionSmoothStep
`public void SetLocalPositionSmoothStep(ref Vec3 targetPosition)`

**Purpose:** **Purpose:** Assigns a new value to local position smooth step and updates the object's internal state.

```csharp
// Obtain an instance of SynchedMissionObject from the subsystem API first
SynchedMissionObject synchedMissionObject = ...;
synchedMissionObject.SetLocalPositionSmoothStep(targetPosition);
```

### SetVisibleSynched
`public virtual void SetVisibleSynched(bool value, bool forceChildrenVisible = false)`

**Purpose:** **Purpose:** Assigns a new value to visible synched and updates the object's internal state.

```csharp
// Obtain an instance of SynchedMissionObject from the subsystem API first
SynchedMissionObject synchedMissionObject = ...;
synchedMissionObject.SetVisibleSynched(false, false);
```

### SetPhysicsStateSynched
`public virtual void SetPhysicsStateSynched(bool value, bool setChildren = true)`

**Purpose:** **Purpose:** Assigns a new value to physics state synched and updates the object's internal state.

```csharp
// Obtain an instance of SynchedMissionObject from the subsystem API first
SynchedMissionObject synchedMissionObject = ...;
synchedMissionObject.SetPhysicsStateSynched(false, false);
```

### SetDisabledSynched
`public virtual void SetDisabledSynched()`

**Purpose:** **Purpose:** Assigns a new value to disabled synched and updates the object's internal state.

```csharp
// Obtain an instance of SynchedMissionObject from the subsystem API first
SynchedMissionObject synchedMissionObject = ...;
synchedMissionObject.SetDisabledSynched();
```

### SetFrameSynched
`public void SetFrameSynched(ref MatrixFrame frame, bool isClient = false)`

**Purpose:** **Purpose:** Assigns a new value to frame synched and updates the object's internal state.

```csharp
// Obtain an instance of SynchedMissionObject from the subsystem API first
SynchedMissionObject synchedMissionObject = ...;
synchedMissionObject.SetFrameSynched(frame, false);
```

### SetGlobalFrameSynched
`public void SetGlobalFrameSynched(ref MatrixFrame frame, bool isClient = false)`

**Purpose:** **Purpose:** Assigns a new value to global frame synched and updates the object's internal state.

```csharp
// Obtain an instance of SynchedMissionObject from the subsystem API first
SynchedMissionObject synchedMissionObject = ...;
synchedMissionObject.SetGlobalFrameSynched(frame, false);
```

### SetFrameSynchedOverTime
`public void SetFrameSynchedOverTime(ref MatrixFrame frame, float duration, bool isClient = false)`

**Purpose:** **Purpose:** Assigns a new value to frame synched over time and updates the object's internal state.

```csharp
// Obtain an instance of SynchedMissionObject from the subsystem API first
SynchedMissionObject synchedMissionObject = ...;
synchedMissionObject.SetFrameSynchedOverTime(frame, 0, false);
```

### SetGlobalFrameSynchedOverTime
`public void SetGlobalFrameSynchedOverTime(ref MatrixFrame frame, float duration, bool isClient = false)`

**Purpose:** **Purpose:** Assigns a new value to global frame synched over time and updates the object's internal state.

```csharp
// Obtain an instance of SynchedMissionObject from the subsystem API first
SynchedMissionObject synchedMissionObject = ...;
synchedMissionObject.SetGlobalFrameSynchedOverTime(frame, 0, false);
```

### SetAnimationAtChannelSynched
`public void SetAnimationAtChannelSynched(string animationName, int channelNo, float animationSpeed = 1f)`

**Purpose:** **Purpose:** Assigns a new value to animation at channel synched and updates the object's internal state.

```csharp
// Obtain an instance of SynchedMissionObject from the subsystem API first
SynchedMissionObject synchedMissionObject = ...;
synchedMissionObject.SetAnimationAtChannelSynched("example", 0, 0);
```

### SetAnimationAtChannelSynched
`public void SetAnimationAtChannelSynched(int animationIndex, int channelNo, float animationSpeed = 1f)`

**Purpose:** **Purpose:** Assigns a new value to animation at channel synched and updates the object's internal state.

```csharp
// Obtain an instance of SynchedMissionObject from the subsystem API first
SynchedMissionObject synchedMissionObject = ...;
synchedMissionObject.SetAnimationAtChannelSynched(0, 0, 0);
```

### SetAnimationChannelParameterSynched
`public void SetAnimationChannelParameterSynched(int channelNo, float parameter)`

**Purpose:** **Purpose:** Assigns a new value to animation channel parameter synched and updates the object's internal state.

```csharp
// Obtain an instance of SynchedMissionObject from the subsystem API first
SynchedMissionObject synchedMissionObject = ...;
synchedMissionObject.SetAnimationChannelParameterSynched(0, 0);
```

### PauseSkeletonAnimationSynched
`public void PauseSkeletonAnimationSynched()`

**Purpose:** **Purpose:** Executes the PauseSkeletonAnimationSynched logic.

```csharp
// Obtain an instance of SynchedMissionObject from the subsystem API first
SynchedMissionObject synchedMissionObject = ...;
synchedMissionObject.PauseSkeletonAnimationSynched();
```

### ResumeSkeletonAnimationSynched
`public void ResumeSkeletonAnimationSynched()`

**Purpose:** **Purpose:** Executes the ResumeSkeletonAnimationSynched logic.

```csharp
// Obtain an instance of SynchedMissionObject from the subsystem API first
SynchedMissionObject synchedMissionObject = ...;
synchedMissionObject.ResumeSkeletonAnimationSynched();
```

### BurstParticlesSynched
`public void BurstParticlesSynched(bool doChildren = true)`

**Purpose:** **Purpose:** Executes the BurstParticlesSynched logic.

```csharp
// Obtain an instance of SynchedMissionObject from the subsystem API first
SynchedMissionObject synchedMissionObject = ...;
synchedMissionObject.BurstParticlesSynched(false);
```

### ApplyImpulseSynched
`public void ApplyImpulseSynched(Vec3 localPosition, Vec3 impulse)`

**Purpose:** **Purpose:** Applies the effect of impulse synched to the this instance.

```csharp
// Obtain an instance of SynchedMissionObject from the subsystem API first
SynchedMissionObject synchedMissionObject = ...;
synchedMissionObject.ApplyImpulseSynched(localPosition, impulse);
```

### AddBodyFlagsSynched
`public void AddBodyFlagsSynched(BodyFlags flags, bool applyToChildren = true)`

**Purpose:** **Purpose:** Adds body flags synched to the current collection or state.

```csharp
// Obtain an instance of SynchedMissionObject from the subsystem API first
SynchedMissionObject synchedMissionObject = ...;
synchedMissionObject.AddBodyFlagsSynched(flags, false);
```

### RemoveBodyFlagsSynched
`public void RemoveBodyFlagsSynched(BodyFlags flags, bool applyToChildren = true)`

**Purpose:** **Purpose:** Removes body flags synched from the current collection or state.

```csharp
// Obtain an instance of SynchedMissionObject from the subsystem API first
SynchedMissionObject synchedMissionObject = ...;
synchedMissionObject.RemoveBodyFlagsSynched(flags, false);
```

### SetTeamColors
`public void SetTeamColors(uint color, uint color2)`

**Purpose:** **Purpose:** Assigns a new value to team colors and updates the object's internal state.

```csharp
// Obtain an instance of SynchedMissionObject from the subsystem API first
SynchedMissionObject synchedMissionObject = ...;
synchedMissionObject.SetTeamColors(0, 0);
```

### SetTeamColorsSynched
`public virtual void SetTeamColorsSynched(uint color, uint color2)`

**Purpose:** **Purpose:** Assigns a new value to team colors synched and updates the object's internal state.

```csharp
// Obtain an instance of SynchedMissionObject from the subsystem API first
SynchedMissionObject synchedMissionObject = ...;
synchedMissionObject.SetTeamColorsSynched(0, 0);
```

### WriteToNetwork
`public virtual void WriteToNetwork()`

**Purpose:** **Purpose:** Writes to network to the target location.

```csharp
// Obtain an instance of SynchedMissionObject from the subsystem API first
SynchedMissionObject synchedMissionObject = ...;
synchedMissionObject.WriteToNetwork();
```

### OnAfterReadFromNetwork
`public virtual void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord> synchedMissionObjectReadableRecord)`

**Purpose:** **Purpose:** Invoked when the after read from network event is raised.

```csharp
// Obtain an instance of SynchedMissionObject from the subsystem API first
SynchedMissionObject synchedMissionObject = ...;
synchedMissionObject.OnAfterReadFromNetwork(valueTuple<BaseSynchedMissionObjectReadableRecord, synchedMissionObjectReadableRecord);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SynchedMissionObject synchedMissionObject = ...;
synchedMissionObject.GetTickRequirement();
```

## See Also

- [Area Index](../)