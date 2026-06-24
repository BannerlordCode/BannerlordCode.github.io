<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SceneLayer`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SceneLayer

**Namespace:** TaleWorlds.Engine.Screens
**Module:** TaleWorlds.Engine
**Type:** `public class SceneLayer : ScreenLayer`
**Base:** `ScreenLayer`
**File:** `TaleWorlds.Engine/Screens/SceneLayer.cs`

## Overview

`SceneLayer` lives in `TaleWorlds.Engine.Screens` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine.Screens` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ClearSceneOnFinalize` | `public bool ClearSceneOnFinalize { get; }` |
| `AutoToggleSceneView` | `public bool AutoToggleSceneView { get; }` |
| `SceneView` | `public SceneView SceneView { get; }` |

## Key Methods

### SetScene
`public void SetScene(Scene scene)`

**Purpose:** Sets the value or state of `scene`.

### SetRenderWithPostfx
`public void SetRenderWithPostfx(bool value)`

**Purpose:** Sets the value or state of `render with postfx`.

### SetPostfxConfigParams
`public void SetPostfxConfigParams(int value)`

**Purpose:** Sets the value or state of `postfx config params`.

### SetCamera
`public void SetCamera(Camera camera)`

**Purpose:** Sets the value or state of `camera`.

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

### SetShadowmapResolutionMultiplier
`public void SetShadowmapResolutionMultiplier(float value)`

**Purpose:** Sets the value or state of `shadowmap resolution multiplier`.

### SetFocusedShadowmap
`public void SetFocusedShadowmap(bool enable, ref Vec3 center, float radius)`

**Purpose:** Sets the value or state of `focused shadowmap`.

### DoNotClear
`public void DoNotClear(bool value)`

**Purpose:** Handles logic related to `do not clear`.

### ReadyToRender
`public bool ReadyToRender()`

**Purpose:** Handles logic related to `ready to render`.

### SetCleanScreenUntilLoadingDone
`public void SetCleanScreenUntilLoadingDone(bool value)`

**Purpose:** Sets the value or state of `clean screen until loading done`.

### ClearAll
`public void ClearAll()`

**Purpose:** Handles logic related to `clear all`.

### ClearRuntimeGPUMemory
`public void ClearRuntimeGPUMemory(bool remove_terrain)`

**Purpose:** Handles logic related to `clear runtime g p u memory`.

### HitTest
`public override bool HitTest(Vector2 position)`

**Purpose:** Handles logic related to `hit test`.

### HitTest
`public override bool HitTest()`

**Purpose:** Handles logic related to `hit test`.

### FocusTest
`public override bool FocusTest()`

**Purpose:** Handles logic related to `focus test`.

## Usage Example

```csharp
var value = new SceneLayer();
value.SetScene(scene);
```

## See Also

- [Complete Class Catalog](../catalog)