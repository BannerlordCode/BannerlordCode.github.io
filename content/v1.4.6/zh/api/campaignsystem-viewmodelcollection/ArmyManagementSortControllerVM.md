---
title: "ArmyManagementSortControllerVM"
description: "ArmyManagementSortControllerVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 33 个（方法 6、属性 19、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementSortControllerVM.cs。"
---
# ArmyManagementSortControllerVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ArmyManagementSortControllerVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementSortControllerVM.cs`

## 概述

ArmyManagementSortControllerVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementSortControllerVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 ArmyManagementSortControllerVM → ViewModel。public/protected 成员共 33 个：6 方法、19 属性、1 构造函数、7 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ArmyManagementSortControllerVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement），继承链 ArmyManagementSortControllerVM → ViewModel。成员构成以属性为主（属性 19/33，方法 6/33），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementSortControllerVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ArmyManagementSortControllerVM` | `public ArmyManagementSortControllerVM(MBBindingList<ArmyManagementItemVM>listToControl)` | 构造函数 |
| `ExecuteSortByDistance` | `public void ExecuteSortByDistance()` | 方法 |
| `ExecuteSortByCost` | `public void ExecuteSortByCost()` | 方法 |
| `ExecuteSortByStrength` | `public void ExecuteSortByStrength()` | 方法 |
| `ExecuteSortByName` | `public void ExecuteSortByName()` | 方法 |
| `ExecuteSortByClan` | `public void ExecuteSortByClan()` | 方法 |
| `ExecuteSortByShipCount` | `public void ExecuteSortByShipCount()` | 方法 |
| `DistanceState` | `public int DistanceState` | 属性 |
| `CostState` | `public int CostState` | 属性 |
| `StrengthState` | `public int StrengthState` | 属性 |
| `NameState` | `public int NameState` | 属性 |
| `ClanState` | `public int ClanState` | 属性 |
| `ShipCountState` | `public int ShipCountState` | 属性 |
| `IsNameSelected` | `public bool IsNameSelected` | 属性 |
| `IsCostSelected` | `public bool IsCostSelected` | 属性 |
| `IsStrengthSelected` | `public bool IsStrengthSelected` | 属性 |
| `IsDistanceSelected` | `public bool IsDistanceSelected` | 属性 |
| `IsClanSelected` | `public bool IsClanSelected` | 属性 |
| `IsShipCountSelected` | `public bool IsShipCountSelected` | 属性 |
| `IComparer` | `public abstract class ItemComparerBase : IComparer<ArmyManagementItemVM>` | 属性 |
| `ArmyManagementSortControllerVM.ItemComparerBase` | `public class ItemDistanceComparer : ArmyManagementSortControllerVM.ItemComparerBase` | 属性 |
| `ArmyManagementSortControllerVM.ItemComparerBase` | `public class ItemCostComparer : ArmyManagementSortControllerVM.ItemComparerBase` | 属性 |
| `ArmyManagementSortControllerVM.ItemComparerBase` | `public class ItemStrengthComparer : ArmyManagementSortControllerVM.ItemComparerBase` | 属性 |
| `ArmyManagementSortControllerVM.ItemComparerBase` | `public class ItemNameComparer : ArmyManagementSortControllerVM.ItemComparerBase` | 属性 |
| `ArmyManagementSortControllerVM.ItemComparerBase` | `public class ItemClanComparer : ArmyManagementSortControllerVM.ItemComparerBase` | 属性 |
| `ArmyManagementSortControllerVM.ItemComparerBase` | `public class ItemShipCountComparer : ArmyManagementSortControllerVM.ItemComparerBase` | 属性 |
| `IComparer` | `public abstract class ItemComparerBase : IComparer<ArmyManagementItemVM>` | 嵌套类型 |
| `ArmyManagementSortControllerVM.ItemComparerBase` | `public class ItemDistanceComparer : ArmyManagementSortControllerVM.ItemComparerBase` | 嵌套类型 |
| `ArmyManagementSortControllerVM.ItemComparerBase` | `public class ItemCostComparer : ArmyManagementSortControllerVM.ItemComparerBase` | 嵌套类型 |
| `ArmyManagementSortControllerVM.ItemComparerBase` | `public class ItemStrengthComparer : ArmyManagementSortControllerVM.ItemComparerBase` | 嵌套类型 |
| `ArmyManagementSortControllerVM.ItemComparerBase` | `public class ItemNameComparer : ArmyManagementSortControllerVM.ItemComparerBase` | 嵌套类型 |
| `ArmyManagementSortControllerVM.ItemComparerBase` | `public class ItemClanComparer : ArmyManagementSortControllerVM.ItemComparerBase` | 嵌套类型 |
| `ArmyManagementSortControllerVM.ItemComparerBase` | `public class ItemShipCountComparer : ArmyManagementSortControllerVM.ItemComparerBase` | 嵌套类型 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ArmyCohesionBoostedByPlayerEvent](../ArmyCohesionBoostedByPlayerEvent)
- [同命名空间 ArmyManagementBoostEventVM](../ArmyManagementBoostEventVM)
- [同命名空间 ArmyManagementItemVM](../ArmyManagementItemVM)
- [同命名空间 ArmyManagementVM](../ArmyManagementVM)
