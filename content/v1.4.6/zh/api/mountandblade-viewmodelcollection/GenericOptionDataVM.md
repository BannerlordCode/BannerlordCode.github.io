---
title: "GenericOptionDataVM"
description: "GenericOptionDataVM：TaleWorlds.MountAndBlade.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 21 个（方法 12、属性 8、字段 0）。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GenericOptionDataVM.cs。"
---
# GenericOptionDataVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public abstract class GenericOptionDataVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GenericOptionDataVM.cs`

## 概述

GenericOptionDataVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GenericOptionDataVM.cs。它是一个 public 类（abstract），实现/继承 ViewModel，继承链为 GenericOptionDataVM → ViewModel。public/protected 成员共 21 个：12 方法、8 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GenericOptionDataVM 是 TaleWorlds.MountAndBlade.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions），继承链 GenericOptionDataVM → ViewModel。成员构成以方法为主（方法 12/21，属性 8/21），对外主要以操作入口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GenericOptionDataVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsNative` | `public bool IsNative` | 属性 |
| `IsAction` | `public bool IsAction` | 属性 |
| `GenericOptionDataVM` | `protected GenericOptionDataVM(OptionsVM optionsVM, IOptionData option, TextObject name, TextObject description, OptionsVM.OptionsDataType typeID)` | 构造函数 |
| `UpdateData` | `public virtual void UpdateData(bool initUpdate)` | 方法 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `GetOptionType` | `public object GetOptionType()` | 方法 |
| `GetOptionData` | `public IOptionData GetOptionData()` | 方法 |
| `ResetToDefault` | `public void ResetToDefault()` | 方法 |
| `UpdateEnableState` | `public void UpdateEnableState()` | 方法 |
| `Description` | `public string Description` | 属性 |
| `Name` | `public string Name` | 属性 |
| `string[]ImageIDs` | `public string[]ImageIDs` | 属性 |
| `OptionTypeID` | `public int OptionTypeID` | 属性 |
| `IsEnabled` | `public bool IsEnabled` | 属性 |
| `Hint` | `public HintViewModel Hint` | 属性 |
| `UpdateValue` | `public abstract void UpdateValue();` | 方法 |
| `Cancel` | `public abstract void Cancel();` | 方法 |
| `IsChanged` | `public abstract bool IsChanged();` | 方法 |
| `SetValue` | `public abstract void SetValue(float value);` | 方法 |
| `ResetData` | `public abstract void ResetData();` | 方法 |
| `ApplyValue` | `public abstract void ApplyValue();` | 方法 |

## 参见

- [↑ mountandblade-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionOptionDataVM](../ActionOptionDataVM)
- [同命名空间 BooleanOptionDataVM](../BooleanOptionDataVM)
- [同命名空间 BrightnessOptionVM](../BrightnessOptionVM)
- [同命名空间 ExposureOptionVM](../ExposureOptionVM)
