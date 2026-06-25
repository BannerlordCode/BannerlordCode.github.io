---
title: "ContextMenuBrushWidget"
description: "Auto-generated class reference for ContextMenuBrushWidget."
---
# ContextMenuBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ContextMenuBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/ContextMenuBrushWidget.cs`

## Overview

`ContextMenuBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ContextMenuBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `HorizontalPadding` | `public float HorizontalPadding { get; set; }` |
| `VerticalPadding` | `public float VerticalPadding { get; set; }` |
| `IsActivated` | `public bool IsActivated { get; set; }` |
| `ActionListPanel` | `public ListPanel ActionListPanel { get; set; }` |
| `ScrollPanelToWatch` | `public ScrollablePanel ScrollPanelToWatch { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
ContextMenuBrushWidget widget = ...;
```

## See Also

- [Area Index](../)