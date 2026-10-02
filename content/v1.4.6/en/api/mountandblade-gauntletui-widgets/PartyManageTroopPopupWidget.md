---
title: "PartyManageTroopPopupWidget"
description: "PartyManageTroopPopupWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 8 exposed members (1 methods, 6 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyManageTroopPopupWidget.cs."
---
# PartyManageTroopPopupWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class PartyManageTroopPopupWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyManageTroopPopupWidget.cs`

## Overview

PartyManageTroopPopupWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyManageTroopPopupWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is PartyManageTroopPopupWidget → Widget. It exposes 8 public/protected members: 1 methods, 6 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyManageTroopPopupWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party) the module directory; inheritance chain PartyManageTroopPopupWidget → Widget. The surface is property-led (properties 6/8, methods 1/8), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyManageTroopPopupWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PrimaryInputKeyVisualParent` | `public Widget PrimaryInputKeyVisualParent` | property |
| `SecondaryInputKeyVisualParent` | `public Widget SecondaryInputKeyVisualParent` | property |
| `TertiaryInputKeyVisualParent` | `public Widget TertiaryInputKeyVisualParent` | property |
| `PartyManageTroopPopupWidget` | `public PartyManageTroopPopupWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `IsPrimaryActionAvailable` | `public bool IsPrimaryActionAvailable` | property |
| `IsSecondaryActionAvailable` | `public bool IsSecondaryActionAvailable` | property |
| `IsTertiaryActionAvailable` | `public bool IsTertiaryActionAvailable` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace PartyFormationDropdownWidget](../PartyFormationDropdownWidget)
- [same namespace PartyHeaderToggleWidget](../PartyHeaderToggleWidget)
- [same namespace PartyHealthFillBarWidget](../PartyHealthFillBarWidget)
- [same namespace PartyListPanel](../PartyListPanel)
