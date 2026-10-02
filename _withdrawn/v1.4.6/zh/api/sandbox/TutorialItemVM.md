---
title: "TutorialItemVM"
description: "TutorialItemVM：SandBox.ViewModelCollection.Tutorial 的 public 类，继承 ViewModel；公开成员 19 个（方法 3、属性 14、字段 0）。canonical 桶 sandbox。源文件 SandBox.ViewModelCollection/Tutorial/TutorialItemVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TutorialItemVM

**Namespace:** `SandBox.ViewModelCollection.Tutorial`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class TutorialItemVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Tutorial/TutorialItemVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

TutorialItemVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/Tutorial/TutorialItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 TutorialItemVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 19 个：3 方法、14 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TutorialItemVM 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.ViewModelCollection.Tutorial`，继承链 TutorialItemVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 14/19，方法 3/19），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/Tutorial/TutorialItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Action` | `public Action<bool>SetIsActive` | 属性 |
| `TutorialItemVM` | `public TutorialItemVM()` | 构造函数 |
| `Init` | `public void Init(string tutorialTypeId, bool requiresMouse, Action onFinishTutorial)` | 方法 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `CloseTutorialPanel` | `public void CloseTutorialPanel()` | 方法 |
| `DisableCurrentTutorialHint` | `public HintViewModel DisableCurrentTutorialHint` | 属性 |
| `AreTutorialsEnabled` | `public bool AreTutorialsEnabled` | 属性 |
| `TutorialsEnabledText` | `public string TutorialsEnabledText` | 属性 |
| `TutorialTitleText` | `public string TutorialTitleText` | 属性 |
| `DisableAllTutorialsHint` | `public HintViewModel DisableAllTutorialsHint` | 属性 |
| `TitleText` | `public string TitleText` | 属性 |
| `StepCountText` | `public string StepCountText` | 属性 |
| `IsEnabled` | `public bool IsEnabled` | 属性 |
| `DescriptionText` | `public string DescriptionText` | 属性 |
| `SoundId` | `public string SoundId` | 属性 |
| `CenterImage` | `public ImageIdentifierVM CenterImage` | 属性 |
| `RequiresMouse` | `public bool RequiresMouse` | 属性 |
| `ItemPlacements` | `public enum ItemPlacements` | 属性 |
| `ItemPlacements` | `public enum ItemPlacements` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 TutorialVM](../TutorialVM/)
