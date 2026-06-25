---
title: "CounterTextBrushWidget"
description: "Auto-generated class reference for CounterTextBrushWidget."
---
# CounterTextBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CounterTextBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/CounterTextBrushWidget.cs`

## Overview

`CounterTextBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `CounterTextBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `CounterTime` | `public float CounterTime { get; set; }` |
| `IntTarget` | `public int IntTarget { get; set; }` |
| `FloatTarget` | `public float FloatTarget { get; set; }` |
| `MinValue` | `public float MinValue { get; set; }` |
| `MaxValue` | `public float MaxValue { get; set; }` |
| `ShowSign` | `public bool ShowSign { get; set; }` |
| `Clamped` | `public bool Clamped { get; set; }` |
| `ShowFloatingPoint` | `public bool ShowFloatingPoint { get; set; }` |

## Key Methods

### SetInitialValue
`public void SetInitialValue(float value)`

**Purpose:** Assigns a new value to initial value and updates the object's internal state.

```csharp
// Obtain an instance of CounterTextBrushWidget from the subsystem API first
CounterTextBrushWidget counterTextBrushWidget = ...;
counterTextBrushWidget.SetInitialValue(0);
```

### ForceSetValue
`public void ForceSetValue(float value)`

**Purpose:** Executes the ForceSetValue logic.

```csharp
// Obtain an instance of CounterTextBrushWidget from the subsystem API first
CounterTextBrushWidget counterTextBrushWidget = ...;
counterTextBrushWidget.ForceSetValue(0);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
CounterTextBrushWidget widget = ...;
```

## See Also

- [Area Index](../)