---
title: "EncyclopediaListFilterVM"
description: "EncyclopediaListFilterVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 6 个（方法 3、属性 2、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListFilterVM.cs。"
---
# EncyclopediaListFilterVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaListFilterVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListFilterVM.cs`

## 概述

EncyclopediaListFilterVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListFilterVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 EncyclopediaListFilterVM → ViewModel。public/protected 成员共 6 个：3 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：EncyclopediaListFilterVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List），继承链 EncyclopediaListFilterVM → ViewModel。成员构成以方法为主（方法 3/6，属性 2/6），对外主要以操作入口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListFilterVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EncyclopediaListFilterVM` | `public EncyclopediaListFilterVM(EncyclopediaFilterItem filter, Action<EncyclopediaListFilterVM>UpdateFilters)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `CopyFilterFrom` | `public void CopyFilterFrom(Dictionary<EncyclopediaFilterItem, bool>filters)` | 方法 |
| `ExecuteOnFilterActivated` | `public void ExecuteOnFilterActivated()` | 方法 |
| `IsSelected` | `public bool IsSelected` | 属性 |
| `Name` | `public string Name` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 EncyclopediaFilterGroupVM](../EncyclopediaFilterGroupVM)
- [同命名空间 EncyclopediaListItemComparer](../EncyclopediaListItemComparer)
- [同命名空间 EncyclopediaListItemVM](../EncyclopediaListItemVM)
- [同命名空间 EncyclopediaListSelectorItemVM](../EncyclopediaListSelectorItemVM)
