---
title: "EducationOptionVM"
description: "EducationOptionVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 StringItemWithActionVM；公开成员 10 个（方法 1、属性 8、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationOptionVM.cs。"
---
# EducationOptionVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Education`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EducationOptionVM : StringItemWithActionVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationOptionVM.cs`

## 概述

EducationOptionVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationOptionVM.cs。它是一个 public 类，实现/继承 StringItemWithActionVM，继承链为 EducationOptionVM → StringItemWithActionVM。public/protected 成员共 10 个：1 方法、8 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：EducationOptionVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.Education），继承链 EducationOptionVM → StringItemWithActionVM。成员构成以属性为主（属性 8/10，方法 1/10），对外主要以状态读取接口暴露。继承链上的 StringItemWithActionVM 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationOptionVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OptionEffect` | `public string OptionEffect` | 属性 |
| `OptionDescription` | `public string OptionDescription` | 属性 |
| `EducationCampaignBehavior.EducationCharacterProperties[]CharacterProperties` | `public EducationCampaignBehavior.EducationCharacterProperties[]CharacterProperties` | 属性 |
| `ActionID` | `public string ActionID` | 属性 |
| `int>[]OptionAttributes` | `public ValueTuple<CharacterAttribute, int>[]OptionAttributes` | 属性 |
| `int>[]OptionSkills` | `public ValueTuple<SkillObject, int>[]OptionSkills` | 属性 |
| `int>[]OptionFocusPoints` | `public ValueTuple<SkillObject, int>[]OptionFocusPoints` | 属性 |
| `EducationOptionVM` | `public EducationOptionVM(Action<object>onExecute, string optionId, TextObject optionText, TextObject optionDescription, TextObject optionEffect, bool isSelected, ValueTuple<CharacterAttribute, int>[]optionAttributes, ValueTuple<SkillObject, int>[]optionSkills, ValueTuple<SkillObject, int>[]optionFocusPoints, EducationCampaignBehavior.EducationCharacterProperties[]characterProperties) : base(onExecute, optionText.ToString(), optionId)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `IsSelected` | `public bool IsSelected` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 EducationGainedAttributeItemVM](../EducationGainedAttributeItemVM)
- [同命名空间 EducationGainedPropertiesVM](../EducationGainedPropertiesVM)
- [同命名空间 EducationGainedSkillItemVM](../EducationGainedSkillItemVM)
- [同命名空间 EducationGainGroupItemVM](../EducationGainGroupItemVM)
