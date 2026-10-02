---
title: "SavedGameModuleInfoVM"
description: "SavedGameModuleInfoVM：SandBox.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 4 个（方法 0、属性 3、字段 0）。源文件 SandBox.ViewModelCollection/SaveLoad/SavedGameModuleInfoVM.cs。"
---
# SavedGameModuleInfoVM

**Namespace:** `SandBox.ViewModelCollection.SaveLoad`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class SavedGameModuleInfoVM : ViewModel`
**File:** `SandBox.ViewModelCollection/SaveLoad/SavedGameModuleInfoVM.cs`

## 概述

SavedGameModuleInfoVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/SaveLoad/SavedGameModuleInfoVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 SavedGameModuleInfoVM → ViewModel。public/protected 成员共 4 个：3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SavedGameModuleInfoVM 是 SandBox.ViewModelCollection 的顶层类型，命名空间与模块目录不同（SandBox.ViewModelCollection.SaveLoad），继承链 SavedGameModuleInfoVM → ViewModel。成员构成以属性为主（属性 3/4，方法 0/4），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/SaveLoad/SavedGameModuleInfoVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SavedGameModuleInfoVM` | `public SavedGameModuleInfoVM(string definition, string seperator, string value)` | 构造函数 |
| `Definition` | `public string Definition` | 属性 |
| `Seperator` | `public string Seperator` | 属性 |
| `Value` | `public string Value` | 属性 |

## 参见

- [↑ sandbox-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 MapSaveVM](../MapSaveVM)
- [同命名空间 SavedGameGroupVM](../SavedGameGroupVM)
- [同命名空间 SavedGamePropertyVM](../SavedGamePropertyVM)
- [同命名空间 SavedGameVM](../SavedGameVM)
