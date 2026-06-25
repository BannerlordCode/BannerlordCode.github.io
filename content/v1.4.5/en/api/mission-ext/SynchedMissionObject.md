---
title: "SynchedMissionObject"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SynchedMissionObject`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SynchedMissionObject

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SynchedMissionObject : MissionObject`
**Base:** `MissionObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/SynchedMissionObject.cs`

## Overview

`SynchedMissionObject` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Color` | `public uint Color { get; }` |
| `Color2` | `public uint Color2 { get; }` |

## Key Methods

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**Purpose:** Gets the current value of `tick requirement`.

### SetLocalPositionSmoothStep
`public void SetLocalPositionSmoothStep(ref Vec3 targetPosition)`

**Purpose:** Sets the value or state of `local position smooth step`.

### SetVisibleSynched
`public virtual void SetVisibleSynched(bool value, bool forceChildrenVisible = false)`

**Purpose:** Sets the value or state of `visible synched`.

### SetPhysicsStateSynched
`public virtual void SetPhysicsStateSynched(bool value, bool setChildren = true)`

**Purpose:** Sets the value or state of `physics state synched`.

### SetDisabledSynched
`public virtual void SetDisabledSynched()`

**Purpose:** Sets the value or state of `disabled synched`.

### SetFrameSynched
`public void SetFrameSynched(ref MatrixFrame frame, bool isClient = false)`

**Purpose:** Sets the value or state of `frame synched`.

### SetGlobalFrameSynched
`public void SetGlobalFrameSynched(ref MatrixFrame frame, bool isClient = false)`

**Purpose:** Sets the value or state of `global frame synched`.

### SetFrameSynchedOverTime
`public void SetFrameSynchedOverTime(ref MatrixFrame frame, float duration, bool isClient = false)`

**Purpose:** Sets the value or state of `frame synched over time`.

### SetGlobalFrameSynchedOverTime
`public void SetGlobalFrameSynchedOverTime(ref MatrixFrame frame, float duration, bool isClient = false)`

**Purpose:** Sets the value or state of `global frame synched over time`.

### SetAnimationAtChannelSynched
`public void SetAnimationAtChannelSynched(string animationName, int channelNo, float animationSpeed = 1f)`

**Purpose:** Sets the value or state of `animation at channel synched`.

### SetAnimationAtChannelSynched
`public void SetAnimationAtChannelSynched(int animationIndex, int channelNo, float animationSpeed = 1f)`

**Purpose:** Sets the value or state of `animation at channel synched`.

### SetAnimationChannelParameterSynched
`public void SetAnimationChannelParameterSynched(int channelNo, float parameter)`

**Purpose:** Sets the value or state of `animation channel parameter synched`.

### PauseSkeletonAnimationSynched
`public void PauseSkeletonAnimationSynched()`

**Purpose:** Handles logic related to `pause skeleton animation synched`.

### ResumeSkeletonAnimationSynched
`public void ResumeSkeletonAnimationSynched()`

**Purpose:** Handles logic related to `resume skeleton animation synched`.

### BurstParticlesSynched
`public void BurstParticlesSynched(bool doChildren = true)`

**Purpose:** Handles logic related to `burst particles synched`.

### ApplyImpulseSynched
`public void ApplyImpulseSynched(Vec3 localPosition, Vec3 impulse)`

**Purpose:** Applies `impulse synched` to the current object.

### AddBodyFlagsSynched
`public void AddBodyFlagsSynched(BodyFlags flags, bool applyToChildren = true)`

**Purpose:** Adds `body flags synched` to the current collection or state.

### RemoveBodyFlagsSynched
`public void RemoveBodyFlagsSynched(BodyFlags flags, bool applyToChildren = true)`

**Purpose:** Removes `body flags synched` from the current collection or state.

### SetTeamColors
`public void SetTeamColors(uint color, uint color2)`

**Purpose:** Sets the value or state of `team colors`.

### SetTeamColorsSynched
`public virtual void SetTeamColorsSynched(uint color, uint color2)`

**Purpose:** Sets the value or state of `team colors synched`.

### WriteToNetwork
`public virtual void WriteToNetwork()`

**Purpose:** Handles logic related to `write to network`.

### OnAfterReadFromNetwork
`public virtual void OnAfterReadFromNetwork((BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord) synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)`

**Purpose:** Called when the `after read from network` event is raised.

## Usage Example

```csharp
var value = new SynchedMissionObject();
value.GetTickRequirement();
```

## See Also

- [Complete Class Catalog](../catalog)