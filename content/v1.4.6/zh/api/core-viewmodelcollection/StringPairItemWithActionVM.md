---
title: "StringPairItemWithActionVM"
description: "StringPairItemWithActionVM：TaleWorlds.Core.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 6 个（方法 1、属性 4、字段 0）。源文件 TaleWorlds.Core.ViewModelCollection/Generic/StringPairItemWithActionVM.cs。"
---
# StringPairItemWithActionVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection.Generic`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class StringPairItemWithActionVM : ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/Generic/StringPairItemWithActionVM.cs`

## 概述

StringPairItemWithActionVM 位于 TaleWorlds.Core.ViewModelCollection 模块，源文件 TaleWorlds.Core.ViewModelCollection/Generic/StringPairItemWithActionVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 StringPairItemWithActionVM → ViewModel。public/protected 成员共 6 个：1 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：StringPairItemWithActionVM 是 TaleWorlds.Core.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.Core.ViewModelCollection.Generic），继承链 StringPairItemWithActionVM → ViewModel。成员构成以属性为主（属性 4/6，方法 1/6），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core.ViewModelCollection/Generic/StringPairItemWithActionVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `StringPairItemWithActionVM` | `public StringPairItemWithActionVM(Action<object>onExecute, string definition, string value, object identifier)` | 构造函数 |
| `ExecuteAction` | `public void ExecuteAction()` | 方法 |
| `Definition` | `public string Definition` | 属性 |
| `Value` | `public string Value` | 属性 |
| `Hint` | `public HintViewModel Hint` | 属性 |
| `IsEnabled` | `public bool IsEnabled` | 属性 |

## 参见

- [↑ core-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BindingListFloatItem](../BindingListFloatItem)
- [同命名空间 BindingListStringItem](../BindingListStringItem)
- [同命名空间 BoolItemWithActionVM](../BoolItemWithActionVM)
- [同命名空间 StringItemWithActionVM](../StringItemWithActionVM)
