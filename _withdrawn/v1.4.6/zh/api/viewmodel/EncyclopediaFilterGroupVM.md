---
title: "EncyclopediaFilterGroupVM"
description: "EncyclopediaFilterGroupVM：TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List 的 public 类，继承 ViewModel；公开成员 5 个（方法 2、属性 2、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaFilterGroupVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EncyclopediaFilterGroupVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaFilterGroupVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaFilterGroupVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

EncyclopediaFilterGroupVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaFilterGroupVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 EncyclopediaFilterGroupVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 5 个：2 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：EncyclopediaFilterGroupVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List`，继承链 EncyclopediaFilterGroupVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以方法为主（方法 2/5，属性 2/5），对外主要以操作入口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaFilterGroupVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EncyclopediaFilterGroupVM` | `public EncyclopediaFilterGroupVM(EncyclopediaFilterGroup filterGroup, Action<EncyclopediaListFilterVM>UpdateFilters)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `CopyFiltersFrom` | `public void CopyFiltersFrom(Dictionary<EncyclopediaFilterItem, bool>filters)` | 方法 |
| `FilterName` | `public string FilterName` | 属性 |
| `MBBindingList` | `public MBBindingList<EncyclopediaListFilterVM>Filters` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 EncyclopediaListFilterVM](../EncyclopediaListFilterVM/)
- [同命名空间 EncyclopediaListItemComparer](../EncyclopediaListItemComparer/)
- [同命名空间 EncyclopediaListItemVM](../EncyclopediaListItemVM/)
- [同命名空间 EncyclopediaListSelectorItemVM](../EncyclopediaListSelectorItemVM/)
