---
title: "OptionsKeyItemListPanel"
description: "OptionsKeyItemListPanel: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting ListPanel; 7 exposed members (3 methods, 3 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/OptionsKeyItemListPanel.cs."
---
# OptionsKeyItemListPanel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class OptionsKeyItemListPanel : ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/OptionsKeyItemListPanel.cs`

## Overview

OptionsKeyItemListPanel lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/OptionsKeyItemListPanel.cs. It is a public class, implementing/inheriting ListPanel; the inheritance chain is OptionsKeyItemListPanel → ListPanel. It exposes 7 public/protected members: 3 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: OptionsKeyItemListPanel is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options) the module directory; inheritance chain OptionsKeyItemListPanel → ListPanel. The surface is method-led (methods 3/7, properties 3/7), so it mostly exposes operations. ListPanel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/OptionsKeyItemListPanel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OptionsKeyItemListPanel` | `public OptionsKeyItemListPanel(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `OnHoverBegin` | `protected override void OnHoverBegin()` | method |
| `OnHoverEnd` | `protected override void OnHoverEnd()` | method |
| `OptionTitle` | `public string OptionTitle` | property |
| `OptionDescription` | `public string OptionDescription` | property |
| `OptionExtraInformation` | `public string OptionExtraInformation` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace OptionsBrightnessImageSliderWidget](../OptionsBrightnessImageSliderWidget)
- [same namespace OptionsItemWidget](../OptionsItemWidget)
- [same namespace OptionsScreenWidget](../OptionsScreenWidget)
