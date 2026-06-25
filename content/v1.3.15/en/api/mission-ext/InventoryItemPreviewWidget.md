---
title: "InventoryItemPreviewWidget"
description: "Auto-generated class reference for InventoryItemPreviewWidget."
---
# InventoryItemPreviewWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InventoryItemPreviewWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryItemPreviewWidget.cs`

## Overview

`InventoryItemPreviewWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `InventoryItemPreviewWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsPreviewOpen` | `public bool IsPreviewOpen { get; set; }` |
| `ItemTableau` | `public ItemTableauWidget ItemTableau { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
InventoryItemPreviewWidget widget = ...;
```

## See Also

- [Area Index](../)