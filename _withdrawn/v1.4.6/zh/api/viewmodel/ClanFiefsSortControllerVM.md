---
title: "ClanFiefsSortControllerVM"
description: "ClanFiefsSortControllerVM：TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories 的 public 类，继承 ViewModel；公开成员 23 个（方法 5、属性 13、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanFiefsSortControllerVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClanFiefsSortControllerVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanFiefsSortControllerVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanFiefsSortControllerVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

ClanFiefsSortControllerVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanFiefsSortControllerVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 ClanFiefsSortControllerVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 23 个：5 方法、13 属性、1 构造函数、4 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ClanFiefsSortControllerVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories`，继承链 ClanFiefsSortControllerVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 13/23，方法 5/23），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanFiefsSortControllerVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ClanFiefsSortControllerVM` | `public ClanFiefsSortControllerVM(List<MBBindingList<ClanSettlementItemVM>>listsToControl)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ExecuteSortByName` | `public void ExecuteSortByName()` | 方法 |
| `ExecuteSortByGovernor` | `public void ExecuteSortByGovernor()` | 方法 |
| `ExecuteSortByProfit` | `public void ExecuteSortByProfit()` | 方法 |
| `ResetAllStates` | `public void ResetAllStates()` | 方法 |
| `NameState` | `public int NameState` | 属性 |
| `GovernorState` | `public int GovernorState` | 属性 |
| `ProfitState` | `public int ProfitState` | 属性 |
| `IsNameSelected` | `public bool IsNameSelected` | 属性 |
| `IsGovernorSelected` | `public bool IsGovernorSelected` | 属性 |
| `IsProfitSelected` | `public bool IsProfitSelected` | 属性 |
| `NameText` | `public string NameText` | 属性 |
| `GovernorText` | `public string GovernorText` | 属性 |
| `ProfitText` | `public string ProfitText` | 属性 |
| `IComparer` | `public abstract class ItemComparerBase : IComparer<ClanSettlementItemVM>` | 属性 |
| `ClanFiefsSortControllerVM.ItemComparerBase` | `public class ItemNameComparer : ClanFiefsSortControllerVM.ItemComparerBase` | 属性 |
| `ClanFiefsSortControllerVM.ItemComparerBase` | `public class ItemGovernorComparer : ClanFiefsSortControllerVM.ItemComparerBase` | 属性 |
| `ClanFiefsSortControllerVM.ItemComparerBase` | `public class ItemProfitComparer : ClanFiefsSortControllerVM.ItemComparerBase` | 属性 |
| `IComparer` | `public abstract class ItemComparerBase : IComparer<ClanSettlementItemVM>` | 嵌套类型 |
| `ClanFiefsSortControllerVM.ItemComparerBase` | `public class ItemNameComparer : ClanFiefsSortControllerVM.ItemComparerBase` | 嵌套类型 |
| `ClanFiefsSortControllerVM.ItemComparerBase` | `public class ItemGovernorComparer : ClanFiefsSortControllerVM.ItemComparerBase` | 嵌套类型 |
| `ClanFiefsSortControllerVM.ItemComparerBase` | `public class ItemProfitComparer : ClanFiefsSortControllerVM.ItemComparerBase` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 ClanFiefsVM](../ClanFiefsVM/)
- [同命名空间 ClanIncomeSortControllerVM](../ClanIncomeSortControllerVM/)
- [同命名空间 ClanIncomeVM](../ClanIncomeVM/)
- [同命名空间 ClanMembersSortControllerVM](../ClanMembersSortControllerVM/)
