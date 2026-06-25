---
title: "SceneView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SceneView`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Creates a new `scene view` instance or object.

### SetScene
`public void SetScene(Scene scene)`

**Purpose:** Sets the value or state of `scene`.

### SetAcceptGlobalDebugRenderObjects
`public void SetAcceptGlobalDebugRenderObjects(bool value)`

**Purpose:** Sets the value or state of `accept global debug render objects`.

### SetRenderWithPostfx
`public void SetRenderWithPostfx(bool value)`

**Purpose:** Sets the value or state of `render with postfx`.

### SetPostfxConfigParams
`public void SetPostfxConfigParams(int value)`

**Purpose:** Sets the value or state of `postfx config params`.

### SetForceShaderCompilation
`public void SetForceShaderCompilation(bool value)`

**Purpose:** Sets the value or state of `force shader compilation`.

### CheckSceneReadyToRender
`public bool CheckSceneReadyToRender()`

**Purpose:** Handles logic related to `check scene ready to render`.

### SetDoQuickExposure
`public void SetDoQuickExposure(bool value)`

**Purpose:** Sets the value or state of `do quick exposure`.

### SetCamera
`public void SetCamera(Camera camera)`

**Purpose:** Sets the value or state of `camera`.

### SetResolutionScaling
`public void SetResolutionScaling(bool value)`

**Purpose:** Sets the value or state of `resolution scaling`.

### SetPostfxFromConfig
`public void SetPostfxFromConfig()`

**Purpose:** Sets the value or state of `postfx from config`.

### WorldPointToScreenPoint
`public Vec2 WorldPointToScreenPoint(Vec3 position)`

**Purpose:** Handles logic related to `world point to screen point`.

### ScreenPointToViewportPoint
`public Vec2 ScreenPointToViewportPoint(Vec2 position)`

**Purpose:** Handles logic related to `screen point to viewport point`.

### ProjectedMousePositionOnGround
`public bool ProjectedMousePositionOnGround(out Vec3 groundPosition, out Vec3 groundNormal, bool mouseVisible, BodyFlags excludeBodyOwnerFlags, bool checkOccludedSurface)`

**Purpose:** Handles logic related to `projected mouse position on ground`.

### ProjectedMousePositionOnWater
`public bool ProjectedMousePositionOnWater(out Vec3 waterPosition, bool mouseVisible)`

**Purpose:** Handles logic related to `projected mouse position on water`.

### TranslateMouse
`public void TranslateMouse(ref Vec3 worldMouseNear, ref Vec3 worldMouseFar, float maxDistance = -1f)`

**Purpose:** Handles logic related to `translate mouse`.

### SetSceneUsesSkybox
`public void SetSceneUsesSkybox(bool value)`

**Purpose:** Sets the value or state of `scene uses skybox`.

### SetSceneUsesShadows
`public void SetSceneUsesShadows(bool value)`

**Purpose:** Sets the value or state of `scene uses shadows`.

### SetSceneUsesContour
`public void SetSceneUsesContour(bool value)`

**Purpose:** Sets the value or state of `scene uses contour`.

### DoNotClear
`public void DoNotClear(bool value)`

**Purpose:** Handles logic related to `do not clear`.

### AddClearTask
`public void AddClearTask(bool clearOnlySceneview = false)`

**Purpose:** Adds `clear task` to the current collection or state.

### ReadyToRender
`public bool ReadyToRender()`

**Purpose:** Handles logic related to `ready to render`.

### SetClearAndDisableAfterSucessfullRender
`public void SetClearAndDisableAfterSucessfullRender(bool value)`

**Purpose:** Sets the value or state of `clear and disable after sucessfull render`.

### SetClearGbuffer
`public void SetClearGbuffer(bool value)`

**Purpose:** Sets the value or state of `clear gbuffer`.

### SetShadowmapResolutionMultiplier
`public void SetShadowmapResolutionMultiplier(float value)`

**Purpose:** Sets the value or state of `shadowmap resolution multiplier`.

### SetPointlightResolutionMultiplier
`public void SetPointlightResolutionMultiplier(float value)`

**Purpose:** Sets the value or state of `pointlight resolution multiplier`.

### SetCleanScreenUntilLoadingDone
`public void SetCleanScreenUntilLoadingDone(bool value)`

**Purpose:** Sets the value or state of `clean screen until loading done`.

### ClearAll
`public void ClearAll(bool clearScene, bool removeTerrain)`

**Purpose:** Handles logic related to `clear all`.

### SetFocusedShadowmap
`public void SetFocusedShadowmap(bool enable, ref Vec3 center, float radius)`

**Purpose:** Sets the value or state of `focused shadowmap`.

### GetScene
`public Scene GetScene()`

**Purpose:** Gets the current value of `scene`.

### RayCastForClosestEntityOrTerrain
`public bool RayCastForClosestEntityOrTerrain(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, out Vec3 closestPoint, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)`

**Purpose:** Handles logic related to `ray cast for closest entity or terrain`.

## Usage Example

```csharp
var view = new SceneView();
```

## See Also

- [Complete Class Catalog](../catalog)