---
title: "PartySortControllerVM"
description: "PartySortControllerVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 7 个（方法 3、属性 3、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartySortControllerVM.cs。"
---
# PartySortControllerVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Party`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class PartySortControllerVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartySortControllerVM.cs`

## 概述

PartySortControllerVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartySortControllerVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 PartySortControllerVM → ViewModel。public/protected 成员共 7 个：3 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PartySortControllerVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.Party），继承链 PartySortControllerVM → ViewModel。成员构成以方法为主（方法 3/7，属性 3/7），对外主要以操作入口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartySortControllerVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PartySortControllerVM` | `public PartySortControllerVM(PartyScreenLogic.PartyRosterSide rosterSide, Action<PartyScreenLogic.PartyRosterSide, PartyScreenLogic.TroopSortType, bool>onSort)` | 构造函数 |
| `SelectSortType` | `public void SelectSortType(PartyScreenLogic.TroopSortType sortType)` | 方法 |
| `SortWith` | `public void SortWith(PartyScreenLogic.TroopSortType sortType, bool isAscending)` | 方法 |
| `ExecuteToggleOrder` | `public void ExecuteToggleOrder()` | 方法 |
| `IsAscending` | `public bool IsAscending` | 属性 |
| `IsCustomSort` | `public bool IsCustomSort` | 属性 |
| `SelectorVM` | `public SelectorVM<TroopSortSelectorItemVM>SortOptions` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 PartyCharacterVM](../PartyCharacterVM)
- [同命名空间 PartyCompositionVM](../PartyCompositionVM)
- [同命名空间 PartyTradeVM](../PartyTradeVM)
- [同命名空间 PartyVM](../PartyVM)
