---
title: "IViewModel"
description: "IViewModel：TaleWorlds.Library 的 public 接口，继承 INotifyPropertyChanged；公开成员 14 个（方法 6、属性 0、字段 0）。源文件 TaleWorlds.Library/IViewModel.cs。"
---
# IViewModel

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public interface IViewModel : INotifyPropertyChanged`
**File:** `TaleWorlds.Library/IViewModel.cs`

## 概述

IViewModel 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/IViewModel.cs。它是一个 public 接口，实现/继承 INotifyPropertyChanged，继承链为 IViewModel → INotifyPropertyChanged。public/protected 成员共 14 个：6 方法、8 事件。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IViewModel 是 TaleWorlds.Library 的顶层类型，命名空间与模块目录一致，继承链 IViewModel → INotifyPropertyChanged。成员构成以方法为主（方法 6/14，属性 0/14），对外主要以操作入口暴露。继承链上的 INotifyPropertyChanged 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/IViewModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetViewModelAtPath` | `object GetViewModelAtPath(BindingPath path);` | 方法 |
| `GetViewModelAtPath` | `object GetViewModelAtPath(BindingPath path, bool isList);` | 方法 |
| `GetPropertyValue` | `object GetPropertyValue(string name);` | 方法 |
| `GetPropertyValue` | `object GetPropertyValue(string name, PropertyTypeFeeder propertyTypeFeeder);` | 方法 |
| `SetPropertyValue` | `void SetPropertyValue(string name, object value);` | 方法 |
| `ExecuteCommand` | `void ExecuteCommand(string commandName, object[]parameters);` | 方法 |
| `PropertyChangedWithValue;` | `event PropertyChangedWithValueEventHandler PropertyChangedWithValue;` | 事件 |
| `PropertyChangedWithBoolValue;` | `event PropertyChangedWithBoolValueEventHandler PropertyChangedWithBoolValue;` | 事件 |
| `PropertyChangedWithIntValue;` | `event PropertyChangedWithIntValueEventHandler PropertyChangedWithIntValue;` | 事件 |
| `PropertyChangedWithFloatValue;` | `event PropertyChangedWithFloatValueEventHandler PropertyChangedWithFloatValue;` | 事件 |
| `PropertyChangedWithUIntValue;` | `event PropertyChangedWithUIntValueEventHandler PropertyChangedWithUIntValue;` | 事件 |
| `PropertyChangedWithColorValue;` | `event PropertyChangedWithColorValueEventHandler PropertyChangedWithColorValue;` | 事件 |
| `PropertyChangedWithDoubleValue;` | `event PropertyChangedWithDoubleValueEventHandler PropertyChangedWithDoubleValue;` | 事件 |
| `PropertyChangedWithVec2Value;` | `event PropertyChangedWithVec2ValueEventHandler PropertyChangedWithVec2Value;` | 事件 |

## 参见

- [↑ library 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AmbientInformation](../AmbientInformation)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform)
- [同命名空间 ApplicationVersion](../ApplicationVersion)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
