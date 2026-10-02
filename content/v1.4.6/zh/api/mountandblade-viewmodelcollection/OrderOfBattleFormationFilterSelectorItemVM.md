---
title: "OrderOfBattleFormationFilterSelectorItemVM"
description: "OrderOfBattleFormationFilterSelectorItemVM：TaleWorlds.MountAndBlade.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 6 个（方法 1、属性 4、字段 0）。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleFormationFilterSelectorItemVM.cs。"
---
# OrderOfBattleFormationFilterSelectorItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class OrderOfBattleFormationFilterSelectorItemVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleFormationFilterSelectorItemVM.cs`

## 概述

OrderOfBattleFormationFilterSelectorItemVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleFormationFilterSelectorItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 OrderOfBattleFormationFilterSelectorItemVM → ViewModel。public/protected 成员共 6 个：1 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：OrderOfBattleFormationFilterSelectorItemVM 是 TaleWorlds.MountAndBlade.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle），继承链 OrderOfBattleFormationFilterSelectorItemVM → ViewModel。成员构成以属性为主（属性 4/6，方法 1/6），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleFormationFilterSelectorItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OrderOfBattleFormationFilterSelectorItemVM` | `public OrderOfBattleFormationFilterSelectorItemVM(FormationFilterType filterType, Action<OrderOfBattleFormationFilterSelectorItemVM>onToggled)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `FilterTypeValue` | `public int FilterTypeValue` | 属性 |
| `IsActive` | `public bool IsActive` | 属性 |
| `IsEnabled` | `public bool IsEnabled` | 属性 |
| `Hint` | `public HintViewModel Hint` | 属性 |

## 参见

- [↑ mountandblade-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 OrderOfBattleFormationClassChangedEvent](../OrderOfBattleFormationClassChangedEvent)
- [同命名空间 OrderOfBattleFormationClassSelectorItemVM](../OrderOfBattleFormationClassSelectorItemVM)
- [同命名空间 OrderOfBattleFormationClassVM](../OrderOfBattleFormationClassVM)
- [同命名空间 OrderOfBattleFormationFilterSelectorItemComparer](../OrderOfBattleFormationFilterSelectorItemComparer)
