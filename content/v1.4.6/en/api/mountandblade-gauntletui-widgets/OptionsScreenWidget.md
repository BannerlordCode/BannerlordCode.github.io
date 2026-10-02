---
title: "OptionsScreenWidget"
description: "OptionsScreenWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 10 exposed members (3 methods, 6 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/OptionsScreenWidget.cs."
---
# OptionsScreenWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class OptionsScreenWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/OptionsScreenWidget.cs`

## Overview

OptionsScreenWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/OptionsScreenWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is OptionsScreenWidget → Widget. It exposes 10 public/protected members: 3 methods, 6 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: OptionsScreenWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options) the module directory; inheritance chain OptionsScreenWidget → Widget. The surface is property-led (properties 6/10, methods 3/10), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/OptionsScreenWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `VideoMemoryUsageWidget` | `public Widget VideoMemoryUsageWidget` | property |
| `CurrentOptionDescriptionWidget` | `public RichTextWidget CurrentOptionDescriptionWidget` | property |
| `CurrentOptionNameWidget` | `public RichTextWidget CurrentOptionNameWidget` | property |
| `CurrentOptionExtraInformationWidget` | `public RichTextWidget CurrentOptionExtraInformationWidget` | property |
| `CurrentOptionImageWidget` | `public Widget CurrentOptionImageWidget` | property |
| `PerformanceTabToggle` | `public TabToggleWidget PerformanceTabToggle` | property |
| `OptionsScreenWidget` | `public OptionsScreenWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `OnDisconnectedFromRoot` | `protected override void OnDisconnectedFromRoot()` | method |
| `SetCurrentOption` | `public void SetCurrentOption(Widget currentOptionWidget, Sprite newgraphicsSprite)` | method |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace OptionsBrightnessImageSliderWidget](../OptionsBrightnessImageSliderWidget)
- [same namespace OptionsItemWidget](../OptionsItemWidget)
- [same namespace OptionsKeyItemListPanel](../OptionsKeyItemListPanel)
