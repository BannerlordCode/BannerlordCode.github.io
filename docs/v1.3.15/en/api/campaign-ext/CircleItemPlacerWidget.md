<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CircleItemPlacerWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CircleItemPlacerWidget

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class CircleItemPlacerWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/CircleItemPlacerWidget.cs`

## Overview

`CircleItemPlacerWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `DistanceFromCenterModifier` | `public float DistanceFromCenterModifier { get; set; }` |
| `DirectionWidget` | `public Widget DirectionWidget { get; set; }` |
| `DirectionWidgetDistanceMultiplier` | `public float DirectionWidgetDistanceMultiplier { get; set; }` |
| `ActivateOnlyWithController` | `public bool ActivateOnlyWithController { get; set; }` |

## Key Methods

### AnimateDistanceFromCenterTo
```csharp
public void AnimateDistanceFromCenterTo(float distanceFromCenter, float animationDuration)
```

## Usage Example

```csharp
// Typical usage of CircleItemPlacerWidget (Widget)
// 声明/访问一个 CircleItemPlacerWidget
var widget = root.GetChild("circleItemPlacerWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)