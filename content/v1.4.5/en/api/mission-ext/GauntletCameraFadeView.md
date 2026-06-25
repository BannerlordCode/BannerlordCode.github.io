---
title: "GauntletCameraFadeView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletCameraFadeView`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletCameraFadeView

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletCameraFadeView : GlobalLayer, IScreenFadeHandler`
**Base:** `GlobalLayer`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI/GauntletCameraFadeView.cs`

## Overview

`GauntletCameraFadeView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `GauntletCameraFadeView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### Initialize
`public static void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### BeginFadeOutAndIn
`public void BeginFadeOutAndIn(float fadeOutDuration = 0.5f, float blackOutDuration = 0.5f, float fadeInDuration = 0.5f)`

**Purpose:** Handles logic related to `begin fade out and in`.

### BeginFadeOut
`public void BeginFadeOut(float fadeOutDuration = 0.5f)`

**Purpose:** Handles logic related to `begin fade out`.

### BeginFadeIn
`public void BeginFadeIn(float fadeInDuration = 0.5f)`

**Purpose:** Handles logic related to `begin fade in`.

### GetScreenFadeState
`public ScreenFadeState GetScreenFadeState()`

**Purpose:** Gets the current value of `screen fade state`.

## Usage Example

```csharp
var view = new GauntletCameraFadeView();
```

## See Also

- [Complete Class Catalog](../catalog)