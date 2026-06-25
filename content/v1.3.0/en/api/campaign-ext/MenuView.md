---
title: "MenuView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MenuView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MenuView

**Namespace:** SandBox.View.Menu
**Module:** SandBox.View
**Type:** `public abstract class MenuView : SandboxView`
**Base:** `SandboxView`
**File:** `SandBox.View/Menu/MenuView.cs`

## Overview

`MenuView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MenuView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ShouldUpdateMenuAfterRemoved` | `public virtual bool ShouldUpdateMenuAfterRemoved { get; set; }` |
| `MenuViewContext` | `public MenuViewContext MenuViewContext { get; set; }` |
| `MenuContext` | `public MenuContext MenuContext { get; set; }` |

## Usage Example

```csharp
var implementation = new CustomMenuView();
```

## See Also

- [Complete Class Catalog](../catalog)