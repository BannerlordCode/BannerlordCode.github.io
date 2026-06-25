---
title: "ArmyOverlayCohesionFillBarWidget"
description: "Auto-generated class reference for ArmyOverlayCohesionFillBarWidget."
---
# ArmyOverlayCohesionFillBarWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Menu.Overlay
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ArmyOverlayCohesionFillBarWidget`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Menu.Overlay/ArmyOverlayCohesionFillBarWidget.cs`

## Overview

`ArmyOverlayCohesionFillBarWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ArmyOverlayCohesionFillBarWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsCohesionWarningEnabled` | `public bool IsCohesionWarningEnabled { get; set; }` |
| `IsArmyLeader` | `public bool IsArmyLeader { get; set; }` |

## Key Methods

### ArmyOverlayCohesionFillBarWidget
`public class ArmyOverlayCohesionFillBarWidget(UIContext context)`

**Purpose:** **Purpose:** Executes the ArmyOverlayCohesionFillBarWidget logic.

```csharp
// Obtain an instance of ArmyOverlayCohesionFillBarWidget from the subsystem API first
ArmyOverlayCohesionFillBarWidget armyOverlayCohesionFillBarWidget = ...;
var result = armyOverlayCohesionFillBarWidget.ArmyOverlayCohesionFillBarWidget(context);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
ArmyOverlayCohesionFillBarWidget widget = ...;
```

## See Also

- [Area Index](../)