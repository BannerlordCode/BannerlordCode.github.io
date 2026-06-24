<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletMenuBaseView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletMenuBaseView

**Namespace:** SandBox.GauntletUI.Menu
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMenuBaseView : MenuView`
**Base:** `MenuView`
**File:** `SandBox.GauntletUI/Menu/GauntletMenuBaseView.cs`

## Overview

`GauntletMenuBaseView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `GauntletMenuBaseView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `GameMenuDataSource` | `public GameMenuVM GameMenuDataSource { get; }` |

## Usage Example

```csharp
var view = new GauntletMenuBaseView();
```

## See Also

- [Complete Class Catalog](../catalog)