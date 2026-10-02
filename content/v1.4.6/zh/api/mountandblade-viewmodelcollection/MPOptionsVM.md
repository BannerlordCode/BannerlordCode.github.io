---
title: "MPOptionsVM"
description: "MPOptionsVM：TaleWorlds.MountAndBlade.ViewModelCollection 的 public 类，继承 OptionsVM；公开成员 10 个（方法 4、属性 4、字段 0）。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/MPOptionsVM.cs。"
---
# MPOptionsVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MPOptionsVM : OptionsVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/MPOptionsVM.cs`

## 概述

MPOptionsVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/MPOptionsVM.cs。它是一个 public 类，实现/继承 OptionsVM，继承链为 MPOptionsVM → OptionsVM → ViewModel。public/protected 成员共 10 个：4 方法、4 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MPOptionsVM 是 TaleWorlds.MountAndBlade.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions），继承链 MPOptionsVM → OptionsVM → ViewModel。成员构成以方法为主（方法 4/10，属性 4/10），对外主要以操作入口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/MPOptionsVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MPOptionsVM` | `public MPOptionsVM(bool autoHandleClose, Action onChangeBrightnessRequest, Action onChangeExposureRequest, Action<KeyOptionVM>onKeybindRequest) : base(autoHandleClose, OptionsVM.OptionsMode.Multiplayer, onKeybindRequest, onChangeBrightnessRequest, onChangeExposureRequest)` | 构造函数 |
| `MPOptionsVM` | `public MPOptionsVM(Action onClose, Action<KeyOptionVM>onKeybindRequest) : base(OptionsVM.OptionsMode.Multiplayer, onClose, onKeybindRequest, null, null)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ExecuteCancel` | `public new void ExecuteCancel()` | 方法 |
| `ExecuteApply` | `public void ExecuteApply()` | 方法 |
| `ForceCancel` | `public void ForceCancel()` | 方法 |
| `AreHotkeysEnabled` | `public bool AreHotkeysEnabled` | 属性 |
| `IsEnabled` | `public bool IsEnabled` | 属性 |
| `ApplyText` | `public string ApplyText` | 属性 |
| `RevertText` | `public string RevertText` | 属性 |

## 参见

- [↑ mountandblade-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 OptionsVM](../OptionsVM)
- [同命名空间 ActionOptionDataVM](../ActionOptionDataVM)
- [同命名空间 BooleanOptionDataVM](../BooleanOptionDataVM)
- [同命名空间 BrightnessOptionVM](../BrightnessOptionVM)
- [同命名空间 ExposureOptionVM](../ExposureOptionVM)
