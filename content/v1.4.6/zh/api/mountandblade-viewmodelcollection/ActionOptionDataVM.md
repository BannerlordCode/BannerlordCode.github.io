---
title: "ActionOptionDataVM"
description: "ActionOptionDataVM：TaleWorlds.MountAndBlade.ViewModelCollection 的 public 类，继承 GenericOptionDataVM；公开成员 9 个（方法 7、属性 1、字段 0）。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/ActionOptionDataVM.cs。"
---
# ActionOptionDataVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class ActionOptionDataVM : GenericOptionDataVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/ActionOptionDataVM.cs`

## 概述

ActionOptionDataVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/ActionOptionDataVM.cs。它是一个 public 类，实现/继承 GenericOptionDataVM，继承链为 ActionOptionDataVM → GenericOptionDataVM → ViewModel。public/protected 成员共 9 个：7 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ActionOptionDataVM 是 TaleWorlds.MountAndBlade.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions），继承链 ActionOptionDataVM → GenericOptionDataVM → ViewModel。成员构成以方法为主（方法 7/9，属性 1/9），对外主要以操作入口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/ActionOptionDataVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ActionOptionDataVM` | `public ActionOptionDataVM(Action onAction, OptionsVM optionsVM, IOptionData option, TextObject name, TextObject optionActionName, TextObject description) : base(optionsVM, option, name, description, OptionsVM.OptionsDataType.ActionOption)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `Cancel` | `public override void Cancel()` | 方法 |
| `IsChanged` | `public override bool IsChanged()` | 方法 |
| `ResetData` | `public override void ResetData()` | 方法 |
| `SetValue` | `public override void SetValue(float value)` | 方法 |
| `UpdateValue` | `public override void UpdateValue()` | 方法 |
| `ApplyValue` | `public override void ApplyValue()` | 方法 |
| `ActionName` | `public string ActionName` | 属性 |

## 参见

- [↑ mountandblade-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 GenericOptionDataVM](../GenericOptionDataVM)
- [同命名空间 BooleanOptionDataVM](../BooleanOptionDataVM)
- [同命名空间 BrightnessOptionVM](../BrightnessOptionVM)
- [同命名空间 ExposureOptionVM](../ExposureOptionVM)
- [同命名空间 GenericOptionDataVM](../GenericOptionDataVM)
