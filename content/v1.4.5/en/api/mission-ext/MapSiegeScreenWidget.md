---
title: "MapSiegeScreenWidget"
description: "Auto-generated class reference for MapSiegeScreenWidget."
---
# MapSiegeScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Siege
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapSiegeScreenWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Siege/MapSiegeScreenWidget.cs`

## Overview

`MapSiegeScreenWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MapSiegeScreenWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `DeployableSiegeMachinesPopup` | `public Widget DeployableSiegeMachinesPopup { get; set; }` |

## Key Methods

### SetCurrentButton
`public void SetCurrentButton(MapSiegeMachineButtonWidget button)`

**Purpose:** Assigns a new value to `current button` and updates the object's internal state.

```csharp
// Obtain an instance of MapSiegeScreenWidget from the subsystem API first
MapSiegeScreenWidget mapSiegeScreenWidget = ...;
mapSiegeScreenWidget.SetCurrentButton(button);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MapSiegeScreenWidget widget = ...;
```

## See Also

- [Area Index](../)