---
title: "BoolItemWithActionVM"
description: "BoolItemWithActionVM：TaleWorlds.Core.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 3 个（方法 1、属性 1、字段 0）。源文件 TaleWorlds.Core.ViewModelCollection/Generic/BoolItemWithActionVM.cs。"
---
# BoolItemWithActionVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection.Generic`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class BoolItemWithActionVM : ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/Generic/BoolItemWithActionVM.cs`

## 概述

BoolItemWithActionVM 位于 TaleWorlds.Core.ViewModelCollection 模块，源文件 TaleWorlds.Core.ViewModelCollection/Generic/BoolItemWithActionVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 BoolItemWithActionVM → ViewModel。public/protected 成员共 3 个：1 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BoolItemWithActionVM 是 TaleWorlds.Core.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.Core.ViewModelCollection.Generic），继承链 BoolItemWithActionVM → ViewModel。成员构成以方法为主（方法 1/3，属性 1/3），对外主要以操作入口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core.ViewModelCollection/Generic/BoolItemWithActionVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsActive` | `public bool IsActive` | 属性 |
| `ExecuteAction` | `public void ExecuteAction()` | 方法 |
| `BoolItemWithActionVM` | `public BoolItemWithActionVM(Action<object>onExecute, bool isActive, object identifier)` | 构造函数 |

## 参见

- [↑ core-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BindingListFloatItem](../BindingListFloatItem)
- [同命名空间 BindingListStringItem](../BindingListStringItem)
- [同命名空间 StringItemWithActionVM](../StringItemWithActionVM)
- [同命名空间 StringItemWithEnabledAndHintVM](../StringItemWithEnabledAndHintVM)
