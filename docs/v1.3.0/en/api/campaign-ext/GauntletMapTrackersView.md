<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletMapTrackersView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletMapTrackersView

**Namespace:** SandBox.GauntletUI.Map
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMapTrackersView : MapTrackersView`
**Base:** `MapTrackersView`
**File:** `SandBox.GauntletUI/Map/GauntletMapTrackersView.cs`

## Overview

`GauntletMapTrackersView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `GauntletMapTrackersView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var view = new GauntletMapTrackersView();
```

## See Also

- [Complete Class Catalog](../catalog)