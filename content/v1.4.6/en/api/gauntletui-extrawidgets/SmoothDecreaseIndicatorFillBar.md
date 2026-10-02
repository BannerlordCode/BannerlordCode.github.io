---
title: "SmoothDecreaseIndicatorFillBar"
description: "SmoothDecreaseIndicatorFillBar: a public class in TaleWorlds.GauntletUI.ExtraWidgets, inheriting BrushWidget; 6 exposed members (2 methods, 3 properties, 0 fields). Source: TaleWorlds.GauntletUI.ExtraWidgets/SmoothDecreaseIndicatorFillBar.cs."
---
# SmoothDecreaseIndicatorFillBar

**Namespace:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Module:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Type:** `public class SmoothDecreaseIndicatorFillBar : BrushWidget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/SmoothDecreaseIndicatorFillBar.cs`

## Overview

SmoothDecreaseIndicatorFillBar lives in the TaleWorlds.GauntletUI.ExtraWidgets module, source file TaleWorlds.GauntletUI.ExtraWidgets/SmoothDecreaseIndicatorFillBar.cs. It is a public class, implementing/inheriting BrushWidget; the inheritance chain is SmoothDecreaseIndicatorFillBar → BrushWidget. It exposes 6 public/protected members: 2 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SmoothDecreaseIndicatorFillBar is a top-level type in TaleWorlds.GauntletUI.ExtraWidgets, namespace matching the module directory; inheritance chain SmoothDecreaseIndicatorFillBar → BrushWidget. The surface is property-led (properties 3/6, methods 2/6), so it mostly exposes state for reading. BrushWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI.ExtraWidgets/SmoothDecreaseIndicatorFillBar.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SmoothDecreaseIndicatorFillBar` | `public SmoothDecreaseIndicatorFillBar(UIContext context) : base(context)` | constructor |
| `OnRender` | `protected override void OnRender(TwoDimensionContext twoDimensionContext, TwoDimensionDrawContext drawContext)` | method |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `MaxAmount` | `public float MaxAmount` | property |
| `CurrentAmount` | `public float CurrentAmount` | property |
| `IsVertical` | `public bool IsVertical` | property |

## See Also

- [↑ gauntletui-extrawidgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimatedNumberTextWidget](../AnimatedNumberTextWidget)
- [same namespace CustomWidgetManager](../CustomWidgetManager)
- [same namespace DelayedStateChanger](../DelayedStateChanger)
- [same namespace DialogButtonsParentWidget](../DialogButtonsParentWidget)
