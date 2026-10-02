---
title: "HeirSelectionPopupHeroVM"
description: "HeirSelectionPopupHeroVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 16 个（方法 2、属性 13、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/HeirSelectionPopup/HeirSelectionPopupHeroVM.cs。"
---
# HeirSelectionPopupHeroVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.HeirSelectionPopup`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class HeirSelectionPopupHeroVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/HeirSelectionPopup/HeirSelectionPopupHeroVM.cs`

## 概述

HeirSelectionPopupHeroVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/HeirSelectionPopup/HeirSelectionPopupHeroVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 HeirSelectionPopupHeroVM → ViewModel。public/protected 成员共 16 个：2 方法、13 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：HeirSelectionPopupHeroVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.Map.HeirSelectionPopup），继承链 HeirSelectionPopupHeroVM → ViewModel。成员构成以属性为主（属性 13/16，方法 2/16），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/HeirSelectionPopup/HeirSelectionPopupHeroVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Hero` | `public Hero Hero` | 属性 |
| `HeirSelectionPopupHeroVM` | `public HeirSelectionPopupHeroVM(Hero hero)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `Name` | `public string Name` | 属性 |
| `Age` | `public int Age` | 属性 |
| `Culture` | `public string Culture` | 属性 |
| `Occupation` | `public string Occupation` | 属性 |
| `RelationToMainHero` | `public string RelationToMainHero` | 属性 |
| `Model` | `public HeroViewModel Model` | 属性 |
| `ImageIdentifier` | `public CharacterImageIdentifierVM ImageIdentifier` | 属性 |
| `MBBindingList` | `public MBBindingList<EncyclopediaTraitItemVM>Traits` | 属性 |
| `MBBindingList` | `public MBBindingList<MarriageOfferPopupHeroAttributeVM>Attributes` | 属性 |
| `IsSelected` | `public bool IsSelected` | 属性 |
| `MBBindingList` | `public MBBindingList<EncyclopediaSkillVM>OtherSkills` | 属性 |
| `HasOtherSkills` | `public bool HasOtherSkills` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 HeirSelectionPopupVM](../HeirSelectionPopupVM)
