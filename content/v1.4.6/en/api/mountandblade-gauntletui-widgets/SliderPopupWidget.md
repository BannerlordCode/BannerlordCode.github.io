---
title: "SliderPopupWidget"
description: "SliderPopupWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 6 exposed members (1 methods, 4 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/SliderPopupWidget.cs."
---
# SliderPopupWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class SliderPopupWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/SliderPopupWidget.cs`

## Overview

SliderPopupWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/SliderPopupWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is SliderPopupWidget → Widget. It exposes 6 public/protected members: 1 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SliderPopupWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement) the module directory; inheritance chain SliderPopupWidget → Widget. The surface is property-led (properties 4/6, methods 1/6), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/SliderPopupWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SliderPopupWidget` | `public SliderPopupWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `PopupParentWidget` | `public Widget PopupParentWidget` | property |
| `ClosePopupWidget` | `public ButtonWidget ClosePopupWidget` | property |
| `SliderValueTextWidget` | `public TextWidget SliderValueTextWidget` | property |
| `ReserveAmountSlider` | `public SliderWidget ReserveAmountSlider` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AutoClosePopupClosingWidget](../AutoClosePopupClosingWidget)
- [same namespace AutoClosePopupWidget](../AutoClosePopupWidget)
- [same namespace DescriptionItemVisualBrushWidget](../DescriptionItemVisualBrushWidget)
- [same namespace DevelopmentItemButtonWidget](../DevelopmentItemButtonWidget)
