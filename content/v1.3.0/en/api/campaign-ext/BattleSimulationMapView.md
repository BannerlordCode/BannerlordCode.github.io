---
title: "BattleSimulationMapView"
description: "Auto-generated class reference for BattleSimulationMapView."
---
# BattleSimulationMapView

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class BattleSimulationMapView : MapView`
**Base:** `MapView`
**File:** `SandBox.View/Map/BattleSimulationMapView.cs`

## Overview

`BattleSimulationMapView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `BattleSimulationMapView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
BattleSimulationMapView view = ...;
```

## See Also

- [Area Index](../)