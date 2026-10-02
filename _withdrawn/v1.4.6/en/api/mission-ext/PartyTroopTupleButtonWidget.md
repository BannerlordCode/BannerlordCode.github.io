---
title: "PartyTroopTupleButtonWidget"
description: "PartyTroopTupleButtonWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party, inheriting ButtonWidget; 13 exposed members (1 methods, 11 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyTroopTupleButtonWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PartyTroopTupleButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class PartyTroopTupleButtonWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyTroopTupleButtonWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

PartyTroopTupleButtonWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyTroopTupleButtonWidget.cs. It is a public class, implementing/inheriting ButtonWidget; the inheritance chain is PartyTroopTupleButtonWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 13 public/protected members: 1 methods, 11 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyTroopTupleButtonWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party`, inheritance chain PartyTroopTupleButtonWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 11/13, methods 1/13), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyTroopTupleButtonWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ButtonWidget](../../gui/ButtonWidget/)
- [same namespace PartyFormationDropdownWidget](../PartyFormationDropdownWidget/)
- [same namespace PartyHeaderToggleWidget](../PartyHeaderToggleWidget/)
- [same namespace PartyHealthFillBarWidget](../PartyHealthFillBarWidget/)
- [same namespace PartyListPanel](../PartyListPanel/)
