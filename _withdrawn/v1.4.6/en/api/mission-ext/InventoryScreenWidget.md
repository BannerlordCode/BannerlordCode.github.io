---
title: "InventoryScreenWidget"
description: "InventoryScreenWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory, inheriting Widget; 21 exposed members (4 methods, 16 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryScreenWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# InventoryScreenWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class InventoryScreenWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryScreenWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

InventoryScreenWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryScreenWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is InventoryScreenWidget → Widget → PropertyOwnerObject. It exposes 21 public/protected members: 4 methods, 16 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: InventoryScreenWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory`, inheritance chain InventoryScreenWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 16/21, methods 4/21), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryScreenWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `InventoryScreenWidget` | `public InventoryScreenWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `ItemWidgetDragBegin` | `public void ItemWidgetDragBegin(InventoryItemButtonWidget itemWidget)` | method |
| `ItemWidgetDrop` | `public void ItemWidgetDrop(InventoryItemButtonWidget itemWidget)` | method |
| `TransferInputKeyVisualWidget` | `public InputKeyVisualWidget TransferInputKeyVisualWidget` | property |
| `PreviousCharacterInputVisualParent` | `public Widget PreviousCharacterInputVisualParent` | property |
| `NextCharacterInputVisualParent` | `public Widget NextCharacterInputVisualParent` | property |
| `TradeLabel` | `public RichTextWidget TradeLabel` | property |
| `InventoryTooltip` | `public Widget InventoryTooltip` | property |
| `ItemPreviewWidget` | `public InventoryItemPreviewWidget ItemPreviewWidget` | property |
| `TransactionCount` | `public int TransactionCount` | property |
| `EquipmentMode` | `public int EquipmentMode` | property |
| `TargetEquipmentIndex` | `public int TargetEquipmentIndex` | property |
| `OtherInventoryListWidget` | `public ScrollablePanel OtherInventoryListWidget` | property |
| `PlayerInventoryListWidget` | `public ScrollablePanel PlayerInventoryListWidget` | property |
| `IsFocusedOnItemList` | `public bool IsFocusedOnItemList` | property |
| `IsBannerTutorialActive` | `public bool IsBannerTutorialActive` | property |
| `BannerTypeName` | `public string BannerTypeName` | property |
| `ScrollToItem` | `public bool ScrollToItem` | property |
| `ScrollItemId` | `public string ScrollItemId` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace InventoryAlternativeUsageContainer](../InventoryAlternativeUsageContainer/)
- [same namespace InventoryArmorAnimationTextWidget](../InventoryArmorAnimationTextWidget/)
- [same namespace InventoryCenterPanelWidget](../InventoryCenterPanelWidget/)
- [same namespace InventoryEquippedItemControlsBrushWidget](../InventoryEquippedItemControlsBrushWidget/)
