<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletMapEncyclopediaView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletMapEncyclopediaView

**Namespace:** SandBox.GauntletUI.Encyclopedia
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMapEncyclopediaView : MapEncyclopediaView`
**Base:** `MapEncyclopediaView`
**File:** `SandBox.GauntletUI/Encyclopedia/GauntletMapEncyclopediaView.cs`

## Overview

`GauntletMapEncyclopediaView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `GauntletMapEncyclopediaView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CloseEncyclopedia
`public override void CloseEncyclopedia()`

**Purpose:** Handles logic related to `close encyclopedia`.

## Usage Example

```csharp
var view = new GauntletMapEncyclopediaView();
```

## See Also

- [Complete Class Catalog](../catalog)