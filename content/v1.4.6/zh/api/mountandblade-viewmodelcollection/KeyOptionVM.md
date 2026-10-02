---
title: "KeyOptionVM"
description: "KeyOptionVM：TaleWorlds.MountAndBlade.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 13 个（方法 4、属性 8、字段 0）。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/KeyOptionVM.cs。"
---
# KeyOptionVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public abstract class KeyOptionVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/KeyOptionVM.cs`

## 概述

KeyOptionVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/KeyOptionVM.cs。它是一个 public 类（abstract），实现/继承 ViewModel，继承链为 KeyOptionVM → ViewModel。public/protected 成员共 13 个：4 方法、8 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：KeyOptionVM 是 TaleWorlds.MountAndBlade.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions），继承链 KeyOptionVM → ViewModel。成员构成以属性为主（属性 8/13，方法 4/13），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/KeyOptionVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CurrentKey` | `public Key CurrentKey` | 属性 |
| `Key` | `public Key Key` | 属性 |
| `KeyOptionVM` | `public KeyOptionVM(string groupId, string id, Action<KeyOptionVM>onKeybindRequest)` | 构造函数 |
| `Set` | `public abstract void Set(InputKey newKey);` | 方法 |
| `Update` | `public abstract void Update();` | 方法 |
| `OnDone` | `public abstract void OnDone();` | 方法 |
| `ExecuteRevert` | `public abstract void ExecuteRevert();` | 方法 |
| `OptionValueText` | `public string OptionValueText` | 属性 |
| `Name` | `public string Name` | 属性 |
| `Description` | `public string Description` | 属性 |
| `IsChanged` | `public bool IsChanged` | 属性 |
| `RevertHint` | `public HintViewModel RevertHint` | 属性 |
| `ExtraInformationText` | `public string ExtraInformationText` | 属性 |

## 参见

- [↑ mountandblade-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionOptionDataVM](../ActionOptionDataVM)
- [同命名空间 BooleanOptionDataVM](../BooleanOptionDataVM)
- [同命名空间 BrightnessOptionVM](../BrightnessOptionVM)
- [同命名空间 ExposureOptionVM](../ExposureOptionVM)
