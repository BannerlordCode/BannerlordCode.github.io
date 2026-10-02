---
title: "KingdomClanItemVM"
description: "KingdomClanItemVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 KingdomItemVM；公开成员 14 个（方法 3、属性 10、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Clans/KingdomClanItemVM.cs。"
---
# KingdomClanItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingdomClanItemVM : KingdomItemVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Clans/KingdomClanItemVM.cs`

## 概述

KingdomClanItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Clans/KingdomClanItemVM.cs。它是一个 public 类，实现/继承 KingdomItemVM，继承链为 KingdomClanItemVM → KingdomItemVM → ViewModel。public/protected 成员共 14 个：3 方法、10 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：KingdomClanItemVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans），继承链 KingdomClanItemVM → KingdomItemVM → ViewModel。成员构成以属性为主（属性 10/14，方法 3/14），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Clans/KingdomClanItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `KingdomClanItemVM` | `public KingdomClanItemVM(Clan clan, Action<KingdomClanItemVM>onSelect)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `Refresh` | `public void Refresh()` | 方法 |
| `OnSelect` | `protected override void OnSelect()` | 方法 |
| `Name` | `public string Name` | 属性 |
| `ClanType` | `public int ClanType` | 属性 |
| `NumOfMembers` | `public int NumOfMembers` | 属性 |
| `NumOfFiefs` | `public int NumOfFiefs` | 属性 |
| `TierText` | `public string TierText` | 属性 |
| `Banner` | `public BannerImageIdentifierVM Banner` | 属性 |
| `Banner_9` | `public BannerImageIdentifierVM Banner_9` | 属性 |
| `MBBindingList` | `public MBBindingList<HeroVM>Members` | 属性 |
| `MBBindingList` | `public MBBindingList<KingdomClanFiefItemVM>Fiefs` | 属性 |
| `Influence` | `public int Influence` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 KingdomItemVM](../KingdomItemVM)
- [同命名空间 KingdomClanFiefItemVM](../KingdomClanFiefItemVM)
- [同命名空间 KingdomClanSortControllerVM](../KingdomClanSortControllerVM)
- [同命名空间 KingdomClanVM](../KingdomClanVM)
