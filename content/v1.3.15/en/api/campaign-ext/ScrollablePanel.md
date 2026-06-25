---
title: "ScrollablePanel"
description: "Auto-generated class reference for ScrollablePanel."
---
# ScrollablePanel

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class ScrollablePanel : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ScrollablePanel.cs`

## Overview

`ScrollablePanel` lives in `TaleWorlds.GauntletUI.BaseTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.BaseTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ClipRect` | `public Widget ClipRect { get; set; }` |
| `InnerPanel` | `public Widget InnerPanel { get; set; }` |
| `ActiveScrollbar` | `public ScrollbarWidget ActiveScrollbar { get; set; }` |
| `UpdateScrollbarVisibility` | `public bool UpdateScrollbarVisibility { get; set; }` |
| `FixedHeader` | `public Widget FixedHeader { get; set; }` |
| `ScrolledHeader` | `public Widget ScrolledHeader { get; set; }` |
| `AutoHideScrollBars` | `public bool AutoHideScrollBars { get; set; }` |
| `AutoHideScrollBarHandle` | `public bool AutoHideScrollBarHandle { get; set; }` |
| `AutoAdjustScrollbarHandleSize` | `public bool AutoAdjustScrollbarHandleSize { get; set; }` |
| `OnlyAcceptScrollEventIfCanScroll` | `public bool OnlyAcceptScrollEventIfCanScroll { get; set; }` |
| `ReverseInitialScrollBarAlignment` | `public bool ReverseInitialScrollBarAlignment { get; set; }` |
| `HorizontalScrollbar` | `public ScrollbarWidget HorizontalScrollbar { get; set; }` |
| `VerticalScrollbar` | `public ScrollbarWidget VerticalScrollbar { get; set; }` |
| `IsInterpolating` | `public bool IsInterpolating { get; }` |

## Key Methods

### ResetTweenSpeed
`public void ResetTweenSpeed()`

**Purpose:** Returns `tween speed` to its default or initial condition.

```csharp
// Obtain an instance of ScrollablePanel from the subsystem API first
ScrollablePanel scrollablePanel = ...;
scrollablePanel.ResetTweenSpeed();
```

### ScrollToChild
`public void ScrollToChild(Widget targetWidget, ScrollablePanel.AutoScrollParameters scrollParameters = null)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ScrollablePanel from the subsystem API first
ScrollablePanel scrollablePanel = ...;
scrollablePanel.ScrollToChild(targetWidget, null);
```

### SetVerticalScrollTarget
`public void SetVerticalScrollTarget(float targetValue, float interpolationDuration)`

**Purpose:** Assigns a new value to `vertical scroll target` and updates the object's internal state.

```csharp
// Obtain an instance of ScrollablePanel from the subsystem API first
ScrollablePanel scrollablePanel = ...;
scrollablePanel.SetVerticalScrollTarget(0, 0);
```

### SetHorizontalScrollTarget
`public void SetHorizontalScrollTarget(float targetValue, float interpolationDuration)`

**Purpose:** Assigns a new value to `horizontal scroll target` and updates the object's internal state.

```csharp
// Obtain an instance of ScrollablePanel from the subsystem API first
ScrollablePanel scrollablePanel = ...;
scrollablePanel.SetHorizontalScrollTarget(0, 0);
```

### SetControlledScrollbar
`public void SetControlledScrollbar(ScrollbarWidget scrollbar)`

**Purpose:** Assigns a new value to `controlled scrollbar` and updates the object's internal state.

```csharp
// Obtain an instance of ScrollablePanel from the subsystem API first
ScrollablePanel scrollablePanel = ...;
scrollablePanel.SetControlledScrollbar(scrollbar);
```

### StartInterpolation
`public void StartInterpolation(float targetValue, float duration)`

**Purpose:** Starts the `interpolation` flow or state machine.

```csharp
// Obtain an instance of ScrollablePanel from the subsystem API first
ScrollablePanel scrollablePanel = ...;
scrollablePanel.StartInterpolation(0, 0);
```

### StopInterpolation
`public void StopInterpolation()`

**Purpose:** Stops the `interpolation` flow or state machine.

```csharp
// Obtain an instance of ScrollablePanel from the subsystem API first
ScrollablePanel scrollablePanel = ...;
scrollablePanel.StopInterpolation();
```

### GetValue
`public float GetValue()`

**Purpose:** Reads and returns the `value` value held by the current object.

```csharp
// Obtain an instance of ScrollablePanel from the subsystem API first
ScrollablePanel scrollablePanel = ...;
var result = scrollablePanel.GetValue();
```

### Tick
`public void Tick(float dt)`

**Purpose:** Advances the current object's state by one frame or update cycle.

```csharp
// Obtain an instance of ScrollablePanel from the subsystem API first
ScrollablePanel scrollablePanel = ...;
scrollablePanel.Tick(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ScrollablePanel scrollablePanel = ...;
scrollablePanel.ResetTweenSpeed();
```

## See Also

- [Area Index](../)