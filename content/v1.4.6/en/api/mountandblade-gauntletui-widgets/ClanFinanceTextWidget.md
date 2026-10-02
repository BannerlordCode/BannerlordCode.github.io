---
title: "ClanFinanceTextWidget"
description: "ClanFinanceTextWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting TextWidget; 3 exposed members (1 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Clan/ClanFinanceTextWidget.cs."
---
# ClanFinanceTextWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Clan`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ClanFinanceTextWidget : TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Clan/ClanFinanceTextWidget.cs`

## Overview

ClanFinanceTextWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Clan/ClanFinanceTextWidget.cs. It is a public class, implementing/inheriting TextWidget; the inheritance chain is ClanFinanceTextWidget → TextWidget. It exposes 3 public/protected members: 1 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanFinanceTextWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Clan) the module directory; inheritance chain ClanFinanceTextWidget → TextWidget. The surface is method-led (methods 1/3, properties 1/3), so it mostly exposes operations. TextWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Clan/ClanFinanceTextWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ClanFinanceTextWidget` | `public ClanFinanceTextWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `NegativeMarkWidget` | `public TextWidget NegativeMarkWidget` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ClanFinancePaymentSliderWidget](../ClanFinancePaymentSliderWidget)
- [same namespace ClanLordStatusWidget](../ClanLordStatusWidget)
- [same namespace ClanPartyRoleSelectionPopupWidget](../ClanPartyRoleSelectionPopupWidget)
- [same namespace ClanPartyRoleSelectionToggleWidget](../ClanPartyRoleSelectionToggleWidget)
