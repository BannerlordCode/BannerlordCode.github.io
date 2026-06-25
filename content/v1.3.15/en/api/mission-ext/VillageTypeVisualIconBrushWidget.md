---
title: "VillageTypeVisualIconBrushWidget"
description: "Auto-generated class reference for VillageTypeVisualIconBrushWidget."
---
# VillageTypeVisualIconBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Menu.TownManagement
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class VillageTypeVisualIconBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Menu/TownManagement/VillageTypeVisualIconBrushWidget.cs`

## Overview

`VillageTypeVisualIconBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `VillageTypeVisualIconBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `VillageType` | `public int VillageType { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
VillageTypeVisualIconBrushWidget widget = ...;
```

## See Also

- [Area Index](../)