<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VertexAnimatorRecord`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VertexAnimatorRecord

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct VertexAnimatorRecord : ISynchedMissionObjectReadableRecord`
**Base:** `ISynchedMissionObjectReadableRecord`
**Area:** mission-ext

## Overview

`VertexAnimatorRecord` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

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
`public override void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord> synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)`

**Purpose:** Called when the `after read from network` event is raised.

### ReadFromNetwork
`public bool ReadFromNetwork(ref bool bufferReadValid)`

**Purpose:** Handles logic related to `read from network`.

## Usage Example

```csharp
// First obtain a VertexAnimatorRecord instance from game state, then call one of its public methods
var value = new VertexAnimatorRecord();
value.GetTickRequirement();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
