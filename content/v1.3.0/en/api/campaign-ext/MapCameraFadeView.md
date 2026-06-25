---
title: "MapCameraFadeView"
description: "Auto-generated class reference for MapCameraFadeView."
---
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

**Purpose:** **Purpose:** Executes the BeginFadeOutAndIn logic.

```csharp
// Obtain an instance of MapCameraFadeView from the subsystem API first
MapCameraFadeView mapCameraFadeView = ...;
mapCameraFadeView.BeginFadeOutAndIn(0, 0, 0);
```

### BeginFadeOut
`public void BeginFadeOut(float fadeOutTime)`

**Purpose:** **Purpose:** Executes the BeginFadeOut logic.

```csharp
// Obtain an instance of MapCameraFadeView from the subsystem API first
MapCameraFadeView mapCameraFadeView = ...;
mapCameraFadeView.BeginFadeOut(0);
```

### BeginFadeIn
`public void BeginFadeIn(float fadeInTime)`

**Purpose:** **Purpose:** Executes the BeginFadeIn logic.

```csharp
// Obtain an instance of MapCameraFadeView from the subsystem API first
MapCameraFadeView mapCameraFadeView = ...;
mapCameraFadeView.BeginFadeIn(0);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MapCameraFadeView view = ...;
```

## See Also

- [Area Index](../)