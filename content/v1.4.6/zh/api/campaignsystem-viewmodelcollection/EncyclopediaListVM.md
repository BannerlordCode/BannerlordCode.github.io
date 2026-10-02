---
title: "EncyclopediaListVM"
description: "EncyclopediaListVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 EncyclopediaPageVM；公开成员 14 个（方法 6、属性 7、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListVM.cs。"
---
# EncyclopediaListVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaListVM : EncyclopediaPageVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListVM.cs`

## 概述

EncyclopediaListVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListVM.cs。它是一个 public 类，实现/继承 EncyclopediaPageVM，继承链为 EncyclopediaListVM → EncyclopediaPageVM → ViewModel。public/protected 成员共 14 个：6 方法、7 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：EncyclopediaListVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List），继承链 EncyclopediaListVM → EncyclopediaPageVM → ViewModel。成员构成以属性为主（属性 7/14，方法 6/14），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EncyclopediaListVM` | `public EncyclopediaListVM(EncyclopediaPageArgs args) : base(args)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `GetName` | `public override string GetName()` | 方法 |
| `GetNavigationBarURL` | `public override string GetNavigationBarURL()` | 方法 |
| `CopyFiltersFrom` | `public void CopyFiltersFrom(Dictionary<EncyclopediaFilterItem, bool>filters)` | 方法 |
| `Refresh` | `public override void Refresh()` | 方法 |
| `EmptyListText` | `public string EmptyListText` | 属性 |
| `LastSelectedItemId` | `public string LastSelectedItemId` | 属性 |
| `MBBindingList` | `public override MBBindingList<EncyclopediaListItemVM>Items` | 属性 |
| `SortController` | `public override EncyclopediaListSortControllerVM SortController` | 属性 |
| `IsInitializationOver` | `public bool IsInitializationOver` | 属性 |
| `IsFilterHighlightEnabled` | `public bool IsFilterHighlightEnabled` | 属性 |
| `MBBindingList` | `public override MBBindingList<EncyclopediaFilterGroupVM>FilterGroups` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 EncyclopediaPageVM](../EncyclopediaPageVM)
- [同命名空间 EncyclopediaFilterGroupVM](../EncyclopediaFilterGroupVM)
- [同命名空间 EncyclopediaListFilterVM](../EncyclopediaListFilterVM)
- [同命名空间 EncyclopediaListItemComparer](../EncyclopediaListItemComparer)
- [同命名空间 EncyclopediaListItemVM](../EncyclopediaListItemVM)
