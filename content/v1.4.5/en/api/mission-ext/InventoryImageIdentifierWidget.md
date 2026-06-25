---
title: "InventoryImageIdentifierWidget"
description: "Auto-generated class reference for InventoryImageIdentifierWidget."
---
# InventoryImageIdentifierWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InventoryImageIdentifierWidget : ImageIdentifierWidget`
**Base:** `ImageIdentifierWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory/InventoryImageIdentifierWidget.cs`

## Overview

`InventoryImageIdentifierWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `InventoryImageIdentifierWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SetRenderRequestedPreviousFrame
`public void SetRenderRequestedPreviousFrame(bool isRequested)`

**Purpose:** **Purpose:** Assigns a new value to render requested previous frame and updates the object's internal state.

```csharp
// Obtain an instance of InventoryImageIdentifierWidget from the subsystem API first
InventoryImageIdentifierWidget inventoryImageIdentifierWidget = ...;
inventoryImageIdentifierWidget.SetRenderRequestedPreviousFrame(false);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
InventoryImageIdentifierWidget widget = ...;
```

## See Also

- [Area Index](../)