---
title: "KingdomClanVM"
description: "KingdomClanVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 KingdomCategoryVM；公开成员 24 个（方法 4、属性 19、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Clans/KingdomClanVM.cs。"
---
# KingdomClanVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingdomClanVM : KingdomCategoryVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Clans/KingdomClanVM.cs`

## 概述

KingdomClanVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Clans/KingdomClanVM.cs。它是一个 public 类，实现/继承 KingdomCategoryVM，继承链为 KingdomClanVM → KingdomCategoryVM → ViewModel。public/protected 成员共 24 个：4 方法、19 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：KingdomClanVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans），继承链 KingdomClanVM → KingdomCategoryVM → ViewModel。成员构成以属性为主（属性 19/24，方法 4/24），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Clans/KingdomClanVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `KingdomClanVM` | `public KingdomClanVM(Action<KingdomDecision>forceDecide)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `RefreshClan` | `public void RefreshClan()` | 方法 |
| `SelectClan` | `public void SelectClan(Clan clan)` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `ClanSortController` | `public KingdomClanSortControllerVM ClanSortController` | 属性 |
| `CurrentSelectedClan` | `public KingdomClanItemVM CurrentSelectedClan` | 属性 |
| `ExpelActionExplanationText` | `public string ExpelActionExplanationText` | 属性 |
| `SupportActionExplanationText` | `public string SupportActionExplanationText` | 属性 |
| `BannerText` | `public string BannerText` | 属性 |
| `TypeText` | `public string TypeText` | 属性 |
| `NameText` | `public string NameText` | 属性 |
| `InfluenceText` | `public string InfluenceText` | 属性 |
| `FiefsText` | `public string FiefsText` | 属性 |
| `MembersText` | `public string MembersText` | 属性 |
| `MBBindingList` | `public MBBindingList<KingdomClanItemVM>Clans` | 属性 |
| `CanSupportCurrentClan` | `public bool CanSupportCurrentClan` | 属性 |
| `CanExpelCurrentClan` | `public bool CanExpelCurrentClan` | 属性 |
| `SupportText` | `public string SupportText` | 属性 |
| `ExpelActionText` | `public string ExpelActionText` | 属性 |
| `SupportCost` | `public int SupportCost` | 属性 |
| `ExpelCost` | `public int ExpelCost` | 属性 |
| `ExpelHint` | `public HintViewModel ExpelHint` | 属性 |
| `SupportHint` | `public HintViewModel SupportHint` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 KingdomCategoryVM](../KingdomCategoryVM)
- [同命名空间 KingdomClanFiefItemVM](../KingdomClanFiefItemVM)
- [同命名空间 KingdomClanItemVM](../KingdomClanItemVM)
- [同命名空间 KingdomClanSortControllerVM](../KingdomClanSortControllerVM)
