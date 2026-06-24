<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletMenuTownManagementView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletMenuTownManagementView

**Namespace:** SandBox.GauntletUI.Menu
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMenuTownManagementView : MenuView`
**Base:** `MenuView`
**File:** `SandBox.GauntletUI/Menu/GauntletMenuTownManagementView.cs`

## Overview

`GauntletMenuTownManagementView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `GauntletMenuTownManagementView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var view = new GauntletMenuTownManagementView();
```

## See Also

- [Complete Class Catalog](../catalog)