---
title: "MapParleyAnimationParentBrushWidget"
description: "Auto-generated class reference for MapParleyAnimationParentBrushWidget."
---
# MapParleyAnimationParentBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Parley
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapParleyAnimationParentBrushWidget`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Parley/MapParleyAnimationParentBrushWidget.cs`

## Overview

`MapParleyAnimationParentBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MapParleyAnimationParentBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `AnimationDuration` | `public float AnimationDuration { get; set; }` |

## Key Methods

### MapParleyAnimationParentBrushWidget
`public class MapParleyAnimationParentBrushWidget(UIContext context)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MapParleyAnimationParentBrushWidget from the subsystem API first
MapParleyAnimationParentBrushWidget mapParleyAnimationParentBrushWidget = ...;
var result = mapParleyAnimationParentBrushWidget.MapParleyAnimationParentBrushWidget(context);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MapParleyAnimationParentBrushWidget widget = ...;
```

## See Also

- [Area Index](../)