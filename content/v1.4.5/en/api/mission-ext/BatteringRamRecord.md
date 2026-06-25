---
title: "BatteringRamRecord"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BatteringRamRecord`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BatteringRamRecord

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct BatteringRamRecord : ISynchedMissionObjectReadableRecord`
**Base:** `ISynchedMissionObjectReadableRecord`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BatteringRam.cs`

## Overview

`BatteringRamRecord` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `HasArrivedAtTarget` | `public bool HasArrivedAtTarget { get; }` |
| `State` | `public int State { get; }` |
| `TotalDistanceTraveled` | `public float TotalDistanceTraveled { get; }` |

## Key Methods

### ReadFromNetwork
`public bool ReadFromNetwork(ref bool bufferReadValid)`

**Purpose:** Handles logic related to `read from network`.

## Usage Example

```csharp
var value = new BatteringRamRecord();
value.ReadFromNetwork(bufferReadValid);
```

## See Also

- [Complete Class Catalog](../catalog)