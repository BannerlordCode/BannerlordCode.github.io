---
title: "MapInfoBarWidget"
description: "Auto-generated class reference for MapInfoBarWidget."
---
# MapInfoBarWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapBar
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapInfoBarWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MapBar/MapInfoBarWidget.cs`

## Overview

`MapInfoBarWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MapInfoBarWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ExtendButtonWidget` | `public ButtonWidget ExtendButtonWidget { get; set; }` |
| `IsInfoBarExtended` | `public bool IsInfoBarExtended { get; set; }` |

## Key Methods

### MapBarExtendStateChangeEvent
`public delegate void MapBarExtendStateChangeEvent(bool newState)`

**Purpose:** Executes the MapBarExtendStateChangeEvent logic.

```csharp
// Obtain an instance of MapInfoBarWidget from the subsystem API first
MapInfoBarWidget mapInfoBarWidget = ...;
mapInfoBarWidget.MapBarExtendStateChangeEvent(false);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MapInfoBarWidget widget = ...;
```

## See Also

- [Area Index](../)