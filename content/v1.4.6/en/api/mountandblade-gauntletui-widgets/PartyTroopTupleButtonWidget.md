---
title: "PartyTroopTupleButtonWidget"
description: "PartyTroopTupleButtonWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting ButtonWidget; 13 exposed members (1 methods, 11 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyTroopTupleButtonWidget.cs."
---
# PartyTroopTupleButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class PartyTroopTupleButtonWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyTroopTupleButtonWidget.cs`

## Overview

PartyTroopTupleButtonWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyTroopTupleButtonWidget.cs. It is a public class, implementing/inheriting ButtonWidget; the inheritance chain is PartyTroopTupleButtonWidget → ButtonWidget. It exposes 13 public/protected members: 1 methods, 11 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyTroopTupleButtonWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party) the module directory; inheritance chain PartyTroopTupleButtonWidget → ButtonWidget. The surface is property-led (properties 11/13, methods 1/13), so it mostly exposes state for reading. ButtonWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyTroopTupleButtonWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CharacterID` | `public string CharacterID` | property |
| `PartyTroopTupleButtonWidget` | `public PartyTroopTupleButtonWidget(UIContext context) : base(context)` | constructor |
| `RefreshState` | `protected override void RefreshState()` | method |
| `ScreenWidget` | `public PartyScreenWidget ScreenWidget` | property |
| `IsTupleLeftSide` | `public bool IsTupleLeftSide` | property |
| `TransferSlider` | `public InventoryTwoWaySliderWidget TransferSlider` | property |
| `IsTransferable` | `public bool IsTransferable` | property |
| `IsMainHero` | `public bool IsMainHero` | property |
| `IsPrisoner` | `public bool IsPrisoner` | property |
| `TransferAmount` | `public int TransferAmount` | property |
| `ExtendedControlsContainer` | `public InventoryTupleExtensionControlsWidget ExtendedControlsContainer` | property |
| `Main` | `public Widget Main` | property |
| `UpgradesPanel` | `public Widget UpgradesPanel` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace PartyFormationDropdownWidget](../PartyFormationDropdownWidget)
- [same namespace PartyHeaderToggleWidget](../PartyHeaderToggleWidget)
- [same namespace PartyHealthFillBarWidget](../PartyHealthFillBarWidget)
- [same namespace PartyListPanel](../PartyListPanel)
