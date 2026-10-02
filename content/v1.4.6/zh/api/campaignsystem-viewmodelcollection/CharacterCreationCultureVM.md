---
title: "CharacterCreationCultureVM"
description: "CharacterCreationCultureVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 10 个（方法 1、属性 8、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationCultureVM.cs。"
---
# CharacterCreationCultureVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CharacterCreationCultureVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationCultureVM.cs`

## 概述

CharacterCreationCultureVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationCultureVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 CharacterCreationCultureVM → ViewModel。public/protected 成员共 10 个：1 方法、8 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CharacterCreationCultureVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation），继承链 CharacterCreationCultureVM → ViewModel。成员构成以属性为主（属性 8/10，方法 1/10），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationCultureVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Culture` | `public CultureObject Culture` | 属性 |
| `CharacterCreationCultureVM` | `public CharacterCreationCultureVM(CultureObject culture, Action<CharacterCreationCultureVM>onSelection)` | 构造函数 |
| `ExecuteSelectCulture` | `public void ExecuteSelectCulture()` | 方法 |
| `CultureID` | `public string CultureID` | 属性 |
| `CultureColor1` | `public Color CultureColor1` | 属性 |
| `DescriptionText` | `public string DescriptionText` | 属性 |
| `NameText` | `public string NameText` | 属性 |
| `ShortenedNameText` | `public string ShortenedNameText` | 属性 |
| `IsSelected` | `public bool IsSelected` | 属性 |
| `MBBindingList` | `public MBBindingList<CharacterCreationCultureFeatVM>Feats` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CharacterCreationClanNamingStageVM](../CharacterCreationClanNamingStageVM)
- [同命名空间 CharacterCreationCultureFeatVM](../CharacterCreationCultureFeatVM)
- [同命名空间 CharacterCreationCultureStageVM](../CharacterCreationCultureStageVM)
- [同命名空间 CharacterCreationGainedAttributeItemVM](../CharacterCreationGainedAttributeItemVM)
