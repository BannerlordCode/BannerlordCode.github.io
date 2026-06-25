---
title: "SceneView"
description: "Auto-generated class reference for SceneView."
---
# SceneView

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class SceneView : View`
**Base:** `View`
**File:** `TaleWorlds.Engine/SceneView.cs`

## Overview

`SceneView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `SceneView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CreateSceneView
`public static SceneView CreateSceneView()`

**Purpose:** Constructs a new scene view entity and returns it to the caller.

```csharp
// Static call; no instance required
SceneView.CreateSceneView();
```

### SetScene
`public void SetScene(Scene scene)`

**Purpose:** Assigns a new value to scene and updates the object's internal state.

```csharp
// Obtain an instance of SceneView from the subsystem API first
SceneView sceneView = ...;
sceneView.SetScene(scene);
```

### SetAcceptGlobalDebugRenderObjects
`public void SetAcceptGlobalDebugRenderObjects(bool value)`

**Purpose:** Assigns a new value to accept global debug render objects and updates the object's internal state.

```csharp
// Obtain an instance of SceneView from the subsystem API first
SceneView sceneView = ...;
sceneView.SetAcceptGlobalDebugRenderObjects(false);
```

### SetRenderWithPostfx
`public void SetRenderWithPostfx(bool value)`

**Purpose:** Assigns a new value to render with postfx and updates the object's internal state.

```csharp
// Obtain an instance of SceneView from the subsystem API first
SceneView sceneView = ...;
sceneView.SetRenderWithPostfx(false);
```

### SetPostfxConfigParams
`public void SetPostfxConfigParams(int value)`

**Purpose:** Assigns a new value to postfx config params and updates the object's internal state.

```csharp
// Obtain an instance of SceneView from the subsystem API first
SceneView sceneView = ...;
sceneView.SetPostfxConfigParams(0);
```

### SetForceShaderCompilation
`public void SetForceShaderCompilation(bool value)`

**Purpose:** Assigns a new value to force shader compilation and updates the object's internal state.

```csharp
// Obtain an instance of SceneView from the subsystem API first
SceneView sceneView = ...;
sceneView.SetForceShaderCompilation(false);
```

### CheckSceneReadyToRender
`public bool CheckSceneReadyToRender()`

**Purpose:** Verifies whether scene ready to render holds true for the this instance.

```csharp
// Obtain an instance of SceneView from the subsystem API first
SceneView sceneView = ...;
var result = sceneView.CheckSceneReadyToRender();
```

### SetDoQuickExposure
`public void SetDoQuickExposure(bool value)`

**Purpose:** Assigns a new value to do quick exposure and updates the object's internal state.

```csharp
// Obtain an instance of SceneView from the subsystem API first
SceneView sceneView = ...;
sceneView.SetDoQuickExposure(false);
```

### SetCamera
`public void SetCamera(Camera camera)`

**Purpose:** Assigns a new value to camera and updates the object's internal state.

```csharp
// Obtain an instance of SceneView from the subsystem API first
SceneView sceneView = ...;
sceneView.SetCamera(camera);
```

### SetResolutionScaling
`public void SetResolutionScaling(bool value)`

**Purpose:** Assigns a new value to resolution scaling and updates the object's internal state.

```csharp
// Obtain an instance of SceneView from the subsystem API first
SceneView sceneView = ...;
sceneView.SetResolutionScaling(false);
```

### SetPostfxFromConfig
`public void SetPostfxFromConfig()`

**Purpose:** Assigns a new value to postfx from config and updates the object's internal state.

```csharp
// Obtain an instance of SceneView from the subsystem API first
SceneView sceneView = ...;
sceneView.SetPostfxFromConfig();
```

### WorldPointToScreenPoint
`public Vec2 WorldPointToScreenPoint(Vec3 position)`

**Purpose:** Executes the WorldPointToScreenPoint logic.

```csharp
// Obtain an instance of SceneView from the subsystem API first
SceneView sceneView = ...;
var result = sceneView.WorldPointToScreenPoint(position);
```

### ScreenPointToViewportPoint
`public Vec2 ScreenPointToViewportPoint(Vec2 position)`

**Purpose:** Executes the ScreenPointToViewportPoint logic.

```csharp
// Obtain an instance of SceneView from the subsystem API first
SceneView sceneView = ...;
var result = sceneView.ScreenPointToViewportPoint(position);
```

### ProjectedMousePositionOnGround
`public bool ProjectedMousePositionOnGround(out Vec3 groundPosition, out Vec3 groundNormal, bool mouseVisible, BodyFlags excludeBodyOwnerFlags, bool checkOccludedSurface)`

**Purpose:** Executes the ProjectedMousePositionOnGround logic.

```csharp
// Obtain an instance of SceneView from the subsystem API first
SceneView sceneView = ...;
var result = sceneView.ProjectedMousePositionOnGround(groundPosition, groundNormal, false, excludeBodyOwnerFlags, false);
```

### ProjectedMousePositionOnWater
`public bool ProjectedMousePositionOnWater(out Vec3 waterPosition, bool mouseVisible)`

**Purpose:** Executes the ProjectedMousePositionOnWater logic.

```csharp
// Obtain an instance of SceneView from the subsystem API first
SceneView sceneView = ...;
var result = sceneView.ProjectedMousePositionOnWater(waterPosition, false);
```

### TranslateMouse
`public void TranslateMouse(ref Vec3 worldMouseNear, ref Vec3 worldMouseFar, float maxDistance = -1f)`

**Purpose:** Executes the TranslateMouse logic.

```csharp
// Obtain an instance of SceneView from the subsystem API first
SceneView sceneView = ...;
sceneView.TranslateMouse(worldMouseNear, worldMouseFar, 0);
```

### SetSceneUsesSkybox
`public void SetSceneUsesSkybox(bool value)`

**Purpose:** Assigns a new value to scene uses skybox and updates the object's internal state.

```csharp
// Obtain an instance of SceneView from the subsystem API first
SceneView sceneView = ...;
sceneView.SetSceneUsesSkybox(false);
```

### SetSceneUsesShadows
`public void SetSceneUsesShadows(bool value)`

**Purpose:** Assigns a new value to scene uses shadows and updates the object's internal state.

```csharp
// Obtain an instance of SceneView from the subsystem API first
SceneView sceneView = ...;
sceneView.SetSceneUsesShadows(false);
```

### SetSceneUsesContour
`public void SetSceneUsesContour(bool value)`

**Purpose:** Assigns a new value to scene uses contour and updates the object's internal state.

```csharp
// Obtain an instance of SceneView from the subsystem API first
SceneView sceneView = ...;
sceneView.SetSceneUsesContour(false);
```

### DoNotClear
`public void DoNotClear(bool value)`

**Purpose:** Executes the DoNotClear logic.

```csharp
// Obtain an instance of SceneView from the subsystem API first
SceneView sceneView = ...;
sceneView.DoNotClear(false);
```

### AddClearTask
`public void AddClearTask(bool clearOnlySceneview = false)`

**Purpose:** Adds clear task to the current collection or state.

```csharp
// Obtain an instance of SceneView from the subsystem API first
SceneView sceneView = ...;
sceneView.AddClearTask(false);
```

### ReadyToRender
`public bool ReadyToRender()`

**Purpose:** Reads the data or state of y to render.

```csharp
// Obtain an instance of SceneView from the subsystem API first
SceneView sceneView = ...;
var result = sceneView.ReadyToRender();
```

### SetClearAndDisableAfterSucessfullRender
`public void SetClearAndDisableAfterSucessfullRender(bool value)`

**Purpose:** Assigns a new value to clear and disable after sucessfull render and updates the object's internal state.

```csharp
// Obtain an instance of SceneView from the subsystem API first
SceneView sceneView = ...;
sceneView.SetClearAndDisableAfterSucessfullRender(false);
```

### SetClearGbuffer
`public void SetClearGbuffer(bool value)`

**Purpose:** Assigns a new value to clear gbuffer and updates the object's internal state.

```csharp
// Obtain an instance of SceneView from the subsystem API first
SceneView sceneView = ...;
sceneView.SetClearGbuffer(false);
```

### SetShadowmapResolutionMultiplier
`public void SetShadowmapResolutionMultiplier(float value)`

**Purpose:** Assigns a new value to shadowmap resolution multiplier and updates the object's internal state.

```csharp
// Obtain an instance of SceneView from the subsystem API first
SceneView sceneView = ...;
sceneView.SetShadowmapResolutionMultiplier(0);
```

### SetPointlightResolutionMultiplier
`public void SetPointlightResolutionMultiplier(float value)`

**Purpose:** Assigns a new value to pointlight resolution multiplier and updates the object's internal state.

```csharp
// Obtain an instance of SceneView from the subsystem API first
SceneView sceneView = ...;
sceneView.SetPointlightResolutionMultiplier(0);
```

### SetCleanScreenUntilLoadingDone
`public void SetCleanScreenUntilLoadingDone(bool value)`

**Purpose:** Assigns a new value to clean screen until loading done and updates the object's internal state.

```csharp
// Obtain an instance of SceneView from the subsystem API first
SceneView sceneView = ...;
sceneView.SetCleanScreenUntilLoadingDone(false);
```

### ClearAll
`public void ClearAll(bool clearScene, bool removeTerrain)`

**Purpose:** Removes all all from the this instance.

```csharp
// Obtain an instance of SceneView from the subsystem API first
SceneView sceneView = ...;
sceneView.ClearAll(false, false);
```

### SetFocusedShadowmap
`public void SetFocusedShadowmap(bool enable, ref Vec3 center, float radius)`

**Purpose:** Assigns a new value to focused shadowmap and updates the object's internal state.

```csharp
// Obtain an instance of SceneView from the subsystem API first
SceneView sceneView = ...;
sceneView.SetFocusedShadowmap(false, center, 0);
```

### GetScene
`public Scene GetScene()`

**Purpose:** Reads and returns the scene value held by the this instance.

```csharp
// Obtain an instance of SceneView from the subsystem API first
SceneView sceneView = ...;
var result = sceneView.GetScene();
```

### RayCastForClosestEntityOrTerrain
`public bool RayCastForClosestEntityOrTerrain(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, out Vec3 closestPoint, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)`

**Purpose:** Executes the RayCastForClosestEntityOrTerrain logic.

```csharp
// Obtain an instance of SceneView from the subsystem API first
SceneView sceneView = ...;
var result = sceneView.RayCastForClosestEntityOrTerrain(sourcePoint, targetPoint, collisionDistance, closestPoint, 0, bodyFlags.CommonFocusRayCastExcludeFlags);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
SceneView view = ...;
```

## See Also

- [Area Index](../)