---
title: "PartyTroopTupleButtonWidget"
description: "Auto-generated class reference for PartyTroopTupleButtonWidget."
---
# PartyTroopTupleButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PartyTroopTupleButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyTroopTupleButtonWidget.cs`

## Overview

`PartyTroopTupleButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `PartyTroopTupleButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `CharacterID` | `public string CharacterID { get; set; }` |
| `ScreenWidget` | `public PartyScreenWidget ScreenWidget { get; }` |
| `IsTupleLeftSide` | `public bool IsTupleLeftSide { get; set; }` |
| `TransferSlider` | `public InventoryTwoWaySliderWidget TransferSlider { get; set; }` |
| `IsTransferable` | `public bool IsTransferable { get; set; }` |
| `IsMainHero` | `public bool IsMainHero { get; set; }` |
| `IsPrisoner` | `public bool IsPrisoner { get; set; }` |
| `TransferAmount` | `public int TransferAmount { get; set; }` |
| `ExtendedControlsContainer` | `public InventoryTupleExtensionControlsWidget ExtendedControlsContainer { get; set; }` |
| `Main` | `public Widget Main { get; set; }` |
| `UpgradesPanel` | `public Widget UpgradesPanel { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
PartyTroopTupleButtonWidget widget = ...;
```

## See Also

- [Area Index](../)