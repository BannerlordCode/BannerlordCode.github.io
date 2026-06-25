---
title: "EquipmentTypeVisualBrushWidget"
description: "Auto-generated class reference for EquipmentTypeVisualBrushWidget."
---
# EquipmentTypeVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EquipmentTypeVisualBrushWidget`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/EquipmentTypeVisualBrushWidget.cs`

## Overview

`EquipmentTypeVisualBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `EquipmentTypeVisualBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Type` | `public string Type { get; set; }` |

## Key Methods

### EquipmentTypeVisualBrushWidget
`public class EquipmentTypeVisualBrushWidget(UIContext context)`

**Purpose:** **Purpose:** Executes the EquipmentTypeVisualBrushWidget logic.

```csharp
// Obtain an instance of EquipmentTypeVisualBrushWidget from the subsystem API first
EquipmentTypeVisualBrushWidget equipmentTypeVisualBrushWidget = ...;
var result = equipmentTypeVisualBrushWidget.EquipmentTypeVisualBrushWidget(context);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
EquipmentTypeVisualBrushWidget widget = ...;
```

## See Also

- [Area Index](../)