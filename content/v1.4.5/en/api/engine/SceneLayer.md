---
title: "SceneLayer"
description: "Auto-generated class reference for SceneLayer."
---
# SceneLayer

**Namespace:** TaleWorlds.Engine.Screens
**Module:** TaleWorlds.Engine
**Type:** `public class SceneLayer : ScreenLayer`
**Base:** `ScreenLayer`
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine.Screens/SceneLayer.cs`

## Overview

`SceneLayer` lives in `TaleWorlds.Engine.Screens` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine.Screens` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ClearSceneOnFinalize` | `public bool ClearSceneOnFinalize { get; }` |
| `AutoToggleSceneView` | `public bool AutoToggleSceneView { get; }` |

## Key Methods

### SetScene
`public void SetScene(Scene scene)`

**Purpose:** Assigns a new value to `scene` and updates the object's internal state.

```csharp
// Obtain an instance of SceneLayer from the subsystem API first
SceneLayer sceneLayer = ...;
sceneLayer.SetScene(scene);
```

### SetRenderWithPostfx
`public void SetRenderWithPostfx(bool value)`

**Purpose:** Assigns a new value to `render with postfx` and updates the object's internal state.

```csharp
// Obtain an instance of SceneLayer from the subsystem API first
SceneLayer sceneLayer = ...;
sceneLayer.SetRenderWithPostfx(false);
```

### SetPostfxConfigParams
`public void SetPostfxConfigParams(int value)`

**Purpose:** Assigns a new value to `postfx config params` and updates the object's internal state.

```csharp
// Obtain an instance of SceneLayer from the subsystem API first
SceneLayer sceneLayer = ...;
sceneLayer.SetPostfxConfigParams(0);
```

### SetCamera
`public void SetCamera(Camera camera)`

**Purpose:** Assigns a new value to `camera` and updates the object's internal state.

```csharp
// Obtain an instance of SceneLayer from the subsystem API first
SceneLayer sceneLayer = ...;
sceneLayer.SetCamera(camera);
```

### SetPostfxFromConfig
`public void SetPostfxFromConfig()`

**Purpose:** Assigns a new value to `postfx from config` and updates the object's internal state.

```csharp
// Obtain an instance of SceneLayer from the subsystem API first
SceneLayer sceneLayer = ...;
sceneLayer.SetPostfxFromConfig();
```

### WorldPointToScreenPoint
`public Vec2 WorldPointToScreenPoint(Vec3 position)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SceneLayer from the subsystem API first
SceneLayer sceneLayer = ...;
var result = sceneLayer.WorldPointToScreenPoint(position);
```

### ScreenPointToViewportPoint
`public Vec2 ScreenPointToViewportPoint(Vec2 position)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SceneLayer from the subsystem API first
SceneLayer sceneLayer = ...;
var result = sceneLayer.ScreenPointToViewportPoint(position);
```

### ProjectedMousePositionOnGround
`public bool ProjectedMousePositionOnGround(out Vec3 groundPosition, out Vec3 groundNormal, bool mouseVisible, BodyFlags excludeBodyOwnerFlags, bool checkOccludedSurface)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SceneLayer from the subsystem API first
SceneLayer sceneLayer = ...;
var result = sceneLayer.ProjectedMousePositionOnGround(groundPosition, groundNormal, false, excludeBodyOwnerFlags, false);
```

### TranslateMouse
`public void TranslateMouse(ref Vec3 worldMouseNear, ref Vec3 worldMouseFar, float maxDistance = -1f)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SceneLayer from the subsystem API first
SceneLayer sceneLayer = ...;
sceneLayer.TranslateMouse(worldMouseNear, worldMouseFar, 0);
```

### SetSceneUsesSkybox
`public void SetSceneUsesSkybox(bool value)`

**Purpose:** Assigns a new value to `scene uses skybox` and updates the object's internal state.

```csharp
// Obtain an instance of SceneLayer from the subsystem API first
SceneLayer sceneLayer = ...;
sceneLayer.SetSceneUsesSkybox(false);
```

### SetSceneUsesShadows
`public void SetSceneUsesShadows(bool value)`

**Purpose:** Assigns a new value to `scene uses shadows` and updates the object's internal state.

```csharp
// Obtain an instance of SceneLayer from the subsystem API first
SceneLayer sceneLayer = ...;
sceneLayer.SetSceneUsesShadows(false);
```

### SetSceneUsesContour
`public void SetSceneUsesContour(bool value)`

**Purpose:** Assigns a new value to `scene uses contour` and updates the object's internal state.

```csharp
// Obtain an instance of SceneLayer from the subsystem API first
SceneLayer sceneLayer = ...;
sceneLayer.SetSceneUsesContour(false);
```

### SetShadowmapResolutionMultiplier
`public void SetShadowmapResolutionMultiplier(float value)`

**Purpose:** Assigns a new value to `shadowmap resolution multiplier` and updates the object's internal state.

```csharp
// Obtain an instance of SceneLayer from the subsystem API first
SceneLayer sceneLayer = ...;
sceneLayer.SetShadowmapResolutionMultiplier(0);
```

### SetFocusedShadowmap
`public void SetFocusedShadowmap(bool enable, ref Vec3 center, float radius)`

**Purpose:** Assigns a new value to `focused shadowmap` and updates the object's internal state.

```csharp
// Obtain an instance of SceneLayer from the subsystem API first
SceneLayer sceneLayer = ...;
sceneLayer.SetFocusedShadowmap(false, center, 0);
```

### DoNotClear
`public void DoNotClear(bool value)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SceneLayer from the subsystem API first
SceneLayer sceneLayer = ...;
sceneLayer.DoNotClear(false);
```

### ReadyToRender
`public bool ReadyToRender()`

**Purpose:** Reads the data or state of `y to render`.

```csharp
// Obtain an instance of SceneLayer from the subsystem API first
SceneLayer sceneLayer = ...;
var result = sceneLayer.ReadyToRender();
```

### SetCleanScreenUntilLoadingDone
`public void SetCleanScreenUntilLoadingDone(bool value)`

**Purpose:** Assigns a new value to `clean screen until loading done` and updates the object's internal state.

```csharp
// Obtain an instance of SceneLayer from the subsystem API first
SceneLayer sceneLayer = ...;
sceneLayer.SetCleanScreenUntilLoadingDone(false);
```

### ClearAll
`public void ClearAll()`

**Purpose:** Removes all `all` from the current object.

```csharp
// Obtain an instance of SceneLayer from the subsystem API first
SceneLayer sceneLayer = ...;
sceneLayer.ClearAll();
```

### ClearRuntimeGPUMemory
`public void ClearRuntimeGPUMemory(bool remove_terrain)`

**Purpose:** Removes all `runtime g p u memory` from the current object.

```csharp
// Obtain an instance of SceneLayer from the subsystem API first
SceneLayer sceneLayer = ...;
sceneLayer.ClearRuntimeGPUMemory(false);
```

### HitTest
`public override bool HitTest(Vector2 position)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SceneLayer from the subsystem API first
SceneLayer sceneLayer = ...;
var result = sceneLayer.HitTest(position);
```

### HitTest
`public override bool HitTest()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SceneLayer from the subsystem API first
SceneLayer sceneLayer = ...;
var result = sceneLayer.HitTest();
```

### FocusTest
`public override bool FocusTest()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SceneLayer from the subsystem API first
SceneLayer sceneLayer = ...;
var result = sceneLayer.FocusTest();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SceneLayer sceneLayer = ...;
sceneLayer.SetScene(scene);
```

## See Also

- [Area Index](../)