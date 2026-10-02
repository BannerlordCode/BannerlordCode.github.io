---
title: "GameTipsVM"
description: "GameTipsVM：TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu 的 public 类，继承 ViewModel；公开成员 8 个（方法 4、属性 3、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/EscapeMenu/GameTipsVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameTipsVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class GameTipsVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/EscapeMenu/GameTipsVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## 概述

GameTipsVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/EscapeMenu/GameTipsVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 GameTipsVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 8 个：4 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GameTipsVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.MountAndBlade.ViewModelCollection`），命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu`，继承链 GameTipsVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以方法为主（方法 4/8，属性 3/8），对外主要以操作入口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/EscapeMenu/GameTipsVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GameTipsVM` | `public GameTipsVM(bool isAutoChangeEnabled, bool navigationButtonsEnabled)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ExecutePreviousTip` | `public void ExecutePreviousTip()` | 方法 |
| `ExecuteNextTip` | `public void ExecuteNextTip()` | 方法 |
| `OnTick` | `public void OnTick(float dt)` | 方法 |
| `CurrentTip` | `public string CurrentTip` | 属性 |
| `GameTipTitle` | `public string GameTipTitle` | 属性 |
| `NavigationButtonsEnabled` | `public bool NavigationButtonsEnabled` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 EscapeMenuItemVM](../EscapeMenuItemVM/)
- [同命名空间 EscapeMenuVM](../EscapeMenuVM/)
