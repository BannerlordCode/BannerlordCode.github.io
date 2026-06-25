---
title: "RangedSiegeWeaponRecord"
description: "Auto-generated class reference for RangedSiegeWeaponRecord."
---
# RangedSiegeWeaponRecord

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct RangedSiegeWeaponRecord : ISynchedMissionObjectReadableRecord`
**Base:** `ISynchedMissionObjectReadableRecord`
**File:** `TaleWorlds.MountAndBlade/RangedSiegeWeapon.cs`

## Overview

`RangedSiegeWeaponRecord` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `State` | `public int State { get; }` |
| `TargetDirection` | `public float TargetDirection { get; }` |
| `TargetReleaseAngle` | `public float TargetReleaseAngle { get; }` |
| `AmmoCount` | `public int AmmoCount { get; }` |
| `ProjectileIndex` | `public int ProjectileIndex { get; }` |

## Key Methods

### ReadFromNetwork
`public bool ReadFromNetwork(ref bool bufferReadValid)`

**Purpose:** **Purpose:** Reads the data or state of from network.

```csharp
// Obtain an instance of RangedSiegeWeaponRecord from the subsystem API first
RangedSiegeWeaponRecord rangedSiegeWeaponRecord = ...;
var result = rangedSiegeWeaponRecord.ReadFromNetwork(bufferReadValid);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RangedSiegeWeaponRecord rangedSiegeWeaponRecord = ...;
rangedSiegeWeaponRecord.ReadFromNetwork(bufferReadValid);
```

## See Also

- [Area Index](../)