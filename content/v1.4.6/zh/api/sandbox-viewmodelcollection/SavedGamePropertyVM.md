---
title: "SavedGamePropertyVM"
description: "SavedGamePropertyVM：SandBox.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 7 个（方法 1、属性 4、字段 0）。源文件 SandBox.ViewModelCollection/SaveLoad/SavedGamePropertyVM.cs。"
---
# SavedGamePropertyVM

**Namespace:** `SandBox.ViewModelCollection.SaveLoad`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class SavedGamePropertyVM : ViewModel`
**File:** `SandBox.ViewModelCollection/SaveLoad/SavedGamePropertyVM.cs`

## 概述

SavedGamePropertyVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/SaveLoad/SavedGamePropertyVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 SavedGamePropertyVM → ViewModel。public/protected 成员共 7 个：1 方法、4 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SavedGamePropertyVM 是 SandBox.ViewModelCollection 的顶层类型，命名空间与模块目录不同（SandBox.ViewModelCollection.SaveLoad），继承链 SavedGamePropertyVM → ViewModel。成员构成以属性为主（属性 4/7，方法 1/7），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/SaveLoad/SavedGamePropertyVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SavedGamePropertyVM` | `public SavedGamePropertyVM(SavedGamePropertyVM.SavedGameProperty type, TextObject value, TextObject hint)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `Hint` | `public HintViewModel Hint` | 属性 |
| `PropertyType` | `public string PropertyType` | 属性 |
| `Value` | `public string Value` | 属性 |
| `SavedGameProperty` | `public enum SavedGameProperty` | 属性 |
| `SavedGameProperty` | `public enum SavedGameProperty` | 嵌套类型 |

## 参见

- [↑ sandbox-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 MapSaveVM](../MapSaveVM)
- [同命名空间 SavedGameGroupVM](../SavedGameGroupVM)
- [同命名空间 SavedGameModuleInfoVM](../SavedGameModuleInfoVM)
- [同命名空间 SavedGameVM](../SavedGameVM)
