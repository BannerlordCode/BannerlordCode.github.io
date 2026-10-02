---
title: "EducationVM"
description: "EducationVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 22 个（方法 6、属性 15、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationVM.cs。"
---
# EducationVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Education`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EducationVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationVM.cs`

## 概述

EducationVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 EducationVM → ViewModel。public/protected 成员共 22 个：6 方法、15 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：EducationVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.Education），继承链 EducationVM → ViewModel。成员构成以属性为主（属性 15/22，方法 6/22），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EducationVM` | `public EducationVM(Hero child, Action<bool>onDone, Action<EducationCampaignBehavior.EducationCharacterProperties[]>onOptionSelect, Action<List<BasicCharacterObject>, List<Equipment>>sendPossibleCharactersAndEquipment)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ExecuteNextStage` | `public void ExecuteNextStage()` | 方法 |
| `ExecutePreviousStage` | `public void ExecutePreviousStage()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotKey)` | 方法 |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | 方法 |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | 属性 |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | 属性 |
| `StageTitleText` | `public string StageTitleText` | 属性 |
| `ChooseText` | `public string ChooseText` | 属性 |
| `PageDescriptionText` | `public string PageDescriptionText` | 属性 |
| `OptionEffectText` | `public string OptionEffectText` | 属性 |
| `OptionDescriptionText` | `public string OptionDescriptionText` | 属性 |
| `NextText` | `public string NextText` | 属性 |
| `PreviousText` | `public string PreviousText` | 属性 |
| `CanAdvance` | `public bool CanAdvance` | 属性 |
| `CanGoBack` | `public bool CanGoBack` | 属性 |
| `OnlyHasOneOption` | `public bool OnlyHasOneOption` | 属性 |
| `MBBindingList` | `public MBBindingList<EducationOptionVM>Options` | 属性 |
| `GainedPropertiesController` | `public EducationGainedPropertiesVM GainedPropertiesController` | 属性 |
| `Review` | `public EducationReviewVM Review` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 EducationGainedAttributeItemVM](../EducationGainedAttributeItemVM)
- [同命名空间 EducationGainedPropertiesVM](../EducationGainedPropertiesVM)
- [同命名空间 EducationGainedSkillItemVM](../EducationGainedSkillItemVM)
- [同命名空间 EducationGainGroupItemVM](../EducationGainGroupItemVM)
