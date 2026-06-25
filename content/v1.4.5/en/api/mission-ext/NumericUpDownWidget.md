---
title: "NumericUpDownWidget"
description: "Auto-generated class reference for NumericUpDownWidget."
---
# NumericUpDownWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class NumericUpDownWidget`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/NumericUpDownWidget.cs`

## Overview

`NumericUpDownWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `NumericUpDownWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ShowOneAdded` | `public bool ShowOneAdded { get; set; }` |
| `IntValue` | `public int IntValue { get; set; }` |
| `Value` | `public float Value { get; set; }` |
| `MinValue` | `public float MinValue { get; set; }` |
| `MaxValue` | `public float MaxValue { get; set; }` |
| `TextWidget` | `public TextWidget TextWidget { get; set; }` |
| `UpButton` | `public ButtonWidget UpButton { get; set; }` |
| `DownButton` | `public ButtonWidget DownButton { get; set; }` |

## Key Methods

### NumericUpDownWidget
`public class NumericUpDownWidget(UIContext context)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of NumericUpDownWidget from the subsystem API first
NumericUpDownWidget numericUpDownWidget = ...;
var result = numericUpDownWidget.NumericUpDownWidget(context);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
NumericUpDownWidget widget = ...;
```

## See Also

- [Area Index](../)