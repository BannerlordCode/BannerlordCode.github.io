---
title: "DevelopmentQueueVisualIconWidget"
description: "Auto-generated class reference for DevelopmentQueueVisualIconWidget."
---
# DevelopmentQueueVisualIconWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DevelopmentQueueVisualIconWidget`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement/DevelopmentQueueVisualIconWidget.cs`

## Overview

`DevelopmentQueueVisualIconWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `DevelopmentQueueVisualIconWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `QueueIndex` | `public int QueueIndex { get; set; }` |
| `QueueIconWidget` | `public Widget QueueIconWidget { get; set; }` |
| `InProgressIconWidget` | `public BrushWidget InProgressIconWidget { get; set; }` |

## Key Methods

### DevelopmentQueueVisualIconWidget
`public class DevelopmentQueueVisualIconWidget(UIContext context)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of DevelopmentQueueVisualIconWidget from the subsystem API first
DevelopmentQueueVisualIconWidget developmentQueueVisualIconWidget = ...;
var result = developmentQueueVisualIconWidget.DevelopmentQueueVisualIconWidget(context);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
DevelopmentQueueVisualIconWidget widget = ...;
```

## See Also

- [Area Index](../)