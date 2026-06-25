---
title: "TutorialObjectiveMouseParentWidget"
description: "Auto-generated class reference for TutorialObjectiveMouseParentWidget."
---
# TutorialObjectiveMouseParentWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TutorialObjectiveMouseParentWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial/TutorialObjectiveMouseParentWidget.cs`

## Overview

`TutorialObjectiveMouseParentWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `TutorialObjectiveMouseParentWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MouseBodyWidget` | `public BrushWidget MouseBodyWidget { get; set; }` |
| `MouseLeftClickWidget` | `public BrushWidget MouseLeftClickWidget { get; set; }` |
| `MouseRightClickWidget` | `public BrushWidget MouseRightClickWidget { get; set; }` |
| `MouseMiddleClickWidget` | `public BrushWidget MouseMiddleClickWidget { get; set; }` |
| `KeyId` | `public string KeyId { get; set; }` |
| `MovementType` | `public int MovementType { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
TutorialObjectiveMouseParentWidget widget = ...;
```

## See Also

- [Area Index](../)