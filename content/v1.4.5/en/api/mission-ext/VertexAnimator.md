---
title: "VertexAnimator"
description: "Auto-generated class reference for VertexAnimator."
---
# VertexAnimator

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class VertexAnimator : SynchedMissionObject`
**Base:** `SynchedMissionObject`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/VertexAnimator.cs`

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

**Purpose:** Reads the data or state of from network.

```csharp
// Obtain an instance of VertexAnimator from the subsystem API first
VertexAnimator vertexAnimator = ...;
var result = vertexAnimator.ReadFromNetwork(bufferReadValid);
```

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**Purpose:** Reads and returns the tick requirement value held by the this instance.

```csharp
// Obtain an instance of VertexAnimator from the subsystem API first
VertexAnimator vertexAnimator = ...;
var result = vertexAnimator.GetTickRequirement();
```

### PlayOnce
`public void PlayOnce()`

**Purpose:** Executes the PlayOnce logic.

```csharp
// Obtain an instance of VertexAnimator from the subsystem API first
VertexAnimator vertexAnimator = ...;
vertexAnimator.PlayOnce();
```

### Pause
`public void Pause()`

**Purpose:** Executes the Pause logic.

```csharp
// Obtain an instance of VertexAnimator from the subsystem API first
VertexAnimator vertexAnimator = ...;
vertexAnimator.Pause();
```

### Play
`public void Play()`

**Purpose:** Executes the Play logic.

```csharp
// Obtain an instance of VertexAnimator from the subsystem API first
VertexAnimator vertexAnimator = ...;
vertexAnimator.Play();
```

### Resume
`public void Resume()`

**Purpose:** Executes the Resume logic.

```csharp
// Obtain an instance of VertexAnimator from the subsystem API first
VertexAnimator vertexAnimator = ...;
vertexAnimator.Resume();
```

### Stop
`public void Stop()`

**Purpose:** Stops the this instance's flow or state machine.

```csharp
// Obtain an instance of VertexAnimator from the subsystem API first
VertexAnimator vertexAnimator = ...;
vertexAnimator.Stop();
```

### StopAndGoToEnd
`public void StopAndGoToEnd()`

**Purpose:** Stops the and go to end flow or state machine.

```csharp
// Obtain an instance of VertexAnimator from the subsystem API first
VertexAnimator vertexAnimator = ...;
vertexAnimator.StopAndGoToEnd();
```

### SetAnimation
`public void SetAnimation(int beginKey, int endKey, float speed)`

**Purpose:** Assigns a new value to animation and updates the object's internal state.

```csharp
// Obtain an instance of VertexAnimator from the subsystem API first
VertexAnimator vertexAnimator = ...;
vertexAnimator.SetAnimation(0, 0, 0);
```

### SetAnimationSynched
`public void SetAnimationSynched(int beginKey, int endKey, float speed)`

**Purpose:** Assigns a new value to animation synched and updates the object's internal state.

```csharp
// Obtain an instance of VertexAnimator from the subsystem API first
VertexAnimator vertexAnimator = ...;
vertexAnimator.SetAnimationSynched(0, 0, 0);
```

### SetProgressSynched
`public void SetProgressSynched(float value)`

**Purpose:** Assigns a new value to progress synched and updates the object's internal state.

```csharp
// Obtain an instance of VertexAnimator from the subsystem API first
VertexAnimator vertexAnimator = ...;
vertexAnimator.SetProgressSynched(0);
```

### WriteToNetwork
`public override void WriteToNetwork()`

**Purpose:** Writes to network to the target location.

```csharp
// Obtain an instance of VertexAnimator from the subsystem API first
VertexAnimator vertexAnimator = ...;
vertexAnimator.WriteToNetwork();
```

### OnAfterReadFromNetwork
`public override void OnAfterReadFromNetwork((BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord) synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)`

**Purpose:** Invoked when the after read from network event is raised.

```csharp
// Obtain an instance of VertexAnimator from the subsystem API first
VertexAnimator vertexAnimator = ...;
vertexAnimator.OnAfterReadFromNetwork((BaseSynchedMissionObjectReadableRecord, synchedMissionObjectReadableRecord, false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
VertexAnimator vertexAnimator = ...;
vertexAnimator.ReadFromNetwork(bufferReadValid);
```

## See Also

- [Area Index](../)