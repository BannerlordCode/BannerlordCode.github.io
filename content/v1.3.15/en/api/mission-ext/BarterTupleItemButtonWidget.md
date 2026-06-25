---
title: "BarterTupleItemButtonWidget"
description: "Auto-generated class reference for BarterTupleItemButtonWidget."
---
# BarterTupleItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BarterTupleItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Barter/BarterTupleItemButtonWidget.cs`

## Overview

`BarterTupleItemButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `BarterTupleItemButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `SliderParentList` | `public ListPanel SliderParentList { get; set; }` |
| `CountText` | `public TextWidget CountText { get; set; }` |
| `IsMultiple` | `public bool IsMultiple { get; set; }` |
| `IsOffered` | `public bool IsOffered { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
BarterTupleItemButtonWidget widget = ...;
```

## See Also

- [Area Index](../)