<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ScrollablePanel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ScrollablePanel

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `ScrollablePanel` is a class in the `TaleWorlds.GauntletUI.BaseTypes` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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

```csharp
public void ResetTweenSpeed()
```

### ScrollToChild

```csharp
public void ScrollToChild(Widget targetWidget, ScrollablePanel.AutoScrollParameters scrollParameters = null)
```

### SetVerticalScrollTarget

```csharp
public void SetVerticalScrollTarget(float targetValue, float interpolationDuration)
```

### SetHorizontalScrollTarget

```csharp
public void SetHorizontalScrollTarget(float targetValue, float interpolationDuration)
```

### SetControlledScrollbar

```csharp
public void SetControlledScrollbar(ScrollbarWidget scrollbar)
```

### StartInterpolation

```csharp
public void StartInterpolation(float targetValue, float duration)
```

### StopInterpolation

```csharp
public void StopInterpolation()
```

### GetValue

```csharp
public float GetValue()
```

### Tick

```csharp
public void Tick(float dt)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)