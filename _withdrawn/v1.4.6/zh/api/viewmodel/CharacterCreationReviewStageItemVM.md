---
title: "CharacterCreationReviewStageItemVM"
description: "CharacterCreationReviewStageItemVM：TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation 的 public 类，继承 ViewModel；公开成员 7 个（方法 0、属性 5、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationReviewStageItemVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CharacterCreationReviewStageItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CharacterCreationReviewStageItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationReviewStageItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

CharacterCreationReviewStageItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationReviewStageItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 CharacterCreationReviewStageItemVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 7 个：5 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CharacterCreationReviewStageItemVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation`，继承链 CharacterCreationReviewStageItemVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 5/7，方法 0/7），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationReviewStageItemVM.cs 的方法体或该类型的深写页确认。

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

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 CharacterCreationClanNamingStageVM](../CharacterCreationClanNamingStageVM/)
- [同命名空间 CharacterCreationCultureFeatVM](../CharacterCreationCultureFeatVM/)
- [同命名空间 CharacterCreationCultureStageVM](../CharacterCreationCultureStageVM/)
- [同命名空间 CharacterCreationCultureVM](../CharacterCreationCultureVM/)
