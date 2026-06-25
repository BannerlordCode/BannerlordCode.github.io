---
title: "CircleActionSelectorWidget"
description: "Auto-generated class reference for CircleActionSelectorWidget."
---
# CircleActionSelectorWidget

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class CircleActionSelectorWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI/CircleActionSelectorWidget.cs`

## Overview

`CircleActionSelectorWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `CircleActionSelectorWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `AllowInvalidSelection` | `public bool AllowInvalidSelection { get; set; }` |
| `ActivateOnlyWithController` | `public bool ActivateOnlyWithController { get; set; }` |
| `IsCircularInputEnabled` | `public bool IsCircularInputEnabled { get; set; }` |
| `IsCircularInputDisabled` | `public bool IsCircularInputDisabled { get; set; }` |
| `DistanceFromCenterModifier` | `public float DistanceFromCenterModifier { get; set; }` |
| `DirectionWidgetDistanceMultiplier` | `public float DirectionWidgetDistanceMultiplier { get; set; }` |
| `DirectionWidget` | `public Widget DirectionWidget { get; set; }` |

## Key Methods

### AnimateDistanceFromCenterTo
`public void AnimateDistanceFromCenterTo(float distanceFromCenter, float animationDuration)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CircleActionSelectorWidget from the subsystem API first
CircleActionSelectorWidget circleActionSelectorWidget = ...;
circleActionSelectorWidget.AnimateDistanceFromCenterTo(0, 0);
```

### TrySetSelectedIndex
`public bool TrySetSelectedIndex(int index)`

**Purpose:** Attempts to retrieve `set selected index`, usually returning success through an out parameter.

```csharp
// Obtain an instance of CircleActionSelectorWidget from the subsystem API first
CircleActionSelectorWidget circleActionSelectorWidget = ...;
var result = circleActionSelectorWidget.TrySetSelectedIndex(0);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
CircleActionSelectorWidget widget = ...;
```

## See Also

- [Area Index](../)