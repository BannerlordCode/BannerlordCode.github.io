---
title: "SiegeTowerRecord"
description: "Auto-generated class reference for SiegeTowerRecord."
---
# SiegeTowerRecord

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct SiegeTowerRecord : ISynchedMissionObjectReadableRecord`
**Base:** `ISynchedMissionObjectReadableRecord`
**File:** `TaleWorlds.MountAndBlade/SiegeTower.cs`

## Overview

`SiegeTowerRecord` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `HasArrivedAtTarget` | `public bool HasArrivedAtTarget { get; }` |
| `State` | `public int State { get; }` |
| `FallAngularSpeed` | `public float FallAngularSpeed { get; }` |
| `TotalDistanceTraveled` | `public float TotalDistanceTraveled { get; }` |

## Key Methods

### ReadFromNetwork
`public bool ReadFromNetwork(ref bool bufferReadValid)`

**Purpose:** **Purpose:** Reads the data or state of from network.

```csharp
// Obtain an instance of SiegeTowerRecord from the subsystem API first
SiegeTowerRecord siegeTowerRecord = ...;
var result = siegeTowerRecord.ReadFromNetwork(bufferReadValid);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SiegeTowerRecord siegeTowerRecord = ...;
siegeTowerRecord.ReadFromNetwork(bufferReadValid);
```

## See Also

- [Area Index](../)