---
title: "OptionsItemWidget"
description: "OptionsItemWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 19 exposed members (5 methods, 13 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/OptionsItemWidget.cs."
---
# OptionsItemWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class OptionsItemWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/OptionsItemWidget.cs`

## Overview

OptionsItemWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/OptionsItemWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is OptionsItemWidget → Widget. It exposes 19 public/protected members: 5 methods, 13 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: OptionsItemWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options) the module directory; inheritance chain OptionsItemWidget → Widget. The surface is property-led (properties 13/19, methods 5/19), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/OptionsItemWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BooleanOption` | `public Widget BooleanOption` | property |
| `NumericOption` | `public Widget NumericOption` | property |
| `StringOption` | `public Widget StringOption` | property |
| `GameKeyOption` | `public Widget GameKeyOption` | property |
| `ActionOption` | `public Widget ActionOption` | property |
| `InputOption` | `public Widget InputOption` | property |
| `DropdownWidget` | `public AnimatedDropdownWidget DropdownWidget` | property |
| `BooleanToggleButtonWidget` | `public ButtonWidget BooleanToggleButtonWidget` | property |
| `OptionsItemWidget` | `public OptionsItemWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `OnHoverBegin` | `protected override void OnHoverBegin()` | method |
| `OnHoverEnd` | `protected override void OnHoverEnd()` | method |
| `SetCurrentScreenWidget` | `public void SetCurrentScreenWidget(OptionsScreenWidget screenWidget)` | method |
| `OnGamepadNavigationIndexUpdated` | `protected override void OnGamepadNavigationIndexUpdated(int newIndex)` | method |
| `OptionTypeID` | `public int OptionTypeID` | property |
| `IsOptionEnabled` | `public bool IsOptionEnabled` | property |
| `OptionTitle` | `public string OptionTitle` | property |
| `string[]ImageIDs` | `public string[]ImageIDs` | property |
| `OptionDescription` | `public string OptionDescription` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace OptionsBrightnessImageSliderWidget](../OptionsBrightnessImageSliderWidget)
- [same namespace OptionsKeyItemListPanel](../OptionsKeyItemListPanel)
- [same namespace OptionsScreenWidget](../OptionsScreenWidget)
