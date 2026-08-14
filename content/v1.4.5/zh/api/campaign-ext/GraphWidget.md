---
title: "GraphWidget"
description: "GraphWidget 的自动生成类参考。"
---
# GraphWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets.Graph
**Module:** TaleWorlds.GauntletUI
**Type:** `public class GraphWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/Graph/GraphWidget.cs`

## 概述

`GraphWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `GraphWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

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

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
GraphWidget widget = ...;
```

## 参见

- [本区域目录](../)