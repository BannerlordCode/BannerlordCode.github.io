<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletMenuTroopSelectionView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletMenuTroopSelectionView

**Namespace:** SandBox.GauntletUI.Menu
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMenuTroopSelectionView : MenuView`
**Base:** `MenuView`
**File:** `SandBox.GauntletUI/Menu/GauntletMenuTroopSelectionView.cs`

## Overview

`GauntletMenuTroopSelectionView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `GauntletMenuTroopSelectionView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var view = new GauntletMenuTroopSelectionView();
```

## See Also

- [Complete Class Catalog](../catalog)