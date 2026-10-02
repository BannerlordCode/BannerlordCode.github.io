---
title: "GridWidget"
description: "GridWidget：TaleWorlds.GauntletUI.BaseTypes 的 public 类，继承 Container；公开成员 17 个（方法 3、属性 11、字段 2）。canonical 桶 gui。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/GridWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GridWidget

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class GridWidget : Container`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/GridWidget.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## 概述

GridWidget 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/GridWidget.cs。它是一个 public 类，实现/继承 Container，继承链为 GridWidget → Container → Widget → PropertyOwnerObject。public/protected 成员共 17 个：3 方法、11 属性、2 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GridWidget 落在 canonical 桶 `gui`（命中规则 `rule:TaleWorlds.GauntletUI`），命名空间 `TaleWorlds.GauntletUI.BaseTypes`，继承链 GridWidget → Container → Widget → PropertyOwnerObject。成员构成以属性为主（属性 11/17，方法 3/17），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/GridWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GridLayout` | `public GridLayout GridLayout` | 属性 |
| `DefaultCellWidth` | `public float DefaultCellWidth` | 属性 |
| `DefaultScaledCellWidth` | `public float DefaultScaledCellWidth` | 属性 |
| `DefaultCellHeight` | `public float DefaultCellHeight` | 属性 |
| `DefaultScaledCellHeight` | `public float DefaultScaledCellHeight` | 属性 |
| `RowCount` | `public int RowCount` | 属性 |
| `ColumnCount` | `public int ColumnCount` | 属性 |
| `UseDynamicCellWidth` | `public bool UseDynamicCellWidth` | 属性 |
| `UseDynamicCellHeight` | `public bool UseDynamicCellHeight` | 属性 |
| `Predicate` | `public override Predicate<Widget>AcceptDropPredicate` | 属性 |
| `IsDragHovering` | `public override bool IsDragHovering` | 属性 |
| `GridWidget` | `public GridWidget(UIContext context) : base(context)` | 构造函数 |
| `GetDropGizmoPosition` | `public override Vector2 GetDropGizmoPosition(Vector2 draggedWidgetPosition)` | 方法 |
| `GetIndexForDrop` | `public override int GetIndexForDrop(Vector2 draggedWidgetPosition)` | 方法 |
| `OnChildSelected` | `public override void OnChildSelected(Widget widget)` | 方法 |
| `DefaultRowCount` | `public const int DefaultRowCount` | 字段 |
| `DefaultColumnCount` | `public const int DefaultColumnCount` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 Container](../Container/)
- [同命名空间 BasicContainer](../BasicContainer/)
- [同命名空间 BrushWidget](../BrushWidget/)
- [同命名空间 ButtonType](../ButtonType/)
- [同命名空间 ButtonWidget](../ButtonWidget/)
