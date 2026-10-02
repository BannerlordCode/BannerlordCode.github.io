---
title: "InventoryItemButtonWidget"
description: "InventoryItemButtonWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting ButtonWidget; 7 exposed members (2 methods, 4 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryItemButtonWidget.cs."
---
# InventoryItemButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public abstract class InventoryItemButtonWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryItemButtonWidget.cs`

## Overview

InventoryItemButtonWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryItemButtonWidget.cs. It is a public class (abstract), implementing/inheriting ButtonWidget; the inheritance chain is InventoryItemButtonWidget → ButtonWidget. It exposes 7 public/protected members: 2 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: InventoryItemButtonWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory) the module directory; inheritance chain InventoryItemButtonWidget → ButtonWidget. The surface is property-led (properties 4/7, methods 2/7), so it mostly exposes state for reading. ButtonWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryItemButtonWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `InventoryItemButtonWidget` | `protected InventoryItemButtonWidget(UIContext context) : base(context)` | constructor |
| `OnDragBegin` | `protected override void OnDragBegin()` | method |
| `OnDrop` | `protected override bool OnDrop()` | method |
| `IsRightSide` | `public bool IsRightSide` | property |
| `ItemType` | `public string ItemType` | property |
| `EquipmentIndex` | `public int EquipmentIndex` | property |
| `ScreenWidget` | `public InventoryScreenWidget ScreenWidget` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace InventoryAlternativeUsageContainer](../InventoryAlternativeUsageContainer)
- [same namespace InventoryArmorAnimationTextWidget](../InventoryArmorAnimationTextWidget)
- [same namespace InventoryCenterPanelWidget](../InventoryCenterPanelWidget)
- [same namespace InventoryEquippedItemControlsBrushWidget](../InventoryEquippedItemControlsBrushWidget)
