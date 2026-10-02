---
title: "GraphWidget"
description: "GraphWidget：TaleWorlds.GauntletUI.ExtraWidgets.Graph 的 public 类，继承 Widget；公开成员 23 个（方法 1、属性 21、字段 0）。canonical 桶 gui。源文件 TaleWorlds.GauntletUI.ExtraWidgets/Graph/GraphWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GraphWidget

**Namespace:** `TaleWorlds.GauntletUI.ExtraWidgets.Graph`
**Module:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Type:** `public class GraphWidget : Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/Graph/GraphWidget.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## 概述

GraphWidget 位于 TaleWorlds.GauntletUI.ExtraWidgets 模块，源文件 TaleWorlds.GauntletUI.ExtraWidgets/Graph/GraphWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 GraphWidget → Widget → PropertyOwnerObject。public/protected 成员共 23 个：1 方法、21 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GraphWidget 落在 canonical 桶 `gui`（命中规则 `rule:TaleWorlds.GauntletUI`），命名空间 `TaleWorlds.GauntletUI.ExtraWidgets.Graph`，继承链 GraphWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 21/23，方法 1/23），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI.ExtraWidgets/Graph/GraphWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GraphWidget` | `public GraphWidget(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `RowCount` | `public int RowCount` | 属性 |
| `ColumnCount` | `public int ColumnCount` | 属性 |
| `HorizontalLabelCount` | `public int HorizontalLabelCount` | 属性 |
| `HorizontalMinValue` | `public float HorizontalMinValue` | 属性 |
| `HorizontalMaxValue` | `public float HorizontalMaxValue` | 属性 |
| `VerticalLabelCount` | `public int VerticalLabelCount` | 属性 |
| `VerticalMinValue` | `public float VerticalMinValue` | 属性 |
| `VerticalMaxValue` | `public float VerticalMaxValue` | 属性 |
| `PlaneLineSprite` | `public Sprite PlaneLineSprite` | 属性 |
| `PlaneLineColor` | `public Color PlaneLineColor` | 属性 |
| `LeftSpace` | `public float LeftSpace` | 属性 |
| `TopSpace` | `public float TopSpace` | 属性 |
| `RightSpace` | `public float RightSpace` | 属性 |
| `BottomSpace` | `public float BottomSpace` | 属性 |
| `PlaneMarginTop` | `public float PlaneMarginTop` | 属性 |
| `PlaneMarginRight` | `public float PlaneMarginRight` | 属性 |
| `NumberOfValueLabelDecimalPlaces` | `public int NumberOfValueLabelDecimalPlaces` | 属性 |
| `HorizontalValueLabelsBrush` | `public Brush HorizontalValueLabelsBrush` | 属性 |
| `VerticalValueLabelsBrush` | `public Brush VerticalValueLabelsBrush` | 属性 |
| `LineBrush` | `public Brush LineBrush` | 属性 |
| `LineContainerWidget` | `public Widget LineContainerWidget` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 GraphLinePointWidget](../GraphLinePointWidget/)
- [同命名空间 GraphLineWidget](../GraphLineWidget/)
