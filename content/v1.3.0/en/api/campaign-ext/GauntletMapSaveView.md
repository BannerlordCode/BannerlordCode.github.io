---
title: "GauntletMapSaveView"
description: "Auto-generated class reference for GauntletMapSaveView."
---
# GauntletMapSaveView

**Namespace:** SandBox.GauntletUI.Map
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMapSaveView : MapView`
**Base:** `MapView`
**File:** `SandBox.GauntletUI/Map/GauntletMapSaveView.cs`

## Overview

`GauntletMapSaveView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `GauntletMapSaveView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
GauntletMapSaveView view = ...;
```

## See Also

- [Area Index](../)