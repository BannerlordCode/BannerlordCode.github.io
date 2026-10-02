---
title: "CharacterCreationReviewStageItemVM"
description: "CharacterCreationReviewStageItemVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 7 个（方法 0、属性 5、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationReviewStageItemVM.cs。"
---
# CharacterCreationReviewStageItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CharacterCreationReviewStageItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationReviewStageItemVM.cs`

## 概述

CharacterCreationReviewStageItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationReviewStageItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 CharacterCreationReviewStageItemVM → ViewModel。public/protected 成员共 7 个：5 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CharacterCreationReviewStageItemVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation），继承链 CharacterCreationReviewStageItemVM → ViewModel。成员构成以属性为主（属性 5/7，方法 0/7），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationReviewStageItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CharacterCreationReviewStageItemVM` | `public CharacterCreationReviewStageItemVM(BannerImageIdentifierVM imageIdentifier, string title, string text, string description) : this(title, text, description)` | 构造函数 |
| `CharacterCreationReviewStageItemVM` | `public CharacterCreationReviewStageItemVM(string title, string text, string description)` | 构造函数 |
| `HasImage` | `public bool HasImage` | 属性 |
| `ImageIdentifier` | `public BannerImageIdentifierVM ImageIdentifier` | 属性 |
| `Title` | `public string Title` | 属性 |
| `Text` | `public string Text` | 属性 |
| `Description` | `public string Description` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CharacterCreationClanNamingStageVM](../CharacterCreationClanNamingStageVM)
- [同命名空间 CharacterCreationCultureFeatVM](../CharacterCreationCultureFeatVM)
- [同命名空间 CharacterCreationCultureStageVM](../CharacterCreationCultureStageVM)
- [同命名空间 CharacterCreationCultureVM](../CharacterCreationCultureVM)
