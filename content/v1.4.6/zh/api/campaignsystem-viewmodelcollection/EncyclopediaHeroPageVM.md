---
title: "EncyclopediaHeroPageVM"
description: "EncyclopediaHeroPageVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 EncyclopediaContentPageVM；公开成员 53 个（方法 7、属性 45、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaHeroPageVM.cs。"
---
# EncyclopediaHeroPageVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaHeroPageVM : EncyclopediaContentPageVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaHeroPageVM.cs`

## 概述

EncyclopediaHeroPageVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaHeroPageVM.cs。它是一个 public 类，实现/继承 EncyclopediaContentPageVM，继承链为 EncyclopediaHeroPageVM → EncyclopediaContentPageVM → EncyclopediaPageVM → ViewModel。public/protected 成员共 53 个：7 方法、45 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：EncyclopediaHeroPageVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages），继承链 EncyclopediaHeroPageVM → EncyclopediaContentPageVM → EncyclopediaPageVM → ViewModel。成员构成以属性为主（属性 45/53，方法 7/53），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaHeroPageVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EncyclopediaHeroPageVM` | `public EncyclopediaHeroPageVM(EncyclopediaPageArgs args) : base(args)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `Refresh` | `public override void Refresh()` | 方法 |
| `GetName` | `public override string GetName()` | 方法 |
| `GetNavigationBarURL` | `public override string GetNavigationBarURL()` | 方法 |
| `ExecuteLink` | `public void ExecuteLink(string link)` | 方法 |
| `ExecuteSwitchBookmarkedState` | `public override void ExecuteSwitchBookmarkedState()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `Faction` | `public EncyclopediaFactionVM Faction` | 属性 |
| `IsCompanion` | `public bool IsCompanion` | 属性 |
| `IsPregnant` | `public bool IsPregnant` | 属性 |
| `Master` | `public HeroVM Master` | 属性 |
| `ClanText` | `public string ClanText` | 属性 |
| `InfoText` | `public string InfoText` | 属性 |
| `TraitsText` | `public string TraitsText` | 属性 |
| `MasterText` | `public string MasterText` | 属性 |
| `KingdomRankText` | `public string KingdomRankText` | 属性 |
| `InfoHiddenReasonText` | `public string InfoHiddenReasonText` | 属性 |
| `SkillsText` | `public string SkillsText` | 属性 |
| `HeroCharacter` | `public HeroViewModel HeroCharacter` | 属性 |
| `LastSeenText` | `public string LastSeenText` | 属性 |
| `DeceasedText` | `public string DeceasedText` | 属性 |
| `NameText` | `public string NameText` | 属性 |
| `SettlementsText` | `public string SettlementsText` | 属性 |
| `DwellingsText` | `public string DwellingsText` | 属性 |
| `CompanionsText` | `public string CompanionsText` | 属性 |
| `AlliesText` | `public string AlliesText` | 属性 |
| `EnemiesText` | `public string EnemiesText` | 属性 |
| `FamilyText` | `public string FamilyText` | 属性 |
| `MBBindingList` | `public MBBindingList<StringPairItemVM>Stats` | 属性 |
| `MBBindingList` | `public MBBindingList<EncyclopediaTraitItemVM>Traits` | 属性 |
| `MBBindingList` | `public MBBindingList<EncyclopediaSkillVM>Skills` | 属性 |
| `MBBindingList` | `public MBBindingList<EncyclopediaDwellingVM>Dwellings` | 属性 |
| `MBBindingList` | `public MBBindingList<EncyclopediaSettlementVM>Settlements` | 属性 |
| `MBBindingList` | `public MBBindingList<EncyclopediaFamilyMemberVM>Family` | 属性 |
| `MBBindingList` | `public MBBindingList<HeroVM>Companions` | 属性 |
| `MBBindingList` | `public MBBindingList<HeroVM>Enemies` | 属性 |
| `MBBindingList` | `public MBBindingList<HeroVM>Allies` | 属性 |
| `MBBindingList` | `public MBBindingList<EncyclopediaHistoryEventVM>History` | 属性 |
| `HasNeutralClan` | `public bool HasNeutralClan` | 属性 |
| `IsDead` | `public bool IsDead` | 属性 |
| `IsInformationHidden` | `public bool IsInformationHidden` | 属性 |
| `InformationText` | `public string InformationText` | 属性 |
| `PregnantHint` | `public HintViewModel PregnantHint` | 属性 |
| `HasAnySkills` | `public bool HasAnySkills` | 属性 |
| `MBBindingList` | `public MBBindingList<HeroVM>AdditionalEnemies` | 属性 |
| `MBBindingList` | `public MBBindingList<HeroVM>AdditionalAllies` | 属性 |
| `AnyAdditionalAllies` | `public bool AnyAdditionalAllies` | 属性 |
| `AnyAdditionalEnemies` | `public bool AnyAdditionalEnemies` | 属性 |
| `AdditionalAlliesString` | `public string AdditionalAlliesString` | 属性 |
| `AdditionalEnemiesString` | `public string AdditionalEnemiesString` | 属性 |
| `AdditionalAlliesHint` | `public BasicTooltipViewModel AdditionalAlliesHint` | 属性 |
| `AdditionalEnemiesHint` | `public BasicTooltipViewModel AdditionalEnemiesHint` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 EncyclopediaContentPageVM](../EncyclopediaContentPageVM)
- [同命名空间 EncyclopediaClanPageVM](../EncyclopediaClanPageVM)
- [同命名空间 EncyclopediaConceptPageVM](../EncyclopediaConceptPageVM)
- [同命名空间 EncyclopediaContentPageVM](../EncyclopediaContentPageVM)
- [同命名空间 EncyclopediaFactionPageVM](../EncyclopediaFactionPageVM)
