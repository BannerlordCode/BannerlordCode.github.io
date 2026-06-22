<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GridWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GridWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class GridWidget : Container`
**Base:** `Container`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/GridWidget.cs`

## Overview

`GridWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `DefaultCellWidth` | `public float DefaultCellWidth { get { return this._defaultCellWidth; }` |
| `DefaultScaledCellWidth` | `public float DefaultScaledCellWidth { get { return this.DefaultCellWidth * base._scaleToUse; }` |
| `DefaultCellHeight` | `public float DefaultCellHeight { get { return this._defaultCellHeight; }` |
| `DefaultScaledCellHeight` | `public float DefaultScaledCellHeight { get { return this.DefaultCellHeight * base._scaleToUse; }` |
| `RowCount` | `public int RowCount { get { return this._rowCount; }` |
| `ColumnCount` | `public int ColumnCount { get { return this._columnCount; }` |
| `UseDynamicCellWidth` | `public bool UseDynamicCellWidth { get { return this._useDynamicCellWidth; }` |
| `UseDynamicCellHeight` | `public bool UseDynamicCellHeight { get { return this._useDynamicCellHeight; }` |
| `AcceptDropPredicate` | `public override Predicate<Widget> AcceptDropPredicate { get; set; }` |
| `IsDragHovering` | `public override bool IsDragHovering { get { return false; }` |

## Key Methods

### GetDropGizmoPosition
```csharp
public override Vector2 GetDropGizmoPosition(Vector2 draggedWidgetPosition)
```

### GetIndexForDrop
```csharp
public override int GetIndexForDrop(Vector2 draggedWidgetPosition)
```

### OnChildSelected
```csharp
public override void OnChildSelected(Widget widget)
```

## Usage Example

```csharp
// Typical usage of GridWidget (Widget)
// 声明/访问一个 GridWidget
var widget = root.GetChild("gridWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)