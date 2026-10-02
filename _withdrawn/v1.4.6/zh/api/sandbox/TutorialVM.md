---
title: "TutorialVM"
description: "TutorialVM：SandBox.ViewModelCollection.Tutorial 的 public 类，继承 ViewModel；公开成员 17 个（方法 5、属性 11、字段 0）。canonical 桶 sandbox。源文件 SandBox.ViewModelCollection/Tutorial/TutorialVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TutorialVM

**Namespace:** `SandBox.ViewModelCollection.Tutorial`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class TutorialVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Tutorial/TutorialVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

TutorialVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/Tutorial/TutorialVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 TutorialVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 17 个：5 方法、11 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TutorialVM 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.ViewModelCollection.Tutorial`，继承链 TutorialVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 11/17，方法 5/17），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/Tutorial/TutorialVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Instance` | `public static TutorialVM Instance` | 属性 |
| `TutorialVM` | `public TutorialVM(Action onTutorialDisabled)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `SetCurrentTutorial` | `public void SetCurrentTutorial(TutorialItemVM.ItemPlacements placement, string tutorialTypeId, bool requiresMouse)` | 方法 |
| `Tick` | `public void Tick(float dt)` | 方法 |
| `CloseTutorialStep` | `public void CloseTutorialStep(bool finalizeAllSteps = false)` | 方法 |
| `FinalizeTutorial` | `public void FinalizeTutorial()` | 方法 |
| `IsVisible` | `public bool IsVisible` | 属性 |
| `LeftItem` | `public TutorialItemVM LeftItem` | 属性 |
| `RightItem` | `public TutorialItemVM RightItem` | 属性 |
| `BottomItem` | `public TutorialItemVM BottomItem` | 属性 |
| `TopItem` | `public TutorialItemVM TopItem` | 属性 |
| `LeftBottomItem` | `public TutorialItemVM LeftBottomItem` | 属性 |
| `LeftTopItem` | `public TutorialItemVM LeftTopItem` | 属性 |
| `RightBottomItem` | `public TutorialItemVM RightBottomItem` | 属性 |
| `RightTopItem` | `public TutorialItemVM RightTopItem` | 属性 |
| `CenterItem` | `public TutorialItemVM CenterItem` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 TutorialItemVM](../TutorialItemVM/)
