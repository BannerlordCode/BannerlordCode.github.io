---
title: "CharacterDeveloperHeroItemVM"
description: "CharacterDeveloperHeroItemVM 的自动生成类参考。"
---
# CharacterDeveloperHeroItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterDeveloperHeroItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/CharacterDeveloperHeroItemVM.cs`

## 概述

`CharacterDeveloperHeroItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `HeroDeveloper` | `public HeroDeveloper HeroDeveloper { get; }` |
| `Hero` | `public Hero Hero { get; }` |
| `OrgUnspentFocusPoints` | `public int OrgUnspentFocusPoints { get; }` |
| `OrgUnspentAttributePoints` | `public int OrgUnspentAttributePoints { get; }` |
| `CharacterAttributes` | `public IReadOnlyPropertyOwner<CharacterAttribute> CharacterAttributes { get; }` |
| `Skills` | `public MBBindingList<SkillVM> Skills { get; set; }` |
| `CharacterStats` | `public MBBindingList<StringPairItemVM> CharacterStats { get; set; }` |
| `Attributes` | `public MBBindingList<CharacterAttributeItemVM> Attributes { get; set; }` |
| `Traits` | `public MBBindingList<EncyclopediaTraitItemVM> Traits { get; set; }` |
| `PerkSelection` | `public PerkSelectionVM PerkSelection { get; set; }` |
| `CurrentSkill` | `public SkillVM CurrentSkill { get; set; }` |
| `CurrentInspectedAttribute` | `public CharacterAttributeItemVM CurrentInspectedAttribute { get; set; }` |
| `FocusPointsText` | `public string FocusPointsText { get; set; }` |
| `LevelProgressText` | `public string LevelProgressText { get; set; }` |
| `HeroCharacter` | `public HeroViewModel HeroCharacter { get; set; }` |
| `IsInspectingAnAttribute` | `public bool IsInspectingAnAttribute { get; set; }` |
| `LevelProgressPercentage` | `public int LevelProgressPercentage { get; set; }` |
| `CurrentTotalSkill` | `public int CurrentTotalSkill { get; set; }` |
| `SkillPointsRequiredForCurrentLevel` | `public int SkillPointsRequiredForCurrentLevel { get; set; }` |
| `SkillPointsRequiredForNextLevel` | `public int SkillPointsRequiredForNextLevel { get; set; }` |
| `UnspentCharacterPoints` | `public int UnspentCharacterPoints { get; set; }` |
| `UnspentAttributePoints` | `public int UnspentAttributePoints { get; set; }` |
| `LevelHint` | `public HintViewModel LevelHint { get; set; }` |
| `HeroNameText` | `public string HeroNameText { get; set; }` |
| `HeroInfoText` | `public string HeroInfoText { get; set; }` |
| `HeroLevelText` | `public string HeroLevelText { get; set; }` |
| `HasExtraSkills` | `public bool HasExtraSkills { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 CharacterDeveloperHeroItemVM 实例
CharacterDeveloperHeroItemVM characterDeveloperHeroItemVM = ...;
characterDeveloperHeroItemVM.RefreshValues();
```

### ExecuteStopInspectingCurrentAttribute
`public void ExecuteStopInspectingCurrentAttribute()`

**用途 / Purpose:** 执行 stop inspecting current attribute 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 CharacterDeveloperHeroItemVM 实例
CharacterDeveloperHeroItemVM characterDeveloperHeroItemVM = ...;
characterDeveloperHeroItemVM.ExecuteStopInspectingCurrentAttribute();
```

### RefreshCharacterValues
`public void RefreshCharacterValues()`

**用途 / Purpose:** 使 character values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 CharacterDeveloperHeroItemVM 实例
CharacterDeveloperHeroItemVM characterDeveloperHeroItemVM = ...;
characterDeveloperHeroItemVM.RefreshCharacterValues();
```

### RefreshPerksOfSkill
`public void RefreshPerksOfSkill(SkillObject skill)`

**用途 / Purpose:** 使 perks of skill 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 CharacterDeveloperHeroItemVM 实例
CharacterDeveloperHeroItemVM characterDeveloperHeroItemVM = ...;
characterDeveloperHeroItemVM.RefreshPerksOfSkill(skill);
```

### ResetChanges
`public void ResetChanges(bool isCancel)`

**用途 / Purpose:** 将 changes 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 CharacterDeveloperHeroItemVM 实例
CharacterDeveloperHeroItemVM characterDeveloperHeroItemVM = ...;
characterDeveloperHeroItemVM.ResetChanges(false);
```

### ApplyChanges
`public void ApplyChanges()`

**用途 / Purpose:** 将 changes 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 CharacterDeveloperHeroItemVM 实例
CharacterDeveloperHeroItemVM characterDeveloperHeroItemVM = ...;
characterDeveloperHeroItemVM.ApplyChanges();
```

### SetCurrentSkill
`public void SetCurrentSkill(SkillVM skill)`

**用途 / Purpose:** 为 current skill 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CharacterDeveloperHeroItemVM 实例
CharacterDeveloperHeroItemVM characterDeveloperHeroItemVM = ...;
characterDeveloperHeroItemVM.SetCurrentSkill(skill);
```

### IsThereAnyChanges
`public bool IsThereAnyChanges()`

**用途 / Purpose:** 判断当前对象是否处于 there any changes 状态或条件。

```csharp
// 先通过子系统 API 拿到 CharacterDeveloperHeroItemVM 实例
CharacterDeveloperHeroItemVM characterDeveloperHeroItemVM = ...;
var result = characterDeveloperHeroItemVM.IsThereAnyChanges();
```

### GetRequiredFocusPointsToAddFocusWithCurrentFocus
`public int GetRequiredFocusPointsToAddFocusWithCurrentFocus(SkillObject skill)`

**用途 / Purpose:** 读取并返回当前对象中 required focus points to add focus with current focus 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterDeveloperHeroItemVM 实例
CharacterDeveloperHeroItemVM characterDeveloperHeroItemVM = ...;
var result = characterDeveloperHeroItemVM.GetRequiredFocusPointsToAddFocusWithCurrentFocus(skill);
```

### CanAddFocusToSkillWithFocusAmount
`public bool CanAddFocusToSkillWithFocusAmount(int currentFocusAmount)`

**用途 / Purpose:** 检查当前对象是否满足 add focus to skill with focus amount 的前置条件。

```csharp
// 先通过子系统 API 拿到 CharacterDeveloperHeroItemVM 实例
CharacterDeveloperHeroItemVM characterDeveloperHeroItemVM = ...;
var result = characterDeveloperHeroItemVM.CanAddFocusToSkillWithFocusAmount(0);
```

### IsSkillMaxAmongOtherSkills
`public bool IsSkillMaxAmongOtherSkills(SkillVM skill)`

**用途 / Purpose:** 判断当前对象是否处于 skill max among other skills 状态或条件。

```csharp
// 先通过子系统 API 拿到 CharacterDeveloperHeroItemVM 实例
CharacterDeveloperHeroItemVM characterDeveloperHeroItemVM = ...;
var result = characterDeveloperHeroItemVM.IsSkillMaxAmongOtherSkills(skill);
```

### GetNameWithNumOfUnopenedPerks
`public string GetNameWithNumOfUnopenedPerks()`

**用途 / Purpose:** 读取并返回当前对象中 name with num of unopened perks 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterDeveloperHeroItemVM 实例
CharacterDeveloperHeroItemVM characterDeveloperHeroItemVM = ...;
var result = characterDeveloperHeroItemVM.GetNameWithNumOfUnopenedPerks();
```

### GetNumberOfUnselectedPerks
`public int GetNumberOfUnselectedPerks()`

**用途 / Purpose:** 读取并返回当前对象中 number of unselected perks 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterDeveloperHeroItemVM 实例
CharacterDeveloperHeroItemVM characterDeveloperHeroItemVM = ...;
var result = characterDeveloperHeroItemVM.GetNumberOfUnselectedPerks();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CharacterDeveloperHeroItemVM 实例
CharacterDeveloperHeroItemVM characterDeveloperHeroItemVM = ...;
characterDeveloperHeroItemVM.OnFinalize();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CharacterDeveloperHeroItemVM characterDeveloperHeroItemVM = ...;
characterDeveloperHeroItemVM.RefreshValues();
```

## 参见

- [本区域目录](../)