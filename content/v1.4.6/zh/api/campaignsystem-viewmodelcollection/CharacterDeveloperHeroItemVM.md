---
title: "CharacterDeveloperHeroItemVM"
description: "CharacterDeveloperHeroItemVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 42 个（方法 14、属性 27、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/CharacterDeveloperHeroItemVM.cs。"
---
# CharacterDeveloperHeroItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CharacterDeveloperHeroItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/CharacterDeveloperHeroItemVM.cs`

## 概述

CharacterDeveloperHeroItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/CharacterDeveloperHeroItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 CharacterDeveloperHeroItemVM → ViewModel。public/protected 成员共 42 个：14 方法、27 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CharacterDeveloperHeroItemVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper），继承链 CharacterDeveloperHeroItemVM → ViewModel。成员构成以属性为主（属性 27/42，方法 14/42），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/CharacterDeveloperHeroItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `HeroDeveloper` | `public HeroDeveloper HeroDeveloper` | 属性 |
| `Hero` | `public Hero Hero` | 属性 |
| `OrgUnspentFocusPoints` | `public int OrgUnspentFocusPoints` | 属性 |
| `OrgUnspentAttributePoints` | `public int OrgUnspentAttributePoints` | 属性 |
| `IReadOnlyPropertyOwner` | `public IReadOnlyPropertyOwner<CharacterAttribute>CharacterAttributes` | 属性 |
| `CharacterDeveloperHeroItemVM` | `public CharacterDeveloperHeroItemVM(Hero hero, Action onPerkSelection)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ExecuteStopInspectingCurrentAttribute` | `public void ExecuteStopInspectingCurrentAttribute()` | 方法 |
| `RefreshCharacterValues` | `public void RefreshCharacterValues()` | 方法 |
| `RefreshPerksOfSkill` | `public void RefreshPerksOfSkill(SkillObject skill)` | 方法 |
| `ResetChanges` | `public void ResetChanges(bool isCancel)` | 方法 |
| `ApplyChanges` | `public void ApplyChanges()` | 方法 |
| `SetCurrentSkill` | `public void SetCurrentSkill(SkillVM skill)` | 方法 |
| `IsThereAnyChanges` | `public bool IsThereAnyChanges()` | 方法 |
| `GetRequiredFocusPointsToAddFocusWithCurrentFocus` | `public int GetRequiredFocusPointsToAddFocusWithCurrentFocus(SkillObject skill)` | 方法 |
| `CanAddFocusToSkillWithFocusAmount` | `public bool CanAddFocusToSkillWithFocusAmount(int currentFocusAmount)` | 方法 |
| `IsSkillMaxAmongOtherSkills` | `public bool IsSkillMaxAmongOtherSkills(SkillVM skill)` | 方法 |
| `GetNameWithNumOfUnopenedPerks` | `public string GetNameWithNumOfUnopenedPerks()` | 方法 |
| `GetNumberOfUnselectedPerks` | `public int GetNumberOfUnselectedPerks()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `MBBindingList` | `public MBBindingList<SkillVM>Skills` | 属性 |
| `MBBindingList` | `public MBBindingList<StringPairItemVM>CharacterStats` | 属性 |
| `MBBindingList` | `public MBBindingList<CharacterAttributeItemVM>Attributes` | 属性 |
| `MBBindingList` | `public MBBindingList<EncyclopediaTraitItemVM>Traits` | 属性 |
| `PerkSelection` | `public PerkSelectionVM PerkSelection` | 属性 |
| `CurrentSkill` | `public SkillVM CurrentSkill` | 属性 |
| `CurrentInspectedAttribute` | `public CharacterAttributeItemVM CurrentInspectedAttribute` | 属性 |
| `FocusPointsText` | `public string FocusPointsText` | 属性 |
| `CurrentCharacterLevelLbl` | `public string CurrentCharacterLevelLbl` | 属性 |
| `LevelProgressText` | `public string LevelProgressText` | 属性 |
| `HeroCharacter` | `public HeroViewModel HeroCharacter` | 属性 |
| `IsInspectingAnAttribute` | `public bool IsInspectingAnAttribute` | 属性 |
| `LevelProgressPercentage` | `public int LevelProgressPercentage` | 属性 |
| `CurrentTotalXp` | `public int CurrentTotalXp` | 属性 |
| `XpRequiredForNextLevel` | `public int XpRequiredForNextLevel` | 属性 |
| `UnspentCharacterPoints` | `public int UnspentCharacterPoints` | 属性 |
| `UnspentAttributePoints` | `public int UnspentAttributePoints` | 属性 |
| `LevelHint` | `public HintViewModel LevelHint` | 属性 |
| `HeroNameText` | `public string HeroNameText` | 属性 |
| `HeroInfoText` | `public string HeroInfoText` | 属性 |
| `HeroNextLevelText` | `public string HeroNextLevelText` | 属性 |
| `HasExtraSkills` | `public bool HasExtraSkills` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AttributeBoundSkillItemVM](../AttributeBoundSkillItemVM)
- [同命名空间 CharacterAttributeItemVM](../CharacterAttributeItemVM)
- [同命名空间 CharacterDeveloperVM](../CharacterDeveloperVM)
- [同命名空间 FocusAddedByPlayerEvent](../FocusAddedByPlayerEvent)
