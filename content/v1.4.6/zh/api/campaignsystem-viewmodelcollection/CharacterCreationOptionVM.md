---
title: "CharacterCreationOptionVM"
description: "CharacterCreationOptionVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 8 个（方法 2、属性 5、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationOptionVM.cs。"
---
# CharacterCreationOptionVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CharacterCreationOptionVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationOptionVM.cs`

## 概述

CharacterCreationOptionVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationOptionVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 CharacterCreationOptionVM → ViewModel。public/protected 成员共 8 个：2 方法、5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CharacterCreationOptionVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation），继承链 CharacterCreationOptionVM → ViewModel。成员构成以属性为主（属性 5/8，方法 2/8），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationOptionVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CharacterCreationOptionVM` | `public CharacterCreationOptionVM(Action<CharacterCreationOptionVM>onSelect, NarrativeMenuOption option)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ExecuteSelect` | `public void ExecuteSelect()` | 方法 |
| `IsSelected` | `public bool IsSelected` | 属性 |
| `ActionText` | `public string ActionText` | 属性 |
| `PositiveEffectText` | `public string PositiveEffectText` | 属性 |
| `NegativeEffectText` | `public string NegativeEffectText` | 属性 |
| `DescriptionText` | `public string DescriptionText` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CharacterCreationClanNamingStageVM](../CharacterCreationClanNamingStageVM)
- [同命名空间 CharacterCreationCultureFeatVM](../CharacterCreationCultureFeatVM)
- [同命名空间 CharacterCreationCultureStageVM](../CharacterCreationCultureStageVM)
- [同命名空间 CharacterCreationCultureVM](../CharacterCreationCultureVM)
