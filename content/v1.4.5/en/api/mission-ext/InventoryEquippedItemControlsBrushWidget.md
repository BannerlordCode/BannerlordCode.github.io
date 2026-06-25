---
title: "InventoryEquippedItemControlsBrushWidget"
description: "Auto-generated class reference for InventoryEquippedItemControlsBrushWidget."
---
# InventoryEquippedItemControlsBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InventoryEquippedItemControlsBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory/InventoryEquippedItemControlsBrushWidget.cs`

## Overview

`InventoryEquippedItemControlsBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `InventoryEquippedItemControlsBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ForcedScopeCollection` | `public NavigationForcedScopeCollectionTargeter ForcedScopeCollection { get; set; }` |
| `NavigationScope` | `public NavigationScopeTargeter NavigationScope { get; set; }` |
| `ItemWidget` | `public InventoryItemButtonWidget ItemWidget { get; set; }` |

## Key Methods

### ButtonClickEventHandler
`public delegate void ButtonClickEventHandler(Widget itemWidget)`

**Purpose:** Executes the ButtonClickEventHandler logic.

```csharp
// Obtain an instance of InventoryEquippedItemControlsBrushWidget from the subsystem API first
InventoryEquippedItemControlsBrushWidget inventoryEquippedItemControlsBrushWidget = ...;
inventoryEquippedItemControlsBrushWidget.ButtonClickEventHandler(itemWidget);
```

### ShowPanel
`public void ShowPanel()`

**Purpose:** Displays the UI or element associated with panel.

```csharp
// Obtain an instance of InventoryEquippedItemControlsBrushWidget from the subsystem API first
InventoryEquippedItemControlsBrushWidget inventoryEquippedItemControlsBrushWidget = ...;
inventoryEquippedItemControlsBrushWidget.ShowPanel();
```

### HidePanel
`public void HidePanel()`

**Purpose:** Hides the UI or element associated with panel.

```csharp
// Obtain an instance of InventoryEquippedItemControlsBrushWidget from the subsystem API first
InventoryEquippedItemControlsBrushWidget inventoryEquippedItemControlsBrushWidget = ...;
inventoryEquippedItemControlsBrushWidget.HidePanel();
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
InventoryEquippedItemControlsBrushWidget widget = ...;
```

## See Also

- [Area Index](../)