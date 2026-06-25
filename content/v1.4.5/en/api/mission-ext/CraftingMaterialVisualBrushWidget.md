---
title: "CraftingMaterialVisualBrushWidget"
description: "Auto-generated class reference for CraftingMaterialVisualBrushWidget."
---
# CraftingMaterialVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CraftingMaterialVisualBrushWidget`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting/CraftingMaterialVisualBrushWidget.cs`

## Overview

`CraftingMaterialVisualBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `CraftingMaterialVisualBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaterialType` | `public string MaterialType { get; set; }` |
| `IsBig` | `public bool IsBig { get; set; }` |

## Key Methods

### CraftingMaterialVisualBrushWidget
`public class CraftingMaterialVisualBrushWidget(UIContext context)`

**Purpose:** **Purpose:** Executes the CraftingMaterialVisualBrushWidget logic.

```csharp
// Obtain an instance of CraftingMaterialVisualBrushWidget from the subsystem API first
CraftingMaterialVisualBrushWidget craftingMaterialVisualBrushWidget = ...;
var result = craftingMaterialVisualBrushWidget.CraftingMaterialVisualBrushWidget(context);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
CraftingMaterialVisualBrushWidget widget = ...;
```

## See Also

- [Area Index](../)