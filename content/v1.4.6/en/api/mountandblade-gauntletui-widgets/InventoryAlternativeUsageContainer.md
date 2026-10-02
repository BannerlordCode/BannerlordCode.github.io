---
title: "InventoryAlternativeUsageContainer"
description: "InventoryAlternativeUsageContainer: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Container; 11 exposed members (5 methods, 5 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryAlternativeUsageContainer.cs."
---
# InventoryAlternativeUsageContainer

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class InventoryAlternativeUsageContainer : Container`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryAlternativeUsageContainer.cs`

## Overview

InventoryAlternativeUsageContainer lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryAlternativeUsageContainer.cs. It is a public class, implementing/inheriting Container; the inheritance chain is InventoryAlternativeUsageContainer → Container. It exposes 11 public/protected members: 5 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: InventoryAlternativeUsageContainer is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory) the module directory; inheritance chain InventoryAlternativeUsageContainer → Container. The surface is method-led (methods 5/11, properties 5/11), so it mostly exposes operations. Container on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryAlternativeUsageContainer.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `InventoryAlternativeUsageContainer` | `public InventoryAlternativeUsageContainer(UIContext context) : base(context)` | constructor |
| `OnChildSelected` | `public override void OnChildSelected(Widget widget)` | method |
| `OnChildAdded` | `protected override void OnChildAdded(Widget child)` | method |
| `OnBeforeChildRemoved` | `protected override void OnBeforeChildRemoved(Widget child)` | method |
| `ColumnLimit` | `public int ColumnLimit` | property |
| `CellWidth` | `public float CellWidth` | property |
| `CellHeight` | `public float CellHeight` | property |
| `Predicate` | `public override Predicate<Widget>AcceptDropPredicate` | property |
| `GetDropGizmoPosition` | `public override Vector2 GetDropGizmoPosition(Vector2 draggedWidgetPosition)` | method |
| `GetIndexForDrop` | `public override int GetIndexForDrop(Vector2 draggedWidgetPosition)` | method |
| `IsDragHovering` | `public override bool IsDragHovering` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace InventoryArmorAnimationTextWidget](../InventoryArmorAnimationTextWidget)
- [same namespace InventoryCenterPanelWidget](../InventoryCenterPanelWidget)
- [same namespace InventoryEquippedItemControlsBrushWidget](../InventoryEquippedItemControlsBrushWidget)
- [same namespace InventoryEquippedItemSlotWidget](../InventoryEquippedItemSlotWidget)
