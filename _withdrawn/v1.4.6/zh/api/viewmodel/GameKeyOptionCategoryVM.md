---
title: "GameKeyOptionCategoryVM"
description: "GameKeyOptionCategoryVM：TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys 的 public 类，继承 ViewModel；公开成员 13 个（方法 7、属性 5、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GameKeys/GameKeyOptionCategoryVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameKeyOptionCategoryVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class GameKeyOptionCategoryVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GameKeys/GameKeyOptionCategoryVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## 概述

GameKeyOptionCategoryVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GameKeys/GameKeyOptionCategoryVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 GameKeyOptionCategoryVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 13 个：7 方法、5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GameKeyOptionCategoryVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.MountAndBlade.ViewModelCollection`），命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys`，继承链 GameKeyOptionCategoryVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以方法为主（方法 7/13，属性 5/13），对外主要以操作入口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GameKeys/GameKeyOptionCategoryVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GameKeyOptionCategoryVM` | `public GameKeyOptionCategoryVM(Action<KeyOptionVM>onKeybindRequest, IEnumerable<string>gameKeyCategories, IEnumerable<int>hiddenGameKeys)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `IsChanged` | `public bool IsChanged()` | 方法 |
| `ExecuteResetToDefault` | `public void ExecuteResetToDefault()` | 方法 |
| `OnDone` | `public void OnDone()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `Cancel` | `public void Cancel()` | 方法 |
| `ApplyValues` | `public void ApplyValues()` | 方法 |
| `Name` | `public string Name` | 属性 |
| `IsEnabled` | `public bool IsEnabled` | 属性 |
| `ResetText` | `public string ResetText` | 属性 |
| `MBBindingList` | `public MBBindingList<GameKeyGroupVM>GameKeyGroups` | 属性 |
| `MBBindingList` | `public MBBindingList<AuxiliaryKeyGroupVM>AuxiliaryKeyGroups` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 GameKeyGroupVM](../GameKeyGroupVM/)
- [同命名空间 GameKeyOptionVM](../GameKeyOptionVM/)
