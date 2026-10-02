---
title: "EducationGainedSkillItemVM"
description: "EducationGainedSkillItemVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 10 个（方法 2、属性 7、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationGainedSkillItemVM.cs。"
---
# EducationGainedSkillItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Education`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EducationGainedSkillItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationGainedSkillItemVM.cs`

## 概述

EducationGainedSkillItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationGainedSkillItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 EducationGainedSkillItemVM → ViewModel。public/protected 成员共 10 个：2 方法、7 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：EducationGainedSkillItemVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.Education），继承链 EducationGainedSkillItemVM → ViewModel。成员构成以属性为主（属性 7/10，方法 2/10），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationGainedSkillItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SkillObj` | `public SkillObject SkillObj` | 属性 |
| `EducationGainedSkillItemVM` | `public EducationGainedSkillItemVM(SkillObject skill)` | 构造函数 |
| `SetFocusValue` | `public void SetFocusValue(int gainedFromOtherStages, int gainedFromCurrentStage)` | 方法 |
| `SetSkillValue` | `public void SetSkillValue(int gaintedFromOtherStages, int gainedFromCurrentStage)` | 方法 |
| `SkillId` | `public string SkillId` | 属性 |
| `SkillValueInt` | `public int SkillValueInt` | 属性 |
| `Skill` | `public EncyclopediaSkillVM Skill` | 属性 |
| `HasFocusIncreasedInCurrentStage` | `public bool HasFocusIncreasedInCurrentStage` | 属性 |
| `HasSkillValueIncreasedInCurrentStage` | `public bool HasSkillValueIncreasedInCurrentStage` | 属性 |
| `MBBindingList` | `public MBBindingList<BoolItemWithActionVM>FocusPointGainList` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 EducationGainedAttributeItemVM](../EducationGainedAttributeItemVM)
- [同命名空间 EducationGainedPropertiesVM](../EducationGainedPropertiesVM)
- [同命名空间 EducationGainGroupItemVM](../EducationGainGroupItemVM)
- [同命名空间 EducationOptionVM](../EducationOptionVM)
