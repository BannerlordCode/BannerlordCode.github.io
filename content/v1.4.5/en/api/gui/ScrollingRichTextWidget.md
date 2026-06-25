---
title: "ScrollingRichTextWidget"
description: "Auto-generated class reference for ScrollingRichTextWidget."
---
# ScrollingRichTextWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class ScrollingRichTextWidget : RichTextWidget`
**Base:** `RichTextWidget`
**File:** `bin/TaleWorlds.GauntletUI.ExtraWidgets/TaleWorlds.GauntletUI.ExtraWidgets/ScrollingRichTextWidget.cs`

## Overview

`ScrollingRichTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ScrollingRichTextWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ActualText` | `public string ActualText { get; }` |
| `ScrollOnHoverWidget` | `public Widget ScrollOnHoverWidget { get; set; }` |
| `IsAutoScrolling` | `public bool IsAutoScrolling { get; set; }` |
| `ScrollPerTick` | `public float ScrollPerTick { get; set; }` |
| `InbetweenScrollDuration` | `public float InbetweenScrollDuration { get; set; }` |
| `DefaultTextHorizontalAlignment` | `public TextHorizontalAlignment DefaultTextHorizontalAlignment { get; set; }` |

## Key Methods

### OnBrushChanged
`public override void OnBrushChanged()`

**Purpose:** Invoked when the `brush changed` event is raised.

```csharp
// Obtain an instance of ScrollingRichTextWidget from the subsystem API first
ScrollingRichTextWidget scrollingRichTextWidget = ...;
scrollingRichTextWidget.OnBrushChanged();
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
ScrollingRichTextWidget widget = ...;
```

## See Also

- [Area Index](../)