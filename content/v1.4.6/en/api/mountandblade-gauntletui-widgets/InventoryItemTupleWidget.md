---
title: "InventoryItemTupleWidget"
description: "InventoryItemTupleWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting InventoryItemButtonWidget; 28 exposed members (3 methods, 24 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryItemTupleWidget.cs."
---
# InventoryItemTupleWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class InventoryItemTupleWidget : InventoryItemButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryItemTupleWidget.cs`

## Overview

InventoryItemTupleWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryItemTupleWidget.cs. It is a public class, implementing/inheriting InventoryItemButtonWidget; the inheritance chain is InventoryItemTupleWidget → InventoryItemButtonWidget → ButtonWidget. It exposes 28 public/protected members: 3 methods, 24 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: InventoryItemTupleWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory) the module directory; inheritance chain InventoryItemTupleWidget → InventoryItemButtonWidget → ButtonWidget. The surface is property-led (properties 24/28, methods 3/28), so it mostly exposes state for reading. ButtonWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryItemTupleWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ItemImageIdentifier` | `public InventoryImageIdentifierWidget ItemImageIdentifier` | property |
| `InventoryItemTupleWidget` | `public InventoryItemTupleWidget(UIContext context) : base(context)` | constructor |
| `OnConnectedToRoot` | `protected override void OnConnectedToRoot()` | method |
| `OnDisconnectedFromRoot` | `protected override void OnDisconnectedFromRoot()` | method |
| `RefreshState` | `protected override void RefreshState()` | method |
| `ItemID` | `public string ItemID` | property |
| `NameTextWidget` | `public TextWidget NameTextWidget` | property |
| `CountTextWidget` | `public TextWidget CountTextWidget` | property |
| `CostTextWidget` | `public TextWidget CostTextWidget` | property |
| `ProfitState` | `public int ProfitState` | property |
| `MainContainer` | `public BrushListPanel MainContainer` | property |
| `ExtendedControlsContainer` | `public InventoryTupleExtensionControlsWidget ExtendedControlsContainer` | property |
| `Slider` | `public InventoryTwoWaySliderWidget Slider` | property |
| `SliderParent` | `public Widget SliderParent` | property |
| `SliderTextWidget` | `public TextWidget SliderTextWidget` | property |
| `IsTransferable` | `public bool IsTransferable` | property |
| `EquipButton` | `public ButtonWidget EquipButton` | property |
| `TransactionCount` | `public int TransactionCount` | property |
| `ItemCount` | `public int ItemCount` | property |
| `IsCivilian` | `public bool IsCivilian` | property |
| `IsStealth` | `public bool IsStealth` | property |
| `IsGenderDifferent` | `public bool IsGenderDifferent` | property |
| `IsEquipable` | `public bool IsEquipable` | property |
| `IsNewlyAdded` | `public bool IsNewlyAdded` | property |
| `CanCharacterUseItem` | `public bool CanCharacterUseItem` | property |
| `DefaultBrush` | `public Brush DefaultBrush` | property |
| `CantUseInSetBrush` | `public Brush CantUseInSetBrush` | property |
| `CharacterCantUseBrush` | `public Brush CharacterCantUseBrush` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface InventoryItemButtonWidget](../InventoryItemButtonWidget)
- [same namespace InventoryAlternativeUsageContainer](../InventoryAlternativeUsageContainer)
- [same namespace InventoryArmorAnimationTextWidget](../InventoryArmorAnimationTextWidget)
- [same namespace InventoryCenterPanelWidget](../InventoryCenterPanelWidget)
- [same namespace InventoryEquippedItemControlsBrushWidget](../InventoryEquippedItemControlsBrushWidget)
