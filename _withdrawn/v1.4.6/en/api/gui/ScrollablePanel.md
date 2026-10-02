---
title: "ScrollablePanel"
description: "ScrollablePanel: a public class in TaleWorlds.GauntletUI.BaseTypes, inheriting Widget; 33 exposed members (12 methods, 15 properties, 2 fields). Canonical bucket gui. Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ScrollablePanel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ScrollablePanel

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class ScrollablePanel : Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ScrollablePanel.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## Overview

ScrollablePanel lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ScrollablePanel.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is ScrollablePanel → Widget → PropertyOwnerObject. It exposes 33 public/protected members: 12 methods, 15 properties, 2 fields, 1 events, 1 constructors, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ScrollablePanel lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.GauntletUI`), namespace `TaleWorlds.GauntletUI.BaseTypes`, inheritance chain ScrollablePanel → Widget → PropertyOwnerObject. The surface is property-led (properties 15/33, methods 12/33), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ScrollablePanel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Action` | `public event Action<float>OnScroll;` | event |
| `ClipRect` | `public Widget ClipRect` | property |
| `InnerPanel` | `public Widget InnerPanel` | property |
| `ActiveScrollbar` | `public ScrollbarWidget ActiveScrollbar` | property |
| `UpdateScrollbarVisibility` | `public bool UpdateScrollbarVisibility` | property |
| `FixedHeader` | `public Widget FixedHeader` | property |
| `ScrolledHeader` | `public Widget ScrolledHeader` | property |
| `ScrollablePanel` | `public ScrollablePanel(UIContext context) : base(context)` | constructor |
| `ResetTweenSpeed` | `public void ResetTweenSpeed()` | method |
| `OnPreviewMouseScroll` | `protected override bool OnPreviewMouseScroll()` | method |
| `OnPreviewRightStickMovement` | `protected override bool OnPreviewRightStickMovement()` | method |
| `OnMouseScroll` | `protected internal override void OnMouseScroll()` | method |
| `OnRightStickMovement` | `protected internal override void OnRightStickMovement()` | method |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `SetActiveCursor` | `protected void SetActiveCursor(UIContext.MouseCursors cursor)` | method |
| `GetScrollYValueForWidget` | `protected float GetScrollYValueForWidget(Widget widget, float widgetTargetYValue, float offset)` | method |
| `GetScrollXValueForWidget` | `protected float GetScrollXValueForWidget(Widget widget, float widgetTargetXValue, float offset)` | method |
| `ScrollToChild` | `public void ScrollToChild(Widget targetWidget, ScrollablePanel.AutoScrollParameters scrollParameters = null)` | method |
| `SetVerticalScrollTarget` | `public void SetVerticalScrollTarget(float targetValue, float interpolationDuration)` | method |
| `SetHorizontalScrollTarget` | `public void SetHorizontalScrollTarget(float targetValue, float interpolationDuration)` | method |
| `AutoHideScrollBars` | `public bool AutoHideScrollBars` | property |
| `AutoHideScrollBarHandle` | `public bool AutoHideScrollBarHandle` | property |
| `AutoAdjustScrollbarHandleSize` | `public bool AutoAdjustScrollbarHandleSize` | property |
| `OnlyAcceptScrollEventIfCanScroll` | `public bool OnlyAcceptScrollEventIfCanScroll` | property |
| `ReverseInitialScrollBarAlignment` | `public bool ReverseInitialScrollBarAlignment` | property |
| `HorizontalScrollbar` | `public ScrollbarWidget HorizontalScrollbar` | property |
| `VerticalScrollbar` | `public ScrollbarWidget VerticalScrollbar` | property |
| `ControllerScrollSpeed` | `public float ControllerScrollSpeed` | field |
| `MouseScrollSpeed` | `public float MouseScrollSpeed` | field |
| `ScrollbarInterpolationController` | `protected class ScrollbarInterpolationController` | property |
| `AutoScrollParameters` | `public class AutoScrollParameters` | property |
| `ScrollbarInterpolationController` | `protected class ScrollbarInterpolationController` | nested type |
| `AutoScrollParameters` | `public class AutoScrollParameters` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace BasicContainer](../BasicContainer/)
- [same namespace BrushWidget](../BrushWidget/)
- [same namespace ButtonType](../ButtonType/)
- [same namespace ButtonWidget](../ButtonWidget/)
