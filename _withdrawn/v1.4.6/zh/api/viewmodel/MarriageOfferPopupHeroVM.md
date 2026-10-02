---
title: "MarriageOfferPopupHeroVM"
description: "MarriageOfferPopupHeroVM：TaleWorlds.CampaignSystem.ViewModelCollection.Map.MarriageOfferPopup 的 public 类，继承 ViewModel；公开成员 18 个（方法 5、属性 12、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MarriageOfferPopup/MarriageOfferPopupHeroVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MarriageOfferPopupHeroVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MarriageOfferPopup`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class MarriageOfferPopupHeroVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MarriageOfferPopup/MarriageOfferPopupHeroVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

MarriageOfferPopupHeroVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MarriageOfferPopup/MarriageOfferPopupHeroVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 MarriageOfferPopupHeroVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 18 个：5 方法、12 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MarriageOfferPopupHeroVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MarriageOfferPopup`，继承链 MarriageOfferPopupHeroVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 12/18，方法 5/18），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MarriageOfferPopup/MarriageOfferPopupHeroVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Hero` | `public Hero Hero` | 属性 |
| `MarriageOfferPopupHeroVM` | `public MarriageOfferPopupHeroVM(Hero hero)` | 构造函数 |
| `Update` | `public void Update()` | 方法 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `ExecuteHeroLink` | `public void ExecuteHeroLink()` | 方法 |
| `ExecuteClanLink` | `public void ExecuteClanLink()` | 方法 |
| `EncyclopediaLinkWithName` | `public string EncyclopediaLinkWithName` | 属性 |
| `AgeString` | `public string AgeString` | 属性 |
| `OccupationString` | `public string OccupationString` | 属性 |
| `Relation` | `public int Relation` | 属性 |
| `ClanName` | `public string ClanName` | 属性 |
| `ClanBanner` | `public BannerImageIdentifierVM ClanBanner` | 属性 |
| `Model` | `public HeroViewModel Model` | 属性 |
| `MBBindingList` | `public MBBindingList<EncyclopediaTraitItemVM>Traits` | 属性 |
| `MBBindingList` | `public MBBindingList<MarriageOfferPopupHeroAttributeVM>Attributes` | 属性 |
| `MBBindingList` | `public MBBindingList<EncyclopediaSkillVM>OtherSkills` | 属性 |
| `HasOtherSkills` | `public bool HasOtherSkills` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 MarriageOfferPopupHeroAttributeVM](../MarriageOfferPopupHeroAttributeVM/)
- [同命名空间 MarriageOfferPopupVM](../MarriageOfferPopupVM/)
