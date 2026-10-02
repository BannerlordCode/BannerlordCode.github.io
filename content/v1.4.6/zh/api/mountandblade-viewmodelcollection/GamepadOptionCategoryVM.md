---
title: "GamepadOptionCategoryVM"
description: "GamepadOptionCategoryVM：TaleWorlds.MountAndBlade.ViewModelCollection 的 public 类，继承 GroupedOptionCategoryVM；公开成员 12 个（方法 2、属性 9、字段 0）。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GamepadOptions/GamepadOptionCategoryVM.cs。"
---
# GamepadOptionCategoryVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GamepadOptions`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class GamepadOptionCategoryVM : GroupedOptionCategoryVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GamepadOptions/GamepadOptionCategoryVM.cs`

## 概述

GamepadOptionCategoryVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GamepadOptions/GamepadOptionCategoryVM.cs。它是一个 public 类，实现/继承 GroupedOptionCategoryVM，继承链为 GamepadOptionCategoryVM → GroupedOptionCategoryVM → ViewModel。public/protected 成员共 12 个：2 方法、9 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GamepadOptionCategoryVM 是 TaleWorlds.MountAndBlade.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GamepadOptions），继承链 GamepadOptionCategoryVM → GroupedOptionCategoryVM → ViewModel。成员构成以属性为主（属性 9/12，方法 2/12），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GamepadOptions/GamepadOptionCategoryVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GamepadOptionCategoryVM` | `public GamepadOptionCategoryVM(OptionsVM options, TextObject name, OptionCategory category, bool isEnabled, bool isResetSupported = false) : base(options, name, category, isEnabled, isResetSupported)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `CurrentGamepadType` | `public int CurrentGamepadType` | 属性 |
| `MBBindingList` | `public MBBindingList<GamepadOptionKeyItemVM>OtherKeys` | 属性 |
| `MBBindingList` | `public MBBindingList<GamepadOptionKeyItemVM>DpadKeys` | 属性 |
| `MBBindingList` | `public MBBindingList<GamepadOptionKeyItemVM>LeftTriggerAndBumperKeys` | 属性 |
| `MBBindingList` | `public MBBindingList<GamepadOptionKeyItemVM>RightTriggerAndBumperKeys` | 属性 |
| `MBBindingList` | `public MBBindingList<GamepadOptionKeyItemVM>RightAnalogKeys` | 属性 |
| `MBBindingList` | `public MBBindingList<GamepadOptionKeyItemVM>LeftAnalogKeys` | 属性 |
| `MBBindingList` | `public MBBindingList<GamepadOptionKeyItemVM>FaceKeys` | 属性 |
| `MBBindingList` | `public MBBindingList<SelectorVM<SelectorItemVM>>Actions` | 属性 |

## 参见

- [↑ mountandblade-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 GroupedOptionCategoryVM](../GroupedOptionCategoryVM)
- [同命名空间 GamepadOptionKeyItemVM](../GamepadOptionKeyItemVM)
