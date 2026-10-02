---
title: "PartyHeaderToggleWidget"
description: "PartyHeaderToggleWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting ToggleButtonWidget; 9 exposed members (2 methods, 6 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyHeaderToggleWidget.cs."
---
# PartyHeaderToggleWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class PartyHeaderToggleWidget : ToggleButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyHeaderToggleWidget.cs`

## Overview

PartyHeaderToggleWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyHeaderToggleWidget.cs. It is a public class, implementing/inheriting ToggleButtonWidget; the inheritance chain is PartyHeaderToggleWidget → ToggleButtonWidget → ButtonWidget. It exposes 9 public/protected members: 2 methods, 6 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyHeaderToggleWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party) the module directory; inheritance chain PartyHeaderToggleWidget → ToggleButtonWidget → ButtonWidget. The surface is property-led (properties 6/9, methods 2/9), so it mostly exposes state for reading. ButtonWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyHeaderToggleWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AutoToggleTransferButtonState` | `public bool AutoToggleTransferButtonState` | property |
| `PartyHeaderToggleWidget` | `public PartyHeaderToggleWidget(UIContext context) : base(context)` | constructor |
| `OnClick` | `protected override void OnClick(Widget widget)` | method |
| `SetState` | `public override void SetState(string stateName)` | method |
| `ListPanel` | `public ListPanel ListPanel` | property |
| `TransferButtonWidget` | `public ButtonWidget TransferButtonWidget` | property |
| `CollapseIndicator` | `public BrushWidget CollapseIndicator` | property |
| `IsRelevant` | `public bool IsRelevant` | property |
| `BlockInputsWhenDisabled` | `public bool BlockInputsWhenDisabled` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface ToggleButtonWidget](../ToggleButtonWidget)
- [same namespace PartyFormationDropdownWidget](../PartyFormationDropdownWidget)
- [same namespace PartyHealthFillBarWidget](../PartyHealthFillBarWidget)
- [same namespace PartyListPanel](../PartyListPanel)
- [same namespace PartyManageTroopPopupWidget](../PartyManageTroopPopupWidget)
