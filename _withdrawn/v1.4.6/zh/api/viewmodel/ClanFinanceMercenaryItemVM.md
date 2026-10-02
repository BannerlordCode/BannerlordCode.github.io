---
title: "ClanFinanceMercenaryItemVM"
description: "ClanFinanceMercenaryItemVM：TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance 的 public 类，继承 ClanFinanceIncomeItemBaseVM；公开成员 4 个（方法 2、属性 1、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceMercenaryItemVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClanFinanceMercenaryItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanFinanceMercenaryItemVM : ClanFinanceIncomeItemBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceMercenaryItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

ClanFinanceMercenaryItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceMercenaryItemVM.cs。它是一个 public 类，实现/继承 ClanFinanceIncomeItemBaseVM，继承链为 ClanFinanceMercenaryItemVM → ClanFinanceIncomeItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 4 个：2 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ClanFinanceMercenaryItemVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance`，继承链 ClanFinanceMercenaryItemVM → ClanFinanceIncomeItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以方法为主（方法 2/4，属性 1/4），对外主要以操作入口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceMercenaryItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Clan` | `public Clan Clan` | 属性 |
| `ClanFinanceMercenaryItemVM` | `public ClanFinanceMercenaryItemVM(Action<ClanFinanceIncomeItemBaseVM>onSelection, Action onRefresh) : base(onSelection, onRefresh)` | 构造函数 |
| `PopulateStatsList` | `protected override void PopulateStatsList()` | 方法 |
| `PopulateActionList` | `protected override void PopulateActionList()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ClanFinanceIncomeItemBaseVM](../ClanFinanceIncomeItemBaseVM/)
- [同命名空间 ClanFinanceAlleyItemVM](../ClanFinanceAlleyItemVM/)
- [同命名空间 ClanFinanceCommonAreaItemVM](../ClanFinanceCommonAreaItemVM/)
- [同命名空间 ClanFinanceTownItemVM](../ClanFinanceTownItemVM/)
- [同命名空间 ClanFinanceWorkshopItemVM](../ClanFinanceWorkshopItemVM/)
