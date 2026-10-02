---
title: "BoostCohesionPopupWidget"
description: "BoostCohesionPopupWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 4 exposed members (2 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/GatherArmy/BoostCohesionPopupWidget.cs."
---
# BoostCohesionPopupWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.GatherArmy`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class BoostCohesionPopupWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GatherArmy/BoostCohesionPopupWidget.cs`

## Overview

BoostCohesionPopupWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/GatherArmy/BoostCohesionPopupWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is BoostCohesionPopupWidget → Widget. It exposes 4 public/protected members: 2 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BoostCohesionPopupWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.GatherArmy) the module directory; inheritance chain BoostCohesionPopupWidget → Widget. The surface is method-led (methods 2/4, properties 1/4), so it mostly exposes operations. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/GatherArmy/BoostCohesionPopupWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BoostCohesionPopupWidget` | `public BoostCohesionPopupWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `ClosePopup` | `public void ClosePopup(Widget widget)` | method |
| `ClosePopupButton` | `public ButtonWidget ClosePopupButton` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BoostItemButtonWidget](../BoostItemButtonWidget)
- [same namespace GatherArmyTupleButtonWidget](../GatherArmyTupleButtonWidget)
