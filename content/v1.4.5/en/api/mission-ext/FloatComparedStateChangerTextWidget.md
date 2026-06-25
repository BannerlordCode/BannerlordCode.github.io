---
title: "FloatComparedStateChangerTextWidget"
description: "Auto-generated class reference for FloatComparedStateChangerTextWidget."
---
# FloatComparedStateChangerTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FloatComparedStateChangerTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/FloatComparedStateChangerTextWidget.cs`

## Overview

`FloatComparedStateChangerTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `FloatComparedStateChangerTextWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ComparisonType` | `public ComparisonTypes ComparisonType { get; set; }` |
| `FirstValue` | `public float FirstValue { get; set; }` |
| `SecondValue` | `public float SecondValue { get; set; }` |
| `TrueState` | `public string TrueState { get; set; }` |
| `FalseState` | `public string FalseState { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
FloatComparedStateChangerTextWidget widget = ...;
```

## See Also

- [Area Index](../)