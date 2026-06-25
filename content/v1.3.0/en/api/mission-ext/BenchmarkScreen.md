---
title: "BenchmarkScreen"
description: "Auto-generated class reference for BenchmarkScreen."
---
# BenchmarkScreen

**Namespace:** TaleWorlds.MountAndBlade.View.Screens
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BenchmarkScreen : ScreenBase`
**Base:** `ScreenBase`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/BenchmarkScreen.cs`

## Overview

`BenchmarkScreen` lives in `TaleWorlds.MountAndBlade.View.Screens` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.Screens` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### UpdateCamera
`public void UpdateCamera()`

**Purpose:** Recalculates and stores the latest representation of `camera`.

```csharp
// Obtain an instance of BenchmarkScreen from the subsystem API first
BenchmarkScreen benchmarkScreen = ...;
benchmarkScreen.UpdateCamera();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BenchmarkScreen benchmarkScreen = ...;
benchmarkScreen.UpdateCamera();
```

## See Also

- [Area Index](../)