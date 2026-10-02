---
title: "GamepadOptionCategoryVM"
description: "GamepadOptionCategoryVM：TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GamepadOptions 的 public 类，继承 GroupedOptionCategoryVM；公开成员 12 个（方法 2、属性 9、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GamepadOptions/GamepadOptionCategoryVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GamepadOptionCategoryVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GamepadOptions`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class GamepadOptionCategoryVM : GroupedOptionCategoryVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GamepadOptions/GamepadOptionCategoryVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## 概述

GamepadOptionCategoryVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GamepadOptions/GamepadOptionCategoryVM.cs。它是一个 public 类，实现/继承 GroupedOptionCategoryVM，继承链为 GamepadOptionCategoryVM → GroupedOptionCategoryVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 12 个：2 方法、9 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GamepadOptionCategoryVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.MountAndBlade.ViewModelCollection`），命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GamepadOptions`，继承链 GamepadOptionCategoryVM → GroupedOptionCategoryVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 9/12，方法 2/12），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GamepadOptions/GamepadOptionCategoryVM.cs 的方法体或该类型的深写页确认。

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

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 GroupedOptionCategoryVM](../GroupedOptionCategoryVM/)
- [同命名空间 GamepadOptionKeyItemVM](../GamepadOptionKeyItemVM/)
