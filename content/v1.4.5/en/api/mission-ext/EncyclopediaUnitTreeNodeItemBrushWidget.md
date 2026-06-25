---
title: "EncyclopediaUnitTreeNodeItemBrushWidget"
description: "Auto-generated class reference for EncyclopediaUnitTreeNodeItemBrushWidget."
---
# EncyclopediaUnitTreeNodeItemBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Encyclopedia
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EncyclopediaUnitTreeNodeItemBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Encyclopedia/EncyclopediaUnitTreeNodeItemBrushWidget.cs`

## Overview

`EncyclopediaUnitTreeNodeItemBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `EncyclopediaUnitTreeNodeItemBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsAlternativeUpgrade` | `public bool IsAlternativeUpgrade { get; set; }` |
| `ChildContainer` | `public ListPanel ChildContainer { get; set; }` |
| `LineContainer` | `public Widget LineContainer { get; set; }` |
| `LineBrush` | `public Brush LineBrush { get; set; }` |
| `AlternateLineBrush` | `public Brush AlternateLineBrush { get; set; }` |

## Key Methods

### OnListItemAdded
`public void OnListItemAdded(Widget parentWidget, Widget addedWidget)`

**Purpose:** **Purpose:** Invoked when the list item added event is raised.

```csharp
// Obtain an instance of EncyclopediaUnitTreeNodeItemBrushWidget from the subsystem API first
EncyclopediaUnitTreeNodeItemBrushWidget encyclopediaUnitTreeNodeItemBrushWidget = ...;
encyclopediaUnitTreeNodeItemBrushWidget.OnListItemAdded(parentWidget, addedWidget);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
EncyclopediaUnitTreeNodeItemBrushWidget widget = ...;
```

## See Also

- [Area Index](../)