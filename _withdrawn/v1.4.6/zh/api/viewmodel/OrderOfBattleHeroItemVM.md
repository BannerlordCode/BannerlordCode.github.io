---
title: "OrderOfBattleHeroItemVM"
description: "OrderOfBattleHeroItemVM：TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle 的 public 类，继承 ViewModel；公开成员 24 个（方法 6、属性 16、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleHeroItemVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# OrderOfBattleHeroItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class OrderOfBattleHeroItemVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleHeroItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## 概述

OrderOfBattleHeroItemVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleHeroItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 OrderOfBattleHeroItemVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 24 个：6 方法、16 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：OrderOfBattleHeroItemVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.MountAndBlade.ViewModelCollection`），命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle`，继承链 OrderOfBattleHeroItemVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 16/24，方法 6/24），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleHeroItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BannerOfHero` | `public ItemObject BannerOfHero` | 属性 |
| `IsAssignedBeforePlayer` | `public bool IsAssignedBeforePlayer` | 属性 |
| `InitialFormation` | `public Formation InitialFormation` | 属性 |
| `InitialFormationItem` | `public OrderOfBattleFormationItemVM InitialFormationItem` | 属性 |
| `CurrentAssignedFormationItem` | `public OrderOfBattleFormationItemVM CurrentAssignedFormationItem` | 属性 |
| `OrderOfBattleHeroItemVM` | `public OrderOfBattleHeroItemVM()` | 构造函数 |
| `OrderOfBattleHeroItemVM` | `public OrderOfBattleHeroItemVM(Agent agent)` | 构造函数 |
| `SetInitialFormation` | `public void SetInitialFormation(OrderOfBattleFormationItemVM formation)` | 方法 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnAssignmentRemoved` | `public void OnAssignmentRemoved()` | 方法 |
| `RefreshInformation` | `public void RefreshInformation()` | 方法 |
| `RefreshAssignmentInfo` | `public void RefreshAssignmentInfo()` | 方法 |
| `SetIsPreAssigned` | `public void SetIsPreAssigned(bool isPreAssigned)` | 方法 |
| `MismatchedAssignmentDescriptionText` | `public string MismatchedAssignmentDescriptionText` | 属性 |
| `IsAssignedToAFormation` | `public bool IsAssignedToAFormation` | 属性 |
| `IsLeadingAFormation` | `public bool IsLeadingAFormation` | 属性 |
| `HasMismatchedAssignment` | `public bool HasMismatchedAssignment` | 属性 |
| `IsSelected` | `public bool IsSelected` | 属性 |
| `IsDisabled` | `public bool IsDisabled` | 属性 |
| `IsShown` | `public bool IsShown` | 属性 |
| `IsMainHero` | `public bool IsMainHero` | 属性 |
| `ImageIdentifier` | `public CharacterImageIdentifierVM ImageIdentifier` | 属性 |
| `Tooltip` | `public BasicTooltipViewModel Tooltip` | 属性 |
| `IsHighlightActive` | `public bool IsHighlightActive` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 OrderOfBattleFormationClassChangedEvent](../OrderOfBattleFormationClassChangedEvent/)
- [同命名空间 OrderOfBattleFormationClassSelectorItemVM](../OrderOfBattleFormationClassSelectorItemVM/)
- [同命名空间 OrderOfBattleFormationClassVM](../OrderOfBattleFormationClassVM/)
- [同命名空间 OrderOfBattleFormationFilterSelectorItemComparer](../OrderOfBattleFormationFilterSelectorItemComparer/)
