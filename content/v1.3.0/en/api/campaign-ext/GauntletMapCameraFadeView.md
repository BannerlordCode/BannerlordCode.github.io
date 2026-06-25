---
title: "GauntletMapCameraFadeView"
description: "Auto-generated class reference for GauntletMapCameraFadeView."
---
# GauntletMapCameraFadeView

**Namespace:** SandBox.GauntletUI.Map
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMapCameraFadeView : MapCameraFadeView`
**Base:** `MapCameraFadeView`
**File:** `SandBox.GauntletUI/Map/GauntletMapCameraFadeView.cs`

## Overview

`GauntletMapCameraFadeView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `GauntletMapCameraFadeView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
GauntletMapCameraFadeView view = ...;
```

## See Also

- [Area Index](../)