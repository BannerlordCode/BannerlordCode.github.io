---
title: "CharacterDeveloperHeroItemVM"
description: "CharacterDeveloperHeroItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 42 exposed members (14 methods, 27 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/CharacterDeveloperHeroItemVM.cs."
---
# CharacterDeveloperHeroItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CharacterDeveloperHeroItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/CharacterDeveloperHeroItemVM.cs`

## Overview

CharacterDeveloperHeroItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/CharacterDeveloperHeroItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is CharacterDeveloperHeroItemVM → ViewModel. It exposes 42 public/protected members: 14 methods, 27 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterDeveloperHeroItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper) the module directory; inheritance chain CharacterDeveloperHeroItemVM → ViewModel. The surface is property-led (properties 27/42, methods 14/42), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/CharacterDeveloperHeroItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `HeroDeveloper` | `public HeroDeveloper HeroDeveloper` | property |
| `Hero` | `public Hero Hero` | property |
| `OrgUnspentFocusPoints` | `public int OrgUnspentFocusPoints` | property |
| `OrgUnspentAttributePoints` | `public int OrgUnspentAttributePoints` | property |
| `IReadOnlyPropertyOwner` | `public IReadOnlyPropertyOwner<CharacterAttribute>CharacterAttributes` | property |
| `CharacterDeveloperHeroItemVM` | `public CharacterDeveloperHeroItemVM(Hero hero, Action onPerkSelection)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteStopInspectingCurrentAttribute` | `public void ExecuteStopInspectingCurrentAttribute()` | method |
| `RefreshCharacterValues` | `public void RefreshCharacterValues()` | method |
| `RefreshPerksOfSkill` | `public void RefreshPerksOfSkill(SkillObject skill)` | method |
| `ResetChanges` | `public void ResetChanges(bool isCancel)` | method |
| `ApplyChanges` | `public void ApplyChanges()` | method |
| `SetCurrentSkill` | `public void SetCurrentSkill(SkillVM skill)` | method |
| `IsThereAnyChanges` | `public bool IsThereAnyChanges()` | method |
| `GetRequiredFocusPointsToAddFocusWithCurrentFocus` | `public int GetRequiredFocusPointsToAddFocusWithCurrentFocus(SkillObject skill)` | method |
| `CanAddFocusToSkillWithFocusAmount` | `public bool CanAddFocusToSkillWithFocusAmount(int currentFocusAmount)` | method |
| `IsSkillMaxAmongOtherSkills` | `public bool IsSkillMaxAmongOtherSkills(SkillVM skill)` | method |
| `GetNameWithNumOfUnopenedPerks` | `public string GetNameWithNumOfUnopenedPerks()` | method |
| `GetNumberOfUnselectedPerks` | `public int GetNumberOfUnselectedPerks()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `MBBindingList` | `public MBBindingList<SkillVM>Skills` | property |
| `MBBindingList` | `public MBBindingList<StringPairItemVM>CharacterStats` | property |
| `MBBindingList` | `public MBBindingList<CharacterAttributeItemVM>Attributes` | property |
| `MBBindingList` | `public MBBindingList<EncyclopediaTraitItemVM>Traits` | property |
| `PerkSelection` | `public PerkSelectionVM PerkSelection` | property |
| `CurrentSkill` | `public SkillVM CurrentSkill` | property |
| `CurrentInspectedAttribute` | `public CharacterAttributeItemVM CurrentInspectedAttribute` | property |
| `FocusPointsText` | `public string FocusPointsText` | property |
| `CurrentCharacterLevelLbl` | `public string CurrentCharacterLevelLbl` | property |
| `LevelProgressText` | `public string LevelProgressText` | property |
| `HeroCharacter` | `public HeroViewModel HeroCharacter` | property |
| `IsInspectingAnAttribute` | `public bool IsInspectingAnAttribute` | property |
| `LevelProgressPercentage` | `public int LevelProgressPercentage` | property |
| `CurrentTotalXp` | `public int CurrentTotalXp` | property |
| `XpRequiredForNextLevel` | `public int XpRequiredForNextLevel` | property |
| `UnspentCharacterPoints` | `public int UnspentCharacterPoints` | property |
| `UnspentAttributePoints` | `public int UnspentAttributePoints` | property |
| `LevelHint` | `public HintViewModel LevelHint` | property |
| `HeroNameText` | `public string HeroNameText` | property |
| `HeroInfoText` | `public string HeroInfoText` | property |
| `HeroNextLevelText` | `public string HeroNextLevelText` | property |
| `HasExtraSkills` | `public bool HasExtraSkills` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AttributeBoundSkillItemVM](../AttributeBoundSkillItemVM)
- [same namespace CharacterAttributeItemVM](../CharacterAttributeItemVM)
- [same namespace CharacterDeveloperVM](../CharacterDeveloperVM)
- [same namespace FocusAddedByPlayerEvent](../FocusAddedByPlayerEvent)
