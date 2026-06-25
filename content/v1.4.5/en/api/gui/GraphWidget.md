---
title: "GraphWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GraphWidget`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GraphWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets.Graph
**Module:** TaleWorlds.GauntletUI
**Type:** `public class GraphWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI.ExtraWidgets/TaleWorlds.GauntletUI.ExtraWidgets.Graph/GraphWidget.cs`

## Overview

`GraphWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `GraphWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `RowCount` | `public int RowCount { get; set; }` |
| `ColumnCount` | `public int ColumnCount { get; set; }` |
| `HorizontalLabelCount` | `public int HorizontalLabelCount { get; set; }` |
| `HorizontalMinValue` | `public float HorizontalMinValue { get; set; }` |
| `HorizontalMaxValue` | `public float HorizontalMaxValue { get; set; }` |
| `VerticalLabelCount` | `public int VerticalLabelCount { get; set; }` |
| `VerticalMinValue` | `public float VerticalMinValue { get; set; }` |
| `VerticalMaxValue` | `public float VerticalMaxValue { get; set; }` |
| `PlaneLineSprite` | `public Sprite PlaneLineSprite { get; set; }` |
| `PlaneLineColor` | `public Color PlaneLineColor { get; set; }` |
| `LeftSpace` | `public float LeftSpace { get; set; }` |
| `TopSpace` | `public float TopSpace { get; set; }` |
| `RightSpace` | `public float RightSpace { get; set; }` |
| `BottomSpace` | `public float BottomSpace { get; set; }` |
| `PlaneMarginTop` | `public float PlaneMarginTop { get; set; }` |
| `PlaneMarginRight` | `public float PlaneMarginRight { get; set; }` |
| `NumberOfValueLabelDecimalPlaces` | `public int NumberOfValueLabelDecimalPlaces { get; set; }` |
| `HorizontalValueLabelsBrush` | `public Brush HorizontalValueLabelsBrush { get; set; }` |
| `VerticalValueLabelsBrush` | `public Brush VerticalValueLabelsBrush { get; set; }` |
| `LineBrush` | `public Brush LineBrush { get; set; }` |
| `LineContainerWidget` | `public Widget LineContainerWidget { get; set; }` |

## Usage Example

```csharp
var widget = new GraphWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)