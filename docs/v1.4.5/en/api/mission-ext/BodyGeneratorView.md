<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BodyGeneratorView`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BodyGeneratorView

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BodyGeneratorView : IFaceGeneratorHandler`
**Base:** `IFaceGeneratorHandler`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator/BodyGeneratorView.cs`

## Overview

`BodyGeneratorView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `BodyGeneratorView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `DataSource` | `public FaceGenVM DataSource { get; }` |
| `GauntletLayer` | `public GauntletLayer GauntletLayer { get; }` |
| `SceneLayer` | `public SceneLayer SceneLayer { get; }` |
| `BodyGen` | `public BodyGenerator BodyGen { get; }` |

## Key Methods

### ResetFaceToDefault
`public void ResetFaceToDefault()`

**Purpose:** Resets `face to default` to its initial state.

### FaceGenShowDebug
`public static string FaceGenShowDebug(List<string> strings)`

**Purpose:** Handles logic related to `face gen show debug`.

### FaceGenUpdateDeformKeys
`public static string FaceGenUpdateDeformKeys(List<string> strings)`

**Purpose:** Handles logic related to `face gen update deform keys`.

### ReadyToRender
`public bool ReadyToRender()`

**Purpose:** Handles logic related to `ready to render`.

### OnTick
`public void OnTick(float dt)`

**Purpose:** Called when the `tick` event is raised.

### OnFinalize
`public void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### InitCamera
`public static MatrixFrame InitCamera(Camera camera, Vec3 cameraPosition)`

**Purpose:** Initializes the state, resources, or bindings for `camera`.

## Usage Example

```csharp
var view = new BodyGeneratorView();
```

## See Also

- [Complete Class Catalog](../catalog)