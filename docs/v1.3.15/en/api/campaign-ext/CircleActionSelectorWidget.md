<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CircleActionSelectorWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CircleActionSelectorWidget

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class CircleActionSelectorWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/CircleActionSelectorWidget.cs`

## Overview

`CircleActionSelectorWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `AllowInvalidSelection` | `public bool AllowInvalidSelection { get { return this._allowInvalidSelection; }` |
| `ActivateOnlyWithController` | `public bool ActivateOnlyWithController { get { return this._activateOnlyWithController; }` |
| `IsCircularInputEnabled` | `public bool IsCircularInputEnabled { get { return !this.IsCircularInputDisabled; }` |
| `IsCircularInputDisabled` | `public bool IsCircularInputDisabled { get { return this._isCircularInputDisabled; }` |
| `DistanceFromCenterModifier` | `public float DistanceFromCenterModifier { get { return this._distanceFromCenterModifier; }` |
| `DirectionWidgetDistanceMultiplier` | `public float DirectionWidgetDistanceMultiplier { get { return this._directionWidgetDistanceMultiplier; }` |
| `DirectionWidget` | `public Widget DirectionWidget { get { return this._directionWidget; }` |

## Key Methods

### AnimateDistanceFromCenterTo
```csharp
public void AnimateDistanceFromCenterTo(float distanceFromCenter, float animationDuration)
```

### TrySetSelectedIndex
```csharp
public bool TrySetSelectedIndex(int index)
```

## Usage Example

```csharp
// Typical usage of CircleActionSelectorWidget (Widget)
// 声明/访问一个 CircleActionSelectorWidget
var widget = root.GetChild("circleActionSelectorWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)