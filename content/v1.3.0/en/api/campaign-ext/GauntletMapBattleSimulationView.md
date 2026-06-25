---
title: "GauntletMapBattleSimulationView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletMapBattleSimulationView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletMapBattleSimulationView

**Namespace:** SandBox.GauntletUI.Map
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMapBattleSimulationView : MapView`
**Base:** `MapView`
**File:** `SandBox.GauntletUI/Map/GauntletMapBattleSimulationView.cs`

## Overview

`GauntletMapBattleSimulationView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `GauntletMapBattleSimulationView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var view = new GauntletMapBattleSimulationView();
```

## See Also

- [Complete Class Catalog](../catalog)