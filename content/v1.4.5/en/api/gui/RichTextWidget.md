---
title: "RichTextWidget"
description: "Auto-generated class reference for RichTextWidget."
---
# RichTextWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class RichTextWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI.BaseTypes/RichTextWidget.cs`

## Overview

`RichTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `RichTextWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `AutoHideIfEmpty` | `public bool AutoHideIfEmpty { get; set; }` |
| `LinkHoverCursorState` | `public string LinkHoverCursorState { get; set; }` |
| `Text` | `public string Text { get; set; }` |
| `CanBreakWords` | `public bool CanBreakWords { get; set; }` |

## Key Methods

### OnBrushChanged
`public override void OnBrushChanged()`

**Purpose:** Invoked when the brush changed event is raised.

```csharp
// Obtain an instance of RichTextWidget from the subsystem API first
RichTextWidget richTextWidget = ...;
richTextWidget.OnBrushChanged();
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
RichTextWidget widget = ...;
```

## See Also

- [Area Index](../)