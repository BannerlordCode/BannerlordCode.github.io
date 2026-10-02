---
title: "ClanFinancePaymentSliderWidget"
description: "ClanFinancePaymentSliderWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting SliderWidget; 9 exposed members (1 methods, 7 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Clan/ClanFinancePaymentSliderWidget.cs."
---
# ClanFinancePaymentSliderWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Clan`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ClanFinancePaymentSliderWidget : SliderWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Clan/ClanFinancePaymentSliderWidget.cs`

## Overview

ClanFinancePaymentSliderWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Clan/ClanFinancePaymentSliderWidget.cs. It is a public class, implementing/inheriting SliderWidget; the inheritance chain is ClanFinancePaymentSliderWidget → SliderWidget. It exposes 9 public/protected members: 1 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanFinancePaymentSliderWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Clan) the module directory; inheritance chain ClanFinancePaymentSliderWidget → SliderWidget. The surface is property-led (properties 7/9, methods 1/9), so it mostly exposes state for reading. SliderWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Clan/ClanFinancePaymentSliderWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ClanFinancePaymentSliderWidget` | `public ClanFinancePaymentSliderWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `InitialFillWidget` | `public Widget InitialFillWidget` | property |
| `NewIncreaseFillWidget` | `public Widget NewIncreaseFillWidget` | property |
| `NewDecreaseFillWidget` | `public Widget NewDecreaseFillWidget` | property |
| `CurrentRatioIndicatorWidget` | `public Widget CurrentRatioIndicatorWidget` | property |
| `CurrentSize` | `public int CurrentSize` | property |
| `TargetSize` | `public int TargetSize` | property |
| `SizeLimit` | `public int SizeLimit` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ClanFinanceTextWidget](../ClanFinanceTextWidget)
- [same namespace ClanLordStatusWidget](../ClanLordStatusWidget)
- [same namespace ClanPartyRoleSelectionPopupWidget](../ClanPartyRoleSelectionPopupWidget)
- [same namespace ClanPartyRoleSelectionToggleWidget](../ClanPartyRoleSelectionToggleWidget)
