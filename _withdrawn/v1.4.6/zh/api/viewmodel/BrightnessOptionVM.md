---
title: "BrightnessOptionVM"
description: "BrightnessOptionVM：TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions 的 public 类，继承 ViewModel；公开成员 19 个（方法 5、属性 13、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/BrightnessOptionVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BrightnessOptionVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class BrightnessOptionVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/BrightnessOptionVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## 概述

BrightnessOptionVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/BrightnessOptionVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 BrightnessOptionVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 19 个：5 方法、13 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BrightnessOptionVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.MountAndBlade.ViewModelCollection`），命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`，继承链 BrightnessOptionVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 13/19，方法 5/19），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/BrightnessOptionVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BrightnessOptionVM` | `public BrightnessOptionVM(Action<bool>onClose = null)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ExecuteConfirm` | `public void ExecuteConfirm()` | 方法 |
| `ExecuteCancel` | `public void ExecuteCancel()` | 方法 |
| `TitleText` | `public string TitleText` | 属性 |
| `ExplanationText` | `public string ExplanationText` | 属性 |
| `CancelText` | `public string CancelText` | 属性 |
| `AcceptText` | `public string AcceptText` | 属性 |
| `Value` | `public int Value` | 属性 |
| `InitialValue` | `public int InitialValue` | 属性 |
| `InitialValue1` | `public float InitialValue1` | 属性 |
| `InitialValue2` | `public float InitialValue2` | 属性 |
| `Value1` | `public int Value1` | 属性 |
| `Value2` | `public int Value2` | 属性 |
| `Visible` | `public bool Visible` | 属性 |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotkey)` | 方法 |
| `SetConfirmInputKey` | `public void SetConfirmInputKey(HotKey hotkey)` | 方法 |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | 属性 |
| `ConfirmInputKey` | `public InputKeyItemVM ConfirmInputKey` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 ActionOptionDataVM](../ActionOptionDataVM/)
- [同命名空间 BooleanOptionDataVM](../BooleanOptionDataVM/)
- [同命名空间 ExposureOptionVM](../ExposureOptionVM/)
- [同命名空间 GenericOptionDataVM](../GenericOptionDataVM/)
