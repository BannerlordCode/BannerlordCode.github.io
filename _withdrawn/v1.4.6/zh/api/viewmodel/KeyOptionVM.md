---
title: "KeyOptionVM"
description: "KeyOptionVM：TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions 的 public 类，继承 ViewModel；公开成员 13 个（方法 4、属性 8、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/KeyOptionVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# KeyOptionVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public abstract class KeyOptionVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/KeyOptionVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## 概述

KeyOptionVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/KeyOptionVM.cs。它是一个 public 类（abstract），实现/继承 ViewModel，继承链为 KeyOptionVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 13 个：4 方法、8 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：KeyOptionVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.MountAndBlade.ViewModelCollection`），命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`，继承链 KeyOptionVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 8/13，方法 4/13），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/KeyOptionVM.cs 的方法体或该类型的深写页确认。

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

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 ActionOptionDataVM](../ActionOptionDataVM/)
- [同命名空间 BooleanOptionDataVM](../BooleanOptionDataVM/)
- [同命名空间 BrightnessOptionVM](../BrightnessOptionVM/)
- [同命名空间 ExposureOptionVM](../ExposureOptionVM/)
