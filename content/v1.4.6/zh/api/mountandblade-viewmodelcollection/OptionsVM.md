---
title: "OptionsVM"
description: "OptionsVM：TaleWorlds.MountAndBlade.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 53 个（方法 23、属性 26、字段 0）。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/OptionsVM.cs。"
---
# OptionsVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class OptionsVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/OptionsVM.cs`

## 概述

OptionsVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/OptionsVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 OptionsVM → ViewModel。public/protected 成员共 53 个：23 方法、26 属性、2 构造函数、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：OptionsVM 是 TaleWorlds.MountAndBlade.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions），继承链 OptionsVM → ViewModel。成员构成以属性为主（属性 26/53，方法 23/53），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/OptionsVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CurrentOptionsMode` | `public OptionsVM.OptionsMode CurrentOptionsMode` | 属性 |
| `OptionsVM` | `public OptionsVM(bool autoHandleClose, OptionsVM.OptionsMode optionsMode, Action<KeyOptionVM>onKeybindRequest, Action onBrightnessExecute = null, Action onExposureExecute = null)` | 构造函数 |
| `OptionsVM` | `public OptionsVM(OptionsVM.OptionsMode optionsMode, Action onClose, Action<KeyOptionVM>onKeybindRequest, Action onBrightnessExecute = null, Action onExposureExecute = null) : this(false, optionsMode, onKeybindRequest, null, null)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ExecuteCloseOptions` | `public void ExecuteCloseOptions()` | 方法 |
| `OnBrightnessClick` | `protected void OnBrightnessClick()` | 方法 |
| `OnExposureClick` | `protected void OnExposureClick()` | 方法 |
| `GetActiveCategory` | `public ViewModel GetActiveCategory()` | 方法 |
| `GetIndexOfCategory` | `public int GetIndexOfCategory(ViewModel categoryVM)` | 方法 |
| `GetConfig` | `public float GetConfig(IOptionData data)` | 方法 |
| `SetConfig` | `public void SetConfig(IOptionData data, float val)` | 方法 |
| `SelectPreviousCategory` | `public void SelectPreviousCategory()` | 方法 |
| `SelectNextCategory` | `public void SelectNextCategory()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `HandleCancel` | `protected void HandleCancel(bool autoHandleClose)` | 方法 |
| `ExecuteCancel` | `public void ExecuteCancel()` | 方法 |
| `OnDone` | `protected void OnDone()` | 方法 |
| `ExecuteBenchmark` | `protected void ExecuteBenchmark()` | 方法 |
| `ExecuteDone` | `public void ExecuteDone()` | 方法 |
| `ExecuteReset` | `protected void ExecuteReset()` | 方法 |
| `IsOptionsChanged` | `public bool IsOptionsChanged()` | 方法 |
| `CategoryIndex` | `public int CategoryIndex` | 属性 |
| `OptionsLbl` | `public string OptionsLbl` | 属性 |
| `CancelLbl` | `public string CancelLbl` | 属性 |
| `DoneLbl` | `public string DoneLbl` | 属性 |
| `ResetLbl` | `public string ResetLbl` | 属性 |
| `IsConsole` | `public bool IsConsole` | 属性 |
| `IsDevelopmentMode` | `public bool IsDevelopmentMode` | 属性 |
| `VideoMemoryUsageName` | `public string VideoMemoryUsageName` | 属性 |
| `VideoMemoryUsageText` | `public string VideoMemoryUsageText` | 属性 |
| `VideoMemoryUsageNormalized` | `public float VideoMemoryUsageNormalized` | 属性 |
| `GameKeyOptionGroups` | `public GameKeyOptionCategoryVM GameKeyOptionGroups` | 属性 |
| `GamepadOptions` | `public GamepadOptionCategoryVM GamepadOptions` | 属性 |
| `PerformanceOptions` | `public GroupedOptionCategoryVM PerformanceOptions` | 属性 |
| `AudioOptions` | `public GroupedOptionCategoryVM AudioOptions` | 属性 |
| `GameplayOptions` | `public GroupedOptionCategoryVM GameplayOptions` | 属性 |
| `VideoOptions` | `public GroupedOptionCategoryVM VideoOptions` | 属性 |
| `BrightnessPopUp` | `public BrightnessOptionVM BrightnessPopUp` | 属性 |
| `ExposurePopUp` | `public ExposureOptionVM ExposurePopUp` | 属性 |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotkey)` | 方法 |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotkey)` | 方法 |
| `SetPreviousTabInputKey` | `public void SetPreviousTabInputKey(HotKey hotkey)` | 方法 |
| `SetNextTabInputKey` | `public void SetNextTabInputKey(HotKey hotkey)` | 方法 |
| `SetResetInputKey` | `public void SetResetInputKey(HotKey hotkey)` | 方法 |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | 属性 |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | 属性 |
| `PreviousTabInputKey` | `public InputKeyItemVM PreviousTabInputKey` | 属性 |
| `NextTabInputKey` | `public InputKeyItemVM NextTabInputKey` | 属性 |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey` | 属性 |
| `OptionsDataType` | `public enum OptionsDataType` | 属性 |
| `OptionsMode` | `public enum OptionsMode` | 属性 |
| `OptionsDataType` | `public enum OptionsDataType` | 嵌套类型 |
| `OptionsMode` | `public enum OptionsMode` | 嵌套类型 |

## 参见

- [↑ mountandblade-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionOptionDataVM](../ActionOptionDataVM)
- [同命名空间 BooleanOptionDataVM](../BooleanOptionDataVM)
- [同命名空间 BrightnessOptionVM](../BrightnessOptionVM)
- [同命名空间 ExposureOptionVM](../ExposureOptionVM)
