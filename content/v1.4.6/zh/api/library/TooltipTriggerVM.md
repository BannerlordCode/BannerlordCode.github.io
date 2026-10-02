---
title: "TooltipTriggerVM"
description: "TooltipTriggerVM：TaleWorlds.Library 的 public 类，继承 ViewModel；公开成员 3 个（方法 2、属性 0、字段 0）。源文件 TaleWorlds.Library/Information/TooltipTriggerVM.cs。"
---
# TooltipTriggerVM

**Namespace:** `TaleWorlds.Library.Information`
**Module:** `TaleWorlds.Library`
**Type:** `public class TooltipTriggerVM : ViewModel`
**File:** `TaleWorlds.Library/Information/TooltipTriggerVM.cs`

## 概述

TooltipTriggerVM 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/Information/TooltipTriggerVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 TooltipTriggerVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 3 个：2 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TooltipTriggerVM 是 TaleWorlds.Library 的顶层类型，命名空间与模块目录不同（TaleWorlds.Library.Information），继承链 TooltipTriggerVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以方法为主（方法 2/3，属性 0/3），对外主要以操作入口暴露。继承链上的 INotifyPropertyChanged 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/Information/TooltipTriggerVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TooltipTriggerVM` | `public TooltipTriggerVM(Type linkedTooltipType, params object[]args)` | 构造函数 |
| `ExecuteBeginHint` | `public void ExecuteBeginHint()` | 方法 |
| `ExecuteEndHint` | `public void ExecuteEndHint()` | 方法 |

## 参见

- [↑ library 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 ViewModel](../ViewModel)
