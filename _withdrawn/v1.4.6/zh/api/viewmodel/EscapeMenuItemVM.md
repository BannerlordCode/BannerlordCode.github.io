---
title: "EscapeMenuItemVM"
description: "EscapeMenuItemVM：TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu 的 public 类，继承 ViewModel；公开成员 7 个（方法 2、属性 4、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/EscapeMenu/EscapeMenuItemVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EscapeMenuItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class EscapeMenuItemVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/EscapeMenu/EscapeMenuItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## 概述

EscapeMenuItemVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/EscapeMenu/EscapeMenuItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 EscapeMenuItemVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 7 个：2 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：EscapeMenuItemVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.MountAndBlade.ViewModelCollection`），命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu`，继承链 EscapeMenuItemVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 4/7，方法 2/7），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/EscapeMenu/EscapeMenuItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EscapeMenuItemVM` | `public EscapeMenuItemVM(TextObject item, Action<object>onExecute, object identifier, Func<Tuple<bool, TextObject>>getIsDisabledAndReason, bool isPositiveBehaviored = false)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ExecuteAction` | `public void ExecuteAction()` | 方法 |
| `DisabledHint` | `public HintViewModel DisabledHint` | 属性 |
| `ActionText` | `public string ActionText` | 属性 |
| `IsDisabled` | `public bool IsDisabled` | 属性 |
| `IsPositiveBehaviored` | `public bool IsPositiveBehaviored` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 EscapeMenuVM](../EscapeMenuVM/)
- [同命名空间 GameTipsVM](../GameTipsVM/)
