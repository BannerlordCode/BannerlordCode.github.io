---
title: "VertexAnimator"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VertexAnimator`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# VertexAnimator

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class VertexAnimator : SynchedMissionObject`
**Base:** `SynchedMissionObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/VertexAnimator.cs`

## Overview

`VertexAnimator` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `BeginKey` | `public int BeginKey { get; }` |
| `EndKey` | `public int EndKey { get; }` |
| `Speed` | `public float Speed { get; }` |
| `Progress` | `public float Progress { get; }` |

## Key Methods

### ReadFromNetwork
`public bool ReadFromNetwork(ref bool bufferReadValid)`

**Purpose:** Handles logic related to `read from network`.

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**Purpose:** Gets the current value of `tick requirement`.

### PlayOnce
`public void PlayOnce()`

**Purpose:** Handles logic related to `play once`.

### Pause
`public void Pause()`

**Purpose:** Handles logic related to `pause`.

### Play
`public void Play()`

**Purpose:** Handles logic related to `play`.

### Resume
`public void Resume()`

**Purpose:** Handles logic related to `resume`.

### Stop
`public void Stop()`

**Purpose:** Handles logic related to `stop`.

### StopAndGoToEnd
`public void StopAndGoToEnd()`

**Purpose:** Handles logic related to `stop and go to end`.

### SetAnimation
`public void SetAnimation(int beginKey, int endKey, float speed)`

**Purpose:** Sets the value or state of `animation`.

### SetAnimationSynched
`public void SetAnimationSynched(int beginKey, int endKey, float speed)`

**Purpose:** Sets the value or state of `animation synched`.

### SetProgressSynched
`public void SetProgressSynched(float value)`

**Purpose:** Sets the value or state of `progress synched`.

### WriteToNetwork
`public override void WriteToNetwork()`

**Purpose:** Handles logic related to `write to network`.

### OnAfterReadFromNetwork
`public override void OnAfterReadFromNetwork((BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord) synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)`

**Purpose:** Called when the `after read from network` event is raised.

## Usage Example

```csharp
var value = new VertexAnimator();
value.ReadFromNetwork(bufferReadValid);
```

## See Also

- [Complete Class Catalog](../catalog)