---
title: "CircularAutoScrollablePanelWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CircularAutoScrollablePanelWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CircularAutoScrollablePanelWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CircularAutoScrollablePanelWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/CircularAutoScrollablePanelWidget.cs`

## Overview

`CircularAutoScrollablePanelWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `CircularAutoScrollablePanelWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
| `ScrollType` | `public ScrollMovementType ScrollType { get; set; }` |
| `ShouldResetImmediately` | `public bool ShouldResetImmediately { get; set; }` |

## Key Methods

### SetScrollMouse
`public void SetScrollMouse()`

**Purpose:** Sets the value or state of `scroll mouse`.

### SetHoverBegin
`public void SetHoverBegin()`

**Purpose:** Sets the value or state of `hover begin`.

### SetHoverEnd
`public void SetHoverEnd()`

**Purpose:** Sets the value or state of `hover end`.

## Usage Example

```csharp
var widget = new CircularAutoScrollablePanelWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)