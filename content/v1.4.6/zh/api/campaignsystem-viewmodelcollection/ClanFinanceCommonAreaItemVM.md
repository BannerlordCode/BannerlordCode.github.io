---
title: "ClanFinanceCommonAreaItemVM"
description: "ClanFinanceCommonAreaItemVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ClanFinanceIncomeItemBaseVM；公开成员 3 个（方法 2、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceCommonAreaItemVM.cs。"
---
# ClanFinanceCommonAreaItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanFinanceCommonAreaItemVM : ClanFinanceIncomeItemBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceCommonAreaItemVM.cs`

## 概述

ClanFinanceCommonAreaItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceCommonAreaItemVM.cs。它是一个 public 类，实现/继承 ClanFinanceIncomeItemBaseVM，继承链为 ClanFinanceCommonAreaItemVM → ClanFinanceIncomeItemBaseVM → ViewModel。public/protected 成员共 3 个：2 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ClanFinanceCommonAreaItemVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance），继承链 ClanFinanceCommonAreaItemVM → ClanFinanceIncomeItemBaseVM → ViewModel。成员构成以方法为主（方法 2/3，属性 0/3），对外主要以操作入口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceCommonAreaItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ClanFinanceCommonAreaItemVM` | `public ClanFinanceCommonAreaItemVM(Alley alley, Action<ClanFinanceIncomeItemBaseVM>onSelection, Action onRefresh) : base(onSelection, onRefresh)` | 构造函数 |
| `PopulateActionList` | `protected override void PopulateActionList()` | 方法 |
| `PopulateStatsList` | `protected override void PopulateStatsList()` | 方法 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 ClanFinanceIncomeItemBaseVM](../ClanFinanceIncomeItemBaseVM)
- [同命名空间 ClanFinanceAlleyItemVM](../ClanFinanceAlleyItemVM)
- [同命名空间 ClanFinanceMercenaryItemVM](../ClanFinanceMercenaryItemVM)
- [同命名空间 ClanFinanceTownItemVM](../ClanFinanceTownItemVM)
- [同命名空间 ClanFinanceWorkshopItemVM](../ClanFinanceWorkshopItemVM)
