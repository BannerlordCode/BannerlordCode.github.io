---
title: "CounterTextBrushWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CounterTextBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CounterTextBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CounterTextBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/CounterTextBrushWidget.cs`

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

**Purpose:** Sets the value or state of `initial value`.

### ForceSetValue
`public void ForceSetValue(float value)`

**Purpose:** Handles logic related to `force set value`.

## Usage Example

```csharp
var widget = new CounterTextBrushWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)