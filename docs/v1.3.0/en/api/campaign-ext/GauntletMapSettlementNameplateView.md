<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletMapSettlementNameplateView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletMapSettlementNameplateView

**Namespace:** SandBox.GauntletUI.Map
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMapSettlementNameplateView : MapView, IGauntletMapEventVisualHandler`
**Base:** `MapView`
**File:** `SandBox.GauntletUI/Map/GauntletMapSettlementNameplateView.cs`

## Overview

`GauntletMapSettlementNameplateView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `GauntletMapSettlementNameplateView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var view = new GauntletMapSettlementNameplateView();
```

## See Also

- [Complete Class Catalog](../catalog)