---
title: "CharacterCreationGainedSkillItemVM"
description: "CharacterCreationGainedSkillItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 7 exposed members (1 methods, 5 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationGainedSkillItemVM.cs."
---
# CharacterCreationGainedSkillItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CharacterCreationGainedSkillItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationGainedSkillItemVM.cs`

## Overview

CharacterCreationGainedSkillItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationGainedSkillItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is CharacterCreationGainedSkillItemVM → ViewModel. It exposes 7 public/protected members: 1 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterCreationGainedSkillItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation) the module directory; inheritance chain CharacterCreationGainedSkillItemVM → ViewModel. The surface is property-led (properties 5/7, methods 1/7), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationGainedSkillItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SkillObj` | `public SkillObject SkillObj` | property |
| `CharacterCreationGainedSkillItemVM` | `public CharacterCreationGainedSkillItemVM(SkillObject skill)` | constructor |
| `SetValue` | `public void SetValue(int gainedFromOtherStages, int gainedFromCurrentStage)` | method |
| `SkillId` | `public string SkillId` | property |
| `Skill` | `public EncyclopediaSkillVM Skill` | property |
| `HasIncreasedInCurrentStage` | `public bool HasIncreasedInCurrentStage` | property |
| `MBBindingList` | `public MBBindingList<BoolItemWithActionVM>FocusPointGainList` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CharacterCreationClanNamingStageVM](../CharacterCreationClanNamingStageVM)
- [same namespace CharacterCreationCultureFeatVM](../CharacterCreationCultureFeatVM)
- [same namespace CharacterCreationCultureStageVM](../CharacterCreationCultureStageVM)
- [same namespace CharacterCreationCultureVM](../CharacterCreationCultureVM)
