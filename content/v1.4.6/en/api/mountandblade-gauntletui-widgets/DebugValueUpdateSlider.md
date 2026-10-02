---
title: "DebugValueUpdateSlider"
description: "DebugValueUpdateSlider: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting SliderWidget; 5 exposed members (2 methods, 2 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/DebugValueUpdateSlider.cs."
---
# DebugValueUpdateSlider

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class DebugValueUpdateSlider : SliderWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/DebugValueUpdateSlider.cs`

## Overview

DebugValueUpdateSlider lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/DebugValueUpdateSlider.cs. It is a public class, implementing/inheriting SliderWidget; the inheritance chain is DebugValueUpdateSlider → SliderWidget. It exposes 5 public/protected members: 2 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DebugValueUpdateSlider is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace matching the module directory; inheritance chain DebugValueUpdateSlider → SliderWidget. The surface is method-led (methods 2/5, properties 2/5), so it mostly exposes operations. SliderWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/DebugValueUpdateSlider.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DebugValueUpdateSlider` | `public DebugValueUpdateSlider(UIContext context) : base(context)` | constructor |
| `OnValueIntChanged` | `protected override void OnValueIntChanged(int value)` | method |
| `OnValueFloatChanged` | `protected override void OnValueFloatChanged(float value)` | method |
| `WidgetToUpdate` | `public TextWidget WidgetToUpdate` | property |
| `ValueToUpdate` | `public FillBarVerticalWidget ValueToUpdate` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AutoHideRichTextWidget](../AutoHideRichTextWidget)
- [same namespace AutoHideTextWidget](../AutoHideTextWidget)
- [same namespace AutoHideZeroTextWidget](../AutoHideZeroTextWidget)
- [same namespace BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager)
