<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletMapBasicView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletMapBasicView

**Namespace:** SandBox.GauntletUI.Map
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMapBasicView : MapView`
**Base:** `MapView`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Map/GauntletMapBasicView.cs`

## Overview

`GauntletMapBasicView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `GauntletMapBasicView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `GauntletLayer` | `public GauntletLayer GauntletLayer { get; }` |
| `GauntletNameplateLayer` | `public GauntletLayer GauntletNameplateLayer { get; }` |

## Usage Example

```csharp
var view = new GauntletMapBasicView();
```

## See Also

- [Complete Class Catalog](../catalog)