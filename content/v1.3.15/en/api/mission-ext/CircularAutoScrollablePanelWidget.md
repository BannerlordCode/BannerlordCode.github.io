---
title: "CircularAutoScrollablePanelWidget"
description: "Auto-generated class reference for CircularAutoScrollablePanelWidget."
---
# CircularAutoScrollablePanelWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CircularAutoScrollablePanelWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CircularAutoScrollablePanelWidget.cs`

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
| `ScrollType` | `public CircularAutoScrollablePanelWidget.ScrollMovementType ScrollType { get; set; }` |
| `ShouldResetImmediately` | `public bool ShouldResetImmediately { get; set; }` |

## Key Methods

### SetScrollMouse
`public void SetScrollMouse()`

**Purpose:** Assigns a new value to `scroll mouse` and updates the object's internal state.

```csharp
// Obtain an instance of CircularAutoScrollablePanelWidget from the subsystem API first
CircularAutoScrollablePanelWidget circularAutoScrollablePanelWidget = ...;
circularAutoScrollablePanelWidget.SetScrollMouse();
```

### SetHoverBegin
`public void SetHoverBegin()`

**Purpose:** Assigns a new value to `hover begin` and updates the object's internal state.

```csharp
// Obtain an instance of CircularAutoScrollablePanelWidget from the subsystem API first
CircularAutoScrollablePanelWidget circularAutoScrollablePanelWidget = ...;
circularAutoScrollablePanelWidget.SetHoverBegin();
```

### SetHoverEnd
`public void SetHoverEnd()`

**Purpose:** Assigns a new value to `hover end` and updates the object's internal state.

```csharp
// Obtain an instance of CircularAutoScrollablePanelWidget from the subsystem API first
CircularAutoScrollablePanelWidget circularAutoScrollablePanelWidget = ...;
circularAutoScrollablePanelWidget.SetHoverEnd();
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
CircularAutoScrollablePanelWidget widget = ...;
```

## See Also

- [Area Index](../)