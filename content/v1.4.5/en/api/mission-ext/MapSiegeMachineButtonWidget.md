---
title: "MapSiegeMachineButtonWidget"
description: "Auto-generated class reference for MapSiegeMachineButtonWidget."
---
# MapSiegeMachineButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Siege
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapSiegeMachineButtonWidget`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Siege/MapSiegeMachineButtonWidget.cs`

## Overview

`MapSiegeMachineButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MapSiegeMachineButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ColoredImageWidget` | `public Widget ColoredImageWidget { get; set; }` |
| `IsDeploymentTarget` | `public bool IsDeploymentTarget { get; set; }` |
| `MachineID` | `public string MachineID { get; set; }` |

## Key Methods

### MapSiegeMachineButtonWidget
`public class MapSiegeMachineButtonWidget(UIContext context)`

**Purpose:** **Purpose:** Executes the MapSiegeMachineButtonWidget logic.

```csharp
// Obtain an instance of MapSiegeMachineButtonWidget from the subsystem API first
MapSiegeMachineButtonWidget mapSiegeMachineButtonWidget = ...;
var result = mapSiegeMachineButtonWidget.MapSiegeMachineButtonWidget(context);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MapSiegeMachineButtonWidget widget = ...;
```

## See Also

- [Area Index](../)