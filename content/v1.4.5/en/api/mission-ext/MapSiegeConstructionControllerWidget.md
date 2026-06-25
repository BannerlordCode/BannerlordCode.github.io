---
title: "MapSiegeConstructionControllerWidget"
description: "Auto-generated class reference for MapSiegeConstructionControllerWidget."
---
# MapSiegeConstructionControllerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Siege
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapSiegeConstructionControllerWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Siege/MapSiegeConstructionControllerWidget.cs`

## Overview

`MapSiegeConstructionControllerWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MapSiegeConstructionControllerWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SetCurrentPOIWidget
`public void SetCurrentPOIWidget(MapSiegePOIBrushWidget widget)`

**Purpose:** Assigns a new value to `current p o i widget` and updates the object's internal state.

```csharp
// Obtain an instance of MapSiegeConstructionControllerWidget from the subsystem API first
MapSiegeConstructionControllerWidget mapSiegeConstructionControllerWidget = ...;
mapSiegeConstructionControllerWidget.SetCurrentPOIWidget(widget);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MapSiegeConstructionControllerWidget widget = ...;
```

## See Also

- [Area Index](../)