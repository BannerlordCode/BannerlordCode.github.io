---
title: "GauntletMapOverlayView"
description: "Auto-generated class reference for GauntletMapOverlayView."
---
# GauntletMapOverlayView

**Namespace:** SandBox.GauntletUI.Map
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMapOverlayView : MapView`
**Base:** `MapView`
**File:** `SandBox.GauntletUI/Map/GauntletMapOverlayView.cs`

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

**Purpose:** Reads and returns the overlay value held by the this instance.

```csharp
// Obtain an instance of GauntletMapOverlayView from the subsystem API first
GauntletMapOverlayView gauntletMapOverlayView = ...;
var result = gauntletMapOverlayView.GetOverlay(mapOverlayType);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
GauntletMapOverlayView view = ...;
```

## See Also

- [Area Index](../)