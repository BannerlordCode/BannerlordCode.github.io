---
title: "StonePileRecord"
description: "Auto-generated class reference for StonePileRecord."
---
# StonePileRecord

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct StonePileRecord : ISynchedMissionObjectReadableRecord`
**Base:** `ISynchedMissionObjectReadableRecord`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/StonePile.cs`

## Overview

`StonePileRecord` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ReadAmmoCount` | `public int ReadAmmoCount { get; }` |

## Key Methods

### ReadFromNetwork
`public bool ReadFromNetwork(ref bool bufferReadValid)`

**Purpose:** Reads the data or state of from network.

```csharp
// Obtain an instance of StonePileRecord from the subsystem API first
StonePileRecord stonePileRecord = ...;
var result = stonePileRecord.ReadFromNetwork(bufferReadValid);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
StonePileRecord stonePileRecord = ...;
stonePileRecord.ReadFromNetwork(bufferReadValid);
```

## See Also

- [Area Index](../)