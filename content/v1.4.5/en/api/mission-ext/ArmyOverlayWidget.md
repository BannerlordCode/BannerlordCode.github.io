---
title: "ArmyOverlayWidget"
description: "Auto-generated class reference for ArmyOverlayWidget."
---
# ArmyOverlayWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Overlay
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ArmyOverlayWidget`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Overlay/ArmyOverlayWidget.cs`

## Overview

`ArmyOverlayWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ArmyOverlayWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Overlay` | `public Widget Overlay { get; set; }` |
| `ArmyListGridWidget` | `public GridWidget ArmyListGridWidget { get; set; }` |
| `ExtendButton` | `public ButtonWidget ExtendButton { get; set; }` |
| `IsInfoBarExtended` | `public bool IsInfoBarExtended { get; set; }` |
| `PageControlWidget` | `public ContainerPageControlWidget PageControlWidget { get; set; }` |

## Key Methods

### ArmyOverlayWidget
`public class ArmyOverlayWidget(UIContext context)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ArmyOverlayWidget from the subsystem API first
ArmyOverlayWidget armyOverlayWidget = ...;
var result = armyOverlayWidget.ArmyOverlayWidget(context);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
ArmyOverlayWidget widget = ...;
```

## See Also

- [Area Index](../)