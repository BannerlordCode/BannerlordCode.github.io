---
title: "FiefProfitTypeVisualBrushWidget"
description: "Auto-generated class reference for FiefProfitTypeVisualBrushWidget."
---
# FiefProfitTypeVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FiefProfitTypeVisualBrushWidget`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/FiefProfitTypeVisualBrushWidget.cs`

## Overview

`FiefProfitTypeVisualBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `FiefProfitTypeVisualBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Type` | `public int Type { get; set; }` |

## Key Methods

### FiefProfitTypeVisualBrushWidget
`public class FiefProfitTypeVisualBrushWidget(UIContext context)`

**Purpose:** **Purpose:** Executes the FiefProfitTypeVisualBrushWidget logic.

```csharp
// Obtain an instance of FiefProfitTypeVisualBrushWidget from the subsystem API first
FiefProfitTypeVisualBrushWidget fiefProfitTypeVisualBrushWidget = ...;
var result = fiefProfitTypeVisualBrushWidget.FiefProfitTypeVisualBrushWidget(context);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
FiefProfitTypeVisualBrushWidget widget = ...;
```

## See Also

- [Area Index](../)