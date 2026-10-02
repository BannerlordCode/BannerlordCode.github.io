---
title: "GraphWidget"
description: "GraphWidget：TaleWorlds.GauntletUI.ExtraWidgets 的 public 类，继承 Widget；公开成员 23 个（方法 1、属性 21、字段 0）。源文件 TaleWorlds.GauntletUI.ExtraWidgets/Graph/GraphWidget.cs。"
---
# GraphWidget

**Namespace:** `TaleWorlds.GauntletUI.ExtraWidgets.Graph`
**Module:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Type:** `public class GraphWidget : Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/Graph/GraphWidget.cs`

## 概述

GraphWidget 位于 TaleWorlds.GauntletUI.ExtraWidgets 模块，源文件 TaleWorlds.GauntletUI.ExtraWidgets/Graph/GraphWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 GraphWidget → Widget。public/protected 成员共 23 个：1 方法、21 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GraphWidget 是 TaleWorlds.GauntletUI.ExtraWidgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.GauntletUI.ExtraWidgets.Graph），继承链 GraphWidget → Widget。成员构成以属性为主（属性 21/23，方法 1/23），对外主要以状态读取接口暴露。继承链上的 Widget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI.ExtraWidgets/Graph/GraphWidget.cs 的方法体或该类型的深写页确认。

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

- [↑ gauntletui-extrawidgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 GraphLinePointWidget](../GraphLinePointWidget)
- [同命名空间 GraphLineWidget](../GraphLineWidget)
