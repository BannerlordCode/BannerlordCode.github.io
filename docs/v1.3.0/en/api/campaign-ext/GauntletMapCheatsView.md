<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletMapCheatsView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletMapCheatsView

**Namespace:** SandBox.GauntletUI.Map
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMapCheatsView : MapCheatsView`
**Base:** `MapCheatsView`
**File:** `SandBox.GauntletUI/Map/GauntletMapCheatsView.cs`

## Overview

`GauntletMapCheatsView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `GauntletMapCheatsView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var view = new GauntletMapCheatsView();
```

## See Also

- [Complete Class Catalog](../catalog)