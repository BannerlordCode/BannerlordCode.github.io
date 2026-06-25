---
title: "GauntletMapBattleSimulationView"
description: "Auto-generated class reference for GauntletMapBattleSimulationView."
---
# GauntletMapBattleSimulationView

**Namespace:** SandBox.GauntletUI.Map
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMapBattleSimulationView : MapView`
**Base:** `MapView`
**File:** `Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Map/GauntletMapBattleSimulationView.cs`

## Overview

`GauntletMapBattleSimulationView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `GauntletMapBattleSimulationView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
GauntletMapBattleSimulationView view = ...;
```

## See Also

- [Area Index](../)