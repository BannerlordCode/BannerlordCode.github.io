---
title: "SelectorItemVM"
description: "SelectorItemVM：TaleWorlds.Core.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 9 个（方法 1、属性 4、字段 0）。源文件 TaleWorlds.Core.ViewModelCollection/Selector/SelectorItemVM.cs。"
---
# SelectorItemVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection.Selector`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class SelectorItemVM : ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/Selector/SelectorItemVM.cs`

## 概述

SelectorItemVM 位于 TaleWorlds.Core.ViewModelCollection 模块，源文件 TaleWorlds.Core.ViewModelCollection/Selector/SelectorItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 SelectorItemVM → ViewModel。public/protected 成员共 9 个：1 方法、4 属性、4 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SelectorItemVM 是 TaleWorlds.Core.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.Core.ViewModelCollection.Selector），继承链 SelectorItemVM → ViewModel。成员构成以属性为主（属性 4/9，方法 1/9），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core.ViewModelCollection/Selector/SelectorItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SelectorItemVM` | `public SelectorItemVM(TextObject s)` | 构造函数 |
| `SelectorItemVM` | `public SelectorItemVM(string s)` | 构造函数 |
| `SelectorItemVM` | `public SelectorItemVM(TextObject s, TextObject hint)` | 构造函数 |
| `SelectorItemVM` | `public SelectorItemVM(string s, TextObject hint)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `StringItem` | `public string StringItem` | 属性 |
| `CanBeSelected` | `public bool CanBeSelected` | 属性 |
| `Hint` | `public HintViewModel Hint` | 属性 |
| `IsSelected` | `public bool IsSelected` | 属性 |

## 参见

- [↑ core-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 SelectorVM](../SelectorVM__1)
