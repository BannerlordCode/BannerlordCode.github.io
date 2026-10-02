---
title: "ClanFinanceWorkshopItemVM"
description: "ClanFinanceWorkshopItemVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ClanFinanceIncomeItemBaseVM；公开成员 27 个（方法 7、属性 19、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceWorkshopItemVM.cs。"
---
# ClanFinanceWorkshopItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanFinanceWorkshopItemVM : ClanFinanceIncomeItemBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceWorkshopItemVM.cs`

## 概述

ClanFinanceWorkshopItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceWorkshopItemVM.cs。它是一个 public 类，实现/继承 ClanFinanceIncomeItemBaseVM，继承链为 ClanFinanceWorkshopItemVM → ClanFinanceIncomeItemBaseVM → ViewModel。public/protected 成员共 27 个：7 方法、19 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ClanFinanceWorkshopItemVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance），继承链 ClanFinanceWorkshopItemVM → ClanFinanceIncomeItemBaseVM → ViewModel。成员构成以属性为主（属性 19/27，方法 7/27），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceWorkshopItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Workshop` | `public Workshop Workshop` | 属性 |
| `ClanFinanceWorkshopItemVM` | `public ClanFinanceWorkshopItemVM(Workshop workshop, Action<ClanFinanceWorkshopItemVM>onSelection, Action onRefresh, Action<ClanCardSelectionInfo>openCardSelectionPopup) : base(null, onRefresh)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ExecuteToggleWarehouseUsage` | `public void ExecuteToggleWarehouseUsage()` | 方法 |
| `PopulateStatsList` | `protected override void PopulateStatsList()` | 方法 |
| `ExecuteBeginWorkshopHint` | `public void ExecuteBeginWorkshopHint()` | 方法 |
| `ExecuteEndHint` | `public void ExecuteEndHint()` | 方法 |
| `OnStoreOutputInWarehousePercentageUpdated` | `public void OnStoreOutputInWarehousePercentageUpdated(SelectorVM<WorkshopPercentageSelectorItemVM>selector)` | 方法 |
| `ExecuteManageWorkshop` | `public void ExecuteManageWorkshop()` | 方法 |
| `UseWarehouseAsInputHint` | `public HintViewModel UseWarehouseAsInputHint` | 属性 |
| `StoreOutputPercentageHint` | `public HintViewModel StoreOutputPercentageHint` | 属性 |
| `ManageWorkshopHint` | `public HintViewModel ManageWorkshopHint` | 属性 |
| `InputWarehouseCountsTooltip` | `public BasicTooltipViewModel InputWarehouseCountsTooltip` | 属性 |
| `OutputWarehouseCountsTooltip` | `public BasicTooltipViewModel OutputWarehouseCountsTooltip` | 属性 |
| `WorkshopTypeId` | `public string WorkshopTypeId` | 属性 |
| `InputsText` | `public string InputsText` | 属性 |
| `OutputsText` | `public string OutputsText` | 属性 |
| `InputProducts` | `public string InputProducts` | 属性 |
| `OutputProducts` | `public string OutputProducts` | 属性 |
| `UseWarehouseAsInputText` | `public string UseWarehouseAsInputText` | 属性 |
| `StoreOutputPercentageText` | `public string StoreOutputPercentageText` | 属性 |
| `WarehouseCapacityText` | `public string WarehouseCapacityText` | 属性 |
| `WarehouseCapacityValue` | `public string WarehouseCapacityValue` | 属性 |
| `ReceiveInputFromWarehouse` | `public bool ReceiveInputFromWarehouse` | 属性 |
| `WarehouseInputAmount` | `public int WarehouseInputAmount` | 属性 |
| `WarehouseOutputAmount` | `public int WarehouseOutputAmount` | 属性 |
| `SelectorVM` | `public SelectorVM<WorkshopPercentageSelectorItemVM>WarehousePercentageSelector` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 ClanFinanceIncomeItemBaseVM](../ClanFinanceIncomeItemBaseVM)
- [同命名空间 ClanFinanceAlleyItemVM](../ClanFinanceAlleyItemVM)
- [同命名空间 ClanFinanceCommonAreaItemVM](../ClanFinanceCommonAreaItemVM)
- [同命名空间 ClanFinanceMercenaryItemVM](../ClanFinanceMercenaryItemVM)
- [同命名空间 ClanFinanceTownItemVM](../ClanFinanceTownItemVM)
