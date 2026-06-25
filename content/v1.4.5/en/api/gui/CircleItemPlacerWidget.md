---
title: "CircleItemPlacerWidget"
description: "Auto-generated class reference for CircleItemPlacerWidget."
---
# CircleItemPlacerWidget

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class CircleItemPlacerWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI/CircleItemPlacerWidget.cs`

## Overview

`CircleItemPlacerWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `CircleItemPlacerWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `DistanceFromCenterModifier` | `public float DistanceFromCenterModifier { get; set; }` |
| `DirectionWidget` | `public Widget DirectionWidget { get; set; }` |
| `DirectionWidgetDistanceMultiplier` | `public float DirectionWidgetDistanceMultiplier { get; set; }` |
| `ActivateOnlyWithController` | `public bool ActivateOnlyWithController { get; set; }` |

## Key Methods

### AnimateDistanceFromCenterTo
`public void AnimateDistanceFromCenterTo(float distanceFromCenter, float animationDuration)`

**Purpose:** **Purpose:** Executes the AnimateDistanceFromCenterTo logic.

```csharp
// Obtain an instance of CircleItemPlacerWidget from the subsystem API first
CircleItemPlacerWidget circleItemPlacerWidget = ...;
circleItemPlacerWidget.AnimateDistanceFromCenterTo(0, 0);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
CircleItemPlacerWidget widget = ...;
```

## See Also

- [Area Index](../)