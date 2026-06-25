---
title: "GauntletMenuOverlayBaseView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletMenuOverlayBaseView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletMenuOverlayBaseView

**Namespace:** SandBox.GauntletUI.Menu
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMenuOverlayBaseView : MenuView`
**Base:** `MenuView`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Menu/GauntletMenuOverlayBaseView.cs`

## Overview

`GauntletMenuOverlayBaseView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `GauntletMenuOverlayBaseView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var view = new GauntletMenuOverlayBaseView();
```

## See Also

- [Complete Class Catalog](../catalog)