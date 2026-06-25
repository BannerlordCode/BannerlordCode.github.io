---
title: "FiefStatTypeVisualBrushWidget"
description: "Auto-generated class reference for FiefStatTypeVisualBrushWidget."
---
# FiefStatTypeVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FiefStatTypeVisualBrushWidget`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/FiefStatTypeVisualBrushWidget.cs`

## Overview

`FiefStatTypeVisualBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `FiefStatTypeVisualBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Type` | `public int Type { get; set; }` |

## Key Methods

### FiefStatTypeVisualBrushWidget
`public class FiefStatTypeVisualBrushWidget(UIContext context)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of FiefStatTypeVisualBrushWidget from the subsystem API first
FiefStatTypeVisualBrushWidget fiefStatTypeVisualBrushWidget = ...;
var result = fiefStatTypeVisualBrushWidget.FiefStatTypeVisualBrushWidget(context);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
FiefStatTypeVisualBrushWidget widget = ...;
```

## See Also

- [Area Index](../)