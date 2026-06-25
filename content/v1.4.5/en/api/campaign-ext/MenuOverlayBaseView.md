---
title: "MenuOverlayBaseView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MenuOverlayBaseView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MenuOverlayBaseView

**Namespace:** SandBox.View.Menu
**Module:** SandBox.View
**Type:** `public class MenuOverlayBaseView : MenuView`
**Base:** `MenuView`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Menu/MenuOverlayBaseView.cs`

## Overview

`MenuOverlayBaseView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MenuOverlayBaseView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var view = new MenuOverlayBaseView();
```

## See Also

- [Complete Class Catalog](../catalog)