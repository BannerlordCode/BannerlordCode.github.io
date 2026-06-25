---
title: "SiegeLadderRecord"
description: "Auto-generated class reference for SiegeLadderRecord."
---
# SiegeLadderRecord

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct SiegeLadderRecord : ISynchedMissionObjectReadableRecord`
**Base:** `ISynchedMissionObjectReadableRecord`
**File:** `TaleWorlds.MountAndBlade/SiegeLadder.cs`

## Overview

`SiegeLadderRecord` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsStateLand` | `public bool IsStateLand { get; }` |
| `State` | `public int State { get; }` |
| `AnimationState` | `public int AnimationState { get; }` |
| `FallAngularSpeed` | `public float FallAngularSpeed { get; }` |
| `LadderFrame` | `public MatrixFrame LadderFrame { get; }` |
| `HasAnimation` | `public bool HasAnimation { get; }` |
| `LadderAnimationIndex` | `public int LadderAnimationIndex { get; }` |
| `LadderAnimationProgress` | `public float LadderAnimationProgress { get; }` |

## Key Methods

### ReadFromNetwork
`public bool ReadFromNetwork(ref bool bufferReadValid)`

**Purpose:** Reads the data or state of from network.

```csharp
// Obtain an instance of SiegeLadderRecord from the subsystem API first
SiegeLadderRecord siegeLadderRecord = ...;
var result = siegeLadderRecord.ReadFromNetwork(bufferReadValid);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SiegeLadderRecord siegeLadderRecord = ...;
siegeLadderRecord.ReadFromNetwork(bufferReadValid);
```

## See Also

- [Area Index](../)