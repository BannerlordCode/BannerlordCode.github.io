<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapTrackersView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapTrackersView

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapTrackersView : MapView`
**Base:** `MapView`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Map/MapTrackersView.cs`

## Overview

`MapTrackersView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MapTrackersView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var view = new MapTrackersView();
```

## See Also

- [Complete Class Catalog](../catalog)