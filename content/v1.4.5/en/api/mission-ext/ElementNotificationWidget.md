---
title: "ElementNotificationWidget"
description: "Auto-generated class reference for ElementNotificationWidget."
---
# ElementNotificationWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ElementNotificationWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial/ElementNotificationWidget.cs`

## Overview

`ElementNotificationWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ElementNotificationWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ElementID` | `public string ElementID { get; set; }` |
| `ElementToHighlight` | `public Widget ElementToHighlight { get; set; }` |
| `TutorialFrameWidget` | `public TutorialHighlightItemBrushWidget TutorialFrameWidget { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
ElementNotificationWidget widget = ...;
```

## See Also

- [Area Index](../)