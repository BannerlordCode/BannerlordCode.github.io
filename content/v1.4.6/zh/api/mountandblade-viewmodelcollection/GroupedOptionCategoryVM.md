---
title: "GroupedOptionCategoryVM"
description: "GroupedOptionCategoryVM：TaleWorlds.MountAndBlade.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 13 个（方法 5、属性 7、字段 0）。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GroupedOptionCategoryVM.cs。"
---
# GroupedOptionCategoryVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class GroupedOptionCategoryVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GroupedOptionCategoryVM.cs`

## 概述

GroupedOptionCategoryVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GroupedOptionCategoryVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 GroupedOptionCategoryVM → ViewModel。public/protected 成员共 13 个：5 方法、7 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GroupedOptionCategoryVM 是 TaleWorlds.MountAndBlade.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions），继承链 GroupedOptionCategoryVM → ViewModel。成员构成以属性为主（属性 7/13，方法 5/13），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GroupedOptionCategoryVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IEnumerable` | `public IEnumerable<GenericOptionDataVM>AllOptions` | 属性 |
| `GroupedOptionCategoryVM` | `public GroupedOptionCategoryVM(OptionsVM options, TextObject name, OptionCategory category, bool isEnabled, bool isResetSupported = false)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ResetData` | `public void ResetData()` | 方法 |
| `ExecuteResetToDefault` | `public void ExecuteResetToDefault()` | 方法 |
| `GetOption` | `public GenericOptionDataVM GetOption(ManagedOptions.ManagedOptionsType optionType)` | 方法 |
| `GetOption` | `public GenericOptionDataVM GetOption(NativeOptions.NativeOptionsType optionType)` | 方法 |
| `IsEnabled` | `public bool IsEnabled` | 属性 |
| `IsResetSupported` | `public bool IsResetSupported` | 属性 |
| `Name` | `public string Name` | 属性 |
| `ResetText` | `public string ResetText` | 属性 |
| `MBBindingList` | `public MBBindingList<OptionGroupVM>Groups` | 属性 |
| `MBBindingList` | `public MBBindingList<GenericOptionDataVM>BaseOptions` | 属性 |

## 参见

- [↑ mountandblade-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionOptionDataVM](../ActionOptionDataVM)
- [同命名空间 BooleanOptionDataVM](../BooleanOptionDataVM)
- [同命名空间 BrightnessOptionVM](../BrightnessOptionVM)
- [同命名空间 ExposureOptionVM](../ExposureOptionVM)
