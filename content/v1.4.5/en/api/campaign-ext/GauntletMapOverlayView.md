---
title: "GauntletMapOverlayView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletMapOverlayView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletMapOverlayView

**Namespace:** SandBox.GauntletUI.Map
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMapOverlayView : MapView`
**Base:** `MapView`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Map/GauntletMapOverlayView.cs`

## Overview

`GauntletMapOverlayView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `GauntletMapOverlayView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsInArmyManagement` | `public bool IsInArmyManagement { get; }` |

## Key Methods

### GetOverlay
`public GameMenuOverlay GetOverlay(MapScreen.MapOverlayType mapOverlayType)`

**Purpose:** Gets the current value of `overlay`.

## Usage Example

```csharp
var view = new GauntletMapOverlayView();
```

## See Also

- [Complete Class Catalog](../catalog)