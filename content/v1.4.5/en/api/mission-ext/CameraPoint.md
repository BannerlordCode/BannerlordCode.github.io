---
title: "CameraPoint"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CameraPoint`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CameraPoint

**Namespace:** TaleWorlds.MountAndBlade.View.Screens
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum CameraPoint`
**Area:** mission-ext

## Overview

`CameraPoint` lives in `TaleWorlds.MountAndBlade.View.Screens`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.Screens` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### StartedRendering
`public bool StartedRendering()`

**Purpose:** Handles logic related to `started rendering`.

### GetSubTestName
`public string GetSubTestName(CameraPointTestType type)`

**Purpose:** Gets the current value of `sub test name`.

### GetRenderMode
`public EngineRenderDisplayMode GetRenderMode(CameraPointTestType type)`

**Purpose:** Gets the current value of `render mode`.

### Reset
`public void Reset()`

**Purpose:** Resets `reset` to its initial state.

## Usage Example

```csharp
CameraPoint example = CameraPoint.Value;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
