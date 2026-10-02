---
title: "OptionsBrightnessImageSliderWidget"
description: "OptionsBrightnessImageSliderWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting SliderWidget; 5 exposed members (2 methods, 2 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/OptionsBrightnessImageSliderWidget.cs."
---
# OptionsBrightnessImageSliderWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class OptionsBrightnessImageSliderWidget : SliderWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/OptionsBrightnessImageSliderWidget.cs`

## Overview

OptionsBrightnessImageSliderWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/OptionsBrightnessImageSliderWidget.cs. It is a public class, implementing/inheriting SliderWidget; the inheritance chain is OptionsBrightnessImageSliderWidget → SliderWidget. It exposes 5 public/protected members: 2 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: OptionsBrightnessImageSliderWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options) the module directory; inheritance chain OptionsBrightnessImageSliderWidget → SliderWidget. The surface is method-led (methods 2/5, properties 2/5), so it mostly exposes operations. SliderWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/OptionsBrightnessImageSliderWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsMax` | `public bool IsMax` | property |
| `ImageWidget` | `public Widget ImageWidget` | property |
| `OptionsBrightnessImageSliderWidget` | `public OptionsBrightnessImageSliderWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `OnValueFloatChanged` | `protected override void OnValueFloatChanged(float value)` | method |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace OptionsItemWidget](../OptionsItemWidget)
- [same namespace OptionsKeyItemListPanel](../OptionsKeyItemListPanel)
- [same namespace OptionsScreenWidget](../OptionsScreenWidget)
