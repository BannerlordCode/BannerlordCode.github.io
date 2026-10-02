---
title: "EncyclopediaListSortControllerVM"
description: "EncyclopediaListSortControllerVM：TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List 的 public 类，继承 ViewModel；公开成员 14 个（方法 6、属性 7、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListSortControllerVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EncyclopediaListSortControllerVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaListSortControllerVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListSortControllerVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

EncyclopediaListSortControllerVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListSortControllerVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 EncyclopediaListSortControllerVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 14 个：6 方法、7 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：EncyclopediaListSortControllerVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List`，继承链 EncyclopediaListSortControllerVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 7/14，方法 6/14），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListSortControllerVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EncyclopediaListSortControllerVM` | `public EncyclopediaListSortControllerVM(EncyclopediaPage page, MBBindingList<EncyclopediaListItemVM>items)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `SetSortSelection` | `public void SetSortSelection(int index)` | 方法 |
| `ExecuteSwitchSortOrder` | `public void ExecuteSwitchSortOrder()` | 方法 |
| `SetSortOrder` | `public void SetSortOrder(bool isAscending)` | 方法 |
| `GetSortOrder` | `public bool GetSortOrder()` | 方法 |
| `SortSelection` | `public EncyclopediaListSelectorVM SortSelection` | 属性 |
| `NameLabel` | `public string NameLabel` | 属性 |
| `SortedValueLabelText` | `public string SortedValueLabelText` | 属性 |
| `SortByLabel` | `public string SortByLabel` | 属性 |
| `AlternativeSortState` | `public int AlternativeSortState` | 属性 |
| `IsAlternativeSortVisible` | `public bool IsAlternativeSortVisible` | 属性 |
| `IsHighlightEnabled` | `public bool IsHighlightEnabled` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 EncyclopediaFilterGroupVM](../EncyclopediaFilterGroupVM/)
- [同命名空间 EncyclopediaListFilterVM](../EncyclopediaListFilterVM/)
- [同命名空间 EncyclopediaListItemComparer](../EncyclopediaListItemComparer/)
- [同命名空间 EncyclopediaListItemVM](../EncyclopediaListItemVM/)
