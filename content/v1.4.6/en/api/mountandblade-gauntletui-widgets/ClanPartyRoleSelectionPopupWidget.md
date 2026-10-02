---
title: "ClanPartyRoleSelectionPopupWidget"
description: "ClanPartyRoleSelectionPopupWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting AutoClosePopupWidget; 4 exposed members (2 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Clan/ClanPartyRoleSelectionPopupWidget.cs."
---
# ClanPartyRoleSelectionPopupWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Clan`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ClanPartyRoleSelectionPopupWidget : AutoClosePopupWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Clan/ClanPartyRoleSelectionPopupWidget.cs`

## Overview

ClanPartyRoleSelectionPopupWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Clan/ClanPartyRoleSelectionPopupWidget.cs. It is a public class, implementing/inheriting AutoClosePopupWidget; the inheritance chain is ClanPartyRoleSelectionPopupWidget → AutoClosePopupWidget → Widget. It exposes 4 public/protected members: 2 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanPartyRoleSelectionPopupWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Clan) the module directory; inheritance chain ClanPartyRoleSelectionPopupWidget → AutoClosePopupWidget → Widget. The surface is method-led (methods 2/4, properties 1/4), so it mostly exposes operations. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Clan/ClanPartyRoleSelectionPopupWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ClanPartyRoleSelectionPopupWidget` | `public ClanPartyRoleSelectionPopupWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `AddToggleWidget` | `public void AddToggleWidget(Widget widget)` | method |
| `ActiveToggleWidget` | `public Widget ActiveToggleWidget` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface AutoClosePopupWidget](../AutoClosePopupWidget)
- [same namespace ClanFinancePaymentSliderWidget](../ClanFinancePaymentSliderWidget)
- [same namespace ClanFinanceTextWidget](../ClanFinanceTextWidget)
- [same namespace ClanLordStatusWidget](../ClanLordStatusWidget)
- [same namespace ClanPartyRoleSelectionToggleWidget](../ClanPartyRoleSelectionToggleWidget)
