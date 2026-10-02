---
title: "SkillVM"
description: "SkillVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 47 个（方法 13、属性 32、字段 1）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/SkillVM.cs。"
---
# SkillVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class SkillVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/SkillVM.cs`

## 概述

SkillVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/SkillVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 SkillVM → ViewModel。public/protected 成员共 47 个：13 方法、32 属性、1 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SkillVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper），继承链 SkillVM → ViewModel。成员构成以属性为主（属性 32/47，方法 13/47），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/SkillVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SkillVM` | `public SkillVM(SkillObject skill, CharacterDeveloperHeroItemVM heroItem, Action<PerkVM>onStartPerkSelection)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `InitializeValues` | `public void InitializeValues()` | 方法 |
| `RefreshWithCurrentValues` | `public void RefreshWithCurrentValues()` | 方法 |
| `CreateLists` | `public void CreateLists()` | 方法 |
| `RefreshLists` | `public void RefreshLists(SkillObject skill = null)` | 方法 |
| `RefreshCanAddFocus` | `public void RefreshCanAddFocus()` | 方法 |
| `ExecuteAddFocus` | `public void ExecuteAddFocus()` | 方法 |
| `ExecuteShowFocusConcept` | `public void ExecuteShowFocusConcept()` | 方法 |
| `ExecuteShowSkillConcept` | `public void ExecuteShowSkillConcept()` | 方法 |
| `ExecuteInspect` | `public void ExecuteInspect()` | 方法 |
| `ResetChanges` | `public void ResetChanges()` | 方法 |
| `IsThereAnyChanges` | `public bool IsThereAnyChanges()` | 方法 |
| `ApplyChanges` | `public void ApplyChanges()` | 方法 |
| `DescriptionText` | `public string DescriptionText` | 属性 |
| `HowToLearnText` | `public string HowToLearnText` | 属性 |
| `HowToLearnTitle` | `public string HowToLearnTitle` | 属性 |
| `AttributesText` | `public string AttributesText` | 属性 |
| `CanAddFocus` | `public bool CanAddFocus` | 属性 |
| `CanLearnSkill` | `public bool CanLearnSkill` | 属性 |
| `NextLevelLearningRateText` | `public string NextLevelLearningRateText` | 属性 |
| `NextLevelCostText` | `public string NextLevelCostText` | 属性 |
| `ProgressHint` | `public BasicTooltipViewModel ProgressHint` | 属性 |
| `SkillXPHint` | `public BasicTooltipViewModel SkillXPHint` | 属性 |
| `AddFocusHint` | `public HintViewModel AddFocusHint` | 属性 |
| `LearningLimitTooltip` | `public BasicTooltipViewModel LearningLimitTooltip` | 属性 |
| `LearningRateTooltip` | `public BasicTooltipViewModel LearningRateTooltip` | 属性 |
| `ProgressPercentage` | `public double ProgressPercentage` | 属性 |
| `LearningRate` | `public float LearningRate` | 属性 |
| `CurrentSkillXP` | `public int CurrentSkillXP` | 属性 |
| `NextLevel` | `public int NextLevel` | 属性 |
| `FullLearningRateLevel` | `public int FullLearningRateLevel` | 属性 |
| `XpRequiredForNextLevel` | `public int XpRequiredForNextLevel` | 属性 |
| `NumOfUnopenedPerks` | `public int NumOfUnopenedPerks` | 属性 |
| `ProgressText` | `public string ProgressText` | 属性 |
| `FocusCostText` | `public string FocusCostText` | 属性 |
| `MBBindingList` | `public MBBindingList<PerkVM>Perks` | 属性 |
| `MBBindingList` | `public MBBindingList<BindingListStringItem>SkillEffects` | 属性 |
| `MaxLevel` | `public int MaxLevel` | 属性 |
| `CurrentLearningRateText` | `public string CurrentLearningRateText` | 属性 |
| `CurrentFocusLevel` | `public int CurrentFocusLevel` | 属性 |
| `AddFocusText` | `public string AddFocusText` | 属性 |
| `SkillId` | `public string SkillId` | 属性 |
| `IsInspected` | `public bool IsInspected` | 属性 |
| `NameText` | `public string NameText` | 属性 |
| `Level` | `public int Level` | 属性 |
| `MAX_SKILL_LEVEL` | `public const int MAX_SKILL_LEVEL` | 字段 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AttributeBoundSkillItemVM](../AttributeBoundSkillItemVM)
- [同命名空间 CharacterAttributeItemVM](../CharacterAttributeItemVM)
- [同命名空间 CharacterDeveloperHeroItemVM](../CharacterDeveloperHeroItemVM)
- [同命名空间 CharacterDeveloperVM](../CharacterDeveloperVM)
