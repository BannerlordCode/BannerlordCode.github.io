---
title: "GameOverStatCategoryVM"
description: "GameOverStatCategoryVM：SandBox.ViewModelCollection.GameOver 的 public 类，继承 ViewModel；公开成员 7 个（方法 2、属性 4、字段 0）。canonical 桶 sandbox。源文件 SandBox.ViewModelCollection/GameOver/GameOverStatCategoryVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameOverStatCategoryVM

**Namespace:** `SandBox.ViewModelCollection.GameOver`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class GameOverStatCategoryVM : ViewModel`
**File:** `SandBox.ViewModelCollection/GameOver/GameOverStatCategoryVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

GameOverStatCategoryVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/GameOver/GameOverStatCategoryVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 GameOverStatCategoryVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 7 个：2 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GameOverStatCategoryVM 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.ViewModelCollection.GameOver`，继承链 GameOverStatCategoryVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 4/7，方法 2/7），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/GameOver/GameOverStatCategoryVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GameOverStatCategoryVM` | `public GameOverStatCategoryVM(StatCategory category, Action<GameOverStatCategoryVM>onSelect)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ExecuteSelectCategory` | `public void ExecuteSelectCategory()` | 方法 |
| `Name` | `public string Name` | 属性 |
| `ID` | `public string ID` | 属性 |
| `IsSelected` | `public bool IsSelected` | 属性 |
| `MBBindingList` | `public MBBindingList<GameOverStatItemVM>Items` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 GameOverStatItemVM](../GameOverStatItemVM/)
- [同命名空间 GameOverStatsProvider](../GameOverStatsProvider/)
- [同命名空间 GameOverVM](../GameOverVM/)
- [同命名空间 StatCategory](../StatCategory/)
