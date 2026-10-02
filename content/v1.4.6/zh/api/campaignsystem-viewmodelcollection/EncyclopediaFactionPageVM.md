---
title: "EncyclopediaFactionPageVM"
description: "EncyclopediaFactionPageVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 EncyclopediaContentPageVM；公开成员 29 个（方法 5、属性 23、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaFactionPageVM.cs。"
---
# EncyclopediaFactionPageVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaFactionPageVM : EncyclopediaContentPageVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaFactionPageVM.cs`

## 概述

EncyclopediaFactionPageVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaFactionPageVM.cs。它是一个 public 类，实现/继承 EncyclopediaContentPageVM，继承链为 EncyclopediaFactionPageVM → EncyclopediaContentPageVM → EncyclopediaPageVM → ViewModel。public/protected 成员共 29 个：5 方法、23 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：EncyclopediaFactionPageVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages），继承链 EncyclopediaFactionPageVM → EncyclopediaContentPageVM → EncyclopediaPageVM → ViewModel。成员构成以属性为主（属性 23/29，方法 5/29），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaFactionPageVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EncyclopediaFactionPageVM` | `public EncyclopediaFactionPageVM(EncyclopediaPageArgs args) : base(args)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `Refresh` | `public override void Refresh()` | 方法 |
| `GetName` | `public override string GetName()` | 方法 |
| `GetNavigationBarURL` | `public override string GetNavigationBarURL()` | 方法 |
| `ExecuteSwitchBookmarkedState` | `public override void ExecuteSwitchBookmarkedState()` | 方法 |
| `MBBindingList` | `public MBBindingList<EncyclopediaFactionVM>Clans` | 属性 |
| `MBBindingList` | `public MBBindingList<EncyclopediaFactionVM>Enemies` | 属性 |
| `MBBindingList` | `public MBBindingList<EncyclopediaFactionVM>TradeAgreements` | 属性 |
| `MBBindingList` | `public MBBindingList<EncyclopediaFactionVM>Alliances` | 属性 |
| `MBBindingList` | `public MBBindingList<EncyclopediaSettlementVM>Settlements` | 属性 |
| `MBBindingList` | `public MBBindingList<EncyclopediaHistoryEventVM>History` | 属性 |
| `Leader` | `public HeroVM Leader` | 属性 |
| `Banner` | `public BannerImageIdentifierVM Banner` | 属性 |
| `NameText` | `public string NameText` | 属性 |
| `MembersText` | `public string MembersText` | 属性 |
| `EnemiesText` | `public string EnemiesText` | 属性 |
| `TradeAgreementsText` | `public string TradeAgreementsText` | 属性 |
| `AlliancesText` | `public string AlliancesText` | 属性 |
| `ClansText` | `public string ClansText` | 属性 |
| `SettlementsText` | `public string SettlementsText` | 属性 |
| `VillagesText` | `public string VillagesText` | 属性 |
| `LeaderText` | `public string LeaderText` | 属性 |
| `DescriptorText` | `public string DescriptorText` | 属性 |
| `InformationText` | `public string InformationText` | 属性 |
| `ProsperityText` | `public string ProsperityText` | 属性 |
| `StrengthText` | `public string StrengthText` | 属性 |
| `ProsperityHint` | `public HintViewModel ProsperityHint` | 属性 |
| `StrengthHint` | `public HintViewModel StrengthHint` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 EncyclopediaContentPageVM](../EncyclopediaContentPageVM)
- [同命名空间 EncyclopediaClanPageVM](../EncyclopediaClanPageVM)
- [同命名空间 EncyclopediaConceptPageVM](../EncyclopediaConceptPageVM)
- [同命名空间 EncyclopediaContentPageVM](../EncyclopediaContentPageVM)
- [同命名空间 EncyclopediaHeroPageVM](../EncyclopediaHeroPageVM)
