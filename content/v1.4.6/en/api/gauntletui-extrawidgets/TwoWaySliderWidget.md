---
title: "TwoWaySliderWidget"
description: "TwoWaySliderWidget: a public class in TaleWorlds.GauntletUI.ExtraWidgets, inheriting SliderWidget; 4 exposed members (1 methods, 2 properties, 0 fields). Source: TaleWorlds.GauntletUI.ExtraWidgets/TwoWaySliderWidget.cs."
---
# TwoWaySliderWidget

**Namespace:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Module:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Type:** `public class TwoWaySliderWidget : SliderWidget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/TwoWaySliderWidget.cs`

## Overview

TwoWaySliderWidget lives in the TaleWorlds.GauntletUI.ExtraWidgets module, source file TaleWorlds.GauntletUI.ExtraWidgets/TwoWaySliderWidget.cs. It is a public class, implementing/inheriting SliderWidget; the inheritance chain is TwoWaySliderWidget → SliderWidget. It exposes 4 public/protected members: 1 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TwoWaySliderWidget is a top-level type in TaleWorlds.GauntletUI.ExtraWidgets, namespace matching the module directory; inheritance chain TwoWaySliderWidget → SliderWidget. The surface is property-led (properties 2/4, methods 1/4), so it mostly exposes state for reading. SliderWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI.ExtraWidgets/TwoWaySliderWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TwoWaySliderWidget` | `public TwoWaySliderWidget(UIContext context) : base(context)` | constructor |
| `OnValueIntChanged` | `protected override void OnValueIntChanged(int value)` | method |
| `ChangeFillWidget` | `public BrushWidget ChangeFillWidget` | property |
| `BaseValueInt` | `public int BaseValueInt` | property |

## See Also

- [↑ gauntletui-extrawidgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimatedNumberTextWidget](../AnimatedNumberTextWidget)
- [same namespace CustomWidgetManager](../CustomWidgetManager)
- [same namespace DelayedStateChanger](../DelayedStateChanger)
- [same namespace DialogButtonsParentWidget](../DialogButtonsParentWidget)
