---
title: "InventoryEquippedItemControlsBrushWidget"
description: "InventoryEquippedItemControlsBrushWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory, inheriting BrushWidget; 11 exposed members (5 methods, 3 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryEquippedItemControlsBrushWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# InventoryEquippedItemControlsBrushWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class InventoryEquippedItemControlsBrushWidget : BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryEquippedItemControlsBrushWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

InventoryEquippedItemControlsBrushWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryEquippedItemControlsBrushWidget.cs. It is a public class, implementing/inheriting BrushWidget; the inheritance chain is InventoryEquippedItemControlsBrushWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 11 public/protected members: 5 methods, 3 properties, 1 events, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: InventoryEquippedItemControlsBrushWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory`, inheritance chain InventoryEquippedItemControlsBrushWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is method-led (methods 5/11, properties 3/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryEquippedItemControlsBrushWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnHidePanel;` | `public event Action OnHidePanel;` | event |
| `ForcedScopeCollection` | `public NavigationForcedScopeCollectionTargeter ForcedScopeCollection` | property |
| `NavigationScope` | `public NavigationScopeTargeter NavigationScope` | property |
| `InventoryEquippedItemControlsBrushWidget` | `public InventoryEquippedItemControlsBrushWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `ShowPanel` | `public void ShowPanel()` | method |
| `HidePanel` | `public void HidePanel()` | method |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `ItemWidget` | `public InventoryItemButtonWidget ItemWidget` | property |
| `ButtonClickEventHandler` | `public delegate void ButtonClickEventHandler(Widget itemWidget);` | method |
| `ButtonClickEventHandler` | `public delegate void ButtonClickEventHandler(Widget itemWidget)` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface BrushWidget](../../gui/BrushWidget/)
- [same namespace InventoryAlternativeUsageContainer](../InventoryAlternativeUsageContainer/)
- [same namespace InventoryArmorAnimationTextWidget](../InventoryArmorAnimationTextWidget/)
- [same namespace InventoryCenterPanelWidget](../InventoryCenterPanelWidget/)
- [same namespace InventoryEquippedItemSlotWidget](../InventoryEquippedItemSlotWidget/)
