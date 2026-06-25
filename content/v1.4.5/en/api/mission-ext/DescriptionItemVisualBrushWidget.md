---
title: "DescriptionItemVisualBrushWidget"
description: "Auto-generated class reference for DescriptionItemVisualBrushWidget."
---
# DescriptionItemVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DescriptionItemVisualBrushWidget`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement/DescriptionItemVisualBrushWidget.cs`

## Overview

`DescriptionItemVisualBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `DescriptionItemVisualBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Type` | `public int Type { get; set; }` |

## Key Methods

### DescriptionItemVisualBrushWidget
`public class DescriptionItemVisualBrushWidget(UIContext context)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of DescriptionItemVisualBrushWidget from the subsystem API first
DescriptionItemVisualBrushWidget descriptionItemVisualBrushWidget = ...;
var result = descriptionItemVisualBrushWidget.DescriptionItemVisualBrushWidget(context);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
DescriptionItemVisualBrushWidget widget = ...;
```

## See Also

- [Area Index](../)