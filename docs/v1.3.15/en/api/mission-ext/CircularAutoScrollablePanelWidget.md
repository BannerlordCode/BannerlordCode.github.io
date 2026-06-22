<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CircularAutoScrollablePanelWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CircularAutoScrollablePanelWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CircularAutoScrollablePanelWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CircularAutoScrollablePanelWidget.cs`

## Overview

`CircularAutoScrollablePanelWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `InnerPanel` | `public Widget InnerPanel { get; set; }` |
| `ClipRect` | `public Widget ClipRect { get; set; }` |
| `ScrollRatioPerSecond` | `public float ScrollRatioPerSecond { get; set; }` |
| `ScrollPixelsPerSecond` | `public float ScrollPixelsPerSecond { get; set; }` |
| `IdleTime` | `public float IdleTime { get; set; }` |
| `AutoScrollWhenSelected` | `public bool AutoScrollWhenSelected { get; set; }` |
| `AutoScroll` | `public bool AutoScroll { get; set; }` |
| `ScrollType` | `public CircularAutoScrollablePanelWidget.ScrollMovementType ScrollType { get; set; }` |
| `ShouldResetImmediately` | `public bool ShouldResetImmediately { get; set; }` |

## Key Methods

### SetScrollMouse
```csharp
public void SetScrollMouse()
```

### SetHoverBegin
```csharp
public void SetHoverBegin()
```

### SetHoverEnd
```csharp
public void SetHoverEnd()
```

## Usage Example

```csharp
// Typical usage of CircularAutoScrollablePanelWidget (Widget)
// 声明/访问一个 CircularAutoScrollablePanelWidget
var widget = root.GetChild("circularAutoScrollablePanelWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)