---
title: "EncyclopediaListItemVM"
description: "EncyclopediaListItemVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 14 个（方法 5、属性 8、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListItemVM.cs。"
---
# EncyclopediaListItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaListItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListItemVM.cs`

## 概述

EncyclopediaListItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 EncyclopediaListItemVM → ViewModel。public/protected 成员共 14 个：5 方法、8 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：EncyclopediaListItemVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List），继承链 EncyclopediaListItemVM → ViewModel。成员构成以属性为主（属性 8/14，方法 5/14），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Object` | `public object Object` | 属性 |
| `ListItem` | `public EncyclopediaListItem ListItem` | 属性 |
| `EncyclopediaListItemVM` | `public EncyclopediaListItemVM(EncyclopediaListItem listItem)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `Execute` | `public void Execute()` | 方法 |
| `SetComparedValue` | `public void SetComparedValue(EncyclopediaListItemComparerBase comparer)` | 方法 |
| `ExecuteBeginTooltip` | `public void ExecuteBeginTooltip()` | 方法 |
| `ExecuteEndTooltip` | `public void ExecuteEndTooltip()` | 方法 |
| `IsFiltered` | `public bool IsFiltered` | 属性 |
| `PlayerCanSeeValues` | `public bool PlayerCanSeeValues` | 属性 |
| `Id` | `public string Id` | 属性 |
| `Name` | `public string Name` | 属性 |
| `ComparedValue` | `public string ComparedValue` | 属性 |
| `IsBookmarked` | `public bool IsBookmarked` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 EncyclopediaFilterGroupVM](../EncyclopediaFilterGroupVM)
- [同命名空间 EncyclopediaListFilterVM](../EncyclopediaListFilterVM)
- [同命名空间 EncyclopediaListItemComparer](../EncyclopediaListItemComparer)
- [同命名空间 EncyclopediaListSelectorItemVM](../EncyclopediaListSelectorItemVM)
