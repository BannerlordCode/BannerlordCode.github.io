<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapReadyView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapReadyView

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapReadyView : MapView`
**Base:** `MapView`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Map/MapReadyView.cs`

## Overview

`MapReadyView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MapReadyView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SetIsMapSceneReady
`public virtual void SetIsMapSceneReady(bool isReady)`

**Purpose:** Sets the value or state of `is map scene ready`.

## Usage Example

```csharp
var view = new MapReadyView();
```

## See Also

- [Complete Class Catalog](../catalog)