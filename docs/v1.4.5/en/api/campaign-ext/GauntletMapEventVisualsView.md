<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletMapEventVisualsView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletMapEventVisualsView

**Namespace:** SandBox.GauntletUI.Map
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMapEventVisualsView : MapView, IGauntletMapEventVisualHandler`
**Base:** `MapView`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Map/GauntletMapEventVisualsView.cs`

## Overview

`GauntletMapEventVisualsView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `GauntletMapEventVisualsView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var view = new GauntletMapEventVisualsView();
```

## See Also

- [Complete Class Catalog](../catalog)