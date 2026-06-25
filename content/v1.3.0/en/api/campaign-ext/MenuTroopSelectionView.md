---
title: "MenuTroopSelectionView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MenuTroopSelectionView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MenuTroopSelectionView

**Namespace:** SandBox.View.Menu
**Module:** SandBox.View
**Type:** `public class MenuTroopSelectionView : MenuView`
**Base:** `MenuView`
**File:** `SandBox.View/Menu/MenuTroopSelectionView.cs`

## Overview

`MenuTroopSelectionView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MenuTroopSelectionView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var view = new MenuTroopSelectionView();
```

## See Also

- [Complete Class Catalog](../catalog)