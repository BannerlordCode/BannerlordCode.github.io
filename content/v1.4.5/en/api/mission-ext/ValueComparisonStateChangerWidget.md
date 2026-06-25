---
title: "ValueComparisonStateChangerWidget"
description: "Auto-generated class reference for ValueComparisonStateChangerWidget."
---
# ValueComparisonStateChangerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ValueComparisonStateChangerWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/ValueComparisonStateChangerWidget.cs`

## Overview

`ValueComparisonStateChangerWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ValueComparisonStateChangerWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `TargetWidget` | `public Widget TargetWidget { get; set; }` |
| `WatchType` | `public WatchTypes WatchType { get; set; }` |
| `FirstValueInt` | `public int FirstValueInt { get; set; }` |
| `SecondValueInt` | `public int SecondValueInt { get; set; }` |
| `FirstValueFloat` | `public float FirstValueFloat { get; set; }` |
| `SecondValueFloat` | `public float SecondValueFloat { get; set; }` |
| `TrueState` | `public string TrueState { get; set; }` |
| `FalseState` | `public string FalseState { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
ValueComparisonStateChangerWidget widget = ...;
```

## See Also

- [Area Index](../)