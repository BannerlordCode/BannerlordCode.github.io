---
title: "PartyFormationDropdownWidget"
description: "PartyFormationDropdownWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting DropdownWidget; 5 exposed members (2 methods, 2 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyFormationDropdownWidget.cs."
---
# PartyFormationDropdownWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class PartyFormationDropdownWidget : DropdownWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyFormationDropdownWidget.cs`

## Overview

PartyFormationDropdownWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyFormationDropdownWidget.cs. It is a public class, implementing/inheriting DropdownWidget; the inheritance chain is PartyFormationDropdownWidget → DropdownWidget. It exposes 5 public/protected members: 2 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyFormationDropdownWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party) the module directory; inheritance chain PartyFormationDropdownWidget → DropdownWidget. The surface is method-led (methods 2/5, properties 2/5), so it mostly exposes operations. DropdownWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyFormationDropdownWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PartyFormationDropdownWidget` | `public PartyFormationDropdownWidget(UIContext context) : base(context)` | constructor |
| `OpenPanel` | `protected override void OpenPanel()` | method |
| `ClosePanel` | `protected override void ClosePanel()` | method |
| `SeperatorStateChanger` | `public DelayedStateChanger SeperatorStateChanger` | property |
| `ListStateChanger` | `public DelayedStateChanger ListStateChanger` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace PartyHeaderToggleWidget](../PartyHeaderToggleWidget)
- [same namespace PartyHealthFillBarWidget](../PartyHealthFillBarWidget)
- [same namespace PartyListPanel](../PartyListPanel)
- [same namespace PartyManageTroopPopupWidget](../PartyManageTroopPopupWidget)
