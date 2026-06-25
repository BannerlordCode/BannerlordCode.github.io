---
title: "InventoryListPanel"
description: "Auto-generated class reference for InventoryListPanel."
---
# InventoryListPanel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InventoryListPanel : NavigatableListPanel`
**Base:** `NavigatableListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryListPanel.cs`

## Overview

`InventoryListPanel` lives in `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SortByTypeBtn` | `public ButtonWidget SortByTypeBtn { get; set; }` |
| `SortByNameBtn` | `public ButtonWidget SortByNameBtn { get; set; }` |
| `SortByQuantityBtn` | `public ButtonWidget SortByQuantityBtn { get; set; }` |
| `SortByCostBtn` | `public ButtonWidget SortByCostBtn { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
InventoryListPanel instance = ...;
```

## See Also

- [Area Index](../)