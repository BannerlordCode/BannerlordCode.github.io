---
title: "GauntletView"
description: "GauntletView：TaleWorlds.GauntletUI.Data 的 public 类，继承 WidgetComponent；公开成员 13 个（方法 7、属性 6、字段 0）。源文件 TaleWorlds.GauntletUI.Data/GauntletView.cs。"
---
# GauntletView

**Namespace:** `TaleWorlds.GauntletUI.Data`
**Module:** `TaleWorlds.GauntletUI.Data`
**Type:** `public class GauntletView : WidgetComponent`
**File:** `TaleWorlds.GauntletUI.Data/GauntletView.cs`

## 概述

GauntletView 位于 TaleWorlds.GauntletUI.Data 模块，源文件 TaleWorlds.GauntletUI.Data/GauntletView.cs。它是一个 public 类，实现/继承 WidgetComponent，继承链为 GauntletView → WidgetComponent。public/protected 成员共 13 个：7 方法、6 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GauntletView 是 TaleWorlds.GauntletUI.Data 的顶层类型，命名空间与模块目录一致，继承链 GauntletView → WidgetComponent。成员构成以方法为主（方法 7/13，属性 6/13），对外主要以操作入口暴露。继承链上的 WidgetComponent 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI.Data/GauntletView.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GauntletMovie` | `public GauntletMovie GauntletMovie` | 属性 |
| `ItemTemplateUsageWithData` | `public ItemTemplateUsageWithData ItemTemplateUsageWithData` | 属性 |
| `ViewModelPath` | `public BindingPath ViewModelPath` | 属性 |
| `ViewModelPathString` | `public string ViewModelPathString` | 属性 |
| `Parent` | `public GauntletView Parent` | 属性 |
| `AddChild` | `public void AddChild(GauntletView child)` | 方法 |
| `RemoveChild` | `public void RemoveChild(GauntletView child)` | 方法 |
| `SwapChildrenAtIndeces` | `public void SwapChildrenAtIndeces(GauntletView child1, GauntletView child2)` | 方法 |
| `RefreshBinding` | `public void RefreshBinding()` | 方法 |
| `RefreshBindingWithChildren` | `public void RefreshBindingWithChildren()` | 方法 |
| `ReleaseBindingWithChildren` | `public void ReleaseBindingWithChildren()` | 方法 |
| `BindData` | `public void BindData(string property, BindingPath path)` | 方法 |
| `DisplayName` | `public string DisplayName` | 属性 |

## 参见

- [↑ gauntletui-data 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 GauntletMovie](../GauntletMovie)
- [同命名空间 GeneratedGauntletMovie](../GeneratedGauntletMovie)
- [同命名空间 GeneratedWidgetData](../GeneratedWidgetData)
- [同命名空间 IGauntletMovie](../IGauntletMovie)
