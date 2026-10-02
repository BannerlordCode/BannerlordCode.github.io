---
title: "ClanPartyRoleSelectionToggleWidget"
description: "ClanPartyRoleSelectionToggleWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting ButtonWidget; 4 exposed members (2 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Clan/ClanPartyRoleSelectionToggleWidget.cs."
---
# ClanPartyRoleSelectionToggleWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Clan`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ClanPartyRoleSelectionToggleWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Clan/ClanPartyRoleSelectionToggleWidget.cs`

## Overview

ClanPartyRoleSelectionToggleWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Clan/ClanPartyRoleSelectionToggleWidget.cs. It is a public class, implementing/inheriting ButtonWidget; the inheritance chain is ClanPartyRoleSelectionToggleWidget → ButtonWidget. It exposes 4 public/protected members: 2 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanPartyRoleSelectionToggleWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Clan) the module directory; inheritance chain ClanPartyRoleSelectionToggleWidget → ButtonWidget. The surface is method-led (methods 2/4, properties 1/4), so it mostly exposes operations. ButtonWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Clan/ClanPartyRoleSelectionToggleWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ClanPartyRoleSelectionToggleWidget` | `public ClanPartyRoleSelectionToggleWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `OnClick` | `protected virtual void OnClick(Widget widget)` | method |
| `Popup` | `public ClanPartyRoleSelectionPopupWidget Popup` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ClanFinancePaymentSliderWidget](../ClanFinancePaymentSliderWidget)
- [same namespace ClanFinanceTextWidget](../ClanFinanceTextWidget)
- [same namespace ClanLordStatusWidget](../ClanLordStatusWidget)
- [same namespace ClanPartyRoleSelectionPopupWidget](../ClanPartyRoleSelectionPopupWidget)
