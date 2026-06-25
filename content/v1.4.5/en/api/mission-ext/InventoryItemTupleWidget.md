---
title: "InventoryItemTupleWidget"
description: "Auto-generated class reference for InventoryItemTupleWidget."
---
# InventoryItemTupleWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InventoryItemTupleWidget : InventoryItemButtonWidget`
**Base:** `InventoryItemButtonWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory/InventoryItemTupleWidget.cs`

## Overview

`InventoryItemTupleWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `InventoryItemTupleWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ItemImageIdentifier` | `public InventoryImageIdentifierWidget ItemImageIdentifier { get; set; }` |
| `ItemID` | `public string ItemID { get; set; }` |
| `NameTextWidget` | `public TextWidget NameTextWidget { get; set; }` |
| `CountTextWidget` | `public TextWidget CountTextWidget { get; set; }` |
| `CostTextWidget` | `public TextWidget CostTextWidget { get; set; }` |
| `ProfitState` | `public int ProfitState { get; set; }` |
| `MainContainer` | `public BrushListPanel MainContainer { get; set; }` |
| `ExtendedControlsContainer` | `public InventoryTupleExtensionControlsWidget ExtendedControlsContainer { get; set; }` |
| `Slider` | `public InventoryTwoWaySliderWidget Slider { get; set; }` |
| `SliderParent` | `public Widget SliderParent { get; set; }` |
| `SliderTextWidget` | `public TextWidget SliderTextWidget { get; set; }` |
| `IsTransferable` | `public bool IsTransferable { get; set; }` |
| `EquipButton` | `public ButtonWidget EquipButton { get; set; }` |
| `TransactionCount` | `public int TransactionCount { get; set; }` |
| `ItemCount` | `public int ItemCount { get; set; }` |
| `IsCivilian` | `public bool IsCivilian { get; set; }` |
| `IsStealth` | `public bool IsStealth { get; set; }` |
| `IsGenderDifferent` | `public bool IsGenderDifferent { get; set; }` |
| `IsEquipable` | `public bool IsEquipable { get; set; }` |
| `IsNewlyAdded` | `public bool IsNewlyAdded { get; set; }` |
| `CanCharacterUseItem` | `public bool CanCharacterUseItem { get; set; }` |
| `DefaultBrush` | `public Brush DefaultBrush { get; set; }` |
| `CantUseInSetBrush` | `public Brush CantUseInSetBrush { get; set; }` |
| `CharacterCantUseBrush` | `public Brush CharacterCantUseBrush { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
InventoryItemTupleWidget widget = ...;
```

## See Also

- [Area Index](../)