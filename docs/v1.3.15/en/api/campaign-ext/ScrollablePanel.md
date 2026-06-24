<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ScrollablePanel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Resets `tween speed` to its initial state.

### ScrollToChild
`public void ScrollToChild(Widget targetWidget, ScrollablePanel.AutoScrollParameters scrollParameters = null)`

**Purpose:** Handles logic related to `scroll to child`.

### SetVerticalScrollTarget
`public void SetVerticalScrollTarget(float targetValue, float interpolationDuration)`

**Purpose:** Sets the value or state of `vertical scroll target`.

### SetHorizontalScrollTarget
`public void SetHorizontalScrollTarget(float targetValue, float interpolationDuration)`

**Purpose:** Sets the value or state of `horizontal scroll target`.

### SetControlledScrollbar
`public void SetControlledScrollbar(ScrollbarWidget scrollbar)`

**Purpose:** Sets the value or state of `controlled scrollbar`.

### StartInterpolation
`public void StartInterpolation(float targetValue, float duration)`

**Purpose:** Handles logic related to `start interpolation`.

### StopInterpolation
`public void StopInterpolation()`

**Purpose:** Handles logic related to `stop interpolation`.

### GetValue
`public float GetValue()`

**Purpose:** Gets the current value of `value`.

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

## Usage Example

```csharp
var value = new ScrollablePanel();
value.ResetTweenSpeed();
```

## See Also

- [Complete Class Catalog](../catalog)