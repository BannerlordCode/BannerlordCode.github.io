---
title: "InventoryListPanel"
description: "InventoryListPanel: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting NavigatableListPanel; 5 exposed members (0 methods, 4 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryListPanel.cs."
---
# InventoryListPanel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class InventoryListPanel : NavigatableListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryListPanel.cs`

## Overview

InventoryListPanel lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryListPanel.cs. It is a public class, implementing/inheriting NavigatableListPanel; the inheritance chain is InventoryListPanel → NavigatableListPanel → ListPanel. It exposes 5 public/protected members: 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: InventoryListPanel is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory) the module directory; inheritance chain InventoryListPanel → NavigatableListPanel → ListPanel. The surface is property-led (properties 4/5, methods 0/5), so it mostly exposes state for reading. ListPanel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryListPanel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `InventoryListPanel` | `public InventoryListPanel(UIContext context) : base(context)` | constructor |
| `SortByTypeBtn` | `public ButtonWidget SortByTypeBtn` | property |
| `SortByNameBtn` | `public ButtonWidget SortByNameBtn` | property |
| `SortByQuantityBtn` | `public ButtonWidget SortByQuantityBtn` | property |
| `SortByCostBtn` | `public ButtonWidget SortByCostBtn` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface NavigatableListPanel](../NavigatableListPanel)
- [same namespace InventoryAlternativeUsageContainer](../InventoryAlternativeUsageContainer)
- [same namespace InventoryArmorAnimationTextWidget](../InventoryArmorAnimationTextWidget)
- [same namespace InventoryCenterPanelWidget](../InventoryCenterPanelWidget)
- [same namespace InventoryEquippedItemControlsBrushWidget](../InventoryEquippedItemControlsBrushWidget)
