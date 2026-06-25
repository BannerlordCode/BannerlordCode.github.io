---
title: "MenuBaseView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MenuBaseView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MenuBaseView

**Namespace:** SandBox.View.Menu
**Module:** SandBox.View
**Type:** `public class MenuBaseView : MenuView`
**Base:** `MenuView`
**File:** `SandBox.View/Menu/MenuBaseView.cs`

## Overview

`MenuBaseView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MenuBaseView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var view = new MenuBaseView();
```

## See Also

- [Complete Class Catalog](../catalog)