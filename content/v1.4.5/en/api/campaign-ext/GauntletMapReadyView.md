---
title: "GauntletMapReadyView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletMapReadyView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletMapReadyView

**Namespace:** SandBox.GauntletUI.Map
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMapReadyView : MapReadyView`
**Base:** `MapReadyView`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Map/GauntletMapReadyView.cs`

## Overview

`GauntletMapReadyView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `GauntletMapReadyView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SetIsMapSceneReady
`public override void SetIsMapSceneReady(bool isReady)`

**Purpose:** Sets the value or state of `is map scene ready`.

## Usage Example

```csharp
var view = new GauntletMapReadyView();
```

## See Also

- [Complete Class Catalog](../catalog)