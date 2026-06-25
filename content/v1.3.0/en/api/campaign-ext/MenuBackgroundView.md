---
title: "MenuBackgroundView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MenuBackgroundView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MenuBackgroundView

**Namespace:** SandBox.View.Menu
**Module:** SandBox.View
**Type:** `public class MenuBackgroundView : MenuView`
**Base:** `MenuView`
**File:** `SandBox.View/Menu/MenuBackgroundView.cs`

## Overview

`MenuBackgroundView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MenuBackgroundView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var view = new MenuBackgroundView();
```

## See Also

- [Complete Class Catalog](../catalog)