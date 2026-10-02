---
title: "ClanIncomeVM"
description: "ClanIncomeVM：TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories 的 public 类，继承 ViewModel；公开成员 26 个（方法 6、属性 19、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanIncomeVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClanIncomeVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanIncomeVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanIncomeVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

ClanIncomeVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanIncomeVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 ClanIncomeVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 26 个：6 方法、19 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ClanIncomeVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories`，继承链 ClanIncomeVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 19/26，方法 6/26），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanIncomeVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TotalIncome` | `public int TotalIncome` | 属性 |
| `ClanIncomeVM` | `public ClanIncomeVM(Action onRefresh, Action<ClanCardSelectionInfo>openCardSelectionPopup)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `RefreshList` | `public void RefreshList()` | 方法 |
| `SelectWorkshop` | `public void SelectWorkshop(Workshop workshop)` | 方法 |
| `SelectAlley` | `public void SelectAlley(Alley alley)` | 方法 |
| `RefreshTotalIncome` | `public void RefreshTotalIncome()` | 方法 |
| `OnRefresh` | `public void OnRefresh()` | 方法 |
| `CurrentSelectedAlley` | `public ClanFinanceAlleyItemVM CurrentSelectedAlley` | 属性 |
| `CurrentSelectedIncome` | `public ClanFinanceWorkshopItemVM CurrentSelectedIncome` | 属性 |
| `CurrentSelectedSupporterGroup` | `public ClanSupporterGroupVM CurrentSelectedSupporterGroup` | 属性 |
| `IsAnyValidAlleySelected` | `public bool IsAnyValidAlleySelected` | 属性 |
| `IsAnyValidIncomeSelected` | `public bool IsAnyValidIncomeSelected` | 属性 |
| `IsAnyValidSupporterSelected` | `public bool IsAnyValidSupporterSelected` | 属性 |
| `IncomeText` | `public string IncomeText` | 属性 |
| `IsSelected` | `public bool IsSelected` | 属性 |
| `NameText` | `public string NameText` | 属性 |
| `LocationText` | `public string LocationText` | 属性 |
| `WorkshopText` | `public string WorkshopText` | 属性 |
| `SupportersText` | `public string SupportersText` | 属性 |
| `AlleysText` | `public string AlleysText` | 属性 |
| `NoAdditionalIncomesText` | `public string NoAdditionalIncomesText` | 属性 |
| `MBBindingList` | `public MBBindingList<ClanFinanceWorkshopItemVM>Incomes` | 属性 |
| `MBBindingList` | `public MBBindingList<ClanSupporterGroupVM>SupporterGroups` | 属性 |
| `MBBindingList` | `public MBBindingList<ClanFinanceAlleyItemVM>Alleys` | 属性 |
| `SortController` | `public ClanIncomeSortControllerVM SortController` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 ClanFiefsSortControllerVM](../ClanFiefsSortControllerVM/)
- [同命名空间 ClanFiefsVM](../ClanFiefsVM/)
- [同命名空间 ClanIncomeSortControllerVM](../ClanIncomeSortControllerVM/)
- [同命名空间 ClanMembersSortControllerVM](../ClanMembersSortControllerVM/)
