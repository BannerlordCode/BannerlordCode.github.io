---
title: "GraphVM"
description: "GraphVM：TaleWorlds.Library.Graph 的 public 类，继承 ViewModel；公开成员 9 个（方法 1、属性 7、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Library/Graph/GraphVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GraphVM

**Namespace:** `TaleWorlds.Library.Graph`
**Module:** `TaleWorlds.Library`
**Type:** `public class GraphVM : ViewModel`
**File:** `TaleWorlds.Library/Graph/GraphVM.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## 概述

GraphVM 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/Graph/GraphVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 GraphVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 9 个：1 方法、7 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GraphVM 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Library`），命名空间 `TaleWorlds.Library.Graph`，继承链 GraphVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 7/9，方法 1/9），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/Graph/GraphVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GraphVM` | `public GraphVM(string horizontalAxisLabel, string verticalAxisLabel)` | 构造函数 |
| `Draw` | `public void Draw([TupleElementNames(new string[]` | 方法 |
| `MBBindingList` | `public MBBindingList<GraphLineVM>Lines` | 属性 |
| `HorizontalAxisLabel` | `public string HorizontalAxisLabel` | 属性 |
| `VerticalAxisLabel` | `public string VerticalAxisLabel` | 属性 |
| `HorizontalMinValue` | `public float HorizontalMinValue` | 属性 |
| `HorizontalMaxValue` | `public float HorizontalMaxValue` | 属性 |
| `VerticalMinValue` | `public float VerticalMinValue` | 属性 |
| `VerticalMaxValue` | `public float VerticalMaxValue` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../ViewModel/)
- [同命名空间 GraphLinePointVM](../GraphLinePointVM/)
- [同命名空间 GraphLineVM](../GraphLineVM/)
