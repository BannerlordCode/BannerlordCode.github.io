---
title: "OrderOfBattleFormationClassVM"
description: "OrderOfBattleFormationClassVM：TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle 的 public 类，继承 ViewModel；公开成员 15 个（方法 4、属性 10、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleFormationClassVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# OrderOfBattleFormationClassVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class OrderOfBattleFormationClassVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleFormationClassVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## 概述

OrderOfBattleFormationClassVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleFormationClassVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 OrderOfBattleFormationClassVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 15 个：4 方法、10 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：OrderOfBattleFormationClassVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.MountAndBlade.ViewModelCollection`），命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle`，继承链 OrderOfBattleFormationClassVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 10/15，方法 4/15），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleFormationClassVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Class` | `public FormationClass Class` | 属性 |
| `PreviousWeight` | `public int PreviousWeight` | 属性 |
| `OrderOfBattleFormationClassVM` | `public OrderOfBattleFormationClassVM(OrderOfBattleFormationItemVM formationItem, FormationClass formationClass = FormationClass.NumberOfAllFormations)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `UpdateTroopCountText` | `public void UpdateTroopCountText()` | 方法 |
| `SetWeightAdjustmentLock` | `public void SetWeightAdjustmentLock(bool isLocked)` | 方法 |
| `UpdateWeightAdjustable` | `public void UpdateWeightAdjustable()` | 方法 |
| `IsAdjustable` | `public bool IsAdjustable` | 属性 |
| `IsLocked` | `public bool IsLocked` | 属性 |
| `IsUnset` | `public bool IsUnset` | 属性 |
| `Weight` | `public int Weight` | 属性 |
| `ShownFormationClass` | `public int ShownFormationClass` | 属性 |
| `TroopCountText` | `public string TroopCountText` | 属性 |
| `LockWeightHint` | `public HintViewModel LockWeightHint` | 属性 |
| `IsWeightHighlightActive` | `public bool IsWeightHighlightActive` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 OrderOfBattleFormationClassChangedEvent](../OrderOfBattleFormationClassChangedEvent/)
- [同命名空间 OrderOfBattleFormationClassSelectorItemVM](../OrderOfBattleFormationClassSelectorItemVM/)
- [同命名空间 OrderOfBattleFormationFilterSelectorItemComparer](../OrderOfBattleFormationFilterSelectorItemComparer/)
- [同命名空间 OrderOfBattleFormationFilterSelectorItemVM](../OrderOfBattleFormationFilterSelectorItemVM/)
