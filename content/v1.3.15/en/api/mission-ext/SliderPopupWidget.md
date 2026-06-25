---
title: "SliderPopupWidget"
description: "Auto-generated class reference for SliderPopupWidget."
---
# SliderPopupWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SliderPopupWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/SliderPopupWidget.cs`

## Overview

`SliderPopupWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `SliderPopupWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `PopupParentWidget` | `public Widget PopupParentWidget { get; set; }` |
| `ClosePopupWidget` | `public ButtonWidget ClosePopupWidget { get; set; }` |
| `SliderValueTextWidget` | `public TextWidget SliderValueTextWidget { get; set; }` |
| `ReserveAmountSlider` | `public SliderWidget ReserveAmountSlider { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
SliderPopupWidget widget = ...;
```

## See Also

- [Area Index](../)