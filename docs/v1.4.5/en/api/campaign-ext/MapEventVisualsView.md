<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapEventVisualsView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapEventVisualsView

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapEventVisualsView : MapView`
**Base:** `MapView`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Map/MapEventVisualsView.cs`

## Overview

`MapEventVisualsView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MapEventVisualsView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var view = new MapEventVisualsView();
```

## See Also

- [Complete Class Catalog](../catalog)