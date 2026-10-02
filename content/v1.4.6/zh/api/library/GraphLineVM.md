---
title: "GraphLineVM"
description: "GraphLineVM：TaleWorlds.Library 的 public 类，继承 ViewModel；公开成员 4 个（方法 0、属性 3、字段 0）。源文件 TaleWorlds.Library/Graph/GraphLineVM.cs。"
---
# GraphLineVM

**Namespace:** `TaleWorlds.Library.Graph`
**Module:** `TaleWorlds.Library`
**Type:** `public class GraphLineVM : ViewModel`
**File:** `TaleWorlds.Library/Graph/GraphLineVM.cs`

## 概述

GraphLineVM 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/Graph/GraphLineVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 GraphLineVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 4 个：3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GraphLineVM 是 TaleWorlds.Library 的顶层类型，命名空间与模块目录不同（TaleWorlds.Library.Graph），继承链 GraphLineVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 3/4，方法 0/4），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/Graph/GraphLineVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GraphLineVM` | `public GraphLineVM(string ID, string name)` | 构造函数 |
| `MBBindingList` | `public MBBindingList<GraphLinePointVM>Points` | 属性 |
| `Name` | `public string Name` | 属性 |
| `ID` | `public string ID` | 属性 |

## 参见

- [↑ library 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 ViewModel](../ViewModel)
- [同命名空间 GraphLinePointVM](../GraphLinePointVM)
- [同命名空间 GraphVM](../GraphVM)
