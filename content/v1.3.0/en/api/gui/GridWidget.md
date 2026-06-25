---
title: "GridWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GridWidget`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GridWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class GridWidget : Container`
**Base:** `Container`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/GridWidget.cs`

## Overview

`GridWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `GridWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `GridLayout` | `public GridLayout GridLayout { get; }` |
| `DefaultCellWidth` | `public float DefaultCellWidth { get; set; }` |
| `DefaultScaledCellWidth` | `public float DefaultScaledCellWidth { get; set; }` |
| `DefaultCellHeight` | `public float DefaultCellHeight { get; set; }` |
| `DefaultScaledCellHeight` | `public float DefaultScaledCellHeight { get; set; }` |
| `RowCount` | `public int RowCount { get; set; }` |
| `ColumnCount` | `public int ColumnCount { get; set; }` |
| `UseDynamicCellWidth` | `public bool UseDynamicCellWidth { get; set; }` |
| `UseDynamicCellHeight` | `public bool UseDynamicCellHeight { get; set; }` |
| `AcceptDropPredicate` | `public override Predicate<Widget> AcceptDropPredicate { get; set; }` |
| `IsDragHovering` | `public override bool IsDragHovering { get; }` |

## Key Methods

### GetDropGizmoPosition
`public override Vector2 GetDropGizmoPosition(Vector2 draggedWidgetPosition)`

**Purpose:** Gets the current value of `drop gizmo position`.

### GetIndexForDrop
`public override int GetIndexForDrop(Vector2 draggedWidgetPosition)`

**Purpose:** Gets the current value of `index for drop`.

### OnChildSelected
`public override void OnChildSelected(Widget widget)`

**Purpose:** Called when the `child selected` event is raised.

## Usage Example

```csharp
var widget = new GridWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)