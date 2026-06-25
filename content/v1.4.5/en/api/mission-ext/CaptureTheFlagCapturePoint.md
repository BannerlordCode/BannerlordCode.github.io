---
title: "CaptureTheFlagCapturePoint"
description: "Auto-generated class reference for CaptureTheFlagCapturePoint."
---
# CaptureTheFlagCapturePoint

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CaptureTheFlagCapturePoint`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/CaptureTheFlagCapturePoint.cs`

## Overview

`CaptureTheFlagCapturePoint` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Progress` | `public float Progress { get; }` |
| `Direction` | `public CaptureTheFlagFlagDirection Direction { get; }` |
| `Speed` | `public float Speed { get; }` |
| `InitialFlagFrame` | `public MatrixFrame InitialFlagFrame { get; }` |
| `FlagEntity` | `public GameEntity FlagEntity { get; }` |
| `FlagHolder` | `public SynchedMissionObject FlagHolder { get; }` |
| `FlagBottomBoundary` | `public GameEntity FlagBottomBoundary { get; }` |
| `FlagTopBoundary` | `public GameEntity FlagTopBoundary { get; }` |
| `BattleSide` | `public BattleSideEnum BattleSide { get; set; }` |
| `Index` | `public int Index { get; set; }` |
| `UpdateFlag` | `public bool UpdateFlag { get; set; }` |

## Key Methods

### Reset
`public void Reset()`

**Purpose:** Returns the this instance to its default or initial condition.

```csharp
// Obtain an instance of CaptureTheFlagCapturePoint from the subsystem API first
CaptureTheFlagCapturePoint captureTheFlagCapturePoint = ...;
captureTheFlagCapturePoint.Reset();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CaptureTheFlagCapturePoint captureTheFlagCapturePoint = ...;
captureTheFlagCapturePoint.Reset();
```

## See Also

- [Area Index](../)