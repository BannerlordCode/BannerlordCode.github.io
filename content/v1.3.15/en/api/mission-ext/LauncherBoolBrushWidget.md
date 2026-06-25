---
title: "LauncherBoolBrushWidget"
description: "Auto-generated class reference for LauncherBoolBrushWidget."
---
# LauncherBoolBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library.CustomWidgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherBoolBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/CustomWidgets/LauncherBoolBrushWidget.cs`

## Overview

`LauncherBoolBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `LauncherBoolBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `BoolVariable` | `public bool BoolVariable { get; set; }` |
| `TargetWidget` | `public BrushWidget TargetWidget { get; set; }` |
| `OnTrueBrush` | `public Brush OnTrueBrush { get; set; }` |
| `OnFalseBrush` | `public Brush OnFalseBrush { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
LauncherBoolBrushWidget widget = ...;
```

## See Also

- [Area Index](../)