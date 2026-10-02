---
title: "InventoryTwoWaySliderWidget"
description: "InventoryTwoWaySliderWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting TwoWaySliderWidget; 7 exposed members (2 methods, 4 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryTwoWaySliderWidget.cs."
---
# InventoryTwoWaySliderWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class InventoryTwoWaySliderWidget : TwoWaySliderWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryTwoWaySliderWidget.cs`

## Overview

InventoryTwoWaySliderWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryTwoWaySliderWidget.cs. It is a public class, implementing/inheriting TwoWaySliderWidget; the inheritance chain is InventoryTwoWaySliderWidget → TwoWaySliderWidget. It exposes 7 public/protected members: 2 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: InventoryTwoWaySliderWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory) the module directory; inheritance chain InventoryTwoWaySliderWidget → TwoWaySliderWidget. The surface is property-led (properties 4/7, methods 2/7), so it mostly exposes state for reading. TwoWaySliderWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryTwoWaySliderWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsExtended` | `public bool IsExtended` | property |
| `InventoryTwoWaySliderWidget` | `public InventoryTwoWaySliderWidget(UIContext context) : base(context)` | constructor |
| `OnParallelUpdate` | `protected override void OnParallelUpdate(float dt)` | method |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `IncreaseStockButtonWidget` | `public ButtonWidget IncreaseStockButtonWidget` | property |
| `DecreaseStockButtonWidget` | `public ButtonWidget DecreaseStockButtonWidget` | property |
| `IsRightSide` | `public bool IsRightSide` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace InventoryAlternativeUsageContainer](../InventoryAlternativeUsageContainer)
- [same namespace InventoryArmorAnimationTextWidget](../InventoryArmorAnimationTextWidget)
- [same namespace InventoryCenterPanelWidget](../InventoryCenterPanelWidget)
- [same namespace InventoryEquippedItemControlsBrushWidget](../InventoryEquippedItemControlsBrushWidget)
