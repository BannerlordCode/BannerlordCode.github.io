---
title: "ClanMembersSortControllerVM"
description: "ClanMembersSortControllerVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 17 个（方法 4、属性 9、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanMembersSortControllerVM.cs。"
---
# ClanMembersSortControllerVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanMembersSortControllerVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanMembersSortControllerVM.cs`

## 概述

ClanMembersSortControllerVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanMembersSortControllerVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 ClanMembersSortControllerVM → ViewModel。public/protected 成员共 17 个：4 方法、9 属性、1 构造函数、3 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ClanMembersSortControllerVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories），继承链 ClanMembersSortControllerVM → ViewModel。成员构成以属性为主（属性 9/17，方法 4/17），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanMembersSortControllerVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ClanMembersSortControllerVM` | `public ClanMembersSortControllerVM(MBBindingList<MBBindingList<ClanLordItemVM>>listsToControl)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ExecuteSortByName` | `public void ExecuteSortByName()` | 方法 |
| `ExecuteSortByLocation` | `public void ExecuteSortByLocation()` | 方法 |
| `ResetAllStates` | `public void ResetAllStates()` | 方法 |
| `NameState` | `public int NameState` | 属性 |
| `LocationState` | `public int LocationState` | 属性 |
| `IsNameSelected` | `public bool IsNameSelected` | 属性 |
| `IsLocationSelected` | `public bool IsLocationSelected` | 属性 |
| `NameText` | `public string NameText` | 属性 |
| `LocationText` | `public string LocationText` | 属性 |
| `IComparer` | `public abstract class ItemComparerBase : IComparer<ClanLordItemVM>` | 属性 |
| `ClanMembersSortControllerVM.ItemComparerBase` | `public class ItemNameComparer : ClanMembersSortControllerVM.ItemComparerBase` | 属性 |
| `ClanMembersSortControllerVM.ItemComparerBase` | `public class ItemLocationComparer : ClanMembersSortControllerVM.ItemComparerBase` | 属性 |
| `IComparer` | `public abstract class ItemComparerBase : IComparer<ClanLordItemVM>` | 嵌套类型 |
| `ClanMembersSortControllerVM.ItemComparerBase` | `public class ItemNameComparer : ClanMembersSortControllerVM.ItemComparerBase` | 嵌套类型 |
| `ClanMembersSortControllerVM.ItemComparerBase` | `public class ItemLocationComparer : ClanMembersSortControllerVM.ItemComparerBase` | 嵌套类型 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ClanFiefsSortControllerVM](../ClanFiefsSortControllerVM)
- [同命名空间 ClanFiefsVM](../ClanFiefsVM)
- [同命名空间 ClanIncomeSortControllerVM](../ClanIncomeSortControllerVM)
- [同命名空间 ClanIncomeVM](../ClanIncomeVM)
