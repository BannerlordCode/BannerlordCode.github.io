---
title: "SmeltingSortControllerVM"
description: "SmeltingSortControllerVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 24 个（方法 6、属性 13、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Smelting/SmeltingSortControllerVM.cs。"
---
# SmeltingSortControllerVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class SmeltingSortControllerVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Smelting/SmeltingSortControllerVM.cs`

## 概述

SmeltingSortControllerVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Smelting/SmeltingSortControllerVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 SmeltingSortControllerVM → ViewModel。public/protected 成员共 24 个：6 方法、13 属性、1 构造函数、4 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SmeltingSortControllerVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting），继承链 SmeltingSortControllerVM → ViewModel。成员构成以属性为主（属性 13/24，方法 6/24），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Smelting/SmeltingSortControllerVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SmeltingSortControllerVM` | `public SmeltingSortControllerVM()` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `SetListToControl` | `public void SetListToControl(MBBindingList<SmeltingItemVM>listToControl)` | 方法 |
| `SortByCurrentState` | `public void SortByCurrentState()` | 方法 |
| `ExecuteSortByName` | `public void ExecuteSortByName()` | 方法 |
| `ExecuteSortByYield` | `public void ExecuteSortByYield()` | 方法 |
| `ExecuteSortByType` | `public void ExecuteSortByType()` | 方法 |
| `NameState` | `public int NameState` | 属性 |
| `TypeState` | `public int TypeState` | 属性 |
| `YieldState` | `public int YieldState` | 属性 |
| `IsNameSelected` | `public bool IsNameSelected` | 属性 |
| `IsTypeSelected` | `public bool IsTypeSelected` | 属性 |
| `IsYieldSelected` | `public bool IsYieldSelected` | 属性 |
| `SortTypeText` | `public string SortTypeText` | 属性 |
| `SortNameText` | `public string SortNameText` | 属性 |
| `SortYieldText` | `public string SortYieldText` | 属性 |
| `IComparer` | `public abstract class ItemComparerBase : IComparer<SmeltingItemVM>` | 属性 |
| `SmeltingSortControllerVM.ItemComparerBase` | `public class ItemNameComparer : SmeltingSortControllerVM.ItemComparerBase` | 属性 |
| `SmeltingSortControllerVM.ItemComparerBase` | `public class ItemYieldComparer : SmeltingSortControllerVM.ItemComparerBase` | 属性 |
| `SmeltingSortControllerVM.ItemComparerBase` | `public class ItemTypeComparer : SmeltingSortControllerVM.ItemComparerBase` | 属性 |
| `IComparer` | `public abstract class ItemComparerBase : IComparer<SmeltingItemVM>` | 嵌套类型 |
| `SmeltingSortControllerVM.ItemComparerBase` | `public class ItemNameComparer : SmeltingSortControllerVM.ItemComparerBase` | 嵌套类型 |
| `SmeltingSortControllerVM.ItemComparerBase` | `public class ItemYieldComparer : SmeltingSortControllerVM.ItemComparerBase` | 嵌套类型 |
| `SmeltingSortControllerVM.ItemComparerBase` | `public class ItemTypeComparer : SmeltingSortControllerVM.ItemComparerBase` | 嵌套类型 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 SmeltingItemVM](../SmeltingItemVM)
- [同命名空间 SmeltingVM](../SmeltingVM)
