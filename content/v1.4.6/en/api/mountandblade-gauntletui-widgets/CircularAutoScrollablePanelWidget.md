---
title: "CircularAutoScrollablePanelWidget"
description: "CircularAutoScrollablePanelWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 19 exposed members (7 methods, 10 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/CircularAutoScrollablePanelWidget.cs."
---
# CircularAutoScrollablePanelWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class CircularAutoScrollablePanelWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CircularAutoScrollablePanelWidget.cs`

## Overview

CircularAutoScrollablePanelWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/CircularAutoScrollablePanelWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is CircularAutoScrollablePanelWidget → Widget. It exposes 19 public/protected members: 7 methods, 10 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CircularAutoScrollablePanelWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace matching the module directory; inheritance chain CircularAutoScrollablePanelWidget → Widget. The surface is property-led (properties 10/19, methods 7/19), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/CircularAutoScrollablePanelWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CircularAutoScrollablePanelWidget` | `public CircularAutoScrollablePanelWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `OnMouseScroll` | `protected override void OnMouseScroll()` | method |
| `SetScrollMouse` | `public void SetScrollMouse()` | method |
| `OnHoverBegin` | `protected override void OnHoverBegin()` | method |
| `SetHoverBegin` | `public void SetHoverBegin()` | method |
| `OnHoverEnd` | `protected override void OnHoverEnd()` | method |
| `SetHoverEnd` | `public void SetHoverEnd()` | method |
| `InnerPanel` | `public Widget InnerPanel` | property |
| `ClipRect` | `public Widget ClipRect` | property |
| `ScrollRatioPerSecond` | `public float ScrollRatioPerSecond` | property |
| `ScrollPixelsPerSecond` | `public float ScrollPixelsPerSecond` | property |
| `IdleTime` | `public float IdleTime` | property |
| `AutoScrollWhenSelected` | `public bool AutoScrollWhenSelected` | property |
| `AutoScroll` | `public bool AutoScroll` | property |
| `ScrollType` | `public CircularAutoScrollablePanelWidget.ScrollMovementType ScrollType` | property |
| `ShouldResetImmediately` | `public bool ShouldResetImmediately` | property |
| `ScrollMovementType` | `public enum ScrollMovementType` | property |
| `ScrollMovementType` | `public enum ScrollMovementType` | nested type |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AutoHideRichTextWidget](../AutoHideRichTextWidget)
- [same namespace AutoHideTextWidget](../AutoHideTextWidget)
- [same namespace AutoHideZeroTextWidget](../AutoHideZeroTextWidget)
- [same namespace BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager)
