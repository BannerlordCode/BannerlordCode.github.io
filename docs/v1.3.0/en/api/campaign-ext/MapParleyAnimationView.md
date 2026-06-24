<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapParleyAnimationView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapParleyAnimationView

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapParleyAnimationView : MapView`
**Base:** `MapView`
**File:** `SandBox.View/Map/MapParleyAnimationView.cs`

## Overview

`MapParleyAnimationView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MapParleyAnimationView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var view = new MapParleyAnimationView();
```

## See Also

- [Complete Class Catalog](../catalog)