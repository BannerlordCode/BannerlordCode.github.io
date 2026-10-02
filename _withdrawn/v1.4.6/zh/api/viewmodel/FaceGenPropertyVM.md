---
title: "FaceGenPropertyVM"
description: "FaceGenPropertyVM：TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator 的 public 类，继承 ViewModel；公开成员 14 个（方法 4、属性 8、字段 1）。canonical 桶 viewmodel。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/FaceGenerator/FaceGenPropertyVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# FaceGenPropertyVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class FaceGenPropertyVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/FaceGenerator/FaceGenPropertyVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## 概述

FaceGenPropertyVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/FaceGenerator/FaceGenPropertyVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 FaceGenPropertyVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 14 个：4 方法、8 属性、1 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：FaceGenPropertyVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.MountAndBlade.ViewModelCollection`），命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator`，继承链 FaceGenPropertyVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 8/14，方法 4/14），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/FaceGenerator/FaceGenPropertyVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `KeyTimePoint` | `public int KeyTimePoint` | 属性 |
| `FaceGenPropertyVM` | `public FaceGenPropertyVM(int keyNo, double min, double max, TextObject name, int keyTimePoint, int tabId, double value, float initialValue, Action<int, float, bool, bool>updateFace, Action addCommand, Action resetSliderPrevValuesCommand, bool isEnabled = true, bool isDiscrete = false, bool addCommandOnValueChange = true)` | 构造函数 |
| `Reset` | `public void Reset()` | 方法 |
| `Randomize` | `public void Randomize()` | 方法 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `AddCommand` | `public void AddCommand()` | 方法 |
| `Min` | `public float Min` | 属性 |
| `TabID` | `public int TabID` | 属性 |
| `Max` | `public float Max` | 属性 |
| `Value` | `public float Value` | 属性 |
| `Name` | `public string Name` | 属性 |
| `IsEnabled` | `public bool IsEnabled` | 属性 |
| `IsDiscrete` | `public bool IsDiscrete` | 属性 |
| `PrevValue` | `public double PrevValue` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 FacegenListItemVM](../FacegenListItemVM/)
- [同命名空间 FaceGenVM](../FaceGenVM/)
