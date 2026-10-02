---
title: "CounterTextBrushWidget"
description: "CounterTextBrushWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting BrushWidget; 12 exposed members (3 methods, 8 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/CounterTextBrushWidget.cs."
---
# CounterTextBrushWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class CounterTextBrushWidget : BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CounterTextBrushWidget.cs`

## Overview

CounterTextBrushWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/CounterTextBrushWidget.cs. It is a public class, implementing/inheriting BrushWidget; the inheritance chain is CounterTextBrushWidget → BrushWidget. It exposes 12 public/protected members: 3 methods, 8 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CounterTextBrushWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace matching the module directory; inheritance chain CounterTextBrushWidget → BrushWidget. The surface is property-led (properties 8/12, methods 3/12), so it mostly exposes state for reading. BrushWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/CounterTextBrushWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CounterTime` | `public float CounterTime` | property |
| `CounterTextBrushWidget` | `public CounterTextBrushWidget(UIContext context) : base(context)` | constructor |
| `OnRender` | `protected override void OnRender(TwoDimensionContext twoDimensionContext, TwoDimensionDrawContext drawContext)` | method |
| `SetInitialValue` | `public void SetInitialValue(float value)` | method |
| `ForceSetValue` | `public void ForceSetValue(float value)` | method |
| `IntTarget` | `public int IntTarget` | property |
| `FloatTarget` | `public float FloatTarget` | property |
| `MinValue` | `public float MinValue` | property |
| `MaxValue` | `public float MaxValue` | property |
| `ShowSign` | `public bool ShowSign` | property |
| `Clamped` | `public bool Clamped` | property |
| `ShowFloatingPoint` | `public bool ShowFloatingPoint` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AutoHideRichTextWidget](../AutoHideRichTextWidget)
- [same namespace AutoHideTextWidget](../AutoHideTextWidget)
- [same namespace AutoHideZeroTextWidget](../AutoHideZeroTextWidget)
- [same namespace BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager)
