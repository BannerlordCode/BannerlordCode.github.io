---
title: "PhotoModeValueOptionVM"
description: "PhotoModeValueOptionVM：TaleWorlds.MountAndBlade.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 7 个（方法 1、属性 5、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/PhotoModeValueOptionVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PhotoModeValueOptionVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class PhotoModeValueOptionVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/PhotoModeValueOptionVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## 概述

PhotoModeValueOptionVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/PhotoModeValueOptionVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 PhotoModeValueOptionVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 7 个：1 方法、5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PhotoModeValueOptionVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.MountAndBlade.ViewModelCollection`），命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection`，继承链 PhotoModeValueOptionVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 5/7，方法 1/7），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/PhotoModeValueOptionVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PhotoModeValueOptionVM` | `public PhotoModeValueOptionVM(TextObject valueNameTextObj, float min, float max, float currentValue, Action<float>onChange)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `MinValue` | `public float MinValue` | 属性 |
| `MaxValue` | `public float MaxValue` | 属性 |
| `CurrentValue` | `public float CurrentValue` | 属性 |
| `CurrentValueText` | `public string CurrentValueText` | 属性 |
| `ValueName` | `public string ValueName` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 BoundaryCrossingVM](../BoundaryCrossingVM/)
- [同命名空间 FullScreenNoticeVM](../FullScreenNoticeVM/)
- [同命名空间 GameVersionVM](../GameVersionVM/)
- [同命名空间 IMissionScreen](../IMissionScreen/)
