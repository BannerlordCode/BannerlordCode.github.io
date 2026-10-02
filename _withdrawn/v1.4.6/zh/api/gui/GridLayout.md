---
title: "GridLayout"
description: "GridLayout：TaleWorlds.GauntletUI.Layout 的 public 类，继承 ILayout；公开成员 6 个（方法 0、属性 5、字段 0）。canonical 桶 gui。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Layout/GridLayout.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GridLayout

**Namespace:** `TaleWorlds.GauntletUI.Layout`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class GridLayout : ILayout`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Layout/GridLayout.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## 概述

GridLayout 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Layout/GridLayout.cs。它是一个 public 类，实现/继承 ILayout，继承链为 GridLayout → ILayout。public/protected 成员共 6 个：5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GridLayout 落在 canonical 桶 `gui`（命中规则 `rule:TaleWorlds.GauntletUI`），命名空间 `TaleWorlds.GauntletUI.Layout`，继承链 GridLayout → ILayout。成员构成以属性为主（属性 5/6，方法 0/6），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Layout/GridLayout.cs 的方法体或该类型的深写页确认。

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

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ILayout](../ILayout/)
- [同命名空间 DefaultLayout](../DefaultLayout/)
- [同命名空间 DragCarrierLayout](../DragCarrierLayout/)
- [同命名空间 GridDirection](../GridDirection/)
- [同命名空间 GridHorizontalLayoutMethod](../GridHorizontalLayoutMethod/)
