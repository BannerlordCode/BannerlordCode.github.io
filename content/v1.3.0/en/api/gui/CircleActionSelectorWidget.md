---
title: "CircleActionSelectorWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CircleActionSelectorWidget`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CircleActionSelectorWidget

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class CircleActionSelectorWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/CircleActionSelectorWidget.cs`

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

**Purpose:** Handles logic related to `animate distance from center to`.

### TrySetSelectedIndex
`public bool TrySetSelectedIndex(int index)`

**Purpose:** Attempts to get `set selected index`, usually returning the result in an out parameter.

## Usage Example

```csharp
var widget = new CircleActionSelectorWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)