---
title: "DebugExtensions"
description: "Auto-generated class reference for DebugExtensions."
---
# DebugExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class DebugExtensions`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/DebugExtensions.cs`

## Overview

`DebugExtensions` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RenderDebugCircleOnTerrain
`public static void RenderDebugCircleOnTerrain(Scene scene, MatrixFrame frame, float radius, uint color, bool depthCheck = true, bool isDotted = false)`

**Purpose:** Executes the RenderDebugCircleOnTerrain logic.

```csharp
// Static call; no instance required
DebugExtensions.RenderDebugCircleOnTerrain(scene, frame, 0, 0, false, false);
```

### RenderDebugArcOnTerrain
`public static void RenderDebugArcOnTerrain(Scene scene, MatrixFrame frame, float radius, float beginAngle, float endAngle, uint color, bool depthCheck = true, bool isDotted = false)`

**Purpose:** Executes the RenderDebugArcOnTerrain logic.

```csharp
// Static call; no instance required
DebugExtensions.RenderDebugArcOnTerrain(scene, frame, 0, 0, 0, 0, false, false);
```

### RenderDebugLineOnTerrain
`public static void RenderDebugLineOnTerrain(Scene scene, Vec3 position, Vec3 direction, uint color, bool depthCheck = true, float time = 0f, bool isDotted = false, float pointDensity = 1f)`

**Purpose:** Executes the RenderDebugLineOnTerrain logic.

```csharp
// Static call; no instance required
DebugExtensions.RenderDebugLineOnTerrain(scene, position, direction, 0, false, 0, false, 0);
```

## Usage Example

```csharp
DebugExtensions.RenderDebugCircleOnTerrain(scene, frame, 0, 0, false, false);
```

## See Also

- [Area Index](../)