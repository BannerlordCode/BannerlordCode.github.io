---
title: "BooleanOptionDataVM"
description: "BooleanOptionDataVM：TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions 的 public 类，继承 GenericOptionDataVM；公开成员 8 个（方法 6、属性 1、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/BooleanOptionDataVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BooleanOptionDataVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class BooleanOptionDataVM : GenericOptionDataVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/BooleanOptionDataVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## 概述

BooleanOptionDataVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/BooleanOptionDataVM.cs。它是一个 public 类，实现/继承 GenericOptionDataVM，继承链为 BooleanOptionDataVM → GenericOptionDataVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 8 个：6 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BooleanOptionDataVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.MountAndBlade.ViewModelCollection`），命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`，继承链 BooleanOptionDataVM → GenericOptionDataVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以方法为主（方法 6/8，属性 1/8），对外主要以操作入口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/BooleanOptionDataVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BooleanOptionDataVM` | `public BooleanOptionDataVM(OptionsVM optionsVM, IBooleanOptionData option, TextObject name, TextObject description) : base(optionsVM, option, name, description, OptionsVM.OptionsDataType.BooleanOption)` | 构造函数 |
| `OptionValueAsBoolean` | `public bool OptionValueAsBoolean` | 属性 |
| `UpdateValue` | `public override void UpdateValue()` | 方法 |
| `Cancel` | `public override void Cancel()` | 方法 |
| `SetValue` | `public override void SetValue(float value)` | 方法 |
| `ResetData` | `public override void ResetData()` | 方法 |
| `IsChanged` | `public override bool IsChanged()` | 方法 |
| `ApplyValue` | `public override void ApplyValue()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 GenericOptionDataVM](../GenericOptionDataVM/)
- [同命名空间 ActionOptionDataVM](../ActionOptionDataVM/)
- [同命名空间 BrightnessOptionVM](../BrightnessOptionVM/)
- [同命名空间 ExposureOptionVM](../ExposureOptionVM/)
- [同命名空间 GenericOptionDataVM](../GenericOptionDataVM/)
