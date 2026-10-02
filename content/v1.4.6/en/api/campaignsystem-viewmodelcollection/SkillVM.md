---
title: "SkillVM"
description: "SkillVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 47 exposed members (13 methods, 32 properties, 1 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/SkillVM.cs."
---
# SkillVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class SkillVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/SkillVM.cs`

## Overview

SkillVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/SkillVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SkillVM → ViewModel. It exposes 47 public/protected members: 13 methods, 32 properties, 1 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SkillVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper) the module directory; inheritance chain SkillVM → ViewModel. The surface is property-led (properties 32/47, methods 13/47), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/SkillVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SkillVM` | `public SkillVM(SkillObject skill, CharacterDeveloperHeroItemVM heroItem, Action<PerkVM>onStartPerkSelection)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `InitializeValues` | `public void InitializeValues()` | method |
| `RefreshWithCurrentValues` | `public void RefreshWithCurrentValues()` | method |
| `CreateLists` | `public void CreateLists()` | method |
| `RefreshLists` | `public void RefreshLists(SkillObject skill = null)` | method |
| `RefreshCanAddFocus` | `public void RefreshCanAddFocus()` | method |
| `ExecuteAddFocus` | `public void ExecuteAddFocus()` | method |
| `ExecuteShowFocusConcept` | `public void ExecuteShowFocusConcept()` | method |
| `ExecuteShowSkillConcept` | `public void ExecuteShowSkillConcept()` | method |
| `ExecuteInspect` | `public void ExecuteInspect()` | method |
| `ResetChanges` | `public void ResetChanges()` | method |
| `IsThereAnyChanges` | `public bool IsThereAnyChanges()` | method |
| `ApplyChanges` | `public void ApplyChanges()` | method |
| `DescriptionText` | `public string DescriptionText` | property |
| `HowToLearnText` | `public string HowToLearnText` | property |
| `HowToLearnTitle` | `public string HowToLearnTitle` | property |
| `AttributesText` | `public string AttributesText` | property |
| `CanAddFocus` | `public bool CanAddFocus` | property |
| `CanLearnSkill` | `public bool CanLearnSkill` | property |
| `NextLevelLearningRateText` | `public string NextLevelLearningRateText` | property |
| `NextLevelCostText` | `public string NextLevelCostText` | property |
| `ProgressHint` | `public BasicTooltipViewModel ProgressHint` | property |
| `SkillXPHint` | `public BasicTooltipViewModel SkillXPHint` | property |
| `AddFocusHint` | `public HintViewModel AddFocusHint` | property |
| `LearningLimitTooltip` | `public BasicTooltipViewModel LearningLimitTooltip` | property |
| `LearningRateTooltip` | `public BasicTooltipViewModel LearningRateTooltip` | property |
| `ProgressPercentage` | `public double ProgressPercentage` | property |
| `LearningRate` | `public float LearningRate` | property |
| `CurrentSkillXP` | `public int CurrentSkillXP` | property |
| `NextLevel` | `public int NextLevel` | property |
| `FullLearningRateLevel` | `public int FullLearningRateLevel` | property |
| `XpRequiredForNextLevel` | `public int XpRequiredForNextLevel` | property |
| `NumOfUnopenedPerks` | `public int NumOfUnopenedPerks` | property |
| `ProgressText` | `public string ProgressText` | property |
| `FocusCostText` | `public string FocusCostText` | property |
| `MBBindingList` | `public MBBindingList<PerkVM>Perks` | property |
| `MBBindingList` | `public MBBindingList<BindingListStringItem>SkillEffects` | property |
| `MaxLevel` | `public int MaxLevel` | property |
| `CurrentLearningRateText` | `public string CurrentLearningRateText` | property |
| `CurrentFocusLevel` | `public int CurrentFocusLevel` | property |
| `AddFocusText` | `public string AddFocusText` | property |
| `SkillId` | `public string SkillId` | property |
| `IsInspected` | `public bool IsInspected` | property |
| `NameText` | `public string NameText` | property |
| `Level` | `public int Level` | property |
| `MAX_SKILL_LEVEL` | `public const int MAX_SKILL_LEVEL` | field |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AttributeBoundSkillItemVM](../AttributeBoundSkillItemVM)
- [same namespace CharacterAttributeItemVM](../CharacterAttributeItemVM)
- [same namespace CharacterDeveloperHeroItemVM](../CharacterDeveloperHeroItemVM)
- [same namespace CharacterDeveloperVM](../CharacterDeveloperVM)
