---
title: "GauntletMapReadyView"
description: "Auto-generated class reference for GauntletMapReadyView."
---
# GauntletMapReadyView

**Namespace:** SandBox.GauntletUI.Map
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMapReadyView : MapReadyView`
**Base:** `MapReadyView`
**File:** `Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Map/GauntletMapReadyView.cs`

## Overview

`GauntletMapReadyView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `GauntletMapReadyView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SetIsMapSceneReady
`public override void SetIsMapSceneReady(bool isReady)`

**Purpose:** **Purpose:** Assigns a new value to is map scene ready and updates the object's internal state.

```csharp
// Obtain an instance of GauntletMapReadyView from the subsystem API first
GauntletMapReadyView gauntletMapReadyView = ...;
gauntletMapReadyView.SetIsMapSceneReady(false);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
GauntletMapReadyView view = ...;
```

## See Also

- [Area Index](../)