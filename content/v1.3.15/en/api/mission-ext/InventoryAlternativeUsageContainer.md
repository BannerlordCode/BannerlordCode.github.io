---
title: "InventoryAlternativeUsageContainer"
description: "Auto-generated class reference for InventoryAlternativeUsageContainer."
---
# InventoryAlternativeUsageContainer

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InventoryAlternativeUsageContainer : Container`
**Base:** `Container`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryAlternativeUsageContainer.cs`

## Overview

`InventoryAlternativeUsageContainer` lives in `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ColumnLimit` | `public int ColumnLimit { get; set; }` |
| `CellWidth` | `public float CellWidth { get; set; }` |
| `CellHeight` | `public float CellHeight { get; set; }` |
| `AcceptDropPredicate` | `public override Predicate<Widget> AcceptDropPredicate { get; set; }` |
| `IsDragHovering` | `public override bool IsDragHovering { get; }` |

## Key Methods

### OnChildSelected
`public override void OnChildSelected(Widget widget)`

**Purpose:** Invoked when the child selected event is raised.

```csharp
// Obtain an instance of InventoryAlternativeUsageContainer from the subsystem API first
InventoryAlternativeUsageContainer inventoryAlternativeUsageContainer = ...;
inventoryAlternativeUsageContainer.OnChildSelected(widget);
```

### GetDropGizmoPosition
`public override Vector2 GetDropGizmoPosition(Vector2 draggedWidgetPosition)`

**Purpose:** Reads and returns the drop gizmo position value held by the this instance.

```csharp
// Obtain an instance of InventoryAlternativeUsageContainer from the subsystem API first
InventoryAlternativeUsageContainer inventoryAlternativeUsageContainer = ...;
var result = inventoryAlternativeUsageContainer.GetDropGizmoPosition(draggedWidgetPosition);
```

### GetIndexForDrop
`public override int GetIndexForDrop(Vector2 draggedWidgetPosition)`

**Purpose:** Reads and returns the index for drop value held by the this instance.

```csharp
// Obtain an instance of InventoryAlternativeUsageContainer from the subsystem API first
InventoryAlternativeUsageContainer inventoryAlternativeUsageContainer = ...;
var result = inventoryAlternativeUsageContainer.GetIndexForDrop(draggedWidgetPosition);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
InventoryAlternativeUsageContainer inventoryAlternativeUsageContainer = ...;
inventoryAlternativeUsageContainer.OnChildSelected(widget);
```

## See Also

- [Area Index](../)