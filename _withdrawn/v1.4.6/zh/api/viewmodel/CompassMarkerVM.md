---
title: "CompassMarkerVM"
description: "CompassMarkerVM：TaleWorlds.MountAndBlade.ViewModelCollection.HUD.Compass 的 public 类，继承 ViewModel；公开成员 8 个（方法 1、属性 6、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/Compass/CompassMarkerVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CompassMarkerVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.Compass`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class CompassMarkerVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/Compass/CompassMarkerVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## 概述

CompassMarkerVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/Compass/CompassMarkerVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 CompassMarkerVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 8 个：1 方法、6 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CompassMarkerVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.MountAndBlade.ViewModelCollection`），命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.Compass`，继承链 CompassMarkerVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 6/8，方法 1/8），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/Compass/CompassMarkerVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Angle` | `public float Angle` | 属性 |
| `CompassMarkerVM` | `public CompassMarkerVM(bool isPrimary, float angle, string text)` | 构造函数 |
| `Refresh` | `public void Refresh(float circleX, float x, float distance)` | 方法 |
| `IsPrimary` | `public bool IsPrimary` | 属性 |
| `Text` | `public string Text` | 属性 |
| `Distance` | `public int Distance` | 属性 |
| `Position` | `public float Position` | 属性 |
| `FullPosition` | `public float FullPosition` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 CompassTargetVM](../CompassTargetVM/)
