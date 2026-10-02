---
title: "InventoryAlternativeUsageContainer"
description: "InventoryAlternativeUsageContainer: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory, inheriting Container; 11 exposed members (5 methods, 5 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryAlternativeUsageContainer.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# InventoryAlternativeUsageContainer

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class InventoryAlternativeUsageContainer : Container`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryAlternativeUsageContainer.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

InventoryAlternativeUsageContainer lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryAlternativeUsageContainer.cs. It is a public class, implementing/inheriting Container; the inheritance chain is InventoryAlternativeUsageContainer → Container → Widget → PropertyOwnerObject. It exposes 11 public/protected members: 5 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: InventoryAlternativeUsageContainer lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory`, inheritance chain InventoryAlternativeUsageContainer → Container → Widget → PropertyOwnerObject. The surface is method-led (methods 5/11, properties 5/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryAlternativeUsageContainer.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface Container](../../gui/Container/)
- [same namespace InventoryArmorAnimationTextWidget](../InventoryArmorAnimationTextWidget/)
- [same namespace InventoryCenterPanelWidget](../InventoryCenterPanelWidget/)
- [same namespace InventoryEquippedItemControlsBrushWidget](../InventoryEquippedItemControlsBrushWidget/)
- [same namespace InventoryEquippedItemSlotWidget](../InventoryEquippedItemSlotWidget/)
