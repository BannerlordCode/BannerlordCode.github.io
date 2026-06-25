---
title: "DestructableComponentRecord"
description: "Auto-generated class reference for DestructableComponentRecord."
---
# DestructableComponentRecord

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct DestructableComponentRecord : ISynchedMissionObjectReadableRecord`
**Base:** `ISynchedMissionObjectReadableRecord`
**File:** `TaleWorlds.MountAndBlade/DestructableComponent.cs`

## Overview

`DestructableComponentRecord` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `HitPoint` | `public float HitPoint { get; }` |
| `DestructionState` | `public int DestructionState { get; }` |
| `ForceIndex` | `public int ForceIndex { get; }` |
| `IsMissionObject` | `public bool IsMissionObject { get; }` |

## Key Methods

### ReadFromNetwork
`public bool ReadFromNetwork(ref bool bufferReadValid)`

**Purpose:** Reads the data or state of from network.

```csharp
// Obtain an instance of DestructableComponentRecord from the subsystem API first
DestructableComponentRecord destructableComponentRecord = ...;
var result = destructableComponentRecord.ReadFromNetwork(bufferReadValid);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DestructableComponentRecord destructableComponentRecord = ...;
destructableComponentRecord.ReadFromNetwork(bufferReadValid);
```

## See Also

- [Area Index](../)