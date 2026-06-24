<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapCameraFadeView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapCameraFadeView

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapCameraFadeView : MapView`
**Base:** `MapView`
**File:** `SandBox.View/Map/MapCameraFadeView.cs`

## Overview

`MapCameraFadeView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MapCameraFadeView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `FadeAlpha` | `public float FadeAlpha { get; }` |
| `FadeState` | `public MapCameraFadeView.CameraFadeState FadeState { get; }` |
| `IsCameraFading` | `public bool IsCameraFading { get; }` |
| `HasCameraFadeOut` | `public bool HasCameraFadeOut { get; }` |
| `HasCameraFadeIn` | `public bool HasCameraFadeIn { get; }` |

## Key Methods

### BeginFadeOutAndIn
`public void BeginFadeOutAndIn(float fadeOutTime, float blackTime, float fadeInTime)`

**Purpose:** Handles logic related to `begin fade out and in`.

### BeginFadeOut
`public void BeginFadeOut(float fadeOutTime)`

**Purpose:** Handles logic related to `begin fade out`.

### BeginFadeIn
`public void BeginFadeIn(float fadeInTime)`

**Purpose:** Handles logic related to `begin fade in`.

## Usage Example

```csharp
var view = new MapCameraFadeView();
```

## See Also

- [Complete Class Catalog](../catalog)