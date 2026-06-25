---
title: "CircleItemPlacerWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CircleItemPlacerWidget`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CircleItemPlacerWidget

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class CircleItemPlacerWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI/CircleItemPlacerWidget.cs`

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

**Purpose:** Handles logic related to `animate distance from center to`.

## Usage Example

```csharp
var widget = new CircleItemPlacerWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)