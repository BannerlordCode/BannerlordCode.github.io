---
title: "BenchmarkScreen"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BenchmarkScreen`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BenchmarkScreen

**Namespace:** TaleWorlds.MountAndBlade.View.Screens
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BenchmarkScreen : ScreenBase`
**Base:** `ScreenBase`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Screens/BenchmarkScreen.cs`

## Overview

`BenchmarkScreen` lives in `TaleWorlds.MountAndBlade.View.Screens` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.Screens` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### UpdateCamera
`public void UpdateCamera()`

**Purpose:** Updates the state or data of `camera`.

## Usage Example

```csharp
var value = new BenchmarkScreen();
value.UpdateCamera();
```

## See Also

- [Complete Class Catalog](../catalog)