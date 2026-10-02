---
title: "GridLayout"
description: "GridLayout：TaleWorlds.GauntletUI 的 public 类，继承 ILayout；公开成员 6 个（方法 0、属性 5、字段 0）。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Layout/GridLayout.cs。"
---
# GridLayout

**Namespace:** `TaleWorlds.GauntletUI.Layout`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class GridLayout : ILayout`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Layout/GridLayout.cs`

## 概述

GridLayout 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Layout/GridLayout.cs。它是一个 public 类，实现/继承 ILayout，继承链为 GridLayout → ILayout。public/protected 成员共 6 个：5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GridLayout 是 TaleWorlds.GauntletUI 的顶层类型，命名空间与模块目录不同（TaleWorlds.GauntletUI.Layout），继承链 GridLayout → ILayout。成员构成以属性为主（属性 5/6，方法 0/6），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Layout/GridLayout.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `VerticalLayoutMethod` | `public GridVerticalLayoutMethod VerticalLayoutMethod` | 属性 |
| `HorizontalLayoutMethod` | `public GridHorizontalLayoutMethod HorizontalLayoutMethod` | 属性 |
| `Direction` | `public GridDirection Direction` | 属性 |
| `IReadOnlyList` | `public IReadOnlyList<float>RowHeights` | 属性 |
| `IReadOnlyList` | `public IReadOnlyList<float>ColumnWidths` | 属性 |
| `GridLayout` | `public GridLayout()` | 构造函数 |

## 参见

- [↑ gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 ILayout](../ILayout)
- [同命名空间 DefaultLayout](../DefaultLayout)
- [同命名空间 DragCarrierLayout](../DragCarrierLayout)
- [同命名空间 GridDirection](../GridDirection)
- [同命名空间 GridHorizontalLayoutMethod](../GridHorizontalLayoutMethod)
